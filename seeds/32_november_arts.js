'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('november_arts').del()
    .then(function () {
      // Inserts seed entries
      return knex('november_arts').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/thicket-no-2-1990.jpg',
          title: 'Thicket No. 2',
          artist: 'Roni Horn',
          year: '1990',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 16, 21 ],
            "thursday": [ 4, 9, 15, 20 ],
            "friday": [ 3, 8, 14, 19 ],
            "saturday": [ 2, 7, 13, 20 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/colour-as-a-shadow-2005.jpg',
          title: 'Colour as a Shadow',
          artist: 'Katsuhito Nishikawa',
          year: '2005',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 16, 21 ],
            "friday": [ 4, 9, 15, 20 ],
            "saturday": [ 3, 8, 14, 19 ],
            "sunday": [ 2, 7, 13, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/seascape-north-atlantic-ocean-cape-breton-1996.jpg',
          title: 'Seascape: North Atlantic Ocean, Cape Breton',
          artist: 'Hiroshi Sugimoto',
          year: '1996',
          rule: {
            "monday": [ 2, 7, 13, 20 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 16, 21 ],
            "saturday": [ 4, 9, 15, 20 ],
            "sunday": [ 3, 8, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/painting-06-13-2006.jpg',
          title: 'Painting #06-13',
          artist: 'Rudolf de Crignis',
          year: '2006',
          rule: {
            "monday": [ 3, 8, 14, 19 ],
            "tuesday": [ 2, 7, 13, 20 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 16, 21 ],
            "sunday": [ 4, 9, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/12-part-line-painting-1984.jpg',
          title: '12 Part Line Painting',
          artist: 'Alan Charlton',
          year: '1984',
          rule: {
            "monday": [ 4, 9, 15, 20 ],
            "tuesday": [ 3, 8, 14, 19 ],
            "wednesday": [ 2, 7, 13, 20 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/pintura-1972.jpg',
          title: 'Pintura',
          artist: 'Fernando Calhau',
          year: '1972',
          rule: {
            "monday": [ 5, 10, 16, 21 ],
            "tuesday": [ 4, 9, 15, 20 ],
            "wednesday": [ 3, 8, 14, 19 ],
            "thursday": [ 2, 7, 13, 20 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/bivest-1-1965.jpg',
          title: 'Bivest + 1',
          artist: 'Gianni Piacentino',
          year: '1965',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 16, 21 ],
            "thursday": [ 4, 9, 15, 20 ],
            "friday": [ 3, 8, 14, 21 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-no-5-1974.jpg',
          title: 'Untitled No. 5',
          artist: 'Michael Heizer',
          year: '1974',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 16, 21 ],
            "friday": [ 4, 9, 15, 20 ],
            "saturday": [ 3, 8, 14, 21 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-2001.jpg',
          title: 'Untitled',
          artist: 'Olivier Mosset',
          year: '2001',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 16, 21 ],
            "saturday": [ 4, 9, 15, 20 ],
            "sunday": [ 3, 8, 14, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/deep-rhythm-of-lights-1975.jpg',
          title: 'Deep Rhythm of Lights',
          artist: 'Kishio Suga',
          year: '1975',
          rule: {
            "monday": [ 3, 8, 14, 21 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 16, 21 ],
            "sunday": [ 4, 9, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1986.jpg',
          title: 'Untitled',
          artist: 'Fred Sandback',
          year: '1986',
          rule: {
            "monday": [ 4, 9, 15, 20 ],
            "tuesday": [ 3, 8, 14, 21 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-whole-soul-summed-up-1979.jpg',
          title: 'The Whole Soul Summed Up',
          artist: 'Christopher Wilmarth',
          year: '1979',
          rule: {
            "monday": [ 5, 10, 16, 21 ],
            "tuesday": [ 4, 9, 15, 20 ],
            "wednesday": [ 3, 8, 14, 21 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/yellow-painting-14-1995.jpg',
          title: 'Yellow Painting #14',
          artist: 'Joseph Marioni',
          year: '1995',
          rule: {
            "monday": [ 6, 11, 17, 22 ],
            "tuesday": [ 5, 10, 16, 21 ],
            "wednesday": [ 4, 9, 15, 20 ],
            "thursday": [ 3, 8, 14, 21 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1993.jpg',
          title: 'Untitled',
          artist: 'Gunter Umberg',
          year: '1993',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 16, 21 ],
            "friday": [ 4, 9, 15, 22 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/step-by-step-2002.jpg',
          title: 'Step by Step',
          artist: 'Richard Tuttle',
          year: '2002',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 16, 21 ],
            "saturday": [ 4, 9, 15, 22 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/vii-15-din-14-1989.jpg',
          title: 'VII 15 Din 14',
          artist: 'Hanne Darboven',
          year: '1989',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 16, 21 ],
            "sunday": [ 4, 9, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/d-finition-m-thode-505-lettre-au-docteur-barnes-2010.jpg',
          title: 'dé-finition/méthode #505: lettre au docteur barnes',
          artist: 'Claude Rutault',
          year: '2010',
          rule: {
            "monday": [ 4, 9, 15, 22 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-712-7ft-x-7ft-1978.jpg',
          title: 'Untitled, 712, 7ft x 7ft',
          artist: 'Robert Swain',
          year: '1978',
          rule: {
            "monday": [ 5, 10, 16, 21 ],
            "tuesday": [ 4, 9, 15, 22 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/green-portrait-9.jpg',
          title: 'Green Portrait #9',
          artist: 'Phil Sims',
          year: '?',
          rule: {
            "monday": [ 6, 11, 17, 22 ],
            "tuesday": [ 5, 10, 16, 21 ],
            "wednesday": [ 4, 9, 15, 22 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/as-if-to-1992.jpg',
          title: 'As, If, To',
          artist: 'Peter Downsbrough',
          year: '1992',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 16, 21 ],
            "thursday": [ 4, 9, 15, 22 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/stanza-azzurra-2006.jpg',
          title: 'Stanza azzurra',
          artist: 'Ettore Spalletti',
          year: '2006',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 16, 23 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/portrait-1993.jpg',
          title: 'Portrait',
          artist: 'Imi Knoebel',
          year: '1993',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 16, 23 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/la-maison-de-la-celle-saint-cloud-1974.jpg',
          title: 'La Maison de La Celle-Saint-Cloud',
          artist: 'Jean-Pierre Raynaud',
          year: '1974',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/barcelona-7-1989.jpg',
          title: 'Barcelona 7',
          artist: 'Larry Bell',
          year: '1989',
          rule: {
            "monday": [ 5, 10, 16, 23 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/maleri-1964.jpg',
          title: 'Maleri',
          artist: 'Jan Groth',
          year: '1964',
          rule: {
            "monday": [ 6, 11, 17, 22 ],
            "tuesday": [ 5, 10, 16, 23 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/for-pearl-1970(1).jpg',
          title: 'For Pearl',
          artist: 'Brice Marden',
          year: '1970',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 16, 23 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/photo-souvenir-1-carr-1-cercle-4-triangles-hauts-reliefs-situ-s-h-travail-situ-2010.jpg',
          title: 'Photo-souvenir: 1 carré = 1 cercle + 4 triangles, Hauts-reliefs situés H, travail situé',
          artist: 'Daniel Buren',
          year: '2010',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 16, 23 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/sem-titulo-1983.jpg',
          title: 'Sem titulo',
          artist: 'Angelo de Sousa',
          year: '1983',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 24 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/28-septembre-1984-1992.jpg',
          title: '28 septembre 1984',
          artist: 'Michel Parmentier',
          year: '1992',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 24 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/always-now-1981.jpg',
          title: 'Always Now',
          artist: 'Tess Jaray',
          year: '1981',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/tudy-attic-series-xiv-1991.jpg',
          title: 'tudy Attic Series XIV',
          artist: 'Robert Mangold',
          year: '1991',
          rule: {
            "monday": [ 6, 11, 17, 24 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/schema-luminoso-variabile-rr66-1969.jpg',
          title: 'Schema luminoso variabile RR66',
          artist: 'Grazia Varisco',
          year: '1969',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 24 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1995 (1).jpg',
          title: 'Untitled',
          artist: 'James Licini',
          year: '1995',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 24 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/imprints-of-a-no-50-paintbrush-repeated-at-regular-intervals-of-30-cm-1989.jpg',
          title: 'Imprints of a No. 50 Paintbrush Repeated at Regular Intervals of 30 cm.',
          artist: 'Niele Toroni',
          year: '1989',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 24 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1970-9.jpg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: '1970',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 25 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1974.jpg',
          title: 'Untitled',
          artist: 'Robert Grosvenor',
          year: '1974',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 25 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/island-no-1p-1967.jpg',
          title: 'Island No. 1p',
          artist: 'Frank Stella',
          year: '1967',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/w-ix-2006.jpg',
          title: 'W IX',
          artist: 'Joachim Bandau',
          year: '2006',
          rule: {
            "monday": [ 7, 12, 18, 25 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/sun-island-1985.jpg',
          title: 'Sun & Island',
          artist: 'Nanda Vigo',
          year: '1985',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 25 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/last-tangle-1976.jpg',
          title: 'Last Tangle',
          artist: 'Leo Valledor',
          year: '1976',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 25 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/mile-long-drawing.jpg',
          title: 'Mile Long Drawing',
          artist: 'Walter De Maria',
          year: '?',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 25 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/unknown-title.jpg',
          title: 'unknown title',
          artist: 'Roman Cotosman',
          year: '?',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 26 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/leeward-traffic-1966.jpg',
          title: 'Leeward Traffic',
          artist: 'Robert Huot',
          year: '1966',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 26 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/interval-2004.jpg',
          title: 'Interval',
          artist: 'John McCracken',
          year: '2004',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/aqua-same-1962.jpg',
          title: 'Aqua Same',
          artist: 'Walter Darby Bannard',
          year: '1960',
          rule: {
            "monday": [ 8, 13, 19, 26 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/castle-cccxxxiii-15-7-01-2001.jpg',
          title: 'Castle CCCXXXIII 15.7.01',
          artist: 'Bob Law',
          year: '2001',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 26 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/rouge-ocre-bleu-vert-1978.jpg',
          title: 'Rouge, Ocre, Bleu, Vert',
          artist: 'Yves Gaucher',
          year: '1978',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 26 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/serielles-1970.jpg',
          title: 'Serielles',
          artist: 'Victor Bonato',
          year: '1970',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 26 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/diagonal-of-personal-ecstasy-the-diagonal-of-may-25-1963-to-constantin-brancusi-1963.jpg',
          title: 'Diagonal of Personal Ecstasy (the Diagonal of May 25, 1963, to Constantin Brancusi)',
          artist: 'Dan Flavin',
          year: '1963',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 27 ],
            "saturday": [ 15, 20, 26, 1 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/print-4-1967.jpg',
          title: 'Print 4',
          artist: 'Bernard Cohen',
          year: '1967',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 27 ],
            "sunday": [ 15, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/wake-1965.jpg',
          title: 'Wake',
          artist: 'Marc Vaux',
          year: '1965',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/laser-1974.jpg',
          title: 'Laser',
          artist: 'Jef Verheyen',
          year: '1974',
          rule: {
            "monday": [ 9, 14, 20, 27 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/black-painting-indigo-violet-vi-1969.jpg',
          title: 'Black Painting, Indigo Violet VI',
          artist: 'Ralph Hotere',
          year: '1969',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 27 ],
            "wednesday": [ 15, 20, 26, 1 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-ring-with-light-1966.jpg',
          title: 'Untitled (Ring with Light)',
          artist: 'Robert Morris',
          year: '1969',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 27 ],
            "thursday": [ 15, 20, 26, 1 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/folquer-1972.jpg',
          title: 'Folquer',
          artist: 'Joan Hernandez Pijuan',
          year: '1972',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 27 ],
            "friday": [ 15, 20, 26, 1 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/fold-1966-2(1).jpg',
          title: 'Fold',
          artist: 'Charlotte Posenenske',
          year: '1966',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 28 ],
            "saturday": [ 16, 21, 27, 2 ],
            "sunday": [ 15, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/superficie-argento-1973.jpg',
          title: 'Superficie Argento',
          artist: 'Enrico Castellani',
          year: '1973',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 28 ],
            "sunday": [ 16, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/prism-1984.jpg',
          title: 'Prism',
          artist: 'Frederic Matys Thursz',
          year: '1984',
          rule: {
            "monday": [ 16, 21, 27, 2 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1959.jpg',
          title: 'Untitled',
          artist: 'Robert Ryman',
          year: '1959',
          rule: {
            "monday": [ 10, 15, 21, 28 ],
            "tuesday": [ 16, 21, 27, 2 ],
            "wednesday": [ 15, 20, 26, 1 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/anomalia-1969.jpg',
          title: 'Anomalia',
          artist: 'Rodolfo Arico',
          year: '1969',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 28 ],
            "wednesday": [ 16, 21, 27, 2 ],
            "thursday": [ 15, 20, 26, 1 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/egg-on-plate-with-knife-fork-and-spoon-1964.jpg',
          title: 'Egg on Plate with Knife, Fork, and Spoon',
          artist: 'Alex Hay',
          year: '1964',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 28 ],
            "thursday": [ 16, 21, 27, 2 ],
            "friday": [ 15, 20, 26, 1 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/sex-symbol-1961.jpg',
          title: 'Sex Symbol',
          artist: 'Jo Baer',
          year: '1961',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 28 ],
            "friday": [ 16, 21, 27, 2 ],
            "saturday": [ 15, 20, 26, 1 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/bet-you.jpg',
          title: 'Bet You',
          artist: 'Lyman Kipp',
          year: '?',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 17, 24, 29 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 29 ],
            "saturday": [ 17, 22, 28, 3 ],
            "sunday": [ 16, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/light-orange-with-light-green-august-1989-1989.jpg',
          title: 'Light Orange with Light Green, August 1989',
          artist: 'Peter Joseph',
          year: '1989',
          rule: {
            "monday": [ 16, 21, 27, 2 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 17, 24, 29 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 29 ],
            "sunday": [ 17, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/viridian-1974.jpg',
          title: 'Viridian',
          artist: 'Marcia Hafif',
          year: '1974',
          rule: {
            "monday": [ 17, 22, 28, 3 ],
            "tuesday": [ 16, 21, 27, 2 ],
            "wednesday": [ 15, 20, 26, 1 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 17, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/arc-bands-1990.jpg',
          title: 'Arc Bands',
          artist: 'Sol LeWitt',
          year: '1990',
          rule: {
            "monday": [ 11, 16, 22, 29 ],
            "tuesday": [ 17, 22, 28, 3 ],
            "wednesday": [ 16, 21, 27, 2 ],
            "thursday": [ 15, 20, 26, 1 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 17, 24, 29 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/early-1967.jpg',
          title: 'Early',
          artist: 'James Bishop',
          year: '1967',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 29 ],
            "wednesday": [ 17, 22, 28, 3 ],
            "thursday": [ 16, 21, 27, 2 ],
            "friday": [ 15, 20, 26, 1 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 17, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/settlement-magenta-1980.jpg',
          title: 'Settlement Magenta',
          artist: 'Warren Rohrer',
          year: '1980',
          rule: {
            "monday": [ 13, 17, 24, 29 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 29 ],
            "thursday": [ 17, 22, 28, 3 ],
            "friday": [ 16, 21, 27, 2 ],
            "saturday": [ 15, 20, 26, 1 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1998.jpg',
          title: 'Untitled',
          artist: 'Moshe Kupferman',
          year: '1998',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 17, 24, 29 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 29 ],
            "friday": [ 17, 22, 28, 3 ],
            "saturday": [ 16, 21, 27, 2 ],
            "sunday": [ 15, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/3-sheets-from-9-x-5-konkret-1973.jpg',
          title: '3 sheets from "9 x 5 konkret"',
          artist: 'Francois Morellet',
          year: '1973',
          rule: {
            "monday": [ 16, 21, 27, 2 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 18, 25, 30 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 23, 30 ],
            "saturday": [ 18, 23, 29, 4 ],
            "sunday": [ 17, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/object-1960.jpg',
          title: 'Object',
          artist: 'Edward Krasinski',
          year: '1960',
          rule: {
            "monday": [ 17, 22, 28, 3 ],
            "tuesday": [ 16, 21, 27, 2 ],
            "wednesday": [ 15, 20, 26, 1 ],
            "thursday": [ 14, 18, 25, 30 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 23, 30 ],
            "sunday": [ 18, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 72,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/swirling-retina-1967.jpg',
          title: 'Swirling Retina',
          artist: 'Marcel Barbeau',
          year: '1967',
          rule: {
            "monday": [ 18, 23, 29, 4 ],
            "tuesday": [ 17, 22, 28, 3 ],
            "wednesday": [ 16, 21, 27, 2 ],
            "thursday": [ 15, 20, 26, 1 ],
            "friday": [ 14, 18, 25, 30 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 73,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/unknown-title-1.jpg',
          title: 'unknown title',
          artist: 'Martin Barre',
          year: '?',
          rule: {
            "monday": [ 12, 17, 23, 30 ],
            "tuesday": [ 18, 23, 29, 4 ],
            "wednesday": [ 17, 22, 28, 3 ],
            "thursday": [ 16, 21, 27, 2 ],
            "friday": [ 15, 20, 26, 1 ],
            "saturday": [ 14, 18, 25, 30 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 74,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1953.jpg',
          title: 'Untitled',
          artist: 'Herbert Zangs',
          year: '1953',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 23, 30 ],
            "wednesday": [ 18, 23, 29, 4 ],
            "thursday": [ 17, 22, 28, 3 ],
            "friday": [ 16, 21, 27, 2 ],
            "saturday": [ 15, 20, 26, 1 ],
            "sunday": [ 14, 18, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 75,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/corona-i-1995.jpg',
          title: 'Corona I',
          artist: 'Paul Brach',
          year: '1995',
          rule: {
            "monday": [ 14, 18, 25, 30 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 23, 30 ],
            "thursday": [ 18, 23, 29, 4 ],
            "friday": [ 17, 22, 28, 3 ],
            "saturday": [ 16, 21, 27, 2 ],
            "sunday": [ 15, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 76,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/table-piece-xxviii-1967.jpg',
          title: 'Table Piece XXVIII',
          artist: 'Anthony Caro',
          year: '1967',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 18, 25, 30 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 23, 30 ],
            "friday": [ 18, 23, 29, 4 ],
            "saturday": [ 17, 22, 28, 3 ],
            "sunday": [ 16, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 77,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/organ-of-cause-and-effect-iii-1986.jpg',
          title: 'Organ of Cause and Effect III',
          artist: 'Richard Artschwager',
          year: '1986',
          rule: {
            "monday": [ 17, 22, 28, 3 ],
            "tuesday": [ 16, 21, 27, 2 ],
            "wednesday": [ 15, 19, 26, 1 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 18, 24, 1 ],
            "saturday": [ 19, 24, 30, 5 ],
            "sunday": [ 18, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 78,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/colors-for-a-large-wall-1951.jpg',
          title: 'Colors for a Large Wall',
          artist: 'Ellsworth Kelly',
          year: '1951',
          rule: {
            "monday": [ 18, 23, 29, 4 ],
            "tuesday": [ 17, 22, 28, 3 ],
            "wednesday": [ 16, 21, 27, 2 ],
            "thursday": [ 15, 19, 26, 1 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 18, 24, 1 ],
            "sunday": [ 19, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 79,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/atlantique-ii-1991.jpg',
          title: 'Atlantique II',
          artist: 'Genevieve Asse',
          year: '1991',
          rule: {
            "monday": [ 19, 24, 30, 5 ],
            "tuesday": [ 18, 23, 29, 4 ],
            "wednesday": [ 17, 22, 28, 3 ],
            "thursday": [ 16, 21, 27, 2 ],
            "friday": [ 15, 19, 26, 1 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 80,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/18-1963-1963.jpg',
          title: '18-1963',
          artist: 'William Turnbull',
          year: '1963',
          rule: {
            "monday": [ 13, 18, 24, 1 ],
            "tuesday": [ 19, 24, 30, 5 ],
            "wednesday": [ 18, 23, 29, 4 ],
            "thursday": [ 17, 22, 28, 3 ],
            "friday": [ 16, 21, 27, 2 ],
            "saturday": [ 15, 19, 26, 1 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 81,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/parva-xxix-1993.jpg',
          title: 'Parva XXIX',
          artist: 'Anne Truitt',
          year: '1993',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 18, 24, 1 ],
            "wednesday": [ 19, 24, 30, 5 ],
            "thursday": [ 18, 23, 29, 4 ],
            "friday": [ 17, 22, 28, 3 ],
            "saturday": [ 16, 21, 27, 2 ],
            "sunday": [ 15, 19, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 82,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/coltrane-1970.jpg',
          title: 'Coltrane',
          artist: 'Ronald Bladen',
          year: '1970',
          rule: {
            "monday": [ 15, 19, 26, 1 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 18, 24, 1 ],
            "thursday": [ 19, 24, 30, 5 ],
            "friday": [ 18, 23, 29, 4 ],
            "saturday": [ 17, 22, 28, 3 ],
            "sunday": [ 16, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 83,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1.jpg',
          title: 'Untitled',
          artist: 'Mathias Goeritz',
          year: '?',
          rule: {
            "monday": [ 16, 21, 27, 2 ],
            "tuesday": [ 15, 19, 26, 1 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 18, 24, 1 ],
            "friday": [ 19, 24, 30, 5 ],
            "saturday": [ 18, 23, 29, 4 ],
            "sunday": [ 17, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 84,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1973.jpg',
          title: 'Untitled',
          artist: 'Johannes Jan Schoonhoven',
          year: '1973',
          rule: {
            "monday": [ 18, 23, 29, 4 ],
            "tuesday": [ 17, 22, 28, 3 ],
            "wednesday": [ 16, 20, 27, 2 ],
            "thursday": [ 15, 20, 26, 1 ],
            "friday": [ 14, 19, 25, 2 ],
            "saturday": [ 20, 25, 1, 6 ],
            "sunday": [ 19, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 85,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/source-1967.jpg',
          title: 'Source',
          artist: 'Tony Smith',
          year: '1967',
          rule: {
            "monday": [ 19, 24, 30, 5 ],
            "tuesday": [ 18, 23, 29, 4 ],
            "wednesday": [ 17, 22, 28, 3 ],
            "thursday": [ 16, 20, 27, 2 ],
            "friday": [ 15, 20, 26, 1 ],
            "saturday": [ 14, 19, 25, 2 ],
            "sunday": [ 20, 25, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 86,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1966-1.jpg',
          title: 'Untitled',
          artist: 'Gego',
          year: '1966',
          rule: {
            "monday": [ 20, 25, 1, 6 ],
            "tuesday": [ 19, 24, 30, 5 ],
            "wednesday": [ 18, 23, 29, 4 ],
            "thursday": [ 17, 22, 28, 3 ],
            "friday": [ 16, 20, 27, 2 ],
            "saturday": [ 15, 20, 26, 1 ],
            "sunday": [ 14, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 87,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-tree-1964.jpg',
          title: 'The Tree',
          artist: 'Agnes Martin',
          year: '1964',
          rule: {
            "monday": [ 14, 19, 25, 2 ],
            "tuesday": [ 20, 25, 1, 6 ],
            "wednesday": [ 19, 24, 30, 5 ],
            "thursday": [ 18, 23, 29, 4 ],
            "friday": [ 17, 22, 28, 3 ],
            "saturday": [ 16, 20, 27, 2 ],
            "sunday": [ 15, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 88,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-may-20-1950.jpg',
          title: 'Untitled (May 20)',
          artist: 'Myron Stout',
          year: '1950',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 19, 25, 2 ],
            "wednesday": [ 20, 25, 1, 6 ],
            "thursday": [ 19, 24, 30, 5 ],
            "friday": [ 18, 23, 29, 4 ],
            "saturday": [ 17, 22, 28, 3 ],
            "sunday": [ 16, 20, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 89,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/spazio-luce-1963.jpg',
          title: 'Spazio Luce',
          artist: 'Antonio Calderara',
          year: '1963',
          rule: {
            "monday": [ 16, 20, 27, 2 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 19, 25, 2 ],
            "thursday": [ 20, 25, 1, 6 ],
            "friday": [ 19, 24, 30, 5 ],
            "saturday": [ 18, 23, 29, 4 ],
            "sunday": [ 17, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 90,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1977.jpg',
          title: 'Untitled',
          artist: 'Ruth Vollmer',
          year: '1977',
          rule: {
            "monday": [ 17, 22, 28, 3 ],
            "tuesday": [ 16, 20, 27, 2 ],
            "wednesday": [ 15, 20, 26, 1 ],
            "thursday": [ 14, 19, 25, 2 ],
            "friday": [ 20, 25, 1, 6 ],
            "saturday": [ 19, 24, 30, 5 ],
            "sunday": [ 18, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 91,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/diario(2).jpg',
          title: 'Diario',
          artist: 'Bice Lazzari',
          year: '?',
          rule: {
            "monday": [ 19, 24, 30, 4 ],
            "tuesday": [ 18, 23, 29, 4 ],
            "wednesday": [ 17, 21, 28, 3 ],
            "thursday": [ 16, 21, 27, 2 ],
            "friday": [ 15, 20, 26, 3 ],
            "saturday": [ 21, 26, 2, 7 ],
            "sunday": [ 20, 25, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 92,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/number-15-1961.jpg',
          title: 'Number 15',
          artist: 'John McLaughlin',
          year: '1961',
          rule: {
            "monday": [ 20, 25, 1, 6 ],
            "tuesday": [ 19, 24, 30, 4 ],
            "wednesday": [ 18, 23, 29, 4 ],
            "thursday": [ 17, 21, 28, 3 ],
            "friday": [ 16, 21, 27, 2 ],
            "saturday": [ 15, 20, 26, 3 ],
            "sunday": [ 21, 26, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 93,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-2004.jpg',
          title: 'Untitled',
          artist: 'Tea Jorjadze',
          year: '2004',
          rule: {
            "monday": [ 21, 26, 2, 7 ],
            "tuesday": [ 20, 25, 1, 6 ],
            "wednesday": [ 19, 24, 30, 4 ],
            "thursday": [ 18, 23, 29, 4 ],
            "friday": [ 17, 21, 28, 3 ],
            "saturday": [ 16, 21, 27, 2 ],
            "sunday": [ 15, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 94,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/doug-joe-and-genevieve-from-the-garden-of-delights-1998.jpg',
          title: 'Doug, Joe and Genevieve (from The Garden of Delights)',
          artist: 'Inigo Manglano-Ovalle',
          year: '1998',
          rule: {
            "monday": [ 15, 20, 26, 3 ],
            "tuesday": [ 21, 26, 2, 7 ],
            "wednesday": [ 20, 25, 1, 6 ],
            "thursday": [ 19, 24, 30, 4 ],
            "friday": [ 18, 23, 29, 4 ],
            "saturday": [ 17, 21, 28, 3 ],
            "sunday": [ 16, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 95,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/eclipsed-time-1989-95.jpg',
          title: 'Eclipsed Time',
          artist: 'Maya Lin',
          year: '1989 - 1995',
          rule: {
            "monday": [ 16, 21, 27, 2 ],
            "tuesday": [ 15, 20, 26, 3 ],
            "wednesday": [ 21, 26, 2, 7 ],
            "thursday": [ 20, 25, 1, 6 ],
            "friday": [ 19, 24, 30, 4 ],
            "saturday": [ 18, 23, 29, 4 ],
            "sunday": [ 17, 21, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 96,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1994.jpg',
          title: 'Untitled',
          artist: 'Jessica Stockholder',
          year: '1994',
          rule: {
            "monday": [ 17, 21, 28, 3 ],
            "tuesday": [ 16, 21, 27, 2 ],
            "wednesday": [ 15, 20, 26, 3 ],
            "thursday": [ 21, 26, 2, 7 ],
            "friday": [ 20, 25, 1, 6 ],
            "saturday": [ 19, 24, 30, 4 ],
            "sunday": [ 18, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 97,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/my-colorful-family-1998.jpg',
          title: 'My Colorful Family',
          artist: 'Charles Long',
          year: '1998',
          rule: {
            "monday": [ 18, 23, 29, 4 ],
            "tuesday": [ 17, 21, 28, 3 ],
            "wednesday": [ 16, 21, 27, 2 ],
            "thursday": [ 15, 20, 26, 3 ],
            "friday": [ 21, 26, 2, 7 ],
            "saturday": [ 20, 25, 1, 6 ],
            "sunday": [ 19, 24, 30, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 98,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-warm-water-1988.jpg',
          title: '"Untitled" (Warm Water)',
          artist: 'Felix Gonzalez-Torres',
          year: '1988',
          rule: {
            "monday": [ 20, 25, 1, 5 ],
            "tuesday": [ 19, 24, 30, 5 ],
            "wednesday": [ 18, 22, 29, 4 ],
            "thursday": [ 17, 22, 28, 3 ],
            "friday": [ 16, 21, 27, 4 ],
            "saturday": [ 22, 27, 3, 8 ],
            "sunday": [ 21, 26, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 99,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-event-of-a-thread-2013.jpg',
          title: 'the event of a thread',
          artist: 'Ann Hamilton',
          year: '2013',
          rule: {
            "monday": [ 21, 26, 2, 7 ],
            "tuesday": [ 20, 25, 1, 5 ],
            "wednesday": [ 19, 24, 30, 5 ],
            "thursday": [ 18, 22, 29, 4 ],
            "friday": [ 17, 22, 28, 3 ],
            "saturday": [ 16, 21, 27, 4 ],
            "sunday": [ 22, 27, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 100,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/probably-best-seen-in-a-dark-room-with-the-t-v-on-1999.jpg',
          title: 'Probably Best Seen in a Dark Room with the T.V. On',
          artist: 'Tony Feher',
          year: '1999',
          rule: {
            "monday": [ 22, 27, 3, 8 ],
            "tuesday": [ 21, 26, 2, 7 ],
            "wednesday": [ 20, 25, 1, 5 ],
            "thursday": [ 19, 24, 30, 5 ],
            "friday": [ 18, 22, 29, 4 ],
            "saturday": [ 17, 22, 28, 3 ],
            "sunday": [ 16, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 101,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/hackney-road-drawing-2004.jpg',
          title: 'Hackney Road Drawing',
          artist: 'David Batchelor',
          year: '2004',
          rule: {
            "monday": [ 16, 21, 27, 4 ],
            "tuesday": [ 22, 27, 3, 8 ],
            "wednesday": [ 21, 26, 2, 7 ],
            "thursday": [ 20, 25, 1, 5 ],
            "friday": [ 19, 24, 30, 5 ],
            "saturday": [ 18, 22, 29, 4 ],
            "sunday": [ 17, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 102,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/cloud-gate-2004.jpg',
          title: 'Cloud Gate',
          artist: 'Anish Kapoor',
          year: '2004',
          rule: {
            "monday": [ 17, 22, 28, 3 ],
            "tuesday": [ 16, 21, 27, 4 ],
            "wednesday": [ 22, 27, 3, 8 ],
            "thursday": [ 21, 26, 2, 7 ],
            "friday": [ 20, 25, 1, 5 ],
            "saturday": [ 19, 24, 30, 5 ],
            "sunday": [ 18, 22, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 103,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/field-1989.jpg',
          title: 'Field',
          artist: 'Antony Gormley',
          year: '1989',
          rule: {
            "monday": [ 18, 22, 29, 4 ],
            "tuesday": [ 17, 22, 28, 3 ],
            "wednesday": [ 16, 21, 27, 4 ],
            "thursday": [ 22, 27, 3, 8 ],
            "friday": [ 21, 26, 2, 7 ],
            "saturday": [ 20, 25, 1, 5 ],
            "sunday": [ 19, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 104,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/if-the-shoe-fits-1981.jpg',
          title: 'If The Shoe Fits',
          artist: 'Richard Deacon',
          year: '1981',
          rule: {
            "monday": [ 19, 24, 30, 5 ],
            "tuesday": [ 18, 22, 29, 4 ],
            "wednesday": [ 17, 22, 28, 3 ],
            "thursday": [ 16, 21, 27, 4 ],
            "friday": [ 22, 27, 3, 8 ],
            "saturday": [ 21, 26, 2, 7 ],
            "sunday": [ 20, 25, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 105,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1994-2.jpg',
          title: 'Untitled',
          artist: 'Alison Wilding',
          year: '1994',
          rule: {
            "monday": [ 21, 26, 2, 6 ],
            "tuesday": [ 20, 25, 1, 6 ],
            "wednesday": [ 19, 23, 30, 5 ],
            "thursday": [ 18, 23, 29, 4 ],
            "friday": [ 17, 22, 28, 5 ],
            "saturday": [ 23, 28, 4, 9 ],
            "sunday": [ 22, 27, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 106,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/88-va-17-1988.jpg',
          title: '88. VA 17',
          artist: 'Jurgen Partenheimer',
          year: '1988',
          rule: {
            "monday": [ 22, 27, 3, 8 ],
            "tuesday": [ 21, 26, 2, 6 ],
            "wednesday": [ 20, 25, 1, 6 ],
            "thursday": [ 19, 23, 30, 5 ],
            "friday": [ 18, 23, 29, 4 ],
            "saturday": [ 17, 22, 28, 5 ],
            "sunday": [ 23, 28, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 107,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/a-little-cosmic-rhythm-2007.jpg',
          title: 'A Little Cosmic Rhythm',
          artist: 'Alice Aycock',
          year: '2007',
          rule: {
            "monday": [ 23, 28, 4, 9 ],
            "tuesday": [ 22, 27, 3, 8 ],
            "wednesday": [ 21, 26, 2, 6 ],
            "thursday": [ 20, 25, 1, 6 ],
            "friday": [ 19, 23, 30, 5 ],
            "saturday": [ 18, 23, 29, 4 ],
            "sunday": [ 17, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 108,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/particle-memory-1995.jpg',
          title: 'Particle Memory',
          artist: 'Lita Albuquerque',
          year: '1995',
          rule: {
            "monday": [ 17, 22, 28, 5 ],
            "tuesday": [ 23, 28, 4, 9 ],
            "wednesday": [ 22, 27, 3, 8 ],
            "thursday": [ 21, 26, 2, 6 ],
            "friday": [ 20, 25, 1, 6 ],
            "saturday": [ 19, 23, 30, 5 ],
            "sunday": [ 18, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 109,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/east-end-1980.jpg',
          title: 'East End',
          artist: 'Valerie Jaudon',
          year: '1980',
          rule: {
            "monday": [ 18, 23, 29, 4 ],
            "tuesday": [ 17, 22, 28, 5 ],
            "wednesday": [ 23, 28, 4, 9 ],
            "thursday": [ 22, 27, 3, 8 ],
            "friday": [ 21, 26, 2, 6 ],
            "saturday": [ 20, 25, 1, 6 ],
            "sunday": [ 19, 23, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 110,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/tt-1994.jpg',
          title: 'TT',
          artist: 'Sean Scully',
          year: '1994',
          rule: {
            "monday": [ 19, 23, 30, 5 ],
            "tuesday": [ 18, 23, 29, 4 ],
            "wednesday": [ 17, 22, 28, 5 ],
            "thursday": [ 23, 28, 4, 9 ],
            "friday": [ 22, 27, 3, 8 ],
            "saturday": [ 21, 26, 2, 6 ],
            "sunday": [ 20, 25, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 111,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/pom-pom-2006.jpg',
          title: 'Pom Pom',
          artist: 'Phyllida Barlow',
          year: '2006',
          rule: {
            "monday": [ 20, 25, 1, 6 ],
            "tuesday": [ 19, 23, 30, 5 ],
            "wednesday": [ 18, 23, 29, 4 ],
            "thursday": [ 17, 22, 28, 5 ],
            "friday": [ 23, 28, 4, 9 ],
            "saturday": [ 22, 27, 3, 8 ],
            "sunday": [ 21, 26, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 112,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/ladder-1981.jpg',
          title: 'Ladder',
          artist: 'Harmony Hammond',
          year: '1981',
          rule: {
            "monday": [ 22, 27, 3, 7 ],
            "tuesday": [ 21, 26, 2, 7 ],
            "wednesday": [ 20, 24, 1, 6 ],
            "thursday": [ 19, 24, 30, 5 ],
            "friday": [ 18, 23, 29, 6 ],
            "saturday": [ 24, 29, 5, 10 ],
            "sunday": [ 23, 28, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 113,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/ink-splash-2010.jpg',
          title: 'Ink Splash',
          artist: 'El Anatsui',
          year: '2010',
          rule: {
            "monday": [ 23, 28, 4, 9 ],
            "tuesday": [ 22, 27, 3, 7 ],
            "wednesday": [ 21, 26, 2, 7 ],
            "thursday": [ 20, 24, 1, 6 ],
            "friday": [ 19, 24, 30, 5 ],
            "saturday": [ 18, 23, 29, 6 ],
            "sunday": [ 24, 29, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 114,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/wrapped-and-differed-space-1975.jpg',
          title: 'Wrapped and Differed Space',
          artist: 'Kishio Suga',
          year: '1975',
          rule: {
            "monday": [ 24, 29, 5, 10 ],
            "tuesday": [ 23, 28, 4, 9 ],
            "wednesday": [ 22, 27, 3, 7 ],
            "thursday": [ 21, 26, 2, 7 ],
            "friday": [ 20, 24, 1, 6 ],
            "saturday": [ 19, 24, 30, 5 ],
            "sunday": [ 18, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 115,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/combinatory-system-1973-1.jpg',
          title: 'Combinatory system',
          artist: 'Florin Maxa',
          year: '1973',
          rule: {
            "monday": [ 18, 23, 29, 6 ],
            "tuesday": [ 24, 29, 5, 10 ],
            "wednesday": [ 23, 28, 4, 9 ],
            "thursday": [ 22, 27, 3, 7 ],
            "friday": [ 21, 26, 2, 7 ],
            "saturday": [ 20, 24, 1, 6 ],
            "sunday": [ 19, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 116,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-green-power-1975.jpg',
          title: 'Untitled/Green Power',
          artist: 'David Hammons',
          year: '1975',
          rule: {
            "monday": [ 19, 24, 30, 5 ],
            "tuesday": [ 18, 23, 29, 6 ],
            "wednesday": [ 24, 29, 5, 10 ],
            "thursday": [ 23, 28, 4, 9 ],
            "friday": [ 22, 27, 3, 7 ],
            "saturday": [ 21, 26, 2, 7 ],
            "sunday": [ 20, 24, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 117,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/phase-drawing-1-topology-14-1968.jpg',
          title: 'Phase - Drawing 1 (Topology 14)',
          artist: 'Nobuo Sekine',
          year: '1968',
          rule: {
            "monday": [ 20, 24, 1, 6 ],
            "tuesday": [ 19, 24, 30, 5 ],
            "wednesday": [ 18, 23, 29, 6 ],
            "thursday": [ 24, 29, 5, 10 ],
            "friday": [ 23, 28, 4, 9 ],
            "saturday": [ 22, 27, 3, 7 ],
            "sunday": [ 21, 26, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 118,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/five-marching-men-1985.jpg',
          title: 'Five Marching Men',
          artist: 'Bruce Nauman',
          year: '1985',
          rule: {
            "monday": [ 21, 26, 2, 7 ],
            "tuesday": [ 20, 24, 1, 6 ],
            "wednesday": [ 19, 24, 30, 5 ],
            "thursday": [ 18, 23, 29, 6 ],
            "friday": [ 24, 29, 5, 10 ],
            "saturday": [ 23, 28, 4, 9 ],
            "sunday": [ 22, 27, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 119,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/contraband-1969.jpg',
          title: 'Contraband',
          artist: 'Lynda Benglis',
          year: '1969',
          rule: {
            "monday": [ 23, 28, 4, 8 ],
            "tuesday": [ 22, 27, 3, 8 ],
            "wednesday": [ 21, 25, 2, 7 ],
            "thursday": [ 20, 25, 1, 6 ],
            "friday": [ 19, 24, 30, 7 ],
            "saturday": [ 25, 30, 6, 11 ],
            "sunday": [ 24, 29, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 120,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/interior-sphere-piece-1985.jpg',
          title: 'Interior Sphere Piece',
          artist: 'Jacqueline Winsor',
          year: '1985',
          rule: {
            "monday": [ 24, 29, 4, 10 ],
            "tuesday": [ 23, 28, 4, 8 ],
            "wednesday": [ 22, 27, 3, 8 ],
            "thursday": [ 21, 25, 2, 7 ],
            "friday": [ 20, 25, 1, 6 ],
            "saturday": [ 19, 24, 30, 7 ],
            "sunday": [ 25, 30, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 121,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/waferboard-4-1996.jpg',
          title: 'Waferboard 4',
          artist: 'Richard Tuttle',
          year: '1996',
          rule: {
            "monday": [ 25, 30, 6, 11 ],
            "tuesday": [ 24, 29, 4, 10 ],
            "wednesday": [ 23, 28, 4, 8 ],
            "thursday": [ 22, 27, 3, 8 ],
            "friday": [ 21, 25, 2, 7 ],
            "saturday": [ 20, 25, 1, 6 ],
            "sunday": [ 19, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 122,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/cutglass-7-1975.jpg',
          title: 'Cutglass 7',
          artist: 'Keith Sonnier',
          year: '1975',
          rule: {
            "monday": [ 19, 24, 30, 7 ],
            "tuesday": [ 25, 30, 6, 11 ],
            "wednesday": [ 24, 29, 4, 10 ],
            "thursday": [ 23, 28, 4, 8 ],
            "friday": [ 22, 27, 3, 8 ],
            "saturday": [ 21, 25, 2, 7 ],
            "sunday": [ 20, 25, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 123,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/i-part-of-sabine-d-region-southwest-mare-tranquilitatis-from-lithographs-based-on-geologic-maps-1972.jpg',
          title: 'I Part of Sabine D Region, Southwest Mare Tranquilitatis from Lithographs Based on Geologic Maps of Lunar Orbiter and Apollo Landing Sites',
          artist: 'Nancy Graves',
          year: '1972',
          rule: {
            "monday": [ 20, 25, 1, 6 ],
            "tuesday": [ 19, 24, 30, 7 ],
            "wednesday": [ 25, 30, 6, 11 ],
            "thursday": [ 24, 29, 4, 10 ],
            "friday": [ 23, 28, 4, 8 ],
            "saturday": [ 22, 27, 3, 8 ],
            "sunday": [ 21, 25, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 124,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/pittsburgh-1985.jpg',
          title: 'Pittsburgh',
          artist: 'Richard Serra',
          year: '1985',
          rule: {
            "monday": [ 21, 25, 2, 7 ],
            "tuesday": [ 20, 25, 1, 6 ],
            "wednesday": [ 19, 24, 30, 7 ],
            "thursday": [ 25, 30, 6, 11 ],
            "friday": [ 24, 29, 4, 10 ],
            "saturday": [ 23, 28, 4, 8 ],
            "sunday": [ 22, 27, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 125,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/24-yellow-columns-1982.jpg',
          title: '24 Yellow Columns',
          artist: 'Franz Erhard Walther',
          year: '1982',
          rule: {
            "monday": [ 22, 27, 3, 8 ],
            "tuesday": [ 21, 25, 2, 7 ],
            "wednesday": [ 20, 25, 1, 6 ],
            "thursday": [ 19, 24, 30, 7 ],
            "friday": [ 25, 30, 6, 11 ],
            "saturday": [ 24, 29, 4, 10 ],
            "sunday": [ 23, 28, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 126,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1969.jpg',
          title: 'Untitled',
          artist: 'Bill Bollinger',
          year: '1969',
          rule: {
            "monday": [ 24, 29, 5, 9 ],
            "tuesday": [ 23, 28, 4, 9 ],
            "wednesday": [ 22, 26, 3, 8 ],
            "thursday": [ 21, 26, 2, 7 ],
            "friday": [ 20, 25, 1, 8 ],
            "saturday": [ 26, 1, 7, 12 ],
            "sunday": [ 25, 30, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 127,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/black-painting-1972.jpg',
          title: 'Black Painting',
          artist: 'Gary Kuehn',
          year: '1972',
          rule: {
            "monday": [ 25, 30, 5, 11 ],
            "tuesday": [ 24, 29, 5, 9 ],
            "wednesday": [ 23, 28, 4, 9 ],
            "thursday": [ 22, 26, 3, 8 ],
            "friday": [ 21, 26, 2, 7 ],
            "saturday": [ 20, 25, 1, 8 ],
            "sunday": [ 26, 1, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 128,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/device-to-root-out-evil-1997.jpg',
          title: 'Device to Root Out Evil',
          artist: 'Dennis Oppenheim',
          year: '1997',
          rule: {
            "monday": [ 26, 1, 7, 12 ],
            "tuesday": [ 25, 30, 5, 11 ],
            "wednesday": [ 24, 29, 5, 9 ],
            "thursday": [ 23, 28, 4, 9 ],
            "friday": [ 22, 26, 3, 8 ],
            "saturday": [ 21, 26, 2, 7 ],
            "sunday": [ 20, 25, 1, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 129,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/dance-of-the-crows-2012.jpg',
          title: 'Dance of the Crows',
          artist: 'Fusun Onur',
          year: '2012',
          rule: {
            "monday": [ 20, 25, 1, 8 ],
            "tuesday": [ 26, 1, 7, 12 ],
            "wednesday": [ 25, 30, 5, 11 ],
            "thursday": [ 24, 29, 5, 9 ],
            "friday": [ 23, 28, 4, 9 ],
            "saturday": [ 22, 26, 3, 8 ],
            "sunday": [ 21, 26, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 130,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/pittura-n-4-1994.jpg',
          title: 'Pittura n° 4',
          artist: 'Pino Pinelli',
          year: '1994',
          rule: {
            "monday": [ 21, 26, 2, 7 ],
            "tuesday": [ 20, 25, 1, 8 ],
            "wednesday": [ 26, 1, 7, 12 ],
            "thursday": [ 25, 30, 5, 11 ],
            "friday": [ 24, 29, 5, 9 ],
            "saturday": [ 23, 28, 4, 9 ],
            "sunday": [ 22, 26, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 131,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1972-2.jpg',
          title: 'Untitled',
          artist: 'Richard Van Buren',
          year: '1972',
          rule: {
            "monday": [ 22, 26, 3, 8 ],
            "tuesday": [ 21, 26, 2, 7 ],
            "wednesday": [ 20, 25, 1, 8 ],
            "thursday": [ 26, 1, 7, 12 ],
            "friday": [ 25, 30, 5, 11 ],
            "saturday": [ 24, 29, 5, 9 ],
            "sunday": [ 23, 28, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 132,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/shadow-double-shadow-of-a-woman-1997.jpg',
          title: 'Shadow (Double Shadow of a Woman)',
          artist: 'Takamatsu Jiro',
          year: '1979',
          rule: {
            "monday": [ 23, 28, 4, 9 ],
            "tuesday": [ 22, 26, 3, 8 ],
            "wednesday": [ 21, 26, 2, 7 ],
            "thursday": [ 20, 25, 1, 8 ],
            "friday": [ 26, 1, 7, 12 ],
            "saturday": [ 25, 30, 5, 11 ],
            "sunday": [ 24, 29, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 133,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1966.jpg',
          title: 'Untitled',
          artist: 'Eva Hesse',
          year: '1966',
          rule: {
            "monday": [ 25, 30, 6, 10 ],
            "tuesday": [ 24, 29, 5, 10 ],
            "wednesday": [ 23, 27, 4, 9 ],
            "thursday": [ 22, 27, 3, 8 ],
            "friday": [ 21, 26, 2, 9 ],
            "saturday": [ 27, 2, 8, 13 ],
            "sunday": [ 26, 1, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 134,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/japanese-tree-frog-cup-1968.jpg',
          title: 'Japanese Tree Frog Cup',
          artist: 'Kenneth Price',
          year: '1968',
          rule: {
            "monday": [ 26, 1, 6, 12 ],
            "tuesday": [ 25, 30, 6, 10 ],
            "wednesday": [ 24, 29, 5, 10 ],
            "thursday": [ 23, 27, 4, 9 ],
            "friday": [ 22, 27, 3, 8 ],
            "saturday": [ 21, 26, 2, 9 ],
            "sunday": [ 27, 2, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 135,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/lost-space-1964.jpg',
          title: 'Lost space',
          artist: 'Guy Mees',
          year: '1964',
          rule: {
            "monday": [ 27, 2, 8, 13 ],
            "tuesday": [ 26, 1, 6, 12 ],
            "wednesday": [ 25, 30, 6, 10 ],
            "thursday": [ 24, 29, 5, 10 ],
            "friday": [ 23, 27, 4, 9 ],
            "saturday": [ 22, 27, 3, 8 ],
            "sunday": [ 21, 26, 2, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 136,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/convergence-i-2001.jpg',
          title: 'Convergence I',
          artist: 'Sheila Hicks',
          year: '2001',
          rule: {
            "monday": [ 21, 26, 2, 9 ],
            "tuesday": [ 27, 2, 8, 13 ],
            "wednesday": [ 26, 1, 6, 12 ],
            "thursday": [ 25, 30, 6, 10 ],
            "friday": [ 24, 29, 5, 10 ],
            "saturday": [ 23, 27, 4, 9 ],
            "sunday": [ 22, 27, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 137,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/round-wooden-bar.jpg',
          title: 'Round Wooden Bar',
          artist: 'Andre Cadere',
          year: '?',
          rule: {
            "monday": [ 22, 27, 3, 8 ],
            "tuesday": [ 21, 26, 2, 9 ],
            "wednesday": [ 27, 2, 8, 13 ],
            "thursday": [ 26, 1, 6, 12 ],
            "friday": [ 25, 30, 6, 10 ],
            "saturday": [ 24, 29, 5, 10 ],
            "sunday": [ 23, 27, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 138,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/accomplishments-1964.jpg',
          title: 'Accomplishments',
          artist: 'James Lee Byars',
          year: '1964',
          rule: {
            "monday": [ 23, 27, 4, 9 ],
            "tuesday": [ 22, 27, 3, 8 ],
            "wednesday": [ 21, 26, 2, 9 ],
            "thursday": [ 27, 2, 8, 13 ],
            "friday": [ 26, 1, 6, 12 ],
            "saturday": [ 25, 30, 6, 10 ],
            "sunday": [ 24, 29, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 139,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/arena-v-1978.jpg',
          title: 'Arena V',
          artist: 'Dorothea Rockburne',
          year: '1978',
          rule: {
            "monday": [ 24, 29, 5, 10 ],
            "tuesday": [ 23, 27, 4, 9 ],
            "wednesday": [ 22, 27, 3, 8 ],
            "thursday": [ 21, 26, 2, 9 ],
            "friday": [ 27, 2, 8, 13 ],
            "saturday": [ 26, 1, 6, 12 ],
            "sunday": [ 25, 30, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 140,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-2010.jpg',
          title: 'Untitled',
          artist: 'Robert Morris',
          year: '2010',
          rule: {
            "monday": [ 26, 1, 7, 11 ],
            "tuesday": [ 25, 30, 6, 11 ],
            "wednesday": [ 24, 28, 5, 10 ],
            "thursday": [ 23, 28, 4, 9 ],
            "friday": [ 22, 27, 3, 10 ],
            "saturday": [ 28, 3, 9, 14 ],
            "sunday": [ 27, 2, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 141,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/berlin-star-2008.jpg',
          title: 'Berlin Star',
          artist: 'Otto Piene',
          year: '2008',
          rule: {
            "monday": [ 27, 2, 7, 13 ],
            "tuesday": [ 26, 1, 7, 11 ],
            "wednesday": [ 25, 30, 6, 11 ],
            "thursday": [ 24, 28, 5, 10 ],
            "friday": [ 23, 28, 4, 9 ],
            "saturday": [ 22, 27, 3, 10 ],
            "sunday": [ 28, 3, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 142,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/arrival-2008.jpg',
          title: 'Arrival',
          artist: 'Stephen Antonakos',
          year: '2008',
          rule: {
            "monday": [ 28, 3, 9, 14 ],
            "tuesday": [ 27, 2, 7, 13 ],
            "wednesday": [ 26, 1, 7, 11 ],
            "thursday": [ 25, 30, 6, 11 ],
            "friday": [ 24, 28, 5, 10 ],
            "saturday": [ 23, 28, 4, 9 ],
            "sunday": [ 22, 27, 3, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 143,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/sterreich-tisch-1969.jpg',
          title: 'Österreich - Tisch',
          artist: 'Karl Prantl',
          year: '1969',
          rule: {
            "monday": [ 22, 27, 3, 10 ],
            "tuesday": [ 28, 3, 9, 14 ],
            "wednesday": [ 27, 2, 7, 13 ],
            "thursday": [ 26, 1, 7, 11 ],
            "friday": [ 25, 30, 6, 11 ],
            "saturday": [ 24, 28, 5, 10 ],
            "sunday": [ 23, 28, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 144,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/trenchant-sphere-1967.jpg',
          title: 'Trenchant Sphere',
          artist: 'Ruth Vollmer',
          year: '1967',
          rule: {
            "monday": [ 23, 28, 4, 9 ],
            "tuesday": [ 22, 27, 3, 10 ],
            "wednesday": [ 28, 3, 9, 14 ],
            "thursday": [ 27, 2, 7, 13 ],
            "friday": [ 26, 1, 7, 11 ],
            "saturday": [ 25, 30, 6, 11 ],
            "sunday": [ 24, 28, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 145,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-wild-1950.jpg',
          title: 'The Wild',
          artist: 'Barnett Newman',
          year: '1950',
          rule: {
            "monday": [ 24, 28, 5, 10 ],
            "tuesday": [ 23, 28, 4, 9 ],
            "wednesday": [ 22, 27, 3, 10 ],
            "thursday": [ 28, 3, 9, 14 ],
            "friday": [ 27, 2, 7, 13 ],
            "saturday": [ 26, 1, 7, 11 ],
            "sunday": [ 25, 30, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 146,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/idol-4-1956.jpg',
          title: 'Idol 4',
          artist: 'William Turnbull',
          year: '1956',
          rule: {
            "monday": [ 25, 30, 6, 11 ],
            "tuesday": [ 24, 28, 5, 10 ],
            "wednesday": [ 23, 28, 4, 9 ],
            "thursday": [ 22, 27, 3, 10 ],
            "friday": [ 28, 3, 9, 14 ],
            "saturday": [ 27, 2, 7, 13 ],
            "sunday": [ 26, 1, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 147,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-after-nature-tree-trunks-1959.jpg',
          title: 'Untitled (After Nature: Tree Trunks)',
          artist: 'Charlotte Posenenske',
          year: '1959',
          rule: {
            "monday": [ 27, 2, 8, 12 ],
            "tuesday": [ 26, 1, 7, 12 ],
            "wednesday": [ 25, 29, 6, 11 ],
            "thursday": [ 24, 29, 5, 10 ],
            "friday": [ 23, 28, 4, 11 ],
            "saturday": [ 29, 4, 10, 15 ],
            "sunday": [ 28, 3, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 148,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1959vv.jpg',
          title: 'Untitled',
          artist: 'Ruth Vollmer',
          year: '1959',
          rule: {
            "monday": [ 28, 3, 8, 14 ],
            "tuesday": [ 27, 2, 8, 12 ],
            "wednesday": [ 26, 1, 7, 12 ],
            "thursday": [ 25, 29, 6, 11 ],
            "friday": [ 24, 29, 5, 10 ],
            "saturday": [ 23, 28, 4, 11 ],
            "sunday": [ 29, 4, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 149,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/die-fahne-hoch-1959.jpg',
          title: 'Die Fahne Hoch!',
          artist: 'Frank Stella',
          year: '1959',
          rule: {
            "monday": [ 29, 4, 10, 15 ],
            "tuesday": [ 28, 3, 8, 14 ],
            "wednesday": [ 27, 2, 8, 12 ],
            "thursday": [ 26, 1, 7, 12 ],
            "friday": [ 25, 29, 6, 11 ],
            "saturday": [ 24, 29, 5, 10 ],
            "sunday": [ 23, 28, 4, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 150,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/disegno-geometrico-1960.jpg',
          title: 'Disegno geometrico',
          artist: 'Giulio Paolini',
          year: '1960',
          rule: {
            "monday": [ 23, 28, 4, 11 ],
            "tuesday": [ 29, 4, 10, 15 ],
            "wednesday": [ 28, 3, 8, 14 ],
            "thursday": [ 27, 2, 8, 12 ],
            "friday": [ 26, 1, 7, 12 ],
            "saturday": [ 25, 29, 6, 11 ],
            "sunday": [ 24, 29, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 151,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/number-13-1961.jpg',
          title: 'Number 13',
          artist: 'John McLaughlin',
          year: '1961',
          rule: {
            "monday": [ 24, 29, 5, 10 ],
            "tuesday": [ 23, 28, 4, 11 ],
            "wednesday": [ 29, 4, 10, 15 ],
            "thursday": [ 28, 3, 8, 14 ],
            "friday": [ 27, 2, 8, 12 ],
            "saturday": [ 26, 1, 7, 12 ],
            "sunday": [ 25, 29, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 152,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/box-with-the-sound-of-its-own-making-1961.jpg',
          title: 'Box with the Sound of Its Own Making',
          artist: 'Robert Morris',
          year: '1961',
          rule: {
            "monday": [ 25, 29, 6, 11 ],
            "tuesday": [ 24, 29, 5, 10 ],
            "wednesday": [ 23, 28, 4, 11 ],
            "thursday": [ 29, 4, 10, 15 ],
            "friday": [ 28, 3, 8, 14 ],
            "saturday": [ 27, 2, 8, 12 ],
            "sunday": [ 26, 1, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 153,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/number-17-1962.jpg',
          title: 'Number 17',
          artist: 'John McLaughlin',
          year: '1962',
          rule: {
            "monday": [ 26, 1, 7, 12 ],
            "tuesday": [ 25, 29, 6, 11 ],
            "wednesday": [ 24, 29, 5, 10 ],
            "thursday": [ 23, 28, 4, 11 ],
            "friday": [ 29, 4, 10, 15 ],
            "saturday": [ 28, 3, 8, 14 ],
            "sunday": [ 27, 2, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 154,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/tau-1962.jpg',
          title: 'Tau',
          artist: 'Tony Smith',
          year: '1962',
          rule: {
            "monday": [ 28, 3, 9, 13 ],
            "tuesday": [ 27, 2, 8, 13 ],
            "wednesday": [ 26, 30, 7, 12 ],
            "thursday": [ 25, 30, 6, 11 ],
            "friday": [ 24, 29, 5, 12 ],
            "saturday": [ 30, 5, 11, 16 ],
            "sunday": [ 29, 4, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 155,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/garden-elements-1962.jpg',
          title: 'Garden Elements',
          artist: 'Noguchi Isamu',
          year: '1962',
          rule: {
            "monday": [ 29, 4, 9, 15 ],
            "tuesday": [ 28, 3, 9, 13 ],
            "wednesday": [ 27, 2, 8, 13 ],
            "thursday": [ 26, 30, 7, 12 ],
            "friday": [ 25, 30, 6, 11 ],
            "saturday": [ 24, 29, 5, 12 ],
            "sunday": [ 30, 5, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 156,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/night-sea-1963.jpg',
          title: 'Night Sea',
          artist: 'Agnes Martin',
          year: '1963',
          rule: {
            "monday": [ 30, 5, 11, 16 ],
            "tuesday": [ 29, 4, 9, 15 ],
            "wednesday": [ 28, 3, 9, 13 ],
            "thursday": [ 27, 2, 8, 13 ],
            "friday": [ 26, 30, 7, 12 ],
            "saturday": [ 25, 30, 6, 11 ],
            "sunday": [ 24, 29, 5, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 157,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1963.jpg',
          title: 'Untitled',
          artist: 'John McLaughlin',
          year: '1963',
          rule: {
            "monday": [ 24, 29, 5, 12 ],
            "tuesday": [ 30, 5, 11, 16 ],
            "wednesday": [ 29, 4, 9, 15 ],
            "thursday": [ 28, 3, 9, 13 ],
            "friday": [ 27, 2, 8, 13 ],
            "saturday": [ 26, 30, 7, 12 ],
            "sunday": [ 25, 30, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 158,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/no-2-1964.jpg',
          title: 'No. 2',
          artist: 'Mark Rothko',
          year: '1964',
          rule: {
            "monday": [ 25, 30, 6, 11 ],
            "tuesday": [ 24, 29, 5, 12 ],
            "wednesday": [ 30, 5, 11, 16 ],
            "thursday": [ 29, 4, 9, 15 ],
            "friday": [ 28, 3, 9, 13 ],
            "saturday": [ 27, 2, 8, 13 ],
            "sunday": [ 26, 30, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 159,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/number-27-1964.jpg',
          title: 'Number 27',
          artist: 'John McLaughlin',
          year: '1964',
          rule: {
            "monday": [ 26, 30, 7, 12 ],
            "tuesday": [ 25, 30, 6, 11 ],
            "wednesday": [ 24, 29, 5, 12 ],
            "thursday": [ 30, 5, 11, 16 ],
            "friday": [ 29, 4, 9, 15 ],
            "saturday": [ 28, 3, 9, 13 ],
            "sunday": [ 27, 2, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 160,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/cluster-about-hemisphere-1964.jpg',
          title: 'Cluster About Hemisphere',
          artist: 'Ruth Vollmer',
          year: '1964',
          rule: {
            "monday": [ 27, 2, 8, 13 ],
            "tuesday": [ 26, 30, 7, 12 ],
            "wednesday": [ 25, 30, 6, 11 ],
            "thursday": [ 24, 29, 5, 12 ],
            "friday": [ 30, 5, 11, 16 ],
            "saturday": [ 29, 4, 9, 15 ],
            "sunday": [ 28, 3, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 161,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-negative-way-10-1964.jpg',
          title: 'The Negative Way #10',
          artist: 'Paul Brach',
          year: '1964',
          rule: {
            "monday": [ 29, 4, 10, 14 ],
            "tuesday": [ 28, 3, 9, 14 ],
            "wednesday": [ 27, 1, 8, 13 ],
            "thursday": [ 26, 1, 7, 12 ],
            "friday": [ 25, 30, 6, 13 ],
            "saturday": [ 1, 6, 12, 17 ],
            "sunday": [ 30, 5, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 162,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/mirror-mirror-table-table-1964.jpg',
          title: 'Mirror/Mirror - Table/Table',
          artist: 'Richard Artschwager',
          year: '1964',
          rule: {
            "monday": [ 30, 5, 10, 16 ],
            "tuesday": [ 29, 4, 10, 14 ],
            "wednesday": [ 28, 3, 9, 14 ],
            "thursday": [ 27, 1, 8, 13 ],
            "friday": [ 26, 1, 7, 12 ],
            "saturday": [ 25, 30, 6, 13 ],
            "sunday": [ 1, 6, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 163,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/b11-box-b-lide-09-1964.jpg',
          title: 'B11 Box Bólide 09',
          artist: 'Helio Oiticica',
          year: '1964',
          rule: {
            "monday": [ 1, 6, 12, 17 ],
            "tuesday": [ 30, 5, 10, 16 ],
            "wednesday": [ 29, 4, 10, 14 ],
            "thursday": [ 28, 3, 9, 14 ],
            "friday": [ 27, 1, 8, 13 ],
            "saturday": [ 26, 1, 7, 12 ],
            "sunday": [ 25, 30, 6, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 164,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1965.jpg',
          title: 'Untitled',
          artist: 'Robert Ryman',
          year: '1965',
          rule: {
            "monday": [ 25, 30, 6, 13 ],
            "tuesday": [ 1, 6, 12, 17 ],
            "wednesday": [ 30, 5, 10, 16 ],
            "thursday": [ 29, 4, 10, 14 ],
            "friday": [ 28, 3, 9, 14 ],
            "saturday": [ 27, 1, 8, 13 ],
            "sunday": [ 26, 1, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 165,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/fountain-1965.jpg',
          title: 'Fountain',
          artist: 'Richard Tuttle',
          year: '1965',
          rule: {
            "monday": [ 26, 1, 7, 12 ],
            "tuesday": [ 25, 30, 6, 13 ],
            "wednesday": [ 1, 6, 12, 17 ],
            "thursday": [ 30, 5, 10, 16 ],
            "friday": [ 29, 4, 10, 14 ],
            "saturday": [ 28, 3, 9, 14 ],
            "sunday": [ 27, 1, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 166,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/sprayed-picture-1965-1(1).jpg',
          title: 'Sprayed Picture',
          artist: 'Charlotte Posenenske',
          year: '1965',
          rule: {
            "monday": [ 27, 1, 8, 13 ],
            "tuesday": [ 26, 1, 7, 12 ],
            "wednesday": [ 25, 30, 6, 13 ],
            "thursday": [ 1, 6, 12, 17 ],
            "friday": [ 30, 5, 10, 16 ],
            "saturday": [ 29, 4, 10, 14 ],
            "sunday": [ 28, 3, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 167,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/spazio-luce-1965.jpg',
          title: 'Spazio Luce',
          artist: 'Antonio Calderara',
          year: '1965',
          rule: {
            "monday": [ 28, 3, 9, 14 ],
            "tuesday": [ 27, 1, 8, 13 ],
            "wednesday": [ 26, 1, 7, 12 ],
            "thursday": [ 25, 30, 6, 13 ],
            "friday": [ 1, 6, 12, 17 ],
            "saturday": [ 30, 5, 10, 16 ],
            "sunday": [ 29, 4, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 168,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/primary-light-group-red-green-blue-1965.jpg',
          title: 'Primary Light Group: Red, Green, Blue',
          artist: 'Jo Baer',
          year: '1964 - 1965',
          rule: {
            "monday": [ 30, 5, 11, 15 ],
            "tuesday": [ 29, 2, 10, 15 ],
            "wednesday": [ 28, 2, 9, 14 ],
            "thursday": [ 27, 2, 8, 13 ],
            "friday": [ 26, 1, 7, 14 ],
            "saturday": [ 2, 7, 13, 18 ],
            "sunday": [ 1, 6, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 169,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/turquoise-gray-upside-down-t-1966.jpg',
          title: 'Turquoise-Gray Upside Down T',
          artist: 'Gianni Piacentino',
          year: '1966',
          rule: {
            "monday": [ 1, 6, 11, 17 ],
            "tuesday": [ 30, 5, 11, 15 ],
            "wednesday": [ 29, 2, 10, 15 ],
            "thursday": [ 28, 2, 9, 14 ],
            "friday": [ 27, 2, 8, 13 ],
            "saturday": [ 26, 1, 7, 14 ],
            "sunday": [ 2, 7, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 170,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/tango-tangles-1966.jpg',
          title: 'Tango Tangles',
          artist: 'Tony DeLap',
          year: '1966',
          rule: {
            "monday": [ 2, 7, 13, 18 ],
            "tuesday": [ 1, 6, 11, 17 ],
            "wednesday": [ 30, 5, 11, 15 ],
            "thursday": [ 29, 2, 10, 15 ],
            "friday": [ 28, 2, 9, 14 ],
            "saturday": [ 27, 2, 8, 13 ],
            "sunday": [ 26, 1, 7, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 171,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/tegniii1966.jpg',
          title: 'Tegn III',
          artist: 'Jan Groth',
          year: '1966',
          rule: {
            "monday": [ 26, 1, 7, 14 ],
            "tuesday": [ 2, 7, 13, 18 ],
            "wednesday": [ 1, 6, 11, 17 ],
            "thursday": [ 30, 5, 11, 15 ],
            "friday": [ 29, 2, 10, 15 ],
            "saturday": [ 28, 2, 9, 14 ],
            "sunday": [ 27, 2, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 172,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1967.jpg',
          title: 'Untitled',
          artist: 'Eva Hesse',
          year: '1967',
          rule: {
            "monday": [ 27, 2, 8, 13 ],
            "tuesday": [ 26, 1, 7, 14 ],
            "wednesday": [ 2, 7, 13, 18 ],
            "thursday": [ 1, 6, 11, 17 ],
            "friday": [ 30, 5, 11, 15 ],
            "saturday": [ 29, 2, 10, 15 ],
            "sunday": [ 28, 2, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 173,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/rothko-chapel-1967.jpg',
          title: 'Rothko Chapel',
          artist: 'Mark Rothko',
          year: '1964 - 1967',
          rule: {
            "monday": [ 28, 2, 9, 14 ],
            "tuesday": [ 27, 2, 8, 13 ],
            "wednesday": [ 26, 1, 7, 14 ],
            "thursday": [ 2, 7, 13, 18 ],
            "friday": [ 1, 6, 11, 17 ],
            "saturday": [ 30, 5, 11, 15 ],
            "sunday": [ 29, 2, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 174,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/relief-series-b-1967-2(1).jpg',
          title: 'Relief, Series B',
          artist: 'Charlotte Posenenske',
          year: '1967',
          rule: {
            "monday": [ 29, 2, 10, 15 ],
            "tuesday": [ 28, 2, 9, 14 ],
            "wednesday": [ 27, 2, 8, 13 ],
            "thursday": [ 26, 1, 7, 14 ],
            "friday": [ 2, 7, 13, 18 ],
            "saturday": [ 1, 6, 11, 17 ],
            "sunday": [ 30, 5, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 175,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1967-.jpg',
          title: 'Untitled',
          artist: 'Michel Parmentier',
          year: '1967',
          rule: {
            "monday": [ 1, 6, 12, 16 ],
            "tuesday": [ 30, 3, 11, 16 ],
            "wednesday": [ 29, 3, 10, 15 ],
            "thursday": [ 28, 3, 9, 14 ],
            "friday": [ 27, 2, 8, 15 ],
            "saturday": [ 3, 8, 14, 19 ],
            "sunday": [ 2, 7, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 176,
          user_id: 1,
          theme: 'Minimalism',
          img_path: './img/novemberuntitled-1967--/.jpg',
          title: 'Untitled',
          artist: 'Robert Grosvenor',
          year: '1967',
          rule: {
            "monday": [ 2, 7, 12, 18 ],
            "tuesday": [ 1, 6, 12, 16 ],
            "wednesday": [ 30, 3, 11, 16 ],
            "thursday": [ 29, 3, 10, 15 ],
            "friday": [ 28, 3, 9, 14 ],
            "saturday": [ 27, 2, 8, 15 ],
            "sunday": [ 3, 8, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 177,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/nile-1967.jpg',
          title: 'Nile',
          artist: 'Phillip King',
          year: '1967',
          rule: {
            "monday": [ 3, 8, 14, 19 ],
            "tuesday": [ 2, 7, 12, 18 ],
            "wednesday": [ 1, 6, 12, 16 ],
            "thursday": [ 30, 3, 11, 16 ],
            "friday": [ 29, 3, 10, 15 ],
            "saturday": [ 28, 3, 9, 14 ],
            "sunday": [ 27, 2, 8, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 178,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-absolutely-naked-fragrance-1967.jpg',
          title: 'The Absolutely Naked Fragrance',
          artist: 'John McCracken',
          year: '1967',
          rule: {
            "monday": [ 27, 2, 8, 15 ],
            "tuesday": [ 3, 8, 14, 19 ],
            "wednesday": [ 2, 7, 12, 18 ],
            "thursday": [ 1, 6, 12, 16 ],
            "friday": [ 30, 3, 11, 16 ],
            "saturday": [ 29, 3, 10, 15 ],
            "sunday": [ 28, 3, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 179,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/room-19-1968.jpg',
          title: 'Room 19',
          artist: 'Imi Knoebel',
          year: '1968',
          rule: {
            "monday": [ 28, 3, 9, 14 ],
            "tuesday": [ 27, 2, 8, 15 ],
            "wednesday": [ 3, 8, 14, 19 ],
            "thursday": [ 2, 7, 12, 18 ],
            "friday": [ 1, 6, 12, 16 ],
            "saturday": [ 30, 3, 11, 16 ],
            "sunday": [ 29, 3, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 180,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/3-inch-high-33-foot-long-epoxy-paint-band-1968.jpg',
          title: '3 inch high 33 foot long Epoxy Paint Band',
          artist: 'Robert Huot',
          year: '1968',
          rule: {
            "monday": [ 29, 3, 10, 15 ],
            "tuesday": [ 28, 3, 9, 14 ],
            "wednesday": [ 27, 2, 8, 15 ],
            "thursday": [ 3, 8, 14, 19 ],
            "friday": [ 2, 7, 12, 18 ],
            "saturday": [ 1, 6, 12, 16 ],
            "sunday": [ 30, 3, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 181,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/hereditarius-no-1-68-a-1968.jpg',
          title: 'Hereditarius No.1-68-A',
          artist: 'Park Seo-Bo',
          year: '1968',
          rule: {
            "monday": [ 30, 3, 11, 16 ],
            "tuesday": [ 29, 3, 10, 15 ],
            "wednesday": [ 28, 3, 9, 14 ],
            "thursday": [ 27, 2, 8, 15 ],
            "friday": [ 3, 8, 14, 19 ],
            "saturday": [ 2, 7, 12, 18 ],
            "sunday": [ 1, 6, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 182,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/blue-day-glo-corner-piece-1968.jpg',
          title: 'Blue Day-glo Corner Piece',
          artist: 'Fred Sandback',
          year: '1968',
          rule: {
            "monday": [ 2, 7, 13, 17 ],
            "tuesday": [ 1, 4, 12, 17 ],
            "wednesday": [ 30, 4, 11, 16 ],
            "thursday": [ 29, 4, 10, 15 ],
            "friday": [ 28, 3, 9, 16 ],
            "saturday": [ 4, 9, 15, 20 ],
            "sunday": [ 3, 8, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 183,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1968.jpg',
          title: 'Untitled',
          artist: 'Robert Grosvenor',
          year: '1968',
          rule: {
            "monday": [ 3, 8, 13, 19 ],
            "tuesday": [ 2, 7, 13, 17 ],
            "wednesday": [ 1, 4, 12, 17 ],
            "thursday": [ 30, 4, 11, 16 ],
            "friday": [ 29, 4, 10, 15 ],
            "saturday": [ 28, 3, 9, 16 ],
            "sunday": [ 4, 9, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 184,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/rad-4-1968.jpg',
          title: 'RAD 4',
          artist: 'Johannes Jan Schoonhoven',
          year: '1968',
          rule: {
            "monday": [ 4, 9, 15, 20 ],
            "tuesday": [ 3, 8, 13, 19 ],
            "wednesday": [ 2, 7, 13, 17 ],
            "thursday": [ 1, 4, 12, 17 ],
            "friday": [ 30, 4, 11, 16 ],
            "saturday": [ 29, 4, 10, 15 ],
            "sunday": [ 28, 3, 9, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 185,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1969-Rothko.jpg',
          title: 'Untitled',
          artist: 'Mark Rothko',
          year: '1969',
          rule: {
            "monday": [ 28, 3, 9, 16 ],
            "tuesday": [ 4, 9, 15, 20 ],
            "wednesday": [ 3, 8, 13, 19 ],
            "thursday": [ 2, 7, 13, 17 ],
            "friday": [ 1, 4, 12, 17 ],
            "saturday": [ 30, 4, 11, 16 ],
            "sunday": [ 29, 4, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 186,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/broken-obelisk(1).jpg',
          title: 'Broken Obelisk',
          artist: 'Barnett Newman',
          year: '1963 - 1969',
          rule: {
            "monday": [ 29, 4, 10, 15 ],
            "tuesday": [ 28, 3, 9, 16 ],
            "wednesday": [ 4, 9, 15, 20 ],
            "thursday": [ 3, 8, 13, 19 ],
            "friday": [ 2, 7, 13, 17 ],
            "saturday": [ 1, 4, 12, 17 ],
            "sunday": [ 30, 4, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 187,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/r-m-i-1969.jpg',
          title: 'R - M - I',
          artist: 'Yves Gaucher',
          year: '1969',
          rule: {
            "monday": [ 30, 4, 11, 16 ],
            "tuesday": [ 29, 4, 10, 15 ],
            "wednesday": [ 28, 3, 9, 16 ],
            "thursday": [ 4, 9, 15, 20 ],
            "friday": [ 3, 8, 13, 19 ],
            "saturday": [ 2, 7, 13, 17 ],
            "sunday": [ 1, 4, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 188,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/yellow-painting-1969.jpg',
          title: 'Yellow Painting',
          artist: 'Peter Joseph',
          year: '1969',
          rule: {
            "monday": [ 1, 4, 12, 17 ],
            "tuesday": [ 30, 4, 11, 16 ],
            "wednesday": [ 29, 4, 10, 15 ],
            "thursday": [ 28, 3, 9, 16 ],
            "friday": [ 4, 9, 15, 20 ],
            "saturday": [ 3, 8, 13, 19 ],
            "sunday": [ 2, 7, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 189,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/586-69-gerundetes-rot-1969.jpg',
          title: '586/69 (Gerundetes Rot)',
          artist: 'Rupprecht Geiger',
          year: '1969',
          rule: {
            "monday": [ 3, 8, 14, 18 ],
            "tuesday": [ 2, 5, 13, 18 ],
            "wednesday": [ 1, 5, 12, 17 ],
            "thursday": [ 30, 5, 11, 16 ],
            "friday": [ 29, 4, 10, 17 ],
            "saturday": [ 5, 10, 16, 21 ],
            "sunday": [ 4, 9, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 190,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/reticul-rea-installation-view-1969.jpg',
          title: 'Reticulárea (installation view)',
          artist: 'Gego',
          year: '1969',
          rule: {
            "monday": [ 4, 9, 14, 20 ],
            "tuesday": [ 3, 8, 14, 18 ],
            "wednesday": [ 2, 5, 13, 18 ],
            "thursday": [ 1, 5, 12, 17 ],
            "friday": [ 30, 5, 11, 16 ],
            "saturday": [ 29, 4, 10, 17 ],
            "sunday": [ 5, 10, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 191,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/dis-play-1970.jpg',
          title: 'Dis-Play',
          artist: 'Keith Sonnier',
          year: '1970',
          rule: {
            "monday": [ 5, 10, 16, 21 ],
            "tuesday": [ 4, 9, 14, 20 ],
            "wednesday": [ 3, 8, 14, 18 ],
            "thursday": [ 2, 5, 13, 18 ],
            "friday": [ 1, 5, 12, 17 ],
            "saturday": [ 30, 5, 11, 16 ],
            "sunday": [ 29, 4, 10, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 192,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/b-w-vi-1970.jpg',
          title: 'B.W. VI',
          artist: 'Yves Gaucher',
          year: '1970',
          rule: {
            "monday": [ 29, 4, 10, 17 ],
            "tuesday": [ 5, 10, 16, 21 ],
            "wednesday": [ 4, 9, 14, 20 ],
            "thursday": [ 3, 8, 14, 18 ],
            "friday": [ 2, 5, 13, 18 ],
            "saturday": [ 1, 5, 12, 17 ],
            "sunday": [ 30, 5, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 193,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/Gaucher.jpg',
          title: 'Tegn I',
          artist: 'Jan Groth',
          year: '1970',
          rule: {
            "monday": [ 30, 5, 11, 16 ],
            "tuesday": [ 29, 4, 10, 17 ],
            "wednesday": [ 5, 10, 16, 21 ],
            "thursday": [ 4, 9, 14, 20 ],
            "friday": [ 3, 8, 14, 18 ],
            "saturday": [ 2, 5, 13, 18 ],
            "sunday": [ 1, 5, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 194,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/g-kx-69-1970.jpg',
          title: 'G-KX-69',
          artist: 'Victor Bonato',
          year: '1970',
          rule: {
            "monday": [ 1, 5, 12, 17 ],
            "tuesday": [ 30, 5, 11, 16 ],
            "wednesday": [ 29, 4, 10, 17 ],
            "thursday": [ 5, 10, 16, 21 ],
            "friday": [ 4, 9, 14, 20 ],
            "saturday": [ 3, 8, 14, 18 ],
            "sunday": [ 2, 5, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 195,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1970-7.jpg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: '1970',
          rule: {
            "monday": [ 2, 5, 13, 18 ],
            "tuesday": [ 1, 5, 12, 17 ],
            "wednesday": [ 30, 5, 11, 16 ],
            "thursday": [ 29, 4, 10, 17 ],
            "friday": [ 5, 10, 16, 21 ],
            "saturday": [ 4, 9, 14, 20 ],
            "sunday": [ 3, 8, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 196,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/sur-les-murs-1971.jpg',
          title: 'Sur les Murs',
          artist: 'Daniel Buren',
          year: '1971',
          rule: {
            "monday": [ 4, 9, 15, 19 ],
            "tuesday": [ 3, 6, 14, 19 ],
            "wednesday": [ 2, 6, 13, 18 ],
            "thursday": [ 1, 6, 12, 17 ],
            "friday": [ 30, 5, 11, 18 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 197,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/sun-flower-1971.jpg',
          title: 'Sun Flower',
          artist: 'Anne Truitt',
          year: '1971',
          rule: {
            "monday": [ 5, 10, 15, 21 ],
            "tuesday": [ 4, 9, 15, 19 ],
            "wednesday": [ 3, 6, 14, 19 ],
            "thursday": [ 2, 6, 13, 18 ],
            "friday": [ 1, 6, 12, 17 ],
            "saturday": [ 30, 5, 11, 18 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 198,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/no-3-1971.jpg',
          title: 'No. 3',
          artist: 'Bernard Cohen',
          year: '1971',
          rule: {
            "monday": [ 6, 11, 17, 22 ],
            "tuesday": [ 5, 10, 15, 21 ],
            "wednesday": [ 4, 9, 15, 19 ],
            "thursday": [ 3, 6, 14, 19 ],
            "friday": [ 2, 6, 13, 18 ],
            "saturday": [ 1, 6, 12, 17 ],
            "sunday": [ 30, 5, 11, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 199,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/blok-1971.jpg',
          title: 'Blok',
          artist: 'Nanda Vigo',
          year: '1971',
          rule: {
            "monday": [ 30, 5, 11, 18 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 15, 21 ],
            "thursday": [ 4, 9, 15, 19 ],
            "friday": [ 3, 6, 14, 19 ],
            "saturday": [ 2, 6, 13, 18 ],
            "sunday": [ 1, 6, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 200,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/reticul-rea-cuadrada-horizontal-71-10-1971.jpg',
          title: 'Reticulárea cuadrada horizontal 71/10',
          artist: 'Gego',
          year: '1971',
          rule: {
            "monday": [ 1, 6, 12, 17 ],
            "tuesday": [ 30, 5, 11, 18 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 15, 21 ],
            "friday": [ 4, 9, 15, 19 ],
            "saturday": [ 3, 6, 14, 19 ],
            "sunday": [ 2, 6, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 201,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/cubic-bar-of-wood-1971.jpg',
          title: 'Cubic Bar of Wood',
          artist: 'Andre Cadere',
          year: '1971',
          rule: {
            "monday": [ 2, 6, 13, 18 ],
            "tuesday": [ 1, 6, 12, 17 ],
            "wednesday": [ 30, 5, 11, 18 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 15, 21 ],
            "saturday": [ 4, 9, 15, 19 ],
            "sunday": [ 3, 6, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 202,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1972.jpg',
          title: 'Untitled',
          artist: 'Jean Degottex',
          year: '1972',
          rule: {
            "monday":[ 3, 6, 14, 19 ],
            "tuesday": [ 2, 6, 13, 18 ],
            "wednesday": [ 1, 6, 12, 17 ],
            "thursday": [ 30, 5, 11, 18 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 15, 21 ],
            "sunday": [ 4, 9, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 203,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/triangle-circle-square-1972.jpg',
          title: 'Triangle, Circle, Square',
          artist: 'Walter De Maria',
          year: '1972',
          rule: {
            "monday":[ 5, 10, 16, 20 ],
            "tuesday": [ 4, 7, 15, 20 ],
            "wednesday": [ 3, 7, 14, 19 ],
            "thursday": [ 2, 7, 13, 18 ],
            "friday": [ 1, 6, 12, 19 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 204,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/ripe-wheat-1972.jpg',
          title: 'Ripe Wheat',
          artist: 'Warren Rohrer',
          year: '1972',
          rule: {
            "monday":[ 6, 11, 16, 22 ],
            "tuesday": [ 5, 10, 16, 20 ],
            "wednesday": [ 4, 7, 15, 20 ],
            "thursday": [ 3, 7, 14, 19 ],
            "friday": [ 2, 7, 13, 18 ],
            "saturday": [ 1, 6, 12, 19 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 205,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/pearl-frame-vehicle-with-violet-blue-triangle-tank-1973.jpg',
          title: 'Pearl Frame Vehicle with Violet-Blue Triangle Tank',
          artist: 'Gianni Piacentino',
          year: '1973',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 16, 22 ],
            "wednesday": [ 5, 10, 16, 20 ],
            "thursday": [ 4, 7, 15, 20 ],
            "friday": [ 3, 7, 14, 19 ],
            "saturday": [ 2, 7, 13, 18 ],
            "sunday": [ 1, 6, 12, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 206,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/soft-neon-1973.jpg',
          title: 'Soft Neon',
          artist: 'Perle Fine',
          year: '1973',
          rule: {
            "monday": [ 1, 6, 12, 19 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 16, 22 ],
            "thursday": [ 5, 10, 16, 20 ],
            "friday": [ 4, 7, 15, 20 ],
            "saturday": [ 3, 7, 14, 19 ],
            "sunday": [ 2, 7, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 207,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-14-part-roller-drawing-1973.jpg',
          title: 'Untitled (14-part roller drawing)',
          artist: 'Richard Serra',
          year: '1973',
          rule: {
            "monday": [ 2, 7, 13, 18 ],
            "tuesday": [ 1, 6, 12, 19 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 16, 22 ],
            "friday": [ 5, 10, 16, 20 ],
            "saturday": [ 4, 7, 15, 20 ],
            "sunday": [ 3, 7, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 208,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1973__.jpg',
          title: 'Untitled',
          artist: 'Sean Scully',
          year: '1973',
          rule: {
            "monday": [ 3, 7, 14, 19 ],
            "tuesday": [ 2, 7, 13, 18 ],
            "wednesday": [ 1, 6, 12, 19 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 16, 22 ],
            "saturday": [ 5, 10, 16, 20 ],
            "sunday": [ 4, 7, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 209,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/white-wheat-1973.jpg',
          title: 'White Wheat',
          artist: 'Warren Rohrer',
          year: '1973',
          rule: {
            "monday": [ 4, 7, 15, 20 ],
            "tuesday": [ 3, 7, 14, 19 ],
            "wednesday": [ 2, 7, 13, 18 ],
            "thursday": [ 1, 6, 12, 19 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 16, 22 ],
            "sunday": [ 5, 10, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 210,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1974__.jpg',
          title: 'Untitled',
          artist: 'John McLaughlin',
          year: '1974',
          rule: {
            "monday": [ 6, 11, 17, 21 ],
            "tuesday": [ 5, 8, 16, 21 ],
            "wednesday": [ 4, 8, 15, 20 ],
            "thursday": [ 3, 8, 14, 19 ],
            "friday": [ 2, 7, 13, 20 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 211,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/spears-1974.jpg',
          title: 'Spears',
          artist: 'Moshe Kupferman',
          year: '1974',
          rule: {
            "monday": [ 7, 12, 17, 23 ],
            "tuesday": [ 6, 11, 17, 21 ],
            "wednesday": [ 5, 8, 16, 21 ],
            "thursday": [ 4, 8, 15, 20 ],
            "friday": [ 3, 8, 14, 19 ],
            "saturday": [ 2, 7, 13, 20 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 212,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/a-pair-of-unbeyond-1974.jpg',
          title: 'A pair of unbeyond',
          artist: 'Kishio Suga',
          year: '1974',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 17, 23 ],
            "wednesday": [ 6, 11, 17, 21 ],
            "thursday": [ 5, 8, 16, 21 ],
            "friday": [ 4, 8, 15, 20 ],
            "saturday": [ 3, 8, 14, 19 ],
            "sunday": [ 2, 7, 13, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 213,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/round-wooden-bar-in-red-blue-orange-green-yellow-and-violet-1975.jpg',
          title: 'Round Wooden Bar in Red, Blue, Orange, Green, Yellow and Violet',
          artist: 'Andre Cadere',
          year: '1975',
          rule: {
            "monday": [ 2, 7, 13, 20 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 17, 23 ],
            "thursday": [ 6, 11, 17, 21 ],
            "friday": [ 5, 8, 16, 21 ],
            "saturday": [ 4, 8, 15, 20 ],
            "sunday": [ 3, 8, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 214,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/indian-yellow-1975.jpg',
          title: 'Indian Yellow',
          artist: 'Marcia Hafif',
          year: '1975',
          rule: {
            "monday": [ 3, 8, 14, 19 ],
            "tuesday": [ 2, 7, 13, 20 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 17, 23 ],
            "friday": [ 6, 11, 17, 21 ],
            "saturday": [ 5, 8, 16, 21 ],
            "sunday": [ 4, 8, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 215,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/espai-horizontal-amb-nou-horizontal-1976.jpg',
          title: 'Espai horizontal amb nou horizontal',
          artist: 'Joan Hernandez Pijuan',
          year: '1976',
          rule: {
            "monday": [ 4, 8, 15, 20 ],
            "tuesday": [ 3, 8, 14, 19 ],
            "wednesday": [ 2, 7, 13, 20 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 17, 23 ],
            "saturday": [ 6, 11, 17, 21 ],
            "sunday": [ 5, 8, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 216,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-hill-1976.jpg',
          title: 'The Hill',
          artist: 'Horia Damian',
          year: '1976',
          rule: {
            "monday": [ 5, 8, 16, 21 ],
            "tuesday": [ 4, 8, 15, 20 ],
            "wednesday": [ 3, 8, 14, 19 ],
            "thursday": [ 2, 7, 13, 20 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 17, 23 ],
            "sunday": [ 6, 11, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 217,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1976.jpg',
          title: 'Untitled',
          artist: 'Robert Ryman',
          year: '1976',
          rule: {
            "monday": [ 7, 12, 18, 22 ],
            "tuesday": [ 6, 9, 17, 22 ],
            "wednesday": [ 5, 9, 16, 21 ],
            "thursday": [ 4, 9, 15, 20 ],
            "friday": [ 3, 8, 14, 21 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 218,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-sculptural-study-six-part-construction-detail-1977.jpg',
          title: 'Untitled (Sculptural Study, Six-part Construction) (detail)',
          artist: 'Fred Sandback',
          year: '1977',
          rule: {
            "monday": [ 8, 13, 18, 24 ],
            "tuesday": [ 7, 12, 18, 22 ],
            "wednesday": [ 6, 9, 17, 22 ],
            "thursday": [ 5, 9, 16, 21 ],
            "friday": [ 4, 9, 15, 20 ],
            "saturday": [ 3, 8, 14, 21 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 219,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/evers-1977.jpg',
          title: 'Evers',
          artist: 'Christopher Wilmarth',
          year: '1977',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 18, 24 ],
            "wednesday": [ 7, 12, 18, 22 ],
            "thursday": [ 6, 9, 17, 22 ],
            "friday": [ 5, 9, 16, 21 ],
            "saturday": [ 4, 9, 15, 20 ],
            "sunday": [ 3, 8, 14, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 220,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/blues-greens-1978.jpg',
          title: 'Blues-Greens',
          artist: 'Joan Hernandez Pijuan',
          year: '1978',
          rule: {
            "monday": [ 3, 8, 14, 21 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 18, 24 ],
            "thursday": [ 7, 12, 18, 22 ],
            "friday": [ 6, 9, 17, 22 ],
            "saturday": [ 5, 9, 16, 21 ],
            "sunday": [ 4, 9, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 221,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/hastings-visit-to-the-great-plains-1979.jpg',
          title: 'Hastings Visit to the Great Plains',
          artist: 'Sheila Hicks',
          year: '1979',
          rule: {
            "monday": [ 4, 9, 15, 20 ],
            "tuesday": [ 3, 8, 14, 21 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 18, 24 ],
            "friday": [ 7, 12, 18, 22 ],
            "saturday": [ 6, 9, 17, 22 ],
            "sunday": [ 5, 9, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 222,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1979(1).jpg',
          title: 'Untitled',
          artist: 'Myron Stout',
          year: '1979',
          rule: {
            "monday": [ 5, 9, 16, 21 ],
            "tuesday": [ 4, 9, 15, 20 ],
            "wednesday": [ 3, 8, 14, 21 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 18, 24 ],
            "saturday": [ 7, 12, 18, 22 ],
            "sunday": [ 6, 9, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 223,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-whim-of-tituba-1979.jpg',
          title: 'The Whim of Tituba',
          artist: 'Tony DeLap',
          year: '1979',
          rule: {
            "monday": [ 6, 9, 17, 22 ],
            "tuesday": [ 5, 9, 16, 21 ],
            "wednesday": [ 4, 9, 15, 20 ],
            "thursday": [ 3, 8, 14, 21 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 18, 24 ],
            "sunday": [ 7, 12, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 224,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/colonel-1980.jpg',
          title: 'Colonel',
          artist: 'Lyman Kipp',
          year: '1980',
          rule: {
            "monday": [ 8, 13, 19, 23 ],
            "tuesday": [ 7, 10, 18, 23 ],
            "wednesday": [ 6, 10, 17, 22 ],
            "thursday": [ 5, 10, 16, 21 ],
            "friday": [ 4, 9, 15, 22 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 225,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/black-lightining-garden-1981.jpg',
          title: 'Black Lightining (Garden)',
          artist: 'Ronald Bladen',
          year: '1981',
          rule: {
            "monday": [ 9, 14, 19, 25 ],
            "tuesday": [ 8, 13, 19, 23 ],
            "wednesday": [ 7, 10, 18, 23 ],
            "thursday": [ 6, 10, 17, 22 ],
            "friday": [ 5, 10, 16, 21 ],
            "saturday": [ 4, 9, 15, 22 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 226,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-white-cube-1982.jpg',
          title: 'The White Cube',
          artist: 'Stephen Antonakos',
          year: '1982',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 19, 25 ],
            "wednesday": [ 8, 13, 19, 23 ],
            "thursday": [ 7, 10, 18, 23 ],
            "friday": [ 6, 10, 17, 22 ],
            "saturday": [ 5, 10, 16, 21 ],
            "sunday": [ 4, 9, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 227,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/grille-color-branc-ii-1983.jpg',
          title: 'Grille-Color Branc II',
          artist: 'Jean Degottex',
          year: '1983',
          rule: {
            "monday": [ 4, 9, 15, 22 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 19, 25 ],
            "thursday": [ 8, 13, 19, 23 ],
            "friday": [ 7, 10, 18, 23 ],
            "saturday": [ 6, 10, 17, 22 ],
            "sunday": [ 5, 10, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 228,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/ligne-rouge-ii-n-19-1984.jpg',
          title: 'Ligne rouge II n°19',
          artist: 'Genevieve Asse',
          year: '1984',
          rule: {
            "monday": [ 5, 10, 16, 21 ],
            "tuesday": [ 4, 9, 15, 22 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 19, 25 ],
            "friday": [ 8, 13, 19, 23 ],
            "saturday": [ 7, 10, 18, 23 ],
            "sunday": [ 6, 10, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 229,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/vermillion-diary-no-4-1984.jpg',
          title: 'Vermillion Diary No. 4',
          artist: 'Frederic Matys Thursz',
          year: '1984',
          rule: {
            "monday": [ 6, 10, 17, 22 ],
            "tuesday": [ 5, 10, 16, 21 ],
            "wednesday": [ 4, 9, 15, 22 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 19, 25 ],
            "saturday": [ 8, 13, 19, 23 ],
            "sunday": [ 7, 10, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 230,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/edge-3-1985.jpg',
          title: 'Edge 3',
          artist: 'Warren Rohrer',
          year: '1985',
          rule: {
            "monday": [ 7, 10, 18, 23 ],
            "tuesday": [ 6, 10, 17, 22 ],
            "wednesday": [ 5, 10, 16, 21 ],
            "thursday": [ 4, 9, 15, 22 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 19, 25 ],
            "sunday": [ 8, 13, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 231,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/86-3-15q-1986.jpg',
          title: '86-3-15Q',
          artist: 'Angelo de Sousa',
          year: '1986',
          rule: {
            "monday": [ 9, 14, 20, 24 ],
            "tuesday": [ 8, 11, 19, 24 ],
            "wednesday": [ 7, 11, 18, 23 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 16, 23 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 232,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/creueta-del-coll-1987.jpg',
          title: 'Creueta del Coll',
          artist: 'Ellsworth Kelly',
          year: '1987',
          rule: {
            "monday": [ 10, 15, 20, 26 ],
            "tuesday": [ 9, 14, 20, 24 ],
            "wednesday": [ 8, 11, 19, 24 ],
            "thursday": [ 7, 11, 18, 23 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 16, 23 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 233,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/enamel-on-wood-blue-green-1989.jpg',
          title: 'Enamel on Wood: Blue Green',
          artist: 'Marcia Hafif',
          year: '1989',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 20, 26 ],
            "wednesday": [ 9, 14, 20, 24 ],
            "thursday": [ 8, 11, 19, 24 ],
            "friday": [ 7, 11, 18, 23 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 234,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/nine-singular-forms-1990.jpg',
          title: 'Nine Singular Forms',
          artist: 'Callum Innes',
          year: '1990',
          rule: {
            "monday": [ 5, 10, 16, 23 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 20, 26 ],
            "thursday": [ 9, 14, 20, 24 ],
            "friday": [ 8, 11, 19, 24 ],
            "saturday": [ 7, 11, 18, 23 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 235,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-4.jpg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: 'xx cent.',
          rule: {
            "monday": [ 6, 11, 17, 22 ],
            "tuesday": [ 5, 10, 16, 23 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 20, 26 ],
            "friday": [ 9, 14, 20, 24 ],
            "saturday": [ 8, 11, 19, 24 ],
            "sunday": [ 7, 11, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 236,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/courtyard-xiii-1991.jpg',
          title: 'Courtyard XIII',
          artist: 'Katsuhito Nishikawa',
          year: '1991',
          rule: {
            "monday": [ 7, 11, 18, 23 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 16, 23 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 20, 26 ],
            "saturday": [ 9, 14, 20, 24 ],
            "sunday": [ 8, 11, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 237,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/yin-yang-1992-1.jpg',
          title: 'Yin-Yang',
          artist: 'Victor Bonato',
          year: '1992',
          rule: {
            "monday": [ 8, 11, 19, 24 ],
            "tuesday": [ 7, 11, 18, 23 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 16, 23 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 20, 26 ],
            "sunday": [ 9, 14, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 238,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/dark-love-1993.jpg',
          title: 'Dark Love',
          artist: 'Pat Lipsky',
          year: '1993',
          rule: {
            "monday": [ 10, 15, 21, 25 ],
            "tuesday": [ 9, 12, 20, 25 ],
            "wednesday": [ 8, 12, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 24 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 239,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/pittura-bl-g-1993.jpg',
          title: 'Pittura BL.G.',
          artist: 'Pino Pinelli',
          year: '1993',
          rule: {
            "monday": [ 11, 16, 21, 27 ],
            "tuesday": [ 10, 15, 21, 25 ],
            "wednesday": [ 9, 12, 20, 25 ],
            "thursday": [ 8, 12, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 24 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 240,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1994-3.jpg',
          title: 'Untitled',
          artist: 'Moshe Kupferman',
          year: '1994',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 21, 27 ],
            "wednesday": [ 10, 15, 21, 25 ],
            "thursday": [ 9, 12, 20, 25 ],
            "friday": [ 8, 12, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 241,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/horizontal-painting-in-7-vertical-parts-1996.jpg',
          title: 'Horizontal Painting in 7 Vertical Parts',
          artist: 'Alan Charlton',
          year: '1996',
          rule: {
            "monday": [ 6, 11, 17, 24 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 21, 27 ],
            "thursday": [ 10, 15, 21, 25 ],
            "friday": [ 9, 12, 20, 25 ],
            "saturday": [ 8, 12, 19, 24 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 242,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/parva-xxxviii-1996.jpg',
          title: 'Parva XXXVIII',
          artist: 'Anne Truitt',
          year: '1996',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 24 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 21, 27 ],
            "friday": [ 10, 15, 21, 25 ],
            "saturday": [ 9, 12, 20, 25 ],
            "sunday": [ 8, 12, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 243,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/oh-1996.jpg',
          title: 'Oh!',
          artist: 'Grazia Varisco',
          year: '1996',
          rule: {
            "monday": [ 8, 12, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 24 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 21, 27 ],
            "saturday": [ 10, 15, 21, 25 ],
            "sunday": [ 9, 12, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 244,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1997-1.jpg',
          title: 'Untitled',
          artist: 'Moshe Kupferman',
          year: '1997',
          rule: {
            "monday": [ 9, 12, 20, 25 ],
            "tuesday": [ 8, 12, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 24 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 21, 27 ],
            "sunday": [ 10, 15, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 245,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/exposed-painting-olive-green-1998.jpg',
          title: 'Exposed Painting, Olive Green',
          artist: 'Callum Innes',
          year: '1998',
          rule: {
            "monday": [ 11, 16, 22, 26 ],
            "tuesday": [ 10, 13, 21, 26 ],
            "wednesday": [ 9, 13, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 25 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 246,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/magnetic-love-affair-1998.jpg',
          title: 'Magnetic Love Affair',
          artist: 'Sheila Hicks',
          year: '1998',
          rule: {
            "monday": [ 12, 17, 22, 28 ],
            "tuesday": [ 11, 16, 22, 26 ],
            "wednesday": [ 10, 13, 21, 26 ],
            "thursday": [ 9, 13, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 25 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 247,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/zobop-installation-view-1999-1.jpg',
          title: 'Zobop (installation view)',
          artist: 'Jim Lambie',
          year: '1999',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 22, 28 ],
            "wednesday": [ 11, 16, 22, 26 ],
            "thursday": [ 10, 13, 21, 26 ],
            "friday": [ 9, 13, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 248,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/traces-2000.jpg',
          title: 'Traces',
          artist: 'Yves Gaucher',
          year: '2000',
          rule: {
            "monday": [ 7, 12, 18, 25 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 22, 28 ],
            "thursday": [ 11, 16, 22, 26 ],
            "friday": [ 10, 13, 21, 26 ],
            "saturday": [ 9, 13, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 249,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/senza-titolo-sottosopra-2000.jpg',
          title: 'Senza Titolo, Sottosopra',
          artist: 'Ettore Spalletti',
          year: '2000',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 25 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 22, 28 ],
            "friday": [ 11, 16, 22, 26 ],
            "saturday": [ 10, 13, 21, 26 ],
            "sunday": [ 9, 13, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 250,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-2001a.jpg',
          title: 'Untitled',
          artist: 'Edward Krasinski',
          year: '2001',
          rule: {
            "monday": [ 9, 13, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 25 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 22, 28 ],
            "saturday": [ 11, 16, 22, 26 ],
            "sunday": [ 10, 13, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 251,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/this-is-not-a-landscape-2002.jpg',
          title: 'This Is Not a Landscape',
          artist: 'Fernando Calhau',
          year: '2002',
          rule: {
            "monday": [ 10, 13, 21, 26 ],
            "tuesday": [ 9, 13, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 25 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 22, 28 ],
            "sunday": [ 11, 16, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 252,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/work-no-275-small-things-2003.jpg',
          title: 'Work No. 275 (Small Things)',
          artist: 'Martin Creed',
          year: '2003',
          rule: {
            "monday": [ 12, 17, 23, 27 ],
            "tuesday": [ 11, 14, 22, 27 ],
            "wednesday": [ 10, 14, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 26 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 18, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 253,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/20-pearls-1-2003.jpg',
          title: '20 Pearls (1)',
          artist: 'Richard Tuttle',
          year: '2003',
          rule: {
            "monday": [ 13, 18, 23, 29 ],
            "tuesday": [ 12, 17, 23, 27 ],
            "wednesday": [ 11, 14, 22, 27 ],
            "thursday": [ 10, 14, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 26 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 254,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/20-pearls-8-2003.jpg',
          title: '20 Pearls (8)',
          artist: 'Richard Tuttle',
          year: '2003',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 18, 23, 29 ],
            "wednesday": [ 12, 17, 23, 27 ],
            "thursday": [ 11, 14, 22, 27 ],
            "friday": [ 10, 14, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 255,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/gray-wood-2003.jpg',
          title: 'Gray Wood',
          artist: 'Alex Hay',
          year: '2003',
          rule: {
            "monday": [ 8, 13, 19, 26 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 18, 23, 29 ],
            "thursday": [ 12, 17, 23, 27 ],
            "friday": [ 11, 14, 22, 27 ],
            "saturday": [ 10, 14, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 256,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/shared-space-2004.jpg',
          title: 'Shared Space',
          artist: 'Genevieve Asse',
          year: '2004',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 26 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 18, 23, 29 ],
            "friday": [ 12, 17, 23, 27 ],
            "saturday": [ 11, 14, 22, 27 ],
            "sunday": [ 10, 14, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 257,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/peinture-130-x-81-cm-20-03-2004-2004.jpg',
          title: 'Peinture 130 x 81 cm, 20-03-2004',
          artist: 'Pierre Soulages',
          year: '2004',
          rule: {
            "monday": [ 10, 14, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 26 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 18, 23, 29 ],
            "saturday": [ 12, 17, 23, 27 ],
            "sunday": [ 11, 14, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 258,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/plaza-2005.jpg',
          title: 'Plaza',
          artist: 'Jim Lambie',
          year: '2005',
          rule: {
            "monday": [ 11, 14, 22, 27 ],
            "tuesday": [ 10, 14, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 26 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 18, 23, 29 ],
            "sunday": [ 12, 17, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 259,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/exposed-painting-dioxazine-violet-2006.jpg',
          title: 'Exposed Painting Dioxazine Violet',
          artist: 'Callum Innes',
          year: '2006',
          rule: {
            "monday": [ 13, 18, 24, 28 ],
            "tuesday": [ 12, 15, 23, 28 ],
            "wednesday": [ 11, 15, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 27 ],
            "saturday": [ 15, 20, 26, 1 ],
            "sunday": [ 14, 19, 24, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 260,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/ecriture-no-070201-2007.jpg',
          title: 'Ecriture No. 070201',
          artist: 'Park Seo-Bo',
          year: '2007',
          rule: {
            "monday": [ 14, 19, 24, 30 ],
            "tuesday": [ 13, 18, 24, 28 ],
            "wednesday": [ 12, 15, 23, 28 ],
            "thursday": [ 11, 15, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 27 ],
            "sunday": [ 15, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 261,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/past-time-2007.jpg',
          title: 'Past Time',
          artist: 'Alex Hay',
          year: '2007',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 19, 24, 30 ],
            "wednesday": [ 13, 18, 24, 28 ],
            "thursday": [ 12, 15, 23, 28 ],
            "friday": [ 11, 15, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 262,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/kiwa-2008.jpg',
          title: 'KIWA',
          artist: 'Jurgen Partenheimer',
          year: '2008',
          rule: {
            "monday": [ 9, 14, 20, 27 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 19, 24, 30 ],
            "thursday": [ 13, 18, 24, 28 ],
            "friday": [ 12, 15, 23, 28 ],
            "saturday": [ 11, 15, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 263,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/photo-souvenir-westwind-vent-d-ouest-travail-situ-2010.jpg',
          title: 'Photo-souvenir: Westwind (Vent d’ouest), travail situé',
          artist: 'Daniel Buren',
          year: '2010',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 27 ],
            "wednesday": [ 15, 20, 26, 1 ],
            "thursday": [ 14, 19, 24, 30 ],
            "friday": [ 13, 18, 24, 28 ],
            "saturday": [ 12, 15, 23, 28 ],
            "sunday": [ 11, 15, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 264,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/sculpture-in-front-of-burgo-empreendimento.jpg',
          title: 'Sculpture in front of Burgo Empreendimento',
          artist: 'Angelo de Sousa',
          year: 'xx - xxi cent.',
          rule: {
            "monday": [ 11, 15, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 27 ],
            "thursday": [ 15, 20, 26, 1 ],
            "friday": [ 14, 19, 24, 30 ],
            "saturday": [ 13, 18, 24, 28 ],
            "sunday": [ 12, 15, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 265,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/slugfest-2012.jpg',
          title: 'Slugfest',
          artist: 'David Batchelor',
          year: '2012',
          rule: {
            "monday": [ 12, 15, 23, 28 ],
            "tuesday": [ 11, 15, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 27 ],
            "friday": [ 15, 20, 26, 1 ],
            "saturday": [ 14, 19, 24, 30 ],
            "sunday": [ 13, 18, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 266,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/seen-unseen-known-unknown.jpg',
          title: 'Seen/Unseen Known/Unknown',
          artist: 'Walter De Maria',
          year: 'xx-xxi cent.',
          rule: {
            "monday": [ 14, 19, 25, 29 ],
            "tuesday": [ 13, 16, 24, 29 ],
            "wednesday": [ 12, 16, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 28 ],
            "saturday": [ 16, 21, 27, 2 ],
            "sunday": [ 15, 20, 25, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 267,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/yeux-delphique.jpg',
          title: 'Yeux delphique',
          artist: 'Daniel Dezeuze',
          year: 'xx cent.',
          rule: {
            "monday": [ 15, 20, 25, 1 ],
            "tuesday": [ 14, 19, 25, 29 ],
            "wednesday": [ 13, 16, 24, 29 ],
            "thursday": [ 12, 16, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 28 ],
            "sunday": [ 16, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 268,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/tape-floor.jpg',
          title: 'Tape Floor',
          artist: 'Jim Lambie',
          year: 'xx cent.',
          rule: {
            "monday": [ 16, 21, 27, 2 ],
            "tuesday": [ 15, 20, 25, 1 ],
            "wednesday": [ 14, 19, 25, 29 ],
            "thursday": [ 13, 16, 24, 29 ],
            "friday": [ 12, 16, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 269,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/gro-e-kn-pfung-1953.jpg',
          title: 'Große Knüpfung',
          artist: 'Herbert Zangs',
          year: '1953',
          rule: {
            "monday": [ 10, 15, 21, 28 ],
            "tuesday": [ 16, 21, 27, 2 ],
            "wednesday": [ 15, 20, 25, 1 ],
            "thursday": [ 14, 19, 25, 29 ],
            "friday": [ 13, 16, 24, 29 ],
            "saturday": [ 12, 16, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 270,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1955.jpg',
          title: 'Untitled',
          artist: 'Myron Stout',
          year: '1955',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 28 ],
            "wednesday": [ 16, 21, 27, 2 ],
            "thursday": [ 15, 20, 25, 1 ],
            "friday": [ 14, 19, 25, 29 ],
            "saturday": [ 13, 16, 24, 29 ],
            "sunday": [ 12, 16, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 271,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/peinture-relief-1955.jpg',
          title: 'Peinture-Relief',
          artist: 'Herbert Zangs',
          year: '1955',
          rule: {
            "monday": [ 12, 16, 23, 28 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 28 ],
            "thursday": [ 16, 21, 27, 2 ],
            "friday": [ 15, 20, 25, 1 ],
            "saturday": [ 14, 19, 25, 29 ],
            "sunday": [ 13, 16, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 272,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-white-monochrome-1957-1.jpg',
          title: 'Untitled White Monochrome',
          artist: 'Yves Klein',
          year: 'c.1957',
          rule: {
            "monday": [ 13, 16, 24, 29 ],
            "tuesday": [ 12, 16, 23, 28 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 28 ],
            "friday": [ 16, 21, 27, 2 ],
            "saturday": [ 15, 20, 25, 1 ],
            "sunday": [ 14, 19, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 273,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/achrome-1958.jpg',
          title: 'Achrome',
          artist: 'Piero Manzoni',
          year: '1958',
          rule: {
            "monday": [ 15, 20, 26, 30 ],
            "tuesday": [ 14, 17, 25, 30 ],
            "wednesday": [ 13, 17, 24, 29 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 29 ],
            "saturday": [ 17, 22, 28, 3 ],
            "sunday": [ 16, 21, 26, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 274,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/hopewell-valley-sun-1959.jpg',
          title: 'Hopewell Valley Sun',
          artist: 'Walter Darby Bannard',
          year: '1959',
          rule: {
            "monday": [ 16, 21, 26, 2 ],
            "tuesday": [ 15, 20, 26, 30 ],
            "wednesday": [ 14, 17, 25, 30 ],
            "thursday": [ 13, 17, 24, 29 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 29 ],
            "sunday": [ 17, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 275,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-marriage-of-reason-and-squalor-1959.jpg',
          title: 'The Marriage of Reason and Squalor',
          artist: 'Frank Stella',
          year: '1959',
          rule: {
            "monday": [ 17, 22, 28, 3 ],
            "tuesday": [ 16, 21, 26, 2 ],
            "wednesday": [ 15, 20, 26, 30 ],
            "thursday": [ 14, 17, 25, 30 ],
            "friday": [ 13, 17, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 276,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/volume-a-moduli-sfasati-1960.jpg',
          title: 'Volume a moduli sfasati',
          artist: 'Dadamaino',
          year: '1960',
          rule: {
            "monday": [ 11, 16, 22, 29 ],
            "tuesday": [ 17, 22, 28, 3 ],
            "wednesday": [ 16, 21, 26, 2 ],
            "thursday": [ 15, 20, 26, 30 ],
            "friday": [ 14, 17, 25, 30 ],
            "saturday": [ 13, 17, 24, 29 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 277,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-islands-1961(1).jpg',
          title: 'The Islands',
          artist: 'Agnes Martin',
          year: 'c.1961',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 29 ],
            "wednesday": [ 17, 22, 28, 3 ],
            "thursday": [ 16, 21, 26, 2 ],
            "friday": [ 15, 20, 26, 30 ],
            "saturday": [ 14, 17, 25, 30 ],
            "sunday": [ 13, 17, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 278,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/one-1962.jpg',
          title: 'One',
          artist: 'Anne Truitt',
          year: '1962',
          rule: {
            "monday": [ 13, 17, 24, 29 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 29 ],
            "thursday": [ 17, 22, 28, 3 ],
            "friday": [ 16, 21, 26, 2 ],
            "saturday": [ 15, 20, 26, 30 ],
            "sunday": [ 14, 17, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 279,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/squiggle-1962.jpg',
          title: 'Squiggle',
          artist: 'Sheila Hicks',
          year: '1962',
          rule: {
            "monday": [ 14, 17, 25, 30 ],
            "tuesday": [ 13, 17, 24, 29 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 29 ],
            "friday": [ 17, 22, 28, 3 ],
            "saturday": [ 16, 21, 26, 2 ],
            "sunday": [ 15, 20, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 280,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/folding-scroll-1963.jpg',
          title: 'Folding Scroll',
          artist: 'Li Yuan-chia',
          year: '1963',
          rule: {
            "monday": [ 16, 21, 27, 1 ],
            "tuesday": [ 15, 18, 25, 30 ],
            "wednesday": [ 14, 18, 25, 30 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 23, 30 ],
            "saturday": [ 18, 23, 29, 4 ],
            "sunday": [ 17, 22, 27, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 281,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/number-14-1963.jpg',
          title: 'Number 14',
          artist: 'John McLaughlin',
          year: '1963',
          rule: {
            "monday": [ 17, 22, 27, 3 ],
            "tuesday": [ 16, 21, 27, 1 ],
            "wednesday": [ 15, 18, 25, 30 ],
            "thursday": [ 14, 18, 25, 30 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 23, 30 ],
            "sunday": [ 18, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 282,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/60-t-18-1960.jpg',
          title: '60-T-18',
          artist: 'Martin Barre',
          year: '1960',
          rule: {
            "monday": [ 18, 23, 29, 4 ],
            "tuesday": [ 17, 22, 27, 3 ],
            "wednesday": [ 16, 21, 27, 1 ],
            "thursday": [ 15, 18, 25, 30 ],
            "friday": [ 14, 18, 25, 30 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 23, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 283,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/chicken-wire-1963.jpg',
          title: 'Chicken Wire',
          artist: 'Alex Hay',
          year: '1963',
          rule: {
            "monday": [ 12, 17, 23, 30 ],
            "tuesday": [ 18, 23, 29, 4 ],
            "wednesday": [ 17, 22, 27, 3 ],
            "thursday": [ 16, 21, 27, 1 ],
            "friday": [ 15, 18, 25, 30 ],
            "saturday": [ 14, 18, 25, 30 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 284,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1963(1).jpg',
          title: 'Untitled',
          artist: 'Mira Schendel',
          year: '1963',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 23, 30 ],
            "wednesday": [ 18, 23, 29, 4 ],
            "thursday": [ 17, 22, 27, 3 ],
            "friday": [ 16, 21, 27, 1 ],
            "saturday": [ 15, 18, 25, 30 ],
            "sunday": [ 14, 18, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 285,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/a-primary-picture-1964.jpg',
          title: 'A primary picture',
          artist: 'Dan Flavin',
          year: '1964',
          rule: {
            "monday": [ 14, 18, 25, 30 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 23, 30 ],
            "thursday": [ 18, 23, 29, 4 ],
            "friday": [ 17, 22, 27, 3 ],
            "saturday": [ 16, 21, 27, 1 ],
            "sunday": [ 15, 18, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 286,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/black-painting-1964.jpg',
          title: 'Black Painting',
          artist: 'Ralph Hotere',
          year: '1964',
          rule: {
            "monday": [ 15, 18, 25, 30 ],
            "tuesday": [ 14, 18, 25, 30 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 23, 30 ],
            "friday": [ 18, 23, 29, 4 ],
            "saturday": [ 17, 22, 27, 3 ],
            "sunday": [ 16, 21, 27, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 287,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-negative-way-4-1964.jpg',
          title: 'The Negative Way #4',
          artist: 'Paul Brach',
          year: '1964',
          rule: {
            "monday": [ 17, 22, 28, 2 ],
            "tuesday": [ 16, 19, 26, 1 ],
            "wednesday": [ 15, 19, 26, 1 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 18, 24, 1 ],
            "saturday": [ 19, 24, 30, 5 ],
            "sunday": [ 18, 23, 28, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 288,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/vertical-man-1964.jpg',
          title: 'Vertical Man',
          artist: 'Noguchi Isamu',
          year: '1964',
          rule: {
            "monday": [ 18, 23, 28, 4 ],
            "tuesday": [ 17, 22, 28, 2 ],
            "wednesday": [ 16, 19, 26, 1 ],
            "thursday": [ 15, 19, 26, 1 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 18, 24, 1 ],
            "sunday": [ 19, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 289,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-harvest-1965.jpg',
          title: 'The Harvest',
          artist: 'Agnes Martin',
          year: '1965',
          rule: {
            "monday": [ 19, 24, 30, 5 ],
            "tuesday": [ 18, 23, 28, 4 ],
            "wednesday": [ 17, 22, 28, 2 ],
            "thursday": [ 16, 19, 26, 1 ],
            "friday": [ 15, 19, 26, 1 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 290,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/wave-1965.jpg',
          title: 'Wave',
          artist: 'Richard Tuttle',
          year: '1965',
          rule: {
            "monday": [ 13, 18, 24, 1 ],
            "tuesday": [ 19, 24, 30, 5 ],
            "wednesday": [ 18, 23, 28, 4 ],
            "thursday": [ 17, 22, 28, 2 ],
            "friday": [ 16, 19, 26, 1 ],
            "saturday": [ 15, 19, 26, 1 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 291,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/peinture-n-10-1965.jpg',
          title: 'Peinture n°10',
          artist: 'Michel Parmentier',
          year: '1965',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 18, 24, 1 ],
            "wednesday": [ 19, 24, 30, 5 ],
            "thursday": [ 18, 23, 28, 4 ],
            "friday": [ 17, 22, 28, 2 ],
            "saturday": [ 16, 19, 26, 1 ],
            "sunday": [ 15, 19, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 292,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/rainbow-pickett-1965.jpg',
          title: 'Rainbow Pickett',
          artist: 'Judy Chicago',
          year: '1965',
          rule: {
            "monday": [ 15, 19, 26, 1 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 18, 24, 1 ],
            "thursday": [ 19, 24, 30, 5 ],
            "friday": [ 18, 23, 28, 4 ],
            "saturday": [ 17, 22, 28, 2 ],
            "sunday": [ 16, 19, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 293,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-dylan-painting-1966(1).jpg',
          title: 'The Dylan Painting',
          artist: 'Brice Marden',
          year: '1966',
          rule: {
            "monday": [ 16, 19, 26, 1 ],
            "tuesday": [ 15, 19, 26, 1 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 18, 24, 1 ],
            "friday": [ 19, 24, 30, 5 ],
            "saturday": [ 18, 23, 28, 4 ],
            "sunday": [ 17, 22, 28, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 294,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/fold-1966-1(1).jpg',
          title: 'Fold',
          artist: 'Charlotte Posenenske',
          year: '1966',
          rule: {
            "monday": [ 18, 23, 29, 3 ],
            "tuesday": [ 17, 20, 27, 2 ],
            "wednesday": [ 16, 20, 27, 2 ],
            "thursday": [ 15, 20, 26, 1 ],
            "friday": [ 14, 19, 25, 2 ],
            "saturday": [ 20, 25, 1, 6 ],
            "sunday": [ 19, 24, 29, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 295,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/golden-age-1966.jpg',
          title: 'Golden Age',
          artist: 'Jeremy Moon',
          year: '1966',
          rule: {
            "monday": [ 19, 24, 29, 5 ],
            "tuesday": [ 18, 23, 29, 3 ],
            "wednesday": [ 17, 20, 27, 2 ],
            "thursday": [ 16, 20, 27, 2 ],
            "friday": [ 15, 20, 26, 1 ],
            "saturday": [ 14, 19, 25, 2 ],
            "sunday": [ 20, 25, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 296,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/slant-1966.jpg',
          title: 'Slant',
          artist: 'Phillip King',
          year: '1966',
          rule: {
            "monday": [ 20, 25, 1, 6 ],
            "tuesday": [ 19, 24, 29, 5 ],
            "wednesday": [ 18, 23, 29, 3 ],
            "thursday": [ 17, 20, 27, 2 ],
            "friday": [ 16, 20, 27, 2 ],
            "saturday": [ 15, 20, 26, 1 ],
            "sunday": [ 14, 19, 25, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 297,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/serial-project-set-b-1966.jpg',
          title: 'Serial Project (Set B)',
          artist: 'Sol LeWitt',
          year: '1966',
          rule: {
            "monday": [ 14, 19, 25, 2 ],
            "tuesday": [ 20, 25, 1, 6 ],
            "wednesday": [ 19, 24, 29, 5 ],
            "thursday": [ 18, 23, 29, 3 ],
            "friday": [ 17, 20, 27, 2 ],
            "saturday": [ 16, 20, 27, 2 ],
            "sunday": [ 15, 20, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 298,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/square-tubes-series-d-1967-1(1).jpg',
          title: 'Square Tubes [Series D]',
          artist: 'Charlotte Posenenske',
          year: '1967',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 19, 25, 2 ],
            "wednesday": [ 20, 25, 1, 6 ],
            "thursday": [ 19, 24, 29, 5 ],
            "friday": [ 18, 23, 29, 3 ],
            "saturday": [ 17, 20, 27, 2 ],
            "sunday": [ 16, 20, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 299,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/no-62-black-blue-violet-blue-1967.jpg',
          title: 'No. 62 (Black/Blue/Violet/Blue)',
          artist: 'Bob Law',
          year: '1967',
          rule: {
            "monday": [ 16, 20, 27, 2 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 19, 25, 2 ],
            "thursday": [ 20, 25, 1, 6 ],
            "friday": [ 19, 24, 29, 5 ],
            "saturday": [ 18, 23, 29, 3 ],
            "sunday": [ 17, 20, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 300,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/print-1-1967.jpg',
          title: 'Print 1',
          artist: 'Bernard Cohen',
          year: '1967',
          rule: {
            "monday": [ 17, 20, 27, 2 ],
            "tuesday": [ 16, 20, 27, 2 ],
            "wednesday": [ 15, 20, 26, 1 ],
            "thursday": [ 14, 19, 25, 2 ],
            "friday": [ 20, 25, 1, 6 ],
            "saturday": [ 19, 24, 29, 5 ],
            "sunday": [ 18, 23, 29, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 301,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/muscoot-1967.jpg',
          title: 'Muscoot',
          artist: 'Lyman Kipp',
          year: '1967',
          rule: {
            "monday": [ 19, 23, 30, 4 ],
            "tuesday": [ 18, 21, 28, 3 ],
            "wednesday": [ 17, 21, 28, 3 ],
            "thursday": [ 16, 21, 27, 2 ],
            "friday": [ 15, 20, 26, 3 ],
            "saturday": [ 21, 26, 2, 7 ],
            "sunday": [ 20, 25, 30, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 302,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled---1967.jpg',
          title: 'Untitled',
          artist: 'Tess Jaray',
          year: '1967',
          rule: {
            "monday": [ 20, 25, 30, 6 ],
            "tuesday": [ 19, 23, 30, 4 ],
            "wednesday": [ 18, 21, 28, 3 ],
            "thursday": [ 17, 21, 28, 3 ],
            "friday": [ 16, 21, 27, 2 ],
            "saturday": [ 15, 20, 26, 3 ],
            "sunday": [ 21, 26, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 303,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/addendum-1967.jpg',
          title: 'Addendum',
          artist: 'Eva Hesse',
          year: '1967',
          rule: {
            "monday": [ 21, 26, 2, 7 ],
            "tuesday": [ 20, 25, 30, 6 ],
            "wednesday": [ 19, 23, 30, 4 ],
            "thursday": [ 18, 21, 28, 3 ],
            "friday": [ 17, 21, 28, 3 ],
            "saturday": [ 16, 21, 27, 2 ],
            "sunday": [ 15, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 304,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/my-name-as-though-it-were-written-on-the-surface-of-the-moon-1968.jpg',
          title: 'My Name as Though It Were Written on the Surface of the Moon',
          artist: 'Bruce Nauman',
          year: '1968',
          rule: {
            "monday": [ 15, 20, 26, 3 ],
            "tuesday": [ 21, 26, 2, 7 ],
            "wednesday": [ 20, 25, 30, 6 ],
            "thursday": [ 19, 23, 30, 4 ],
            "friday": [ 18, 21, 28, 3 ],
            "saturday": [ 17, 21, 28, 3 ],
            "sunday": [ 16, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 305,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/specchio-1968.jpg',
          title: 'Specchio',
          artist: 'Giovanni Anselmo',
          year: '1968',
          rule: {
            "monday": [ 16, 21, 27, 2 ],
            "tuesday": [ 15, 20, 26, 3 ],
            "wednesday": [ 21, 26, 2, 7 ],
            "thursday": [ 20, 25, 30, 6 ],
            "friday": [ 19, 23, 30, 4 ],
            "saturday": [ 18, 21, 28, 3 ],
            "sunday": [ 17, 21, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 306,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/asteriskos-1968.jpg',
          title: 'Asteriskos',
          artist: 'Tony Smith',
          year: '1968',
          rule: {
            "monday": [ 17, 21, 28, 3 ],
            "tuesday": [ 16, 21, 27, 2 ],
            "wednesday": [ 15, 20, 26, 3 ],
            "thursday": [ 21, 26, 2, 7 ],
            "friday": [ 20, 25, 30, 6 ],
            "saturday": [ 19, 23, 30, 4 ],
            "sunday": [ 18, 21, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 307,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/18-f-vrier-1968.jpg',
          title: '18 février',
          artist: 'Michel Parmentier',
          year: '1968',
          rule: {
            "monday": [ 18, 21, 28, 3 ],
            "tuesday": [ 17, 21, 28, 3 ],
            "wednesday": [ 16, 21, 27, 2 ],
            "thursday": [ 15, 20, 26, 3 ],
            "friday": [ 21, 26, 2, 7 ],
            "saturday": [ 20, 25, 30, 6 ],
            "sunday": [ 19, 23, 30, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 308,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/zeshoeken-1968.jpg',
          title: 'Zeshoeken',
          artist: 'Johannes Jan Schoonhoven',
          year: '1968',
          rule: {
            "monday": [ 20, 24, 1, 5 ],
            "tuesday": [ 19, 22, 29, 4 ],
            "wednesday": [ 18, 22, 29, 4 ],
            "thursday": [ 17, 22, 28, 3 ],
            "friday": [ 16, 21, 27, 4 ],
            "saturday": [ 22, 27, 3, 8 ],
            "sunday": [ 21, 26, 1, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 309,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/architectural-details-with-shadows-1969.jpg',
          title: 'Architectural Details with Shadows',
          artist: 'Robert Huot',
          year: '1969',
          rule: {
            "monday": [ 21, 26, 1, 7 ],
            "tuesday": [ 20, 24, 1, 5 ],
            "wednesday": [ 19, 22, 29, 4 ],
            "thursday": [ 18, 22, 29, 4 ],
            "friday": [ 17, 22, 28, 3 ],
            "saturday": [ 16, 21, 27, 4 ],
            "sunday": [ 22, 27, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 310,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/butterfly-ii-1969.jpg',
          title: 'Butterfly II',
          artist: 'Blinky Palermo',
          year: '1969',
          rule: {
            "monday": [ 22, 27, 3, 8 ],
            "tuesday": [ 21, 26, 1, 7 ],
            "wednesday": [ 20, 24, 1, 5 ],
            "thursday": [ 19, 22, 29, 4 ],
            "friday": [ 18, 22, 29, 4 ],
            "saturday": [ 17, 22, 28, 3 ],
            "sunday": [ 16, 21, 27, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 311,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/menhir-ii-1969.jpg',
          title: 'Menhir II',
          artist: 'Sheila Hicks',
          year: '1969',
          rule: {
            "monday": [ 16, 21, 27, 4 ],
            "tuesday": [ 22, 27, 3, 8 ],
            "wednesday": [ 21, 26, 1, 7 ],
            "thursday": [ 20, 24, 1, 5 ],
            "friday": [ 19, 22, 29, 4 ],
            "saturday": [ 18, 22, 29, 4 ],
            "sunday": [ 17, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 312,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/slack-of-net-1969.jpg',
          title: 'Slack of Net',
          artist: 'Takamatsu Jiro',
          year: '1969',
          rule: {
            "monday": [ 17, 22, 28, 3 ],
            "tuesday": [ 16, 21, 27, 4 ],
            "wednesday": [ 22, 27, 3, 8 ],
            "thursday": [ 21, 26, 1, 7 ],
            "friday": [ 20, 24, 1, 5 ],
            "saturday": [ 19, 22, 29, 4 ],
            "sunday": [ 18, 22, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 313,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/fourths-1969.jpg',
          title: 'Fourths',
          artist: 'Mark Lancaster',
          year: '1969',
          rule: {
            "monday": [ 18, 22, 29, 4 ],
            "tuesday": [ 17, 22, 28, 3 ],
            "wednesday": [ 16, 21, 27, 4 ],
            "thursday": [ 22, 27, 3, 8 ],
            "friday": [ 21, 26, 1, 7 ],
            "saturday": [ 20, 24, 1, 5 ],
            "sunday": [ 19, 22, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 314,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/to-martha-s-memory-1970.jpg',
          title: 'To Martha\'s Memory',
          artist: 'Jiro Yoshihara',
          year: '1970',
          rule: {
            "monday": [ 19, 22, 29, 4 ],
            "tuesday": [ 18, 22, 29, 4 ],
            "wednesday": [ 17, 22, 28, 3 ],
            "thursday": [ 16, 21, 27, 4 ],
            "friday": [ 22, 27, 3, 8 ],
            "saturday": [ 21, 26, 1, 7 ],
            "sunday": [ 20, 24, 1, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 315,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-polychrome-bar-1970.jpg',
          title: 'Untitled (Polychrome Bar)',
          artist: 'Andre Cadere',
          year: '1970',
          rule: {
            "monday": [ 21, 25, 2, 6 ],
            "tuesday": [ 20, 23, 30, 5 ],
            "wednesday": [ 19, 23, 30, 5 ],
            "thursday": [ 18, 23, 29, 4 ],
            "friday": [ 17, 22, 28, 5 ],
            "saturday": [ 23, 28, 4, 9 ],
            "sunday": [ 22, 27, 2, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 316,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1970.jpg',
          title: 'Untitled',
          artist: 'Olivier Mosset',
          year: '1970',
          rule: {
            "monday": [ 22, 27, 2, 8 ],
            "tuesday": [ 21, 25, 2, 6 ],
            "wednesday": [ 20, 23, 30, 5 ],
            "thursday": [ 19, 23, 30, 5 ],
            "friday": [ 18, 23, 29, 4 ],
            "saturday": [ 17, 22, 28, 5 ],
            "sunday": [ 23, 28, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 317,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-void-1970.jpg',
          title: 'The Void',
          artist: 'Noguchi Isamu',
          year: '1970',
          rule: {
            "monday": [ 23, 28, 4, 9 ],
            "tuesday": [ 22, 27, 2, 8 ],
            "wednesday": [ 21, 25, 2, 6 ],
            "thursday": [ 20, 23, 30, 5 ],
            "friday": [ 19, 23, 30, 5 ],
            "saturday": [ 18, 23, 29, 4 ],
            "sunday": [ 17, 22, 28, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 318,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/utopia-table-lamp-1970.jpg',
          title: 'Utopia Table Lamp',
          artist: 'Nanda Vigo',
          year: '1970',
          rule: {
            "monday": [ 17, 22, 28, 5 ],
            "tuesday": [ 23, 28, 4, 9 ],
            "wednesday": [ 22, 27, 2, 8 ],
            "thursday": [ 21, 25, 2, 6 ],
            "friday": [ 20, 23, 30, 5 ],
            "saturday": [ 19, 23, 30, 5 ],
            "sunday": [ 18, 23, 29, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 319,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/r-partition-r-guli-re-de-carr-s-1971.jpg',
          title: 'Répartition régulière de carrés',
          artist: 'Francois Morellet',
          year: '1971',
          rule: {
            "monday": [ 18, 23, 29, 4 ],
            "tuesday": [ 17, 22, 28, 5 ],
            "wednesday": [ 23, 28, 4, 9 ],
            "thursday": [ 22, 27, 2, 8 ],
            "friday": [ 21, 25, 2, 6 ],
            "saturday": [ 20, 23, 30, 5 ],
            "sunday": [ 19, 23, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 320,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/work-1971.jpg',
          title: 'Work',
          artist: 'Jiro Yoshihara',
          year: '1971',
          rule: {
            "monday": [ 19, 23, 30, 5 ],
            "tuesday": [ 18, 23, 29, 4 ],
            "wednesday": [ 17, 22, 28, 5 ],
            "thursday": [ 23, 28, 4, 9 ],
            "friday": [ 22, 27, 2, 8 ],
            "saturday": [ 21, 25, 2, 6 ],
            "sunday": [ 20, 23, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 321,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1971.jpg',
          title: 'Untitled',
          artist: 'Fred Sandback',
          year: '1971',
          rule: {
            "monday": [ 20, 23, 30, 5 ],
            "tuesday": [ 19, 23, 30, 5 ],
            "wednesday": [ 18, 23, 29, 4 ],
            "thursday": [ 17, 22, 28, 5 ],
            "friday": [ 23, 28, 4, 9 ],
            "saturday": [ 22, 27, 2, 8 ],
            "sunday": [ 21, 25, 2, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 322,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/rodeo-1971.jpg',
          title: 'Rodeo',
          artist: 'Brice Marden',
          year: '1971',
          rule: {
            "monday": [ 22, 26, 3, 7 ],
            "tuesday": [ 21, 24, 1, 6 ],
            "wednesday": [ 20, 24, 1, 6 ],
            "thursday": [ 19, 24, 30, 5 ],
            "friday": [ 18, 23, 29, 6 ],
            "saturday": [ 24, 29, 5, 10 ],
            "sunday": [ 23, 28, 3, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 323,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/axa-kk-69-1971.jpg',
          title: 'Axa-KK-69',
          artist: 'Victor Bonato',
          year: '1971',
          rule: {
            "monday": [ 23, 28, 3, 9 ],
            "tuesday": [ 22, 26, 3, 7 ],
            "wednesday": [ 21, 24, 1, 6 ],
            "thursday": [ 20, 24, 1, 6 ],
            "friday": [ 19, 24, 30, 5 ],
            "saturday": [ 18, 23, 29, 6 ],
            "sunday": [ 24, 29, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 324,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/tina-turner-1971.jpg',
          title: 'Tina Turner',
          artist: 'Christopher Wilmarth',
          year: '1971',
          rule: {
            "monday": [ 24, 29, 5, 10 ],
            "tuesday": [ 23, 28, 3, 9 ],
            "wednesday": [ 22, 26, 3, 7 ],
            "thursday": [ 21, 24, 1, 6 ],
            "friday": [ 20, 24, 1, 6 ],
            "saturday": [ 19, 24, 30, 5 ],
            "sunday": [ 18, 23, 29, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 325,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/distorted-circle-within-a-polygon-i-1972.jpg',
          title: 'Distorted Circle within a Polygon I',
          artist: 'Robert Mangold',
          year: '1972',
          rule: {
            "monday": [ 18, 23, 29, 6 ],
            "tuesday": [ 24, 29, 5, 10 ],
            "wednesday": [ 23, 28, 3, 9 ],
            "thursday": [ 22, 26, 3, 7 ],
            "friday": [ 21, 24, 1, 6 ],
            "saturday": [ 20, 24, 1, 6 ],
            "sunday": [ 19, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 326,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/pliage-folded-painting-1972.jpg',
          title: 'Pliage (Folded Painting)',
          artist: 'Andre-Pierre Arnal',
          year: '1972',
          rule: {
            "monday": [ 19, 24, 30, 5 ],
            "tuesday": [ 18, 23, 29, 6 ],
            "wednesday": [ 24, 29, 5, 10 ],
            "thursday": [ 23, 28, 3, 9 ],
            "friday": [ 22, 26, 3, 7 ],
            "saturday": [ 21, 24, 1, 6 ],
            "sunday": [ 20, 24, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 327,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/summer-table-1972.jpg',
          title: 'Summer Table',
          artist: 'Brice Marden',
          year: '1972',
          rule: {
            "monday": [ 20, 24, 1, 6 ],
            "tuesday": [ 19, 24, 30, 5 ],
            "wednesday": [ 18, 23, 29, 6 ],
            "thursday": [ 24, 29, 5, 10 ],
            "friday": [ 23, 28, 3, 9 ],
            "saturday": [ 22, 26, 3, 7 ],
            "sunday": [ 21, 24, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 328,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/january-01-1972-1972.jpg',
          title: 'January 01, 1972',
          artist: 'Marcia Hafif',
          year: '1972',
          rule: {
            "monday": [ 21, 24, 1, 6 ],
            "tuesday": [ 20, 24, 1, 6 ],
            "wednesday": [ 19, 24, 30, 5 ],
            "thursday": [ 18, 23, 29, 6 ],
            "friday": [ 24, 29, 5, 10 ],
            "saturday": [ 23, 28, 3, 9 ],
            "sunday": [ 22, 26, 3, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 329,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/circle-in-and-out-of-a-polygon-2-1973.jpg',
          title: 'Circle In and Out of a Polygon 2',
          artist: 'Robert Mangold',
          year: '1973',
          rule: {
            "monday": [ 23, 27, 4, 8 ],
            "tuesday": [ 22, 25, 2, 7 ],
            "wednesday": [ 21, 25, 2, 7 ],
            "thursday": [ 20, 25, 1, 6 ],
            "friday": [ 19, 24, 30, 7 ],
            "saturday": [ 25, 30, 6, 11 ],
            "sunday": [ 24, 29, 4, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 330,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/mirror-object-1973.jpg',
          title: 'Mirror Object',
          artist: 'Blinky Palermo',
          year: '1973',
          rule: {
            "monday": [ 24, 29, 4, 10 ],
            "tuesday": [ 23, 27, 4, 8 ],
            "wednesday": [ 22, 25, 2, 7 ],
            "thursday": [ 21, 25, 2, 7 ],
            "friday": [ 20, 25, 1, 6 ],
            "saturday": [ 19, 24, 30, 7 ],
            "sunday": [ 25, 30, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 331,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/steiner-surface-1973.jpg',
          title: 'Steiner Surface',
          artist: 'Ruth Vollmer',
          year: '1973',
          rule: {
            "monday": [ 25, 30, 6, 11 ],
            "tuesday": [ 24, 29, 4, 10 ],
            "wednesday": [ 23, 27, 4, 8 ],
            "thursday": [ 22, 25, 2, 7 ],
            "friday": [ 21, 25, 2, 7 ],
            "saturday": [ 20, 25, 1, 6 ],
            "sunday": [ 19, 24, 30, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 332,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/maquette-for-beach-sculpture-1973.jpg',
          title: 'Maquette for Beach Sculpture',
          artist: 'Lyman Kipp',
          year: '1973',
          rule: {
            "monday": [ 19, 24, 30, 7 ],
            "tuesday": [ 25, 30, 6, 11 ],
            "wednesday": [ 24, 29, 4, 10 ],
            "thursday": [ 23, 27, 4, 8 ],
            "friday": [ 22, 25, 2, 7 ],
            "saturday": [ 21, 25, 2, 7 ],
            "sunday": [ 20, 25, 1, 6 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 333,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-from-seven-aquatints-1973.jpg',
          title: 'Untitled from Seven Aquatints',
          artist: 'Robert Mangold',
          year: '1973',
          rule: {
            "monday": [ 20, 25, 1, 6 ],
            "tuesday": [ 19, 24, 30, 7 ],
            "wednesday": [ 25, 30, 6, 11 ],
            "thursday": [ 24, 29, 4, 10 ],
            "friday": [ 23, 27, 4, 8 ],
            "saturday": [ 22, 25, 2, 7 ],
            "sunday": [ 21, 25, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 334,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/time-and-space-series-2-1974.jpg',
          title: 'Time and Space Series 2',
          artist: 'Kazuo Nakamura',
          year: '1974',
          rule: {
            "monday": [ 21, 25, 2, 7 ],
            "tuesday": [ 20, 25, 1, 6 ],
            "wednesday": [ 19, 24, 30, 7 ],
            "thursday": [ 25, 30, 6, 11 ],
            "friday": [ 24, 29, 4, 10 ],
            "saturday": [ 23, 27, 4, 8 ],
            "sunday": [ 22, 25, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 335,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/kleenex-1974.jpg',
          title: 'Kleenex',
          artist: 'Luciano Bartolini',
          year: '1974',
          rule: {
            "monday": [ 22, 25, 2, 7 ],
            "tuesday": [ 21, 25, 2, 7 ],
            "wednesday": [ 20, 25, 1, 6 ],
            "thursday": [ 19, 24, 30, 7 ],
            "friday": [ 25, 30, 6, 11 ],
            "saturday": [ 24, 29, 4, 10 ],
            "sunday": [ 23, 27, 4, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 336,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/17th-summer-1974.jpg',
          title: '17th Summer',
          artist: 'Anne Truitt',
          year: '1974',
          rule: {
            "monday": [ 24, 28, 5, 9 ],
            "tuesday": [ 23, 26, 3, 8 ],
            "wednesday": [ 22, 26, 3, 8 ],
            "thursday": [ 21, 26, 2, 7 ],
            "friday": [ 20, 25, 1, 8 ],
            "saturday": [ 26, 1, 7, 12 ],
            "sunday": [ 25, 30, 5, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 337,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1974 (1).jpg',
          title: 'Untitled',
          artist: 'Tony DeLap',
          year: '1974',
          rule: {
            "monday": [ 25, 30, 5, 11 ],
            "tuesday": [ 24, 28, 5, 9 ],
            "wednesday": [ 23, 26, 3, 8 ],
            "thursday": [ 22, 26, 3, 8 ],
            "friday": [ 21, 26, 2, 7 ],
            "saturday": [ 20, 25, 1, 8 ],
            "sunday": [ 26, 1, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 338,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-seasons-1975.jpg',
          title: 'The Seasons',
          artist: 'Brice Marden',
          year: '1974 - 1975',
          rule: {
            "monday": [ 26, 1, 7, 12 ],
            "tuesday": [ 25, 30, 5, 11 ],
            "wednesday": [ 24, 28, 5, 9 ],
            "thursday": [ 23, 26, 3, 8 ],
            "friday": [ 22, 26, 3, 8 ],
            "saturday": [ 21, 26, 2, 7 ],
            "sunday": [ 20, 25, 1, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 339,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-0-1975.jpg',
          title: 'Untitled #0',
          artist: 'Agnes Martin',
          year: '1975',
          rule: {
            "monday": [ 20, 25, 1, 8 ],
            "tuesday": [ 26, 1, 7, 12 ],
            "wednesday": [ 25, 30, 5, 11 ],
            "thursday": [ 24, 28, 5, 9 ],
            "friday": [ 23, 26, 3, 8 ],
            "saturday": [ 22, 26, 3, 8 ],
            "sunday": [ 21, 26, 2, 7 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 340,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/six-round-wooden-bars-1975.jpg',
          title: 'Six Round Wooden Bars',
          artist: 'Andre Cadere',
          year: '1975',
          rule: {
            "monday": [ 21, 26, 2, 7 ],
            "tuesday": [ 20, 25, 1, 8 ],
            "wednesday": [ 26, 1, 7, 12 ],
            "thursday": [ 25, 30, 5, 11 ],
            "friday": [ 24, 28, 5, 9 ],
            "saturday": [ 23, 26, 3, 8 ],
            "sunday": [ 22, 26, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 341,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/channel-painting-no-6-1975.jpg',
          title: 'Channel Painting No. 6',
          artist: 'Alan Charlton',
          year: '1975',
          rule: {
            "monday": [ 22, 26, 3, 8 ],
            "tuesday": [ 21, 26, 2, 7 ],
            "wednesday": [ 20, 25, 1, 8 ],
            "thursday": [ 26, 1, 7, 12 ],
            "friday": [ 25, 30, 5, 11 ],
            "saturday": [ 24, 28, 5, 9 ],
            "sunday": [ 23, 26, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 342,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/intervention-1975.jpg',
          title: 'Intervention',
          artist: 'Edward Krasinski',
          year: '1975',
          rule: {
            "monday": [ 23, 26, 3, 8 ],
            "tuesday": [ 22, 26, 3, 8 ],
            "wednesday": [ 21, 26, 2, 7 ],
            "thursday": [ 20, 25, 1, 8 ],
            "friday": [ 26, 1, 7, 12 ],
            "saturday": [ 25, 30, 5, 11 ],
            "sunday": [ 24, 28, 5, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 343,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/75-76-d-157x145-1976.jpg',
          title: '75-76-D-157x145',
          artist: 'Martin Barre',
          year: '1976',
          rule: {
            "monday": [ 25, 29, 6, 10 ],
            "tuesday": [ 24, 27, 4, 9 ],
            "wednesday": [ 23, 27, 4, 9 ],
            "thursday": [ 22, 27, 3, 8 ],
            "friday": [ 21, 26, 2, 9 ],
            "saturday": [ 27, 2, 8, 13 ],
            "sunday": [ 26, 1, 6, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 344,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/24-colors-for-blinky-1977.jpg',
          title: '24 Colors (for Blinky)',
          artist: 'Imi Knoebel',
          year: '1977',
          rule: {
            "monday": [ 26, 1, 6, 12 ],
            "tuesday": [ 25, 29, 6, 10 ],
            "wednesday": [ 24, 27, 4, 9 ],
            "thursday": [ 23, 27, 4, 9 ],
            "friday": [ 22, 27, 3, 8 ],
            "saturday": [ 21, 26, 2, 9 ],
            "sunday": [ 27, 2, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 345,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-antibuch-1977.jpg',
          title: 'Untitled (Antibuch)',
          artist: 'Herbert Zangs',
          year: '1977',
          rule: {
            "monday": [ 27, 2, 8, 13 ],
            "tuesday": [ 26, 1, 6, 12 ],
            "wednesday": [ 25, 29, 6, 10 ],
            "thursday": [ 24, 27, 4, 9 ],
            "friday": [ 23, 27, 4, 9 ],
            "saturday": [ 22, 27, 3, 8 ],
            "sunday": [ 21, 26, 2, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 346,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/blue-depth-1978.jpg',
          title: 'Blue Depth',
          artist: 'Genevieve Asse',
          year: '1978',
          rule: {
            "monday": [ 21, 26, 2, 9 ],
            "tuesday": [ 27, 2, 8, 13 ],
            "wednesday": [ 26, 1, 6, 12 ],
            "thursday": [ 25, 29, 6, 10 ],
            "friday": [ 24, 27, 4, 9 ],
            "saturday": [ 23, 27, 4, 9 ],
            "sunday": [ 22, 27, 3, 8 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 347,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/bunker-iv-1978.jpg',
          title: 'Bunker IV',
          artist: 'Joachim Bandau',
          year: '1978',
          rule: {
            "monday": [ 22, 27, 3, 8 ],
            "tuesday": [ 21, 26, 2, 9 ],
            "wednesday": [ 27, 2, 8, 13 ],
            "thursday": [ 26, 1, 6, 12 ],
            "friday": [ 25, 29, 6, 10 ],
            "saturday": [ 24, 27, 4, 9 ],
            "sunday": [ 23, 27, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 348,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/depli-bleu-ii-1979.jpg',
          title: 'Depli bleu (II)',
          artist: 'Jean Degottex',
          year: '1979',
          rule: {
            "monday": [ 23, 27, 4, 9 ],
            "tuesday": [ 22, 27, 3, 8 ],
            "wednesday": [ 21, 26, 2, 9 ],
            "thursday": [ 27, 2, 8, 13 ],
            "friday": [ 26, 1, 6, 12 ],
            "saturday": [ 25, 29, 6, 10 ],
            "sunday": [ 24, 27, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 349,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/broken-kilometer-1979.jpg',
          title: 'Broken Kilometer',
          artist: 'Walter De Maria',
          year: '1979',
          rule: {
            "monday": [ 24, 27, 4, 9 ],
            "tuesday": [ 23, 27, 4, 9 ],
            "wednesday": [ 22, 27, 3, 8 ],
            "thursday": [ 21, 26, 2, 9 ],
            "friday": [ 27, 2, 8, 13 ],
            "saturday": [ 26, 1, 6, 12 ],
            "sunday": [ 25, 29, 6, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 350,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/colonna-1979.jpg',
          title: 'Colonna',
          artist: 'Ettore Spalletti',
          year: '1979',
          rule: {
            "monday": [ 26, 30, 7, 11 ],
            "tuesday": [ 25, 28, 5, 10 ],
            "wednesday": [ 24, 28, 5, 10 ],
            "thursday": [ 23, 28, 4, 9 ],
            "friday": [ 22, 27, 3, 10 ],
            "saturday": [ 28, 3, 9, 14 ],
            "sunday": [ 27, 2, 7, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 351,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/smoke.jpg',
          title: 'Smoke',
          artist: 'Tony Smith',
          year: '1979',
          rule: {
            "monday": [ 27, 2, 7, 13 ],
            "tuesday": [ 26, 30, 7, 11 ],
            "wednesday": [ 25, 28, 5, 10 ],
            "thursday": [ 24, 28, 5, 10 ],
            "friday": [ 23, 28, 4, 9 ],
            "saturday": [ 22, 27, 3, 10 ],
            "sunday": [ 28, 3, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 352,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-xviii-1981.jpg',
          title: 'Untitled XVIII',
          artist: 'Nasreen Mohamedi',
          year: '1981',
          rule: {
            "monday": [ 28, 3, 9, 14 ],
            "tuesday": [ 27, 2, 7, 13 ],
            "wednesday": [ 26, 30, 7, 11 ],
            "thursday": [ 25, 28, 5, 10 ],
            "friday": [ 24, 28, 5, 10 ],
            "saturday": [ 23, 28, 4, 9 ],
            "sunday": [ 22, 27, 3, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 353,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/le-temps-perdu-1982.jpg',
          title: 'Le temps perdu',
          artist: 'Katsuhito Nishikawa',
          year: '1982',
          rule: {
            "monday": [ 22, 27, 3, 10 ],
            "tuesday": [ 28, 3, 9, 14 ],
            "wednesday": [ 27, 2, 7, 13 ],
            "thursday": [ 26, 30, 7, 11 ],
            "friday": [ 25, 28, 5, 10 ],
            "saturday": [ 24, 28, 5, 10 ],
            "sunday": [ 23, 28, 4, 9 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 354,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/human-need-desire-1983.jpg',
          title: 'Human/Need/Desire',
          artist: 'Bruce Nauman',
          year: '1983',
          rule: {
            "monday": [ 23, 28, 4, 9 ],
            "tuesday": [ 22, 27, 3, 10 ],
            "wednesday": [ 28, 3, 9, 14 ],
            "thursday": [ 27, 2, 7, 13 ],
            "friday": [ 26, 30, 7, 11 ],
            "saturday": [ 25, 28, 5, 10 ],
            "sunday": [ 24, 28, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 355,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/one-hundred-live-and-die-1984.jpg',
          title: 'One Hundred Live and Die',
          artist: 'Bruce Nauman',
          year: '1984',
          rule: {
            "monday": [ 24, 28, 5, 10 ],
            "tuesday": [ 23, 28, 4, 9 ],
            "wednesday": [ 22, 27, 3, 10 ],
            "thursday": [ 28, 3, 9, 14 ],
            "friday": [ 27, 2, 7, 13 ],
            "saturday": [ 26, 30, 7, 11 ],
            "sunday": [ 25, 28, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 356,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/venus-1984.jpg',
          title: 'Venus',
          artist: 'William Turnbull',
          year: '1984',
          rule: {
            "monday": [ 25, 28, 5, 10 ],
            "tuesday": [ 24, 28, 5, 10 ],
            "wednesday": [ 23, 28, 4, 9 ],
            "thursday": [ 22, 27, 3, 10 ],
            "friday": [ 28, 3, 9, 14 ],
            "saturday": [ 27, 2, 7, 13 ],
            "sunday": [ 26, 30, 7, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 357,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-cream-red-black-1984.jpg',
          title: 'Untitled (Cream / Red / Black)',
          artist: 'Phil Sims',
          year: '1984',
          rule: {
            "monday": [ 27, 1, 8, 12 ],
            "tuesday": [ 26, 29, 6, 11 ],
            "wednesday": [ 25, 29, 6, 11 ],
            "thursday": [ 24, 29, 5, 10 ],
            "friday": [ 23, 28, 4, 11 ],
            "saturday": [ 29, 4, 10, 15 ],
            "sunday": [ 28, 3, 8, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 358,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/shirrinim-1985.jpg',
          title: 'Shirrinim',
          artist: 'John McCracken',
          year: '1985',
          rule: {
            "monday": [ 28, 3, 8, 14 ],
            "tuesday": [ 27, 1, 8, 12 ],
            "wednesday": [ 26, 29, 6, 11 ],
            "thursday": [ 25, 29, 6, 11 ],
            "friday": [ 24, 29, 5, 10 ],
            "saturday": [ 23, 28, 4, 11 ],
            "sunday": [ 29, 4, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 359,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/breve-1985.jpg',
          title: 'Breve',
          artist: 'Jean Degottex',
          year: '1985',
          rule: {
            "monday": [ 29, 4, 10, 15 ],
            "tuesday": [ 28, 3, 8, 14 ],
            "wednesday": [ 27, 1, 8, 12 ],
            "thursday": [ 26, 29, 6, 11 ],
            "friday": [ 25, 29, 6, 11 ],
            "saturday": [ 24, 29, 5, 10 ],
            "sunday": [ 23, 28, 4, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 360,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/good-boy-bad-boy-1985.jpg',
          title: 'Good Boy, Bad Boy',
          artist: 'Bruce Nauman',
          year: '1985',
          rule: {
            "monday": [ 23, 28, 4, 11 ],
            "tuesday": [ 29, 4, 10, 15 ],
            "wednesday": [ 28, 3, 8, 14 ],
            "thursday": [ 27, 1, 8, 12 ],
            "friday": [ 26, 29, 6, 11 ],
            "saturday": [ 25, 29, 6, 11 ],
            "sunday": [ 24, 29, 5, 10 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 361,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-wall-construction-1985.jpg',
          title: 'Untitled (Wall Construction)',
          artist: 'Fred Sandback',
          year: '1985',
          rule: {
            "monday": [ 24, 29, 5, 10 ],
            "tuesday": [ 23, 28, 4, 11 ],
            "wednesday": [ 29, 4, 10, 15 ],
            "thursday": [ 28, 3, 8, 14 ],
            "friday": [ 27, 1, 8, 12 ],
            "saturday": [ 26, 29, 6, 11 ],
            "sunday": [ 25, 29, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 362,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/pittura-r-1985.jpg',
          title: 'Pittura R',
          artist: 'Pino Pinelli',
          year: '1985',
          rule: {
            "monday": [ 25, 29, 6, 11 ],
            "tuesday": [ 24, 29, 5, 10 ],
            "wednesday": [ 23, 28, 4, 11 ],
            "thursday": [ 29, 4, 10, 15 ],
            "friday": [ 28, 3, 8, 14 ],
            "saturday": [ 27, 1, 8, 12 ],
            "sunday": [ 26, 29, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 363,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1985.jpg',
          title: 'Untitled',
          artist: 'Phil Sims',
          year: '1985',
          rule: {
            "monday": [ 26, 29, 6, 11 ],
            "tuesday": [ 25, 29, 6, 11 ],
            "wednesday": [ 24, 29, 5, 10 ],
            "thursday": [ 23, 28, 4, 11 ],
            "friday": [ 29, 4, 10, 15 ],
            "saturday": [ 28, 3, 8, 14 ],
            "sunday": [ 27, 1, 8, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 364,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/pittura-r-bl-1986.jpg',
          title: 'Pittura R BL',
          artist: 'Pino Pinelli',
          year: '1986',
          rule: {
            "monday": [ 28, 2, 9, 13 ],
            "tuesday": [ 27, 30, 7, 12 ],
            "wednesday": [ 26, 30, 7, 12 ],
            "thursday": [ 25, 30, 6, 11 ],
            "friday": [ 24, 29, 5, 12 ],
            "saturday": [ 30, 5, 11, 16 ],
            "sunday": [ 29, 4, 9, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 365,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/work-no-3-yellow-painting-1986.jpg',
          title: 'Work No. 3 (Yellow Painting)',
          artist: 'Martin Creed',
          year: '1986',
          rule: {
            "monday": [ 29, 4, 9, 15 ],
            "tuesday": [ 28, 2, 9, 13 ],
            "wednesday": [ 27, 30, 7, 12 ],
            "thursday": [ 26, 30, 7, 12 ],
            "friday": [ 25, 30, 6, 11 ],
            "saturday": [ 24, 29, 5, 12 ],
            "sunday": [ 30, 5, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 366,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/corner-paintings-in-8-parts-1986.jpg',
          title: 'Corner Paintings (in 8 parts)',
          artist: 'Alan Charlton',
          year: '1986',
          rule: {
            "monday": [ 30, 5, 11, 16 ],
            "tuesday": [ 29, 4, 9, 15 ],
            "wednesday": [ 28, 2, 9, 13 ],
            "thursday": [ 27, 30, 7, 12 ],
            "friday": [ 26, 30, 7, 12 ],
            "saturday": [ 25, 30, 6, 11 ],
            "sunday": [ 24, 29, 5, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 367,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/img-6128-1986.jpg',
          title: 'IMG 6128',
          artist: 'Katsuhito Nishikawa',
          year: '1986',
          rule: {
            "monday": [ 24, 29, 5, 12 ],
            "tuesday": [ 30, 5, 11, 16 ],
            "wednesday": [ 29, 4, 9, 15 ],
            "thursday": [ 28, 2, 9, 13 ],
            "friday": [ 27, 30, 7, 12 ],
            "saturday": [ 26, 30, 7, 12 ],
            "sunday": [ 25, 30, 6, 11 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 368,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/belgische-kiste-iv-trailer-1986.jpg',
          title: 'Belgische Kiste IV-Trailer',
          artist: 'Joachim Bandau',
          year: '1986',
          rule: {
            "monday": [ 25, 30, 6, 11 ],
            "tuesday": [ 24, 29, 5, 12 ],
            "wednesday": [ 30, 5, 11, 16 ],
            "thursday": [ 29, 4, 9, 15 ],
            "friday": [ 28, 2, 9, 13 ],
            "saturday": [ 27, 30, 7, 12 ],
            "sunday": [ 26, 30, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 369,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-duck-iv-1987.jpg',
          title: 'The Duck IV',
          artist: 'Richard Tuttle',
          year: '1987',
          rule: {
            "monday": [ 26, 30, 7, 12 ],
            "tuesday": [ 25, 30, 6, 11 ],
            "wednesday": [ 24, 29, 5, 12 ],
            "thursday": [ 30, 5, 11, 16 ],
            "friday": [ 29, 4, 9, 15 ],
            "saturday": [ 28, 2, 9, 13 ],
            "sunday": [ 27, 30, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 370,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-for-my-mother-evangelia-1987.jpg',
          title: 'Untitled (for my mother Evangelia)',
          artist: 'Stephen Antonakos',
          year: '1987',
          rule: {
            "monday": [ 27, 30, 7, 12 ],
            "tuesday": [ 26, 30, 7, 12 ],
            "wednesday": [ 25, 30, 6, 11 ],
            "thursday": [ 24, 29, 5, 12 ],
            "friday": [ 30, 5, 11, 16 ],
            "saturday": [ 29, 4, 9, 15 ],
            "sunday": [ 28, 2, 9, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 371,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/peinture-11-juillet-1987-1987.jpg',
          title: 'Peinture 11 Juillet 1987',
          artist: 'Pierre Soulages',
          year: '1987',
          rule: {
            "monday": [ 29, 3, 10, 14 ],
            "tuesday": [ 28, 1, 8, 13 ],
            "wednesday": [ 27, 1, 8, 13 ],
            "thursday": [ 26, 1, 7, 12 ],
            "friday": [ 25, 30, 6, 13 ],
            "saturday": [ 1, 6, 12, 17 ],
            "sunday": [ 30, 3, 10, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 372,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/white-black-1988.jpg',
          title: 'White Black',
          artist: 'Ellsworth Kelly',
          year: '1988',
          rule: {
            "monday": [ 30, 3, 10, 16 ],
            "tuesday": [ 29, 3, 10, 14 ],
            "wednesday": [ 28, 1, 8, 13 ],
            "thursday": [ 27, 1, 8, 13 ],
            "friday": [ 26, 1, 7, 12 ],
            "saturday": [ 25, 30, 6, 13 ],
            "sunday": [ 1, 6, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 373,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/parsec-1988.jpg',
          title: 'Parsec',
          artist: 'John McCracken',
          year: '1988',
          rule: {
            "monday": [ 1, 6, 12, 17 ],
            "tuesday": [ 30, 3, 10, 16 ],
            "wednesday": [ 29, 3, 10, 14 ],
            "thursday": [ 28, 1, 8, 13 ],
            "friday": [ 27, 1, 8, 13 ],
            "saturday": [ 26, 1, 7, 12 ],
            "sunday": [ 25, 30, 6, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 374,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1988.jpg',
          title: 'Untitled',
          artist: 'Imi Knoebel',
          year: '1988',
          rule: {
            "monday": [ 25, 30, 6, 13 ],
            "tuesday": [ 1, 6, 12, 17 ],
            "wednesday": [ 30, 3, 10, 16 ],
            "thursday": [ 29, 3, 10, 14 ],
            "friday": [ 28, 1, 8, 13 ],
            "saturday": [ 27, 1, 8, 13 ],
            "sunday": [ 26, 1, 7, 12 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 375,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/poligonale-orfico-1988.jpg',
          title: 'Poligonale orfico',
          artist: 'Rodolfo Arico',
          year: '1988',
          rule: {
            "monday": [ 26, 1, 7, 12 ],
            "tuesday": [ 25, 30, 6, 13 ],
            "wednesday": [ 1, 6, 12, 17 ],
            "thursday": [ 30, 3, 10, 16 ],
            "friday": [ 29, 3, 10, 14 ],
            "saturday": [ 28, 1, 8, 13 ],
            "sunday": [ 27, 1, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 376,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/rivage-de-chablis-1988.jpg',
          title: 'Rivage de Chablis',
          artist: 'Sheila Hicks',
          year: '1988',
          rule: {
            "monday": [ 27, 1, 8, 13 ],
            "tuesday": [ 26, 1, 7, 12 ],
            "wednesday": [ 25, 30, 6, 13 ],
            "thursday": [ 1, 6, 12, 17 ],
            "friday": [ 30, 3, 10, 16 ],
            "saturday": [ 29, 3, 10, 14 ],
            "sunday": [ 28, 1, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 377,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/container-z-ro-1988-1.jpg',
          title: 'Container Zéro',
          artist: 'Jean-Pierre Raynaud',
          year: '1988',
          rule: {
            "monday": [ 28, 1, 8, 13 ],
            "tuesday": [ 27, 1, 8, 13 ],
            "wednesday": [ 26, 1, 7, 12 ],
            "thursday": [ 25, 30, 6, 13 ],
            "friday": [ 1, 6, 12, 17 ],
            "saturday": [ 30, 3, 10, 16 ],
            "sunday": [ 29, 3, 10, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 378,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/depli-graphite-v.jpg',
          title: 'Depli graphite (V)',
          artist: 'Jean Degottex',
          year: 'XX cent.',
          rule: {
            "monday": [ 30, 4, 11, 15 ],
            "tuesday": [ 29, 2, 9, 14 ],
            "wednesday": [ 28, 2, 9, 14 ],
            "thursday": [ 27, 2, 8, 13 ],
            "friday": [ 26, 1, 7, 14 ],
            "saturday": [ 2, 7, 13, 18 ],
            "sunday": [ 1, 4, 11, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 379,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/pli-x-pli-iii.jpg',
          title: 'Pli x Pli III',
          artist: 'Jean Degottex',
          year: 'XX cent.',
          rule: {
            "monday": [ 1, 4, 11, 17 ],
            "tuesday": [ 30, 4, 11, 15 ],
            "wednesday": [ 29, 2, 9, 14 ],
            "thursday": [ 28, 2, 9, 14 ],
            "friday": [ 27, 2, 8, 13 ],
            "saturday": [ 26, 1, 7, 14 ],
            "sunday": [ 2, 7, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 380,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-2.jpg',
          title: 'Untitled',
          artist: 'Jean Degottex',
          year: 'XX cent.',
          rule: {
            "monday": [ 2, 7, 13, 18 ],
            "tuesday": [ 1, 4, 11, 17 ],
            "wednesday": [ 30, 4, 11, 15 ],
            "thursday": [ 29, 2, 9, 14 ],
            "friday": [ 28, 2, 9, 14 ],
            "saturday": [ 27, 2, 8, 13 ],
            "sunday": [ 26, 1, 7, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 381,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/no-mandatory-patriotism-1989.jpg',
          title: 'No Mandatory Patriotism',
          artist: 'Richard Serra',
          year: '1989',
          rule: {
            "monday": [ 26, 1, 7, 14 ],
            "tuesday": [ 2, 7, 13, 18 ],
            "wednesday": [ 1, 4, 11, 17 ],
            "thursday": [ 30, 4, 11, 15 ],
            "friday": [ 29, 2, 9, 14 ],
            "saturday": [ 28, 2, 9, 14 ],
            "sunday": [ 27, 2, 8, 13 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 382,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-9-1-a-15-1989.jpg',
          title: 'Untitled (9 - 1 - A - 15)',
          artist: 'Yves Gaucher',
          year: '1989',
          rule: {
            "monday": [ 27, 2, 8, 13 ],
            "tuesday": [ 26, 1, 7, 14 ],
            "wednesday": [ 2, 7, 13, 18 ],
            "thursday": [ 1, 4, 11, 17 ],
            "friday": [ 30, 4, 11, 15 ],
            "saturday": [ 29, 2, 9, 14 ],
            "sunday": [ 28, 2, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 383,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/skulptur-viii-1989.jpg',
          title: 'Skulptur VIII',
          artist: 'Jan Groth',
          year: '1989',
          rule: {
            "monday": [ 28, 2, 9, 14 ],
            "tuesday": [ 27, 2, 8, 13 ],
            "wednesday": [ 26, 1, 7, 14 ],
            "thursday": [ 2, 7, 13, 18 ],
            "friday": [ 1, 4, 11, 17 ],
            "saturday": [ 30, 4, 11, 15 ],
            "sunday": [ 29, 2, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 384,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/container-1989.jpg',
          title: 'Container',
          artist: 'Jean-Pierre Raynaud',
          year: '1989',
          rule: {
            "monday": [ 29, 2, 9, 14 ],
            "tuesday": [ 28, 2, 9, 14 ],
            "wednesday": [ 27, 2, 8, 13 ],
            "thursday": [ 26, 1, 7, 14 ],
            "friday": [ 2, 7, 13, 18 ],
            "saturday": [ 1, 4, 11, 17 ],
            "sunday": [ 30, 4, 11, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 385,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/consecutive-space-for-a-vertical-wall-1990.jpg',
          title: 'Consecutive Space (for a vertical wall)',
          artist: 'Richard Tuttle',
          year: '1990',
          rule: {
            "monday": [ 1, 5, 12, 16 ],
            "tuesday": [ 30, 3, 10, 15 ],
            "wednesday": [ 29, 3, 10, 15 ],
            "thursday": [ 28, 3, 9, 14 ],
            "friday": [ 27, 2, 8, 15 ],
            "saturday": [ 3, 8, 14, 19 ],
            "sunday": [ 2, 4, 12, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 386,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/with-winds-1990.jpg',
          title: 'With Winds',
          artist: 'Lee Ufan',
          year: '1990',
          rule: {
            "monday": [ 2, 4, 12, 18 ],
            "tuesday": [ 1, 5, 12, 16 ],
            "wednesday": [ 30, 3, 10, 15 ],
            "thursday": [ 29, 3, 10, 15 ],
            "friday": [ 28, 3, 9, 14 ],
            "saturday": [ 27, 2, 8, 15 ],
            "sunday": [ 3, 8, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 387,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/grande-duetto-1990.jpg',
          title: 'Grande duetto',
          artist: 'Grazia Varisco',
          year: '1990',
          rule: {
            "monday": [ 3, 8, 14, 19 ],
            "tuesday": [ 2, 4, 12, 18 ],
            "wednesday": [ 1, 5, 12, 16 ],
            "thursday": [ 30, 3, 10, 15 ],
            "friday": [ 29, 3, 10, 15 ],
            "saturday": [ 28, 3, 9, 14 ],
            "sunday": [ 27, 2, 8, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 388,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1990.jpg',
          title: 'Untitled',
          artist: 'Katsuhito Nishikawa',
          year: '1990',
          rule: {
            "monday": [ 27, 2, 8, 15 ],
            "tuesday": [ 3, 8, 14, 19 ],
            "wednesday": [ 2, 4, 12, 18 ],
            "thursday": [ 1, 5, 12, 16 ],
            "friday": [ 30, 3, 10, 15 ],
            "saturday": [ 29, 3, 10, 15 ],
            "sunday": [ 28, 3, 9, 14 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 389,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/revolution-001-n-atlantic-ocean-newfoundland-1990.jpg',
          title: 'Revolution 001, N. Atlantic Ocean, Newfoundland',
          artist: 'Hiroshi Sugimoto',
          year: '1990',
          rule: {
            "monday": [ 28, 3, 9, 14 ],
            "tuesday": [ 27, 2, 8, 15 ],
            "wednesday": [ 3, 8, 14, 19 ],
            "thursday": [ 2, 4, 12, 18 ],
            "friday": [ 1, 5, 12, 16 ],
            "saturday": [ 30, 3, 10, 15 ],
            "sunday": [ 29, 3, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 390,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/revolution-008-caribbean-sea-yucatan-1990.jpg',
          title: 'Revolution 008, Caribbean Sea, Yucatan',
          artist: 'Hiroshi Sugimoto',
          year: '1990',
          rule: {
            "monday": [ 29, 3, 10, 15 ],
            "tuesday": [ 28, 3, 9, 14 ],
            "wednesday": [ 27, 2, 8, 15 ],
            "thursday": [ 3, 8, 14, 19 ],
            "friday": [ 2, 4, 12, 18 ],
            "saturday": [ 1, 5, 12, 16 ],
            "sunday": [ 30, 3, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 391,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-2a.jpg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: 'XX Cent.',
          rule: {
            "monday": [ 30, 3, 10, 15 ],
            "tuesday": [ 29, 3, 10, 15 ],
            "wednesday": [ 28, 3, 9, 14 ],
            "thursday": [ 27, 2, 8, 15 ],
            "friday": [ 3, 8, 14, 19 ],
            "saturday": [ 2, 4, 12, 18 ],
            "sunday": [ 1, 5, 12, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 392,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-6.jpg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: 'XX Cent.',
          rule: {
            "monday": [ 2, 6, 13, 17 ],
            "tuesday": [ 1, 4, 11, 16 ],
            "wednesday": [ 30, 4, 11, 16 ],
            "thursday": [ 29, 4, 10, 15 ],
            "friday": [ 28, 3, 9, 16 ],
            "saturday": [ 4, 9, 15, 20 ],
            "sunday": [ 3, 5, 13, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 393,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/gold.jpg',
          title: 'Gold',
          artist: 'Mathias Goeritz',
          year: 'XX cent.',
          rule: {
            "monday": [ 3, 5, 13, 19 ],
            "tuesday": [ 2, 6, 13, 17 ],
            "wednesday": [ 1, 4, 11, 16 ],
            "thursday": [ 30, 4, 11, 16 ],
            "friday": [ 29, 4, 10, 15 ],
            "saturday": [ 28, 3, 9, 16 ],
            "sunday": [ 4, 9, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 394,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/rule-1991.jpg',
          title: 'Rule',
          artist: 'Robert Ryman',
          year: '1991',
          rule: {
            "monday": [ 4, 9, 15, 20 ],
            "tuesday": [ 3, 5, 13, 19 ],
            "wednesday": [ 2, 6, 13, 17 ],
            "thursday": [ 1, 4, 11, 16 ],
            "friday": [ 30, 4, 11, 16 ],
            "saturday": [ 29, 4, 10, 15 ],
            "sunday": [ 28, 3, 9, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 395,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-march-5th-2-1991.jpg',
          title: '"Untitled" (March 5th) #2',
          artist: 'Felix Gonzalez-Torres',
          year: '1991',
          rule: {
            "monday": [ 28, 3, 9, 16 ],
            "tuesday": [ 4, 9, 15, 20 ],
            "wednesday": [ 3, 5, 13, 19 ],
            "thursday": [ 2, 6, 13, 17 ],
            "friday": [ 1, 4, 11, 16 ],
            "saturday": [ 30, 4, 11, 16 ],
            "sunday": [ 29, 4, 10, 15 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 396,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/double-rhythm-1991.jpg',
          title: 'Double Rhythm',
          artist: 'Daniel Buren',
          year: '1991',
          rule: {
            "monday": [ 29, 4, 10, 15 ],
            "tuesday": [ 28, 3, 9, 16 ],
            "wednesday": [ 4, 9, 15, 20 ],
            "thursday": [ 3, 5, 13, 19 ],
            "friday": [ 2, 6, 13, 17 ],
            "saturday": [ 1, 4, 11, 16 ],
            "sunday": [ 30, 4, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 397,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/signal-1991.jpg',
          title: 'Signal',
          artist: 'Yves Gaucher',
          year: '1991',
          rule: {
            "monday": [ 30, 4, 11, 16 ],
            "tuesday": [ 29, 4, 10, 15 ],
            "wednesday": [ 28, 3, 9, 16 ],
            "thursday": [ 4, 9, 15, 20 ],
            "friday": [ 3, 5, 13, 19 ],
            "saturday": [ 2, 6, 13, 17 ],
            "sunday": [ 1, 4, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 398,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/monologue-1991.jpg',
          title: 'Monologue',
          artist: 'Callum Innes',
          year: '1991',
          rule: {
            "monday": [ 1, 4, 11, 16 ],
            "tuesday": [ 30, 4, 11, 16 ],
            "wednesday": [ 29, 4, 10, 15 ],
            "thursday": [ 28, 3, 9, 16 ],
            "friday": [ 4, 9, 15, 20 ],
            "saturday": [ 3, 5, 13, 19 ],
            "sunday": [ 2, 6, 13, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 399,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/20-part-line-painting-1991.jpg',
          title: '20 Part Line Painting',
          artist: 'Alan Charlton',
          year: '1991',
          rule: {
            "monday": [ 3, 7, 14, 18 ],
            "tuesday": [ 2, 5, 12, 17 ],
            "wednesday": [ 1, 5, 12, 17 ],
            "thursday": [ 30, 5, 11, 16 ],
            "friday": [ 29, 4, 10, 17 ],
            "saturday": [ 5, 10, 16, 21 ],
            "sunday": [ 4, 6, 14, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 400,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/scatola-di-colore-1991.jpg',
          title: 'Scatola di colore',
          artist: 'Ettore Spalletti',
          year: '1991',
          rule: {
            "monday": [ 4, 6, 14, 20 ],
            "tuesday": [ 3, 7, 14, 18 ],
            "wednesday": [ 2, 5, 12, 17 ],
            "thursday": [ 1, 5, 12, 17 ],
            "friday": [ 30, 5, 11, 16 ],
            "saturday": [ 29, 4, 10, 17 ],
            "sunday": [ 5, 10, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 401,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/painting-91019-1991.jpg',
          title: 'Painting #91019',
          artist: 'Rudolf de Crignis',
          year: '1991',
          rule: {
            "monday": [ 5, 10, 16, 21 ],
            "tuesday": [ 4, 6, 14, 20 ],
            "wednesday": [ 3, 7, 14, 18 ],
            "thursday": [ 2, 5, 12, 17 ],
            "friday": [ 1, 5, 12, 17 ],
            "saturday": [ 30, 5, 11, 16 ],
            "sunday": [ 29, 4, 10, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 402,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/umber-blue-1991-1.jpg',
          title: 'Umber Blue',
          artist: 'Yun Hyong–keun',
          year: '1991',
          rule: {
            "monday": [ 29, 4, 10, 17 ],
            "tuesday": [ 5, 10, 16, 21 ],
            "wednesday": [ 4, 6, 14, 20 ],
            "thursday": [ 3, 7, 14, 18 ],
            "friday": [ 2, 5, 12, 17 ],
            "saturday": [ 1, 5, 12, 17 ],
            "sunday": [ 30, 5, 11, 16 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 403,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/tulips-1992.jpg',
          title: 'Tulips',
          artist: 'Pat Lipsky',
          year: '1992',
          rule: {
            "monday": [ 30, 5, 11, 16 ],
            "tuesday": [ 29, 4, 10, 17 ],
            "wednesday": [ 5, 10, 16, 21 ],
            "thursday": [ 4, 6, 14, 20 ],
            "friday": [ 3, 7, 14, 18 ],
            "saturday": [ 2, 5, 12, 17 ],
            "sunday": [ 1, 5, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 404,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-2000-sculpture-1992.jpg',
          title: 'The 2000 Sculpture',
          artist: 'Walter De Maria',
          year: '1992',
          rule: {
            "monday": [ 1, 5, 12, 17 ],
            "tuesday": [ 30, 5, 11, 16 ],
            "wednesday": [ 29, 4, 10, 17 ],
            "thursday": [ 5, 10, 16, 21 ],
            "friday": [ 4, 6, 14, 20 ],
            "saturday": [ 3, 7, 14, 18 ],
            "sunday": [ 2, 5, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 405,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/yunus-i-1992.jpg',
          title: 'Yunus I',
          artist: 'Katsuhito Nishikawa',
          year: '1992',
          rule: {
            "monday": [ 2, 5, 12, 17 ],
            "tuesday": [ 1, 5, 12, 17 ],
            "wednesday": [ 30, 5, 11, 16 ],
            "thursday": [ 29, 4, 10, 17 ],
            "friday": [ 5, 10, 16, 21 ],
            "saturday": [ 4, 6, 14, 20 ],
            "sunday": [ 3, 7, 14, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 406,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-in-8-parts-1992.jpg',
          title: 'Untitled in 8 Parts',
          artist: 'Gunther Forg',
          year: '1992',
          rule: {
            "monday": [ 4, 8, 15, 19 ],
            "tuesday": [ 3, 6, 13, 18 ],
            "wednesday": [ 2, 6, 13, 18 ],
            "thursday": [ 1, 6, 12, 17 ],
            "friday": [ 30, 5, 11, 18 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 7, 15, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 407,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/painting-92131-1992.jpg',
          title: 'Painting #92131',
          artist: 'Rudolf de Crignis',
          year: '1992',
          rule: {
            "monday": [ 5, 7, 15, 21 ],
            "tuesday": [ 4, 8, 15, 19 ],
            "wednesday": [ 3, 6, 13, 18 ],
            "thursday": [ 2, 6, 13, 18 ],
            "friday": [ 1, 6, 12, 17 ],
            "saturday": [ 30, 5, 11, 18 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 408,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/conjunction-92-99-1992.jpg',
          title: 'Conjunction 92-99',
          artist: 'Ha Chong-Hyun',
          year: '1992',
          rule: {
            "monday": [ 6, 11, 17, 22 ],
            "tuesday": [ 5, 7, 15, 21 ],
            "wednesday": [ 4, 8, 15, 19 ],
            "thursday": [ 3, 6, 13, 18 ],
            "friday": [ 2, 6, 13, 18 ],
            "saturday": [ 1, 6, 12, 17 ],
            "sunday": [ 30, 5, 11, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 409,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/parva-xxix-1993.jpg',
          title: 'Parva XXIX',
          artist: 'Anne Truitt',
          year: '1993',
          rule: {
            "monday": [ 30, 5, 11, 18 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 7, 15, 21 ],
            "thursday": [ 4, 8, 15, 19 ],
            "friday": [ 3, 6, 13, 18 ],
            "saturday": [ 2, 6, 13, 18 ],
            "sunday": [ 1, 6, 12, 17 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 410,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/sem-titulo-1993.jpg',
          title: 'Sem titulo',
          artist: 'Angelo de Sousa',
          year: '1983',
          rule: {
            "monday": [ 1, 6, 12, 17 ],
            "tuesday": [ 30, 5, 11, 18 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 7, 15, 21 ],
            "friday": [ 4, 8, 15, 19 ],
            "saturday": [ 3, 6, 13, 18 ],
            "sunday": [ 2, 6, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 411,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1983.jpg',
          title: 'Untitled',
          artist: 'Fred Sandback',
          year: '1983',
          rule: {
            "monday": [ 2, 6, 13, 18 ],
            "tuesday": [ 1, 6, 12, 17 ],
            "wednesday": [ 30, 5, 11, 18 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 7, 15, 21 ],
            "saturday": [ 4, 8, 15, 19 ],
            "sunday": [ 3, 6, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 412,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1983-(1).jpg',
          title: 'Untitled',
          artist: 'Mathias Goeritz',
          year: '1983',
          rule: {
            "monday": [ 3, 6, 13, 18 ],
            "tuesday": [ 2, 6, 13, 18 ],
            "wednesday": [ 1, 6, 12, 17 ],
            "thursday": [ 30, 5, 11, 18 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 7, 15, 21 ],
            "sunday": [ 4, 8, 15, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 413,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/edge-of-red-1983.jpg',
          title: 'Edge of Red',
          artist: 'Warren Rohrer',
          year: '1983',
          rule: {
            "monday": [ 5, 9, 16, 20 ],
            "tuesday": [ 4, 7, 14, 19 ],
            "wednesday": [ 3, 7, 14, 19 ],
            "thursday": [ 2, 7, 13, 18 ],
            "friday": [ 1, 6, 12, 19 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 8, 16, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 414,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1984.jpg',
          title: 'Untitled',
          artist: 'Mira Schendel',
          year: '1984',
          rule: {
            "monday": [ 6, 8, 16, 22 ],
            "tuesday": [ 5, 9, 16, 20 ],
            "wednesday": [ 4, 7, 14, 19 ],
            "thursday": [ 3, 7, 14, 19 ],
            "friday": [ 2, 7, 13, 18 ],
            "saturday": [ 1, 6, 12, 19 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 415,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/truitt-84-1984.jpg',
          title: 'Truitt 84',
          artist: 'Anne Truitt',
          year: '1984',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 8, 16, 22 ],
            "wednesday": [ 5, 9, 16, 20 ],
            "thursday": [ 4, 7, 14, 19 ],
            "friday": [ 3, 7, 14, 19 ],
            "saturday": [ 2, 7, 13, 18 ],
            "sunday": [ 1, 6, 12, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 416,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/ecriture-no-40-84-1984.jpg',
          title: 'Ecriture No.40~84',
          artist: 'Park Seo-Bo',
          year: '1984',
          rule: {
            "monday": [ 1, 6, 12, 19 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 8, 16, 22 ],
            "thursday": [ 5, 9, 16, 20 ],
            "friday": [ 4, 7, 14, 19 ],
            "saturday": [ 3, 7, 14, 19 ],
            "sunday": [ 2, 7, 13, 18 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 417,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/nom-one-two-three-1984.jpg',
          title: 'Nom- one, two, three',
          artist: 'Grazia Varisco',
          year: '1984',
          rule: {
            "monday": [ 2, 7, 13, 18 ],
            "tuesday": [ 1, 6, 12, 19 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 8, 16, 22 ],
            "friday": [ 5, 9, 16, 20 ],
            "saturday": [ 4, 7, 14, 19 ],
            "sunday": [ 3, 7, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 418,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/vaso-1984.jpg',
          title: 'Vaso',
          artist: 'Ettore Spalletti',
          year: '1984',
          rule: {
            "monday": [ 3, 7, 14, 19 ],
            "tuesday": [ 2, 7, 13, 18 ],
            "wednesday": [ 1, 6, 12, 19 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 8, 16, 22 ],
            "saturday": [ 5, 9, 16, 20 ],
            "sunday": [ 4, 7, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 419,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/conjunction-84-07-1984.jpg',
          title: 'Conjunction 84-07',
          artist: 'Ha Chong-Hyun',
          year: '1984',
          rule: {
            "monday": [ 4, 7, 14, 19 ],
            "tuesday": [ 3, 7, 14, 19 ],
            "wednesday": [ 2, 7, 13, 18 ],
            "thursday": [ 1, 6, 12, 19 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 8, 16, 22 ],
            "sunday": [ 5, 9, 16, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 420,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1985(1).jpg',
          title: 'Untitled',
          artist: 'John McCracken',
          year: '1985',
          rule: {
            "monday": [ 6, 10, 17, 21 ],
            "tuesday": [ 5, 8, 15, 20 ],
            "wednesday": [ 4, 8, 15, 20 ],
            "thursday": [ 3, 8, 14, 19 ],
            "friday": [ 2, 7, 13, 20 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 9, 17, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 421,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/working-drawing-for-music-faculty-auckland-university-1985.jpg',
          title: 'Working Drawing For Music Faculty, Auckland University',
          artist: 'Ralph Hotere',
          year: '1985',
          rule: {
            "monday": [ 7, 9, 17, 23 ],
            "tuesday": [ 6, 10, 17, 21 ],
            "wednesday": [ 5, 8, 15, 20 ],
            "thursday": [ 4, 8, 15, 20 ],
            "friday": [ 3, 8, 14, 19 ],
            "saturday": [ 2, 7, 13, 20 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 422,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/window-study-3-1985.jpg',
          title: 'Window Study #3',
          artist: 'Brice Marden',
          year: '1985',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 9, 17, 23 ],
            "wednesday": [ 6, 10, 17, 21 ],
            "thursday": [ 5, 8, 15, 20 ],
            "friday": [ 4, 8, 15, 20 ],
            "saturday": [ 3, 8, 14, 19 ],
            "sunday": [ 2, 7, 13, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 423,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/black-tower-garden-1985.jpg',
          title: 'Black Tower (Garden)',
          artist: 'Ronald Bladen',
          year: '1985',
          rule: {
            "monday": [ 2, 7, 13, 20 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 9, 17, 23 ],
            "thursday": [ 6, 10, 17, 21 ],
            "friday": [ 5, 8, 15, 20 ],
            "saturday": [ 4, 8, 15, 20 ],
            "sunday": [ 3, 8, 14, 19 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 424,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/tanit-1985.jpg',
          title: 'Tanit',
          artist: 'Katsuhito Nishikawa',
          year: '1985',
          rule: {
            "monday": [ 3, 8, 14, 19 ],
            "tuesday": [ 2, 7, 13, 20 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 9, 17, 23 ],
            "friday": [ 6, 10, 17, 21 ],
            "saturday": [ 5, 8, 15, 20 ],
            "sunday": [ 4, 8, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 425,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/light-tree-1985.jpg',
          title: 'Light Tree',
          artist: 'Nanda Vigo',
          year: '1985',
          rule: {
            "monday": [ 4, 8, 15, 20 ],
            "tuesday": [ 3, 8, 14, 19 ],
            "wednesday": [ 2, 7, 13, 20 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 9, 17, 23 ],
            "saturday": [ 6, 10, 17, 21 ],
            "sunday": [ 5, 8, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 426,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-sculptural-study-two-part-vertical-construction-1986.jpg',
          title: 'Untitled (Sculptural Study, Two-part Vertical Construction)',
          artist: 'Fred Sandback',
          year: '1986',
          rule: {
            "monday": [ 5, 8, 15, 20 ],
            "tuesday": [ 4, 8, 15, 20 ],
            "wednesday": [ 3, 8, 14, 19 ],
            "thursday": [ 2, 7, 13, 20 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 9, 17, 23 ],
            "sunday": [ 6, 10, 17, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 427,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/pittura-r-1986.jpg',
          title: 'Pittura R',
          artist: 'Pino Pinelli',
          year: '1986',
          rule: {
            "monday": [ 7, 11, 18, 22 ],
            "tuesday": [ 6, 9, 16, 21 ],
            "wednesday": [ 5, 9, 16, 21 ],
            "thursday": [ 4, 9, 15, 20 ],
            "friday": [ 3, 8, 14, 21 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 10, 18, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 428,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/carr-jaune-sur-fond-blanc-1986.jpg',
          title: 'Carré jaune sur fond blanc',
          artist: 'Olivier Mosset',
          year: '1986',
          rule: {
            "monday": [ 8, 10, 18, 24 ],
            "tuesday": [ 7, 11, 18, 22 ],
            "wednesday": [ 6, 9, 16, 21 ],
            "thursday": [ 5, 9, 16, 21 ],
            "friday": [ 4, 9, 15, 20 ],
            "saturday": [ 3, 8, 14, 21 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 429,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/img-6134-1986.jpg',
          title: 'IMG 6134',
          artist: 'Katsuhito Nishikawa',
          year: '1986',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 10, 18, 24 ],
            "wednesday": [ 7, 11, 18, 22 ],
            "thursday": [ 6, 9, 16, 21 ],
            "friday": [ 5, 9, 16, 21 ],
            "saturday": [ 4, 9, 15, 20 ],
            "sunday": [ 3, 8, 14, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 430,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-la-gomera-1986.jpg',
          title: 'Untitled (La Gomera)',
          artist: 'Joachim Bandau',
          year: '1986',
          rule: {
            "monday": [ 3, 8, 14, 21 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 10, 18, 24 ],
            "thursday": [ 7, 11, 18, 22 ],
            "friday": [ 6, 9, 16, 21 ],
            "saturday": [ 5, 9, 16, 21 ],
            "sunday": [ 4, 9, 15, 20 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 431,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/xin-1987.jpg',
          title: 'XIN',
          artist: 'John McCracken',
          year: '1987',
          rule: {
            "monday": [ 4, 9, 15, 20 ],
            "tuesday": [ 3, 8, 14, 21 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 10, 18, 24 ],
            "friday": [ 7, 11, 18, 22 ],
            "saturday": [ 6, 9, 16, 21 ],
            "sunday": [ 5, 9, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 432,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/fulcrum-1987.jpg',
          title: 'Fulcrum',
          artist: 'Richard Serra',
          year: '1987',
          rule: {
            "monday": [ 5, 9, 16, 21 ],
            "tuesday": [ 4, 9, 15, 20 ],
            "wednesday": [ 3, 8, 14, 21 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 10, 18, 24 ],
            "saturday": [ 7, 11, 18, 22 ],
            "sunday": [ 6, 9, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 433,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1987.jpg',
          title: 'Untitled',
          artist: 'Robert Grosvenor',
          year: '1987',
          rule: {
            "monday": [ 6, 9, 16, 21 ],
            "tuesday": [ 5, 9, 16, 21 ],
            "wednesday": [ 4, 9, 15, 20 ],
            "thursday": [ 3, 8, 14, 21 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 10, 18, 24 ],
            "sunday": [ 7, 11, 18, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 434,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/horizontal-bands-with-colors-superimposed-1988.jpg',
          title: 'Horizontal Bands with Colors Superimposed',
          artist: 'Sol LeWitt',
          year: '1988',
          rule: {
            "monday": [ 8, 12, 19, 23 ],
            "tuesday": [ 7, 10, 17, 22 ],
            "wednesday": [ 6, 10, 17, 22 ],
            "thursday": [ 5, 10, 16, 21 ],
            "friday": [ 4, 9, 15, 22 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 11, 19, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 435,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/summer-88-no-7-1988.jpg',
          title: 'Summer 88, No. 7',
          artist: 'Anne Truitt',
          year: '1988',
          rule: {
            "monday": [ 9, 11, 19, 25 ],
            "tuesday": [ 8, 12, 19, 23 ],
            "wednesday": [ 7, 10, 17, 22 ],
            "thursday": [ 6, 10, 17, 22 ],
            "friday": [ 5, 10, 16, 21 ],
            "saturday": [ 4, 9, 15, 22 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 436,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/waves-on-the-hudson-river-1988.jpg',
          title: 'Waves on the Hudson River',
          artist: 'Yayoi Kusama',
          year: '1988',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 11, 19, 25 ],
            "wednesday": [ 8, 12, 19, 23 ],
            "thursday": [ 7, 10, 17, 22 ],
            "friday": [ 6, 10, 17, 22 ],
            "saturday": [ 5, 10, 16, 21 ],
            "sunday": [ 4, 9, 15, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 437,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/cdr-grb-i-1988.jpg',
          title: 'CDR - GRB I',
          artist: 'Yves Gaucher',
          year: '1988',
          rule: {
            "monday": [ 4, 9, 15, 22 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 11, 19, 25 ],
            "thursday": [ 8, 12, 19, 23 ],
            "friday": [ 7, 10, 17, 22 ],
            "saturday": [ 6, 10, 17, 22 ],
            "sunday": [ 5, 10, 16, 21 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 438,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/la-plate-bande-1988.jpg',
          title: 'La plate-bande',
          artist: 'Francois Morellet',
          year: '1988',
          rule: {
            "monday": [ 5, 10, 16, 21 ],
            "tuesday": [ 4, 9, 15, 22 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 11, 19, 25 ],
            "friday": [ 8, 12, 19, 23 ],
            "saturday": [ 7, 10, 17, 22 ],
            "sunday": [ 6, 10, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 439,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/skulptur-i-1988.jpg',
          title: 'Skulptur I',
          artist: 'Jan Groth',
          year: '1988',
          rule: {
            "monday": [ 6, 10, 17, 22 ],
            "tuesday": [ 5, 10, 16, 21 ],
            "wednesday": [ 4, 9, 15, 22 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 11, 19, 25 ],
            "saturday": [ 8, 12, 19, 23 ],
            "sunday": [ 7, 10, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 440,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/bris-signe.jpg',
          title: 'Bris-signe',
          artist: 'Jean Degottex',
          year: '?',
          rule: {
            "monday": [ 7, 10, 17, 22 ],
            "tuesday": [ 6, 10, 17, 22 ],
            "wednesday": [ 5, 10, 16, 21 ],
            "thursday": [ 4, 9, 15, 22 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 11, 19, 25 ],
            "sunday": [ 8, 12, 19, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 441,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/horsph-re.jpg',
          title: 'Horsphère',
          artist: 'Jean Degottex',
          year: 'xx century',
          rule: {
            "monday": [ 9, 13, 20, 24 ],
            "tuesday": [ 8, 11, 18, 23 ],
            "wednesday": [ 7, 11, 18, 23 ],
            "thursday": [ 6, 11, 17, 22 ],
            "friday": [ 5, 10, 16, 23 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 12, 20, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 442,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/unknown-title_11.jpg',
          title: 'unknown title',
          artist: 'Jean Degottex',
          year: 'xx century',
          rule: {
            "monday": [ 10, 12, 20, 26 ],
            "tuesday": [ 9, 13, 20, 24 ],
            "wednesday": [ 8, 11, 18, 23 ],
            "thursday": [ 7, 11, 18, 23 ],
            "friday": [ 6, 11, 17, 22 ],
            "saturday": [ 5, 10, 16, 23 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 443,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/unknown-title-6.jpg',
          title: 'unknown title',
          artist: 'Jean Degottex',
          year: 'xx century',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 12, 20, 26 ],
            "wednesday": [ 9, 13, 20, 24 ],
            "thursday": [ 8, 11, 18, 23 ],
            "friday": [ 7, 11, 18, 23 ],
            "saturday": [ 6, 11, 17, 22 ],
            "sunday": [ 5, 10, 16, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 444,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/nine-sided-figure-1989.jpg',
          title: 'Nine-Sided Figure',
          artist: 'Sol LeWitt',
          year: '1989',
          rule: {
            "monday": [ 5, 10, 16, 23 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 12, 20, 26 ],
            "thursday": [ 9, 13, 20, 24 ],
            "friday": [ 8, 11, 18, 23 ],
            "saturday": [ 7, 11, 18, 23 ],
            "sunday": [ 6, 11, 17, 22 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 445,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/photo-souvenir-three-light-boxes-for-one-wall-1989.jpg',
          title: 'Photo-souvenir: Three light boxes for one wall',
          artist: 'Daniel Buren',
          year: '1989',
          rule: {
            "monday": [ 6, 11, 17, 22 ],
            "tuesday": [ 5, 10, 16, 23 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 12, 20, 26 ],
            "friday": [ 9, 13, 20, 24 ],
            "saturday": [ 8, 11, 18, 23 ],
            "sunday": [ 7, 11, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 446,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/the-transfiguration-1989.jpg',
          title: 'The Transfiguration',
          artist: 'Stephen Antonakos',
          year: '1989',
          rule: {
            "monday": [ 7, 11, 18, 23 ],
            "tuesday": [ 6, 11, 17, 22 ],
            "wednesday": [ 5, 10, 16, 23 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 12, 20, 26 ],
            "saturday": [ 9, 13, 20, 24 ],
            "sunday": [ 8, 11, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 447,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/hollandblei-1989.jpg',
          title: 'Hollandblei',
          artist: 'Kuno Gonschior',
          year: '1989',
          rule: {
            "monday": [ 8, 11, 18, 23 ],
            "tuesday": [ 7, 11, 18, 23 ],
            "wednesday": [ 6, 11, 17, 22 ],
            "thursday": [ 5, 10, 16, 23 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 12, 20, 26 ],
            "sunday": [ 9, 13, 20, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 448,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/warp-drive-1990.jpg',
          title: 'Warp Drive',
          artist: 'John McCracken',
          year: '1990',
          rule: {
            "monday": [ 10, 14, 21, 25 ],
            "tuesday": [ 9, 12, 19, 24 ],
            "wednesday": [ 8, 12, 19, 24 ],
            "thursday": [ 7, 12, 18, 23 ],
            "friday": [ 6, 11, 17, 24 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 13, 21, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 449,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/thicket-no-1-1990.jpg',
          title: 'Thicket No. 1',
          artist: 'Roni Horn',
          year: '1989 - 1990',
          rule: {
            "monday": [ 11, 13, 21, 27 ],
            "tuesday": [ 10, 14, 21, 25 ],
            "wednesday": [ 9, 12, 19, 24 ],
            "thursday": [ 8, 12, 19, 24 ],
            "friday": [ 7, 12, 18, 23 ],
            "saturday": [ 6, 11, 17, 24 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 450,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/relative-to-our-society-1990.jpg',
          title: 'Relative to our Society',
          artist: 'Richard Tuttle',
          year: '1990',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 13, 21, 27 ],
            "wednesday": [ 10, 14, 21, 25 ],
            "thursday": [ 9, 12, 19, 24 ],
            "friday": [ 8, 12, 19, 24 ],
            "saturday": [ 7, 12, 18, 23 ],
            "sunday": [ 6, 11, 17, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 451,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-9-1-a-17-1990.jpg',
          title: 'Untitled (9 - 1 - A - 17)',
          artist: 'Yves Gaucher',
          year: '1990',
          rule: {
            "monday": [ 6, 11, 17, 24 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 13, 21, 27 ],
            "thursday": [ 10, 14, 21, 25 ],
            "friday": [ 9, 12, 19, 24 ],
            "saturday": [ 8, 12, 19, 24 ],
            "sunday": [ 7, 12, 18, 23 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 452,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/no-end-neon-1990.jpg',
          title: 'No End Neon',
          artist: 'Francois Morellet',
          year: '1990',
          rule: {
            "monday": [ 7, 12, 18, 23 ],
            "tuesday": [ 6, 11, 17, 24 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 13, 21, 27 ],
            "friday": [ 10, 14, 21, 25 ],
            "saturday": [ 9, 12, 19, 24 ],
            "sunday": [ 8, 12, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 453,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/pink-square-1990.jpg',
          title: 'Pink Square',
          artist: 'Olivier Mosset',
          year: '1990',
          rule: {
            "monday": [ 8, 12, 19, 24 ],
            "tuesday": [ 7, 12, 18, 23 ],
            "wednesday": [ 6, 11, 17, 24 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 13, 21, 27 ],
            "saturday": [ 10, 14, 21, 25 ],
            "sunday": [ 9, 12, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 454,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/heartbeats-1990.jpg',
          title: 'Heartbeats',
          artist: 'Roman Cotosman',
          year: '1990',
          rule: {
            "monday": [ 9, 12, 19, 24 ],
            "tuesday": [ 8, 12, 19, 24 ],
            "wednesday": [ 7, 12, 18, 23 ],
            "thursday": [ 6, 11, 17, 24 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 13, 21, 27 ],
            "sunday": [ 10, 14, 21, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 455,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/in-praise-of-hands-1990.jpg',
          title: 'In praise of hands',
          artist: 'Frederic Matys Thursz',
          year: '1990',
          rule: {
            "monday": [ 11, 15, 22, 26 ],
            "tuesday": [ 10, 13, 20, 25 ],
            "wednesday": [ 9, 13, 20, 25 ],
            "thursday": [ 8, 13, 19, 24 ],
            "friday": [ 7, 12, 18, 25 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 456,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/revolution-006-arctic-ocean-north-cape-1990.jpeg',
          title: 'Revolution 006, Arctic Ocean, North Cape',
          artist: 'Hiroshi Sugimoto',
          year: '1990',
          rule: {
            "monday": [ 12, 14, 22, 28 ],
            "tuesday": [ 11, 15, 22, 26 ],
            "wednesday": [ 10, 13, 20, 25 ],
            "thursday": [ 9, 13, 20, 25 ],
            "friday": [ 8, 13, 19, 24 ],
            "saturday": [ 7, 12, 18, 25 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 457,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/diary-pages.jpeg',
          title: 'Diary pages',
          artist: 'Nasreen Mohamedi',
          year: '?',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 14, 22, 28 ],
            "wednesday": [ 11, 15, 22, 26 ],
            "thursday": [ 10, 13, 20, 25 ],
            "friday": [ 9, 13, 20, 25 ],
            "saturday": [ 8, 13, 19, 24 ],
            "sunday": [ 7, 12, 18, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 458,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-3.jpeg',
          title: 'Untitled',
          artist: 'Nasreen Mohamedi',
          year: '?',
          rule: {
            "monday": [ 7, 12, 18, 25 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 14, 22, 28 ],
            "thursday": [ 11, 15, 22, 26 ],
            "friday": [ 10, 13, 20, 25 ],
            "saturday": [ 9, 13, 20, 25 ],
            "sunday": [ 8, 13, 19, 24 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 459,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/construcci-n-aurera.jpeg',
          title: 'Construcción Aurera',
          artist: 'Mathias Goeritz',
          year: '?',
          rule: {
            "monday": [ 8, 13, 19, 24 ],
            "tuesday": [ 7, 12, 18, 25 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 14, 22, 28 ],
            "friday": [ 11, 15, 22, 26 ],
            "saturday": [ 10, 13, 20, 25 ],
            "sunday": [ 9, 13, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 460,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/horizontal-colour-bands-and-vertical-colour-bands-i-1991.jpeg',
          title: 'Horizontal Colour Bands and Vertical Colour Bands I',
          artist: 'Sol LeWitt',
          year: '1991',
          rule: {
            "monday": [ 9, 13, 20, 25 ],
            "tuesday": [ 8, 13, 19, 24 ],
            "wednesday": [ 7, 12, 18, 25 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 14, 22, 28 ],
            "saturday": [ 11, 15, 22, 26 ],
            "sunday": [ 10, 13, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 461,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/triptyque-1991.jpeg',
          title: 'Triptyque',
          artist: 'Genevieve Asse',
          year: '1991',
          rule: {
            "monday": [ 10, 13, 20, 25 ],
            "tuesday": [ 9, 13, 20, 25 ],
            "wednesday": [ 8, 13, 19, 24 ],
            "thursday": [ 7, 12, 18, 25 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 14, 22, 28 ],
            "sunday": [ 11, 15, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 462,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/matt-black-and-gloss-1991.jpeg',
          title: 'Matt Black and Gloss',
          artist: 'Ian Davenport',
          year: '1991',
          rule: {
            "monday": [ 12, 16, 23, 27 ],
            "tuesday": [ 11, 14, 21, 26 ],
            "wednesday": [ 10, 14, 21, 26 ],
            "thursday": [ 9, 14, 20, 25 ],
            "friday": [ 8, 13, 19, 26 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 463,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/french-painting-baraban-1991.jpeg',
          title: 'French Painting: Baraban',
          artist: 'Marcia Hafif',
          year: '1991',
          rule: {
            "monday": [ 13, 15, 23, 29 ],
            "tuesday": [ 12, 16, 23, 27 ],
            "wednesday": [ 11, 14, 21, 26 ],
            "thursday": [ 10, 14, 21, 26 ],
            "friday": [ 9, 14, 20, 25 ],
            "saturday": [ 8, 13, 19, 26 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 464,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/painting-with-four-square-holes-1991.jpeg',
          title: 'Painting with Four Square Holes',
          artist: 'Alan Charlton',
          year: '1991',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 15, 23, 29 ],
            "wednesday": [ 12, 16, 23, 27 ],
            "thursday": [ 11, 14, 21, 26 ],
            "friday": [ 10, 14, 21, 26 ],
            "saturday": [ 9, 14, 20, 25 ],
            "sunday": [ 8, 13, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 465,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/sardana-1991.jpeg',
          title: 'Sardana',
          artist: 'Katsuhito Nishikawa',
          year: '1991',
          rule: {
            "monday": [ 8, 13, 19, 26 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 15, 23, 29 ],
            "thursday": [ 12, 16, 23, 27 ],
            "friday": [ 11, 14, 21, 26 ],
            "saturday": [ 10, 14, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 466,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1991.jpeg',
          title: 'Untitled',
          artist: 'Gunther Forg',
          year: '1991',
          rule: {
            "monday": [ 9, 14, 20, 25 ],
            "tuesday": [ 8, 13, 19, 26 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 15, 23, 29 ],
            "friday": [ 12, 16, 23, 27 ],
            "saturday": [ 11, 14, 21, 26 ],
            "sunday": [ 10, 13, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 467,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/konstruktion-1991.jpeg',
          title: 'Konstruktion',
          artist: 'James Licini',
          year: '1991',
          rule: {
            "monday": [ 11, 14, 21, 26 ],
            "tuesday": [ 9, 14, 20, 25 ],
            "wednesday": [ 8, 13, 19, 26 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 15, 23, 29 ],
            "saturday": [ 12, 16, 23, 27 ],
            "sunday": [ 11, 15, 22, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 468,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-to-tracy-to-celebrate-the-love-of-a-lifetime-1992.jpeg',
          title: 'Untitled (to Tracy, to celebrate the love of a lifetime)',
          artist: 'Dan Flavin',
          year: '1992',
          rule: {
            "monday": [ 12, 16, 23, 27 ],
            "tuesday": [ 11, 14, 21, 26 ],
            "wednesday": [ 9, 14, 20, 25 ],
            "thursday": [ 8, 13, 19, 26 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 15, 23, 29 ],
            "sunday": [ 12, 14, 22, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 469,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/syzygy-transmitter-1992.jpeg',
          title: 'Syzygy Transmitter',
          artist: 'Keith Sonnier',
          year: '1992',
          rule: {
            "monday": [ 14, 16, 24, 30 ],
            "tuesday": [ 13, 17, 24, 28 ],
            "wednesday": [ 12, 15, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 27 ],
            "saturday": [ 15, 20, 26, 1 ],
            "sunday": [ 14, 19, 25, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 470,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/grey-green-with-black-1992.jpeg',
          title: 'Grey / Green with Black',
          artist: 'Peter Joseph',
          year: '1992',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 16, 24, 30 ],
            "wednesday": [ 13, 17, 24, 28 ],
            "thursday": [ 12, 15, 22, 27 ],
            "friday": [ 10, 15, 21, 26 ],
            "saturday": [ 9, 14, 20, 27 ],
            "sunday": [ 8, 13, 19, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 471,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/quartetto-indivisibile-1992.jpeg',
          title: 'Quartetto indivisibile',
          artist: 'Ettore Spalletti',
          year: '1992',
          rule: {
            "monday": [ 9, 14, 20, 27 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 16, 24, 30 ],
            "thursday": [ 13, 17, 24, 28 ],
            "friday": [ 12, 15, 22, 27 ],
            "saturday": [ 10, 15, 21, 26 ],
            "sunday": [ 9, 14, 20, 25 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 472,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/one-two-1992.jpeg',
          title: 'One, Two',
          artist: 'Warren Rohrer',
          year: '1992',
          rule: {
            "monday": [ 10, 15, 21, 26 ],
            "tuesday": [ 9, 14, 20, 27 ],
            "wednesday": [ 15, 20, 26, 1 ],
            "thursday": [ 14, 16, 24, 30 ],
            "friday": [ 13, 17, 24, 28 ],
            "saturday": [ 12, 15, 22, 27 ],
            "sunday": [ 11, 14, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 473,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/painting-92138-1992.jpeg',
          title: 'Painting #92138',
          artist: 'Rudolf de Crignis',
          year: '1992',
          rule: {
            "monday": [ 12, 15, 22, 27 ],
            "tuesday": [ 10, 15, 21, 26 ],
            "wednesday": [ 9, 14, 20, 27 ],
            "thursday": [ 15, 20, 26, 1 ],
            "friday": [ 14, 16, 24, 30 ],
            "saturday": [ 13, 17, 24, 28 ],
            "sunday": [ 12, 16, 23, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 474,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/plane-figure-series-d-double-panel-1993.jpeg',
          title: 'Plane-Figure Series D (Double Panel)',
          artist: 'Robert Mangold',
          year: '1993',
          rule: {
            "monday": [ 13, 17, 24, 28 ],
            "tuesday": [ 12, 15, 22, 27 ],
            "wednesday": [ 10, 15, 21, 26 ],
            "thursday": [ 9, 14, 20, 27 ],
            "friday": [ 15, 20, 26, 1 ],
            "saturday": [ 14, 16, 24, 30 ],
            "sunday": [ 13, 15, 23, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 475,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/parva-xxviii-1993.jpeg',
          title: 'Parva XXVIII',
          artist: 'Anne Truitt',
          year: '1993',
          rule: {
            "monday": [ 14, 16, 24, 30 ],
            "tuesday": [ 13, 17, 24, 28 ],
            "wednesday": [ 12, 15, 22, 27 ],
            "thursday": [ 10, 15, 21, 26 ],
            "friday": [ 9, 14, 20, 27 ],
            "saturday": [ 15, 20, 26, 1 ],
            "sunday": [ 14, 19, 27, 31 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 476,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1993.jpeg',
          title: '"Untitled"',
          artist: 'Felix Gonzalez-Torres',
          year: '1993',
          rule: {
            "monday": [ 16, 21, 27, 2 ],
            "tuesday": [ 15, 17, 25, 1 ],
            "wednesday": [ 14, 18, 25, 29 ],
            "thursday": [ 13, 16, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 28 ],
            "sunday": [ 9, 14, 20, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 477,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/under-the-moon-of-love-1993.jpeg',
          title: 'Under the Moon of Love',
          artist: 'Imi Knoebel',
          year: '1993',
          rule: {
            "monday": [ 10, 15, 21, 28 ],
            "tuesday": [ 16, 21, 27, 2 ],
            "wednesday": [ 15, 17, 25, 1 ],
            "thursday": [ 14, 18, 25, 29 ],
            "friday": [ 13, 16, 23, 28 ],
            "saturday": [ 11, 16, 22, 27 ],
            "sunday": [ 10, 15, 21, 26 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 478,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1993(1).jpeg',
          title: 'Untitled',
          artist: 'Moshe Kupferman',
          year: '1993',
          rule: {
            "monday": [ 11, 16, 22, 27 ],
            "tuesday": [ 10, 15, 21, 28 ],
            "wednesday": [ 16, 21, 27, 2 ],
            "thursday": [ 15, 17, 25, 1 ],
            "friday": [ 14, 18, 25, 29 ],
            "saturday": [ 13, 16, 23, 28 ],
            "sunday": [ 12, 15, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 479,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/lotus-1993.jpeg',
          title: 'Lotus',
          artist: 'Katsuhito Nishikawa',
          year: '1993',
          rule: {
            "monday": [ 13, 16, 23, 28 ],
            "tuesday": [ 11, 16, 22, 27 ],
            "wednesday": [ 10, 15, 21, 28 ],
            "thursday": [ 16, 21, 27, 2 ],
            "friday": [ 15, 17, 25, 1 ],
            "saturday": [ 14, 18, 25, 29 ],
            "sunday": [ 13, 17, 24, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 480,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/canvas.jpeg',
          title: 'Untitled',
          artist: 'Leon Tarasewicz',
          year: '1993',
          rule: {
            "monday": [ 14, 18, 25, 29 ],
            "tuesday": [ 13, 16, 23, 28 ],
            "wednesday": [ 11, 16, 22, 27 ],
            "thursday": [ 10, 15, 21, 28 ],
            "friday": [ 16, 21, 27, 2 ],
            "saturday": [ 15, 17, 25, 1 ],
            "sunday": [ 14, 16, 24, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 481,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-beginning-1994.jpeg',
          title: '"Untitled" (Beginning)',
          artist: 'Felix Gonzalez-Torres',
          year: '1994',
          rule: {
            "monday": [ 15, 17, 25, 1 ],
            "tuesday": [ 14, 18, 25, 29 ],
            "wednesday": [ 13, 16, 23, 28 ],
            "thursday": [ 11, 16, 22, 27 ],
            "friday": [ 10, 15, 21, 28 ],
            "saturday": [ 16, 21, 27, 2 ],
            "sunday": [ 15, 20, 26, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 482,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1994.jpeg',
          title: 'Untitled',
          artist: 'Moshe Kupferman',
          year: '1994',
          rule: {
            "monday": [ 16, 21, 27, 2 ],
            "tuesday": [ 15, 17, 25, 1 ],
            "wednesday": [ 14, 18, 25, 29 ],
            "thursday": [ 13, 16, 23, 28 ],
            "friday": [ 11, 16, 22, 27 ],
            "saturday": [ 10, 15, 21, 28 ],
            "sunday": [ 11, 16, 20, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 483,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/vermilion-1994.jpeg',
          title: 'Vermilion',
          artist: 'Marcia Hafif',
          year: '1994',
          rule: {
            "monday": [ 11, 16, 22, 29 ],
            "tuesday": [ 17, 22, 28, 3 ],
            "wednesday": [ 16, 18, 26, 2 ],
            "thursday": [ 15, 19, 26, 30 ],
            "friday": [ 14, 17, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 484,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/trikona-1994.jpeg',
          title: 'Trikona',
          artist: 'Katsuhito Nishikawa',
          year: '1994',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 11, 16, 22, 29 ],
            "wednesday": [ 17, 22, 28, 3 ],
            "thursday": [ 16, 18, 26, 2 ],
            "friday": [ 15, 19, 26, 30 ],
            "saturday": [ 14, 17, 24, 29 ],
            "sunday": [ 13, 16, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 485,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/haken-1994.jpeg',
          title: 'Haken',
          artist: 'James Licini',
          year: '1994',
          rule: {
            "monday": [ 14, 17, 24, 29 ],
            "tuesday": [ 12, 17, 23, 28 ],
            "wednesday": [ 11, 16, 22, 29 ],
            "thursday": [ 17, 22, 28, 3 ],
            "friday": [ 16, 18, 26, 2 ],
            "saturday": [ 15, 19, 26, 30 ],
            "sunday": [ 14, 18, 25, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 486,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/t62-70.jpeg',
          title: 'Johannes Jan Schoonhoven',
          artist: 'T62-70',
          year: '?',
          rule: {
            "monday": [ 15, 19, 26, 30 ],
            "tuesday": [ 14, 17, 24, 29 ],
            "wednesday": [ 12, 17, 23, 28 ],
            "thursday": [ 11, 16, 22, 29 ],
            "friday": [ 17, 22, 28, 3 ],
            "saturday": [ 16, 18, 26, 2 ],
            "sunday": [ 15, 17, 25, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 487,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-v-1995.jpeg',
          title: 'Untitled V',
          artist: 'Daniel Dezeuze',
          year: '1995',
          rule: {
            "monday": [ 16, 18, 26, 2 ],
            "tuesday": [ 15, 19, 26, 30 ],
            "wednesday": [ 14, 17, 24, 29 ],
            "thursday": [ 12, 17, 23, 28 ],
            "friday": [ 11, 16, 22, 29 ],
            "saturday": [ 17, 22, 28, 3 ],
            "sunday": [ 16, 21, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 488,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/pittura-gr-n-1995.jpeg',
          title: 'Pittura GR N',
          artist: 'Pino Pinelli',
          year: '1995',
          rule: {
            "monday": [ 17, 22, 28, 3 ],
            "tuesday": [ 16, 18, 26, 2 ],
            "wednesday": [ 15, 19, 26, 30 ],
            "thursday": [ 14, 17, 24, 29 ],
            "friday": [ 12, 17, 23, 28 ],
            "saturday": [ 11, 16, 22, 29 ],
            "sunday": [ 10, 15, 21, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 489,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/klang-sound-i-1995.jpeg',
          title: 'Klang-Sound I',
          artist: 'Jurgen Partenheimer',
          year: '1995',
          rule: {
            "monday": [ 11, 16, 22, 29 ],
            "tuesday": [ 17, 22, 28, 3 ],
            "wednesday": [ 16, 18, 26, 2 ],
            "thursday": [ 15, 19, 26, 30 ],
            "friday": [ 14, 17, 24, 29 ],
            "saturday": [ 12, 17, 23, 28 ],
            "sunday": [ 11, 16, 22, 27 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 490,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/rose-with-dark-red-1995.jpeg',
          title: 'Rose with Dark Red',
          artist: 'Peter Joseph',
          year: '1995',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 12, 17, 23, 30 ],
            "wednesday": [ 18, 23, 29, 4 ],
            "thursday": [ 17, 19, 27, 3 ],
            "friday": [ 16, 20, 27, 31 ],
            "saturday": [ 15, 18, 25, 30 ],
            "sunday": [ 14, 17, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 491,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1995.jpeg',
          title: 'Untitled',
          artist: 'Rudolf de Crignis',
          year: '1995',
          rule: {
            "monday": [ 15, 18, 25, 30 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 12, 17, 23, 30 ],
            "thursday": [ 18, 23, 29, 4 ],
            "friday": [ 17, 19, 27, 3 ],
            "saturday": [ 16, 20, 27, 31 ],
            "sunday": [ 15, 19, 26, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 492,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/ecriture-no-960714-1996.jpeg',
          title: 'ECRITURE No.960714',
          artist: 'Park Seo-Bo',
          year: '1996',
          rule: {
            "monday": [ 16, 20, 27, 31 ],
            "tuesday": [ 15, 18, 25, 30 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 12, 17, 23, 30 ],
            "friday": [ 18, 23, 29, 4 ],
            "saturday": [ 17, 19, 27, 3 ],
            "sunday": [ 16, 18, 26, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 493,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/timeless-1996.jpeg',
          title: 'Timeless',
          artist: 'Fernando Calhau',
          year: '1996',
          rule: {
            "monday": [ 17, 19, 27, 3 ],
            "tuesday": [ 16, 20, 27, 31 ],
            "wednesday": [ 15, 18, 25, 30 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 12, 17, 23, 30 ],
            "saturday": [ 18, 23, 29, 4 ],
            "sunday": [ 17, 22, 28, 3 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 494,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/exposed-painting-payne-s-grey-1996.jpeg',
          title: 'Exposed Painting, Payne’s Grey',
          artist: 'Callum Innes',
          year: '1996',
          rule: {
            "monday": [ 18, 23, 29, 4 ],
            "tuesday": [ 17, 19, 27, 3 ],
            "wednesday": [ 16, 20, 27, 31 ],
            "thursday": [ 15, 18, 25, 30 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 12, 17, 23, 30 ],
            "sunday": [ 11, 16, 22, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 495,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-cat-257-1996.jpeg',
          title: 'Untitled (Cat #257)',
          artist: 'Phil Sims',
          year: '1996',
          rule: {
            "monday": [ 12, 17, 23, 30 ],
            "tuesday": [ 18, 23, 29, 4 ],
            "wednesday": [ 17, 19, 27, 3 ],
            "thursday": [ 16, 20, 27, 31 ],
            "friday": [ 15, 18, 25, 30 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 12, 17, 23, 28 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 496,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/wavy-lines-with-black-border-1997.jpeg',
          title: 'Wavy Lines with Black Border',
          artist: 'Sol LeWitt',
          year: '1997',
          rule: {
            "monday": [ 12, 17, 23, 28 ],
            "tuesday": [ 12, 17, 23, 30 ],
            "wednesday": [ 18, 23, 29, 4 ],
            "thursday": [ 17, 19, 27, 3 ],
            "friday": [ 16, 20, 27, 31 ],
            "saturday": [ 15, 18, 25, 30 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 497,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/lattice-1997.jpeg',
          title: 'Lattice',
          artist: 'Daniel Dezeuze',
          year: '1997',
          rule: {
            "monday": [ 14, 19, 25, 30 ],
            "tuesday": [ 13, 18, 24, 29 ],
            "wednesday": [ 13, 18, 24, 1 ],
            "thursday": [ 19, 24, 30, 5 ],
            "friday": [ 18, 20, 28, 4 ],
            "saturday": [ 17, 21, 28, 1 ],
            "sunday": [ 16, 19, 26, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 498,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/six-soft-stones-1997.jpeg',
          title: 'Six Soft Stones',
          artist: 'Sheila Hicks',
          year: '1997',
          rule: {
            "monday": [ 16, 19, 26, 1 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 13, 18, 24, 29 ],
            "thursday": [ 13, 18, 24, 1 ],
            "friday": [ 19, 24, 30, 5 ],
            "saturday": [ 18, 20, 28, 4 ],
            "sunday": [ 17, 21, 28, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 499,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/untitled-1997-1.jpeg',
          title: 'Untitled',
          artist: 'Marc Vaux',
          year: '1997',
          rule: {
            "monday": [ 17, 21, 28, 1 ],
            "tuesday": [ 16, 19, 26, 1 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 13, 18, 24, 29 ],
            "friday": [ 13, 18, 24, 1 ],
            "saturday": [ 19, 24, 30, 5 ],
            "sunday": [ 18, 20, 28, 4 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 500,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/seascape-sea-of-japan-1997.jpeg',
          title: 'Seascape: Sea of Japan',
          artist: 'Hiroshi Sugimoto',
          year: '1997',
          rule: {
            "monday": [ 18, 20, 28, 4 ],
            "tuesday": [ 17, 21, 28, 1 ],
            "wednesday": [ 16, 19, 26, 1 ],
            "thursday": [ 14, 19, 25, 30 ],
            "friday": [ 13, 18, 24, 29 ],
            "saturday": [ 13, 18, 24, 1 ],
            "sunday": [ 19, 24, 30, 5 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 501,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/vara-din.jpeg',
          title: 'Varaždin at night (in situ)',
          artist: 'Alfred Freddy Krupa',
          year: '1997',
          rule: {
            "monday": [ 19, 24, 30, 5 ],
            "tuesday": [ 18, 20, 28, 4 ],
            "wednesday": [ 17, 21, 28, 1 ],
            "thursday": [ 16, 19, 26, 1 ],
            "friday": [ 14, 19, 25, 30 ],
            "saturday": [ 13, 18, 24, 29 ],
            "sunday": [ 13, 18, 24, 1 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 502,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/fragments-i-vii-1998.jpeg',
          title: 'Fragments I-VII',
          artist: 'Robert Mangold',
          year: '1997 - 1998',
          rule: {
            "monday": [ 13, 18, 24, 1 ],
            "tuesday": [ 19, 24, 30, 5 ],
            "wednesday": [ 18, 20, 28, 4 ],
            "thursday": [ 17, 21, 28, 1 ],
            "friday": [ 16, 19, 26, 1 ],
            "saturday": [ 14, 19, 25, 30 ],
            "sunday": [ 13, 18, 24, 29 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 503,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/on-the-beam-1998.jpeg',
          title: 'On the Beam',
          artist: 'John McCracken',
          year: '1998',
          rule: {
            "monday": [ 13, 18, 24, 29 ],
            "tuesday": [ 13, 18, 24, 1 ],
            "wednesday": [ 19, 24, 30, 5 ],
            "thursday": [ 18, 20, 28, 4 ],
            "friday": [ 17, 21, 28, 1 ],
            "saturday": [ 16, 19, 26, 1 ],
            "sunday": [ 14, 19, 25, 30 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 504,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/boys-let-s-be-bad-boys-3-1998.jpeg',
          title: 'Boys Let’s Be Bad Boys (3)',
          artist: 'Richard Tuttle',
          year: '1998',
          rule: {
            "monday": [ 15, 20, 26, 1 ],
            "tuesday": [ 14, 19, 25, 30 ],
            "wednesday": [ 14, 19, 25, 2 ],
            "thursday": [ 20, 25, 1, 6 ],
            "friday": [ 19, 21, 29, 5 ],
            "saturday": [ 18, 22, 29, 2 ],
            "sunday": [ 17, 20, 27, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 505,
          user_id: 1,
          theme: 'Minimalism',
          img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/november/bramme-for-the-ruhr-district-1998.jpeg',
          title: 'Bramme for the Ruhr-District',
          artist: 'Richard Serra',
          year: '1998',
          rule: {
            "monday": [ 17, 20, 27, 2 ],
            "tuesday": [ 15, 20, 26, 1 ],
            "wednesday": [ 14, 19, 25, 30 ],
            "thursday": [ 14, 19, 25, 2 ],
            "friday": [ 20, 25, 1, 6 ],
            "saturday": [ 19, 21, 29, 5 ],
            "sunday": [ 18, 22, 29, 2 ]
          },
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('november_arts_id_seq', (SELECT MAX(id) FROM november_arts));");
    });
};
