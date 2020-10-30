'use strict';
exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('january_arts').del()
        .then(function () {
            // Inserts seed entries
            return knex('january_arts').insert([
                {
                    id: 1,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/chaos-nr-2-1906.jpg',
                    title: 'Chaos, Nr. 2',
                    artist: 'Hilma af Klint',
                    year: '1906',
                    rule: {
                        "monday": [4, 7, 8, 10],
                        "tuesday": [6, 7, 10, 12],
                        "wednesday": [9, 10, 12, 14],
                        "thursday": [12, 14, 16, 17],
                        "friday": [14, 16, 19, 20],
                        "saturday": [16, 18, 19, 22],
                        "sunday": [1, 2, 4, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 2,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/improvisation-6-african-1909.jpg',
                    title: 'Improvisation 6 (African)',
                    artist: 'Wassily Kandinsky',
                    year: '1909',
                    rule: {
                        "monday": [1, 2, 4, 5],
                        "tuesday": [4, 7, 8, 10],
                        "wednesday": [6, 7, 10, 12],
                        "thursday": [9, 10, 12, 14],
                        "friday": [12, 14, 16, 17],
                        "saturday": [14, 16, 19, 20],
                        "sunday": [16, 18, 19, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 3,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/de-tio-st-rsta-n-10-alderdomen-1907.jpg',
                    title: 'De Tio Största, n°10 Alderdomen',
                    artist: 'Hilma af Klint',
                    year: '1907',
                    rule: {
                        "monday": [16, 18, 19, 22],
                        "tuesday": [1, 2, 4, 5],
                        "wednesday": [4, 7, 8, 10],
                        "thursday": [6, 7, 10, 12],
                        "friday": [9, 10, 12, 14],
                        "saturday": [12, 14, 16, 17],
                        "sunday": [14, 16, 19, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 4,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/schooner-yachts-deer-isle-maine-1928.jpg',
                    title: 'Schooner Yachts, Deer Isle, Maine',
                    artist: 'John Marin',
                    year: '1928',
                    rule: {
                        "monday": [14, 16, 19, 20],
                        "tuesday": [16, 18, 19, 22],
                        "wednesday": [1, 2, 4, 5],
                        "thursday": [4, 7, 8, 10],
                        "friday": [6, 7, 10, 12],
                        "saturday": [9, 10, 12, 14],
                        "sunday": [12, 14, 16, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 5,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/improvisation-4-1909.jpg',
                    title: 'Improvisation 4',
                    artist: 'Wassily Kandinsky',
                    year: '1909',
                    rule: {
                        "monday": [12, 14, 16, 17],
                        "tuesday": [14, 16, 19, 20],
                        "wednesday": [16, 18, 19, 22],
                        "thursday": [1, 2, 4, 5],
                        "friday": [4, 7, 8, 10],
                        "saturday": [6, 7, 10, 12],
                        "sunday": [9, 10, 12, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 6,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-dove-nr-12-1915.jpg',
                    title: 'The Dove, Nr. 12',
                    artist: 'Hilma af Klint',
                    year: '1915',
                    rule: {
                        "monday": [9, 10, 12, 14],
                        "tuesday": [12, 14, 16, 17],
                        "wednesday": [14, 16, 19, 20],
                        "thursday": [16, 18, 19, 22],
                        "friday": [1, 2, 4, 5],
                        "saturday": [4, 7, 8, 10],
                        "sunday": [6, 7, 10, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 7,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/landscape-1910.jpg',
                    title: 'Landscape',
                    artist: 'Arthur Beecher Carles',
                    year: '1910',
                    rule: {
                        "monday": [6, 7, 10, 12],
                        "tuesday": [9, 10, 12, 14],
                        "wednesday": [12, 14, 16, 17],
                        "thursday": [14, 16, 19, 20],
                        "friday": [16, 18, 19, 22],
                        "saturday": [1, 2, 4, 5],
                        "sunday": [4, 7, 8, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 8,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1912.jpg',
                    title: 'Untitled',
                    artist: 'Gosta Adrian-Nilsson',
                    year: '1912',
                    rule: {
                        "monday": [5, 8, 9, 19],
                        "tuesday": [7, 8, 11, 13],
                        "wednesday": [10, 11, 13, 15],
                        "thursday": [13, 15, 17, 18],
                        "friday": [15, 17, 20, 21],
                        "saturday": [17, 19, 20, 23],
                        "sunday": [2, 3, 5, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 9,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/fire-evening-1929.jpg',
                    title: 'Fire evening',
                    artist: 'Paul Klee',
                    year: '1929',
                    rule: {
                        "monday": [2, 3, 5, 6],
                        "tuesday": [5, 8, 9, 19],
                        "wednesday": [7, 8, 11, 13],
                        "thursday": [10, 11, 13, 15],
                        "friday": [13, 15, 17, 18],
                        "saturday": [15, 17, 20, 21],
                        "sunday": [17, 19, 20, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 10,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/festival-in-spring-1962.jpg',
                    title: 'Festival in Spring',
                    artist: 'Toshi Yoshida',
                    year: '1962',
                    rule: {
                        "monday": [17, 19, 20, 23],
                        "tuesday": [2, 3, 5, 6],
                        "wednesday": [5, 8, 9, 19],
                        "thursday": [7, 8, 11, 13],
                        "friday": [10, 11, 13, 15],
                        "saturday": [13, 15, 17, 18],
                        "sunday": [15, 17, 20, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 11,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/underground-metaphysical-landscape-c-1960-4.jpg',
                    title: 'Underground. Metaphysical Landscape',
                    artist: 'Margit Selska',
                    year: '1960',
                    rule: {
                        "monday": [15, 17, 20, 21],
                        "tuesday": [17, 19, 20, 23],
                        "wednesday": [2, 3, 5, 6],
                        "thursday": [5, 8, 9, 19],
                        "friday": [7, 8, 11, 13],
                        "saturday": [10, 11, 13, 15],
                        "sunday": [13, 15, 17, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 12,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/harmony-in-blue-and-green-abstract-composition.jpg',
                    title: 'Harmony in Blue and Green. Abstract Composition',
                    artist: 'Natalia Goncharova',
                    year: 'XIX-XX cent.',
                    rule: {
                        "monday": [13, 15, 17, 18],
                        "tuesday": [15, 17, 20, 21],
                        "wednesday": [17, 19, 20, 23],
                        "thursday": [2, 3, 5, 6],
                        "friday": [5, 8, 9, 19],
                        "saturday": [7, 8, 11, 13],
                        "sunday": [10, 11, 13, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 13,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/2005-60-80.jpg',
                    title: 'Sorrow, Leaning Woman',
                    artist: 'Volodymyr Loboda',
                    year: '2005',
                    rule: {
                        "monday": [13, 15, 17, 18],
                        "tuesday": [15, 17, 20, 21],
                        "wednesday": [17, 19, 20, 23],
                        "thursday": [2, 3, 5, 6],
                        "friday": [5, 8, 9, 19],
                        "saturday": [7, 8, 11, 13],
                        "sunday": [10, 11, 13, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 14,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1.jpg',
                    title: 'Untitled',
                    artist: 'Tiberiy Szilvashi',
                    year: 'XX cent.',
                    rule: {
                        "monday": [10, 11, 13, 15],
                        "tuesday": [13, 15, 17, 18],
                        "wednesday": [15, 17, 21, 24],
                        "thursday": [17, 19, 20, 23],
                        "friday": [2, 3, 5, 6],
                        "saturday": [5, 8, 9, 19],
                        "sunday": [7, 8, 11, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 15,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/cote-de-provence(1).jpg',
                    title: 'Cote de provence',
                    artist: 'Paul Klee',
                    year: 'XIX-XX cent.',
                    rule: {
                        "monday": [8, 9, 12, 14],
                        "tuesday": [11, 12, 14, 16],
                        "wednesday": [14, 16, 18, 19],
                        "thursday": [16, 18, 22, 25],
                        "friday": [18, 20, 21, 24],
                        "saturday": [3, 4, 6, 7],
                        "sunday": [6, 9, 10, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 16,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/still-life-1945.jpg',
                    title: 'Still Life',
                    artist: 'William Baziotes',
                    year: '1945',
                    rule: {
                        "monday": [6, 9, 10, 20],
                        "tuesday": [8, 9, 12, 14],
                        "wednesday": [11, 12, 14, 16],
                        "thursday": [14, 16, 18, 19],
                        "friday": [16, 18, 22, 25],
                        "saturday": [18, 20, 21, 24],
                        "sunday": [3, 4, 6, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 17,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/asheville(1).jpg',
                    title: 'Asheville',
                    artist: 'Willem de Kooning',
                    year: '1948',
                    rule: {
                        "monday": [3, 4, 6, 7],
                        "tuesday": [6, 9, 10, 20],
                        "wednesday": [8, 9, 12, 14],
                        "thursday": [11, 12, 14, 16],
                        "friday": [14, 16, 18, 19],
                        "saturday": [16, 18, 22, 25],
                        "sunday": [18, 20, 21, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 18,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/celeste-ii-acr-lico-sobre-tabla-2006-60x50.jpg',
                    title: 'Celeste II',
                    artist: 'Requena Nozal',
                    year: '2006',
                    rule: {
                        "monday": [18, 20, 21, 24],
                        "tuesday": [3, 4, 6, 7],
                        "wednesday": [6, 9, 10, 20],
                        "thursday": [8, 9, 12, 14],
                        "friday": [11, 12, 14, 16],
                        "saturday": [14, 16, 18, 19],
                        "sunday": [16, 18, 22, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 19,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/taxi-cab-ii-1959.jpg',
                    title: 'Taxi Cab II',
                    artist: 'Al Held',
                    year: '1959',
                    rule: {
                        "monday": [16, 18, 22, 25],
                        "tuesday": [18, 20, 21, 24],
                        "wednesday": [3, 4, 6, 7],
                        "thursday": [6, 9, 10, 20],
                        "friday": [8, 9, 12, 14],
                        "saturday": [11, 12, 14, 16],
                        "sunday": [14, 16, 18, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 20,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/abstract-composition.jpg',
                    title: 'Abstract Composition',
                    artist: 'Victor Hugo',
                    year: 'XIX cent.',
                    rule: {
                        "monday": [14, 16, 18, 19],
                        "tuesday": [16, 18, 22, 25],
                        "wednesday": [18, 20, 21, 24],
                        "thursday": [3, 4, 6, 7],
                        "friday": [6, 9, 10, 20],
                        "saturday": [8, 9, 12, 14],
                        "sunday": [11, 12, 14, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 21,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/moonlight-and-lamplight-1937.jpg',
                    title: 'Moonlight and Lamplight',
                    artist: 'Winifred Nicholson',
                    year: '1937',
                    rule: {
                        "monday": [12, 13, 15, 17],
                        "tuesday": [15, 17, 19, 20],
                        "wednesday": [17, 19, 23, 26],
                        "thursday": [19, 21, 22, 25],
                        "friday": [4, 5, 7, 8],
                        "saturday": [7, 10, 11, 21],
                        "sunday": [9, 10, 13, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 22,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/powidok-s-o-ca-1949.jpg',
                    title: 'Powidok słońca',
                    artist: 'Wladyslaw Strzeminski',
                    year: '1949',
                    rule: {
                        "monday": [9, 10, 13, 15],
                        "tuesday": [12, 13, 15, 17],
                        "wednesday": [15, 17, 19, 20],
                        "thursday": [17, 19, 23, 26],
                        "friday": [19, 21, 22, 25],
                        "saturday": [4, 5, 7, 8],
                        "sunday": [7, 10, 11, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 23,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-35.jpg',
                    title: 'Untitled',
                    artist: 'Tiberiy Szilvashi',
                    year: 'XX cent.',
                    rule: {
                        "monday": [7, 10, 11, 21],
                        "tuesday": [9, 10, 13, 15],
                        "wednesday": [12, 13, 15, 17],
                        "thursday": [15, 17, 19, 20],
                        "friday": [17, 19, 23, 26],
                        "saturday": [19, 21, 22, 25],
                        "sunday": [4, 5, 7, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 24,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/portrait.jpg',
                    title: 'Portrait',
                    artist: 'Lyubov Popova',
                    year: 'XX cent.',
                    rule: {
                        "monday": [4, 5, 7, 8],
                        "tuesday": [7, 10, 11, 21],
                        "wednesday": [9, 10, 13, 15],
                        "thursday": [12, 13, 15, 17],
                        "friday": [15, 17, 19, 20],
                        "saturday": [17, 19, 23, 26],
                        "sunday": [19, 21, 22, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 25,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/city-of-the-sun.jpg',
                    title: 'City of the Sun',
                    artist: 'Darren Waterston',
                    year: '2012',
                    rule: {
                        "monday": [19, 21, 22, 25],
                        "tuesday": [4, 5, 7, 8],
                        "wednesday": [7, 10, 11, 21],
                        "thursday": [9, 10, 13, 15],
                        "friday": [12, 13, 15, 17],
                        "saturday": [15, 17, 19, 20],
                        "sunday": [17, 19, 23, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 26,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1973-3.jpg',
                    title: 'Untitled',
                    artist: 'Luciano Bartolini',
                    year: '1973',
                    rule: {
                        "monday": [17, 19, 23, 26],
                        "tuesday": [19, 21, 22, 25],
                        "wednesday": [4, 5, 7, 8],
                        "thursday": [7, 10, 11, 21],
                        "friday": [9, 10, 13, 15],
                        "saturday": [12, 13, 15, 17],
                        "sunday": [15, 17, 19, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 27,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/reminiscence-2005.jpg',
                    title: 'Reminiscence',
                    artist: 'Toko Shinoda',
                    year: '2005',
                    rule: {
                        "monday": [15, 17, 19, 20],
                        "tuesday": [17, 19, 23, 26],
                        "wednesday": [19, 21, 22, 25],
                        "thursday": [4, 5, 7, 8],
                        "friday": [7, 10, 11, 21],
                        "saturday": [9, 10, 13, 15],
                        "sunday": [12, 13, 15, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 28,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/hv2-no-17b-1992(1).jpg',
                    title: 'HV2, No 17b',
                    artist: 'John Cage',
                    year: '1992',
                    rule: {
                        "monday": [13, 14, 16, 18],
                        "tuesday": [16, 18, 20, 21],
                        "wednesday": [18, 20, 24, 27],
                        "thursday": [20, 22, 23, 26],
                        "friday": [5, 6, 8, 9],
                        "saturday": [8, 11, 12, 22],
                        "sunday": [10, 11, 14, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 29,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/bacchus-1983.jpg',
                    title: 'Bacchus',
                    artist: 'Elaine de Kooning',
                    year: '1983',
                    rule: {
                        "monday": [10, 11, 14, 16],
                        "tuesday": [13, 14, 16, 18],
                        "wednesday": [16, 18, 20, 21],
                        "thursday": [18, 20, 24, 27],
                        "friday": [20, 22, 23, 26],
                        "saturday": [5, 6, 8, 9],
                        "sunday": [8, 11, 12, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 30,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/le-vent-du-soleil-1996.jpg',
                    title: 'Le vent du soleil',
                    artist: 'Gotthard Graubner',
                    year: '1996',
                    rule: {
                        "monday": [8, 11, 12, 22],
                        "tuesday": [10, 11, 14, 16],
                        "wednesday": [13, 14, 16, 18],
                        "thursday": [16, 18, 20, 21],
                        "friday": [18, 20, 24, 27],
                        "saturday": [20, 22, 23, 26],
                        "sunday": [5, 6, 8, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 31,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/heliogravuren-zu-den-documenta-bildern-1993.jpg',
                    title: 'Heliogravuren zu den Documenta Bildern',
                    artist: 'Gunther Forg',
                    year: '1993',
                    rule: {
                        "monday": [5, 6, 8, 9],
                        "tuesday": [8, 11, 12, 22],
                        "wednesday": [10, 11, 14, 16],
                        "thursday": [13, 14, 16, 18],
                        "friday": [16, 18, 20, 21],
                        "saturday": [18, 20, 24, 27],
                        "sunday": [20, 22, 23, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 32,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-air-1937.jpg',
                    title: 'The Air',
                    artist: 'Joan Miro',
                    year: '1937',
                    rule: {
                        "monday": [20, 22, 23, 26],
                        "tuesday": [5, 6, 8, 9],
                        "wednesday": [8, 11, 12, 22],
                        "thursday": [10, 11, 14, 16],
                        "friday": [13, 14, 16, 18],
                        "saturday": [16, 18, 20, 21],
                        "sunday": [18, 20, 24, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 33,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-moon-woman-cuts-the-circle-1943.jpg',
                    title: 'The Moon-Woman Cuts the Circle',
                    artist: 'Jackson Pollock',
                    year: '1943',
                    rule: {
                        "monday": [18, 20, 24, 27],
                        "tuesday": [20, 22, 23, 26],
                        "wednesday": [5, 6, 8, 9],
                        "thursday": [8, 11, 12, 22],
                        "friday": [10, 11, 14, 16],
                        "saturday": [13, 14, 16, 18],
                        "sunday": [16, 18, 20, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 34,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/tyranny-of-space-1946.jpg',
                    title: 'Tyranny of Space',
                    artist: 'Perle Fine',
                    year: '1946',
                    rule: {
                        "monday": [16, 18, 20, 21],
                        "tuesday": [18, 20, 24, 27],
                        "wednesday": [20, 22, 23, 26],
                        "thursday": [5, 6, 8, 9],
                        "friday": [8, 11, 12, 22],
                        "saturday": [10, 11, 14, 16],
                        "sunday": [13, 14, 16, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 35,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/yellow-predominance-1949.jpg',
                    title: 'Yellow Predominance',
                    artist: 'Hans Hofmann',
                    year: '1949',
                    rule: {
                        "monday": [14, 15, 17, 19],
                        "tuesday": [17, 19, 21, 22],
                        "wednesday": [19, 21, 25, 28],
                        "thursday": [21, 23, 24, 27],
                        "friday": [6, 7, 9, 10],
                        "saturday": [9, 12, 13, 23],
                        "sunday": [11, 12, 15, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 36,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/number-236.jpg',
                    title: 'Number 236',
                    artist: 'Anne Ryan',
                    year: '?',
                    rule: {
                        "monday": [11, 12, 15, 17],
                        "tuesday": [14, 15, 17, 10],
                        "wednesday": [17, 19, 21, 22],
                        "thursday": [19, 21, 25, 28],
                        "friday": [21, 23, 24, 27],
                        "saturday": [6, 7, 9, 10],
                        "sunday": [9, 12, 13, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 37,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/white-butterflies-sleep-on-a-violet-bed-1970.jpg',
                    title: 'White Butterflies Sleep on a Violet Bed',
                    artist: 'Walasse Ting',
                    year: '1970',
                    rule: {
                        "monday": [9, 12, 13, 23],
                        "tuesday": [11, 12, 15, 17],
                        "wednesday": [14, 15, 17, 10],
                        "thursday": [17, 19, 21, 22],
                        "friday": [19, 21, 25, 28],
                        "saturday": [21, 23, 24, 27],
                        "sunday": [6, 7, 9, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 38,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/homenaje-a-diana-iii-acr-lico-sobre-tablex-2014-122x-100.jpg',
                    title: 'Homenaje a Diana III',
                    artist: 'Requena Nozal',
                    year: '2014',
                    rule: {
                        "monday": [6, 7, 9, 10],
                        "tuesday": [9, 12, 13, 23],
                        "wednesday": [11, 12, 15, 17],
                        "thursday": [14, 15, 17, 10],
                        "friday": [17, 19, 21, 22],
                        "saturday": [19, 21, 25, 28],
                        "sunday": [21, 23, 24, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 39,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1972.jpg',
                    title: 'Untitled',
                    artist: 'Rafa Nasiri',
                    year: '1972',
                    rule: {
                        "monday": [21, 23, 24, 27],
                        "tuesday": [6, 7, 9, 10],
                        "wednesday": [9, 12, 13, 23],
                        "thursday": [11, 12, 15, 17],
                        "friday": [14, 15, 17, 10],
                        "saturday": [17, 19, 21, 22],
                        "sunday": [19, 21, 25, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 40,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/interior-temporary-factory-day.jpg',
                    title: 'INTERIOR, TEMPORARY FACTORY - DAY',
                    artist: 'Marc Horowitz',
                    year: '2015',
                    rule: {
                        "monday": [19, 21, 25, 28],
                        "tuesday": [21, 23, 24, 27],
                        "wednesday": [6, 7, 9, 10],
                        "thursday": [9, 12, 13, 23],
                        "friday": [11, 12, 15, 17],
                        "saturday": [14, 15, 17, 10],
                        "sunday": [17, 19, 21, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 41,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/transparent-shadow.jpg',
                    title: 'Transparent Shadow',
                    artist: 'Toko Shinoda',
                    year: '?',
                    rule: {
                        "monday": [17, 19, 21, 22],
                        "tuesday": [19, 21, 25, 28],
                        "wednesday": [21, 23, 24, 27],
                        "thursday": [6, 7, 9, 10],
                        "friday": [9, 12, 13, 23],
                        "saturday": [11, 12, 15, 17],
                        "sunday": [14, 15, 17, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 42,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-parachutists-1944.jpg',
                    title: 'The Parachutists',
                    artist: 'William Baziotes',
                    year: '1944',
                    rule: {
                        "monday": [15, 16, 18, 11],
                        "tuesday": [18, 20, 22, 23],
                        "wednesday": [20, 22, 26, 29],
                        "thursday": [22, 24, 25, 28],
                        "friday": [7, 8, 10, 11],
                        "saturday": [10, 13, 14, 24],
                        "sunday": [12, 13, 16, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 43,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/bird-of-the-spirit-1943.jpg',
                    title: 'Bird of the Spirit',
                    artist: 'Morris Graves',
                    year: '1943',
                    rule: {
                        "monday": [12, 13, 16, 18],
                        "tuesday": [15, 16, 18, 11],
                        "wednesday": [18, 20, 22, 23],
                        "thursday": [20, 22, 26, 29],
                        "friday": [22, 24, 25, 28],
                        "saturday": [7, 8, 10, 11],
                        "sunday": [10, 13, 14, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 44,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1947.jpg',
                    title: 'Untitled',
                    artist: 'Giorgio Cavallon',
                    year: '1947',
                    rule: {
                        "monday": [10, 13, 14, 24],
                        "tuesday": [12, 13, 16, 18],
                        "wednesday": [15, 16, 18, 11],
                        "thursday": [18, 20, 22, 23],
                        "friday": [20, 22, 26, 29],
                        "saturday": [22, 24, 25, 28],
                        "sunday": [7, 8, 10, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 45,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/abstract-eye-1943.jpg',
                    title: 'Abstract Eye',
                    artist: 'Richard Pousette-Dart',
                    year: '1943',
                    rule: {
                        "monday": [7, 8, 10, 11],
                        "tuesday": [10, 13, 14, 24],
                        "wednesday": [12, 13, 16, 18],
                        "thursday": [15, 16, 18, 11],
                        "friday": [18, 20, 22, 23],
                        "saturday": [20, 22, 26, 29],
                        "sunday": [22, 24, 25, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 46,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/no-61-rust-and-blue.jpg',
                    title: 'No.61 (Rust and Blue)',
                    artist: 'Mark Rothko',
                    year: '1953',
                    rule: {
                        "monday": [22, 24, 25, 28],
                        "tuesday": [7, 8, 10, 11],
                        "wednesday": [10, 13, 14, 24],
                        "thursday": [12, 13, 16, 18],
                        "friday": [15, 16, 18, 11],
                        "saturday": [18, 20, 22, 23],
                        "sunday": [20, 22, 26, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 47,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/buchanan-1987.jpg',
                    title: 'Buchanan',
                    artist: 'Albert Irvin',
                    year: '1987',
                    rule: {
                        "monday": [20, 22, 26, 29],
                        "tuesday": [22, 24, 25, 28],
                        "wednesday": [7, 8, 10, 11],
                        "thursday": [10, 13, 14, 24],
                        "friday": [12, 13, 16, 18],
                        "saturday": [15, 16, 18, 11],
                        "sunday": [18, 20, 22, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 48,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/bright-colors-on-pale-green-1976.jpg',
                    title: 'Bright Colors on Pale Green',
                    artist: 'Robert Goodnough',
                    year: '1976',
                    rule: {
                        "monday": [18, 20, 22, 23],
                        "tuesday": [20, 22, 26, 29],
                        "wednesday": [22, 24, 25, 28],
                        "thursday": [7, 8, 10, 11],
                        "friday": [10, 13, 14, 24],
                        "saturday": [12, 13, 16, 18],
                        "sunday": [15, 16, 18, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 49,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/black-red-1962.jpg',
                    title: 'Black/Red',
                    artist: 'Jack Youngerman',
                    year: '1962',
                    rule: {
                        "monday": [16, 17, 19, 12],
                        "tuesday": [19, 21, 23, 24],
                        "wednesday": [21, 23, 27, 30],
                        "thursday": [23, 25, 26, 29],
                        "friday": [8, 9, 11, 12],
                        "saturday": [11, 14, 15, 25],
                        "sunday": [13, 14, 17, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 50,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/hoop-la-1965.jpg',
                    title: 'Hoop-La',
                    artist: 'Jeremy Moon',
                    year: '1965',
                    rule: {
                        "monday": [13, 14, 17, 19],
                        "tuesday": [16, 17, 19, 12],
                        "wednesday": [19, 21, 23, 24],
                        "thursday": [21, 23, 27, 30],
                        "friday": [23, 25, 26, 29],
                        "saturday": [8, 9, 11, 12],
                        "sunday": [11, 14, 15, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 51,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/aeroflower-1942.jpg',
                    title: 'Aeroflower',
                    artist: 'Jimmy Ernst',
                    year: '1942',
                    rule: {
                        "monday": [11, 14, 15, 25],
                        "tuesday": [13, 14, 17, 19],
                        "wednesday": [16, 17, 19, 12],
                        "thursday": [19, 21, 23, 24],
                        "friday": [21, 23, 27, 30],
                        "saturday": [23, 25, 26, 29],
                        "sunday": [8, 9, 11, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 52,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/still-life-at-the-sea-1946.jpg',
                    title: 'Still Life at the Sea',
                    artist: 'Antonio Corpora',
                    year: '1946',
                    rule: {
                        "monday": [8, 9, 11, 12],
                        "tuesday": [11, 14, 15, 25],
                        "wednesday": [13, 14, 17, 19],
                        "thursday": [16, 17, 19, 12],
                        "friday": [19, 21, 23, 24],
                        "saturday": [21, 23, 27, 30],
                        "sunday": [23, 25, 26, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 53,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/dwarf-1947.jpg',
                    title: 'Dwarf',
                    artist: 'William Baziotes',
                    year: '1947',
                    rule: {
                        "monday": [23, 25, 26, 29],
                        "tuesday": [8, 9, 11, 12],
                        "wednesday": [11, 14, 15, 25],
                        "thursday": [13, 14, 16, 19],
                        "friday": [16, 17, 19, 12],
                        "saturday": [19, 21, 23, 24],
                        "sunday": [21, 23, 27, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 54,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/a-time-for-fear-1949.jpg',
                    title: 'A Time for Fear',
                    artist: 'Jimmy Ernst',
                    year: '1949',
                    rule: {
                        "monday": [21, 23, 27, 30],
                        "tuesday": [23, 25, 26, 29],
                        "wednesday": [8, 9, 11, 12],
                        "thursday": [11, 14, 15, 25],
                        "friday": [13, 14, 16, 19],
                        "saturday": [16, 17, 19, 12],
                        "sunday": [19, 21, 23, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 55,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/chicago-1951.jpg',
                    title: 'Chicago',
                    artist: 'Aaron Siskind',
                    year: '1951',
                    rule: {
                        "monday": [19, 21, 23, 24],
                        "tuesday": [21, 23, 27, 30],
                        "wednesday": [23, 25, 26, 29],
                        "thursday": [8, 9, 11, 12],
                        "friday": [11, 14, 15, 25],
                        "saturday": [13, 14, 16, 19],
                        "sunday": [16, 17, 10, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 56,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/it-was-yellow-and-pink-ii.jpg',
                    title: 'It Was Yellow and Pink II',
                    artist: 'Georgia O\'Keeffe',
                    year: '1959',
                    rule: {
                        "monday": [17, 18, 9, 13],
                        "tuesday": [20, 22, 24, 25],
                        "wednesday": [22, 24, 28, 31],
                        "thursday": [24, 26, 27, 30],
                        "friday": [9, 10, 12, 13],
                        "saturday": [12, 15, 16, 26],
                        "sunday": [14, 15, 17, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 57,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/song-cycle-1988.jpg',
                    title: 'Song Cycle',
                    artist: 'Ralph Hotere',
                    year: '1988',
                    rule: {
                        "monday": [14, 15, 17, 20],
                        "tuesday": [17, 18, 9, 13],
                        "wednesday": [20, 22, 24, 25],
                        "thursday": [22, 24, 28, 31],
                        "friday": [24, 26, 27, 30],
                        "saturday": [9, 10, 12, 13],
                        "sunday": [12, 15, 16, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 58,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/sunset.jpg',
                    title: 'Sunset',
                    artist: 'Cy Twombly',
                    year: '1957',
                    rule: {
                        "monday": [12, 15, 16, 26],
                        "tuesday": [14, 15, 17, 20],
                        "wednesday": [17, 18, 9, 13],
                        "thursday": [20, 22, 24, 25],
                        "friday": [22, 24, 28, 31],
                        "saturday": [24, 26, 27, 30],
                        "sunday": [9, 10, 12, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 59,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/iridescent-interpenetration-no-4-study-of-light-1912.jpg',
                    title: 'Iridescent Interpenetration No. 4 - Study of light',
                    artist: 'Giacomo Balla',
                    year: '1912',
                    rule: {
                        "monday": [9, 10, 12, 13],
                        "tuesday": [12, 15, 16, 26],
                        "wednesday": [14, 15, 17, 20],
                        "thursday": [17, 18, 9, 13],
                        "friday": [20, 22, 24, 25],
                        "saturday": [22, 24, 28, 31],
                        "sunday": [24, 26, 27, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 60,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/states-of-mind-iii-those-who-stay-1911-1.jpg',
                    title: 'States of Mind III: Those Who Stay',
                    artist: 'Umberto Boccioni',
                    year: '1911',
                    rule: {
                        "monday": [24, 26, 27, 30],
                        "tuesday": [9, 10, 12, 13],
                        "wednesday": [12, 15, 16, 26],
                        "thursday": [14, 15, 17, 20],
                        "friday": [17, 18, 9, 13],
                        "saturday": [20, 22, 24, 25],
                        "sunday": [22, 24, 28, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 61,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/machine-5-1950.jpg',
                    title: 'Machine 5',
                    artist: 'Hedda Sterne',
                    year: '1950',
                    rule: {
                        "monday": [22, 24, 28, 31],
                        "tuesday": [24, 26, 27, 30],
                        "wednesday": [9, 10, 22, 13],
                        "thursday": [12, 15, 16, 26],
                        "friday": [14, 15, 17, 20],
                        "saturday": [17, 18, 9, 13],
                        "sunday": [20, 22, 24, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 62,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1945.jpg',
                    title: 'Untitled',
                    artist: 'Barnett Newman',
                    year: '1945',
                    rule: {
                        "monday": [20, 22, 24, 25],
                        "tuesday": [22, 24, 28, 31],
                        "wednesday": [24, 26, 27, 30],
                        "thursday": [9, 10, 22, 13],
                        "friday": [12, 15, 16, 26],
                        "saturday": [14, 15, 17, 20],
                        "sunday": [17, 18, 9, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 63,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/transection-i-1971.jpg',
                    title: 'Transection I',
                    artist: 'Clarence Holbrook Carter',
                    year: '1971',
                    rule: {
                        "monday": [18, 19, 10, 14],
                        "tuesday": [21, 23, 25, 26],
                        "wednesday": [23, 25, 29, 1],
                        "thursday": [25, 27, 28, 31],
                        "friday": [10, 11, 23, 14],
                        "saturday": [13, 15, 17, 27],
                        "sunday": [15, 16, 18, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 64,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/equinox-1958.jpg',
                    title: 'Equinox',
                    artist: 'Hans Hofmann',
                    year: '1958',
                    rule: {
                        "monday": [15, 16, 18, 21],
                        "tuesday": [18, 19, 10, 14],
                        "wednesday": [21, 23, 25, 26],
                        "thursday": [23, 25, 29, 1],
                        "friday": [25, 27, 28, 31],
                        "saturday": [10, 11, 23, 14],
                        "sunday": [13, 15, 17, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 65,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/moroccan-door-1991.jpg',
                    title: 'Moroccan Door',
                    artist: 'Howard Hodgkin',
                    year: '1991',
                    rule: {
                        "monday": [13, 15, 17, 27],
                        "tuesday": [15, 16, 18, 21],
                        "wednesday": [18, 19, 10, 14],
                        "thursday": [21, 23, 25, 26],
                        "friday": [23, 25, 29, 1],
                        "saturday": [25, 27, 28, 31],
                        "sunday": [10, 11, 23, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 66,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/modinha-2007.jpg',
                    title: 'Modinha',
                    artist: 'Beatriz Milhazes',
                    year: '2007',
                    rule: {
                        "monday": [10, 11, 23, 14],
                        "tuesday": [13, 15, 17, 27],
                        "wednesday": [15, 16, 18, 21],
                        "thursday": [18, 19, 10, 14],
                        "friday": [21, 23, 25, 26],
                        "saturday": [23, 25, 29, 1],
                        "sunday": [25, 27, 28, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 67,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/after-monet-1878.jpg',
                    title: 'After Monet',
                    artist: 'Sherrie Levine',
                    year: '1878',
                    rule: {
                        "monday": [25, 27, 28, 31],
                        "tuesday": [10, 11, 23, 14],
                        "wednesday": [13, 15, 17, 27],
                        "thursday": [15, 16, 18, 21],
                        "friday": [18, 19, 10, 14],
                        "saturday": [21, 23, 25, 26],
                        "sunday": [23, 25, 29, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 68,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-black-city-i-new-york-1949.jpg',
                    title: 'The Black City I (New York)',
                    artist: 'William Congdon',
                    year: '1949',
                    rule: {
                        "monday": [23, 25, 29, 1],
                        "tuesday": [25, 27, 28, 31],
                        "wednesday": [10, 11, 23, 14],
                        "thursday": [13, 15, 17, 27],
                        "friday": [15, 16, 18, 21],
                        "saturday": [18, 19, 10, 14],
                        "sunday": [21, 23, 25, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 69,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/n-y-1-road-4-1956.jpg',
                    title: 'N.Y. 1 (Road #4)',
                    artist: 'Hedda Sterne',
                    year: '1956',
                    rule: {
                        "monday": [21, 23, 25, 26],
                        "tuesday": [23, 25, 29, 1],
                        "wednesday": [25, 27, 28, 31],
                        "thursday": [10, 11, 23, 14],
                        "friday": [13, 15, 17, 27],
                        "saturday": [15, 16, 18, 21],
                        "sunday": [18, 19, 10, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 70,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/water-of-the-flowery-mill.jpg',
                    title: 'Water of the Flowery Mill',
                    artist: 'Arshile Gorky',
                    year: 'XX cent.',
                    rule: {
                        "monday": [19, 20, 11, 15],
                        "tuesday": [22, 24, 26, 27],
                        "wednesday": [24, 26, 30, 2],
                        "thursday": [26, 28, 29, 1],
                        "friday": [11, 12, 24, 15],
                        "saturday": [14, 16, 18, 28],
                        "sunday": [16, 17, 19, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 71,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/macchie-1971.jpg',
                    title: 'Macchie',
                    artist: 'Giulio Turcato',
                    year: '1971',
                    rule: {
                        "monday": [16, 17, 19, 22],
                        "tuesday": [19, 20, 11, 15],
                        "wednesday": [22, 24, 26, 27],
                        "thursday": [24, 26, 30, 2],
                        "friday": [26, 28, 29, 1],
                        "saturday": [11, 12, 24, 15],
                        "sunday": [14, 16, 18, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 72,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/ju-jitsu-1913.jpg',
                    title: 'Ju-Jitsu',
                    artist: 'David Bomberg',
                    year: '1913',
                    rule: {
                        "monday": [14, 16, 18, 28],
                        "tuesday": [16, 17, 19, 22],
                        "wednesday": [19, 20, 11, 15],
                        "thursday": [22, 24, 26, 27],
                        "friday": [24, 26, 30, 2],
                        "saturday": [26, 28, 29, 1],
                        "sunday": [11, 12, 24, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 73,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1912tyt.jpg',
                    title: 'Untitled',
                    artist: 'Jacques Villon',
                    year: '1912',
                    rule: {
                        "monday": [11, 12, 24, 15],
                        "tuesday": [14, 16, 18, 28],
                        "wednesday": [16, 17, 19, 22],
                        "thursday": [19, 20, 11, 15],
                        "friday": [22, 24, 26, 27],
                        "saturday": [24, 26, 30, 2],
                        "sunday": [26, 28, 29, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 74,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/bomen-1915.jpg',
                    title: 'Bomen',
                    artist: 'Jacoba van Heemskerck',
                    year: '1915',
                    rule: {
                        "monday": [26, 28, 29, 1],
                        "tuesday": [11, 12, 24, 15],
                        "wednesday": [14, 16, 18, 28],
                        "thursday": [16, 17, 19, 22],
                        "friday": [19, 20, 11, 15],
                        "saturday": [22, 24, 26, 27],
                        "sunday": [24, 26, 30, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 75,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/woman-verso-untitled.jpg',
                    title: 'Woman/Verso: Untitled',
                    artist: 'Willem de Kooning',
                    year: '1948',
                    rule: {
                        "monday": [24, 26, 30, 2],
                        "tuesday": [26, 28, 29, 1],
                        "wednesday": [11, 12, 24, 15],
                        "thursday": [14, 16, 18, 28],
                        "friday": [16, 17, 19, 22],
                        "saturday": [19, 20, 11, 15],
                        "sunday": [22, 24, 26, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 76,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/bleu-vert-jaune-orange-1954.jpg',
                    title: 'Bleu-Vert-Jaune-Orange',
                    artist: 'Francois Morellet',
                    year: '1954',
                    rule: {
                        "monday": [22, 24, 26, 27],
                        "tuesday": [24, 26, 30, 2],
                        "wednesday": [26, 28, 29, 1],
                        "thursday": [11, 12, 24, 15],
                        "friday": [14, 16, 18, 28],
                        "saturday": [16, 17, 19, 22],
                        "sunday": [19, 20, 11, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 77,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/floris-1964.jpg',
                    title: 'Floris',
                    artist: 'Bernard Cohen',
                    year: '1964',
                    rule: {
                        "monday": [20, 21, 12, 16],
                        "tuesday": [23, 25, 26, 28],
                        "wednesday": [25, 27, 31, 3],
                        "thursday": [27, 29, 30, 2],
                        "friday": [12, 13, 25, 16],
                        "saturday": [15, 17, 19, 29],
                        "sunday": [17, 18, 20, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 78,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/moby-dick-1956.jpg',
                    title: 'Moby Dick',
                    artist: 'Marcelle Loubchansky',
                    year: '1956',
                    rule: {
                        "monday": [17, 18, 20, 23],
                        "tuesday": [20, 21, 12, 16],
                        "wednesday": [23, 25, 26, 28],
                        "thursday": [25, 27, 31, 3],
                        "friday": [27, 29, 30, 2],
                        "saturday": [12, 13, 25, 16],
                        "sunday": [15, 17, 19, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 79,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/la-guitare-1944.jpg',
                    title: 'La Guitare',
                    artist: 'Gustave Singier',
                    year: '1944',
                    rule: {
                        "monday": [15, 17, 19, 29],
                        "tuesday": [17, 18, 20, 23],
                        "wednesday": [20, 21, 12, 16],
                        "thursday": [23, 25, 26, 28],
                        "friday": [25, 27, 31, 3],
                        "saturday": [27, 29, 30, 2],
                        "sunday": [12, 13, 25, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 80,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/october-1955.jpg',
                    title: 'October',
                    artist: 'Roger Bissière',
                    year: '1955',
                    rule: {
                        "monday": [12, 13, 25, 16],
                        "tuesday": [15, 17, 19, 29],
                        "wednesday": [17, 18, 20, 23],
                        "thursday": [20, 21, 12, 16],
                        "friday": [23, 25, 26, 28],
                        "saturday": [25, 27, 31, 3],
                        "sunday": [27, 29, 30, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 81,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/volume-1958-1.jpg',
                    title: 'Volume',
                    artist: 'Dadamaino',
                    year: '1958',
                    rule: {
                        "monday": [27, 29, 30, 2],
                        "tuesday": [12, 13, 25, 16],
                        "wednesday": [15, 17, 19, 29],
                        "thursday": [17, 18, 20, 23],
                        "friday": [20, 21, 12, 16],
                        "saturday": [23, 25, 26, 28],
                        "sunday": [25, 27, 31, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 82,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/constructive-decorative-composition-1924-7.jpg',
                    title: 'Constructive-decorative composition',
                    artist: 'David Kakabadze',
                    year: '1924',
                    rule: {
                        "monday": [25, 27, 31, 3],
                        "tuesday": [27, 29, 30, 2],
                        "wednesday": [12, 13, 25, 16],
                        "thursday": [15, 17, 19, 29],
                        "friday": [17, 18, 20, 23],
                        "saturday": [20, 21, 12, 16],
                        "sunday": [23, 25, 26, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 83,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-2002.jpg',
                    title: 'Untitled',
                    artist: 'Doreen Reid Nakamarra',
                    year: '2002',
                    rule: {
                        "monday": [23, 25, 26, 28],
                        "tuesday": [25, 27, 31, 3],
                        "wednesday": [27, 29, 30, 2],
                        "thursday": [12, 13, 25, 16],
                        "friday": [15, 17, 19, 29],
                        "saturday": [17, 18, 20, 23],
                        "sunday": [20, 21, 12, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 84,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/mount-tamalpais.png',
                    title: 'Mount Tamalpais',
                    artist: 'Etel Adnan',
                    year: '1985',
                    rule: {
                        "monday": [21, 22, 13, 17],
                        "tuesday": [24, 26, 27, 29],
                        "wednesday": [26, 28, 1, 4],
                        "thursday": [28, 30, 31, 3],
                        "friday": [13, 14, 26, 17],
                        "saturday": [16, 18, 20, 30],
                        "sunday": [18, 19, 21, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 85,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1970-1.jpg',
                    title: 'Untitled',
                    artist: 'Nasreen Mohamedi',
                    year: '1970',
                    rule: {
                        "monday": [18, 19, 21, 24],
                        "tuesday": [21, 22, 13, 17],
                        "wednesday": [24, 26, 27, 29],
                        "thursday": [26, 28, 1, 4],
                        "friday": [28, 30, 31, 3],
                        "saturday": [13, 14, 26, 17],
                        "sunday": [16, 18, 20, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 86,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/la-m-scara-m-gica-1969.jpg',
                    title: 'La Máscara Mágica',
                    artist: 'Carlos Merida',
                    year: '1969',
                    rule: {
                        "monday": [16, 18, 20, 30],
                        "tuesday": [18, 19, 21, 24],
                        "wednesday": [21, 22, 13, 17],
                        "thursday": [24, 26, 27, 29],
                        "friday": [26, 28, 1, 4],
                        "saturday": [28, 30, 31, 3],
                        "sunday": [13, 14, 26, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 87,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/architectural-structures-1925.jpg',
                    title: 'Architectural Structures',
                    artist: 'Lajos Kassak',
                    year: '1925',
                    rule: {
                        "monday": [13, 14, 26, 17],
                        "tuesday": [16, 18, 20, 30],
                        "wednesday": [18, 19, 21, 24],
                        "thursday": [21, 22, 13, 17],
                        "friday": [24, 26, 27, 29],
                        "saturday": [26, 28, 1, 4],
                        "sunday": [28, 30, 31, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 88,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/painting-918-1972.jpg',
                    title: 'Painting 918',
                    artist: 'Luis Feito',
                    year: '1972',
                    rule: {
                        "monday": [28, 30, 31, 3],
                        "tuesday": [13, 14, 26, 17],
                        "wednesday": [16, 18, 20, 30],
                        "thursday": [18, 19, 21, 24],
                        "friday": [21, 22, 13, 17],
                        "saturday": [24, 26, 27, 29],
                        "sunday": [26, 28, 1, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 89,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/multichromic-i-1970.jpg',
                    title: 'Multichromic I',
                    artist: 'Wen-Ying Tsai',
                    year: '1970',
                    rule: {
                        "monday": [26, 28, 1, 4],
                        "tuesday": [28, 30, 31, 3],
                        "wednesday": [13, 14, 26, 17],
                        "thursday": [16, 18, 20, 30],
                        "friday": [18, 19, 21, 24],
                        "saturday": [21, 22, 13, 17],
                        "sunday": [24, 26, 27, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 90,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/q1-75-s-2-1977.jpg',
                    title: 'Q1 75 S#2',
                    artist: 'Jack Tworkov',
                    year: '1977',
                    rule: {
                        "monday": [24, 26, 27, 29],
                        "tuesday": [26, 28, 1, 4],
                        "wednesday": [28, 30, 31, 3],
                        "thursday": [13, 14, 26, 17],
                        "friday": [16, 18, 20, 30],
                        "saturday": [18, 19, 21, 24],
                        "sunday": [21, 22, 13, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 91,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/comp-100-1958.jpg',
                    title: '#100',
                    artist: 'Adolf Fleischmann',
                    year: '1958',
                    rule: {
                        "monday": [22, 23, 14, 18],
                        "tuesday": [25, 27, 28, 30],
                        "wednesday": [27, 29, 2, 5],
                        "thursday": [29, 31, 1, 4],
                        "friday": [14, 15, 26, 18],
                        "saturday": [17, 19, 21, 31],
                        "sunday": [19, 20, 22, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 92,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/planos-y-color-liberados-1947.jpg',
                    title: 'Planos y color liberados',
                    artist: 'Gyula Kosice',
                    year: '1947',
                    rule: {
                        "monday": [19, 20, 22, 25],
                        "tuesday": [22, 23, 14, 18],
                        "wednesday": [25, 27, 28, 30],
                        "thursday": [27, 29, 2, 5],
                        "friday": [29, 31, 1, 4],
                        "saturday": [14, 15, 26, 18],
                        "sunday": [17, 19, 21, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 93,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-2.jpg',
                    title: 'Untitled',
                    artist: 'Rubem Ludolf',
                    year: 'XX-XXI cent.',
                    rule: {
                        "monday": [17, 19, 21, 31],
                        "tuesday": [19, 20, 22, 25],
                        "wednesday": [22, 23, 14, 18],
                        "thursday": [25, 27, 28, 30],
                        "friday": [27, 29, 2, 5],
                        "saturday": [29, 31, 1, 4],
                        "sunday": [14, 15, 26, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 94,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/santarossa-1974.jpg',
                    title: 'Santarossa',
                    artist: 'Afro',
                    year: '1974',
                    rule: {
                        "monday": [14, 15, 26, 18],
                        "tuesday": [17, 19, 21, 31],
                        "wednesday": [19, 20, 22, 25],
                        "thursday": [22, 23, 14, 18],
                        "friday": [25, 27, 28, 30],
                        "saturday": [27, 29, 2, 5],
                        "sunday": [29, 31, 1, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 95,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/m-cano-fracture-construction.jpg',
                    title: 'Mécano-Fracture Construction',
                    artist: 'Henryk Berlewi',
                    year: 'XX cent.',
                    rule: {
                        "monday": [29, 31, 1, 4],
                        "tuesday": [14, 15, 26, 18],
                        "wednesday": [17, 19, 21, 31],
                        "thursday": [19, 20, 22, 25],
                        "friday": [22, 23, 14, 18],
                        "saturday": [25, 27, 28, 30],
                        "sunday": [27, 29, 2, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 96,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/rudow-osa-1949.jpg',
                    title: 'Rudowłosa',
                    artist: 'Wladyslaw Strzeminski',
                    year: '1949',
                    rule: {
                        "monday": [27, 29, 2, 5],
                        "tuesday": [29, 31, 1, 4],
                        "wednesday": [14, 15, 26, 18],
                        "thursday": [17, 19, 21, 31],
                        "friday": [19, 20, 22, 25],
                        "saturday": [22, 23, 14, 18],
                        "sunday": [25, 27, 28, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 97,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1aa.jpg',
                    title: 'Untitled',
                    artist: 'Johannes Itten',
                    year: 'XX cent.',
                    rule: {
                        "monday": [25, 27, 28, 30],
                        "tuesday": [27, 29, 2, 5],
                        "wednesday": [29, 31, 1, 4],
                        "thursday": [14, 15, 26, 18],
                        "friday": [17, 19, 21, 31],
                        "saturday": [19, 20, 22, 25],
                        "sunday": [22, 23, 14, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 98,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/me-and-the-moon-1937.jpg',
                    title: 'Me and the Moon',
                    artist: 'Arthur Dove',
                    year: '1937',
                    rule: {
                        "monday": [23, 24, 15, 19],
                        "tuesday": [26, 28, 29, 31],
                        "wednesday": [28, 30, 3, 6],
                        "thursday": [30, 1, 2, 5],
                        "friday": [15, 16, 27, 19],
                        "saturday": [18, 20, 22, 1],
                        "sunday": [20, 21, 23, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 99,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/allah-2010.jpg',
                    title: 'Allah',
                    artist: 'M.F. Husain',
                    year: '2010',
                    rule: {
                        "monday": [20, 21, 23, 26],
                        "tuesday": [23, 24, 15, 19],
                        "wednesday": [26, 28, 29, 31],
                        "thursday": [28, 30, 3, 6],
                        "friday": [30, 1, 2, 5],
                        "saturday": [15, 16, 27, 19],
                        "sunday": [18, 20, 22, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 100,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/senza-titolo-1939(1).jpg',
                    title: 'Senza titolo',
                    artist: 'Bice Lazzari',
                    year: '1939',
                    rule: {
                        "monday": [18, 20, 22, 1],
                        "tuesday": [20, 21, 23, 26],
                        "wednesday": [23, 24, 15, 19],
                        "thursday": [26, 28, 29, 31],
                        "friday": [28, 30, 3, 6],
                        "saturday": [30, 1, 2, 5],
                        "sunday": [15, 16, 27, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 101,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-35.jpg',
                    title: 'Composition 35',
                    artist: 'Sonia Delaunay',
                    year: 'c.1930',
                    rule: {
                        "monday": [15, 16, 27, 19],
                        "tuesday": [18, 20, 22, 1],
                        "wednesday": [20, 21, 23, 26],
                        "thursday": [23, 24, 15, 19],
                        "friday": [26, 28, 29, 31],
                        "saturday": [28, 30, 3, 6],
                        "sunday": [30, 1, 2, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 102,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/colored-composition-hommage-to-johann-sebastian-bachh.jpg',
                    title: 'Colored composition (Hommage to Johann Sebastian Bachh)',
                    artist: 'August Macke',
                    year: '1912',
                    rule: {
                        "monday": [30, 1, 2, 5],
                        "tuesday": [15, 16, 27, 19],
                        "wednesday": [18, 20, 22, 1],
                        "thursday": [20, 21, 23, 26],
                        "friday": [23, 24, 15, 19],
                        "saturday": [26, 28, 29, 31],
                        "sunday": [28, 30, 3, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 103,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/colored-rhythm-study-for-the-film-1913(35).jpg',
                    title: 'Colored Rhythm: Study for the Film',
                    artist: 'Leopold Survage',
                    year: '1913',
                    rule: {
                        "monday": [28, 30, 3, 6],
                        "tuesday": [30, 1, 2, 5],
                        "wednesday": [15, 16, 27, 19],
                        "thursday": [18, 20, 22, 1],
                        "friday": [20, 21, 23, 26],
                        "saturday": [23, 24, 15, 19],
                        "sunday": [26, 28, 29, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 104,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/diagonal-planes-1925.jpg',
                    title: 'Diagonal Planes',
                    artist: 'Frantisek Kupka',
                    year: '1925',
                    rule: {
                        "monday": [26, 28, 29, 31],
                        "tuesday": [28, 30, 3, 6],
                        "wednesday": [30, 1, 2, 5],
                        "thursday": [15, 16, 27, 19],
                        "friday": [18, 20, 22, 1],
                        "saturday": [20, 21, 23, 26],
                        "sunday": [23, 24, 15, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 105,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/stained-glass-windows-for-the-university-of-caracas.jpg',
                    title: 'Stained glass windows for the University of Caracas',
                    artist: 'Fernand Leger',
                    year: 'XIX-XX cent.',
                    rule: {
                        "monday": [24, 25, 16, 20],
                        "tuesday": [27, 29, 30, 1],
                        "wednesday": [29, 31, 4, 7],
                        "thursday": [31, 2, 3, 6],
                        "friday": [16, 17, 28, 20],
                        "saturday": [19, 21, 23, 2],
                        "sunday": [21, 22, 14, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 106,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/inganno-di-afrodite-1979.jpg',
                    title: 'Inganno di Afrodite',
                    artist: 'Alberto Biasi',
                    year: '1979',
                    rule: {
                        "monday": [21, 22, 14, 17],
                        "tuesday": [24, 25, 16, 20],
                        "wednesday": [27, 29, 30, 1],
                        "thursday": [29, 31, 4, 7],
                        "friday": [31, 2, 3, 6],
                        "saturday": [16, 17, 28, 20],
                        "sunday": [19, 21, 23, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 107,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/five-o-clock-tea-1917.jpg',
                    title: 'Five o\'clock tea',
                    artist: 'Julius Evola',
                    year: '1917',
                    rule: {
                        "monday": [19, 21, 23, 2],
                        "tuesday": [21, 22, 14, 17],
                        "wednesday": [24, 25, 16, 20],
                        "thursday": [27, 29, 30, 1],
                        "friday": [29, 31, 4, 7],
                        "saturday": [31, 2, 3, 6],
                        "sunday": [16, 17, 28, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 108,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/new-york-city-i-1942.jpg',
                    title: 'New York City I',
                    artist: 'Piet Mondrian',
                    year: '1942',
                    rule: {
                        "monday": [16, 17, 28, 20],
                        "tuesday": [19, 21, 23, 2],
                        "wednesday": [21, 22, 14, 17],
                        "thursday": [24, 25, 16, 20],
                        "friday": [27, 29, 30, 1],
                        "saturday": [29, 31, 4, 7],
                        "sunday": [31, 2, 3, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 109,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1945a.jpg',
                    title: 'Untitled',
                    artist: 'Lidy Prati',
                    year: '1945',
                    rule: {
                        "monday": [31, 2, 3, 6],
                        "tuesday": [16, 17, 28, 20],
                        "wednesday": [19, 21, 23, 2],
                        "thursday": [21, 22, 14, 17],
                        "friday": [24, 25, 16, 20],
                        "saturday": [27, 29, 30, 1],
                        "sunday": [29, 31, 4, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 110,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/pintura-mad-1948.jpg',
                    title: 'Pintura Madí',
                    artist: 'Gyula Kosice',
                    year: '1948',
                    rule: {
                        "monday": [29, 31, 4, 7],
                        "tuesday": [31, 2, 3, 6],
                        "wednesday": [16, 17, 28, 20],
                        "thursday": [19, 21, 23, 2],
                        "friday": [21, 22, 14, 17],
                        "saturday": [24, 25, 16, 20],
                        "sunday": [27, 29, 30, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 111,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/conjunto-dos-contr-rios-1989.jpg',
                    title: 'Conjunto dos Contrários',
                    artist: 'Eduardo Nery',
                    year: '1989',
                    rule: {
                        "monday": [27, 29, 30, 1],
                        "tuesday": [29, 31, 4, 7],
                        "wednesday": [31, 2, 3, 6],
                        "thursday": [16, 17, 28, 20],
                        "friday": [19, 21, 23, 2],
                        "saturday": [21, 22, 14, 17],
                        "sunday": [24, 25, 16, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 112,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1985.jpg',
                    title: 'Untitled',
                    artist: 'Alberto Biasi',
                    year: '1985',
                    rule: {
                        "monday": [25, 26, 17, 21],
                        "tuesday": [28, 30, 31, 2],
                        "wednesday": [30, 1, 5, 8],
                        "thursday": [1, 3, 4, 7],
                        "friday": [17, 18, 29, 21],
                        "saturday": [20, 22, 24, 3],
                        "sunday": [22, 23, 15, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 113,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/print-1-from-paper-clip-suite-1974.jpg',
                    title: 'Print 1 From Paper Clip Suite',
                    artist: 'Richard Smith',
                    year: '1974',
                    rule: {
                        "monday": [22, 23, 15, 18],
                        "tuesday": [25, 26, 17, 21],
                        "wednesday": [28, 30, 31, 2],
                        "thursday": [30, 1, 5, 8],
                        "friday": [1, 3, 4, 7],
                        "saturday": [17, 18, 29, 21],
                        "sunday": [20, 22, 24, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 114,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/after-malevich-02-2012.jpg',
                    title: 'After Malevich 02',
                    artist: 'Tess Jaray',
                    year: '2012',
                    rule: {
                        "monday": [20, 22, 24, 3],
                        "tuesday": [22, 23, 15, 18],
                        "wednesday": [25, 26, 17, 21],
                        "thursday": [28, 30, 31, 2],
                        "friday": [30, 1, 5, 8],
                        "saturday": [1, 3, 4, 7],
                        "sunday": [17, 18, 29, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 115,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/4-trames-de-tirets-pivot-es-sur-un-c-t-1971.jpg',
                    title: '4 trames de tirets pivotées sur un côté',
                    artist: 'Francois Morellet',
                    year: '1971',
                    rule: {
                        "monday": [17, 18, 29, 21],
                        "tuesday": [20, 22, 24, 3],
                        "wednesday": [22, 23, 15, 18],
                        "thursday": [25, 26, 17, 21],
                        "friday": [28, 30, 31, 2],
                        "saturday": [30, 1, 5, 8],
                        "sunday": [1, 3, 4, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 116,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/le-temps-1975.jpg',
                    title: 'Le temps',
                    artist: 'Aki Kuroda',
                    year: '1975',
                    rule: {
                        "monday": [1, 3, 4, 7],
                        "tuesday": [17, 18, 29, 21],
                        "wednesday": [20, 22, 24, 3],
                        "thursday": [22, 23, 15, 18],
                        "friday": [25, 26, 17, 21],
                        "saturday": [28, 30, 31, 2],
                        "sunday": [30, 1, 5, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 117,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/18-l-1965.jpg',
                    title: '#18 L',
                    artist: 'Paul Reed',
                    year: '1965',
                    rule: {
                        "monday": [30, 1, 5, 8],
                        "tuesday": [1, 3, 4, 7],
                        "wednesday": [17, 18, 29, 21],
                        "thursday": [20, 22, 24, 3],
                        "friday": [22, 23, 15, 18],
                        "saturday": [25, 26, 17, 21],
                        "sunday": [28, 30, 31, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 118,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/dialogue-i-1967.jpg',
                    title: 'Dialogue I',
                    artist: 'Constantin Flondor',
                    year: '1967',
                    rule: {
                        "monday": [28, 30, 31, 2],
                        "tuesday": [30, 1, 5, 8],
                        "wednesday": [1, 3, 4, 7],
                        "thursday": [17, 18, 29, 21],
                        "friday": [20, 22, 24, 3],
                        "saturday": [22, 23, 15, 18],
                        "sunday": [25, 26, 17, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 119,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/relational-painting-64-1953.jpg',
                    title: 'Relational Painting #64',
                    artist: 'Fritz Glarner',
                    year: '1953',
                    rule: {
                        "monday": [26, 27, 18, 22],
                        "tuesday": [29, 31, 1, 3],
                        "wednesday": [31, 2, 6, 9],
                        "thursday": [2, 4, 5, 8],
                        "friday": [18, 19, 30, 22],
                        "saturday": [21, 23, 15, 4],
                        "sunday": [23, 24, 16, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 120,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/four-blue-five-1962.jpg',
                    title: 'Four Blue Five',
                    artist: 'Thomas Downing',
                    year: '1962',
                    rule: {
                        "monday": [23, 24, 16, 19],
                        "tuesday": [26, 27, 18, 22],
                        "wednesday": [29, 31, 1, 3],
                        "thursday": [31, 2, 6, 9],
                        "friday": [2, 4, 5, 8],
                        "saturday": [18, 19, 30, 22],
                        "sunday": [21, 23, 15, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 121,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/ohne-titel-in-der-erde-1987.jpg',
                    title: 'Ohne Titel (In Der Erde)',
                    artist: 'Jurgen Partenheimer',
                    year: '1987',
                    rule: {
                        "monday": [21, 23, 15, 4],
                        "tuesday": [23, 24, 16, 19],
                        "wednesday": [26, 27, 18, 22],
                        "thursday": [29, 31, 1, 3],
                        "friday": [31, 2, 6, 9],
                        "saturday": [2, 4, 5, 8],
                        "sunday": [18, 19, 30, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 122,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/seated-figure-1954.jpg',
                    title: 'Seated Figure',
                    artist: 'Conrad Marca-Relli',
                    year: '1953 - 1954',
                    rule: {
                        "monday": [18, 19, 30, 22],
                        "tuesday": [21, 23, 15, 4],
                        "wednesday": [23, 24, 16, 19],
                        "thursday": [26, 27, 18, 22],
                        "friday": [29, 31, 1, 3],
                        "saturday": [31, 2, 6, 9],
                        "sunday": [2, 4, 5, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 123,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/statue-in-a-cemetery-1959.jpg',
                    title: 'Statue in a Cemetery',
                    artist: 'Endre Balint',
                    year: '1959',
                    rule: {
                        "monday": [2, 4, 5, 8],
                        "tuesday": [18, 19, 30, 22],
                        "wednesday": [21, 23, 15, 4],
                        "thursday": [23, 24, 16, 19],
                        "friday": [26, 27, 18, 22],
                        "saturday": [29, 31, 1, 3],
                        "sunday": []
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 124,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/reclining-nude-red-nude-1956.jpg',
                    title: 'Reclining Nude (Red Nude)',
                    artist: 'William Scott',
                    year: '1956',
                    rule: {
                        "monday": [31, 2, 6, 9],
                        "tuesday": [2, 4, 5, 8],
                        "wednesday": [18, 19, 30, 22],
                        "thursday": [21, 23, 15, 4],
                        "friday": [23, 24, 16, 19],
                        "saturday": [26, 27, 18, 22],
                        "sunday": [29, 31, 1, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 125,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/tornado-1911.jpg',
                    title: 'Tornado',
                    artist: 'Joe Goode',
                    year: '1911',
                    rule: {
                        "monday": [29, 31, 1, 3],
                        "tuesday": [31, 2, 6, 9],
                        "wednesday": [2, 4, 5, 8],
                        "thursday": [18, 19, 30, 22],
                        "friday": [21, 23, 15, 4],
                        "saturday": [23, 24, 16, 19],
                        "sunday": [26, 27, 18, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 126,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/fluctuating-planes-1952.jpg',
                    title: 'Fluctuating Planes',
                    artist: 'Jock Macdonald',
                    year: '1952',
                    rule: {
                        "monday": [27, 28, 19, 23],
                        "tuesday": [30, 1, 2, 4],
                        "wednesday": [1, 3, 7, 10],
                        "thursday": [3, 5, 6, 9],
                        "friday": [19, 20, 31, 23],
                        "saturday": [22, 24, 16, 5],
                        "sunday": [24, 25, 17, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 127,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/astrazione-1921.jpg',
                    title: 'Astrazione',
                    artist: 'Julius Evola',
                    year: '1921',
                    rule: {
                        "monday": [24, 25, 17, 20],
                        "tuesday": [27, 28, 19, 23],
                        "wednesday": [30, 1, 2, 4],
                        "thursday": [1, 3, 7, 10],
                        "friday": [3, 5, 6, 9],
                        "saturday": [19, 20, 31, 23],
                        "sunday": [22, 24, 16, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 128,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/bouquet-1928.jpg',
                    title: 'Bouquet',
                    artist: 'Jean Fautrier',
                    year: '1928',
                    rule: {
                        "monday": [22, 24, 16, 5],
                        "tuesday": [24, 25, 17, 20],
                        "wednesday": [27, 28, 19, 23],
                        "thursday": [30, 1, 2, 4],
                        "friday": [1, 3, 7, 10],
                        "saturday": [3, 5, 6, 9],
                        "sunday": [19, 20, 31, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 129,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/lighthouse-1915.jpg',
                    title: 'Lighthouse',
                    artist: 'Marsden Hartley',
                    year: '1915',
                    rule: {
                        "monday": [19, 20, 31, 23],
                        "tuesday": [22, 24, 16, 5],
                        "wednesday": [24, 25, 17, 20],
                        "thursday": [27, 28, 19, 23],
                        "friday": [30, 1, 2, 4],
                        "saturday": [1, 3, 7, 10],
                        "sunday": [3, 5, 6, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 130,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/sketch-painted-in-santa-fe-new-mexico-1944.jpg',
                    title: 'Sketch Painted in Santa Fe, New Mexico',
                    artist: 'Lawren Harris',
                    year: '1944',
                    rule: {
                        "monday": [3, 5, 6, 9],
                        "tuesday": [19, 20, 31, 23],
                        "wednesday": [22, 24, 16, 5],
                        "thursday": [24, 25, 17, 20],
                        "friday": [27, 28, 19, 23],
                        "saturday": [30, 1, 2, 4],
                        "sunday": [1, 3, 7, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 131,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/grand-musicien-1920.jpg',
                    title: 'Grand musicien',
                    artist: 'Georges Ribemont-Dessaignes',
                    year: '1920',
                    rule: {
                        "monday": [1, 3, 7, 10],
                        "tuesday": [3, 5, 6, 9],
                        "wednesday": [19, 20, 31, 23],
                        "thursday": [22, 24, 16, 5],
                        "friday": [24, 25, 17, 20],
                        "saturday": [27, 28, 19, 23],
                        "sunday": [30, 1, 2, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 132,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1937.jpg',
                    title: 'Composition',
                    artist: 'Sophie Taeuber-Arp',
                    year: '1937',
                    rule: {
                        "monday": [30, 1, 2, 4],
                        "tuesday": [1, 3, 7, 10],
                        "wednesday": [3, 5, 6, 9],
                        "thursday": [19, 20, 31, 23],
                        "friday": [22, 24, 16, 5],
                        "saturday": [24, 25, 17, 20],
                        "sunday": [27, 28, 19, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 133,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/legendary-landscape-azul-y-naranja-1964.jpg',
                    title: 'Legendary Landscape (Azul y Naranja)',
                    artist: 'Gunther Gerzso',
                    year: '1964',
                    rule: {
                        "monday": [28, 29, 20, 24],
                        "tuesday": [31, 2, 3, 5],
                        "wednesday": [2, 4, 8, 11],
                        "thursday": [4, 6, 7, 10],
                        "friday": [20, 21, 1, 24],
                        "saturday": [23, 25, 17, 6],
                        "sunday": [25, 26, 18, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 134,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/c-136-1965.jpg',
                    title: 'C 136',
                    artist: 'Tadasky',
                    year: '1965',
                    rule: {
                        "monday": [25, 26, 18, 21],
                        "tuesday": [28, 29, 20, 24],
                        "wednesday": [31, 2, 3, 5],
                        "thursday": [2, 4, 8, 11],
                        "friday": [4, 6, 7, 10],
                        "saturday": [20, 21, 1, 24],
                        "sunday": [23, 25, 17, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 135,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/en-courbes-violontes-1947.jpg',
                    title: 'En Courbes Violontes',
                    artist: 'Marcelle Cahn',
                    year: '1947',
                    rule: {
                        "monday": [23, 25, 17, 6],
                        "tuesday": [25, 26, 18, 21],
                        "wednesday": [28, 29, 20, 24],
                        "thursday": [31, 2, 3, 5],
                        "friday": [2, 4, 8, 11],
                        "saturday": [4, 6, 7, 10],
                        "sunday": [20, 21, 1, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 136,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/faixas-ritmadas-1958.jpg',
                    title: 'Faixas Ritmadas',
                    artist: 'Ivan Serpa',
                    year: '1958',
                    rule: {
                        "monday": [20, 21, 1, 24],
                        "tuesday": [23, 25, 17, 6],
                        "wednesday": [25, 26, 18, 21],
                        "thursday": [28, 29, 20, 24],
                        "friday": [31, 2, 3, 5],
                        "saturday": [2, 4, 8, 11],
                        "sunday": [4, 6, 7, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 137,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/nega-maluca-2006.jpg',
                    title: 'Nega Maluca',
                    artist: 'Beatriz Milhazes',
                    year: '2006',
                    rule: {
                        "monday": [4, 6, 7, 10],
                        "tuesday": [20, 21, 1, 24],
                        "wednesday": [23, 25, 17, 6],
                        "thursday": [25, 26, 18, 21],
                        "friday": [28, 29, 20, 24],
                        "saturday": [31, 2, 3, 5],
                        "sunday": [2, 4, 8, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 138,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/contra-relevo-objeto-n-7-1959.jpg',
                    title: 'Contra Relevo (Objeto N. 7)',
                    artist: 'Lygia Clark',
                    year: '1959',
                    rule: {
                        "monday": [2, 4, 8, 11],
                        "tuesday": [4, 6, 7, 10],
                        "wednesday": [20, 21, 1, 24],
                        "thursday": [23, 25, 17, 6],
                        "friday": [25, 26, 18, 21],
                        "saturday": [28, 29, 20, 24],
                        "sunday": [31, 2, 3, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 139,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/alba-1987.jpg',
                    title: 'Alba',
                    artist: 'Albert Irvin',
                    year: '1987',
                    rule: {
                        "monday": [31, 2, 3, 5],
                        "tuesday": [2, 4, 8, 11],
                        "wednesday": [4, 6, 7, 10],
                        "thursday": [20, 21, 1, 24],
                        "friday": [23, 25, 17, 6],
                        "saturday": [25, 26, 18, 21],
                        "sunday": [28, 29, 20, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 140,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/configuration-1988.jpg',
                    title: 'Configuration',
                    artist: 'Romul Nutiu',
                    year: '1988',
                    rule: {
                        "monday": [29, 30, 21, 25],
                        "tuesday": [1, 3, 4, 6],
                        "wednesday": [3, 5, 9, 12],
                        "thursday": [5, 7, 8, 11],
                        "friday": [21, 22, 2, 25],
                        "saturday": [24, 26, 18, 7],
                        "sunday": [26, 27, 19, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 141,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/lepanto-panel-12.jpg',
                    title: 'Lepanto, panel 12',
                    artist: 'Cy Twombly',
                    year: 'XX-XXI cent.',
                    rule: {
                        "monday": [26, 27, 19, 22],
                        "tuesday": [29, 30, 21, 25],
                        "wednesday": [1, 3, 4, 6],
                        "thursday": [3, 5, 9, 12],
                        "friday": [5, 7, 8, 11],
                        "saturday": [21, 22, 2, 25],
                        "sunday": [24, 26, 18, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 142,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/atmospheric-effects-i-1970.jpg',
                    title: 'Atmospheric Effects I',
                    artist: 'Alma Woodsey Thomas',
                    year: '1970',
                    rule: {
                        "monday": [24, 26, 18, 7],
                        "tuesday": [26, 27, 19, 22],
                        "wednesday": [29, 30, 21, 25],
                        "thursday": [1, 3, 4, 6],
                        "friday": [3, 5, 9, 12],
                        "saturday": [5, 7, 8, 11],
                        "sunday": [21, 22, 2, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 143,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/ominenda-1963.jpg',
                    title: 'Ominenda',
                    artist: 'Richard Mortensen',
                    year: '1963',
                    rule: {
                        "monday": [21, 22, 2, 25],
                        "tuesday": [24, 26, 18, 7],
                        "wednesday": [26, 27, 19, 22],
                        "thursday": [29, 30, 21, 25],
                        "friday": [1, 3, 4, 6],
                        "saturday": [3, 5, 9, 12],
                        "sunday": [5, 7, 8, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 144,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/non-objective-composition-suprematism.jpg',
                    title: 'Non-Objective Composition (Suprematism)',
                    artist: 'Olga Rozanova',
                    year: '1916',
                    rule: {
                        "monday": [5, 7, 8, 11],
                        "tuesday": [21, 22, 2, 25],
                        "wednesday": [24, 26, 18, 7],
                        "thursday": [26, 27, 19, 22],
                        "friday": [29, 30, 21, 25],
                        "saturday": [1, 3, 4, 6],
                        "sunday": [3, 5, 9, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 145,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/die-fahne-hoch-1959.jpg',
                    title: 'Die Fahne Hoch!',
                    artist: 'Frank Stella',
                    year: '1959',
                    rule: {
                        "monday": [3, 5, 9, 12],
                        "tuesday": [5, 7, 8, 11],
                        "wednesday": [21, 22, 2, 25],
                        "thursday": [24, 26, 18, 7],
                        "friday": [26, 27, 19, 22],
                        "saturday": [29, 30, 21, 25],
                        "sunday": [1, 3, 4, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 146,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-graphic-composition-1951-4(1).jpg',
                    title: 'Untitled (Graphic Composition)',
                    artist: 'Bruno Munari',
                    year: '1951',
                    rule: {
                        "monday": [1, 3, 4, 6],
                        "tuesday": [3, 5, 9, 12],
                        "wednesday": [5, 7, 8, 11],
                        "thursday": [21, 22, 2, 25],
                        "friday": [24, 26, 18, 7],
                        "saturday": [26, 27, 19, 22],
                        "sunday": [29, 30, 21, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 147,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/modality-series-spring-awakening-854a-1937.jpg',
                    title: 'Modality Series, Spring Awakening 854A',
                    artist: 'Jock Macdonald',
                    year: '1937',
                    rule: {
                        "monday": [30, 31, 22, 26],
                        "tuesday": [2, 4, 5, 7],
                        "wednesday": [4, 6, 10, 13],
                        "thursday": [6, 8, 9, 12],
                        "friday": [22, 23, 3, 26],
                        "saturday": [25, 27, 19, 8],
                        "sunday": [27, 28, 20, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 148,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/sun-1943.jpg',
                    title: 'Sun',
                    artist: 'Arthur Dove',
                    year: '1943',
                    rule: {
                        "monday": [27, 28, 20, 23],
                        "tuesday": [30, 31, 22, 26],
                        "wednesday": [2, 4, 5, 7],
                        "thursday": [4, 6, 10, 13],
                        "friday": [6, 8, 9, 12],
                        "saturday": [22, 23, 3, 26],
                        "sunday": [25, 27, 19, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 149,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/night-creatures-1965.jpg',
                    title: 'Night Creatures',
                    artist: 'Lee Krasner',
                    year: '1965',
                    rule: {
                        "monday": [25, 27, 19, 8],
                        "tuesday": [27, 28, 20, 23],
                        "wednesday": [30, 31, 22, 26],
                        "thursday": [2, 4, 5, 7],
                        "friday": [4, 6, 10, 13],
                        "saturday": [6, 8, 9, 12],
                        "sunday": [22, 23, 3, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 150,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/cinetic-composition-1968.jpg',
                    title: 'Cinetic Composition',
                    artist: 'Almir Mavignier',
                    year: '1968',
                    rule: {
                        "monday": [22, 23, 3, 26],
                        "tuesday": [25, 27, 19, 8],
                        "wednesday": [27, 28, 20, 23],
                        "thursday": [30, 31, 22, 26],
                        "friday": [2, 4, 5, 7],
                        "saturday": [4, 6, 10, 13],
                        "sunday": [6, 8, 9, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 151,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/relief-painting-19x-1960-61.jpg',
                    title: 'Relief painting #19x',
                    artist: 'Adolf Fleischmann',
                    year: '1961',
                    rule: {
                        "monday": [6, 8, 9, 12],
                        "tuesday": [22, 23, 3, 26],
                        "wednesday": [25, 27, 19, 8],
                        "thursday": [27, 28, 20, 23],
                        "friday": [30, 31, 22, 26],
                        "saturday": [2, 4, 5, 7],
                        "sunday": [4, 6, 10, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 152,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/easy-dark-2007.jpg',
                    title: 'Easy Dark',
                    artist: 'Julie Mehretu',
                    year: '2007',
                    rule: {
                        "monday": [4, 6, 10, 13],
                        "tuesday": [6, 8, 9, 12],
                        "wednesday": [22, 23, 3, 26],
                        "thursday": [25, 27, 19, 8],
                        "friday": [27, 28, 20, 23],
                        "saturday": [30, 31, 22, 26],
                        "sunday": [2, 4, 5, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 153,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1982.jpg',
                    title: 'Untitled',
                    artist: 'Gunther Gerzso',
                    year: '1982',
                    rule: {
                        "monday": [2, 4, 5, 7],
                        "tuesday": [4, 6, 10, 13],
                        "wednesday": [6, 8, 9, 12],
                        "thursday": [22, 23, 3, 26],
                        "friday": [25, 27, 19, 8],
                        "saturday": [27, 28, 20, 23],
                        "sunday": [30, 31, 22, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 154,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/galaxy-1990.jpg',
                    title: 'Galaxy',
                    artist: 'Tihamer Gyarmathy',
                    year: '1990',
                    rule: {
                        "monday": [31, 1, 23, 27],
                        "tuesday": [3, 5, 6, 8],
                        "wednesday": [5, 7, 11, 14],
                        "thursday": [7, 9, 10, 13],
                        "friday": [23, 24, 4, 27],
                        "saturday": [26, 28, 20, 9],
                        "sunday": [28, 29, 21, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 155,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/astre-bleu-1991.jpg',
                    title: 'Astre-bleu',
                    artist: 'Jean-Paul Jerome',
                    year: '1991',
                    rule: {
                        "monday": [28, 29, 21, 24],
                        "tuesday": [31, 1, 23, 27],
                        "wednesday": [3, 5, 6, 8],
                        "thursday": [5, 7, 11, 14],
                        "friday": [7, 9, 10, 13],
                        "saturday": [23, 24, 4, 27],
                        "sunday": [26, 28, 20, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 156,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/hereditarius-no-1-68-a-1968.jpg',
                    title: 'Hereditarius No.1-68-A',
                    artist: 'Park Seo-Bo',
                    year: '1968',
                    rule: {
                        "monday": [26, 28, 20, 9],
                        "tuesday": [28, 29, 21, 24],
                        "wednesday": [31, 1, 23, 27],
                        "thursday": [3, 5, 6, 8],
                        "friday": [5, 7, 11, 14],
                        "saturday": [7, 9, 10, 13],
                        "sunday": [23, 24, 4, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 157,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1963.jpg',
                    title: 'Untitled',
                    artist: 'David Smith',
                    year: '1963',
                    rule: {
                        "monday": [23, 24, 4, 27],
                        "tuesday": [26, 28, 20, 9],
                        "wednesday": [28, 29, 21, 24],
                        "thursday": [31, 1, 23, 27],
                        "friday": [3, 5, 6, 8],
                        "saturday": [5, 7, 11, 14],
                        "sunday": [7, 9, 10, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 158,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/africa-i-1942.jpg',
                    title: 'Africa I',
                    artist: 'Willi Baumeister',
                    year: '1942',
                    rule: {
                        "monday": [7, 9, 10, 13],
                        "tuesday": [23, 24, 4, 27],
                        "wednesday": [26, 28, 20, 9],
                        "thursday": [28, 29, 21, 24],
                        "friday": [31, 1, 23, 27],
                        "saturday": [3, 5, 6, 8],
                        "sunday": [5, 7, 11, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 159,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/epitalamio-1968.jpg',
                    title: 'Epitalamio',
                    artist: 'Carlos Merida',
                    year: '1968',
                    rule: {
                        "monday": [5, 7, 11, 14],
                        "tuesday": [7, 9, 10, 13],
                        "wednesday": [23, 24, 4, 27],
                        "thursday": [26, 28, 20, 9],
                        "friday": [28, 29, 21, 24],
                        "saturday": [31, 1, 23, 27],
                        "sunday": [3, 5, 6, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 160,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/where-1960.jpg',
                    title: 'Where',
                    artist: 'Morris Louis',
                    year: '1960',
                    rule: {
                        "monday": [3, 5, 6, 8],
                        "tuesday": [5, 7, 11, 14],
                        "wednesday": [7, 9, 10, 13],
                        "thursday": [23, 24, 4, 27],
                        "friday": [26, 28, 20, 9],
                        "saturday": [28, 29, 21, 24],
                        "sunday": [31, 1, 23, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 161,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/unknown-title-6.jpg',
                    title: 'unknown title',
                    artist: 'Michel Carrade',
                    year: 'xx Cent.',
                    rule: {
                        "monday": [1, 2, 24, 28],
                        "tuesday": [4, 6, 7, 9],
                        "wednesday": [6, 8, 12, 15],
                        "thursday": [8, 10, 11, 14],
                        "friday": [24, 25, 5, 28],
                        "saturday": [27, 29, 21, 10],
                        "sunday": [29, 30, 22, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 162,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/halo-1-1992.jpg',
                    title: 'Halo-1',
                    artist: 'Maki Haku',
                    year: '1992',
                    rule: {
                        "monday": [29, 30, 22, 25],
                        "tuesday": [1, 2, 24, 28],
                        "wednesday": [4, 6, 7, 9],
                        "thursday": [6, 8, 12, 15],
                        "friday": [8, 10, 11, 14],
                        "saturday": [24, 25, 5, 28],
                        "sunday": [27, 29, 21, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 163,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-7.jpg',
                    title: 'Untitled',
                    artist: 'Antonio Sanfilippo',
                    year: 'xx Cent.',
                    rule: {
                        "monday": [27, 29, 21, 10],
                        "tuesday": [29, 30, 22, 25],
                        "wednesday": [1, 2, 24, 28],
                        "thursday": [4, 6, 7, 9],
                        "friday": [6, 8, 12, 15],
                        "saturday": [8, 10, 11, 14],
                        "sunday": [24, 25, 5, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 164,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1959.jpg',
                    title: 'Untitled',
                    artist: 'Jean Bertholle',
                    year: '1959',
                    rule: {
                        "monday": [24, 25, 5, 28],
                        "tuesday": [27, 29, 21, 10],
                        "wednesday": [29, 30, 22, 25],
                        "thursday": [1, 2, 24, 28],
                        "friday": [4, 6, 7, 9],
                        "saturday": [6, 8, 12, 15],
                        "sunday": [8, 10, 11, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 165,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/dreiformvariation-1928.jpg',
                    title: 'Dreiformvariation',
                    artist: 'Carl Buchheister',
                    year: '1928',
                    rule: {
                        "monday": [8, 10, 11, 14],
                        "tuesday": [24, 25, 5, 28],
                        "wednesday": [27, 29, 21, 10],
                        "thursday": [29, 30, 22, 25],
                        "friday": [1, 2, 24, 28],
                        "saturday": [4, 6, 7, 9],
                        "sunday": [6, 8, 12, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 166,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/pintura-153-1948.jpg',
                    title: 'Pintura 153',
                    artist: 'Raul Lozza',
                    year: '1948',
                    rule: {
                        "monday": [6, 8, 12, 15],
                        "tuesday": [8, 10, 11, 14],
                        "wednesday": [24, 25, 5, 28],
                        "thursday": [27, 29, 21, 10],
                        "friday": [29, 30, 22, 25],
                        "saturday": [1, 2, 24, 28],
                        "sunday": [4, 6, 7, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 167,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-great-wall-i-1986.jpg',
                    title: 'The Great Wall (I)',
                    artist: 'Wu Guanzhong',
                    year: '1986',
                    rule: {
                        "monday": [4, 6, 7, 9],
                        "tuesday": [6, 8, 12, 15],
                        "wednesday": [8, 10, 11, 14],
                        "thursday": [24, 25, 5, 28],
                        "friday": [27, 29, 21, 10],
                        "saturday": [29, 30, 22, 25],
                        "sunday": [1, 2, 24, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 168,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/opposing-15-1959.jpg',
                    title: 'Opposing (#15)',
                    artist: 'Frederick Hammersley',
                    year: '1959',
                    rule: {
                        "monday": [2, 3, 25, 29],
                        "tuesday": [5, 7, 8, 10],
                        "wednesday": [7, 9, 13, 16],
                        "thursday": [9, 11, 12, 15],
                        "friday": [25, 26, 6, 29],
                        "saturday": [28, 30, 22, 11],
                        "sunday": [30, 31, 23, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 169,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/hillside-1954.jpg',
                    title: 'Hillside',
                    artist: 'Kazuo Nakamura',
                    year: '1954',
                    rule: {
                        "monday": [30, 31, 23, 26],
                        "tuesday": [2, 3, 25, 29],
                        "wednesday": [5, 7, 8, 10],
                        "thursday": [7, 9, 13, 16],
                        "friday": [9, 11, 12, 15],
                        "saturday": [25, 26, 6, 29],
                        "sunday": [28, 30, 22, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 170,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/1944-n-no-1-1944.jpg',
                    title: '1944-N No. 1',
                    artist: 'Clyfford Still',
                    year: '1944',
                    rule: {
                        "monday": [28, 30, 22, 11],
                        "tuesday": [30, 31, 23, 26],
                        "wednesday": [2, 3, 25, 29],
                        "thursday": [5, 7, 8, 10],
                        "friday": [7, 9, 13, 16],
                        "saturday": [9, 11, 12, 15],
                        "sunday": [25, 26, 6, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 171,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/green-sound-1964.jpg',
                    title: 'Green Sound',
                    artist: 'Jeremy Moon',
                    year: '1964',
                    rule: {
                        "monday": [25, 26, 6, 29],
                        "tuesday": [28, 30, 22, 11],
                        "wednesday": [30, 31, 23, 26],
                        "thursday": [2, 3, 25, 29],
                        "friday": [5, 7, 8, 10],
                        "saturday": [7, 9, 13, 16],
                        "sunday": [9, 11, 12, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 172,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/heroic-roses-1938(1).jpg',
                    title: 'Heroic Roses',
                    artist: 'Paul Klee',
                    year: '1938',
                    rule: {
                        "monday": [9, 11, 12, 15],
                        "tuesday": [25, 26, 6, 29],
                        "wednesday": [28, 30, 22, 11],
                        "thursday": [30, 31, 23, 26],
                        "friday": [2, 3, 25, 29],
                        "saturday": [5, 7, 8, 10],
                        "sunday": [7, 9, 13, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 173,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/work-2009.jpg',
                    title: 'Work',
                    artist: 'Tsuruko Yamazaki',
                    year: '2009',
                    rule: {
                        "monday": [7, 9, 13, 16],
                        "tuesday": [9, 11, 12, 15],
                        "wednesday": [25, 26, 6, 29],
                        "thursday": [28, 30, 22, 11],
                        "friday": [30, 31, 23, 26],
                        "saturday": [2, 3, 25, 29],
                        "sunday": [5, 7, 8, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 174,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/anima-mundi-10-ed-2011.jpg',
                    title: 'Anima Mundi 10 Ed',
                    artist: 'Imi Knoebel',
                    year: '2011',
                    rule: {
                        "monday": [5, 7, 8, 10],
                        "tuesday": [7, 9, 13, 16],
                        "wednesday": [9, 11, 12, 15],
                        "thursday": [25, 26, 6, 29],
                        "friday": [28, 30, 22, 11],
                        "saturday": [30, 31, 23, 26],
                        "sunday": [2, 3, 25, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 175,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/red-heart-1980.jpg',
                    title: 'Red Heart',
                    artist: 'Friedel Dzubas',
                    year: '1980',
                    rule: {
                        "monday": [2, 3, 25, 29],
                        "tuesday": [5, 7, 8, 10],
                        "wednesday": [7, 9, 13, 16],
                        "thursday": [9, 11, 12, 15],
                        "friday": [25, 26, 6, 29],
                        "saturday": [28, 30, 22, 11],
                        "sunday": [30, 31, 23, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 176,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/88-va-17-1988.jpg',
                    title: '88. VA 17',
                    artist: 'Jurgen Partenheimer',
                    year: '1988',
                    rule: {
                        "monday": [30, 31, 23, 26],
                        "tuesday": [2, 3, 25, 29],
                        "wednesday": [5, 7, 8, 10],
                        "thursday": [7, 9, 13, 16],
                        "friday": [9, 11, 12, 15],
                        "saturday": [25, 26, 6, 29],
                        "sunday": [28, 30, 22, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 177,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/gdwf-2004.jpg',
                    title: 'GDWF',
                    artist: 'Paul Reed',
                    year: '2004',
                    rule: {
                        "monday": [28, 30, 22, 11],
                        "tuesday": [30, 31, 23, 26],
                        "wednesday": [2, 3, 25, 29],
                        "thursday": [5, 7, 8, 10],
                        "friday": [7, 9, 13, 16],
                        "saturday": [9, 11, 12, 15],
                        "sunday": [25, 26, 6, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 178,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/work-1956.jpg',
                    title: 'Work',
                    artist: 'Sadamasa Motonaga',
                    year: '1956',
                    rule: {
                        "monday": [25, 26, 6, 29],
                        "tuesday": [28, 30, 22, 11],
                        "wednesday": [30, 31, 23, 26],
                        "thursday": [2, 3, 25, 29],
                        "friday": [5, 7, 8, 10],
                        "saturday": [7, 9, 13, 16],
                        "sunday": [9, 11, 12, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 179,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/iras-1959.jpg',
                    title: 'Iras',
                    artist: 'Olle Baertling',
                    year: '1959',
                    rule: {
                        "monday": [9, 11, 12, 15],
                        "tuesday": [25, 26, 6, 29],
                        "wednesday": [28, 30, 22, 11],
                        "thursday": [30, 31, 23, 26],
                        "friday": [2, 3, 25, 29],
                        "saturday": [5, 7, 8, 10],
                        "sunday": [7, 9, 13, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 180,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-no-212-1960.jpg',
                    title: 'Composition No. 212',
                    artist: 'Friedrich Vordemberge-Gildewart',
                    year: '1960',
                    rule: {
                        "monday": [7, 9, 13, 16],
                        "tuesday": [9, 11, 12, 15],
                        "wednesday": [25, 26, 6, 29],
                        "thursday": [28, 30, 22, 11],
                        "friday": [30, 31, 23, 26],
                        "saturday": [2, 3, 25, 29],
                        "sunday": [5, 7, 8, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 181,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-from-collection-resonance-2011-1.jpg',
                    title: 'Untitled (from Collection Resonance)',
                    artist: 'Monique Orsini',
                    year: '2011',
                    rule: {
                        "monday": [5, 7, 8, 10],
                        "tuesday": [7, 9, 13, 16],
                        "wednesday": [9, 11, 12, 15],
                        "thursday": [25, 26, 6, 29],
                        "friday": [28, 30, 22, 11],
                        "saturday": [30, 31, 23, 26],
                        "sunday": [2, 3, 25, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 182,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/grey-still-life-1969.jpg',
                    title: 'Grey Still Life',
                    artist: 'William Scott',
                    year: '1969',
                    rule: {
                        "monday": [3, 4, 26, 30],
                        "tuesday": [6, 8, 9, 11],
                        "wednesday": [8, 10, 14, 17],
                        "thursday": [10, 12, 13, 16],
                        "friday": [26, 27, 7, 30],
                        "saturday": [29, 31, 23, 12],
                        "sunday": [31, 1, 24, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 183,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/magical-space-forms-1948.jpg',
                    title: 'Magical Space Forms',
                    artist: 'Lorser Feitelson',
                    year: '1948',
                    rule: {
                        "monday": [31, 1, 24, 27],
                        "tuesday": [3, 4, 26, 30],
                        "wednesday": [6, 8, 9, 11],
                        "thursday": [8, 10, 14, 17],
                        "friday": [10, 12, 13, 16],
                        "saturday": [26, 27, 7, 30],
                        "sunday": [29, 31, 23, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 184,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-summer-1962.jpg',
                    title: 'Untitled (Summer)',
                    artist: 'Howard Mehring',
                    year: '1962',
                    rule: {
                        "monday": [29, 31, 23, 12],
                        "tuesday": [31, 1, 24, 27],
                        "wednesday": [3, 4, 26, 30],
                        "thursday": [6, 8, 9, 11],
                        "friday": [8, 10, 14, 17],
                        "saturday": [10, 12, 13, 16],
                        "sunday": [26, 27, 7, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 185,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1956.jpg',
                    title: 'Untitled',
                    artist: 'Karl Benjamin',
                    year: '1956',
                    rule: {
                        "monday": [26, 27, 7, 30],
                        "tuesday": [29, 31, 23, 12],
                        "wednesday": [31, 1, 24, 27],
                        "thursday": [3, 4, 26, 30],
                        "friday": [6, 8, 9, 11],
                        "saturday": [8, 10, 14, 17],
                        "sunday": [10, 12, 13, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 186,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/unknown-title-17.jpg',
                    title: 'unknown title',
                    artist: 'Constantin Blendea',
                    year: 'XX-XXI cent.',
                    rule: {
                        "monday": [10, 12, 13, 16],
                        "tuesday": [26, 27, 7, 30],
                        "wednesday": [29, 31, 23, 12],
                        "thursday": [31, 1, 24, 27],
                        "friday": [3, 4, 26, 30],
                        "saturday": [6, 8, 9, 11],
                        "sunday": [8, 10, 14, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 187,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/coloured-wall-2003.jpg',
                    title: 'Coloured Wall',
                    artist: 'Sean Scully',
                    year: '2003',
                    rule: {
                        "monday": [8, 10, 14, 17],
                        "tuesday": [10, 12, 13, 16],
                        "wednesday": [26, 27, 7, 30],
                        "thursday": [29, 31, 23, 12],
                        "friday": [31, 1, 24, 27],
                        "saturday": [3, 4, 26, 30],
                        "sunday": [6, 8, 9, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 188,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/mask-4-1936.jpg',
                    title: 'Mask 4',
                    artist: 'Willi Baumeister',
                    year: '1936',
                    rule: {
                        "monday": [6, 8, 9, 11],
                        "tuesday": [8, 10, 14, 17],
                        "wednesday": [10, 12, 13, 16],
                        "thursday": [26, 27, 7, 30],
                        "friday": [29, 31, 23, 12],
                        "saturday": [31, 1, 24, 27],
                        "sunday": [3, 4, 26, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 189,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/july-1954-1954.jpg',
                    title: 'July 1954',
                    artist: 'Frank Lobdell',
                    year: '1954',
                    rule: {
                        "monday": [4, 5, 27, 31],
                        "tuesday": [7, 9, 10, 12],
                        "wednesday": [9, 11, 15, 18],
                        "thursday": [11, 13, 14, 17],
                        "friday": [27, 28, 8, 31],
                        "saturday": [30, 1, 24, 13],
                        "sunday": [1, 2, 25, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 190,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/relational-painting-1951.jpg',
                    title: 'Relational Painting',
                    artist: 'Fritz Glarner',
                    year: '1951',
                    rule: {
                        "monday": [1, 2, 25, 28],
                        "tuesday": [4, 5, 27, 31],
                        "wednesday": [7, 9, 10, 12],
                        "thursday": [9, 11, 15, 18],
                        "friday": [11, 13, 14, 17],
                        "saturday": [27, 28, 8, 31],
                        "sunday": [30, 1, 24, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 191,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/red-april-1970.jpg',
                    title: 'Red April',
                    artist: 'Sam Gilliam',
                    year: '1970',
                    rule: {
                        "monday": [30, 1, 24, 13],
                        "tuesday": [1, 2, 25, 28],
                        "wednesday": [4, 5, 27, 31],
                        "thursday": [7, 9, 10, 12],
                        "friday": [9, 11, 15, 18],
                        "saturday": [11, 13, 14, 17],
                        "sunday": [27, 28, 8, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 192,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/oe-280-komposition-in-rot-mit-wei-und-blau-1959.jpg',
                    title: 'OE 280 (Komposition in Rot mit Weiß und Blau)',
                    artist: 'Rupprecht Geiger',
                    year: '1959',
                    rule: {
                        "monday": [27, 28, 8, 31],
                        "tuesday": [30, 1, 24, 13],
                        "wednesday": [1, 2, 25, 28],
                        "thursday": [4, 5, 27, 31],
                        "friday": [7, 9, 10, 12],
                        "saturday": [9, 11, 15, 18],
                        "sunday": [11, 13, 14, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 193,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/diminishing-circles-2001.jpg',
                    title: 'Diminishing Circles',
                    artist: 'Jennifer Bartlett',
                    year: '2001',
                    rule: {
                        "monday": [11, 13, 14, 17],
                        "tuesday": [27, 28, 8, 31],
                        "wednesday": [30, 1, 24, 13],
                        "thursday": [1, 2, 25, 28],
                        "friday": [4, 5, 27, 31],
                        "saturday": [7, 9, 10, 12],
                        "sunday": [9, 11, 15, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 194,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/summer-1960.jpg',
                    title: 'Summer',
                    artist: 'Thomas Downing',
                    year: '1960',
                    rule: {
                        "monday": [9, 11, 15, 18],
                        "tuesday": [11, 13, 14, 17],
                        "wednesday": [27, 28, 8, 31],
                        "thursday": [30, 1, 24, 13],
                        "friday": [1, 2, 25, 28],
                        "saturday": [4, 5, 27, 31],
                        "sunday": [7, 9, 10, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 195,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/chant-2-1967.jpg',
                    title: 'Chant 2',
                    artist: 'Bridget Riley',
                    year: '1967',
                    rule: {
                        "monday": [7, 9, 10, 12],
                        "tuesday": [9, 11, 15, 18],
                        "wednesday": [11, 13, 14, 17],
                        "thursday": [27, 28, 8, 31],
                        "friday": [30, 1, 24, 13],
                        "saturday": [1, 2, 25, 28],
                        "sunday": [4, 5, 27, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 196,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/abstract-painting-780-1-1.jpg',
                    title: 'Abstract Painting 780-1',
                    artist: 'Gerhard Richter',
                    year: '1992',
                    rule: {
                        "monday": [5, 6, 28, 1],
                        "tuesday": [8, 10, 11, 13],
                        "wednesday": [10, 12, 16, 19],
                        "thursday": [12, 14, 15, 18],
                        "friday": [28, 29, 9, 1],
                        "saturday": [31, 2, 25, 14],
                        "sunday": [2, 3, 26, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 197,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/orlando-1980.jpg',
                    title: 'Orlando',
                    artist: 'Albert Irvin',
                    year: '1980',
                    rule: {
                        "monday": [2, 3, 26, 29],
                        "tuesday": [5, 6, 28, 1],
                        "wednesday": [8, 10, 11, 13],
                        "thursday": [10, 12, 16, 19],
                        "friday": [12, 14, 15, 18],
                        "saturday": [28, 29, 9, 1],
                        "sunday": [31, 2, 25, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 198,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-drawing-2006.jpg',
                    title: 'Untitled Drawing',
                    artist: 'David Batchelor',
                    year: '2006',
                    rule: {
                        "monday": [31, 2, 25, 14],
                        "tuesday": [2, 3, 26, 29],
                        "wednesday": [5, 6, 28, 1],
                        "thursday": [8, 10, 11, 13],
                        "friday": [10, 12, 16, 19],
                        "saturday": [12, 14, 15, 18],
                        "sunday": [28, 29, 9, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 199,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/-1994-2.jpg',
                    title: '人态二',
                    artist: 'Xu Hongming',
                    year: '1994',
                    rule: {
                        "monday": [28, 29, 9, 1],
                        "tuesday": [31, 2, 25, 14],
                        "wednesday": [2, 3, 26, 29],
                        "thursday": [5, 6, 28, 1],
                        "friday": [8, 10, 11, 13],
                        "saturday": [10, 12, 16, 19],
                        "sunday": [12, 14, 15, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 200,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-june-1999.jpg',
                    title: 'Untitled, June',
                    artist: 'Stanley Whitney',
                    year: '1999',
                    rule: {
                        "monday": [12, 14, 15, 18],
                        "tuesday": [28, 29, 9, 1],
                        "wednesday": [31, 2, 25, 14],
                        "thursday": [2, 3, 26, 29],
                        "friday": [5, 6, 28, 1],
                        "saturday": [8, 10, 11, 13],
                        "sunday": [10, 12, 16, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 201,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-no-199.jpg',
                    title: 'Composition No. 199',
                    artist: 'Friedrich Vordemberge-Gildewart',
                    year: 'xx cent.',
                    rule: {
                        "monday": [10, 12, 16, 19],
                        "tuesday": [12, 14, 15, 18],
                        "wednesday": [28, 29, 9, 1],
                        "thursday": [31, 2, 25, 14],
                        "friday": [2, 3, 26, 29],
                        "saturday": [5, 6, 28, 1],
                        "sunday": [8, 10, 11, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 202,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/proun-19d-1922.jpg',
                    title: 'Proun 19D',
                    artist: 'El Lissitzky',
                    year: '1922',
                    rule: {
                        "monday": [8, 10, 11, 13],
                        "tuesday": [10, 12, 16, 19],
                        "wednesday": [12, 14, 15, 18],
                        "thursday": [28, 29, 9, 1],
                        "friday": [31, 2, 25, 14],
                        "saturday": [2, 3, 26, 29],
                        "sunday": [5, 6, 28, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 203,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/bluxao-1955.jpg',
                    title: 'Bluxao',
                    artist: 'Willi Baumeister',
                    year: '1955',
                    rule: {
                        "monday": [6, 7, 29, 2],
                        "tuesday": [9, 11, 12, 14],
                        "wednesday": [11, 13, 17, 20],
                        "thursday": [13, 15, 16, 19],
                        "friday": [29, 30, 10, 2],
                        "saturday": [1, 3, 26, 15],
                        "sunday": [3, 4, 27, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 204,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/appearance-of-crosses-in-six-parts-2005.jpg',
                    title: 'Appearance of Crosses (in six parts)',
                    artist: 'Ding Yi',
                    year: '2005',
                    rule: {
                        "monday": [3, 4, 27, 30],
                        "tuesday": [6, 7, 29, 2],
                        "wednesday": [9, 11, 12, 14],
                        "thursday": [11, 13, 17, 20],
                        "friday": [13, 15, 16, 19],
                        "saturday": [29, 30, 10, 2],
                        "sunday": [1, 3, 26, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 205,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/choir.jpg',
                    title: 'Choir',
                    artist: 'Jack Tworkov',
                    year: 'xx cent.',
                    rule: {
                        "monday": [1, 3, 26, 15],
                        "tuesday": [3, 4, 27, 30],
                        "wednesday": [6, 7, 29, 2],
                        "thursday": [9, 11, 12, 14],
                        "friday": [11, 13, 17, 20],
                        "saturday": [13, 15, 16, 19],
                        "sunday": [29, 30, 10, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 206,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/cunard-l-8-62-1962.jpg',
                    title: 'Cunard L-8-62',
                    artist: 'Conrad Marca-Relli',
                    year: '1962',
                    rule: {
                        "monday": [29, 30, 10, 2],
                        "tuesday": [1, 3, 26, 15],
                        "wednesday": [3, 4, 27, 30],
                        "thursday": [6, 7, 29, 2],
                        "friday": [9, 11, 12, 14],
                        "saturday": [11, 13, 17, 20],
                        "sunday": [13, 15, 16, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 207,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/dalet-zayin-1959.jpg',
                    title: 'Dalet Zayin',
                    artist: 'Morris Louis',
                    year: '1959',
                    rule: {
                        "monday": [13, 15, 16, 19],
                        "tuesday": [29, 30, 10, 2],
                        "wednesday": [1, 3, 26, 15],
                        "thursday": [3, 4, 27, 30],
                        "friday": [6, 7, 29, 2],
                        "saturday": [9, 11, 12, 14],
                        "sunday": [11, 13, 17, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 208,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/an-accordment-73-1973.jpg',
                    title: 'An Accordment #73',
                    artist: 'Perle Fine',
                    year: '1973',
                    rule: {
                        "monday": [11, 13, 17, 20],
                        "tuesday": [13, 15, 16, 19],
                        "wednesday": [29, 30, 10, 2],
                        "thursday": [1, 3, 26, 15],
                        "friday": [3, 4, 27, 30],
                        "saturday": [6, 7, 29, 2],
                        "sunday": [9, 11, 12, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 209,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/from-a-riviera-window-1955.jpg',
                    title: 'From a Riviera Window',
                    artist: 'Jock Macdonald',
                    year: '1955',
                    rule: {
                        "monday": [9, 11, 12, 14],
                        "tuesday": [11, 13, 17, 20],
                        "wednesday": [13, 15, 16, 19],
                        "thursday": [29, 30, 10, 2],
                        "friday": [1, 3, 26, 15],
                        "saturday": [3, 4, 27, 30],
                        "sunday": [6, 7, 29, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 210,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/le-chevalier.jpg',
                    title: 'Le Chevalier',
                    artist: 'Paul Ackerman',
                    year: 'xx cent.',
                    rule: {
                        "monday": [7, 8, 30, 3],
                        "tuesday": [10, 12, 13, 15],
                        "wednesday": [12, 14, 18, 21],
                        "thursday": [14, 16, 17, 20],
                        "friday": [30, 31, 11, 3],
                        "saturday": [2, 4, 27, 16],
                        "sunday": [4, 5, 28, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 211,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/looks-of-the-colors.jpg',
                    title: 'Looks of the Colors',
                    artist: 'Ion Tuculescu',
                    year: 'xx cent.',
                    rule: {
                        "monday": [4, 5, 28, 31],
                        "tuesday": [7, 8, 30, 3],
                        "wednesday": [10, 12, 13, 15],
                        "thursday": [12, 14, 18, 21],
                        "friday": [14, 16, 17, 20],
                        "saturday": [30, 31, 11, 3],
                        "sunday": [2, 4, 27, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 212,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/james-bond-meets-pussy-galore-1965.jpg',
                    title: 'James Bond Meets Pussy Galore',
                    artist: 'Nicholas Krushenick',
                    year: '1965',
                    rule: {
                        "monday": [2, 4, 27, 16],
                        "tuesday": [4, 5, 28, 31],
                        "wednesday": [7, 8, 30, 3],
                        "thursday": [10, 12, 13, 15],
                        "friday": [12, 14, 18, 21],
                        "saturday": [14, 16, 17, 20],
                        "sunday": [30, 31, 11, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 213,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/la-ronde-marine-1987.jpg',
                    title: 'La ronde marine',
                    artist: 'Jean-Paul Jerome',
                    year: '1987',
                    rule: {
                        "monday": [30, 31, 11, 3],
                        "tuesday": [2, 4, 27, 16],
                        "wednesday": [4, 5, 28, 31],
                        "thursday": [7, 8, 30, 3],
                        "friday": [10, 12, 13, 15],
                        "saturday": [12, 14, 18, 21],
                        "sunday": [14, 16, 17, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 214,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/early-morning-sky-1990.jpg',
                    title: 'Early Morning Sky',
                    artist: 'Tihamer Gyarmathy',
                    year: '1990',
                    rule: {
                        "monday": [14, 16, 17, 20],
                        "tuesday": [30, 31, 11, 3],
                        "wednesday": [2, 4, 27, 16],
                        "thursday": [4, 5, 28, 31],
                        "friday": [7, 8, 30, 3],
                        "saturday": [10, 12, 13, 15],
                        "sunday": [12, 14, 18, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 215,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/dusk-1958.jpg',
                    title: 'Dusk',
                    artist: 'William Baziotes',
                    year: '1958',
                    rule: {
                        "monday": [12, 14, 18, 21],
                        "tuesday": [14, 16, 17, 20],
                        "wednesday": [30, 31, 11, 3],
                        "thursday": [2, 4, 27, 16],
                        "friday": [4, 5, 28, 31],
                        "saturday": [7, 8, 30, 3],
                        "sunday": [10, 12, 13, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 216,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/238-combinazioni-cromatiche-con-16-colori-moltiplicati-fra-loro-1969.jpg',
                    title: '238 combinazioni cromatiche con 16 colori moltiplicati fra loro',
                    artist: 'Dadamaino',
                    year: '1969',
                    rule: {
                        "monday": [10, 12, 13, 15],
                        "tuesday": [12, 14, 18, 21],
                        "wednesday": [14, 16, 17, 20],
                        "thursday": [30, 31, 11, 3],
                        "friday": [2, 4, 27, 16],
                        "saturday": [4, 5, 28, 31],
                        "sunday": [7, 8, 30, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 217,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/il-vicino-pianeta-1972.jpg',
                    title: 'Il Vicino Pianeta',
                    artist: 'Antonio Corpora',
                    year: '1972',
                    rule: {
                        "monday": [8, 9, 31, 4],
                        "tuesday": [11, 13, 14, 16],
                        "wednesday": [13, 15, 19, 22],
                        "thursday": [15, 17, 18, 21],
                        "friday": [31, 1, 12, 4],
                        "saturday": [3, 5, 28, 17],
                        "sunday": [5, 6, 29, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 218,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/source-7-1976.jpg',
                    title: 'Source #7',
                    artist: 'Leon Berkowitz',
                    year: '1976',
                    rule: {
                        "monday": [5, 6, 29, 1],
                        "tuesday": [8, 9, 31, 4],
                        "wednesday": [11, 13, 14, 16],
                        "thursday": [13, 15, 19, 22],
                        "friday": [15, 17, 18, 21],
                        "saturday": [31, 1, 12, 4],
                        "sunday": [3, 5, 28, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 219,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/work-no-384-a-sheet-of-paper-folded-up-and-unfolded-2004.jpg',
                    title: 'Work No. 384 (A sheet of paper folded up and unfolded)',
                    artist: 'Martin Creed',
                    year: '2004',
                    rule: {
                        "monday": [3, 5, 28, 17],
                        "tuesday": [5, 6, 29, 1],
                        "wednesday": [8, 9, 31, 4],
                        "thursday": [11, 13, 14, 16],
                        "friday": [13, 15, 19, 22],
                        "saturday": [15, 17, 18, 21],
                        "sunday": [31, 1, 12, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 220,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1965.jpg',
                    title: 'Untitled',
                    artist: 'Shozo Shimamoto',
                    year: '1965',
                    rule: {
                        "monday": [31, 1, 12, 4],
                        "tuesday": [3, 5, 28, 17],
                        "wednesday": [5, 6, 29, 1],
                        "thursday": [8, 9, 31, 4],
                        "friday": [11, 13, 14, 16],
                        "saturday": [13, 15, 19, 22],
                        "sunday": [15, 17, 18, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 221,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/lotus-1962.jpg',
                    title: 'Lotus',
                    artist: 'Friedel Dzubas',
                    year: '1962',
                    rule: {
                        "monday": [15, 17, 18, 21],
                        "tuesday": [31, 1, 12, 4],
                        "wednesday": [3, 5, 28, 17],
                        "thursday": [5, 6, 29, 1],
                        "friday": [8, 9, 31, 4],
                        "saturday": [11, 13, 14, 16],
                        "sunday": [13, 15, 19, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 222,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/abstraction-1964.jpg',
                    title: 'Abstraction',
                    artist: 'Lawren Harris',
                    year: '1964',
                    rule: {
                        "monday": [13, 15, 19, 22],
                        "tuesday": [15, 17, 18, 21],
                        "wednesday": [31, 1, 12, 4],
                        "thursday": [3, 5, 28, 17],
                        "friday": [5, 6, 29, 1],
                        "saturday": [8, 9, 31, 4],
                        "sunday": [11, 13, 14, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 223,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-time-machine-2002.jpg',
                    title: 'The Time Machine',
                    artist: 'Peter Halley',
                    year: '2002',
                    rule: {
                        "monday": [11, 13, 14, 16],
                        "tuesday": [13, 15, 19, 22],
                        "wednesday": [15, 17, 18, 21],
                        "thursday": [31, 1, 12, 4],
                        "friday": [3, 5, 28, 17],
                        "saturday": [5, 6, 29, 1],
                        "sunday": [8, 9, 31, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 224,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1968.jpg',
                    title: 'Untitled',
                    artist: 'Ron Gorchov',
                    year: '1968',
                    rule: {
                        "monday": [9, 10, 1, 5],
                        "tuesday": [12, 14, 15, 17],
                        "wednesday": [14, 16, 20, 23],
                        "thursday": [16, 18, 19, 22],
                        "friday": [1, 2, 13, 5],
                        "saturday": [4, 6, 29, 18],
                        "sunday": [6, 7, 30, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 225,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/intersuperficie-curva-dall-azzurro-1967.jpg',
                    title: 'Intersuperficie curva dall\'azzurro',
                    artist: 'Paolo Scheggi',
                    year: '1967',
                    rule: {
                        "monday": [6, 7, 30, 2],
                        "tuesday": [9, 10, 1, 5],
                        "wednesday": [12, 14, 15, 17],
                        "thursday": [14, 16, 20, 23],
                        "friday": [16, 18, 19, 22],
                        "saturday": [1, 2, 13, 5],
                        "sunday": [4, 6, 29, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 226,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/vessel-in-a-drift-of-diamond-light-in-the-sky-of-the-mind-1944.jpg',
                    title: 'Vessel in a Drift of Diamond Light in the Sky of the Mind',
                    artist: 'Morris Graves',
                    year: '1944',
                    rule: {
                        "monday": [4, 6, 29, 18],
                        "tuesday": [6, 7, 30, 2],
                        "wednesday": [9, 10, 1, 5],
                        "thursday": [12, 14, 15, 17],
                        "friday": [14, 16, 20, 23],
                        "saturday": [16, 18, 19, 22],
                        "sunday": [1, 2, 13, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 227,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/converge-2011.jpg',
                    title: 'Converge',
                    artist: 'Harriet Korman',
                    year: '2011',
                    rule: {
                        "monday": [1, 2, 13, 5],
                        "tuesday": [4, 6, 29, 18],
                        "wednesday": [6, 7, 30, 2],
                        "thursday": [9, 10, 1, 5],
                        "friday": [12, 14, 15, 17],
                        "saturday": [14, 16, 20, 23],
                        "sunday": [16, 18, 19, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 228,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-with-evanescent-butterfly.jpg',
                    title: 'Composition with Evanescent Butterfly',
                    artist: 'Ion Pacea',
                    year: 'xx cent.',
                    rule: {
                        "monday": [16, 18, 19, 22],
                        "tuesday": [1, 2, 13, 5],
                        "wednesday": [4, 6, 29, 18],
                        "thursday": [6, 7, 30, 2],
                        "friday": [9, 10, 1, 5],
                        "saturday": [12, 14, 15, 17],
                        "sunday": [14, 16, 20, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 229,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/komposition-1950.jpg',
                    title: 'Komposition',
                    artist: 'Gosta Adrian-Nilsson',
                    year: '1950',
                    rule: {
                        "monday": [14, 16, 20, 23],
                        "tuesday": [16, 18, 19, 22],
                        "wednesday": [1, 2, 13, 5],
                        "thursday": [4, 6, 29, 18],
                        "friday": [6, 7, 30, 2],
                        "saturday": [9, 10, 1, 5],
                        "sunday": [12, 14, 15, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 230,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/clair-d-obscurite-1988.jpg',
                    title: 'Éclair d\'obscurite',
                    artist: 'Chu Teh-Chun',
                    year: '1988',
                    rule: {
                        "monday": [12, 14, 15, 17],
                        "tuesday": [14, 16, 20, 23],
                        "wednesday": [16, 18, 19, 22],
                        "thursday": [1, 2, 13, 5],
                        "friday": [4, 6, 29, 18],
                        "saturday": [6, 7, 30, 2],
                        "sunday": [9, 10, 1, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 231,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/battal-ebru-1.jpg',
                    title: 'Battal Ebru',
                    artist: 'Mustafa Duzgunman',
                    year: 'xx cent.',
                    rule: {
                        "monday": [10, 11, 2, 6],
                        "tuesday": [13, 15, 16, 18],
                        "wednesday": [15, 17, 21, 24],
                        "thursday": [17, 19, 20, 23],
                        "friday": [2, 3, 14, 6],
                        "saturday": [5, 7, 30, 19],
                        "sunday": [7, 8, 31, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 232,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1975 (1).jpg',
                    title: 'Untitled',
                    artist: 'Terry Frost',
                    year: '1975',
                    rule: {
                        "monday": [7, 8, 31, 3],
                        "tuesday": [10, 11, 2, 6],
                        "wednesday": [13, 15, 16, 18],
                        "thursday": [15, 17, 21, 24],
                        "friday": [17, 19, 20, 23],
                        "saturday": [2, 3, 14, 6],
                        "sunday": [5, 7, 30, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 233,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/colonial-cubism-1954.jpg',
                    title: 'Colonial Cubism',
                    artist: 'Stuart Davis',
                    year: '1954',
                    rule: {
                        "monday": [5, 7, 30, 19],
                        "tuesday": [7, 8, 31, 3],
                        "wednesday": [10, 11, 2, 6],
                        "thursday": [13, 15, 16, 18],
                        "friday": [15, 17, 21, 24],
                        "saturday": [17, 19, 20, 23],
                        "sunday": [2, 3, 14, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 234,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/wings-1.jpg',
                    title: 'Wings',
                    artist: 'Constantin Blendea',
                    year: 'xx - xxi cent.',
                    rule: {
                        "monday": [2, 3, 14, 6],
                        "tuesday": [5, 7, 30, 19],
                        "wednesday": [7, 8, 31, 3],
                        "thursday": [10, 11, 2, 6],
                        "friday": [13, 15, 16, 18],
                        "saturday": [15, 17, 21, 24],
                        "sunday": [17, 19, 20, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 235,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-pattern.jpg',
                    title: 'Untitled Pattern',
                    artist: 'Peter Busa',
                    year: '?',
                    rule: {
                        "monday": [17, 19, 20, 23],
                        "tuesday": [2, 3, 14, 6],
                        "wednesday": [5, 7, 30, 19],
                        "thursday": [7, 8, 31, 3],
                        "friday": [10, 11, 2, 6],
                        "saturday": [13, 15, 16, 18],
                        "sunday": [15, 17, 21, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 236,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/collage-1973.jpg',
                    title: 'Collage',
                    artist: 'Jan Dibbets',
                    year: '1973',
                    rule: {
                        "monday": [15, 17, 21, 24],
                        "tuesday": [17, 19, 20, 23],
                        "wednesday": [2, 3, 14, 6],
                        "thursday": [5, 7, 30, 19],
                        "friday": [7, 8, 31, 3],
                        "saturday": [10, 11, 2, 6],
                        "sunday": [13, 15, 16, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 237,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/sequenze-quadrangolari-concetto-di-distorsione-1964.jpg',
                    title: 'Sequenze quadrangolari - concetto di distorsione',
                    artist: 'Mario Ballocco',
                    year: '1964',
                    rule: {
                        "monday": [13, 15, 16, 18],
                        "tuesday": [15, 17, 21, 24],
                        "wednesday": [17, 19, 20, 23],
                        "thursday": [2, 3, 14, 6],
                        "friday": [5, 7, 30, 19],
                        "saturday": [7, 8, 31, 3],
                        "sunday": [10, 11, 2, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 238,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/kilroy-was-here.jpg',
                    title: 'Kilroy Was Here',
                    artist: 'Robert Goodnough',
                    year: 'xx - xxi cent.',
                    rule: {
                        "monday": [11, 12, 3, 7],
                        "tuesday": [14, 16, 17, 19],
                        "wednesday": [16, 18, 22, 25],
                        "thursday": [18, 20, 21, 24],
                        "friday": [3, 4, 15, 7],
                        "saturday": [6, 8, 31, 20],
                        "sunday": [8, 9, 1, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 239,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composi-o-1975(1).jpg',
                    title: 'Composição',
                    artist: 'Lothar Charoux',
                    year: '1975',
                    rule: {
                        "monday": [8, 9, 1, 4],
                        "tuesday": [11, 12, 3, 7],
                        "wednesday": [14, 16, 17, 19],
                        "thursday": [16, 18, 22, 25],
                        "friday": [18, 20, 21, 24],
                        "saturday": [3, 4, 15, 7],
                        "sunday": [6, 8, 31, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 240,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/anoz-amazona-1984.jpg',
                    title: 'Anoz Amazona',
                    artist: 'Omar Rayo',
                    year: '1984',
                    rule: {
                        "monday": [6, 8, 31, 20],
                        "tuesday": [8, 9, 1, 4],
                        "wednesday": [11, 12, 3, 7],
                        "thursday": [14, 16, 17, 19],
                        "friday": [16, 18, 22, 25],
                        "saturday": [18, 20, 21, 24],
                        "sunday": [3, 4, 15, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 241,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/panche-i-1970.jpg',
                    title: 'Panche I',
                    artist: 'Omar Rayo',
                    year: '1970',
                    rule: {
                        "monday": [3, 4, 15, 7],
                        "tuesday": [6, 8, 31, 20],
                        "wednesday": [8, 9, 1, 4],
                        "thursday": [11, 12, 3, 7],
                        "friday": [14, 16, 17, 19],
                        "saturday": [16, 18, 22, 25],
                        "sunday": [18, 20, 21, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 242,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/qvh1-le-courrier-de-l-est-n-243-13-10-2007-2007.jpg',
                    title: 'QVH1- Le courrier de l\'Est n° 243, 13.10.2007',
                    artist: 'Jean-Francois Dubreuil',
                    year: '2007',
                    rule: {
                        "monday": [18, 20, 21, 24],
                        "tuesday": [3, 4, 15, 7],
                        "wednesday": [6, 8, 31, 20],
                        "thursday": [8, 9, 1, 4],
                        "friday": [11, 12, 3, 7],
                        "saturday": [14, 16, 17, 19],
                        "sunday": [16, 18, 22, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 243,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/dark-bridge-2003.jpg',
                    title: 'Dark Bridge',
                    artist: 'Sean Scully',
                    year: '2003',
                    rule: {
                        "monday": [16, 18, 22, 25],
                        "tuesday": [18, 20, 21, 24],
                        "wednesday": [3, 4, 15, 7],
                        "thursday": [6, 8, 31, 20],
                        "friday": [8, 9, 1, 4],
                        "saturday": [11, 12, 3, 7],
                        "sunday": [14, 16, 17, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 244,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1950.jpg',
                    title: 'Untitled',
                    artist: 'Sandu Darie',
                    year: '1950',
                    rule: {
                        "monday": [14, 16, 17, 19],
                        "tuesday": [16, 18, 22, 25],
                        "wednesday": [18, 20, 21, 24],
                        "thursday": [3, 4, 15, 7],
                        "friday": [6, 8, 31, 20],
                        "saturday": [8, 9, 1, 4],
                        "sunday": [11, 12, 3, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 245,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-au-fond-cosmique-1996.jpg',
                    title: 'Composition au fond cosmique',
                    artist: 'Eugene Brands',
                    year: '1996',
                    rule: {
                        "monday": [12, 13, 4, 8],
                        "tuesday": [15, 17, 18, 20],
                        "wednesday": [17, 19, 23, 26],
                        "thursday": [19, 21, 22, 25],
                        "friday": [4, 5, 16, 8],
                        "saturday": [7, 9, 1, 21],
                        "sunday": [9, 10, 2, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 246,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-schwendi-1961.jpg',
                    title: 'Composition Schwendi',
                    artist: 'Samuel Buri',
                    year: '1961',
                    rule: {
                        "monday": [9, 10, 2, 5],
                        "tuesday": [12, 13, 4, 8],
                        "wednesday": [15, 17, 18, 20],
                        "thursday": [17, 19, 23, 26],
                        "friday": [19, 21, 22, 25],
                        "saturday": [4, 5, 16, 8],
                        "sunday": [7, 9, 1, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 247,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/number-288-2014.jpg',
                    title: 'Number 288',
                    artist: 'Roger Weik',
                    year: '2014',
                    rule: {
                        "monday": [7, 9, 1, 21],
                        "tuesday": [9, 10, 2, 5],
                        "wednesday": [12, 13, 4, 8],
                        "thursday": [15, 17, 18, 20],
                        "friday": [17, 19, 23, 26],
                        "saturday": [19, 21, 22, 25],
                        "sunday": [4, 5, 16, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 248,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/phi-1961.jpg',
                    title: 'Phi',
                    artist: 'Morris Louis',
                    year: '1960 - 1961',
                    rule: {
                        "monday": [4, 5, 16, 8],
                        "tuesday": [7, 9, 1, 21],
                        "wednesday": [9, 10, 2, 5],
                        "thursday": [12, 13, 4, 8],
                        "friday": [15, 17, 18, 20],
                        "saturday": [17, 19, 23, 26],
                        "sunday": [19, 21, 22, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 249,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/lsh-134-1950.jpg',
                    title: 'LSH 134',
                    artist: 'Lawren Harris',
                    year: '1950',
                    rule: {
                        "monday": [19, 21, 22, 25],
                        "tuesday": [4, 5, 16, 8],
                        "wednesday": [7, 9, 1, 21],
                        "thursday": [9, 10, 2, 5],
                        "friday": [12, 13, 4, 8],
                        "saturday": [15, 17, 18, 20],
                        "sunday": [17, 19, 23, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 250,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/hanging-garden-10.jpg',
                    title: 'Hanging Garden',
                    artist: 'Ion Alin Gheorghiu',
                    year: 'XX-XXI cent.',
                    rule: {
                        "monday": [17, 19, 23, 26],
                        "tuesday": [19, 21, 22, 25],
                        "wednesday": [4, 5, 16, 8],
                        "thursday": [7, 9, 1, 21],
                        "friday": [9, 10, 2, 5],
                        "saturday": [12, 13, 4, 8],
                        "sunday": [15, 17, 18, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 251,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/opus-4-1949.jpg',
                    title: 'Opus 4',
                    artist: 'Victor Servranckx',
                    year: '1949',
                    rule: {
                        "monday": [15, 17, 18, 20],
                        "tuesday": [17, 19, 23, 26],
                        "wednesday": [19, 21, 22, 25],
                        "thursday": [4, 5, 16, 8],
                        "friday": [7, 9, 1, 21],
                        "saturday": [9, 10, 2, 5],
                        "sunday": [12, 13, 4, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 252,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/1952-a-1952.jpg',
                    title: '1952-A',
                    artist: 'Clyfford Still',
                    year: '1952',
                    rule: {
                        "monday": [13, 14, 5, 9],
                        "tuesday": [16, 18, 19, 21],
                        "wednesday": [18, 20, 24, 27],
                        "thursday": [20, 22, 23, 26],
                        "friday": [5, 6, 17, 9],
                        "saturday": [8, 10, 2, 22],
                        "sunday": [10, 11, 3, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 253,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/unknown-title-5.jpg',
                    title: 'unknown title',
                    artist: 'Michel Carrade',
                    year: '?',
                    rule: {
                        "monday": [10, 11, 3, 6],
                        "tuesday": [13, 14, 5, 9],
                        "wednesday": [16, 18, 19, 21],
                        "thursday": [18, 20, 24, 27],
                        "friday": [20, 22, 23, 26],
                        "saturday": [5, 6, 17, 9],
                        "sunday": [8, 10, 2, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 254,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/spiral-2011.jpg',
                    title: 'Spiral',
                    artist: 'Romul Nutiu',
                    year: '2011',
                    rule: {
                        "monday": [8, 10, 2, 22],
                        "tuesday": [10, 11, 3, 6],
                        "wednesday": [13, 14, 5, 9],
                        "thursday": [16, 18, 19, 21],
                        "friday": [18, 20, 24, 27],
                        "saturday": [20, 22, 23, 26],
                        "sunday": [5, 6, 17, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 255,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/regularity-irregularity-v-1960.jpg',
                    title: 'Regularity - Irregularity V',
                    artist: 'Gerhard von Graevenitz',
                    year: '1960',
                    rule: {
                        "monday": [5, 6, 17, 9],
                        "tuesday": [8, 10, 2, 22],
                        "wednesday": [10, 11, 3, 6],
                        "thursday": [13, 14, 5, 9],
                        "friday": [16, 18, 19, 21],
                        "saturday": [18, 20, 24, 27],
                        "sunday": [20, 22, 23, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 256,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/concreto-1945.jpg',
                    title: 'Concreto',
                    artist: 'Lidy Prati',
                    year: '1945',
                    rule: {
                        "monday": [20, 22, 23, 26],
                        "tuesday": [5, 6, 17, 9],
                        "wednesday": [8, 10, 2, 22],
                        "thursday": [10, 11, 3, 6],
                        "friday": [13, 14, 5, 9],
                        "saturday": [16, 18, 19, 21],
                        "sunday": [18, 20, 24, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 257,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/cosmic-map-1930(1).jpg',
                    title: 'Cosmic Map',
                    artist: 'Bruno Munari',
                    year: '1930',
                    rule: {
                        "monday": [18, 20, 24, 27],
                        "tuesday": [20, 22, 23, 26],
                        "wednesday": [5, 6, 17, 9],
                        "thursday": [8, 10, 2, 22],
                        "friday": [10, 11, 3, 6],
                        "saturday": [13, 14, 5, 9],
                        "sunday": [16, 18, 19, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 258,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/corridor-1960.jpg',
                    title: 'Corridor',
                    artist: 'Karl Benjamin',
                    year: '1960',
                    rule: {
                        "monday": [16, 18, 19, 21],
                        "tuesday": [18, 20, 24, 27],
                        "wednesday": [20, 22, 23, 26],
                        "thursday": [5, 6, 17, 9],
                        "friday": [8, 10, 2, 22],
                        "saturday": [10, 11, 3, 6],
                        "sunday": [13, 14, 5, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 259,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/lemon-cards-1-1963.jpg',
                    title: 'Lemon Cards #1',
                    artist: 'Walter Darby Bannard',
                    year: '1963',
                    rule: {
                        "monday": [14, 15, 6, 10],
                        "tuesday": [17, 19, 20, 22],
                        "wednesday": [19, 21, 25, 28],
                        "thursday": [21, 23, 24, 27],
                        "friday": [6, 7, 18, 10],
                        "saturday": [9, 11, 3, 23],
                        "sunday": [11, 12, 4, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 260,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/infinity-field-lefkada-series-1980-1(1).jpg',
                    title: 'Infinity Field, Lefkada Series',
                    artist: 'Theodoros Stamos',
                    year: '1980',
                    rule: {
                        "monday": [11, 12, 4, 7],
                        "tuesday": [14, 15, 6, 10],
                        "wednesday": [17, 19, 20, 22],
                        "thursday": [19, 21, 25, 28],
                        "friday": [21, 23, 24, 27],
                        "saturday": [6, 7, 18, 10],
                        "sunday": []
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 261,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-25.jpg',
                    title: 'Composition 25',
                    artist: 'Stefan Sevastre',
                    year: 'xx cent.',
                    rule: {
                        "monday": [9, 11, 3, 23],
                        "tuesday": [11, 12, 4, 7],
                        "wednesday": [14, 15, 6, 10],
                        "thursday": [17, 19, 20, 22],
                        "friday": [19, 21, 25, 28],
                        "saturday": [21, 23, 24, 27],
                        "sunday": [6, 7, 18, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 262,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1971-1.jpg',
                    title: 'Untitled',
                    artist: 'Moshe Kupferman',
                    year: '1971',
                    rule: {
                        "monday": [6, 7, 18, 10],
                        "tuesday": [9, 11, 3, 23],
                        "wednesday": [11, 12, 4, 7],
                        "thursday": [14, 15, 6, 10],
                        "friday": [17, 19, 20, 22],
                        "saturday": [19, 21, 25, 28],
                        "sunday": [21, 23, 24, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 263,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-2001.jpg',
                    title: 'Untitled',
                    artist: 'Moon Pil Shim',
                    year: '2001',
                    rule: {
                        "monday": [21, 23, 24, 27],
                        "tuesday": [6, 7, 18, 10],
                        "wednesday": [9, 11, 3, 23],
                        "thursday": [11, 12, 4, 7],
                        "friday": [14, 15, 6, 10],
                        "saturday": [17, 19, 20, 22],
                        "sunday": [19, 21, 25, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 264,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/greenwood-1979.jpg',
                    title: 'Greenwood',
                    artist: 'Nicholas Krushenick',
                    year: '1979',
                    rule: {
                        "monday": [19, 21, 25, 28],
                        "tuesday": [21, 23, 24, 27],
                        "wednesday": [6, 7, 18, 10],
                        "thursday": [9, 11, 3, 23],
                        "friday": [11, 12, 4, 7],
                        "saturday": [14, 15, 6, 10],
                        "sunday": [17, 19, 20, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 265,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/all-over-pour-painting-1969.jpg',
                    title: 'All Over Pour Painting',
                    artist: 'Ronnie Landfield',
                    year: '1969',
                    rule: {
                        "monday": [17, 19, 20, 22],
                        "tuesday": [19, 21, 25, 28],
                        "wednesday": [21, 23, 24, 27],
                        "thursday": [6, 7, 18, 10],
                        "friday": [9, 11, 3, 23],
                        "saturday": [11, 12, 4, 7],
                        "sunday": [14, 15, 6, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 266,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/field-of-crosses-red-black-1996.jpg',
                    title: 'Field of Crosses (Red & Black)',
                    artist: 'Silviu Oravitzan',
                    year: '1986',
                    rule: {
                        "monday": [15, 16, 7, 11],
                        "tuesday": [18, 20, 21, 23],
                        "wednesday": [20, 22, 26, 29],
                        "thursday": [22, 24, 25, 28],
                        "friday": [7, 8, 19, 11],
                        "saturday": [10, 12, 4, 24],
                        "sunday": [12, 13, 5, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 267,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/spreadout-ron-kitaj-1986.jpg',
                    title: 'Spreadout Ron Kitaj',
                    artist: 'Frank Bowling',
                    year: '1984 - 1986',
                    rule: {
                        "monday": [12, 13, 5, 8],
                        "tuesday": [15, 16, 7, 11],
                        "wednesday": [18, 20, 21, 23],
                        "thursday": [20, 22, 26, 29],
                        "friday": [22, 24, 25, 28],
                        "saturday": [7, 8, 19, 11],
                        "sunday": [10, 12, 4, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 268,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-passing-through-ii-1980.jpg',
                    title: 'The Passing Through II',
                    artist: 'Eduardo Nery',
                    year: '1980',
                    rule: {
                        "monday": [10, 12, 4, 24],
                        "tuesday": [12, 13, 5, 8],
                        "wednesday": [15, 16, 7, 11],
                        "thursday": [18, 20, 21, 23],
                        "friday": [20, 22, 26, 29],
                        "saturday": [22, 24, 25, 28],
                        "sunday": [7, 8, 19, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 269,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/arianna-pitagora-1987.jpg',
                    title: 'Arianna & Pitagora',
                    artist: 'Luciano Bartolini',
                    year: '1987',
                    rule: {
                        "monday": [7, 8, 19, 11],
                        "tuesday": [10, 12, 4, 24],
                        "wednesday": [12, 13, 5, 8],
                        "thursday": [15, 16, 7, 11],
                        "friday": [18, 20, 21, 23],
                        "saturday": [20, 22, 26, 29],
                        "sunday": [22, 24, 25, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 270,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/landscape-at-eforie-1971.jpg',
                    title: 'Landscape at Eforie',
                    artist: 'Vasile Dobrian',
                    year: '1971',
                    rule: {
                        "monday": [22, 24, 25, 28],
                        "tuesday": [7, 8, 19, 11],
                        "wednesday": [10, 12, 4, 24],
                        "thursday": [12, 13, 5, 8],
                        "friday": [15, 16, 7, 11],
                        "saturday": [18, 20, 21, 23],
                        "sunday": [20, 22, 26, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 271,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/southern-tunisian-gardens-1919(1).jpg',
                    title: 'Southern (Tunisian) gardens',
                    artist: 'Paul Klee',
                    year: '1919',
                    rule: {
                        "monday": [20, 22, 26, 29],
                        "tuesday": [22, 24, 25, 28],
                        "wednesday": [7, 8, 19, 11],
                        "thursday": [10, 12, 4, 24],
                        "friday": [12, 13, 5, 8],
                        "saturday": [15, 16, 7, 11],
                        "sunday": [18, 20, 21, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 272,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/ryoan-ji-kyoto-b.jpg',
                    title: 'Ryoan-ji Kyoto (B)',
                    artist: 'Kiyoshi Saito',
                    year: 'xx cent.',
                    rule: {
                        "monday": [18, 20, 21, 23],
                        "tuesday": [20, 22, 26, 29],
                        "wednesday": [22, 24, 25, 28],
                        "thursday": [7, 8, 19, 11],
                        "friday": [10, 12, 4, 24],
                        "saturday": [12, 13, 5, 8],
                        "sunday": [15, 16, 7, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 273,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/south-seas-2001.jpg',
                    title: 'South Seas',
                    artist: 'Beatriz Milhazes',
                    year: '2001',
                    rule: {
                        "monday": [16, 17, 8, 12],
                        "tuesday": [19, 21, 22, 24],
                        "wednesday": [21, 23, 27, 30],
                        "thursday": [23, 25, 26, 29],
                        "friday": [8, 9, 20, 12],
                        "saturday": [11, 13, 5, 25],
                        "sunday": [13, 14, 6, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 274,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/oe-260-1957.jpg',
                    title: 'OE 260',
                    artist: 'Rupprecht Geiger',
                    year: '1957',
                    rule: {
                        "monday": [13, 14, 6, 9],
                        "tuesday": [16, 17, 8, 12],
                        "wednesday": [19, 21, 22, 24],
                        "thursday": [21, 23, 27, 30],
                        "friday": [23, 25, 26, 29],
                        "saturday": [8, 9, 20, 12],
                        "sunday": [11, 13, 5, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 275,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-2006.jpg',
                    title: 'Untitled',
                    artist: 'Mostafa Dashti',
                    year: '2006',
                    rule: {
                        "monday": [11, 13, 5, 25],
                        "tuesday": [13, 14, 6, 9],
                        "wednesday": [16, 17, 8, 12],
                        "thursday": [19, 21, 22, 24],
                        "friday": [21, 23, 27, 30],
                        "saturday": [23, 25, 26, 29],
                        "sunday": [8, 9, 20, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 276,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/twenty-1968.jpg',
                    title: 'Twenty',
                    artist: 'Thomas Downing',
                    year: '1968',
                    rule: {
                        "monday": [8, 9, 20, 12],
                        "tuesday": [11, 13, 5, 25],
                        "wednesday": [13, 14, 6, 9],
                        "thursday": [16, 17, 8, 12],
                        "friday": [19, 21, 22, 24],
                        "saturday": [21, 23, 27, 30],
                        "sunday": [23, 25, 26, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 277,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/paisaje-espejismo-2000.jpg',
                    title: 'Paisaje Espejismo',
                    artist: 'Gunther Gerzso',
                    year: '2000',
                    rule: {
                        "monday": [23, 25, 26, 29],
                        "tuesday": [8, 9, 20, 12],
                        "wednesday": [11, 13, 5, 25],
                        "thursday": [13, 14, 6, 9],
                        "friday": [16, 17, 8, 12],
                        "saturday": [19, 21, 22, 24],
                        "sunday": [21, 23, 27, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 278,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/people-1982.jpg',
                    title: 'People',
                    artist: 'Leon Ferrari',
                    year: '1982',
                    rule: {
                        "monday": [21, 23, 27, 30],
                        "tuesday": [23, 25, 26, 29],
                        "wednesday": [8, 9, 20, 12],
                        "thursday": [11, 13, 5, 25],
                        "friday": [13, 14, 6, 9],
                        "saturday": [16, 17, 8, 12],
                        "sunday": [19, 21, 22, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 279,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/farblitho-1968-2-nor-1968.jpg',
                    title: 'Farblitho 1968 - 2 (NOR)',
                    artist: 'Ernst Wilhelm Nay',
                    year: '1968',
                    rule: {
                        "monday": [19, 21, 22, 24],
                        "tuesday": [21, 23, 27, 30],
                        "wednesday": [23, 25, 26, 29],
                        "thursday": [8, 9, 20, 12],
                        "friday": [11, 13, 5, 25],
                        "saturday": [13, 14, 6, 9],
                        "sunday": [16, 17, 8, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 280,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-torn-sky-1970.jpg',
                    title: 'Untitled (Torn Sky)',
                    artist: 'Joe Goode',
                    year: '1970',
                    rule: {
                        "monday": [17, 18, 9, 13],
                        "tuesday": [20, 22, 23, 25],
                        "wednesday": [22, 24, 28, 31],
                        "thursday": [24, 26, 27, 30],
                        "friday": [9, 10, 21, 13],
                        "saturday": [12, 14, 6, 26],
                        "sunday": [14, 15, 7, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 281,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/oak-rock-1980.jpg',
                    title: 'Oak Rock',
                    artist: 'Joe Goode',
                    year: '1980',
                    rule: {
                        "monday": [14, 15, 7, 10],
                        "tuesday": [17, 18, 9, 13],
                        "wednesday": [20, 22, 23, 25],
                        "thursday": [22, 24, 28, 31],
                        "friday": [24, 26, 27, 30],
                        "saturday": [9, 10, 21, 13],
                        "sunday": [12, 14, 6, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 282,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/north-sound-1979.jpg',
                    title: 'North Sound',
                    artist: 'John Hoyland',
                    year: '1979',
                    rule: {
                        "monday": [12, 14, 6, 26],
                        "tuesday": [14, 15, 7, 10],
                        "wednesday": [17, 18, 9, 13],
                        "thursday": [20, 22, 23, 25],
                        "friday": [22, 24, 28, 31],
                        "saturday": [24, 26, 27, 30],
                        "sunday": [9, 10, 21, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 283,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/kompozycja-architektoniczna-1929.jpg',
                    title: 'Kompozycja architektoniczna',
                    artist: 'Wladyslaw Strzeminski',
                    year: '1929',
                    rule: {
                        "monday": [10, 11, 22, 14],
                        "tuesday": [13, 15, 7, 27],
                        "wednesday": [15, 16, 8, 11],
                        "thursday": [18, 19, 10, 14],
                        "friday": [21, 23, 24, 26],
                        "saturday": [23, 25, 29, 1],
                        "sunday": [25, 27, 28, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 284,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/a-position-a-1972(1).jpg',
                    title: 'A Position-A',
                    artist: 'Matsutani',
                    year: '1972',
                    rule: {
                        "monday": [25, 27, 28, 31],
                        "tuesday": [10, 11, 22, 14],
                        "wednesday": [13, 15, 7, 27],
                        "thursday": [15, 16, 8, 11],
                        "friday": [18, 19, 10, 14],
                        "saturday": [21, 23, 24, 26],
                        "sunday": [23, 25, 29, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 285,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/waterfall-2008.jpg',
                    title: 'Waterfall',
                    artist: 'Romul Nutiu',
                    year: '2008',
                    rule: {
                        "monday": [23, 25, 29, 1],
                        "tuesday": [25, 27, 28, 31],
                        "wednesday": [10, 11, 22, 14],
                        "thursday": [13, 15, 7, 27],
                        "friday": [15, 16, 8, 11],
                        "saturday": [18, 19, 10, 14],
                        "sunday": [21, 23, 24, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 286,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1958.jpg',
                    title: 'Composition',
                    artist: 'Gunter Fruhtrunk',
                    year: '1958',
                    rule: {
                        "monday": [21, 23, 24, 26],
                        "tuesday": [23, 25, 29, 1],
                        "wednesday": [25, 27, 28, 31],
                        "thursday": [10, 11, 22, 14],
                        "friday": [13, 15, 7, 27],
                        "saturday": [15, 16, 8, 11],
                        "sunday": [18, 19, 10, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 287,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/early-mutation-green-no-ii-1960.jpg',
                    title: 'Early Mutation Green No. II',
                    artist: 'Bernard Cohen',
                    year: '1960',
                    rule: {
                        "monday": [19, 20, 11, 15],
                        "tuesday": [22, 24, 25, 27],
                        "wednesday": [24, 26, 30, 2],
                        "thursday": [26, 28, 29, 1],
                        "friday": [11, 12, 23, 15],
                        "saturday": [14, 16, 8, 28],
                        "sunday": [16, 17, 9, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 288,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1969-1.jpg',
                    title: 'Untitled',
                    artist: 'Moshe Kupferman',
                    year: '1969',
                    rule: {
                        "monday": [16, 17, 9, 12],
                        "tuesday": [19, 20, 11, 15],
                        "wednesday": [22, 24, 25, 27],
                        "thursday": [24, 26, 30, 2],
                        "friday": [26, 28, 29, 1],
                        "saturday": [11, 12, 23, 15],
                        "sunday": [14, 16, 8, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 289,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/klang-sound-i-1995.jpg',
                    title: 'Klang-Sound I',
                    artist: 'Jurgen Partenheimer',
                    year: '1995',
                    rule: {
                        "monday": [14, 16, 8, 28],
                        "tuesday": [16, 17, 9, 12],
                        "wednesday": [19, 20, 11, 15],
                        "thursday": [22, 24, 25, 27],
                        "friday": [24, 26, 30, 2],
                        "saturday": [26, 28, 29, 1],
                        "sunday": [11, 12, 23, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 290,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/pumpkin-1998.jpg',
                    title: 'Pumpkin',
                    artist: 'Nicholas Krushenick',
                    year: '1998',
                    rule: {
                        "monday": [11, 12, 23, 15],
                        "tuesday": [14, 16, 8, 28],
                        "wednesday": [16, 17, 9, 12],
                        "thursday": [19, 20, 11, 15],
                        "friday": [22, 24, 25, 27],
                        "saturday": [24, 26, 30, 2],
                        "sunday": [26, 28, 29, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 291,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/9-soles-1967.jpg',
                    title: '9-Soles',
                    artist: 'Omar Rayo',
                    year: '1967',
                    rule: {
                        "monday": [26, 28, 29, 1],
                        "tuesday": [11, 12, 23, 15],
                        "wednesday": [14, 16, 8, 28],
                        "thursday": [16, 17, 9, 12],
                        "friday": [19, 20, 11, 15],
                        "saturday": [22, 24, 25, 27],
                        "sunday": [24, 26, 30, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 292,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-no-212-1960 (1).jpg',
                    title: 'Composition No. 212',
                    artist: 'Friedrich Vordemberge-Gildewart',
                    year: '1960',
                    rule: {
                        "monday": [24, 26, 30, 2],
                        "tuesday": [26, 28, 29, 1],
                        "wednesday": [11, 12, 23, 15],
                        "thursday": [14, 16, 8, 28],
                        "friday": [16, 17, 9, 12],
                        "saturday": [19, 20, 11, 15],
                        "sunday": [22, 24, 25, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 293,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/spectrocoupling-1972.jpg',
                    title: 'Spectrocoupling',
                    artist: 'Peter Phillips',
                    year: '1972',
                    rule: {
                        "monday": [22, 24, 25, 27],
                        "tuesday": [24, 26, 30, 2],
                        "wednesday": [26, 28, 29, 1],
                        "thursday": [11, 12, 23, 15],
                        "friday": [14, 16, 8, 28],
                        "saturday": [16, 17, 9, 12],
                        "sunday": [19, 20, 11, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 294,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1964.jpg',
                    title: 'Untitled',
                    artist: 'Ray Parker',
                    year: '1964',
                    rule: {
                        "monday": [20, 21, 12, 16],
                        "tuesday": [23, 25, 26, 28],
                        "wednesday": [25, 27, 31, 3],
                        "thursday": [27, 29, 30, 2],
                        "friday": [12, 13, 24, 16],
                        "saturday": [15, 17, 9, 29],
                        "sunday": [17, 18, 10, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 295,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/number-20-1949.jpg',
                    title: 'Number 20',
                    artist: 'Bradley Walker Tomlin',
                    year: '1949',
                    rule: {
                        "monday": [17, 18, 10, 13],
                        "tuesday": [20, 21, 12, 16],
                        "wednesday": [23, 25, 26, 28],
                        "thursday": [25, 27, 31, 3],
                        "friday": [27, 29, 30, 2],
                        "saturday": [12, 13, 24, 16],
                        "sunday": [15, 17, 9, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 296,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/message-mensaje-1967.jpg',
                    title: 'Message (Mensaje)',
                    artist: 'Mathias Goeritz',
                    year: '1967',
                    rule: {
                        "monday": [15, 17, 9, 29],
                        "tuesday": [17, 18, 10, 13],
                        "wednesday": [20, 21, 12, 16],
                        "thursday": [23, 25, 26, 28],
                        "friday": [25, 27, 31, 3],
                        "saturday": [27, 29, 30, 2],
                        "sunday": [12, 13, 24, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 297,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/l-homme-1966.jpg',
                    title: 'L\'homme',
                    artist: 'Marcelle Cahn',
                    year: '1966',
                    rule: {
                        "monday": [12, 13, 24, 16],
                        "tuesday": [15, 17, 9, 29],
                        "wednesday": [17, 18, 10, 13],
                        "thursday": [20, 21, 12, 16],
                        "friday": [23, 25, 26, 28],
                        "saturday": [25, 27, 31, 3],
                        "sunday": [27, 29, 30, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 298,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-no-11a-1958.jpg',
                    title: 'Untitled, No. 11a',
                    artist: 'Forrest Bess',
                    year: '1958',
                    rule: {
                        "monday": [27, 29, 30, 2],
                        "tuesday": [12, 13, 24, 16],
                        "wednesday": [15, 17, 9, 29],
                        "thursday": [17, 18, 10, 13],
                        "friday": [20, 21, 12, 16],
                        "saturday": [23, 25, 26, 28],
                        "sunday": [25, 27, 31, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 299,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/kasseler-serie-2000.jpg',
                    title: 'Kasseler Serie',
                    artist: 'Gunther Forg',
                    year: '2000',
                    rule: {
                        "monday": [25, 27, 31, 3],
                        "tuesday": [27, 29, 30, 2],
                        "wednesday": [12, 13, 24, 16],
                        "thursday": [15, 17, 9, 29],
                        "friday": [17, 18, 10, 13],
                        "saturday": [20, 21, 12, 16],
                        "sunday": [23, 25, 26, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 300,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/ecriture-no-051128-2005.jpg',
                    title: 'Ecriture No. 051128',
                    artist: 'Park Seo-Bo',
                    year: '2005',
                    rule: {
                        "monday": [23, 25, 26, 28],
                        "tuesday": [25, 27, 31, 3],
                        "wednesday": [27, 29, 30, 2],
                        "thursday": [12, 13, 24, 16],
                        "friday": [15, 17, 9, 29],
                        "saturday": [17, 18, 10, 13],
                        "sunday": [20, 21, 12, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 301,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1964-1.jpg',
                    title: 'Untitled',
                    artist: 'Gotthard Graubner',
                    year: '1964',
                    rule: {
                        "monday": [21, 22, 13, 17],
                        "tuesday": [24, 26, 27, 29],
                        "wednesday": [26, 28, 1, 4],
                        "thursday": [28, 30, 31, 3],
                        "friday": [13, 14, 25, 17],
                        "saturday": [16, 18, 10, 30],
                        "sunday": [18, 19, 11, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 302,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/river-avon-mud-drawing-1983.jpg',
                    title: 'River Avon mud drawing',
                    artist: 'Richard Long',
                    year: '1983',
                    rule: {
                        "monday": [18, 19, 11, 14],
                        "tuesday": [21, 22, 13, 17],
                        "wednesday": [24, 26, 27, 29],
                        "thursday": [26, 28, 1, 4],
                        "friday": [28, 30, 31, 3],
                        "saturday": [13, 14, 25, 17],
                        "sunday": [16, 18, 10, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 303,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/unknown-title-1.jpg',
                    title: 'unknown title',
                    artist: 'Constantin Blendea',
                    year: 'XX - XXI cent.',
                    rule: {
                        "monday": [16, 18, 10, 30],
                        "tuesday": [18, 19, 11, 14],
                        "wednesday": [21, 22, 13, 17],
                        "thursday": [24, 26, 27, 29],
                        "friday": [26, 28, 1, 4],
                        "saturday": [28, 30, 31, 3],
                        "sunday": [13, 14, 25, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 304,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/imagen-obsesiva-1962.jpg',
                    title: 'Imagen Obsesiva',
                    artist: 'Gunther Gerzso',
                    year: '1962',
                    rule: {
                        "monday": [13, 14, 25, 17],
                        "tuesday": [16, 18, 10, 30],
                        "wednesday": [18, 19, 11, 14],
                        "thursday": [21, 22, 13, 17],
                        "friday": [24, 26, 27, 29],
                        "saturday": [26, 28, 1, 4],
                        "sunday": [28, 30, 31, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 305,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/garland-1962.jpg',
                    title: 'Garland',
                    artist: 'Jeremy Moon',
                    year: '1962',
                    rule: {
                        "monday": [28, 30, 31, 3],
                        "tuesday": [13, 14, 25, 17],
                        "wednesday": [16, 18, 10, 30],
                        "thursday": [18, 19, 11, 14],
                        "friday": [21, 22, 13, 17],
                        "saturday": [24, 26, 27, 29],
                        "sunday": [26, 28, 1, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 306,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/paris-1968.jpg',
                    title: 'Paris',
                    artist: 'Princess Fahrelnissa Zeid',
                    year: '1968',
                    rule: {
                        "monday": [26, 28, 1, 4],
                        "tuesday": [28, 30, 31, 3],
                        "wednesday": [13, 14, 25, 17],
                        "thursday": [16, 18, 10, 30],
                        "friday": [18, 19, 11, 14],
                        "saturday": [21, 22, 13, 17],
                        "sunday": [24, 26, 27, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 307,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/head-blue-yellow-1956.jpg',
                    title: 'Head Blue/Yellow',
                    artist: 'William Turnbull',
                    year: '1956',
                    rule: {
                        "monday": [24, 26, 27, 29],
                        "tuesday": [26, 28, 1, 4],
                        "wednesday": [28, 30, 31, 3],
                        "thursday": [13, 14, 25, 17],
                        "friday": [16, 18, 10, 30],
                        "saturday": [18, 19, 11, 14],
                        "sunday": [21, 22, 13, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 308,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/fifty-days-at-iliam-ilians-in-battle.jpg',
                    title: 'Fifty Days at Iliam. Ilians in Battle',
                    artist: 'Cy Twombly',
                    year: '1978',
                    rule: {
                        "monday": [22, 23, 14, 18],
                        "tuesday": [25, 27, 28, 30],
                        "wednesday": [27, 29, 2, 5],
                        "thursday": [29, 31, 1, 4],
                        "friday": [14, 15, 26, 18],
                        "saturday": [17, 19, 11, 31],
                        "sunday": [19, 20, 12, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 309,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/work-no-3-yellow-painting-1986.jpg',
                    title: 'Work No. 3 (Yellow Painting)',
                    artist: 'Martin Creed',
                    year: '1986',
                    rule: {
                        "monday": [19, 20, 12, 15],
                        "tuesday": [22, 23, 14, 18],
                        "wednesday": [25, 27, 28, 30],
                        "thursday": [27, 29, 2, 5],
                        "friday": [29, 31, 1, 4],
                        "saturday": [14, 15, 26, 18],
                        "sunday": [17, 19, 11, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 310,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/goulimine-1964.jpg',
                    title: 'Goulimine',
                    artist: 'Rupprecht Geiger',
                    year: '1964',
                    rule: {
                        "monday": [17, 19, 11, 31],
                        "tuesday": [19, 20, 12, 15],
                        "wednesday": [22, 23, 14, 18],
                        "thursday": [25, 27, 28, 30],
                        "friday": [27, 29, 2, 5],
                        "saturday": [29, 31, 1, 4],
                        "sunday": [14, 15, 26, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 311,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/grille-en-quatre-1968.jpg',
                    title: 'Grille en quatre',
                    artist: 'Samuel Buri',
                    year: '1968',
                    rule: {
                        "monday": [14, 15, 26, 18],
                        "tuesday": [17, 19, 11, 31],
                        "wednesday": [19, 20, 12, 15],
                        "thursday": [22, 23, 14, 18],
                        "friday": [25, 27, 28, 30],
                        "saturday": [27, 29, 2, 5],
                        "sunday": [29, 31, 1, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 312,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/ice-blue-1972.jpg',
                    title: 'Ice Blue',
                    artist: 'Terry Frost',
                    year: '1972',
                    rule: {
                        "monday": [29, 31, 1, 4],
                        "tuesday": [14, 15, 26, 18],
                        "wednesday": [17, 19, 11, 31],
                        "thursday": [19, 20, 12, 15],
                        "friday": [22, 23, 14, 18],
                        "saturday": [25, 27, 28, 30],
                        "sunday": [27, 29, 2, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 313,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/contemplations-on-geraniums-1952.jpg',
                    title: 'Contemplations on Geraniums',
                    artist: 'John Ferren',
                    year: '1952',
                    rule: {
                        "monday": [27, 29, 2, 5],
                        "tuesday": [29, 31, 1, 4],
                        "wednesday": [14, 15, 26, 18],
                        "thursday": [17, 19, 11, 31],
                        "friday": [19, 20, 12, 15],
                        "saturday": [22, 23, 14, 18],
                        "sunday": [25, 27, 28, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 314,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/white-on-white-malevich-1918.png',
                    title: 'Suprematist Composition: White on White',
                    artist: 'Kazimir Malevich',
                    year: '1917 - 1918',
                    rule: {
                        "monday": [25, 27, 28, 30],
                        "tuesday": [27, 29, 2, 5],
                        "wednesday": [29, 31, 1, 4],
                        "thursday": [14, 15, 26, 18],
                        "friday": [17, 19, 11, 31],
                        "saturday": [19, 20, 12, 15],
                        "sunday": [22, 23, 14, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 315,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/amorphic-forms-1944.jpg',
                    title: 'Amorphic Forms',
                    artist: 'William Baziotes',
                    year: '1944',
                    rule: {
                        "monday": [22, 23, 14, 18],
                        "tuesday": [25, 27, 28, 30],
                        "wednesday": [27, 29, 2, 5],
                        "thursday": [29, 31, 1, 4],
                        "friday": [14, 15, 26, 18],
                        "saturday": [17, 19, 11, 31],
                        "sunday": [19, 20, 12, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 316,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/q1.jpg',
                    title: 'Q1',
                    artist: 'Jean-Francois Dubreuil',
                    year: '?',
                    rule: {
                        "monday": [19, 20, 12, 15],
                        "tuesday": [22, 23, 14, 18],
                        "wednesday": [25, 27, 28, 30],
                        "thursday": [27, 29, 2, 5],
                        "friday": [29, 31, 1, 4],
                        "saturday": [14, 15, 26, 18],
                        "sunday": [17, 19, 11, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 317,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-domes-1993.jpg',
                    title: 'The Domes',
                    artist: 'Adnan Coker',
                    year: '1993',
                    rule: {
                        "monday": [17, 19, 11, 31],
                        "tuesday": [19, 20, 12, 15],
                        "wednesday": [22, 23, 14, 18],
                        "thursday": [25, 27, 28, 30],
                        "friday": [27, 29, 2, 5],
                        "saturday": [29, 31, 1, 4],
                        "sunday": [14, 15, 26, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 318,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1986.jpg',
                    title: 'Untitled',
                    artist: 'Fred Sandback',
                    year: '1986',
                    rule: {
                        "monday": [14, 15, 26, 18],
                        "tuesday": [17, 19, 11, 31],
                        "wednesday": [19, 20, 12, 15],
                        "thursday": [22, 23, 14, 18],
                        "friday": [25, 27, 28, 30],
                        "saturday": [27, 29, 2, 5],
                        "sunday": [29, 31, 1, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 319,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/opus-55-r-gne-de-l-acier-poli-heerschappij-van-gepolijst-staal-1923.jpg',
                    title: 'Opus 55. Règne de l’acier poli (Heerschappij van gepolijst staal)',
                    artist: 'Victor Servranckx',
                    year: '1923',
                    rule: {
                        "monday": [29, 31, 1, 4],
                        "tuesday": [14, 15, 26, 18],
                        "wednesday": [17, 19, 11, 31],
                        "thursday": [19, 20, 12, 15],
                        "friday": [22, 23, 14, 18],
                        "saturday": [25, 27, 28, 30],
                        "sunday": [27, 29, 2, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 320,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composi-o-1964(1).jpg',
                    title: 'Composição',
                    artist: 'Lothar Charoux',
                    year: '1964',
                    rule: {
                        "monday": [27, 29, 2, 5],
                        "tuesday": [29, 31, 1, 4],
                        "wednesday": [14, 15, 26, 18],
                        "thursday": [17, 19, 11, 31],
                        "friday": [19, 20, 12, 15],
                        "saturday": [22, 23, 14, 18],
                        "sunday": [25, 27, 28, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 321,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition(1).jpg',
                    title: 'Composition',
                    artist: 'Marcelle Cahn',
                    year: 'xx Cent.',
                    rule: {
                        "monday": [25, 27, 28, 30],
                        "tuesday": [27, 29, 2, 5],
                        "wednesday": [29, 31, 1, 4],
                        "thursday": [14, 15, 26, 18],
                        "friday": [17, 19, 11, 31],
                        "saturday": [19, 20, 12, 15],
                        "sunday": [22, 23, 14, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 322,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/angle-1963.jpg',
                    title: 'Angle',
                    artist: 'William Scott',
                    year: '1963',
                    rule: {
                        "monday": [23, 24, 15, 19],
                        "tuesday": [26, 28, 29, 31],
                        "wednesday": [28, 30, 3, 6],
                        "thursday": [30, 1, 2, 5],
                        "friday": [15, 16, 27, 19],
                        "saturday": [18, 20, 12, 1],
                        "sunday": [20, 21, 13, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 323,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-abstract.jpg',
                    title: 'Untitled (Abstract)',
                    artist: 'Taro Yamamoto',
                    year: 'xx Cent.',
                    rule: {
                        "monday": [20, 21, 13, 16],
                        "tuesday": [23, 24, 15, 19],
                        "wednesday": [26, 28, 29, 31],
                        "thursday": [28, 30, 3, 6],
                        "friday": [30, 1, 2, 5],
                        "saturday": [15, 16, 27, 19],
                        "sunday": [18, 20, 12, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 324,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/28-ii-58-1958.jpg',
                    title: '28 II 58',
                    artist: 'Oskar Holweck',
                    year: '1958',
                    rule: {
                        "monday": [18, 20, 12, 1],
                        "tuesday": [20, 21, 13, 16],
                        "wednesday": [23, 24, 15, 19],
                        "thursday": [26, 28, 29, 31],
                        "friday": [28, 30, 3, 6],
                        "saturday": [30, 1, 2, 5],
                        "sunday": [15, 16, 27, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 325,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/nightfall-1994.jpg',
                    title: 'Nightfall',
                    artist: 'Ronnie Landfield',
                    year: '1994',
                    rule: {
                        "monday": [15, 16, 27, 19],
                        "tuesday": [18, 20, 12, 1],
                        "wednesday": [20, 21, 13, 16],
                        "thursday": [23, 24, 15, 19],
                        "friday": [26, 28, 29, 31],
                        "saturday": [28, 30, 3, 6],
                        "sunday": [30, 1, 2, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 326,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1998.jpg',
                    title: 'Composition',
                    artist: 'Ion Alin Gheorghiu',
                    year: '1998',
                    rule: {
                        "monday": [30, 1, 2, 5],
                        "tuesday": [15, 16, 27, 19],
                        "wednesday": [18, 20, 12, 1],
                        "thursday": [20, 21, 13, 16],
                        "friday": [23, 24, 15, 19],
                        "saturday": [26, 28, 29, 31],
                        "sunday": [28, 30, 3, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 327,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/a-print-from-saundarya-lahiri-1974-2.jpg',
                    title: 'A Print from Saundarya Lahiri',
                    artist: 'Akkitham Narayanan',
                    year: '1974',
                    rule: {
                        "monday": [28, 30, 3, 6],
                        "tuesday": [30, 1, 2, 5],
                        "wednesday": [15, 16, 27, 19],
                        "thursday": [18, 20, 12, 1],
                        "friday": [20, 21, 13, 16],
                        "saturday": [23, 24, 15, 19],
                        "sunday": [26, 28, 29, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 328,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-cubiste-1917.jpg',
                    title: 'Composition cubiste',
                    artist: 'Auguste Herbin',
                    year: '1917',
                    rule: {
                        "monday": [26, 28, 29, 31],
                        "tuesday": [28, 30, 3, 6],
                        "wednesday": [30, 1, 2, 5],
                        "thursday": [15, 16, 27, 19],
                        "friday": [18, 20, 12, 1],
                        "saturday": [20, 21, 13, 16],
                        "sunday": [23, 24, 15, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 329,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/dancer-in-pigalle-1912.jpg',
                    title: 'Dancer in Pigalle',
                    artist: 'Gino Severini',
                    year: '1912',
                    rule: {
                        "monday": [24, 25, 16, 20],
                        "tuesday": [27, 29, 30, 1],
                        "wednesday": [29, 31, 4, 7],
                        "thursday": [31, 2, 3, 6],
                        "friday": [16, 17, 28, 20],
                        "saturday": [19, 21, 13, 2],
                        "sunday": [21, 22, 14, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 330,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/free-wheeling-1971.jpg',
                    title: 'Free Wheeling',
                    artist: 'Helen Frankenthaler',
                    year: '1971',
                    rule: {
                        "monday": [21, 22, 14, 17],
                        "tuesday": [24, 25, 16, 20],
                        "wednesday": [27, 29, 30, 1],
                        "thursday": [29, 31, 4, 7],
                        "friday": [31, 2, 3, 6],
                        "saturday": [16, 17, 28, 20],
                        "sunday": [19, 21, 13, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 331,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/rosace-ii-1941.jpg',
                    title: 'Rosace II',
                    artist: 'Otto Freundlich',
                    year: '1941',
                    rule: {
                        "monday": [19, 21, 13, 2],
                        "tuesday": [21, 22, 14, 17],
                        "wednesday": [24, 25, 16, 20],
                        "thursday": [27, 29, 30, 1],
                        "friday": [29, 31, 4, 7],
                        "saturday": [31, 2, 3, 6],
                        "sunday": [16, 17, 28, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 332,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-elimination-of-radiation-through-bombardment-1986.jpg',
                    title: 'The Elimination of Radiation through Bombardment',
                    artist: 'Ozdemir Atlan',
                    year: '1986',
                    rule: {
                        "monday": [16, 17, 28, 20],
                        "tuesday": [19, 21, 13, 2],
                        "wednesday": [21, 22, 14, 17],
                        "thursday": [24, 25, 16, 20],
                        "friday": [27, 29, 30, 1],
                        "saturday": [29, 31, 4, 7],
                        "sunday": [31, 2, 3, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 333,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/o2-43-44-ou-o-violino-1944.jpg',
                    title: 'O2-43-44 (ou O Violino)',
                    artist: 'Fernando Lanhas',
                    year: '1944',
                    rule: {
                        "monday": [31, 2, 3, 6],
                        "tuesday": [16, 17, 28, 20],
                        "wednesday": [19, 21, 13, 2],
                        "thursday": [21, 22, 14, 17],
                        "friday": [24, 25, 16, 20],
                        "saturday": [27, 29, 30, 1],
                        "sunday": [29, 31, 4, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 334,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/clous-1969.jpg',
                    title: 'Clous',
                    artist: 'Bernard Aubertin',
                    year: '1969',
                    rule: {
                        "monday": [29, 31, 4, 7],
                        "tuesday": [31, 2, 3, 6],
                        "wednesday": [16, 17, 28, 20],
                        "thursday": [19, 21, 13, 2],
                        "friday": [21, 22, 14, 17],
                        "saturday": [24, 25, 16, 20],
                        "sunday": [27, 29, 30, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 335,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled__0__.jpg',
                    title: 'Untitled',
                    artist: 'Mario Prassinos',
                    year: '?',
                    rule: {
                        "monday": [27, 29, 30, 1],
                        "tuesday": [29, 31, 4, 7],
                        "wednesday": [31, 2, 3, 6],
                        "thursday": [16, 17, 28, 20],
                        "friday": [19, 21, 13, 2],
                        "saturday": [21, 22, 14, 17],
                        "sunday": [24, 25, 16, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 336,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1995 (1).jpg',
                    title: 'Untitled',
                    artist: 'Harriet Korman',
                    year: '1995',
                    rule: {
                        "monday": [25, 26, 17, 21],
                        "tuesday": [28, 30, 31, 2],
                        "wednesday": [30, 1, 5, 8],
                        "thursday": [1, 3, 4, 7],
                        "friday": [17, 18, 29, 21],
                        "saturday": [20, 22, 14, 3],
                        "sunday": [22, 23, 15, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 337,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/rits-rats-2004.jpg',
                    title: 'Rits rats',
                    artist: 'Rune Jansson',
                    year: '2004',
                    rule: {
                        "monday": [22, 23, 15, 18],
                        "tuesday": [25, 26, 17, 21],
                        "wednesday": [28, 30, 31, 2],
                        "thursday": [30, 1, 5, 8],
                        "friday": [1, 3, 4, 7],
                        "saturday": [17, 18, 29, 21],
                        "sunday": [20, 22, 14, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 338,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/paesaggio-interiore-apertura-del-diaframma-1921.jpg',
                    title: 'Paesaggio interiore, apertura del diaframma',
                    artist: 'Julius Evola',
                    year: '1921',
                    rule: {
                        "monday": [20, 22, 14, 3],
                        "tuesday": [22, 23, 15, 18],
                        "wednesday": [25, 26, 17, 21],
                        "thursday": [28, 30, 31, 2],
                        "friday": [30, 1, 5, 8],
                        "saturday": [1, 3, 4, 7],
                        "sunday": [17, 18, 29, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 339,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/27-october-1949-1949.jpg',
                    title: '27 October 1949',
                    artist: 'Frank Lobdell',
                    year: '1949',
                    rule: {
                        "monday": [17, 18, 29, 21],
                        "tuesday": [20, 22, 14, 3],
                        "wednesday": [22, 23, 15, 18],
                        "thursday": [25, 26, 17, 21],
                        "friday": [28, 30, 31, 2],
                        "saturday": [30, 1, 5, 8],
                        "sunday": [1, 3, 4, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 340,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/kinetisches-objekt-1967.jpg',
                    title: 'Kinetisches Objekt',
                    artist: 'Ludwig Wilding',
                    year: '1967',
                    rule: {
                        "monday": [1, 3, 4, 7],
                        "tuesday": [17, 18, 29, 21],
                        "wednesday": [20, 22, 14, 3],
                        "thursday": [22, 23, 15, 18],
                        "friday": [25, 26, 17, 21],
                        "saturday": [28, 30, 31, 2],
                        "sunday": [30, 1, 5, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 341,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/licht-relief-1958.jpg',
                    title: 'Licht-Relief',
                    artist: 'Heinz Mack',
                    year: '1958',
                    rule: {
                        "monday": [30, 1, 5, 8],
                        "tuesday": [1, 3, 4, 7],
                        "wednesday": [17, 18, 29, 21],
                        "thursday": [20, 22, 14, 3],
                        "friday": [22, 23, 15, 18],
                        "saturday": [25, 26, 17, 21],
                        "sunday": [28, 30, 31, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 342,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/progression-21-a-1965.jpg',
                    title: 'Progression 21-A',
                    artist: 'Abraham Palatnik',
                    year: '1965',
                    rule: {
                        "monday": [28, 30, 31, 2],
                        "tuesday": [30, 1, 5, 8],
                        "wednesday": [1, 3, 4, 7],
                        "thursday": [17, 18, 29, 21],
                        "friday": [20, 22, 14, 3],
                        "saturday": [22, 23, 15, 18],
                        "sunday": [25, 26, 17, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 343,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/blue-waterfall-2011.jpg',
                    title: 'Blue Waterfall',
                    artist: 'Romul Nutiu',
                    year: '2011',
                    rule: {
                        "monday": [26, 27, 18, 22],
                        "tuesday": [29, 31, 1, 3],
                        "wednesday": [31, 2, 6, 9],
                        "thursday": [2, 4, 5, 8],
                        "friday": [18, 19, 30, 22],
                        "saturday": [21, 23, 15, 4],
                        "sunday": [23, 24, 16, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 344,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/movement-in-squares-1961.jpg',
                    title: 'Movement in Squares',
                    artist: 'Bridget Riley',
                    year: '1961',
                    rule: {
                        "monday": [23, 24, 16, 19],
                        "tuesday": [26, 27, 18, 22],
                        "wednesday": [29, 31, 1, 3],
                        "thursday": [31, 2, 6, 9],
                        "friday": [2, 4, 5, 8],
                        "saturday": [18, 19, 30, 22],
                        "sunday": [21, 23, 15, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 345,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/spring-1907(1).jpg',
                    title: 'Spring',
                    artist: 'David Burliuk',
                    year: '1907',
                    rule: {
                        "monday": [21, 23, 15, 4],
                        "tuesday": [23, 24, 16, 19],
                        "wednesday": [26, 27, 18, 22],
                        "thursday": [29, 31, 1, 3],
                        "friday": [31, 2, 6, 9],
                        "saturday": [2, 4, 5, 8],
                        "sunday": [18, 19, 30, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 346,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/pintura-1974.jpg',
                    title: 'Pintura',
                    artist: 'Angelo de Sousa',
                    year: '1974',
                    rule: {
                        "monday": [18, 19, 30, 22],
                        "tuesday": [21, 23, 15, 4],
                        "wednesday": [23, 24, 16, 19],
                        "thursday": [26, 27, 18, 22],
                        "friday": [29, 31, 1, 3],
                        "saturday": [31, 2, 6, 9],
                        "sunday": [2, 4, 5, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 347,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/grid-9-saranac-1971.jpg',
                    title: 'Grid #9: Saranac',
                    artist: 'Thomas Downing',
                    year: '1971',
                    rule: {
                        "monday": [2, 4, 5, 8],
                        "tuesday": [18, 19, 30, 22],
                        "wednesday": [21, 23, 15, 4],
                        "thursday": [23, 24, 16, 19],
                        "friday": [26, 27, 18, 22],
                        "saturday": [29, 31, 1, 3],
                        "sunday": [31, 2, 6, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 348,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/l-amour-l-amour-1989.jpg',
                    title: 'L’amour, l’amour',
                    artist: 'Greta Freist',
                    year: '1989',
                    rule: {
                        "monday": [31, 2, 6, 9],
                        "tuesday": [2, 4, 5, 8],
                        "wednesday": [18, 19, 30, 22],
                        "thursday": [21, 23, 15, 4],
                        "friday": [23, 24, 16, 19],
                        "saturday": [26, 27, 18, 22],
                        "sunday": [29, 31, 1, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 349,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/mistral-1970.jpg',
                    title: 'Mistral',
                    artist: 'Tess Jaray',
                    year: '1970',
                    rule: {
                        "monday": [29, 31, 1, 3],
                        "tuesday": [31, 2, 6, 9],
                        "wednesday": [2, 4, 5, 8],
                        "thursday": [18, 19, 30, 22],
                        "friday": [21, 23, 15, 4],
                        "saturday": [23, 24, 16, 19],
                        "sunday": [26, 27, 18, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 350,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/10-stones-1989(1).jpg',
                    title: '10 Stones',
                    artist: 'John Cage',
                    year: '1989',
                    rule: {
                        "monday": [27, 28, 19, 23],
                        "tuesday": [30, 1, 2, 4],
                        "wednesday": [1, 3, 7, 10],
                        "thursday": [3, 5, 6, 9],
                        "friday": [19, 20, 31, 23],
                        "saturday": [22, 24, 16, 5],
                        "sunday": [24, 25, 17, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 351,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/relief-in-orange-and-blue-1956.jpg',
                    title: 'Relief in Orange and Blue',
                    artist: 'Lygia Pape',
                    year: '1956',
                    rule: {
                        "monday": [24, 25, 17, 20],
                        "tuesday": [27, 28, 19, 23],
                        "wednesday": [30, 1, 2, 4],
                        "thursday": [1, 3, 7, 10],
                        "friday": [3, 5, 6, 9],
                        "saturday": [19, 20, 31, 23],
                        "sunday": [22, 24, 16, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 352,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/black-painting-1972.jpg',
                    title: 'Black Painting',
                    artist: 'Gary Kuehn',
                    year: '1972',
                    rule: {
                        "monday": [22, 24, 16, 5],
                        "tuesday": [24, 25, 17, 20],
                        "wednesday": [27, 28, 19, 23],
                        "thursday": [30, 1, 2, 4],
                        "friday": [1, 3, 7, 10],
                        "saturday": [3, 5, 6, 9],
                        "sunday": [19, 20, 31, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 353,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/red-staff-1937.jpg',
                    title: 'Red Staff',
                    artist: 'Rudolf Bauer',
                    year: '1937',
                    rule: {
                        "monday": [19, 20, 31, 23],
                        "tuesday": [22, 24, 16, 5],
                        "wednesday": [24, 25, 17, 20],
                        "thursday": [27, 28, 19, 23],
                        "friday": [30, 1, 2, 4],
                        "saturday": [1, 3, 7, 10],
                        "sunday": [3, 5, 6, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 354,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-ii-2000.jpg',
                    title: 'Composition II',
                    artist: 'Ion Alin Gheorghiu',
                    year: '2000',
                    rule: {
                        "monday": [3, 5, 6, 9],
                        "tuesday": [19, 20, 31, 23],
                        "wednesday": [22, 24, 16, 5],
                        "thursday": [24, 25, 17, 20],
                        "friday": [27, 28, 19, 23],
                        "saturday": [30, 1, 2, 4],
                        "sunday": [1, 3, 7, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 355,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/black-jack-1964.jpg',
                    title: 'Black Jack',
                    artist: 'Howard Mehring',
                    year: '1964',
                    rule: {
                        "monday": [1, 3, 7, 10],
                        "tuesday": [3, 5, 6, 9],
                        "wednesday": [19, 20, 31, 23],
                        "thursday": [22, 24, 16, 5],
                        "friday": [24, 25, 17, 20],
                        "saturday": [27, 28, 19, 23],
                        "sunday": [30, 1, 2, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 356,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/crucifixion-1985.jpg',
                    title: 'Crucifixion',
                    artist: 'Philip Taaffe',
                    year: '1985',
                    rule: {
                        "monday": [30, 1, 2, 4],
                        "tuesday": [1, 3, 7, 10],
                        "wednesday": [3, 5, 6, 9],
                        "thursday": [19, 20, 31, 23],
                        "friday": [22, 24, 16, 5],
                        "saturday": [24, 25, 17, 20],
                        "sunday": [27, 28, 19, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 357,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/pale-colors-on-runs.jpg',
                    title: 'Pale colors on runs',
                    artist: 'Robert Goodnough',
                    year: 'xx - xxi cent.',
                    rule: {
                        "monday": [28, 29, 20, 24],
                        "tuesday": [31, 2, 3, 5],
                        "wednesday": [2, 4, 8, 11],
                        "thursday": [4, 6, 7, 10],
                        "friday": [20, 21, 1, 24],
                        "saturday": [23, 25, 17, 6],
                        "sunday": [25, 26, 18, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 358,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/espa-o-ilus-rio-1970.jpg',
                    title: 'Espaço Ilusório',
                    artist: 'Eduardo Nery',
                    year: '1970',
                    rule: {
                        "monday": [25, 26, 18, 21],
                        "tuesday": [28, 29, 20, 24],
                        "wednesday": [31, 2, 3, 5],
                        "thursday": [2, 4, 8, 11],
                        "friday": [4, 6, 7, 10],
                        "saturday": [20, 21, 1, 24],
                        "sunday": [23, 25, 17, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 359,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-man-the-women-and-the-child-1995.jpg',
                    title: 'The Man, the Women and the Child',
                    artist: 'Nzante Spee',
                    year: '1995',
                    rule: {
                        "monday": [23, 25, 17, 6],
                        "tuesday": [25, 26, 18, 21],
                        "wednesday": [28, 29, 20, 24],
                        "thursday": [31, 2, 3, 5],
                        "friday": [2, 4, 8, 11],
                        "saturday": [4, 6, 7, 10],
                        "sunday": [20, 21, 1, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 360,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-red-forms.jpg',
                    title: 'Composition (Red Forms)',
                    artist: 'Lajos Kassak',
                    year: '?',
                    rule: {
                        "monday": [20, 21, 1, 24],
                        "tuesday": [23, 25, 17, 6],
                        "wednesday": [25, 26, 18, 21],
                        "thursday": [28, 29, 20, 24],
                        "friday": [31, 2, 3, 5],
                        "saturday": [2, 4, 8, 11],
                        "sunday": [4, 6, 7, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 361,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/desenvainar-el-humo-2016.jpg',
                    title: 'Unsheathe the smoke',
                    artist: 'Chicote CFC',
                    year: '2016',
                    rule: {
                        "monday": [4, 6, 7, 10],
                        "tuesday": [20, 21, 1, 24],
                        "wednesday": [23, 25, 17, 6],
                        "thursday": [25, 26, 18, 21],
                        "friday": [28, 29, 20, 24],
                        "saturday": [31, 2, 3, 5],
                        "sunday": [2, 4, 8, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 362,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/work-1957-3.jpg',
                    title: 'Work',
                    artist: 'Akira Kanayama',
                    year: '1957',
                    rule: {
                        "monday": [2, 4, 8, 11],
                        "tuesday": [4, 6, 7, 10],
                        "wednesday": [20, 21, 1, 24],
                        "thursday": [23, 25, 17, 6],
                        "friday": [25, 26, 18, 21],
                        "saturday": [28, 29, 20, 24],
                        "sunday": [31, 2, 3, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 363,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/cor-luz-2008.jpg',
                    title: 'Cor-Luz',
                    artist: 'Eduardo Nery',
                    year: '2008',
                    rule: {
                        "monday": [31, 2, 3, 5],
                        "tuesday": [2, 4, 8, 11],
                        "wednesday": [4, 6, 7, 10],
                        "thursday": [20, 21, 1, 24],
                        "friday": [23, 25, 17, 6],
                        "saturday": [25, 26, 18, 21],
                        "sunday": [28, 29, 20, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 364,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/painterly-architectonic.jpg',
                    title: 'Painterly Architectonic',
                    artist: 'Lyubov Popova',
                    year: '1918',
                    rule: {
                        "monday": [29, 30, 21, 25],
                        "tuesday": [1, 3, 4, 6],
                        "wednesday": [3, 5, 9, 12],
                        "thursday": [5, 7, 8, 11],
                        "friday": [21, 22, 2, 25],
                        "saturday": [24, 26, 18, 7],
                        "sunday": [26, 27, 19, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 365,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/blobs-1993.jpg',
                    title: 'Blobs',
                    artist: 'Kenny Scharf',
                    year: '1993',
                    rule: {
                        "monday": [26, 27, 19, 22],
                        "tuesday": [29, 30, 21, 25],
                        "wednesday": [1, 3, 4, 6],
                        "thursday": [3, 5, 9, 12],
                        "friday": [5, 7, 8, 11],
                        "saturday": [21, 22, 2, 25],
                        "sunday": [24, 26, 18, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 366,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/chord-1990.jpg',
                    title: 'Chord',
                    artist: 'Ward Jackson',
                    year: '1990',
                    rule: {
                        "monday": [24, 26, 18, 7],
                        "tuesday": [26, 27, 19, 22],
                        "wednesday": [29, 30, 21, 25],
                        "thursday": [1, 3, 4, 6],
                        "friday": [3, 5, 9, 12],
                        "saturday": [5, 7, 8, 11],
                        "sunday": [21, 22, 2, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 367,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/eroticon-1990.jpg',
                    title: 'Eroticon',
                    artist: 'Yiannis Moralis',
                    year: '1990',
                    rule: {
                        "monday": [21, 22, 2, 25],
                        "tuesday": [24, 26, 18, 7],
                        "wednesday": [26, 27, 19, 22],
                        "thursday": [29, 30, 21, 25],
                        "friday": [1, 3, 4, 6],
                        "saturday": [3, 5, 9, 12],
                        "sunday": [5, 7, 8, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 368,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/tensioni-formali-da-instabilit-luminosa-1967.jpg',
                    title: 'Tensioni formali da instabilità luminosa',
                    artist: 'Mario Ballocco',
                    year: '1967',
                    rule: {
                        "monday": [5, 7, 8, 11],
                        "tuesday": [21, 22, 2, 25],
                        "wednesday": [24, 26, 18, 7],
                        "thursday": [26, 27, 19, 22],
                        "friday": [29, 30, 21, 25],
                        "saturday": [1, 3, 4, 6],
                        "sunday": [3, 5, 9, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 369,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/happy-day-1947.jpg',
                    title: 'Happy Day',
                    artist: 'Willi Baumeister',
                    year: '1947',
                    rule: {
                        "monday": [3, 5, 9, 12],
                        "tuesday": [5, 7, 8, 11],
                        "wednesday": [21, 22, 2, 25],
                        "thursday": [24, 26, 18, 7],
                        "friday": [26, 27, 19, 22],
                        "saturday": [29, 30, 21, 25],
                        "sunday": [1, 3, 4, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 370,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-salamander-1984.jpg',
                    title: 'The Salamander',
                    artist: 'Vasile Dobrian',
                    year: '1984',
                    rule: {
                        "monday": [1, 3, 4, 6],
                        "tuesday": [3, 5, 9, 12],
                        "wednesday": [5, 7, 8, 11],
                        "thursday": [21, 22, 2, 25],
                        "friday": [24, 26, 18, 7],
                        "saturday": [26, 27, 19, 22],
                        "sunday": [29, 30, 21, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 371,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/adam-and-eve-2-1970.jpg',
                    title: 'Adam and Eve (#2)',
                    artist: 'Frederick Hammersley',
                    year: '1970',
                    rule: {
                        "monday": [30, 31, 22, 26],
                        "tuesday": [2, 4, 5, 7],
                        "wednesday": [4, 6, 10, 13],
                        "thursday": [6, 8, 9, 12],
                        "friday": [22, 23, 3, 26],
                        "saturday": [25, 27, 19, 8],
                        "sunday": [27, 28, 20, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 372,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/number-2-1950.jpg',
                    title: 'Number 2',
                    artist: 'Bradley Walker Tomlin',
                    year: '1950',
                    rule: {
                        "monday": [27, 28, 20, 23],
                        "tuesday": [30, 31, 22, 26],
                        "wednesday": [2, 4, 5, 7],
                        "thursday": [4, 6, 10, 13],
                        "friday": [6, 8, 9, 12],
                        "saturday": [22, 23, 3, 26],
                        "sunday": [25, 27, 19, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 373,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/abstra-o-1993.jpg',
                    title: 'Abstração',
                    artist: 'Amilcar de Castro',
                    year: '1993',
                    rule: {
                        "monday": [25, 27, 19, 8],
                        "tuesday": [27, 28, 20, 23],
                        "wednesday": [30, 31, 22, 26],
                        "thursday": [2, 4, 5, 7],
                        "friday": [4, 6, 10, 13],
                        "saturday": [6, 8, 9, 12],
                        "sunday": [22, 23, 3, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 374,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/dark-brown-orange-and-white-1963.jpg',
                    title: 'Dark Brown, Orange and White',
                    artist: 'William Scott',
                    year: '1963',
                    rule: {
                        "monday": [22, 23, 3, 26],
                        "tuesday": [25, 27, 19, 8],
                        "wednesday": [27, 28, 20, 23],
                        "thursday": [30, 31, 22, 26],
                        "friday": [2, 4, 5, 7],
                        "saturday": [4, 6, 10, 13],
                        "sunday": [6, 8, 9, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 375,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/moon-s-milk-2009.jpg',
                    title: 'Moon\'s Milk',
                    artist: 'John Hoyland',
                    year: '2009',
                    rule: {
                        "monday": [6, 8, 9, 12],
                        "tuesday": [22, 23, 3, 26],
                        "wednesday": [25, 27, 19, 8],
                        "thursday": [27, 28, 20, 23],
                        "friday": [30, 31, 22, 26],
                        "saturday": [2, 4, 5, 7],
                        "sunday": [4, 6, 10, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 376,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/palabras-sin-contenido-el-percutor-2016.jpg',
                    title: 'Words Without Content. The Percutor',
                    artist: 'Chicote CFC',
                    year: '2016',
                    rule: {
                        "monday": [4, 6, 10, 13],
                        "tuesday": [6, 8, 9, 12],
                        "wednesday": [22, 23, 3, 26],
                        "thursday": [25, 27, 19, 8],
                        "friday": [27, 28, 20, 23],
                        "saturday": [30, 31, 22, 26],
                        "sunday": [2, 4, 5, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 377,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/abstraction-white-rose.jpg',
                    title: 'Abstraction White Rose',
                    artist: 'Georgia O\'Keeffe',
                    year: '1927',
                    rule: {
                        "monday": [2, 4, 5, 7],
                        "tuesday": [4, 6, 10, 13],
                        "wednesday": [6, 8, 9, 12],
                        "thursday": [22, 23, 3, 26],
                        "friday": [25, 27, 19, 8],
                        "saturday": [27, 28, 20, 23],
                        "sunday": [30, 31, 22, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 378,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/variation-field-of-tulips-1916.jpg',
                    title: 'Variation: Field of Tulips',
                    artist: 'Alexej von Jawlensky',
                    year: '1916',
                    rule: {
                        "monday": [31, 1, 23, 27],
                        "tuesday": [3, 5, 6, 8],
                        "wednesday": [5, 7, 11, 14],
                        "thursday": [7, 9, 10, 11],
                        "friday": [23, 24, 4, 27],
                        "saturday": [26, 28, 20, 9],
                        "sunday": [31, 29, 21, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 379,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/indian-summer-1941.jpg',
                    title: 'Indian Summer',
                    artist: 'Arthur Dove',
                    year: '1941',
                    rule: {
                        "monday": [31, 29, 21, 24],
                        "tuesday": [31, 1, 23, 27],
                        "wednesday": [3, 5, 6, 8],
                        "thursday": [5, 7, 11, 14],
                        "friday": [7, 9, 10, 11],
                        "saturday": [23, 24, 4, 27],
                        "sunday": [26, 28, 20, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 380,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/soulflowers.jpg',
                    title: 'Soulflowers',
                    artist: 'Janos Mattis-Teutsch',
                    year: '?',
                    rule: {
                        "monday": [26, 28, 20, 9],
                        "tuesday": [31, 29, 21, 24],
                        "wednesday": [31, 1, 23, 27],
                        "thursday": [3, 5, 6, 8],
                        "friday": [5, 7, 11, 14],
                        "saturday": [7, 9, 10, 11],
                        "sunday": [23, 24, 4, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 381,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/sage-3-1968.jpg',
                    title: 'Sage #3',
                    artist: 'Walter Darby Bannard',
                    year: '1968',
                    rule: {
                        "monday": [23, 24, 4, 27],
                        "tuesday": [26, 28, 20, 9],
                        "wednesday": [31, 29, 21, 24],
                        "thursday": [31, 1, 23, 27],
                        "friday": [3, 5, 6, 8],
                        "saturday": [5, 7, 11, 14],
                        "sunday": [7, 9, 10, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 382,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled.jpg',
                    title: 'Untitled',
                    artist: 'Abdul Qader Al Raes',
                    year: 'XX Cent.',
                    rule: {
                        "monday": [7, 9, 10, 11],
                        "tuesday": [23, 24, 4, 27],
                        "wednesday": [26, 28, 20, 9],
                        "thursday": [31, 29, 21, 24],
                        "friday": [31, 1, 23, 27],
                        "saturday": [3, 5, 6, 8],
                        "sunday": [5, 7, 11, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 383,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/din-1969.jpg',
                    title: 'DIN',
                    artist: 'Vladimir Bonacic',
                    year: '1969',
                    rule: {
                        "monday": [5, 7, 11, 14],
                        "tuesday": [7, 9, 10, 11],
                        "wednesday": [23, 24, 4, 27],
                        "thursday": [26, 28, 20, 9],
                        "friday": [31, 29, 21, 24],
                        "saturday": [31, 1, 23, 27],
                        "sunday": [3, 5, 6, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 384,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-2012.jpg',
                    title: 'Untitled',
                    artist: 'Aki Kuroda',
                    year: '2012',
                    rule: {
                        "monday": [3, 5, 6, 8],
                        "tuesday": [5, 7, 11, 14],
                        "wednesday": [7, 9, 10, 11],
                        "thursday": [23, 24, 4, 27],
                        "friday": [26, 28, 20, 9],
                        "saturday": [31, 29, 21, 24],
                        "sunday": [31, 1, 23, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 385,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/intersuperficie-curva-bianca-1969.jpg',
                    title: 'Intersuperficie curva bianca',
                    artist: 'Paolo Scheggi',
                    year: '1969',
                    rule: {
                        "monday": [1, 2, 24, 28],
                        "tuesday": [4, 6, 7, 9],
                        "wednesday": [6, 8, 12, 15],
                        "thursday": [8, 10, 11, 12],
                        "friday": [24, 25, 5, 28],
                        "saturday": [27, 29, 21, 10],
                        "sunday": [1, 30, 22, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 386,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/opus-ii-n-40-1961.jpg',
                    title: 'Opus II nº 40',
                    artist: 'Antonio Areal',
                    year: '1961',
                    rule: {
                        "monday": [1, 30, 22, 25],
                        "tuesday": [1, 2, 24, 28],
                        "wednesday": [4, 6, 7, 9],
                        "thursday": [6, 8, 12, 15],
                        "friday": [8, 10, 11, 12],
                        "saturday": [24, 25, 5, 28],
                        "sunday": [27, 29, 21, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 387,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/fall-1964.jpg',
                    title: 'Fall',
                    artist: 'Bernard Cohen',
                    year: '1964',
                    rule: {
                        "monday": [27, 29, 21, 10],
                        "tuesday": [1, 30, 22, 25],
                        "wednesday": [1, 2, 24, 28],
                        "thursday": [4, 6, 7, 9],
                        "friday": [6, 8, 12, 15],
                        "saturday": [8, 10, 11, 12],
                        "sunday": [24, 25, 5, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 388,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/city-landscape-1955(1).jpg',
                    title: 'City Landscape',
                    artist: 'Joan Mitchell',
                    year: '1955',
                    rule: {
                        "monday": [24, 25, 5, 28],
                        "tuesday": [27, 29, 21, 10],
                        "wednesday": [1, 30, 22, 25],
                        "thursday": [1, 2, 24, 28],
                        "friday": [4, 6, 7, 9],
                        "saturday": [6, 8, 12, 15],
                        "sunday": [8, 10, 11, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 389,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/suite-reacci-1970.jpg',
                    title: 'Suite Reacció',
                    artist: 'Joan Ponc',
                    year: '1970',
                    rule: {
                        "monday": [8, 10, 11, 12],
                        "tuesday": [24, 25, 5, 28],
                        "wednesday": [27, 29, 21, 10],
                        "thursday": [1, 30, 22, 25],
                        "friday": [1, 2, 24, 28],
                        "saturday": [4, 6, 7, 9],
                        "sunday": [6, 8, 12, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 390,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/yellow-white-sun-1959.jpg',
                    title: 'Yellow White [Sun]',
                    artist: 'Leon Polk Smith',
                    year: '1959',
                    rule: {
                        "monday": [6, 8, 12, 15],
                        "tuesday": [8, 10, 11, 12],
                        "wednesday": [24, 25, 5, 28],
                        "thursday": [27, 29, 21, 10],
                        "friday": [1, 30, 22, 25],
                        "saturday": [1, 2, 24, 28],
                        "sunday": [4, 6, 7, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 391,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/tomorrow-s-apples-5-in-white-1965.jpg',
                    title: 'Tomorrow\'s Apples (5 in White)',
                    artist: 'Eva Hesse',
                    year: '1965',
                    rule: {
                        "monday": [4, 6, 7, 9],
                        "tuesday": [6, 8, 12, 15],
                        "wednesday": [8, 10, 11, 12],
                        "thursday": [24, 25, 5, 28],
                        "friday": [27, 29, 21, 10],
                        "saturday": [1, 30, 22, 25],
                        "sunday": [1, 2, 24, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 392,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/on-white-ii-1923.jpg',
                    title: 'On White II',
                    artist: 'Wassily Kandinsky',
                    year: '1923',
                    rule: {
                        "monday": [2, 3, 25, 29],
                        "tuesday": [5, 7, 8, 10],
                        "wednesday": [7, 9, 13, 16],
                        "thursday": [9, 11, 12, 13],
                        "friday": [25, 26, 6, 29],
                        "saturday": [28, 30, 22, 11],
                        "sunday": [2, 31, 23, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 393,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/espiral-laranja.jpg',
                    title: 'Espiral Laranja',
                    artist: 'Rubem Ludolf',
                    year: 'XX - XXI Cent.',
                    rule: {
                        "monday": [2, 31, 23, 26],
                        "tuesday": [2, 3, 25, 29],
                        "wednesday": [5, 7, 8, 10],
                        "thursday": [7, 9, 13, 16],
                        "friday": [9, 11, 12, 13],
                        "saturday": [25, 26, 6, 29],
                        "sunday": [28, 30, 22, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 394,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/can-be-joined-any-way-2002.jpg',
                    title: 'Can be joined any way',
                    artist: 'Harriet Korman',
                    year: '2002',
                    rule: {
                        "monday": [28, 30, 22, 11],
                        "tuesday": [2, 31, 23, 26],
                        "wednesday": [2, 3, 25, 29],
                        "thursday": [5, 7, 8, 10],
                        "friday": [7, 9, 13, 16],
                        "saturday": [9, 11, 12, 13],
                        "sunday": [25, 26, 6, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 395,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/optical-painting-1964.jpg',
                    title: 'Optical Painting',
                    artist: 'Wen-Ying Tsai',
                    year: '1964',
                    rule: {
                        "monday": [25, 26, 6, 29],
                        "tuesday": [28, 30, 22, 11],
                        "wednesday": [2, 31, 23, 26],
                        "thursday": [2, 3, 25, 29],
                        "friday": [5, 7, 8, 10],
                        "saturday": [7, 9, 13, 16],
                        "sunday": [9, 11, 12, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 396,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/voix-du-jura-n-3296-2008.jpg',
                    title: 'Voix du Jura n°3296',
                    artist: 'Jean-Francois Dubreuil',
                    year: '2008',
                    rule: {
                        "monday": [9, 11, 12, 13],
                        "tuesday": [25, 26, 6, 29],
                        "wednesday": [28, 30, 22, 11],
                        "thursday": [2, 31, 23, 26],
                        "friday": [2, 3, 25, 29],
                        "saturday": [5, 7, 8, 10],
                        "sunday": [7, 9, 13, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 397,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-26.jpg',
                    title: 'Composition 26',
                    artist: 'Stefan Sevastre',
                    year: '?',
                    rule: {
                        "monday": [7, 9, 13, 16],
                        "tuesday": [9, 11, 12, 13],
                        "wednesday": [25, 26, 6, 29],
                        "thursday": [28, 30, 22, 11],
                        "friday": [2, 31, 23, 26],
                        "saturday": [2, 3, 25, 29],
                        "sunday": [5, 7, 8, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 398,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/season-s-greeting-card-1968.jpg',
                    title: '[Season\'s greeting card]',
                    artist: 'Friedrich Vordemberge-Gildewart',
                    year: '1968',
                    rule: {
                        "monday": [5, 7, 8, 10],
                        "tuesday": [7, 9, 13, 16],
                        "wednesday": [9, 11, 12, 13],
                        "thursday": [25, 26, 6, 29],
                        "friday": [28, 30, 22, 11],
                        "saturday": [2, 31, 23, 26],
                        "sunday": [2, 3, 25, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 399,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/six-open-forms-1971.jpg',
                    title: 'Six Open Forms',
                    artist: 'William Scott',
                    year: '1971',
                    rule: {
                        "monday": [3, 4, 26, 30],
                        "tuesday": [6, 8, 9, 11],
                        "wednesday": [8, 10, 14, 17],
                        "thursday": [10, 12, 13, 14],
                        "friday": [26, 27, 7, 30],
                        "saturday": [29, 31, 23, 12],
                        "sunday": [3, 1, 24, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 400,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/atmosph-re-chromoplastique-n-109-1963.jpg',
                    title: 'Atmosphère chromoplastique N° 109',
                    artist: 'Luis Tomasello',
                    year: '1963',
                    rule: {
                        "monday": [3, 1, 24, 27],
                        "tuesday": [3, 4, 26, 30],
                        "wednesday": [6, 8, 9, 11],
                        "thursday": [8, 10, 14, 17],
                        "friday": [10, 12, 13, 14],
                        "saturday": [26, 27, 7, 30],
                        "sunday": [29, 31, 23, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 401,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/to-draw-on-1977.jpg',
                    title: 'To Draw On',
                    artist: 'Denise Green',
                    year: '1977',
                    rule: {
                        "monday": [29, 31, 23, 12],
                        "tuesday": [3, 1, 24, 27],
                        "wednesday": [3, 4, 26, 30],
                        "thursday": [6, 8, 9, 11],
                        "friday": [8, 10, 14, 17],
                        "saturday": [10, 12, 13, 14],
                        "sunday": [26, 27, 7, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 402,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/red-rain-1967.jpg',
                    title: 'Red Rain',
                    artist: 'Forrest Bess',
                    year: '1967',
                    rule: {
                        "monday": [26, 27, 7, 30],
                        "tuesday": [29, 31, 23, 12],
                        "wednesday": [3, 1, 24, 27],
                        "thursday": [3, 4, 26, 30],
                        "friday": [6, 8, 9, 11],
                        "saturday": [8, 10, 14, 17],
                        "sunday": [10, 12, 13, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 403,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/connection-1978.jpg',
                    title: 'Connection',
                    artist: 'Miriam Schapiro',
                    year: '1978',
                    rule: {
                        "monday": [10, 12, 13, 14],
                        "tuesday": [26, 27, 7, 30],
                        "wednesday": [29, 31, 23, 12],
                        "thursday": [3, 1, 24, 27],
                        "friday": [3, 4, 26, 30],
                        "saturday": [6, 8, 9, 11],
                        "sunday": [8, 10, 14, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 404,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/karin-1976.jpg',
                    title: 'Karin',
                    artist: 'Kazuo Shiraga',
                    year: '1976',
                    rule: {
                        "monday": [8, 10, 14, 17],
                        "tuesday": [10, 12, 13, 14],
                        "wednesday": [26, 27, 7, 30],
                        "thursday": [29, 31, 23, 12],
                        "friday": [3, 1, 24, 27],
                        "saturday": [3, 4, 26, 30],
                        "sunday": [6, 8, 9, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 405,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/painting-1974.jpg',
                    title: 'Painting',
                    artist: 'Roberto Aizenberg',
                    year: '1974',
                    rule: {
                        "monday": [6, 8, 9, 11],
                        "tuesday": [8, 10, 14, 17],
                        "wednesday": [10, 12, 13, 14],
                        "thursday": [26, 27, 7, 30],
                        "friday": [29, 31, 23, 12],
                        "saturday": [3, 1, 24, 27],
                        "sunday": [3, 4, 26, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 406,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/inner-space-1986-2.jpg',
                    title: 'Inner Space',
                    artist: 'Luciano Bartolini',
                    year: '1986',
                    rule: {
                        "monday": [4, 5, 27, 31],
                        "tuesday": [7, 9, 10, 12],
                        "wednesday": [9, 11, 15, 18],
                        "thursday": [11, 13, 14, 15],
                        "friday": [27, 28, 8, 31],
                        "saturday": [30, 1, 24, 13],
                        "sunday": [4, 2, 25, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 407,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-collage-1979.jpg',
                    title: 'Untitled Collage',
                    artist: 'Robert Nickle',
                    year: '1979',
                    rule: {
                        "monday": [4, 2, 25, 28],
                        "tuesday": [4, 5, 27, 31],
                        "wednesday": [7, 9, 10, 12],
                        "thursday": [9, 11, 15, 18],
                        "friday": [11, 13, 14, 15],
                        "saturday": [27, 28, 8, 31],
                        "sunday": [30, 1, 24, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 408,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition.jpg',
                    title: 'Composition',
                    artist: 'Francois Rouan',
                    year: '?',
                    rule: {
                        "monday": [30, 1, 24, 13],
                        "tuesday": [4, 2, 25, 28],
                        "wednesday": [4, 5, 27, 31],
                        "thursday": [7, 9, 10, 12],
                        "friday": [9, 11, 15, 18],
                        "saturday": [11, 13, 14, 15],
                        "sunday": [27, 28, 8, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 409,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-and-picture-1919.jpg',
                    title: 'The And-Picture',
                    artist: 'Kurt Schwitters',
                    year: '1919',
                    rule: {
                        "monday": [27, 28, 8, 31],
                        "tuesday": [30, 1, 24, 13],
                        "wednesday": [4, 2, 25, 28],
                        "thursday": [4, 5, 27, 31],
                        "friday": [7, 9, 10, 12],
                        "saturday": [9, 11, 15, 18],
                        "sunday": [11, 13, 14, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 410,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/komposition-in-schwarz-und-wei-1936.jpg',
                    title: 'Komposition in Schwarz und Weiß',
                    artist: 'Otto Freundlich',
                    year: '1936',
                    rule: {
                        "monday": [11, 13, 14, 15],
                        "tuesday": [27, 28, 8, 31],
                        "wednesday": [30, 1, 24, 13],
                        "thursday": [4, 2, 25, 28],
                        "friday": [4, 5, 27, 31],
                        "saturday": [7, 9, 10, 12],
                        "sunday": [9, 11, 15, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 411,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composizione-dada.jpg',
                    title: 'Composizione Dada',
                    artist: 'Julius Evola',
                    year: '?',
                    rule: {
                        "monday": [9, 11, 15, 18],
                        "tuesday": [11, 13, 14, 15],
                        "wednesday": [27, 28, 8, 31],
                        "thursday": [30, 1, 24, 13],
                        "friday": [4, 2, 25, 28],
                        "saturday": [4, 5, 27, 31],
                        "sunday": [7, 9, 10, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 412,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/vincent-s-moon-11-7-07-2007.jpg',
                    title: 'Vincent\'s Moon - 11.7.07',
                    artist: 'John Hoyland',
                    year: '2007',
                    rule: {
                        "monday": [7, 9, 10, 12],
                        "tuesday": [9, 11, 15, 18],
                        "wednesday": [11, 13, 14, 15],
                        "thursday": [27, 28, 8, 31],
                        "friday": [30, 1, 24, 13],
                        "saturday": [4, 2, 25, 28],
                        "sunday": [4, 5, 27, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 413,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/formas.jpg',
                    title: 'Formas',
                    artist: 'Almir Mavignier',
                    year: '?',
                    rule: {
                        "monday": [5, 6, 28, 1],
                        "tuesday": [8, 10, 11, 13],
                        "wednesday": [10, 12, 16, 19],
                        "thursday": [12, 14, 15, 16],
                        "friday": [28, 29, 9, 1],
                        "saturday": [31, 2, 25, 14],
                        "sunday": [5, 3, 26, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 414,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/polyptych-m-1968.jpg',
                    title: 'Polyptych M',
                    artist: 'Alberto Biasi',
                    year: '1968',
                    rule: {
                        "monday": [5, 3, 26, 29],
                        "tuesday": [5, 6, 28, 1],
                        "wednesday": [8, 10, 11, 13],
                        "thursday": [10, 12, 16, 19],
                        "friday": [12, 14, 15, 16],
                        "saturday": [28, 29, 9, 1],
                        "sunday": [31, 2, 25, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 415,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/echoed-forms-1947.jpg',
                    title: 'Echoed Forms',
                    artist: 'Boris Margo',
                    year: '1947',
                    rule: {
                        "monday": [31, 2, 25, 14],
                        "tuesday": [5, 3, 26, 29],
                        "wednesday": [5, 6, 28, 1],
                        "thursday": [8, 10, 11, 13],
                        "friday": [10, 12, 16, 19],
                        "saturday": [12, 14, 15, 16],
                        "sunday": [28, 29, 9, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 416,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/folium-argentum-1968.jpg',
                    title: 'Folium Argentum',
                    artist: 'Heinz Mack',
                    year: '1968',
                    rule: {
                        "monday": [28, 29, 9, 1],
                        "tuesday": [31, 2, 25, 14],
                        "wednesday": [5, 3, 26, 29],
                        "thursday": [5, 6, 28, 1],
                        "friday": [8, 10, 11, 13],
                        "saturday": [10, 12, 16, 19],
                        "sunday": [12, 14, 15, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 417,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/end-gable-1972.jpg',
                    title: 'End Gable',
                    artist: 'Leon Polk Smith',
                    year: '1972',
                    rule: {
                        "monday": [12, 14, 15, 16],
                        "tuesday": [28, 29, 9, 1],
                        "wednesday": [31, 2, 25, 14],
                        "thursday": [5, 3, 26, 29],
                        "friday": [5, 6, 28, 1],
                        "saturday": [8, 10, 11, 13],
                        "sunday": [10, 12, 16, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 418,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/675-73-sequenz-kalt-warm-portrait-der-farbe-cerise-1973.jpg',
                    title: '675/73 (Sequenz Kalt Warm – Portrait der Farbe Cerise)',
                    artist: 'Rupprecht Geiger',
                    year: '1973',
                    rule: {
                        "monday": [10, 12, 16, 19],
                        "tuesday": [12, 14, 15, 16],
                        "wednesday": [28, 29, 9, 1],
                        "thursday": [31, 2, 25, 14],
                        "friday": [5, 3, 26, 29],
                        "saturday": [5, 6, 28, 1],
                        "sunday": [8, 10, 11, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 419,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/pygmalion-1979.jpg',
                    title: 'Pygmalion',
                    artist: 'Norman Bluhm',
                    year: '1979',
                    rule: {
                        "monday": [8, 10, 11, 13],
                        "tuesday": [10, 12, 16, 19],
                        "wednesday": [12, 14, 15, 16],
                        "thursday": [28, 29, 9, 1],
                        "friday": [31, 2, 25, 14],
                        "saturday": [5, 3, 26, 29],
                        "sunday": [5, 6, 28, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 420,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/battal-ebru-4.jpg',
                    title: 'Battal Ebru',
                    artist: 'Mustafa Duzgunman',
                    year: '?',
                    rule: {
                        "monday": [6, 7, 29, 2],
                        "tuesday": [9, 11, 12, 14],
                        "wednesday": [11, 13, 17, 20],
                        "thursday": [13, 15, 16, 17],
                        "friday": [29, 30, 10, 2],
                        "saturday": [1, 3, 26, 15],
                        "sunday": [6, 4, 27, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 421,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-after-joan-mir-1985.jpg',
                    title: 'Untitled (After Joan Miró)',
                    artist: 'Sherrie Levine',
                    year: '1985',
                    rule: {
                        "monday": [6, 4, 27, 30],
                        "tuesday": [6, 7, 29, 2],
                        "wednesday": [9, 11, 12, 14],
                        "thursday": [11, 13, 17, 20],
                        "friday": [13, 15, 16, 17],
                        "saturday": [29, 30, 10, 2],
                        "sunday": [1, 3, 26, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 422,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-changeling-1964.jpg',
                    title: 'The Changeling',
                    artist: 'John Ferren',
                    year: '1964',
                    rule: {
                        "monday": [1, 3, 26, 15],
                        "tuesday": [6, 4, 27, 30],
                        "wednesday": [6, 7, 29, 2],
                        "thursday": [9, 11, 12, 14],
                        "friday": [11, 13, 17, 20],
                        "saturday": [13, 15, 16, 17],
                        "sunday": [29, 30, 10, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 423,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-no-56.jpg',
                    title: 'Composition No. 56',
                    artist: 'Friedrich Vordemberge-Gildewart',
                    year: '?',
                    rule: {
                        "monday": [29, 30, 10, 2],
                        "tuesday": [1, 3, 26, 15],
                        "wednesday": [6, 4, 27, 30],
                        "thursday": [6, 7, 29, 2],
                        "friday": [9, 11, 12, 14],
                        "saturday": [11, 13, 17, 20],
                        "sunday": [13, 15, 16, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 424,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/ra-2-1981.jpg',
                    title: 'RA 2',
                    artist: 'Bridget Riley',
                    year: '1981',
                    rule: {
                        "monday": [13, 15, 16, 17],
                        "tuesday": [29, 30, 10, 2],
                        "wednesday": [1, 3, 26, 15],
                        "thursday": [6, 4, 27, 30],
                        "friday": [6, 7, 29, 2],
                        "saturday": [9, 11, 12, 14],
                        "sunday": [11, 13, 17, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 425,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/a-mediod-a-1967.jpg',
                    title: 'A mediodía',
                    artist: 'Lilia Carrillo',
                    year: '1967',
                    rule: {
                        "monday": [11, 13, 17, 20],
                        "tuesday": [13, 15, 16, 17],
                        "wednesday": [29, 30, 10, 2],
                        "thursday": [1, 3, 26, 15],
                        "friday": [6, 4, 27, 30],
                        "saturday": [6, 7, 29, 2],
                        "sunday": [9, 11, 12, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 426,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/music-of-the-jaguar-1977.jpg',
                    title: 'Music of the Jaguar',
                    artist: 'Alice Baber',
                    year: '1977',
                    rule: {
                        "monday": [9, 11, 12, 14],
                        "tuesday": [11, 13, 17, 20],
                        "wednesday": [13, 15, 16, 17],
                        "thursday": [29, 30, 10, 2],
                        "friday": [1, 3, 26, 15],
                        "saturday": [6, 4, 27, 30],
                        "sunday": [6, 7, 29, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 427,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/autunno-1982.jpg',
                    title: 'Autunno',
                    artist: 'Antonio Corpora',
                    year: '1982',
                    rule: {
                        "monday": [7, 8, 30, 3],
                        "tuesday": [10, 12, 13, 15],
                        "wednesday": [12, 14, 18, 21],
                        "thursday": [14, 16, 17, 18],
                        "friday": [30, 31, 11, 3],
                        "saturday": [2, 4, 27, 16],
                        "sunday": [7, 5, 28, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 428,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/nocturno-de-veneza-i.jpg',
                    title: 'Nocturno de Veneza I',
                    artist: 'Gil Teixeira Lopes',
                    year: 'xx cent.',
                    rule: {
                        "monday": [7, 5, 28, 31],
                        "tuesday": [7, 8, 30, 3],
                        "wednesday": [10, 12, 13, 15],
                        "thursday": [12, 14, 18, 21],
                        "friday": [14, 16, 17, 18],
                        "saturday": [30, 31, 11, 3],
                        "sunday": [2, 4, 27, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 429,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/pink-colour-with-brown-1986.jpg',
                    title: 'Pink Colour with Brown',
                    artist: 'Peter Joseph',
                    year: '1986',
                    rule: {
                        "monday": [2, 4, 27, 16],
                        "tuesday": [7, 5, 28, 31],
                        "wednesday": [7, 8, 30, 3],
                        "thursday": [10, 12, 13, 15],
                        "friday": [12, 14, 18, 21],
                        "saturday": [14, 16, 17, 18],
                        "sunday": [30, 31, 11, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 430,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/marrakech.jpg',
                    title: 'Marrakech',
                    artist: 'Brion Gysin',
                    year: '?',
                    rule: {
                        "monday": [30, 31, 11, 3],
                        "tuesday": [2, 4, 27, 16],
                        "wednesday": [7, 5, 28, 31],
                        "thursday": [7, 8, 30, 3],
                        "friday": [10, 12, 13, 15],
                        "saturday": [12, 14, 18, 21],
                        "sunday": [14, 16, 17, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 431,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/football-3-1950.jpg',
                    title: 'Football #3',
                    artist: 'Louis Schanker',
                    year: '1950',
                    rule: {
                        "monday": [14, 16, 17, 18],
                        "tuesday": [30, 31, 11, 3],
                        "wednesday": [2, 4, 27, 16],
                        "thursday": [7, 5, 28, 31],
                        "friday": [7, 8, 30, 3],
                        "saturday": [10, 12, 13, 15],
                        "sunday": [12, 14, 18, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 432,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/into-space-3-1957.jpg',
                    title: 'Into Space 3',
                    artist: 'Kazuo Nakamura',
                    year: '1957',
                    rule: {
                        "monday": [12, 14, 18, 21],
                        "tuesday": [14, 16, 17, 18],
                        "wednesday": [30, 31, 11, 3],
                        "thursday": [2, 4, 27, 16],
                        "friday": [7, 5, 28, 31],
                        "saturday": [7, 8, 30, 3],
                        "sunday": [10, 12, 13, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 433,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/origin-1956.jpg',
                    title: 'Origin',
                    artist: 'Jay DeFeo',
                    year: '1956',
                    rule: {
                        "monday": [10, 12, 13, 15],
                        "tuesday": [12, 14, 18, 21],
                        "wednesday": [14, 16, 17, 18],
                        "thursday": [30, 31, 11, 3],
                        "friday": [2, 4, 27, 16],
                        "saturday": [7, 5, 28, 31],
                        "sunday": [7, 8, 30, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 434,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/blue-sky-painting-1960.jpg',
                    title: 'Blue Sky Painting',
                    artist: 'Sam Francis',
                    year: '1960',
                    rule: {
                        "monday": [8, 9, 31, 4],
                        "tuesday": [11, 13, 14, 16],
                        "wednesday": [13, 15, 19, 22],
                        "thursday": [15, 17, 18, 19],
                        "friday": [31, 1, 12, 4],
                        "saturday": [3, 5, 28, 17],
                        "sunday": [8, 6, 29, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 435,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/middle-blue-iii-1959.jpg',
                    title: 'Middle Blue III',
                    artist: 'Sam Francis',
                    year: '1959',
                    rule: {
                        "monday": [8, 6, 29, 1],
                        "tuesday": [8, 9, 31, 4],
                        "wednesday": [11, 13, 14, 16],
                        "thursday": [13, 15, 19, 22],
                        "friday": [15, 17, 18, 19],
                        "saturday": [31, 1, 12, 4],
                        "sunday": [3, 5, 28, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 436,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/induzione-figurale-del-rettangolo-in-diagonale-sfalsata-1977.jpg',
                    title: 'Induzione figurale (del rettangolo in diagonale) sfalsata',
                    artist: 'Mario Ballocco',
                    year: '1977',
                    rule: {
                        "monday": [3, 5, 28, 17],
                        "tuesday": [8, 6, 29, 1],
                        "wednesday": [8, 9, 31, 4],
                        "thursday": [11, 13, 14, 16],
                        "friday": [13, 15, 19, 22],
                        "saturday": [15, 17, 18, 19],
                        "sunday": [31, 1, 12, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 437,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/vista-1963-1.jpg',
                    title: 'Vista',
                    artist: 'Richard Smith',
                    year: '1963',
                    rule: {
                        "monday": [31, 1, 12, 4],
                        "tuesday": [3, 5, 28, 17],
                        "wednesday": [8, 6, 29, 1],
                        "thursday": [8, 9, 31, 4],
                        "friday": [11, 13, 14, 16],
                        "saturday": [13, 15, 19, 22],
                        "sunday": [15, 17, 18, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 438,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/calan-1975.jpg',
                    title: 'Calan',
                    artist: 'Mario Prassinos',
                    year: '1975',
                    rule: {
                        "monday": [15, 17, 18, 19],
                        "tuesday": [31, 1, 12, 4],
                        "wednesday": [3, 5, 28, 17],
                        "thursday": [8, 6, 29, 1],
                        "friday": [8, 9, 31, 4],
                        "saturday": [11, 13, 14, 16],
                        "sunday": [13, 15, 19, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 439,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/crossfield-i-1968.jpg',
                    title: 'Crossfield I',
                    artist: 'Jack Tworkov',
                    year: '1968',
                    rule: {
                        "monday": [13, 15, 19, 22],
                        "tuesday": [15, 17, 18, 19],
                        "wednesday": [31, 1, 12, 4],
                        "thursday": [3, 5, 28, 17],
                        "friday": [8, 6, 29, 1],
                        "saturday": [8, 9, 31, 4],
                        "sunday": [11, 13, 14, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 440,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/po-me-no-7-landscape-of-may-1948.jpg',
                    title: 'Poème No. 7: Landscape of May',
                    artist: 'Koshiro Onchi',
                    year: '1948',
                    rule: {
                        "monday": [11, 13, 14, 16],
                        "tuesday": [13, 15, 19, 22],
                        "wednesday": [15, 17, 18, 19],
                        "thursday": [31, 1, 12, 4],
                        "friday": [3, 5, 28, 17],
                        "saturday": [8, 6, 29, 1],
                        "sunday": [8, 9, 31, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 441,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/r-tine-ma-jolie-1969.jpg',
                    title: 'Rétine ma jolie',
                    artist: 'Marcel Barbeau',
                    year: '1969',
                    rule: {
                        "monday": [9, 10, 1, 5],
                        "tuesday": [12, 14, 15, 17],
                        "wednesday": [14, 16, 20, 23],
                        "thursday": [16, 18, 19, 20],
                        "friday": [1, 2, 13, 5],
                        "saturday": [4, 6, 29, 18],
                        "sunday": [9, 7, 30, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 442,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/foley-1967.jpg',
                    title: 'Foley',
                    artist: 'Ron Gorchov',
                    year: '1967',
                    rule: {
                        "monday": [9, 7, 30, 2],
                        "tuesday": [9, 10, 1, 5],
                        "wednesday": [12, 14, 15, 17],
                        "thursday": [14, 16, 20, 23],
                        "friday": [16, 18, 19, 20],
                        "saturday": [1, 2, 13, 5],
                        "sunday": [4, 6, 29, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 443,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/volumi-blu-1964.jpg',
                    title: 'Volumi (blu)',
                    artist: 'Paolo Scheggi',
                    year: '1964',
                    rule: {
                        "monday": [4, 6, 29, 18],
                        "tuesday": [9, 7, 30, 2],
                        "wednesday": [9, 10, 1, 5],
                        "thursday": [12, 14, 15, 17],
                        "friday": [14, 16, 20, 23],
                        "saturday": [16, 18, 19, 20],
                        "sunday": [1, 2, 13, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 444,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/red-4-1990.jpg',
                    title: 'Red 4',
                    artist: 'Jurgen Partenheimer',
                    year: '1990',
                    rule: {
                        "monday": [1, 2, 13, 5],
                        "tuesday": [4, 6, 29, 18],
                        "wednesday": [9, 7, 30, 2],
                        "thursday": [9, 10, 1, 5],
                        "friday": [12, 14, 15, 17],
                        "saturday": [14, 16, 20, 23],
                        "sunday": [16, 18, 19, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 445,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/dichotomic-organization-stripes-1959.jpg',
                    title: 'Dichotomic Organization: Stripes',
                    artist: 'Lorser Feitelson',
                    year: '1959',
                    rule: {
                        "monday": [16, 18, 19, 20],
                        "tuesday": [1, 2, 13, 5],
                        "wednesday": [4, 6, 29, 18],
                        "thursday": [9, 7, 30, 2],
                        "friday": [9, 10, 1, 5],
                        "saturday": [12, 14, 15, 17],
                        "sunday": [14, 16, 20, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 446,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/nude-1960.jpg',
                    title: 'Nude',
                    artist: 'Auguste Herbin',
                    year: '1960',
                    rule: {
                        "monday": [14, 16, 20, 23],
                        "tuesday": [16, 18, 19, 20],
                        "wednesday": [1, 2, 13, 5],
                        "thursday": [4, 6, 29, 18],
                        "friday": [9, 7, 30, 2],
                        "saturday": [9, 10, 1, 5],
                        "sunday": [12, 14, 15, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 447,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/surya-chandra-1-1986.jpg',
                    title: 'Surya-Chandra #1',
                    artist: 'Denise Green',
                    year: '1986',
                    rule: {
                        "monday": [12, 14, 15, 17],
                        "tuesday": [14, 16, 20, 23],
                        "wednesday": [16, 18, 19, 20],
                        "thursday": [1, 2, 13, 5],
                        "friday": [4, 6, 29, 18],
                        "saturday": [9, 7, 30, 2],
                        "sunday": [9, 10, 1, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 448,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1969.jpg',
                    title: 'Untitled',
                    artist: 'Kazuo Shiraga',
                    year: '1969',
                    rule: {
                        "monday": [10, 11, 2, 6],
                        "tuesday": [13, 15, 16, 18],
                        "wednesday": [15, 17, 21, 24],
                        "thursday": [17, 19, 20, 21],
                        "friday": [2, 3, 14, 6],
                        "saturday": [5, 7, 30, 19],
                        "sunday": [10, 8, 31, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 449,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/never-before-2001.jpg',
                    title: 'Never Before',
                    artist: 'Basil Beattie',
                    year: '2001',
                    rule: {
                        "monday": [10, 8, 31, 3],
                        "tuesday": [10, 11, 2, 6],
                        "wednesday": [13, 15, 16, 18],
                        "thursday": [15, 17, 21, 24],
                        "friday": [17, 19, 20, 21],
                        "saturday": [2, 3, 14, 6],
                        "sunday": [5, 7, 30, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 450,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/four-seasons-1980.jpg',
                    title: 'Four Seasons',
                    artist: 'Leo Valledor',
                    year: '1980',
                    rule: {
                        "monday": [5, 7, 30, 19],
                        "tuesday": [10, 8, 31, 3],
                        "wednesday": [10, 11, 2, 6],
                        "thursday": [13, 15, 16, 18],
                        "friday": [15, 17, 21, 24],
                        "saturday": [17, 19, 20, 21],
                        "sunday": [2, 3, 14, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 451,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled1963.jpg',
                    title: 'Untitled',
                    artist: 'Adolf Fleischmann',
                    year: '1963',
                    rule: {
                        "monday": [2, 3, 14, 6],
                        "tuesday": [5, 7, 30, 19],
                        "wednesday": [10, 8, 31, 3],
                        "thursday": [10, 11, 2, 6],
                        "friday": [13, 15, 16, 18],
                        "saturday": [15, 17, 21, 24],
                        "sunday": [17, 19, 20, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 452,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-with-one-grey-stripe-1958.jpg',
                    title: 'Composition with one grey stripe',
                    artist: 'Bart van der Leck',
                    year: '1958',
                    rule: {
                        "monday": [17, 19, 20, 21],
                        "tuesday": [2, 3, 14, 6],
                        "wednesday": [5, 7, 30, 19],
                        "thursday": [10, 8, 31, 3],
                        "friday": [10, 11, 2, 6],
                        "saturday": [13, 15, 16, 18],
                        "sunday": [15, 17, 21, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 453,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/contoy-1988.jpg',
                    title: 'Contoy',
                    artist: 'Peter Alexander',
                    year: '1988',
                    rule: {
                        "monday": [15, 17, 21, 24],
                        "tuesday": [17, 19, 20, 21],
                        "wednesday": [2, 3, 14, 6],
                        "thursday": [5, 7, 30, 19],
                        "friday": [10, 8, 31, 3],
                        "saturday": [10, 11, 2, 6],
                        "sunday": [13, 15, 16, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 454,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/bianco-1989.jpg',
                    title: 'Bianco',
                    artist: 'Agostino Bonalumi',
                    year: '1989',
                    rule: {
                        "monday": [13, 15, 16, 18],
                        "tuesday": [15, 17, 21, 24],
                        "wednesday": [17, 19, 20, 21],
                        "thursday": [2, 3, 14, 6],
                        "friday": [5, 7, 30, 19],
                        "saturday": [10, 8, 31, 3],
                        "sunday": [10, 11, 2, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 455,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1990.jpg',
                    title: 'Untitled',
                    artist: 'Amilcar de Castro',
                    year: '1990',
                    rule: {
                        "monday": [11, 12, 3, 7],
                        "tuesday": [14, 16, 17, 19],
                        "wednesday": [16, 18, 22, 25],
                        "thursday": [18, 20, 21, 22],
                        "friday": [3, 4, 15, 7],
                        "saturday": [6, 8, 31, 20],
                        "sunday": [11, 9, 1, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 456,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-aqar-7-12.jpg',
                    title: 'Untitled (AQAR 7-12)',
                    artist: 'Abdul Qader Al Raes',
                    year: '2007',
                    rule: {
                        "monday": [11, 9, 1, 4],
                        "tuesday": [11, 12, 3, 7],
                        "wednesday": [14, 16, 17, 19],
                        "thursday": [16, 18, 22, 25],
                        "friday": [18, 20, 21, 22],
                        "saturday": [3, 4, 15, 7],
                        "sunday": [6, 8, 31, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 457,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-reaper-1938.jpg',
                    title: 'The Reaper',
                    artist: 'Eileen Agar',
                    year: '1938',
                    rule: {
                        "monday": [6, 8, 31, 20],
                        "tuesday": [11, 9, 1, 4],
                        "wednesday": [11, 12, 3, 7],
                        "thursday": [14, 16, 17, 19],
                        "friday": [16, 18, 22, 25],
                        "saturday": [18, 20, 21, 22],
                        "sunday": [3, 4, 15, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 458,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/painting-1959.jpg',
                    title: 'Painting',
                    artist: 'William Scott',
                    year: '1959',
                    rule: {
                        "monday": [3, 4, 15, 7],
                        "tuesday": [6, 8, 31, 20],
                        "wednesday": [11, 9, 1, 4],
                        "thursday": [11, 12, 3, 7],
                        "friday": [14, 16, 17, 19],
                        "saturday": [16, 18, 22, 25],
                        "sunday": [18, 20, 21, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 459,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1964kk.jpg',
                    title: 'Untitled',
                    artist: 'Edward Avedisian',
                    year: '1964',
                    rule: {
                        "monday": [18, 20, 21, 22],
                        "tuesday": [3, 4, 15, 7],
                        "wednesday": [6, 8, 31, 20],
                        "thursday": [11, 9, 1, 4],
                        "friday": [11, 12, 3, 7],
                        "saturday": [14, 16, 17, 19],
                        "sunday": [16, 18, 22, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 460,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/primavera-1997.jpg',
                    title: 'Primavera',
                    artist: 'Esteban Vicente',
                    year: '1997',
                    rule: {
                        "monday": [16, 18, 22, 25],
                        "tuesday": [18, 20, 21, 22],
                        "wednesday": [3, 4, 15, 7],
                        "thursday": [6, 8, 31, 20],
                        "friday": [11, 9, 1, 4],
                        "saturday": [11, 12, 3, 7],
                        "sunday": [14, 16, 17, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 461,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1968-jo.jpg',
                    title: 'Untitled',
                    artist: 'Giuseppe Santomaso',
                    year: '1968',
                    rule: {
                        "monday": [14, 16, 17, 19],
                        "tuesday": [16, 18, 22, 25],
                        "wednesday": [18, 20, 21, 22],
                        "thursday": [3, 4, 15, 7],
                        "friday": [6, 8, 31, 20],
                        "saturday": [11, 9, 1, 4],
                        "sunday": [11, 12, 3, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 462,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/frame-ii-1970.jpg',
                    title: 'Frame II',
                    artist: 'Eduardo Nery',
                    year: '1970',
                    rule: {
                        "monday": [12, 13, 4, 8],
                        "tuesday": [15, 17, 18, 20],
                        "wednesday": [17, 19, 23, 26],
                        "thursday": [19, 21, 22, 23],
                        "friday": [4, 5, 16, 8],
                        "saturday": [7, 9, 1, 21],
                        "sunday": [12, 10, 2, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 463,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-abstraite-1.jpg',
                    title: 'Composition abstraite',
                    artist: 'Luigi Guardigli',
                    year: '?',
                    rule: {
                        "monday": [12, 10, 2, 5],
                        "tuesday": [12, 13, 4, 8],
                        "wednesday": [15, 17, 18, 20],
                        "thursday": [17, 19, 23, 26],
                        "friday": [19, 21, 22, 23],
                        "saturday": [4, 5, 16, 8],
                        "sunday": [7, 9, 1, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 464,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composizione-grigio-rosa-1957.jpg',
                    title: 'Composizione grigio-rosa',
                    artist: 'Giulio Turcato',
                    year: '1957',
                    rule: {
                        "monday": [7, 9, 1, 21],
                        "tuesday": [12, 10, 2, 5],
                        "wednesday": [12, 13, 4, 8],
                        "thursday": [15, 17, 18, 20],
                        "friday": [17, 19, 23, 26],
                        "saturday": [19, 21, 22, 23],
                        "sunday": [4, 5, 16, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 465,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/o32-60-1960.jpg',
                    title: 'O32-60',
                    artist: 'Fernando Lanhas',
                    year: '1960',
                    rule: {
                        "monday": [4, 5, 16, 8],
                        "tuesday": [7, 9, 1, 21],
                        "wednesday": [12, 10, 2, 5],
                        "thursday": [12, 13, 4, 8],
                        "friday": [15, 17, 18, 20],
                        "saturday": [17, 19, 23, 26],
                        "sunday": [19, 21, 22, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 466,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1978.jpg',
                    title: 'Untitled',
                    artist: 'Betty Parsons',
                    year: '1978',
                    rule: {
                        "monday": [19, 21, 22, 23],
                        "tuesday": [4, 5, 16, 8],
                        "wednesday": [7, 9, 1, 21],
                        "thursday": [12, 10, 2, 5],
                        "friday": [12, 13, 4, 8],
                        "saturday": [15, 17, 18, 20],
                        "sunday": [17, 19, 23, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 467,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-afterlife-of-a-painter-s-palette.jpg',
                    title: 'The afterlife of a painter\'s palette',
                    artist: 'Endre Bartos',
                    year: 'xx - xxi cent.',
                    rule: {
                        "monday": [17, 19, 23, 26],
                        "tuesday": [19, 21, 22, 23],
                        "wednesday": [4, 5, 16, 8],
                        "thursday": [7, 9, 1, 21],
                        "friday": [12, 10, 2, 5],
                        "saturday": [12, 13, 4, 8],
                        "sunday": [15, 17, 18, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 468,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/rules-of-inference-1974.jpg',
                    title: 'Rules of Inference',
                    artist: 'Mel Bochner',
                    year: '1974',
                    rule: {
                        "monday": [15, 17, 18, 20],
                        "tuesday": [17, 19, 23, 26],
                        "wednesday": [19, 21, 22, 23],
                        "thursday": [4, 5, 16, 8],
                        "friday": [7, 9, 1, 21],
                        "saturday": [12, 10, 2, 5],
                        "sunday": [12, 13, 4, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 469,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-september-22-1964.jpg',
                    title: 'Untitled (September 22)',
                    artist: 'Lorser Feitelson',
                    year: '1964',
                    rule: {
                        "monday": [13, 14, 5, 9],
                        "tuesday": [16, 18, 19, 21],
                        "wednesday": [18, 20, 24, 27],
                        "thursday": [20, 22, 23, 24],
                        "friday": [5, 6, 17, 9],
                        "saturday": [8, 10, 2, 22],
                        "sunday": [13, 11, 3, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 470,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1932.jpg',
                    title: 'Untitled',
                    artist: 'John Ferren',
                    year: '1932',
                    rule: {
                        "monday": [13, 11, 3, 6],
                        "tuesday": [13, 14, 5, 9],
                        "wednesday": [16, 18, 19, 21],
                        "thursday": [18, 20, 24, 27],
                        "friday": [20, 22, 23, 24],
                        "saturday": [5, 6, 17, 9],
                        "sunday": [8, 10, 2, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 471,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-green-earth-1980.jpg',
                    title: 'The Green Earth',
                    artist: 'Victor Pasmore',
                    year: '1979 - 1980',
                    rule: {
                        "monday": [8, 10, 2, 22],
                        "tuesday": [13, 11, 3, 6],
                        "wednesday": [13, 14, 5, 9],
                        "thursday": [16, 18, 19, 21],
                        "friday": [18, 20, 24, 27],
                        "saturday": [20, 22, 23, 24],
                        "sunday": [5, 6, 17, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 472,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/print-2-1967.jpg',
                    title: 'Print 2',
                    artist: 'Bernard Cohen',
                    year: '1967',
                    rule: {
                        "monday": [5, 6, 17, 9],
                        "tuesday": [8, 10, 2, 22],
                        "wednesday": [13, 11, 3, 6],
                        "thursday": [13, 14, 5, 9],
                        "friday": [16, 18, 19, 21],
                        "saturday": [18, 20, 24, 27],
                        "sunday": [20, 22, 23, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 473,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/pondlife-2010.jpg',
                    title: 'Pondlife',
                    artist: 'Frank Bowling',
                    year: '2010',
                    rule: {
                        "monday": [20, 22, 23, 24],
                        "tuesday": [5, 6, 17, 9],
                        "wednesday": [8, 10, 2, 22],
                        "thursday": [13, 11, 3, 6],
                        "friday": [13, 14, 5, 9],
                        "saturday": [16, 18, 19, 21],
                        "sunday": [18, 20, 24, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 474,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/ascona-1976.jpg',
                    title: 'Ascona',
                    artist: 'Friedel Dzubas',
                    year: '1976',
                    rule: {
                        "monday": [18, 20, 24, 27],
                        "tuesday": [20, 22, 23, 24],
                        "wednesday": [5, 6, 17, 9],
                        "thursday": [8, 10, 2, 22],
                        "friday": [13, 11, 3, 6],
                        "saturday": [13, 14, 5, 9],
                        "sunday": [16, 18, 19, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 475,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-6.jpg',
                    title: 'Untitled',
                    artist: 'Antonio Sanfilippo',
                    year: '?',
                    rule: {
                        "monday": [16, 18, 19, 21],
                        "tuesday": [18, 20, 24, 27],
                        "wednesday": [20, 22, 23, 24],
                        "thursday": [5, 6, 17, 9],
                        "friday": [8, 10, 2, 22],
                        "saturday": [13, 11, 3, 6],
                        "sunday": [13, 14, 5, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 476,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/ohne-titel-gleiche-dreiecke-1967.jpg',
                    title: 'Ohne Titel (Gleiche Dreiecke)',
                    artist: 'Almir Mavignier',
                    year: '1967',
                    rule: {
                        "monday": [14, 15, 6, 10],
                        "tuesday": [17, 19, 20, 22],
                        "wednesday": [19, 21, 25, 28],
                        "thursday": [21, 23, 24, 25],
                        "friday": [6, 7, 18, 10],
                        "saturday": [9, 11, 3, 23],
                        "sunday": [14, 12, 4, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 477,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/deseret-1959.jpg',
                    title: 'Deseret',
                    artist: 'Theodoros Stamos',
                    year: '1959',
                    rule: {
                        "monday": [14, 12, 4, 7],
                        "tuesday": [14, 15, 6, 10],
                        "wednesday": [17, 19, 20, 22],
                        "thursday": [19, 21, 25, 28],
                        "friday": [21, 23, 24, 25],
                        "saturday": [6, 7, 18, 10],
                        "sunday": [9, 11, 3, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 478,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/pink-mirror-1969.jpg',
                    title: 'Pink Mirror',
                    artist: 'Ronald Davis',
                    year: '1969',
                    rule: {
                        "monday": [9, 11, 3, 23],
                        "tuesday": [14, 12, 4, 7],
                        "wednesday": [14, 15, 6, 10],
                        "thursday": [17, 19, 20, 22],
                        "friday": [19, 21, 25, 28],
                        "saturday": [21, 23, 24, 25],
                        "sunday": [6, 7, 18, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 479,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/paris-green-1990.jpg',
                    title: 'Paris Green',
                    artist: 'Doug Ohlson',
                    year: '1990',
                    rule: {
                        "monday": [6, 7, 18, 10],
                        "tuesday": [9, 11, 3, 23],
                        "wednesday": [14, 12, 4, 7],
                        "thursday": [14, 15, 6, 10],
                        "friday": [17, 19, 20, 22],
                        "saturday": [19, 21, 25, 28],
                        "sunday": [21, 23, 24, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 480,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/unknown-title-7.jpg',
                    title: 'unknown title',
                    artist: 'Luigi Guardigli',
                    year: '?',
                    rule: {
                        "monday": [21, 23, 24, 25],
                        "tuesday": [6, 7, 18, 10],
                        "wednesday": [9, 11, 3, 23],
                        "thursday": [14, 12, 4, 7],
                        "friday": [14, 15, 6, 10],
                        "saturday": [17, 19, 20, 22],
                        "sunday": [19, 21, 25, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 481,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/grace-kelly-iii-1994.jpg',
                    title: 'Grace Kelly III',
                    artist: 'Imi Knoebel',
                    year: '1994',
                    rule: {
                        "monday": [19, 21, 25, 28],
                        "tuesday": [21, 23, 24, 25],
                        "wednesday": [6, 7, 18, 10],
                        "thursday": [9, 11, 3, 23],
                        "friday": [14, 12, 4, 7],
                        "saturday": [14, 15, 6, 10],
                        "sunday": [17, 19, 20, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 482,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-lens-painting-2007.jpg',
                    title: 'Untitled (Lens Painting)',
                    artist: 'Sigmar Polke',
                    year: '2007',
                    rule: {
                        "monday": [17, 19, 20, 22],
                        "tuesday": [19, 21, 25, 28],
                        "wednesday": [21, 23, 24, 25],
                        "thursday": [6, 7, 18, 10],
                        "friday": [9, 11, 3, 23],
                        "saturday": [14, 12, 4, 7],
                        "sunday": [14, 15, 6, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 483,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-yellows-and-greens-1975.jpg',
                    title: 'Untitled [yellows and greens]',
                    artist: 'Edward Avedisian',
                    year: '1975',
                    rule: {
                        "monday": [15, 16, 7, 11],
                        "tuesday": [18, 20, 21, 23],
                        "wednesday": [20, 22, 26, 29],
                        "thursday": [22, 24, 25, 26],
                        "friday": [7, 8, 19, 11],
                        "saturday": [10, 12, 4, 24],
                        "sunday": [15, 13, 5, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 484,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/pensando-em-chartres-1971.jpg',
                    title: 'Pensando em Chartres',
                    artist: 'Jose Escada',
                    year: '1971',
                    rule: {
                        "monday": [15, 13, 5, 8],
                        "tuesday": [15, 16, 7, 11],
                        "wednesday": [18, 20, 21, 23],
                        "thursday": [20, 22, 26, 29],
                        "friday": [22, 24, 25, 26],
                        "saturday": [7, 8, 19, 11],
                        "sunday": [10, 12, 4, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 485,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1968__.jpg',
                    title: 'Untitled',
                    artist: 'Marcelle Cahn',
                    year: '1968',
                    rule: {
                        "monday": [10, 12, 4, 24],
                        "tuesday": [15, 13, 5, 8],
                        "wednesday": [15, 16, 7, 11],
                        "thursday": [18, 20, 21, 23],
                        "friday": [20, 22, 26, 29],
                        "saturday": [22, 24, 25, 26],
                        "sunday": [7, 8, 19, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 486,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/exposed-painting-olive-green-1998.jpg',
                    title: 'Exposed Painting, Olive Green',
                    artist: 'Callum Innes',
                    year: '1998',
                    rule: {
                        "monday": [7, 8, 19, 11],
                        "tuesday": [10, 12, 4, 24],
                        "wednesday": [15, 13, 5, 8],
                        "thursday": [15, 16, 7, 11],
                        "friday": [18, 20, 21, 23],
                        "saturday": [20, 22, 26, 29],
                        "sunday": [22, 24, 25, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 487,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/struttura-1967.jpg',
                    title: 'Struttura',
                    artist: 'Rodolfo Arico',
                    year: '1967',
                    rule: {
                        "monday": [22, 24, 25, 26],
                        "tuesday": [7, 8, 19, 11],
                        "wednesday": [10, 12, 4, 24],
                        "thursday": [15, 13, 5, 8],
                        "friday": [15, 16, 7, 11],
                        "saturday": [18, 20, 21, 23],
                        "sunday": [20, 22, 26, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 488,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/delta-theta-1961.jpg',
                    title: 'Delta Theta',
                    artist: 'Morris Louis',
                    year: '1961',
                    rule: {
                        "monday": [20, 22, 26, 29],
                        "tuesday": [22, 24, 25, 26],
                        "wednesday": [7, 8, 19, 11],
                        "thursday": [10, 12, 4, 24],
                        "friday": [15, 13, 5, 8],
                        "saturday": [15, 16, 7, 11],
                        "sunday": [18, 20, 21, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 489,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/fractured-image-1972.jpg',
                    title: 'Fractured Image',
                    artist: 'Vasile Dobrian',
                    year: '1972',
                    rule: {
                        "monday": [18, 20, 21, 23],
                        "tuesday": [20, 22, 26, 29],
                        "wednesday": [22, 24, 25, 26],
                        "thursday": [7, 8, 19, 11],
                        "friday": [10, 12, 4, 24],
                        "saturday": [15, 13, 5, 8],
                        "sunday": [15, 16, 7, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 490,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/red-1966.jpg',
                    title: 'Red',
                    artist: 'Thomas Downing',
                    year: '1966',
                    rule: {
                        "monday": [16, 17, 8, 12],
                        "tuesday": [19, 21, 22, 24],
                        "wednesday": [21, 23, 27, 30],
                        "thursday": [23, 25, 26, 27],
                        "friday": [8, 9, 20, 12],
                        "saturday": [11, 13, 5, 25],
                        "sunday": [16, 14, 6, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 491,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1962.jpg',
                    title: 'Untitled',
                    artist: 'Charlotte Posenenske',
                    year: '1962',
                    rule: {
                        "monday": [16, 14, 6, 9],
                        "tuesday": [16, 17, 8, 12],
                        "wednesday": [19, 21, 22, 24],
                        "thursday": [21, 23, 27, 30],
                        "friday": [23, 25, 26, 27],
                        "saturday": [8, 9, 20, 12],
                        "sunday": [11, 13, 5, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 492,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-from-the-amerim-series-1997(3).jpg',
                    title: 'Untitled (from the Amerim series)',
                    artist: 'Vasile Dobrian',
                    year: '1997',
                    rule: {
                        "monday": [11, 13, 5, 25],
                        "tuesday": [16, 14, 6, 9],
                        "wednesday": [16, 17, 8, 12],
                        "thursday": [19, 21, 22, 24],
                        "friday": [21, 23, 27, 30],
                        "saturday": [23, 25, 26, 27],
                        "sunday": [8, 9, 20, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 493,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-graphic-composition-1951-5(1).jpg',
                    title: 'Untitled (Graphic Composition)',
                    artist: 'Bruno Munari',
                    year: '1951',
                    rule: {
                        "monday": [8, 9, 20, 12],
                        "tuesday": [11, 13, 5, 25],
                        "wednesday": [16, 14, 6, 9],
                        "thursday": [16, 17, 8, 12],
                        "friday": [19, 21, 22, 24],
                        "saturday": [21, 23, 27, 30],
                        "sunday": [23, 25, 26, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 494,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/dialogue-10-1993.jpg',
                    title: 'Dialogue 10',
                    artist: 'Vasile Dobrian',
                    year: '1993',
                    rule: {
                        "monday": [23, 25, 26, 27],
                        "tuesday": [8, 9, 20, 12],
                        "wednesday": [11, 13, 5, 25],
                        "thursday": [16, 14, 6, 9],
                        "friday": [16, 17, 8, 12],
                        "saturday": [19, 21, 22, 24],
                        "sunday": [21, 23, 27, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 495,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/sakuhin-1964.jpg',
                    title: 'Sakuhin',
                    artist: 'Sadamasa Motonaga',
                    year: '1964',
                    rule: {
                        "monday": [21, 23, 27, 30],
                        "tuesday": [23, 25, 26, 27],
                        "wednesday": [8, 9, 20, 12],
                        "thursday": [11, 13, 5, 25],
                        "friday": [16, 14, 6, 9],
                        "saturday": [16, 17, 8, 12],
                        "sunday": [19, 21, 22, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 496,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/two-squares-1967.jpg',
                    title: 'Two Squares',
                    artist: 'Almir Mavignier',
                    year: '1967',
                    rule: {
                        "monday": [19, 21, 22, 24],
                        "tuesday": [21, 23, 27, 30],
                        "wednesday": [23, 25, 26, 27],
                        "thursday": [8, 9, 20, 12],
                        "friday": [11, 13, 5, 25],
                        "saturday": [16, 14, 6, 9],
                        "sunday": [16, 17, 8, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 497,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/portrait-1993.jpg',
                    title: 'Portrait',
                    artist: 'Imi Knoebel',
                    year: '1993',
                    rule: {
                        "monday": [17, 18, 9, 13],
                        "tuesday": [20, 22, 23, 25],
                        "wednesday": [22, 24, 28, 31],
                        "thursday": [24, 26, 27, 28],
                        "friday": [9, 10, 21, 13],
                        "saturday": [12, 14, 6, 26],
                        "sunday": [17, 15, 7, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 498,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/ecriture-no-070405-2007.jpg',
                    title: 'Ecriture No. 070405',
                    artist: 'Park Seo-Bo',
                    year: '2007',
                    rule: {
                        "monday": [17, 15, 7, 10],
                        "tuesday": [17, 18, 9, 13],
                        "wednesday": [20, 22, 23, 25],
                        "thursday": [22, 24, 28, 31],
                        "friday": [24, 26, 27, 28],
                        "saturday": [9, 10, 21, 13],
                        "sunday": [12, 14, 6, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 499,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/fluid-red-1968.jpg',
                    title: 'Fluid Red',
                    artist: 'Kazuo Shiraga',
                    year: '1968',
                    rule: {
                        "monday": [12, 14, 6, 26],
                        "tuesday": [17, 15, 7, 10],
                        "wednesday": [17, 18, 9, 13],
                        "thursday": [20, 22, 23, 25],
                        "friday": [22, 24, 28, 31],
                        "saturday": [24, 26, 27, 28],
                        "sunday": [9, 10, 21, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 500,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/diet.jpg',
                    title: 'Diet',
                    artist: 'Mark Lancaster',
                    year: '?',
                    rule: {
                        "monday": [9, 10, 21, 13],
                        "tuesday": [12, 14, 6, 26],
                        "wednesday": [17, 15, 7, 10],
                        "thursday": [17, 18, 9, 13],
                        "friday": [20, 22, 23, 25],
                        "saturday": [22, 24, 28, 31],
                        "sunday": [24, 26, 27, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 501,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/tadwalis-island-1982.jpg',
                    title: 'Tadwalis Island',
                    artist: 'Gillian Ayres',
                    year: '1982',
                    rule: {
                        "monday": [24, 26, 27, 28],
                        "tuesday": [9, 10, 21, 13],
                        "wednesday": [12, 14, 6, 26],
                        "thursday": [17, 15, 7, 10],
                        "friday": [17, 18, 9, 13],
                        "saturday": [20, 22, 23, 25],
                        "sunday": [22, 24, 28, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 502,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/weisse-struktur-spiegelung-1960.jpg',
                    title: 'Weisse Struktur (Spiegelung)',
                    artist: 'Gerhard von Graevenitz',
                    year: '1960',
                    rule: {
                        "monday": [22, 24, 28, 31],
                        "tuesday": [24, 26, 27, 28],
                        "wednesday": [9, 10, 21, 13],
                        "thursday": [12, 14, 6, 26],
                        "friday": [17, 15, 7, 10],
                        "saturday": [17, 18, 9, 13],
                        "sunday": [20, 22, 23, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 503,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/spazio-luce-1965.jpg',
                    title: 'Spazio Luce',
                    artist: 'Antonio Calderara',
                    year: '1965',
                    rule: {
                        "monday": [20, 22, 23, 25],
                        "tuesday": [22, 24, 28, 31],
                        "wednesday": [24, 26, 27, 28],
                        "thursday": [9, 10, 21, 13],
                        "friday": [12, 14, 6, 26],
                        "saturday": [17, 15, 7, 10],
                        "sunday": [17, 18, 9, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 504,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/diamond-lake-1969.jpg',
                    title: 'Diamond Lake',
                    artist: 'Ronnie Landfield',
                    year: '1969',
                    rule: {
                        "monday": [18, 19, 10, 14],
                        "tuesday": [21, 23, 24, 26],
                        "wednesday": [23, 25, 29, 1],
                        "thursday": [25, 27, 28, 29],
                        "friday": [10, 11, 22, 14],
                        "saturday": [13, 15, 7, 27],
                        "sunday": [18, 16, 8, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 505,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/intersuperficie-curva-gialla-1969.jpg',
                    title: 'Intersuperficie curva gialla',
                    artist: 'Paolo Scheggi',
                    year: '1969',
                    rule: {
                        "monday": [18, 16, 8, 11],
                        "tuesday": [18, 19, 10, 14],
                        "wednesday": [21, 23, 24, 26],
                        "thursday": [23, 25, 29, 1],
                        "friday": [25, 27, 28, 29],
                        "saturday": [10, 11, 22, 14],
                        "sunday": [13, 15, 7, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 506,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/en-campo-gris-1964.jpg',
                    title: 'En campo gris',
                    artist: 'Pablo Palazuelo',
                    year: '1964',
                    rule: {
                        "monday": [13, 15, 7, 27],
                        "tuesday": [18, 16, 8, 11],
                        "wednesday": [18, 19, 10, 14],
                        "thursday": [21, 23, 24, 26],
                        "friday": [23, 25, 29, 1],
                        "saturday": [25, 27, 28, 29],
                        "sunday": [10, 11, 22, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 507,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-no-4-leaving-the-factory-1917.jpg',
                    title: 'Composition No. 4 (Leaving The Factory)',
                    artist: 'Bart van der Leck',
                    year: '1917',
                    rule: {
                        "monday": [10, 11, 22, 14],
                        "tuesday": [13, 15, 7, 27],
                        "wednesday": [18, 16, 8, 11],
                        "thursday": [18, 19, 10, 14],
                        "friday": [21, 23, 24, 26],
                        "saturday": [23, 25, 29, 1],
                        "sunday": [25, 27, 28, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 508,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/o-t-reforzate-5-2005.jpg',
                    title: 'o. T. (Reforzate.5)',
                    artist: 'Jurgen Partenheimer',
                    year: '2005',
                    rule: {
                        "monday": [25, 27, 28, 29],
                        "tuesday": [10, 11, 22, 14],
                        "wednesday": [13, 15, 7, 27],
                        "thursday": [18, 16, 8, 11],
                        "friday": [18, 19, 10, 14],
                        "saturday": [21, 23, 24, 26],
                        "sunday": [23, 25, 29, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 509,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/oscila-es-do-claro-escuro-i-1967.jpg',
                    title: 'Oscilações do Claro Escuro I',
                    artist: 'Eduardo Nery',
                    year: '1967',
                    rule: {
                        "monday": [23, 25, 29, 1],
                        "tuesday": [25, 27, 28, 29],
                        "wednesday": [10, 11, 22, 14],
                        "thursday": [13, 15, 7, 27],
                        "friday": [18, 16, 8, 11],
                        "saturday": [18, 19, 10, 14],
                        "sunday": [21, 23, 24, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 510,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/ricerca-del-colore-azzurro-su-nero-1968.jpg',
                    title: 'Ricerca del colore azzurro su nero',
                    artist: 'Dadamaino',
                    year: '1968',
                    rule: {
                        "monday": [21, 23, 24, 26],
                        "tuesday": [23, 25, 29, 1],
                        "wednesday": [25, 27, 28, 29],
                        "thursday": [10, 11, 22, 14],
                        "friday": [13, 15, 7, 27],
                        "saturday": [18, 16, 8, 11],
                        "sunday": [18, 19, 10, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 511,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-from-the-series-graphic-objects-1973(1).jpg',
                    title: 'Untitled (From the series Graphic Objects)',
                    artist: 'Mira Schendel',
                    year: '1973',
                    rule: {
                        "monday": [19, 20, 11, 15],
                        "tuesday": [22, 24, 25, 27],
                        "wednesday": [24, 26, 30, 2],
                        "thursday": [26, 28, 29, 30],
                        "friday": [11, 12, 23, 15],
                        "saturday": [14, 16, 8, 28],
                        "sunday": [19, 17, 9, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 512,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/vibration-des-adjacents-rouge-bleu-fond-violet.jpg',
                    title: 'Vibration des adjacents rouge-bleu, fond violet',
                    artist: 'Horacio Garcia-Rossi',
                    year: '?',
                    rule: {
                        "monday": [19, 17, 9, 12],
                        "tuesday": [19, 20, 11, 15],
                        "wednesday": [22, 24, 25, 27],
                        "thursday": [24, 26, 30, 2],
                        "friday": [26, 28, 29, 30],
                        "saturday": [11, 12, 23, 15],
                        "sunday": [14, 16, 8, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 513,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1979 (1).jpg',
                    title: 'Untitled',
                    artist: 'Kazuo Shiraga',
                    year: '1979',
                    rule: {
                        "monday": [14, 16, 8, 28],
                        "tuesday": [19, 17, 9, 12],
                        "wednesday": [19, 20, 11, 15],
                        "thursday": [22, 24, 25, 27],
                        "friday": [24, 26, 30, 2],
                        "saturday": [26, 28, 29, 30],
                        "sunday": [11, 12, 23, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 514,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/espejo-son-mbulo-1989.jpg',
                    title: 'Espejo Sonámbulo',
                    artist: 'Manuel Rivera',
                    year: '1989',
                    rule: {
                        "monday": [11, 12, 23, 15],
                        "tuesday": [14, 16, 8, 28],
                        "wednesday": [19, 17, 9, 12],
                        "thursday": [19, 20, 11, 15],
                        "friday": [22, 24, 25, 27],
                        "saturday": [24, 26, 30, 2],
                        "sunday": [26, 28, 29, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 515,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/edge-of-white-dawn-1-1982.jpg',
                    title: 'Edge of White Dawn #1',
                    artist: 'Theodoros Stamos',
                    year: '1982',
                    rule: {
                        "monday": [26, 28, 29, 30],
                        "tuesday": [11, 12, 23, 15],
                        "wednesday": [14, 16, 8, 28],
                        "thursday": [19, 17, 9, 12],
                        "friday": [19, 20, 11, 15],
                        "saturday": [22, 24, 25, 27],
                        "sunday": [24, 26, 30, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 516,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/undulatory-mirage-1968.jpg',
                    title: 'Undulatory Mirage',
                    artist: 'Constantin Flondor',
                    year: '1968',
                    rule: {
                        "monday": [24, 26, 30, 2],
                        "tuesday": [26, 28, 29, 30],
                        "wednesday": [11, 12, 23, 15],
                        "thursday": [14, 16, 8, 28],
                        "friday": [19, 17, 9, 12],
                        "saturday": [19, 20, 11, 15],
                        "sunday": [22, 24, 25, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 517,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/work-1972.jpg',
                    title: 'Work',
                    artist: 'Kazuo Shiraga',
                    year: '1972',
                    rule: {
                        "monday": [22, 24, 25, 27],
                        "tuesday": [24, 26, 30, 2],
                        "wednesday": [26, 28, 29, 30],
                        "thursday": [11, 12, 23, 15],
                        "friday": [14, 16, 8, 28],
                        "saturday": [19, 17, 9, 12],
                        "sunday": [19, 20, 11, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 518,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/r-b-and-w-spiral-for-a-1991.jpg',
                    title: 'R. B. and W. Spiral for A.',
                    artist: 'Terry Frost',
                    year: '1991',
                    rule: {
                        "monday": [20, 21, 12, 16],
                        "tuesday": [23, 25, 26, 28],
                        "wednesday": [25, 27, 31, 3],
                        "thursday": [27, 29, 30, 31],
                        "friday": [12, 13, 24, 16],
                        "saturday": [15, 17, 9, 29],
                        "sunday": [20, 18, 10, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 519,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1-AlmirMavignier.jpg',
                    title: 'Untitled',
                    artist: 'Almir Mavignier',
                    year: '?',
                    rule: {
                        "monday": [20, 18, 10, 13],
                        "tuesday": [20, 21, 12, 16],
                        "wednesday": [23, 25, 26, 28],
                        "thursday": [25, 27, 31, 3],
                        "friday": [27, 29, 30, 31],
                        "saturday": [12, 13, 24, 16],
                        "sunday": [15, 17, 9, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 520,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-late-september-december-10-1950.jpg',
                    title: 'Untitled (Late September-December 10)',
                    artist: 'Myron Stout',
                    year: '1950',
                    rule: {
                        "monday": [15, 17, 9, 29],
                        "tuesday": [20, 18, 10, 13],
                        "wednesday": [20, 21, 12, 16],
                        "thursday": [23, 25, 26, 28],
                        "friday": [25, 27, 31, 3],
                        "saturday": [27, 29, 30, 31],
                        "sunday": [12, 13, 24, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 521,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-landscape-woodstock-no-414-1964.jpg',
                    title: 'Untitled Landscape, Woodstock (No.414)',
                    artist: 'Arthur Pinajian',
                    year: '1964',
                    rule: {
                        "monday": [12, 13, 24, 16],
                        "tuesday": [15, 17, 9, 29],
                        "wednesday": [20, 18, 10, 13],
                        "thursday": [20, 21, 12, 16],
                        "friday": [23, 25, 26, 28],
                        "saturday": [25, 27, 31, 3],
                        "sunday": [27, 29, 30, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 522,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/woodburning.jpg',
                    title: 'Woodburning',
                    artist: 'Arthur Segal',
                    year: '?',
                    rule: {
                        "monday": [27, 29, 30, 31],
                        "tuesday": [12, 13, 24, 16],
                        "wednesday": [15, 17, 9, 29],
                        "thursday": [20, 18, 10, 13],
                        "friday": [20, 21, 12, 16],
                        "saturday": [23, 25, 26, 28],
                        "sunday": [25, 27, 31, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 523,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/time-and-space-series-2-1974.jpg',
                    title: 'Time and Space Series 2',
                    artist: 'Kazuo Nakamura',
                    year: '1974',
                    rule: {
                        "monday": [25, 27, 31, 3],
                        "tuesday": [27, 29, 30, 31],
                        "wednesday": [12, 13, 24, 16],
                        "thursday": [15, 17, 9, 29],
                        "friday": [20, 18, 10, 13],
                        "saturday": [20, 21, 12, 16],
                        "sunday": [23, 25, 26, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 524,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/un-altar-imagine-corrida-1958.jpg',
                    title: 'Un Altar Imagine (Corrida)',
                    artist: 'Antonio Corpora',
                    year: '1958',
                    rule: {
                        "monday": [23, 25, 26, 28],
                        "tuesday": [25, 27, 31, 3],
                        "wednesday": [27, 29, 30, 31],
                        "thursday": [12, 13, 24, 16],
                        "friday": [15, 17, 9, 29],
                        "saturday": [20, 18, 10, 13],
                        "sunday": [20, 21, 12, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 525,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/pleasure-of-wearing-1971.jpg',
                    title: 'Pleasure of Wearing',
                    artist: 'Kazuo Shiraga',
                    year: '1971',
                    rule: {
                        "monday": [21, 22, 13, 17],
                        "tuesday": [24, 26, 27, 29],
                        "wednesday": [26, 28, 1, 4],
                        "thursday": [28, 30, 31, 1],
                        "friday": [13, 14, 25, 17],
                        "saturday": [16, 18, 10, 30],
                        "sunday": [21, 19, 11, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 526,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/red-rose-1966.jpg',
                    title: 'Red Rose',
                    artist: 'John Ferren',
                    year: '1966',
                    rule: {
                        "monday": [21, 19, 11, 14],
                        "tuesday": [21, 22, 13, 17],
                        "wednesday": [24, 26, 27, 29],
                        "thursday": [26, 28, 1, 4],
                        "friday": [28, 30, 31, 1],
                        "saturday": [13, 14, 25, 17],
                        "sunday": [16, 18, 10, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 527,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-diagonals-1970.jpg',
                    title: 'Untitled (Diagonals)',
                    artist: 'Francois Morellet',
                    year: '1970',
                    rule: {
                        "monday": [16, 18, 10, 30],
                        "tuesday": [21, 19, 11, 14],
                        "wednesday": [21, 22, 13, 17],
                        "thursday": [24, 26, 27, 29],
                        "friday": [26, 28, 1, 4],
                        "saturday": [28, 30, 31, 1],
                        "sunday": [13, 14, 25, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 528,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/1024-colours-1973 (1).jpg',
                    title: '1024 Colours',
                    artist: 'Gerhard Richter',
                    year: '1973',
                    rule: {
                        "monday": [13, 14, 25, 17],
                        "tuesday": [16, 18, 10, 30],
                        "wednesday": [21, 19, 11, 14],
                        "thursday": [21, 22, 13, 17],
                        "friday": [24, 26, 27, 29],
                        "saturday": [26, 28, 1, 4],
                        "sunday": [28, 30, 31, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 529,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/tv-quadrascape.jpg',
                    title: 'TV quadrascape',
                    artist: 'Eric Zammitt',
                    year: '?',
                    rule: {
                        "monday": [28, 30, 31, 1],
                        "tuesday": [13, 14, 25, 17],
                        "wednesday": [16, 18, 10, 30],
                        "thursday": [21, 19, 11, 14],
                        "friday": [21, 22, 13, 17],
                        "saturday": [24, 26, 27, 29],
                        "sunday": [26, 28, 1, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 530,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/farbspiele-1952.jpg',
                    title: 'Farbspiele',
                    artist: 'Ernst Wilhelm Nay',
                    year: '1952',
                    rule: {
                        "monday": [26, 28, 1, 4],
                        "tuesday": [28, 30, 31, 1],
                        "wednesday": [13, 14, 25, 17],
                        "thursday": [16, 18, 10, 30],
                        "friday": [21, 19, 11, 14],
                        "saturday": [21, 22, 13, 17],
                        "sunday": [24, 26, 27, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 531,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/horseshow-two-1971.jpg',
                    title: 'Horseshow Two',
                    artist: 'Thomas Downing',
                    year: '1971',
                    rule: {
                        "monday": [24, 26, 27, 29],
                        "tuesday": [26, 28, 1, 4],
                        "wednesday": [28, 30, 31, 1],
                        "thursday": [13, 14, 25, 17],
                        "friday": [16, 18, 10, 30],
                        "saturday": [21, 19, 11, 14],
                        "sunday": [21, 22, 13, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 532,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/kiel-1971.jpg',
                    title: 'Kiel',
                    artist: 'Richard Mortensen',
                    year: '1971',
                    rule: {
                        "monday": [22, 23, 14, 18],
                        "tuesday": [25, 27, 28, 30],
                        "wednesday": [27, 29, 2, 5],
                        "thursday": [29, 31, 1, 2],
                        "friday": [14, 15, 26, 18],
                        "saturday": [17, 19, 11, 31],
                        "sunday": [22, 20, 12, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 533,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/dall-alto-al-basso-1972.jpg',
                    title: 'Dall´alto al Basso',
                    artist: 'Giuseppe Santomaso',
                    year: '1972',
                    rule: {
                        "monday": [22, 20, 12, 15],
                        "tuesday": [22, 23, 14, 18],
                        "wednesday": [25, 27, 28, 30],
                        "thursday": [27, 29, 2, 5],
                        "friday": [29, 31, 1, 2],
                        "saturday": [14, 15, 26, 18],
                        "sunday": [17, 19, 11, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 534,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/disks-of-newton-study-for-fugue-in-two-colors.jpg',
                    title: 'Disks of Newton, Study for Fugue in Two Colors',
                    artist: 'Frantisek Kupka',
                    year: 'c. 1911',
                    rule: {
                        "monday": [17, 19, 11, 31],
                        "tuesday": [22, 20, 12, 15],
                        "wednesday": [22, 23, 14, 18],
                        "thursday": [25, 27, 28, 30],
                        "friday": [27, 29, 2, 5],
                        "saturday": [29, 31, 1, 2],
                        "sunday": [14, 15, 26, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 535,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/positioning-of-mobile-graphic-elements.jpg',
                    title: 'Positioning of Mobile Graphic Elements',
                    artist: 'Frantisek Kupka',
                    year: 'c. 1913',
                    rule: {
                        "monday": [14, 15, 26, 18],
                        "tuesday": [17, 19, 11, 31],
                        "wednesday": [22, 20, 12, 15],
                        "thursday": [22, 23, 14, 18],
                        "friday": [25, 27, 28, 30],
                        "saturday": [27, 29, 2, 5],
                        "sunday": [29, 31, 1, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 536,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://hours168-hurdaudio.s3.amazonaws.com/img/january/abstract---3.jpg',
                    title: '(Abstract)',
                    artist: 'Bui Xuan Phai',
                    year: '?',
                    rule: {
                        "monday": [29, 31, 1, 2],
                        "tuesday": [14, 15, 26, 18],
                        "wednesday": [17, 19, 11, 31],
                        "thursday": [22, 20, 12, 15],
                        "friday": [22, 23, 14, 18],
                        "saturday": [25, 27, 28, 30],
                        "sunday": [27, 29, 2, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 537,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-no-70-1960.jpg',
                    title: 'Untitled No. 70',
                    artist: 'Carl Buchheister',
                    year: '1960',
                    rule: {
                        "monday": [27, 29, 2, 5],
                        "tuesday": [29, 31, 1, 2],
                        "wednesday": [14, 15, 26, 18],
                        "thursday": [17, 19, 11, 31],
                        "friday": [22, 20, 12, 15],
                        "saturday": [22, 23, 14, 18],
                        "sunday": [25, 27, 28, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 538,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/x-l-31-62-1962.jpg',
                    title: 'X-L-31-62',
                    artist: 'Conrad Marca-Relli',
                    year: '1962',
                    rule: {
                        "monday": [25, 27, 28, 30],
                        "tuesday": [27, 29, 2, 5],
                        "wednesday": [29, 31, 1, 2],
                        "thursday": [14, 15, 26, 18],
                        "friday": [17, 19, 11, 31],
                        "saturday": [22, 20, 12, 15],
                        "sunday": [22, 23, 14, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 539,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/berlin-waterfall-1993.jpg',
                    title: 'Berlin Waterfall',
                    artist: 'Pat Steir',
                    year: '1993',
                    rule: {
                        "monday": [23, 24, 15, 19],
                        "tuesday": [26, 28, 29, 31],
                        "wednesday": [28, 30, 3, 6],
                        "thursday": [30, 1, 2, 3],
                        "friday": [15, 16, 27, 19],
                        "saturday": [18, 20, 12, 1],
                        "sunday": [23, 21, 13, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 540,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/travel-if-you-aim-for-certain-values-by-travelling-the-skies-the-crescent-becommes-a-full-moon.jpg',
                    title: 'Travel if you aim for certain values. By travelling the skies, the crescent becommes a full moon',
                    artist: 'Hassan Massoudy',
                    year: '?',
                    rule: {
                        "monday": [23, 21, 13, 16],
                        "tuesday": [23, 24, 15, 19],
                        "wednesday": [26, 28, 29, 31],
                        "thursday": [28, 30, 3, 6],
                        "friday": [30, 1, 2, 3],
                        "saturday": [15, 16, 27, 19],
                        "sunday": [18, 20, 12, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 541,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/o-v-n-i-1967.jpg',
                    title: 'O.V.N.I.',
                    artist: 'Omar Rayo',
                    year: '1967',
                    rule: {
                        "monday": [18, 20, 12, 1],
                        "tuesday": [23, 21, 13, 16],
                        "wednesday": [23, 24, 15, 19],
                        "thursday": [26, 28, 29, 31],
                        "friday": [28, 30, 3, 6],
                        "saturday": [30, 1, 2, 3],
                        "sunday": [15, 16, 27, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 542,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/m-child-1981.jpg',
                    title: 'M & Child',
                    artist: 'Leo Valledor',
                    year: '1981',
                    rule: {
                        "monday": [15, 16, 27, 19],
                        "tuesday": [18, 20, 12, 1],
                        "wednesday": [23, 21, 13, 16],
                        "thursday": [23, 24, 15, 19],
                        "friday": [26, 28, 29, 31],
                        "saturday": [28, 30, 3, 6],
                        "sunday": [30, 1, 2, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 543,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/garden-motif-1950.jpg',
                    title: 'Garden Motif',
                    artist: 'Lajos Kassak',
                    year: '1950',
                    rule: {
                        "monday": [30, 1, 2, 3],
                        "tuesday": [15, 16, 27, 19],
                        "wednesday": [18, 20, 12, 1],
                        "thursday": [23, 21, 13, 16],
                        "friday": [23, 24, 15, 19],
                        "saturday": [26, 28, 29, 31],
                        "sunday": [28, 30, 3, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 544,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/exist-ncia-1985.jpg',
                    title: 'Existência',
                    artist: 'Manabu Mabe',
                    year: '1985',
                    rule: {
                        "monday": [28, 30, 3, 6],
                        "tuesday": [30, 1, 2, 3],
                        "wednesday": [15, 16, 27, 19],
                        "thursday": [18, 20, 12, 1],
                        "friday": [23, 21, 13, 16],
                        "saturday": [23, 24, 15, 19],
                        "sunday": [26, 28, 29, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 545,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/large-rectangles-large-1965.jpg',
                    title: 'Large Rectangles Large',
                    artist: 'Robert Goodnough',
                    year: '1965',
                    rule: {
                        "monday": [26, 28, 29, 31],
                        "tuesday": [28, 30, 3, 6],
                        "wednesday": [30, 1, 2, 3],
                        "thursday": [15, 16, 27, 19],
                        "friday": [18, 20, 12, 1],
                        "saturday": [23, 21, 13, 16],
                        "sunday": [23, 24, 15, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 546,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1960.jpg',
                    title: 'Untitled',
                    artist: 'Jose Escada',
                    year: '1960',
                    rule: {
                        "monday": [24, 25, 16, 20],
                        "tuesday": [27, 29, 30, 1],
                        "wednesday": [29, 31, 4, 7],
                        "thursday": [31, 2, 3, 4],
                        "friday": [16, 17, 28, 20],
                        "saturday": [19, 21, 13, 2],
                        "sunday": [24, 22, 14, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 547,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/ocean-blue-6-1988.jpg',
                    title: 'Ocean Blue #6',
                    artist: 'Joe Goode',
                    year: '1988',
                    rule: {
                        "monday": [24, 22, 14, 17],
                        "tuesday": [24, 25, 16, 20],
                        "wednesday": [27, 29, 30, 1],
                        "thursday": [29, 31, 4, 7],
                        "friday": [31, 2, 3, 4],
                        "saturday": [16, 17, 28, 20],
                        "sunday": [19, 21, 13, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 548,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/relational-painting-tondo-36-1955.jpg',
                    title: 'Relational Painting, Tondo #36',
                    artist: 'Fritz Glarner',
                    year: '1955',
                    rule: {
                        "monday": [19, 21, 13, 2],
                        "tuesday": [19, 21, 13, 2],
                        "wednesday": [24, 22, 14, 17],
                        "thursday": [24, 25, 16, 20],
                        "friday": [27, 29, 30, 1],
                        "saturday": [29, 31, 4, 7],
                        "sunday": [31, 2, 3, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 549,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-203-watercolor-ball-1965.jpg',
                    title: 'Untitled 203 (watercolor ball)',
                    artist: 'Edward Avedisian',
                    year: '1965',
                    rule: {
                        "monday": [31, 2, 3, 4],
                        "tuesday": [19, 21, 13, 2],
                        "wednesday": [19, 21, 13, 2],
                        "thursday": [24, 22, 14, 17],
                        "friday": [24, 25, 16, 20],
                        "saturday": [27, 29, 30, 1],
                        "sunday": [29, 31, 4, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 550,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/la-propagation-1968(1).jpg',
                    title: 'La Propagation',
                    artist: 'Matsutani',
                    year: '1968',
                    rule: {
                        "monday": [29, 31, 4, 7],
                        "tuesday": [31, 2, 3, 4],
                        "wednesday": [19, 21, 13, 2],
                        "thursday": [19, 21, 13, 2],
                        "friday": [24, 22, 14, 17],
                        "saturday": [24, 25, 16, 20],
                        "sunday": [27, 29, 30, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 551,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/orange-and-yellow(1).jpg',
                    title: 'Orange and Yellow',
                    artist: 'Mark Rothko',
                    year: '1956',
                    rule: {
                        "monday": [27, 29, 30, 1],
                        "tuesday": [29, 31, 4, 7],
                        "wednesday": [31, 2, 3, 4],
                        "thursday": [19, 21, 13, 2],
                        "friday": [19, 21, 13, 2],
                        "saturday": [24, 22, 14, 17],
                        "sunday": [24, 25, 16, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 552,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/vertical-january-1956-1956.jpg',
                    title: 'Vertical: January 1956',
                    artist: 'Patrick Heron',
                    year: '1956',
                    rule: {
                        "monday": [24, 25, 16, 20],
                        "tuesday": [27, 29, 30, 1],
                        "wednesday": [29, 31, 4, 7],
                        "thursday": [31, 2, 3, 4],
                        "friday": [19, 21, 13, 2],
                        "saturday": [19, 21, 13, 2],
                        "sunday": [24, 22, 14, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 553,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/moonship-1972.jpg',
                    title: 'Moonship',
                    artist: 'Terry Frost',
                    year: '1972',
                    rule: {
                        "monday": [25, 23, 15, 18],
                        "tuesday": [25, 26, 17, 21],
                        "wednesday": [28, 30, 31, 2],
                        "thursday": [30, 1, 5, 8],
                        "friday": [1, 3, 4, 5],
                        "saturday": [20, 22, 14, 3],
                        "sunday": [20, 22, 14, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 554,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/modez-1971.jpg',
                    title: 'Modez',
                    artist: 'Cesar Paternosto',
                    year: '1971',
                    rule: {
                        "monday": [20, 22, 14, 3],
                        "tuesday": [25, 23, 15, 18],
                        "wednesday": [25, 26, 17, 21],
                        "thursday": [28, 30, 31, 2],
                        "friday": [30, 1, 5, 8],
                        "saturday": [1, 3, 4, 5],
                        "sunday": [20, 22, 14, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 555,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/blue-delfina-1961.jpg',
                    title: 'Blue Delfina',
                    artist: 'Jack Youngerman',
                    year: '1961',
                    rule: {
                        "monday": [20, 22, 14, 3],
                        "tuesday": [20, 22, 14, 3],
                        "wednesday": [25, 23, 15, 18],
                        "thursday": [25, 26, 17, 21],
                        "friday": [28, 30, 31, 2],
                        "saturday": [30, 1, 5, 8],
                        "sunday": [1, 3, 4, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 556,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/azalea-garden-may-1956-1956.jpeg',
                    title: 'Azalea Garden: May 1956',
                    artist: 'Patrick Heron',
                    year: '1956',
                    rule: {
                        "monday": [1, 3, 4, 5],
                        "tuesday": [20, 22, 14, 3],
                        "wednesday": [20, 22, 14, 3],
                        "thursday": [25, 23, 15, 18],
                        "friday": [25, 26, 17, 21],
                        "saturday": [28, 30, 31, 2],
                        "sunday": [30, 1, 5, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 557,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/j-ai-dit-noir-puis-rouge-puis-noir-encore-1975.jpeg',
                    title: 'J\'ai dit noir puis rouge puis noir encore',
                    artist: 'Huguette Arthur Bertrand',
                    year: '1975',
                    rule: {
                        "monday": [30, 1, 5, 8],
                        "tuesday": [1, 3, 4, 5],
                        "wednesday": [20, 22, 14, 3],
                        "thursday": [20, 22, 14, 3],
                        "friday": [25, 23, 15, 18],
                        "saturday": [25, 26, 17, 21],
                        "sunday": [28, 30, 31, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 558,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/aberddeen-i-1970.jpeg',
                    title: 'Aberddeen I',
                    artist: 'Walter Darby Bannard',
                    year: '1970',
                    rule: {
                        "monday": [28, 30, 31, 2],
                        "tuesday": [30, 1, 5, 8],
                        "wednesday": [1, 3, 4, 5],
                        "thursday": [20, 22, 14, 3],
                        "friday": [20, 22, 14, 3],
                        "saturday": [25, 23, 15, 18],
                        "sunday": [25, 26, 17, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 559,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1970.jpeg',
                    title: 'Untitled',
                    artist: 'Moshe Kupferman',
                    year: '1970',
                    rule: {
                        "monday": [25, 26, 17, 21],
                        "tuesday": [28, 30, 31, 2],
                        "wednesday": [30, 1, 5, 8],
                        "thursday": [1, 3, 4, 5],
                        "friday": [20, 22, 14, 3],
                        "saturday": [20, 22, 14, 3],
                        "sunday": [25, 23, 15, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 560,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/20-pearls-5-2003.jpeg',
                    title: '20 Pearls (5)',
                    artist: 'Richard Tuttle',
                    year: '2003',
                    rule: {
                        "monday": [26, 24, 16, 19],
                        "tuesday": [26, 27, 18, 22],
                        "wednesday": [29, 31, 1, 3],
                        "thursday": [31, 2, 6, 9],
                        "friday": [2, 4, 5, 6],
                        "saturday": [21, 23, 15, 4],
                        "sunday": [21, 23, 15, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 561,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-black-and-white-lines-on-red-background-1965.jpeg',
                    title: 'Untitled (Black and White Lines on Red Background)',
                    artist: 'Lorser Feitelson',
                    year: '1965',
                    rule: {
                        "monday": [21, 23, 15, 4],
                        "tuesday": [26, 24, 16, 19],
                        "wednesday": [26, 27, 18, 22],
                        "thursday": [29, 31, 1, 3],
                        "friday": [31, 2, 6, 9],
                        "saturday": [2, 4, 5, 6],
                        "sunday": [21, 23, 15, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 562,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/field-scar-1990.jpeg',
                    title: 'Field: Scar',
                    artist: 'Warren Rohrer',
                    year: '1990',
                    rule: {
                        "monday": [21, 23, 15, 4],
                        "tuesday": [21, 23, 15, 4],
                        "wednesday": [26, 24, 16, 19],
                        "thursday": [26, 27, 18, 22],
                        "friday": [29, 31, 1, 3],
                        "saturday": [31, 2, 6, 9],
                        "sunday": [2, 4, 5, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 563,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/au-matin-1981.jpeg',
                    title: 'Au matin',
                    artist: 'Pierre Tal-Coat',
                    year: '1981',
                    rule: {
                        "monday": [2, 4, 5, 6],
                        "tuesday": [21, 23, 15, 4],
                        "wednesday": [21, 23, 15, 4],
                        "thursday": [26, 24, 16, 19],
                        "friday": [26, 27, 18, 22],
                        "saturday": [29, 31, 1, 3],
                        "sunday": [31, 2, 6, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 564,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1965-1.jpeg',
                    title: 'Untitled',
                    artist: 'Sadamasa Motonaga',
                    year: '1965',
                    rule: {
                        "monday": [31, 2, 6, 9],
                        "tuesday": [2, 4, 5, 6],
                        "wednesday": [21, 23, 15, 4],
                        "thursday": [21, 23, 15, 4],
                        "friday": [26, 24, 16, 19],
                        "saturday": [26, 27, 18, 22],
                        "sunday": [29, 31, 1, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 565,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/take-that-back-black-282-1984.jpeg',
                    title: 'Take That Back (Black #282)',
                    artist: 'Stephen Mueller',
                    year: '1984',
                    rule: {
                        "monday": [29, 31, 1, 3],
                        "tuesday": [31, 2, 6, 9],
                        "wednesday": [2, 4, 5, 6],
                        "thursday": [21, 23, 15, 4],
                        "friday": [21, 23, 15, 4],
                        "saturday": [26, 24, 16, 19],
                        "sunday": [26, 27, 18, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 566,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/mouvement-1989.jpeg',
                    title: 'Mouvement',
                    artist: 'Aurel Cojan',
                    year: '1989',
                    rule: {
                        "monday": [26, 27, 18, 22],
                        "tuesday": [29, 31, 1, 3],
                        "wednesday": [31, 2, 6, 9],
                        "thursday": [2, 4, 5, 6],
                        "friday": [21, 23, 15, 4],
                        "saturday": [21, 23, 15, 4],
                        "sunday": [26, 24, 16, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 567,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/lepanto-panel-12.jpeg',
                    title: 'Lepanto, Part XII',
                    artist: 'Cy Twombly',
                    year: '2001',
                    rule: {
                        "monday": [27, 25, 17, 20],
                        "tuesday": [27, 28, 19, 23],
                        "wednesday": [30, 1, 2, 4],
                        "thursday": [1, 3, 7, 10],
                        "friday": [3, 5, 6, 7],
                        "saturday": [22, 24, 16, 5],
                        "sunday": [22, 24, 16, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 568,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/plutire-verticala.jpeg',
                    title: 'Vertical Floating',
                    artist: 'Constantin Blendea',
                    year: '2002',
                    rule: {
                        "monday": [22, 24, 16, 5],
                        "tuesday": [27, 25, 17, 20],
                        "wednesday": [27, 28, 19, 23],
                        "thursday": [30, 1, 2, 4],
                        "friday": [1, 3, 7, 10],
                        "saturday": [3, 5, 6, 7],
                        "sunday": [22, 24, 16, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 569,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/chroma-double-1965.jpeg',
                    title: 'Chroma Double',
                    artist: 'Howard Mehring',
                    year: '1965',
                    rule: {
                        "monday": [22, 24, 16, 5],
                        "tuesday": [22, 24, 16, 5],
                        "wednesday": [27, 25, 17, 20],
                        "thursday": [27, 28, 19, 23],
                        "friday": [30, 1, 2, 4],
                        "saturday": [1, 3, 7, 10],
                        "sunday": [3, 5, 6, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 570,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/sur-une-jambe.jpeg',
                    title: 'Sur une jambe',
                    artist: 'Hans Richter',
                    year: '?',
                    rule: {
                        "monday": [3, 5, 6, 7],
                        "tuesday": [22, 24, 16, 5],
                        "wednesday": [22, 24, 16, 5],
                        "thursday": [27, 25, 17, 20],
                        "friday": [27, 28, 19, 23],
                        "saturday": [30, 1, 2, 4],
                        "sunday": [1, 3, 7, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 571,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/enclosed-resurgence-2001.jpeg',
                    title: 'Enclosed Resurgence',
                    artist: 'Julie Mehretu',
                    year: '2001',
                    rule: {
                        "monday": [1, 3, 7, 10],
                        "tuesday": [3, 5, 6, 7],
                        "wednesday": [22, 24, 16, 5],
                        "thursday": [22, 24, 16, 5],
                        "friday": [27, 25, 17, 20],
                        "saturday": [27, 28, 19, 23],
                        "sunday": [30, 1, 2, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 572,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/konstruktion-1931.jpeg',
                    title: 'Konstruktion',
                    artist: 'Otto Gustav Carlsund',
                    year: '1931',
                    rule: {
                        "monday": [30, 1, 2, 4],
                        "tuesday": [1, 3, 7, 10],
                        "wednesday": [3, 5, 6, 7],
                        "thursday": [22, 24, 16, 5],
                        "friday": [22, 24, 16, 5],
                        "saturday": [27, 25, 17, 20],
                        "sunday": [27, 28, 19, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 573,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1987.jpeg',
                    title: 'Untitled',
                    artist: 'Hassel Smith',
                    year: '1987',
                    rule: {
                        "monday": [27, 28, 19, 23],
                        "tuesday": [30, 1, 2, 4],
                        "wednesday": [1, 3, 7, 10],
                        "thursday": [3, 5, 6, 7],
                        "friday": [22, 24, 16, 5],
                        "saturday": [22, 24, 16, 5],
                        "sunday": [27, 25, 17, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 574,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/montaru-9-1953.jpeg',
                    title: 'Montaru 9',
                    artist: 'Willi Baumeister',
                    year: '1953',
                    rule: {
                        "monday": [28, 26, 18, 21],
                        "tuesday": [28, 29, 20, 24],
                        "wednesday": [31, 2, 3, 5],
                        "thursday": [2, 4, 8, 11],
                        "friday": [4, 6, 7, 8],
                        "saturday": [23, 25, 17, 6],
                        "sunday": [23, 25, 17, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 575,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/korfu-1965.jpeg',
                    title: 'Korfu',
                    artist: 'Thomas Downing',
                    year: '1965',
                    rule: {
                        "monday": [23, 25, 17, 6],
                        "tuesday": [28, 26, 18, 21],
                        "wednesday": [28, 29, 20, 24],
                        "thursday": [31, 2, 3, 5],
                        "friday": [2, 4, 8, 11],
                        "saturday": [4, 6, 7, 8],
                        "sunday": [23, 25, 17, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 576,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/dux-et-comes-i-1932(1).jpeg',
                    title: 'Dux et Comes I',
                    artist: 'Edward Wadsworth',
                    year: '1932',
                    rule: {
                        "monday": [23, 25, 17, 6],
                        "tuesday": [23, 25, 17, 6],
                        "wednesday": [28, 26, 18, 21],
                        "thursday": [28, 29, 20, 24],
                        "friday": [31, 2, 3, 5],
                        "saturday": [2, 4, 8, 11],
                        "sunday": [4, 6, 7, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 577,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/black-metamorphosis-1950.jpeg',
                    title: 'Black Metamorphosis',
                    artist: 'Willi Baumeister',
                    year: '1950',
                    rule: {
                        "monday": [4, 6, 7, 8],
                        "tuesday": [23, 25, 17, 6],
                        "wednesday": [23, 25, 17, 6],
                        "thursday": [28, 26, 18, 21],
                        "friday": [28, 29, 20, 24],
                        "saturday": [31, 2, 3, 5],
                        "sunday": [2, 4, 8, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 578,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/secret-1966.jpeg',
                    title: 'Secret',
                    artist: 'Rodolfo Arico',
                    year: '1966',
                    rule: {
                        "monday": [2, 4, 8, 11],
                        "tuesday": [4, 6, 7, 8],
                        "wednesday": [23, 25, 17, 6],
                        "thursday": [23, 25, 17, 6],
                        "friday": [28, 26, 18, 21],
                        "saturday": [28, 29, 20, 24],
                        "sunday": [31, 2, 3, 5]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 579,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1960.jpeg',
                    title: 'Composition',
                    artist: 'Francois Arnal',
                    year: '1960',
                    rule: {
                        "monday": [31, 2, 3, 5],
                        "tuesday": [2, 4, 8, 11],
                        "wednesday": [4, 6, 7, 8],
                        "thursday": [23, 25, 17, 6],
                        "friday": [23, 25, 17, 6],
                        "saturday": [28, 26, 18, 21],
                        "sunday": [28, 29, 20, 24]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 580,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/goost-halv-1966.jpeg',
                    title: 'Goost Halv',
                    artist: 'Robert Huot',
                    year: '1966',
                    rule: {
                        "monday": [28, 29, 20, 24],
                        "tuesday": [31, 2, 3, 5],
                        "wednesday": [2, 4, 8, 11],
                        "thursday": [4, 6, 7, 8],
                        "friday": [23, 25, 17, 6],
                        "saturday": [23, 25, 17, 6],
                        "sunday": [28, 26, 18, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 581,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/s-rie-amaz-nica-n-27-1970.jpeg',
                    title: 'Série Amazônica n° 27',
                    artist: 'Ivan Serpa',
                    year: '1970',
                    rule: {
                        "monday": [29, 27, 19, 22],
                        "tuesday": [29, 30, 21, 25],
                        "wednesday": [1, 3, 4, 6],
                        "thursday": [3, 5, 9, 12],
                        "friday": [5, 7, 8, 9],
                        "saturday": [24, 26, 18, 7],
                        "sunday": [24, 26, 18, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 582,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composi-o-geom-trica.jpeg',
                    title: 'Composição geométrica',
                    artist: 'Rubem Ludolf',
                    year: '?',
                    rule: {
                        "monday": [24, 26, 18, 7],
                        "tuesday": [29, 27, 19, 22],
                        "wednesday": [29, 30, 21, 25],
                        "thursday": [1, 3, 4, 6],
                        "friday": [3, 5, 9, 12],
                        "saturday": [5, 7, 8, 9],
                        "sunday": [24, 26, 18, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 583,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/156-1958.jpeg',
                    title: '#156',
                    artist: 'Adolf Fleischmann',
                    year: '1958',
                    rule: {
                        "monday": [24, 26, 18, 7],
                        "tuesday": [24, 26, 18, 7],
                        "wednesday": [29, 27, 19, 22],
                        "thursday": [29, 30, 21, 25],
                        "friday": [1, 3, 4, 6],
                        "saturday": [3, 5, 9, 12],
                        "sunday": [5, 7, 8, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 584,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/spazio-bruno-1967.jpeg',
                    title: 'Spazio bruno',
                    artist: 'Giuseppe Santomaso',
                    year: '1967',
                    rule: {
                        "monday": [5, 7, 8, 9],
                        "tuesday": [24, 26, 18, 7],
                        "wednesday": [24, 26, 18, 7],
                        "thursday": [29, 27, 19, 22],
                        "friday": [29, 30, 21, 25],
                        "saturday": [1, 3, 4, 6],
                        "sunday": [3, 5, 9, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 585,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/unknown-title.jpeg',
                    title: 'Unknown Title',
                    artist: 'Ion Alin Gheorghiu',
                    year: '?',
                    rule: {
                        "monday": [3, 5, 9, 12],
                        "tuesday": [5, 7, 8, 9],
                        "wednesday": [24, 26, 18, 7],
                        "thursday": [24, 26, 18, 7],
                        "friday": [29, 27, 19, 22],
                        "saturday": [29, 30, 21, 25],
                        "sunday": [1, 3, 4, 6]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 586,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/iridescent-interpenetration-no-5-eucalyptus-1914.jpeg',
                    title: 'Iridescent Interpenetration No.5 - Eucalyptus',
                    artist: 'Giacomo Balla',
                    year: '1914',
                    rule: {
                        "monday": [1, 3, 4, 6],
                        "tuesday": [3, 5, 9, 12],
                        "wednesday": [5, 7, 8, 9],
                        "thursday": [24, 26, 18, 7],
                        "friday": [24, 26, 18, 7],
                        "saturday": [29, 27, 19, 22],
                        "sunday": [29, 30, 21, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 587,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/planet-mercury-passing-in-front-of-the-sun-1914-2.jpeg',
                    title: 'Planet Mercury passing in front of the Sun',
                    artist: 'Giacomo Balla',
                    year: '1914',
                    rule: {
                        "monday": [29, 30, 21, 25],
                        "tuesday": [1, 3, 4, 6],
                        "wednesday": [3, 5, 9, 12],
                        "thursday": [5, 7, 8, 9],
                        "friday": [24, 26, 18, 7],
                        "saturday": [24, 26, 18, 7],
                        "sunday": [29, 27, 19, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 588,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/painting-deployment-intersection-1914.jpeg',
                    title: 'Painting (Deployment-intersection)',
                    artist: 'Amadeo de Souza-Cardoso',
                    year: '1914',
                    rule: {
                        "monday": [30, 28, 20, 23],
                        "tuesday": [30, 31, 22, 26],
                        "wednesday": [2, 4, 5, 7],
                        "thursday": [4, 6, 10, 13],
                        "friday": [6, 8, 9, 10],
                        "saturday": [25, 27, 19, 8],
                        "sunday": [25, 27, 19, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 589,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/synchromy-in-orange-to-form-1914.jpeg',
                    title: 'Synchromy in Orange: To Form',
                    artist: 'Morgan Russell',
                    year: '1914',
                    rule: {
                        "monday": [25, 27, 19, 8],
                        "tuesday": [30, 28, 20, 23],
                        "wednesday": [30, 31, 22, 26],
                        "thursday": [2, 4, 5, 7],
                        "friday": [4, 6, 10, 13],
                        "saturday": [6, 8, 9, 10],
                        "sunday": [25, 27, 19, 8]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 590,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/in-the-hold-1914.jpeg',
                    title: 'In the Hold',
                    artist: 'David Bomberg',
                    year: '1914',
                    rule: {
                        "monday": [25, 27, 19, 8],
                        "tuesday": [25, 27, 19, 8],
                        "wednesday": [30, 28, 20, 23],
                        "thursday": [30, 31, 22, 26],
                        "friday": [2, 4, 5, 7],
                        "saturday": [4, 6, 10, 13],
                        "sunday": [6, 8, 9, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 591,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/terrestrial-forest-form-1917.jpeg',
                    title: 'Terrestrial Forest Form',
                    artist: 'Jean Arp',
                    year: '1917',
                    rule: {
                        "monday": [6, 8, 9, 10],
                        "tuesday": [25, 27, 19, 8],
                        "wednesday": [25, 27, 19, 8],
                        "thursday": [30, 28, 20, 23],
                        "friday": [30, 31, 22, 26],
                        "saturday": [2, 4, 5, 7],
                        "sunday": [4, 6, 10, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 592,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-ix-opus-18-1917-1917.jpeg',
                    title: 'Composition IX, opus 18, 1917',
                    artist: 'Theo van Doesburg',
                    year: '1917',
                    rule: {
                        "monday": [4, 6, 10, 13],
                        "tuesday": [6, 8, 9, 10],
                        "wednesday": [25, 27, 19, 8],
                        "thursday": [25, 27, 19, 8],
                        "friday": [30, 28, 20, 23],
                        "saturday": [30, 31, 22, 26],
                        "sunday": [2, 4, 5, 7]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 593,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/dance-ii-1917.jpeg',
                    title: 'Dance II',
                    artist: 'Theo van Doesburg',
                    year: '1917',
                    rule: {
                        "monday": [2, 4, 5, 7],
                        "tuesday": [4, 6, 10, 13],
                        "wednesday": [6, 8, 9, 10],
                        "thursday": [25, 27, 19, 8],
                        "friday": [25, 27, 19, 8],
                        "saturday": [30, 28, 20, 23],
                        "sunday": [30, 31, 22, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 594,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/atom-series-no-8-atom-on-the-ether-plane-is-in-constant-change-between-rest-and-activity-at-the-1917.jpeg',
                    title: 'Atom Series, No. 8: Atom on the ether plane is in constant change between rest and activity. At the rest it pulls itself inwards. This affects the earthly atom as giving of force.',
                    artist: 'Hilma af Klint',
                    year: '1917',
                    rule: {
                        "monday": [30, 31, 22, 26],
                        "tuesday": [2, 4, 5, 7],
                        "wednesday": [4, 6, 10, 13],
                        "thursday": [6, 8, 9, 10],
                        "friday": [25, 27, 19, 8],
                        "saturday": [25, 27, 19, 8],
                        "sunday": [30, 28, 20, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 595,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-with-gray-and-light-brown-1918.jpeg',
                    title: 'Composition with Gray and Light Brown',
                    artist: 'Piet Mondrian',
                    year: '1918',
                    rule: {
                        "monday": [31, 29, 21, 24],
                        "tuesday": [31, 1, 23, 27],
                        "wednesday": [3, 5, 6, 8],
                        "thursday": [5, 7, 11, 14],
                        "friday": [7, 9, 10, 11],
                        "saturday": [26, 28, 20, 9],
                        "sunday": [26, 28, 20, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 596,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-circus-1918.jpeg',
                    title: 'The Circus',
                    artist: 'Fernand Leger',
                    year: '1918',
                    rule: {
                        "monday": [26, 28, 20, 9],
                        "tuesday": [31, 29, 21, 24],
                        "wednesday": [31, 1, 23, 27],
                        "thursday": [3, 5, 6, 8],
                        "friday": [5, 7, 11, 14],
                        "saturday": [7, 9, 10, 11],
                        "sunday": [26, 28, 20, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 597,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/blue-black-red-1918.jpeg',
                    title: 'Blue, black, red',
                    artist: 'Aleksandra Ekster',
                    year: '1917 - 1918',
                    rule: {
                        "monday": [26, 28, 20, 9],
                        "tuesday": [26, 28, 20, 9],
                        "wednesday": [31, 29, 21, 24],
                        "thursday": [31, 1, 23, 27],
                        "friday": [3, 5, 6, 8],
                        "saturday": [5, 7, 11, 14],
                        "sunday": [7, 9, 10, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 598,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/suprematism-1918.jpeg',
                    title: 'Suprematism',
                    artist: 'Kazimir Malevich',
                    year: '1918',
                    rule: {
                        "monday": [7, 9, 10, 11],
                        "tuesday": [26, 28, 20, 9],
                        "wednesday": [26, 28, 20, 9],
                        "thursday": [31, 29, 21, 24],
                        "friday": [31, 1, 23, 27],
                        "saturday": [3, 5, 6, 8],
                        "sunday": [5, 7, 11, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 599,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-x-1918.jpeg',
                    title: 'Composition X',
                    artist: 'Theo van Doesburg',
                    year: '1918',
                    rule: {
                        "monday": [6, 8, 12, 15],
                        "tuesday": [8, 10, 11, 12],
                        "wednesday": [27, 29, 21, 10],
                        "thursday": [27, 29, 21, 10],
                        "friday": [1, 30, 22, 25],
                        "saturday": [1, 2, 24, 28],
                        "sunday": [4, 6, 7, 9]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 600,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-xiii-woman-in-studio-1918.jpeg',
                    title: 'Composition XIII (Woman in studio)',
                    artist: 'Theo van Doesburg',
                    year: '1918',
                    rule: {
                        "monday": [4, 6, 7, 9],
                        "tuesday": [6, 8, 12, 15],
                        "wednesday": [8, 10, 11, 12],
                        "thursday": [27, 29, 21, 10],
                        "friday": [27, 29, 21, 10],
                        "saturday": [1, 30, 22, 25],
                        "sunday": [1, 2, 24, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 601,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/collage-1918.jpeg',
                    title: 'Collage',
                    artist: 'Olga Rozanova',
                    year: '1918',
                    rule: {
                        "monday": [1, 2, 24, 28],
                        "tuesday": [4, 6, 7, 9],
                        "wednesday": [6, 8, 12, 15],
                        "thursday": [8, 10, 11, 12],
                        "friday": [27, 29, 21, 10],
                        "saturday": [27, 29, 21, 10],
                        "sunday": [1, 30, 22, 25]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 602,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/blue-and-red-landscape-1918.jpeg',
                    title: 'Blue and Red Landscape',
                    artist: 'Janos Mattis-Teutsch',
                    year: '1918',
                    rule: {
                        "monday": [2, 31, 23, 26],
                        "tuesday": [2, 3, 25, 29],
                        "wednesday": [5, 7, 8, 10],
                        "thursday": [7, 9, 13, 16],
                        "friday": [9, 11, 12, 13],
                        "saturday": [28, 30, 22, 11],
                        "sunday": [28, 30, 22, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 603,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/bild-no-84-1918.jpeg',
                    title: 'Bild no. 84',
                    artist: 'Jacoba van Heemskerck',
                    year: '1918',
                    rule: {
                        "monday": [28, 30, 22, 11],
                        "tuesday": [2, 31, 23, 26],
                        "wednesday": [2, 3, 25, 29],
                        "thursday": [5, 7, 8, 10],
                        "friday": [7, 9, 13, 16],
                        "saturday": [9, 11, 12, 13],
                        "sunday": [28, 30, 22, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 604,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/martwa-natura-1918.jpeg',
                    title: 'Martwa natura',
                    artist: 'Wladyslaw Strzeminski',
                    year: '1918',
                    rule: {
                        "monday": [28, 30, 22, 11],
                        "tuesday": [28, 30, 22, 11],
                        "wednesday": [2, 31, 23, 26],
                        "thursday": [2, 3, 25, 29],
                        "friday": [5, 7, 8, 10],
                        "saturday": [7, 9, 13, 16],
                        "sunday": [9, 11, 12, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 605,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1918--.jpeg',
                    title: 'Untitled',
                    artist: 'Sophie Taeuber-Arp',
                    year: '1918',
                    rule: {
                        "monday": [9, 11, 12, 13],
                        "tuesday": [28, 30, 22, 11],
                        "wednesday": [28, 30, 22, 11],
                        "thursday": [2, 31, 23, 26],
                        "friday": [2, 3, 25, 29],
                        "saturday": [5, 7, 8, 10],
                        "sunday": [7, 9, 13, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 606,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/variation-sonnenaufgang-1918.jpeg',
                    title: 'Variation: Sonnenaufgang',
                    artist: 'Alexej von Jawlensky',
                    year: '1918',
                    rule: {
                        "monday": [7, 9, 13, 16],
                        "tuesday": [9, 11, 12, 13],
                        "wednesday": [28, 30, 22, 11],
                        "thursday": [28, 30, 22, 11],
                        "friday": [2, 31, 23, 26],
                        "saturday": [2, 3, 25, 29],
                        "sunday": [5, 7, 8, 10]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 607,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-with-grid-ix-1919.jpeg',
                    title: 'Composition with Grid IX',
                    artist: 'Piet Mondrian',
                    year: '1919',
                    rule: {
                        "monday": [5, 7, 8, 10],
                        "tuesday": [7, 9, 13, 16],
                        "wednesday": [9, 11, 12, 13],
                        "thursday": [28, 30, 22, 11],
                        "friday": [28, 30, 22, 11],
                        "saturday": [2, 31, 23, 26],
                        "sunday": [2, 3, 25, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 608,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/discs-1919.jpeg',
                    title: 'Discs',
                    artist: 'Fernand Leger',
                    year: '1918 - 1919',
                    rule: {
                        "monday": [2, 3, 25, 29],
                        "tuesday": [5, 7, 8, 10],
                        "wednesday": [7, 9, 13, 16],
                        "thursday": [9, 11, 12, 13],
                        "friday": [28, 30, 22, 11],
                        "saturday": [28, 30, 22, 11],
                        "sunday": [2, 31, 23, 26]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 609,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/speakers-on-tribune-1919.jpeg',
                    title: 'Speakers on Tribune',
                    artist: 'Kazimir Malevich',
                    year: '1919',
                    rule: {
                        "monday": [3, 1, 24, 27],
                        "tuesday": [3, 4, 26, 30],
                        "wednesday": [6, 8, 9, 11],
                        "thursday": [8, 10, 14, 17],
                        "friday": [10, 12, 13, 14],
                        "saturday": [29, 31, 23, 12],
                        "sunday": [29, 31, 23, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 610,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/linienrhythmus-1919.jpeg',
                    title: 'Linienrhythmus',
                    artist: 'Johannes Itten',
                    year: '1919',
                    rule: {
                        "monday": [29, 31, 23, 12],
                        "tuesday": [3, 1, 24, 27],
                        "wednesday": [3, 4, 26, 30],
                        "thursday": [6, 8, 9, 11],
                        "friday": [8, 10, 14, 17],
                        "saturday": [10, 12, 13, 14],
                        "sunday": [29, 31, 23, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 611,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/construction-for-noble-ladies-1919.jpeg',
                    title: 'Construction for Noble Ladies',
                    artist: 'Kurt Schwitters',
                    year: '1919',
                    rule: {
                        "monday": [29, 31, 23, 12],
                        "tuesday": [29, 31, 23, 12],
                        "wednesday": [3, 1, 24, 27],
                        "thursday": [3, 4, 26, 30],
                        "friday": [6, 8, 9, 11],
                        "saturday": [8, 10, 14, 17],
                        "sunday": [10, 12, 13, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 612,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/revolving-1919.jpeg',
                    title: 'Revolving',
                    artist: 'Kurt Schwitters',
                    year: '1919',
                    rule: {
                        "monday": [10, 12, 13, 14],
                        "tuesday": [29, 31, 23, 12],
                        "wednesday": [29, 31, 23, 12],
                        "thursday": [3, 1, 24, 27],
                        "friday": [3, 4, 26, 30],
                        "saturday": [6, 8, 9, 11],
                        "sunday": [8, 10, 14, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 613,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1919-1(5).jpeg',
                    title: 'Composition',
                    artist: 'Janos Mattis-Teutsch',
                    year: '1919',
                    rule: {
                        "monday": [8, 10, 14, 17],
                        "tuesday": [10, 12, 13, 14],
                        "wednesday": [29, 31, 23, 12],
                        "thursday": [29, 31, 23, 12],
                        "friday": [3, 1, 24, 27],
                        "saturday": [3, 4, 26, 30],
                        "sunday": [6, 8, 9, 11]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 614,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1919-5.jpeg',
                    title: 'Composition',
                    artist: 'Janos Mattis-Teutsch',
                    year: '1919',
                    rule: {
                        "monday": [6, 8, 9, 11],
                        "tuesday": [8, 10, 14, 17],
                        "wednesday": [10, 12, 13, 14],
                        "thursday": [29, 31, 23, 12],
                        "friday": [29, 31, 23, 12],
                        "saturday": [3, 1, 24, 27],
                        "sunday": [3, 4, 26, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 615,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1919.jpeg',
                    title: 'Untitled',
                    artist: 'Julius Evola',
                    year: '1919',
                    rule: {
                        "monday": [3, 4, 26, 30],
                        "tuesday": [6, 8, 9, 11],
                        "wednesday": [8, 10, 14, 17],
                        "thursday": [10, 12, 13, 14],
                        "friday": [29, 31, 23, 12],
                        "saturday": [29, 31, 23, 12],
                        "sunday": [3, 1, 24, 27]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 616,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1919.jpeg',
                    title: 'Composition',
                    artist: 'Georges Valmier',
                    year: '1919',
                    rule: {
                        "monday": [4, 2, 25, 28],
                        "tuesday": [4, 5, 27, 31],
                        "wednesday": [7, 9, 10, 12],
                        "thursday": [9, 11, 15, 18],
                        "friday": [11, 13, 14, 15],
                        "saturday": [30, 1, 24, 13],
                        "sunday": [30, 1, 24, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 617,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/1919-spicologia-edit-1.jpeg',
                    title: 'Spicologia di 1 Uomo',
                    artist: 'Benedetta Cappa',
                    year: '1919',
                    rule: {
                        "monday": [30, 1, 24, 13],
                        "tuesday": [4, 2, 25, 28],
                        "wednesday": [4, 5, 27, 31],
                        "thursday": [7, 9, 10, 12],
                        "friday": [9, 11, 15, 18],
                        "saturday": [11, 13, 14, 15],
                        "sunday": [30, 1, 24, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 618,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/suprematic-compositional-elements-1920.jpeg',
                    title: 'Suprematic compositional elements',
                    artist: 'Kazimir Malevich',
                    year: '1920',
                    rule: {
                        "monday": [30, 1, 24, 13],
                        "tuesday": [30, 1, 24, 13],
                        "wednesday": [4, 2, 25, 28],
                        "thursday": [4, 5, 27, 31],
                        "friday": [7, 9, 10, 12],
                        "saturday": [9, 11, 15, 18],
                        "sunday": [11, 13, 14, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 619,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-principle-of-painting-the-walls-1920.jpeg',
                    title: 'The principle of painting the walls',
                    artist: 'Kazimir Malevich',
                    year: '1920',
                    rule: {
                        "monday": [11, 13, 14, 15],
                        "tuesday": [30, 1, 24, 13],
                        "wednesday": [30, 1, 24, 13],
                        "thursday": [4, 2, 25, 28],
                        "friday": [4, 5, 27, 31],
                        "saturday": [7, 9, 10, 12],
                        "sunday": [9, 11, 15, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 620,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/pure-painting-1920.jpeg',
                    title: 'Pure painting',
                    artist: 'Theo van Doesburg',
                    year: '1920',
                    rule: {
                        "monday": [9, 11, 15, 18],
                        "tuesday": [11, 13, 14, 15],
                        "wednesday": [30, 1, 24, 13],
                        "thursday": [30, 1, 24, 13],
                        "friday": [4, 2, 25, 28],
                        "saturday": [4, 5, 27, 31],
                        "sunday": [7, 9, 10, 12]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 621,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/numbers-in-love-1920.jpeg',
                    title: 'Numbers in Love',
                    artist: 'Giacomo Balla',
                    year: '1920',
                    rule: {
                        "monday": [7, 9, 10, 12],
                        "tuesday": [9, 11, 15, 18],
                        "wednesday": [11, 13, 14, 15],
                        "thursday": [30, 1, 24, 13],
                        "friday": [30, 1, 24, 13],
                        "saturday": [4, 2, 25, 28],
                        "sunday": [4, 5, 27, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 622,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/merzpicture-thirty-one-1920.jpeg',
                    title: 'Merzpicture Thirty-One',
                    artist: 'Kurt Schwitters',
                    year: '1920',
                    rule: {
                        "monday": [4, 5, 27, 31],
                        "tuesday": [7, 9, 10, 12],
                        "wednesday": [9, 11, 15, 18],
                        "thursday": [11, 13, 14, 15],
                        "friday": [30, 1, 24, 13],
                        "saturday": [30, 1, 24, 13],
                        "sunday": [4, 2, 25, 28]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 623,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-dada-1920.jpeg',
                    title: 'Composition Dada',
                    artist: 'Sophie Taeuber-Arp',
                    year: '1920',
                    rule: {
                        "monday": [5, 3, 26, 29],
                        "tuesday": [5, 6, 28, 1],
                        "wednesday": [8, 10, 11, 13],
                        "thursday": [10, 12, 16, 19],
                        "friday": [12, 14, 15, 16],
                        "saturday": [31, 2, 25, 14],
                        "sunday": [31, 2, 25, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 624,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1920(3).jpeg',
                    title: 'Composition',
                    artist: 'Janos Mattis-Teutsch',
                    year: '1920',
                    rule: {
                        "monday": [31, 2, 25, 14],
                        "tuesday": [5, 3, 26, 29],
                        "wednesday": [5, 6, 28, 1],
                        "thursday": [8, 10, 11, 13],
                        "friday": [10, 12, 16, 19],
                        "saturday": [12, 14, 15, 16],
                        "sunday": [31, 2, 25, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 625,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1920-5.jpeg',
                    title: 'Composition',
                    artist: 'Janos Mattis-Teutsch',
                    year: '1920',
                    rule: {
                        "monday": [31, 2, 25, 14],
                        "tuesday": [31, 2, 25, 14],
                        "wednesday": [5, 3, 26, 29],
                        "thursday": [5, 6, 28, 1],
                        "friday": [8, 10, 11, 13],
                        "saturday": [10, 12, 16, 19],
                        "sunday": [12, 14, 15, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 626,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/planar-relation-1920.jpeg',
                    title: 'Planar Relation',
                    artist: 'Willi Baumeister',
                    year: '1920',
                    rule: {
                        "monday": [12, 14, 15, 16],
                        "tuesday": [31, 2, 25, 14],
                        "wednesday": [31, 2, 25, 14],
                        "thursday": [5, 3, 26, 29],
                        "friday": [5, 6, 28, 1],
                        "saturday": [8, 10, 11, 13],
                        "sunday": [10, 12, 16, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 627,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/halraam-villa-wulffraat-1920.jpeg',
                    title: 'Halraam Villa Wulffraat',
                    artist: 'Jacoba van Heemskerck',
                    year: '1920',
                    rule: {
                        "monday": [10, 12, 16, 19],
                        "tuesday": [12, 14, 15, 16],
                        "wednesday": [31, 2, 25, 14],
                        "thursday": [31, 2, 25, 14],
                        "friday": [5, 3, 26, 29],
                        "saturday": [5, 6, 28, 1],
                        "sunday": [8, 10, 11, 13]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 628,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/abstract-composition-1920.jpeg',
                    title: 'Abstract Composition',
                    artist: 'Erich Buchholz',
                    year: '1920',
                    rule: {
                        "monday": [8, 10, 11, 13],
                        "tuesday": [10, 12, 16, 19],
                        "wednesday": [12, 14, 15, 16],
                        "thursday": [31, 2, 25, 14],
                        "friday": [31, 2, 25, 14],
                        "saturday": [5, 3, 26, 29],
                        "sunday": [5, 6, 28, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 629,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/red-square-in-white-circle-1920.jpeg',
                    title: 'Red Square in White Circle',
                    artist: 'Erich Buchholz',
                    year: '1920',
                    rule: {
                        "monday": [5, 6, 28, 1],
                        "tuesday": [8, 10, 11, 13],
                        "wednesday": [10, 12, 16, 19],
                        "thursday": [12, 14, 15, 16],
                        "friday": [31, 2, 25, 14],
                        "saturday": [31, 2, 25, 14],
                        "sunday": [5, 3, 26, 29]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 630,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/cubist-composition-1920-1.jpeg',
                    title: 'Cubist Composition',
                    artist: 'Georges Valmier',
                    year: '1920',
                    rule: {
                        "monday": [6, 4, 27, 30],
                        "tuesday": [6, 7, 29, 2],
                        "wednesday": [9, 11, 12, 14],
                        "thursday": [11, 13, 17, 20],
                        "friday": [13, 15, 16, 17],
                        "saturday": [1, 3, 26, 15],
                        "sunday": [1, 3, 26, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 631,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/white-stroke-1920.jpeg',
                    title: 'White Line',
                    artist: 'Wassily Kandinsky',
                    year: '1920',
                    rule: {
                        "monday": [1, 3, 26, 15],
                        "tuesday": [6, 4, 27, 30],
                        "wednesday": [6, 7, 29, 2],
                        "thursday": [9, 11, 12, 14],
                        "friday": [11, 13, 17, 20],
                        "saturday": [13, 15, 16, 17],
                        "sunday": [1, 3, 26, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 632,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/renewal-suprematist-square-1920.jpeg',
                    title: 'Renewal Suprematist square',
                    artist: 'Kazimir Malevich',
                    year: '1920',
                    rule: {
                        "monday": [1, 3, 26, 15],
                        "tuesday": [1, 3, 26, 15],
                        "wednesday": [6, 4, 27, 30],
                        "thursday": [6, 7, 29, 2],
                        "friday": [9, 11, 12, 14],
                        "saturday": [11, 13, 17, 20],
                        "sunday": [13, 15, 16, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 633,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-xx-1920.jpeg',
                    title: 'Composition XX',
                    artist: 'Theo van Doesburg',
                    year: '1920',
                    rule: {
                        "monday": [13, 15, 16, 17],
                        "tuesday": [1, 3, 26, 15],
                        "wednesday": [1, 3, 26, 15],
                        "thursday": [6, 4, 27, 30],
                        "friday": [6, 7, 29, 2],
                        "saturday": [9, 11, 12, 14],
                        "sunday": [11, 13, 17, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 634,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/lands.jpeg',
                    title: 'Lands',
                    artist: 'Laszlo Moholy-Nagy',
                    year: 'c.1920',
                    rule: {
                        "monday": [11, 13, 17, 20],
                        "tuesday": [13, 15, 16, 17],
                        "wednesday": [1, 3, 26, 15],
                        "thursday": [1, 3, 26, 15],
                        "friday": [6, 4, 27, 30],
                        "saturday": [6, 7, 29, 2],
                        "sunday": [9, 11, 12, 14]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 635,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/science-against-obscurantism-1920.jpeg',
                    title: 'Science against Obscurantism',
                    artist: 'Giacomo Balla',
                    year: '1920',
                    rule: {
                        "monday": [9, 11, 12, 14],
                        "tuesday": [11, 13, 17, 20],
                        "wednesday": [13, 15, 16, 17],
                        "thursday": [1, 3, 26, 15],
                        "friday": [1, 3, 26, 15],
                        "saturday": [6, 4, 27, 30],
                        "sunday": [6, 7, 29, 2]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 636,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/lucky-strike-1921.jpeg',
                    title: 'Lucky Strike',
                    artist: 'Stuart Davis',
                    year: '1921',
                    rule: {
                        "monday": [6, 7, 29, 2],
                        "tuesday": [9, 11, 12, 14],
                        "wednesday": [11, 13, 17, 20],
                        "thursday": [13, 15, 16, 17],
                        "friday": [1, 3, 26, 15],
                        "saturday": [1, 3, 26, 15],
                        "sunday": [6, 4, 27, 30]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 637,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/bild-no-131-1921.jpeg',
                    title: 'Bild no. 131',
                    artist: 'Jacoba van Heemskerck',
                    year: '1921',
                    rule: {
                        "monday": [7, 5, 28, 31],
                        "tuesday": [7, 8, 30, 3],
                        "wednesday": [10, 12, 13, 15],
                        "thursday": [12, 14, 18, 21],
                        "friday": [14, 16, 17, 18],
                        "saturday": [2, 4, 27, 16],
                        "sunday": [2, 4, 27, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 638,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/black-frame-1922.jpeg',
                    title: 'Black Frame',
                    artist: 'Wassily Kandinsky',
                    year: '1922',
                    rule: {
                        "monday": [2, 4, 27, 16],
                        "tuesday": [7, 5, 28, 31],
                        "wednesday": [7, 8, 30, 3],
                        "thursday": [10, 12, 13, 15],
                        "friday": [12, 14, 18, 21],
                        "saturday": [14, 16, 17, 18],
                        "sunday": [2, 4, 27, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 639,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/small-worlds-ii-1922.jpeg',
                    title: 'Small worlds II',
                    artist: 'Wassily Kandinsky',
                    year: '1922',
                    rule: {
                        "monday": [2, 4, 27, 16],
                        "tuesday": [2, 4, 27, 16],
                        "wednesday": [7, 5, 28, 31],
                        "thursday": [7, 8, 30, 3],
                        "friday": [10, 12, 13, 15],
                        "saturday": [12, 14, 18, 21],
                        "sunday": [14, 16, 17, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 640,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/small-worlds-vii-1922.jpeg',
                    title: 'Small Worlds VII',
                    artist: 'Wassily Kandinsky',
                    year: '1922',
                    rule: {
                        "monday": [14, 16, 17, 18],
                        "tuesday": [2, 4, 27, 16],
                        "wednesday": [2, 4, 27, 16],
                        "thursday": [7, 5, 28, 31],
                        "friday": [7, 8, 30, 3],
                        "saturday": [10, 12, 13, 15],
                        "sunday": [12, 14, 18, 21]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 641,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/bookplate-b-g-escher-beer.jpeg',
                    title: 'Bookplate B.G. Escher [Beer]',
                    artist: 'M.C. Escher',
                    year: '1922',
                    rule: {
                        "monday": [12, 14, 18, 21],
                        "tuesday": [14, 16, 17, 18],
                        "wednesday": [2, 4, 27, 16],
                        "thursday": [2, 4, 27, 16],
                        "friday": [7, 5, 28, 31],
                        "saturday": [7, 8, 30, 3],
                        "sunday": [10, 12, 13, 15]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 642,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-xxii-1922.jpeg',
                    title: 'Composition XXII',
                    artist: 'Theo van Doesburg',
                    year: '1922',
                    rule: {
                        "monday": [10, 12, 13, 15],
                        "tuesday": [12, 14, 18, 21],
                        "wednesday": [14, 16, 17, 18],
                        "thursday": [2, 4, 27, 16],
                        "friday": [2, 4, 27, 16],
                        "saturday": [7, 5, 28, 31],
                        "sunday": [7, 8, 30, 3]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 643,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-k-iv-1922.jpeg',
                    title: 'Composition K IV',
                    artist: 'Laszlo Moholy-Nagy',
                    year: '1922',
                    rule: {
                        "monday": [7, 8, 30, 3],
                        "tuesday": [10, 12, 13, 15],
                        "wednesday": [12, 14, 18, 21],
                        "thursday": [14, 16, 17, 18],
                        "friday": [2, 4, 27, 16],
                        "saturday": [2, 4, 27, 16],
                        "sunday": [7, 5, 28, 31]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 644,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/santa-claus-1922.jpeg',
                    title: 'Santa Claus',
                    artist: 'Kurt Schwitters',
                    year: '1922',
                    rule: {
                        "monday": [8, 6, 29, 1],
                        "tuesday": [8, 9, 31, 4],
                        "wednesday": [11, 13, 14, 16],
                        "thursday": [13, 15, 19, 22],
                        "friday": [15, 17, 18, 19],
                        "saturday": [3, 5, 28, 17],
                        "sunday": [3, 5, 28, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 645,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1922(1).jpeg',
                    title: 'Untitled',
                    artist: 'Hans Hartung',
                    year: '1922',
                    rule: {
                        "monday": [3, 5, 28, 17],
                        "tuesday": [8, 6, 29, 1],
                        "wednesday": [8, 9, 31, 4],
                        "thursday": [11, 13, 14, 16],
                        "friday": [13, 15, 19, 22],
                        "saturday": [15, 17, 18, 19],
                        "sunday": [3, 5, 28, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 646,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1922-3.jpeg',
                    title: 'Composition',
                    artist: 'Janos Mattis-Teutsch',
                    year: '1922',
                    rule: {
                        "monday": [3, 5, 28, 17],
                        "tuesday": [3, 5, 28, 17],
                        "wednesday": [8, 6, 29, 1],
                        "thursday": [8, 9, 31, 4],
                        "friday": [11, 13, 14, 16],
                        "saturday": [13, 15, 19, 22],
                        "sunday": [15, 17, 18, 19]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 647,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1922-7.jpeg',
                    title: 'Composition',
                    artist: 'Janos Mattis-Teutsch',
                    year: '1922',
                    rule: {
                        "monday": [15, 17, 18, 19],
                        "tuesday": [3, 5, 28, 17],
                        "wednesday": [3, 5, 28, 17],
                        "thursday": [8, 6, 29, 1],
                        "friday": [8, 9, 31, 4],
                        "saturday": [11, 13, 14, 16],
                        "sunday": [13, 15, 19, 22]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 648,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1922-11.jpeg',
                    title: 'Composition',
                    artist: 'Janos Mattis-Teutsch',
                    year: '1922',
                    rule: {
                        "monday": [13, 15, 19, 22],
                        "tuesday": [15, 17, 18, 19],
                        "wednesday": [3, 5, 28, 17],
                        "thursday": [3, 5, 28, 17],
                        "friday": [8, 6, 29, 1],
                        "saturday": [8, 9, 31, 4],
                        "sunday": [11, 13, 14, 16]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 649,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-1922--jk.jpeg',
                    title: 'Untitled',
                    artist: 'Lajos Kassak',
                    year: '1922',
                    rule: {
                        "monday": [11, 13, 14, 16],
                        "tuesday": [13, 15, 19, 22],
                        "wednesday": [15, 17, 18, 19],
                        "thursday": [3, 5, 28, 17],
                        "friday": [3, 5, 28, 17],
                        "saturday": [8, 6, 29, 1],
                        "sunday": [8, 9, 31, 4]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 650,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/geometrical-composition-1922.jpeg',
                    title: 'Geometrical Composition',
                    artist: 'Sandor Bortnyik',
                    year: '1922',
                    rule: {
                        "monday": [8, 9, 31, 4],
                        "tuesday": [11, 13, 14, 16],
                        "wednesday": [13, 15, 19, 22],
                        "thursday": [15, 17, 18, 19],
                        "friday": [3, 5, 28, 17],
                        "saturday": [3, 5, 28, 17],
                        "sunday": [8, 6, 29, 1]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 651,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/relief-schwarz-rot-gold-1922.jpeg',
                    title: 'Relief schwarz-rot-gold',
                    artist: 'Erich Buchholz',
                    year: '1922',
                    rule: {
                        "monday": [9, 7, 30, 2],
                        "tuesday": [9, 10, 1, 5],
                        "wednesday": [12, 14, 15, 17],
                        "thursday": [14, 16, 20, 23],
                        "friday": [16, 18, 19, 20],
                        "saturday": [4, 6, 29, 18],
                        "sunday": [4, 6, 29, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 652,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/reed-pen-collage-1922.jpeg',
                    title: 'Reed Pen Collage',
                    artist: 'Hannah Hoch',
                    year: '1922',
                    rule: {
                        "monday": [4, 6, 29, 18],
                        "tuesday": [9, 7, 30, 2],
                        "wednesday": [9, 10, 1, 5],
                        "thursday": [12, 14, 15, 17],
                        "friday": [14, 16, 20, 23],
                        "saturday": [16, 18, 19, 20],
                        "sunday": [4, 6, 29, 18]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 653,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-viii-1923.jpeg',
                    title: 'Composition VIII',
                    artist: 'Wassily Kandinsky',
                    year: '1923',
                    rule: {
                        "monday": [4, 6, 29, 18],
                        "tuesday": [4, 6, 29, 18],
                        "wednesday": [9, 7, 30, 2],
                        "thursday": [9, 10, 1, 5],
                        "friday": [12, 14, 15, 17],
                        "saturday": [14, 16, 20, 23],
                        "sunday": [16, 18, 19, 20]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 654,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-inhuman-1923.jpeg',
                    title: 'The Inhuman',
                    artist: 'Fernand Leger',
                    year: '1923',
                    rule: {
                        "monday": [16, 18, 19, 20],
                        "tuesday": [4, 6, 29, 18],
                        "wednesday": [4, 6, 29, 18],
                        "thursday": [9, 7, 30, 2],
                        "friday": [9, 10, 1, 5],
                        "saturday": [12, 14, 15, 17],
                        "sunday": [14, 16, 20, 23]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 655,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/black-cross-1923.jpeg',
                    title: 'Black Cross',
                    artist: 'Kazimir Malevich',
                    year: '1923',
                    rule: {
                        "monday": [14, 16, 20, 23],
                        "tuesday": [16, 18, 19, 20],
                        "wednesday": [4, 6, 29, 18],
                        "thursday": [4, 6, 29, 18],
                        "friday": [9, 7, 30, 2],
                        "saturday": [9, 10, 1, 5],
                        "sunday": [12, 14, 15, 17]
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 656,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/architectural-analysis-1923.jpeg',
                    title: 'Architectural Analysis',
                    artist: 'Theo van Doesburg',
                    year: '1923',
                    rule: {
                        "monday": [12, 14, 15, 17],
                        "tuesday": [14, 16, 20, 23],
                        "wednesday": [16, 18, 19, 20],
                        "thursday": [4, 6, 29, 18],  
                        "friday": [4, 6, 29, 18],  
                        "saturday": [9, 7, 30, 2],   
                        "sunday": [9, 10, 1, 5]    
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 657,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-xxi-1923.jpeg',
                    title: 'Composition XXI',
                    artist: 'Theo van Doesburg',
                    year: '1923',
                    rule: {
                        "monday": [9, 10, 1, 5],
                        "tuesday": [12, 14, 15, 17],
                        "wednesday": [14, 16, 20, 23],
                        "thursday": [16, 18, 19, 20],
                        "friday": [4, 6, 29, 18],  
                        "saturday": [4, 6, 29, 18],  
                        "sunday": [9, 7, 30, 2]    
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 658,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/construction-1923.jpeg',
                    title: 'Construction',
                    artist: 'Laszlo Moholy-Nagy',
                    year: '1923',
                    rule: {
                        "monday": [10, 8, 31, 3],
                        "tuesday": [10, 11, 2, 6],
                        "wednesday": [13, 15, 16, 18],
                        "thursday": [15, 17, 21, 24],
                        "friday": [17, 19, 20, 21],  
                        "saturday": [5, 7, 30, 19],  
                        "sunday": [5, 7, 30, 19]    
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 659,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/aphorism-1923.jpeg',
                    title: 'Aphorism',
                    artist: 'Kurt Schwitters',
                    year: '1923',
                    rule: {
                        "monday": [5, 7, 30, 19],
                        "tuesday": [10, 8, 31, 3],  
                        "wednesday": [10, 11, 2, 6],  
                        "thursday": [13, 15, 16, 18],
                        "friday": [15, 17, 21, 24],
                        "saturday": [17, 19, 20, 21],
                        "sunday": [5, 7, 30, 19]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 660,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1923-1(8).jpeg',
                    title: 'Composition',
                    artist: 'Janos Mattis-Teutsch',
                    year: '1923',
                    rule: {
                        "monday": [5, 7, 30, 19],
                        "tuesday": [5, 7, 30, 19],  
                        "wednesday": [10, 8, 31, 3],  
                        "thursday": [10, 11, 2, 6],  
                        "friday": [13, 15, 16, 18],
                        "saturday": [15, 17, 21, 24],
                        "sunday": [17, 19, 20, 21] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 661,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1923-4.jpeg',
                    title: 'Composition',
                    artist: 'Janos Mattis-Teutsch',
                    year: '1923',
                    rule: {
                        "monday": [17, 19, 20, 21],
                        "tuesday": [5, 7, 30, 19],  
                        "wednesday": [5, 7, 30, 19],  
                        "thursday": [10, 8, 31, 3],  
                        "friday": [10, 11, 2, 6],  
                        "saturday": [13, 15, 16, 18],
                        "sunday": [15, 17, 21, 24] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 662,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1923-8.jpeg',
                    title: 'Composition',
                    artist: 'Janos Mattis-Teutsch',
                    year: '1923',
                    rule: {
                        "monday": [15, 17, 21, 24],
                        "tuesday": [17, 19, 20, 21],
                        "wednesday": [5, 7, 30, 19],  
                        "thursday": [5, 7, 30, 19],  
                        "friday": [10, 8, 31, 3],  
                        "saturday": [10, 11, 2, 6],  
                        "sunday": [13, 15, 16, 18] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 663,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/wooden-relief-1923.jpeg',
                    title: 'Wooden Relief',
                    artist: 'Lajos Kassak',
                    year: '1923',
                    rule: {
                        "monday": [13, 15, 16, 18],
                        "tuesday": [15, 17, 21, 24],
                        "wednesday": [17, 19, 20, 21],
                        "thursday": [5, 7, 30, 19],  
                        "friday": [5, 7, 30, 19],  
                        "saturday": [10, 8, 31, 3],  
                        "sunday": [10, 11, 2, 6]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 664,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-sculptor-1923.jpeg',
                    title: 'The Sculptor',
                    artist: 'Willi Baumeister',
                    year: '1923',
                    rule: {
                        "monday": [10, 11, 2, 6],
                        "tuesday": [13, 15, 16, 18],
                        "wednesday": [15, 17, 21, 24],
                        "thursday": [17, 19, 20, 21],
                        "friday": [5, 7, 30, 19],  
                        "saturday": [5, 7, 30, 19],  
                        "sunday": [10, 8, 31, 3]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 665,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/holzbild-23-1923.jpeg',
                    title: 'Holzbild 23',
                    artist: 'Erich Buchholz',
                    year: '1923',
                    rule: {
                        "monday": [10, 8, 31, 3],
                        "tuesday": [10, 11, 2, 6],  
                        "wednesday": [13, 15, 16, 18],
                        "thursday": [15, 17, 21, 24],
                        "friday": [17, 19, 20, 21],
                        "saturday": [5, 7, 30, 19],  
                        "sunday": [5, 7, 30, 19]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 666,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/space-construction-vi-1923.jpeg',
                    title: 'Space construction VI',
                    artist: 'Peter Laszlo Peri',
                    year: '1923',
                    rule: {
                        "monday": [5, 7, 30, 19],
                        "tuesday": [10, 8, 31, 3],  
                        "wednesday": [10, 11, 2, 6],  
                        "thursday": [13, 15, 16, 18],
                        "friday": [15, 17, 21, 24],
                        "saturday": [17, 19, 20, 21],
                        "sunday": [5, 7, 30, 19]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 667,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/img-5207.jpeg',
                    title: 'Space constructions from Der Sturm portfolio',
                    artist: 'Peter Laszlo Peri',
                    year: '1922 - 1923',
                    rule: {
                        "monday": [5, 7, 30, 19],
                        "tuesday": [5, 7, 30, 19],  
                        "wednesday": [10, 8, 31, 3],  
                        "thursday": [10, 11, 2, 6],  
                        "friday": [13, 15, 16, 18],
                        "saturday": [15, 17, 21, 24],
                        "sunday": [17, 19, 20, 21] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 668,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/kmlvch-1923.jpeg',
                    title: 'Black Square (2nd version)',
                    artist: 'Kazimir Malevich',
                    year: 'c. 1923',
                    rule: {
                        "monday": [17, 19, 20, 21],
                        "tuesday": [5, 7, 30, 19],  
                        "wednesday": [5, 7, 30, 19],  
                        "thursday": [10, 8, 31, 3],  
                        "friday": [10, 11, 2, 6],  
                        "saturday": [13, 15, 16, 18],
                        "sunday": [15, 17, 21, 24] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 669,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/abstract-composition-1924p.jpeg',
                    title: 'Abstract composition',
                    artist: 'Fernand Leger',
                    year: '1924',
                    rule: {
                        "monday": [15, 17, 21, 24],
                        "tuesday": [17, 19, 20, 21],
                        "wednesday": [5, 7, 30, 19],  
                        "thursday": [5, 7, 30, 19],  
                        "friday": [10, 8, 31, 3],  
                        "saturday": [10, 11, 2, 6],  
                        "sunday": [13, 15, 16, 18] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 670,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-hunter-1924.jpeg',
                    title: 'The Hunter',
                    artist: 'Joan Miro',
                    year: '1923 - 1924',
                    rule: {
                        "monday": [13, 15, 16, 18],
                        "tuesday": [15, 17, 21, 24],
                        "wednesday": [17, 19, 20, 21],
                        "thursday": [5, 7, 30, 19],  
                        "friday": [5, 7, 30, 19],  
                        "saturday": [10, 8, 31, 3],  
                        "sunday": [10, 11, 2, 6]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 671,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/contra-composition-vii-1924.jpeg',
                    title: 'Contra-Composition VII',
                    artist: 'Theo van Doesburg',
                    year: '1924',
                    rule: {
                        "monday": [10, 11, 2, 6],
                        "tuesday": [13, 15, 16, 18],
                        "wednesday": [15, 17, 21, 24],
                        "thursday": [17, 19, 20, 21],
                        "friday": [5, 7, 30, 19],  
                        "saturday": [5, 7, 30, 19],  
                        "sunday": [10, 8, 31, 3]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 672,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-z-viii-1924.jpeg',
                    title: 'Composition Z VIII',
                    artist: 'Laszlo Moholy-Nagy',
                    year: '1924',
                    rule: {
                        "monday": [11, 9, 1, 4],
                        "tuesday": [11, 12, 3, 7],
                        "wednesday": [14, 16, 17, 19],
                        "thursday": [16, 18, 22, 25],
                        "friday": [18, 20, 21, 22],  
                        "saturday": [6, 8, 31, 20],  
                        "sunday": [6, 8, 31, 20]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 673,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/red-glove-and-white-glove-1924.jpeg',
                    title: 'Red Glove and White Glove',
                    artist: 'Georges Papazoff',
                    year: '1924',
                    rule: {
                        "monday": [6, 8, 31, 20],
                        "tuesday": [11, 9, 1, 4],   
                        "wednesday": [11, 12, 3, 7],  
                        "thursday": [14, 16, 17, 19],
                        "friday": [16, 18, 22, 25],
                        "saturday": [18, 20, 21, 22],
                        "sunday": [6, 8, 31, 20]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 674,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/1924-first-abstract-painting-chelsea-1924.jpeg',
                    title: '1924 (first abstract painting, Chelsea)',
                    artist: 'Ben Nicholson',
                    year: 'c.1923 - 1924',
                    rule: {
                        "monday": [6, 8, 31, 20],
                        "tuesday": [6, 8, 31, 20],  
                        "wednesday": [11, 9, 1, 4],   
                        "thursday": [11, 12, 3, 7],  
                        "friday": [14, 16, 17, 19],
                        "saturday": [16, 18, 22, 25],
                        "sunday": [18, 20, 21, 22] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 675,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1924.jpeg',
                    title: 'composition',
                    artist: 'David Kakabadze',
                    year: '1924',
                    rule: {
                        "monday": [18, 20, 21, 22],
                        "tuesday": [6, 8, 31, 20],  
                        "wednesday": [6, 8, 31, 20],  
                        "thursday": [11, 9, 1, 4],   
                        "friday": [11, 12, 3, 7],  
                        "saturday": [14, 16, 17, 19],
                        "sunday": [16, 18, 22, 25] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 676,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/constructive-decorative-composition-1924-2.jpg',
                    title: 'Constructive-decorative composition',
                    artist: 'David Kakabadze',
                    year: '1924',
                    rule: {
                        "monday": [16, 18, 22, 25],
                        "tuesday": [18, 20, 21, 22],
                        "wednesday": [6, 8, 31, 20],  
                        "thursday": [6, 8, 31, 20],  
                        "friday": [11, 9, 1, 4],   
                        "saturday": [11, 12, 3, 7],  
                        "sunday": [14, 16, 17, 19] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 677,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/constructive-decorative-composition-1924-6.jpeg',
                    title: 'Constructive-decorative composition',
                    artist: 'David Kakabadze',
                    year: '1924',
                    rule: {
                        "monday": [14, 16, 17, 19],
                        "tuesday": [16, 18, 22, 25],
                        "wednesday": [18, 20, 21, 22],
                        "thursday": [6, 8, 31, 20],  
                        "friday": [6, 8, 31, 20],  
                        "saturday": [11, 9, 1, 4],   
                        "sunday": [11, 12, 3, 7]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 678,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/kontrasty-mekanofakturowe-1924.jpeg',
                    title: 'Kontrasty Mekanofakturowe',
                    artist: 'Henryk Berlewi',
                    year: '1924',
                    rule: {
                        "monday": [11, 12, 3, 7],
                        "tuesday": [14, 16, 17, 19],
                        "wednesday": [16, 18, 22, 25],
                        "thursday": [18, 20, 21, 22],
                        "friday": [6, 8, 31, 20],  
                        "saturday": [6, 8, 31, 20],  
                        "sunday": [11, 9, 1, 4]    
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 679,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/mechano-faktura-1924.jpeg',
                    title: 'Mechano-Faktura',
                    artist: 'Henryk Berlewi',
                    year: '1924',
                    rule: {
                        "monday": [12, 10, 2, 5],
                        "tuesday": [12, 13, 4, 8],
                        "wednesday": [15, 17, 18, 20],
                        "thursday": [17, 19, 23, 26],
                        "friday": [19, 21, 22, 23],  
                        "saturday": [7, 9, 1, 21],  
                        "sunday": [7, 9, 1, 21]    
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 680,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/1924-lights-edit-1.jpeg',
                    title: 'Lights + Sounds of a Night Train',
                    artist: 'Benedetta Cappa',
                    year: '1924',
                    rule: {
                        "monday": [7, 9, 1, 21],
                        "tuesday": [12, 10, 2, 5],  
                        "wednesday": [12, 13, 4, 8],  
                        "thursday": [15, 17, 18, 20],
                        "friday": [17, 19, 23, 26],
                        "saturday": [19, 21, 22, 23],
                        "sunday": [7, 9, 1, 21]    
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 681,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/dramatic-architecture.jpeg',
                    title: 'Dramatic Architecture',
                    artist: 'Lyubov Popova',
                    year: '?',
                    rule: {
                        "monday": [7, 9, 1, 21],
                        "tuesday": [7, 9, 1, 21],   
                        "wednesday": [12, 10, 2, 5],  
                        "thursday": [12, 13, 4, 8],  
                        "friday": [15, 17, 18, 20],
                        "saturday": [17, 19, 23, 26],
                        "sunday": [19, 21, 22, 23] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 682,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/space-force-construction.jpeg',
                    title: 'Space Force Construction',
                    artist: 'Lyubov Popova',
                    year: '?',
                    rule: {
                        "monday": [19, 21, 22, 23],
                        "tuesday": [7, 9, 1, 21],   
                        "wednesday": [7, 9, 1, 21],   
                        "thursday": [12, 10, 2, 5],  
                        "friday": [12, 13, 4, 8],  
                        "saturday": [15, 17, 18, 20],
                        "sunday": [17, 19, 23, 26] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 683,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/with-full-force.jpeg',
                    title: 'With full force',
                    artist: 'Lyubov Popova',
                    year: '?',
                    rule: {
                        "monday": [17, 19, 23, 26],
                        "tuesday": [19, 21, 22, 23],
                        "wednesday": [7, 9, 1, 21],   
                        "thursday": [7, 9, 1, 21],   
                        "friday": [12, 10, 2, 5],  
                        "saturday": [12, 13, 4, 8],  
                        "sunday": [15, 17, 18, 20] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 684,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/lozenge-composition-with-red-gray-blue-yellow-and-black-1925.jpeg',
                    title: 'Lozenge Composition with Red, Gray, Blue, Yellow, and Black',
                    artist: 'Piet Mondrian',
                    year: '1924 - 1925',
                    rule: {
                        "monday": [15, 17, 18, 20],
                        "tuesday": [17, 19, 23, 26],
                        "wednesday": [19, 21, 22, 23],
                        "thursday": [7, 9, 1, 21],   
                        "friday": [7, 9, 1, 21],   
                        "saturday": [12, 10, 2, 5],  
                        "sunday": [12, 13, 4, 8]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 685,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/not_detected_189364Blue.jpeg',
                    title: 'Blue',
                    artist: 'Wassily Kandinsky',
                    year: '1925',
                    rule: {
                        "monday": [12, 13, 4, 8],
                        "tuesday": [15, 17, 18, 20],
                        "wednesday": [17, 19, 23, 26],
                        "thursday": [19, 21, 22, 23],
                        "friday": [7, 9, 1, 21],   
                        "saturday": [7, 9, 1, 21],   
                        "sunday": [12, 10, 2, 5]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 686,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/photo-this-is-the-color-of-my-dreams.jpg',
                    title: 'Photo; This is the Color of My Dreams',
                    artist: 'Joan Miro',
                    year: '1925',
                    rule: {
                        "monday": [13, 11, 3, 6],
                        "tuesday": [13, 14, 5, 9],
                        "wednesday": [16, 18, 19, 21],
                        "thursday": [18, 20, 24, 27],
                        "friday": [20, 22, 23, 24],   
                        "saturday": [8, 10, 2, 22],   
                        "sunday": [8, 10, 2, 22]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 687,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-a-xxi-1925.jpg',
                    title: 'Composition A XXI',
                    artist: 'Laszlo Moholy-Nagy',
                    year: '1925',
                    rule: {
                        "monday": [8, 10, 2, 22],
                        "tuesday": [13, 11, 3, 6],  
                        "wednesday": [13, 14, 5, 9],  
                        "thursday": [16, 18, 19, 21],
                        "friday": [18, 20, 24, 27],
                        "saturday": [20, 22, 23, 24],
                        "sunday": [8, 10, 2, 22]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 688,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/elikan-1925.jpg',
                    title: '(Elikan)',
                    artist: 'Kurt Schwitters',
                    year: 'c. 1925',
                    rule: {
                        "monday": [8, 10, 2, 22],
                        "tuesday": [8, 10, 2, 22],  
                        "wednesday": [13, 11, 3, 6],  
                        "thursday": [13, 14, 5, 9],  
                        "friday": [16, 18, 19, 21],
                        "saturday": [18, 20, 24, 27],
                        "sunday": [20, 22, 23, 24] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 689,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/birth-of-birds.jpg',
                    title: 'Birth of Birds',
                    artist: 'Andre Masson',
                    year: '1925',
                    rule: {
                        "monday": [20, 22, 23, 24],
                        "tuesday": [8, 10, 2, 22],  
                        "wednesday": [8, 10, 2, 22],  
                        "thursday": [13, 11, 3, 6],  
                        "friday": [13, 14, 5, 9],  
                        "saturday": [16, 18, 19, 21],
                        "sunday": [18, 20, 24, 27] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 690,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1925(6).jpg',
                    title: 'Composition',
                    artist: 'Janos Mattis-Teutsch',
                    year: '1925',
                    rule: {
                        "monday": [18, 20, 24, 27],
                        "tuesday": [20, 22, 23, 24],
                        "wednesday": [8, 10, 2, 22],  
                        "thursday": [8, 10, 2, 22],  
                        "friday": [13, 11, 3, 6],  
                        "saturday": [13, 14, 5, 9],  
                        "sunday": [16, 18, 19, 21] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 691,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-no-15-1925.jpg',
                    title: 'Composition No. 15',
                    artist: 'Friedrich Vordemberge-Gildewart',
                    year: '1925',
                    rule: {
                        "monday": [16, 18, 19, 21],
                        "tuesday": [18, 20, 24, 27],
                        "wednesday": [20, 22, 23, 24],
                        "thursday": [8, 10, 2, 22],  
                        "friday": [8, 10, 2, 22],  
                        "saturday": [13, 11, 3, 6],  
                        "sunday": [13, 14, 5, 9]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 692,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/wall-hanging-1925-1.jpg',
                    title: 'Wall Hanging',
                    artist: 'Anni Albers',
                    year: '1925',
                    rule: {
                        "monday": [13, 14, 5, 9],
                        "tuesday": [16, 18, 19, 21],
                        "wednesday": [18, 20, 24, 27],
                        "thursday": [20, 22, 23, 24],
                        "friday": [8, 10, 2, 22],  
                        "saturday": [8, 10, 2, 22],  
                        "sunday": [13, 11, 3, 6]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 693,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1925.jpg',
                    title: 'Composition',
                    artist: 'Otto Gustav Carlsund',
                    year: '1925',
                    rule: {
                        "monday": [14, 12, 4, 7],
                        "tuesday": [14, 15, 6, 10],
                        "wednesday": [17, 19, 20, 22],
                        "thursday": [19, 21, 25, 28],
                        "friday": [21, 23, 24, 25],  
                        "saturday": [9, 11, 3, 23],  
                        "sunday": [9, 11, 3, 23]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 694,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-tight-curves-25-1925.jpg',
                    title: 'Composition Tight Curves. 25',
                    artist: 'Carl Buchheister',
                    year: '1925',
                    rule: {
                        "monday": [9, 11, 3, 23],
                        "tuesday": [14, 12, 4, 7],  
                        "wednesday": [14, 15, 6, 10], 
                        "thursday": [17, 19, 20, 22],
                        "friday": [19, 21, 25, 28],
                        "saturday": [21, 23, 24, 25],
                        "sunday": [9, 11, 3, 23]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 695,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled_fhihwe_red.jpg',
                    title: 'Untitled',
                    artist: 'Almir Mavignier',
                    year: '?',
                    rule: {
                        "monday": [9, 11, 3, 23],
                        "tuesday": [9, 11, 3, 23],  
                        "wednesday": [14, 12, 4, 7],  
                        "thursday": [14, 15, 6, 10], 
                        "friday": [17, 19, 20, 22],
                        "saturday": [19, 21, 25, 28],
                        "sunday": [21, 23, 24, 25] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 696,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/several-circles-1926.jpg',
                    title: 'Several circles',
                    artist: 'Wassily Kandinsky',
                    year: '1926',
                    rule: {
                        "monday": [21, 23, 24, 25],
                        "tuesday": [9, 11, 3, 23],  
                        "wednesday": [9, 11, 3, 23],  
                        "thursday": [14, 12, 4, 7],  
                        "friday": [14, 15, 6, 10], 
                        "saturday": [17, 19, 20, 22],
                        "sunday": [19, 21, 25, 28] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 697,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/tete-paysage-1926.jpg',
                    title: 'Tete Paysage',
                    artist: 'Jean Arp',
                    year: '1924 - 1926',
                    rule: {
                        "monday": [19, 21, 25, 28],
                        "tuesday": [21, 23, 24, 25],
                        "wednesday": [9, 11, 3, 23],  
                        "thursday": [9, 11, 3, 23],  
                        "friday": [14, 12, 4, 7],  
                        "saturday": [14, 15, 6, 10], 
                        "sunday": [17, 19, 20, 22] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 698,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/drill-1926.jpg',
                    title: 'Drill',
                    artist: 'Frantisek Kupka',
                    year: '1926',
                    rule: {
                        "monday": [17, 19, 20, 22],
                        "tuesday": [19, 21, 25, 28],
                        "wednesday": [21, 23, 24, 25],
                        "thursday": [9, 11, 3, 23],  
                        "friday": [9, 11, 3, 23],  
                        "saturday": [14, 12, 4, 7],  
                        "sunday": [14, 15, 6, 10]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 699,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/figures-1926.jpg',
                    title: 'Figures',
                    artist: 'Sophie Taeuber-Arp',
                    year: '1926',
                    rule: {
                        "monday": [14, 15, 6, 10],
                        "tuesday": [17, 19, 20, 22],
                        "wednesday": [19, 21, 25, 28],
                        "thursday": [21, 23, 24, 25],
                        "friday": [9, 11, 3, 23],  
                        "saturday": [9, 11, 3, 23],  
                        "sunday": [14, 12, 4, 7]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 700,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/legend-from-the-portfolio-revolving-doors-1926.jpg',
                    title: 'Legend from the portfolio Revolving Doors',
                    artist: 'Man Ray',
                    year: '1926',
                    rule: {
                        "monday": [15, 13, 5, 8],
                        "tuesday": [15, 16, 7, 11],
                        "wednesday": [18, 20, 21, 23],
                        "thursday": [20, 22, 26, 29],
                        "friday": [22, 24, 25, 26],  
                        "saturday": [10, 12, 4, 24],  
                        "sunday": [10, 12, 4, 24]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 701,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/shadows-from-the-portfolio-revolving-doors-1926.jpg',
                    title: 'Shadows from the portfolio Revolving Doors',
                    artist: 'Man Ray',
                    year: '1926',
                    rule: {
                        "monday": [10, 12, 4, 24],
                        "tuesday": [15, 13, 5, 8],  
                        "wednesday": [15, 16, 7, 11], 
                        "thursday": [18, 20, 21, 23],
                        "friday": [20, 22, 26, 29],
                        "saturday": [22, 24, 25, 26],
                        "sunday": [10, 12, 4, 24]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 702,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/158-rue-de-tolbiac.jpg',
                    title: '158 Rue de Tolbiac',
                    artist: 'Jacques Villeglé',
                    year: '?',
                    rule: {
                        "monday": [10, 12, 4, 24],
                        "tuesday": [10, 12, 4, 24], 
                        "wednesday": [15, 13, 5, 8],  
                        "thursday": [15, 16, 7, 11], 
                        "friday": [18, 20, 21, 23],
                        "saturday": [20, 22, 26, 29],
                        "sunday": [22, 24, 25, 26] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 703,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/black-white-yellow-1926.jpg',
                    title: 'Black-White-Yellow',
                    artist: 'Anni Albers',
                    year: '1926',
                    rule: {
                        "monday": [22, 24, 25, 26],
                        "tuesday": [10, 12, 4, 24], 
                        "wednesday": [10, 12, 4, 24], 
                        "thursday": [15, 13, 5, 8],  
                        "friday": [15, 16, 7, 11], 
                        "saturday": [18, 20, 21, 23],
                        "sunday": [20, 22, 26, 29] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 704,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/komposition-1926___.jpg',
                    title: 'Komposition',
                    artist: 'Otto Gustav Carlsund',
                    year: '1926',
                    rule: {
                        "monday": [20, 22, 26, 29],
                        "tuesday": [22, 24, 25, 26],
                        "wednesday": [10, 12, 4, 24], 
                        "thursday": [10, 12, 4, 24], 
                        "friday": [15, 13, 5, 8],  
                        "saturday": [15, 16, 7, 11], 
                        "sunday": [18, 20, 21, 23] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 705,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/haven-opus-2-1926.jpg',
                    title: 'Haven - Opus 2',
                    artist: 'Victor Servranckx',
                    year: '1926',
                    rule: {
                        "monday": [18, 20, 21, 23],
                        "tuesday": [20, 22, 26, 29],
                        "wednesday": [22, 24, 25, 26],
                        "thursday": [10, 12, 4, 24], 
                        "friday": [10, 12, 4, 24], 
                        "saturday": [15, 13, 5, 8],  
                        "sunday": [15, 16, 7, 11]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 706,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-192600000.jpg',
                    title: 'Composition',
                    artist: 'David Kakabadze',
                    year: '1926',
                    rule: {
                        "monday": [15, 16, 7, 11],
                        "tuesday": [18, 20, 21, 23],
                        "wednesday": [20, 22, 26, 29],
                        "thursday": [22, 24, 25, 26],
                        "friday": [10, 12, 4, 24], 
                        "saturday": [10, 12, 4, 24], 
                        "sunday": [15, 13, 5, 8]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 707,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-4.jpg',
                    title: 'Composition 4',
                    artist: 'Stefan Sevastre',
                    year: 'XX Cent.',
                    rule: {
                        "monday": [16, 14, 6, 9],
                        "tuesday": [16, 17, 8, 12],
                        "wednesday": [19, 21, 22, 24],
                        "thursday": [21, 23, 27, 30],
                        "friday": [23, 25, 26, 27], 
                        "saturday": [11, 13, 5, 25], 
                        "sunday": [11, 13, 5, 25]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 708,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-13dsji.jpg',
                    title: 'Composition 13',
                    artist: 'Stefan Sevastre',
                    year: 'XX Cent.',
                    rule: {
                        "monday": [11, 13, 5, 25],
                        "tuesday": [16, 14, 6, 9],  
                        "wednesday": [16, 17, 8, 12], 
                        "thursday": [19, 21, 22, 24],
                        "friday": [21, 23, 27, 30],
                        "saturday": [23, 25, 26, 27],
                        "sunday": [11, 13, 5, 25]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 709,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-24.jpg',
                    title: 'Composition 24',
                    artist: 'Stefan Sevastre',
                    year: 'XX Cent.',
                    rule: {
                        "monday": [11, 13, 5, 25],
                        "tuesday": [11, 13, 5, 25], 
                        "wednesday": [16, 14, 6, 9],  
                        "thursday": [16, 17, 8, 12], 
                        "friday": [19, 21, 22, 24],
                        "saturday": [21, 23, 27, 30],
                        "sunday": [23, 25, 26, 27] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 710,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-31.jpg',
                    title: 'Composition 31',
                    artist: 'Stefan Sevastre',
                    year: 'XX Cent.',
                    rule: {
                        "monday": [23, 25, 26, 27],
                        "tuesday": [11, 13, 5, 25], 
                        "wednesday": [11, 13, 5, 25], 
                        "thursday": [16, 14, 6, 9],  
                        "friday": [16, 17, 8, 12], 
                        "saturday": [19, 21, 22, 24],
                        "sunday": [21, 23, 27, 30] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 711,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-36.jpg',
                    title: 'Composition 36',
                    artist: 'Stefan Sevastre',
                    year: 'XX Cent.',
                    rule: {
                        "monday": [21, 23, 27, 30],
                        "tuesday": [23, 25, 26, 27],
                        "wednesday": [11, 13, 5, 25], 
                        "thursday": [11, 13, 5, 25], 
                        "friday": [16, 14, 6, 9],  
                        "saturday": [16, 17, 8, 12], 
                        "sunday": [19, 21, 22, 24] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 712,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-10.jpg',
                    title: 'Composition 10',
                    artist: 'Stefan Sevastre',
                    year: 'XX Cent.',
                    rule: {
                        "monday": [19, 21, 22, 24],
                        "tuesday": [21, 23, 27, 30],
                        "wednesday": [23, 25, 26, 27],
                        "thursday": [11, 13, 5, 25], 
                        "friday": [11, 13, 5, 25], 
                        "saturday": [16, 14, 6, 9],  
                        "sunday": [16, 17, 8, 12]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 713,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/not_detected_227971composition.jpg',
                    title: 'Composition',
                    artist: 'Joan Miro',
                    year: '1927',
                    rule: {
                        "monday": [16, 17, 8, 12],
                        "tuesday": [19, 21, 22, 24],
                        "wednesday": [21, 23, 27, 30],
                        "thursday": [23, 25, 26, 27],
                        "friday": [11, 13, 5, 25], 
                        "saturday": [11, 13, 5, 25], 
                        "sunday": [16, 14, 6, 9]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 714,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-circus-house.jpg',
                    title: 'The Circus House',
                    artist: 'Joan Miro',
                    year: '1927',
                    rule: {
                        "monday": [17, 15, 7, 10],
                        "tuesday": [17, 18, 9, 13],
                        "wednesday": [20, 22, 23, 25],
                        "thursday": [22, 24, 28, 31],
                        "friday": [24, 26, 27, 28], 
                        "saturday": [12, 14, 6, 26], 
                        "sunday": [12, 14, 6, 26]   
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 715,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/child-horse-flower-and-snake-1927.jpg',
                    title: 'Child, Horse, Flower and Snake',
                    artist: 'Max Ernst',
                    year: '1927',
                    rule: {
                        "monday": [12, 14, 6, 26],
                        "tuesday": [17, 15, 7, 10], 
                        "wednesday": [17, 18, 9, 13], 
                        "thursday": [20, 22, 23, 25],
                        "friday": [22, 24, 28, 31],
                        "saturday": [24, 26, 27, 28],
                        "sunday": [12, 14, 6, 26]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 716,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/axl-ii-1927.jpg',
                    title: 'AXL II',
                    artist: 'Laszlo Moholy-Nagy',
                    year: '1927',
                    rule: {
                        "monday": [12, 14, 6, 26],
                        "tuesday": [12, 14, 6, 26], 
                        "wednesday": [17, 15, 7, 10], 
                        "thursday": [17, 18, 9, 13], 
                        "friday": [20, 22, 23, 25],
                        "saturday": [22, 24, 28, 31],
                        "sunday": [24, 26, 27, 28] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 717,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/figure-1927.jpg',
                    title: 'Figure',
                    artist: 'Andre Masson',
                    year: '1926 - 1927',
                    rule: {
                        "monday": [24, 26, 27, 28],
                        "tuesday": [12, 14, 6, 26], 
                        "wednesday": [12, 14, 6, 26], 
                        "thursday": [17, 15, 7, 10], 
                        "friday": [17, 18, 9, 13], 
                        "saturday": [20, 22, 23, 25],
                        "sunday": [22, 24, 28, 31] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 718,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/unknown-title(2)fdiowhe.jpg',
                    title: 'unknown title',
                    artist: 'Adnan Coker',
                    year: '?',
                    rule: {
                        "monday": [22, 24, 28, 31],
                        "tuesday": [24, 26, 27, 28],
                        "wednesday": [12, 14, 6, 26], 
                        "thursday": [12, 14, 6, 26], 
                        "friday": [17, 15, 7, 10], 
                        "saturday": [17, 18, 9, 13], 
                        "sunday": [20, 22, 23, 25] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 719,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/unknown-title(4)fewohie.jpg',
                    title: 'unknown title',
                    artist: 'Adnan Coker',
                    year: '?',
                    rule: {
                        "monday": [20, 22, 23, 25],
                        "tuesday": [22, 24, 28, 31],
                        "wednesday": [24, 26, 27, 28],
                        "thursday": [12, 14, 6, 26], 
                        "friday": [12, 14, 6, 26], 
                        "saturday": [17, 15, 7, 10], 
                        "sunday": [17, 18, 9, 13]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 720,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/unknown-title(8)a0hlwb.jpg',
                    title: 'unknown title',
                    artist: 'Adnan Coker',
                    year: '?',
                    rule: {
                        "monday": [17, 18, 9, 13],
                        "tuesday": [20, 22, 23, 25],
                        "wednesday": [22, 24, 28, 31],
                        "thursday": [24, 26, 27, 28],
                        "friday": [12, 14, 6, 26], 
                        "saturday": [12, 14, 6, 26], 
                        "sunday": [17, 15, 7, 10]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 721,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/unknown-title(12).jpg',
                    title: 'unknown title',
                    artist: 'Adnan Coker',
                    year: '?',
                    rule: {
                        "monday": [18, 16, 8, 11],
                        "tuesday": [18, 19, 10, 14],
                        "wednesday": [21, 23, 24, 26],
                        "thursday": [23, 25, 29, 1],
                        "friday": [25, 27, 28, 29], 
                        "saturday": [13, 15, 7, 27], 
                        "sunday": [13, 15, 7, 27]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 722,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/unknown-title(16).jpg',
                    title: 'unknown title',
                    artist: 'Adnan Coker',
                    year: '?',
                    rule: {
                        "monday": [13, 15, 7, 27],
                        "tuesday": [18, 16, 8, 11], 
                        "wednesday": [18, 19, 10, 14],
                        "thursday": [21, 23, 24, 26],
                        "friday": [23, 25, 29, 1], 
                        "saturday": [25, 27, 28, 29],
                        "sunday": [13, 15, 7, 27]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 723,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/unknown-title(1)-huihsid.jpg',
                    title: 'Composition No.41',
                    artist: 'Friedrich Vordemberge-Gildewart',
                    year: '1927',
                    rule: {
                        "monday": [13, 15, 7, 27],
                        "tuesday": [13, 15, 7, 27], 
                        "wednesday": [18, 16, 8, 11], 
                        "thursday": [18, 19, 10, 14],
                        "friday": [21, 23, 24, 26],
                        "saturday": [23, 25, 29, 1], 
                        "sunday": [25, 27, 28, 29] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 724,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/il-trittico-della-velocit-l-arrivo-1927.jpg',
                    title: 'il Trittico della Velocità: L\'Arrivo',
                    artist: 'Gerardo Dottori',
                    year: '1927',
                    rule: {
                        "monday": [25, 27, 28, 29],
                        "tuesday": [13, 15, 7, 27], 
                        "wednesday": [13, 15, 7, 27], 
                        "thursday": [18, 16, 8, 11], 
                        "friday": [18, 19, 10, 14],
                        "saturday": [21, 23, 24, 26],
                        "sunday": [23, 25, 29, 1]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 725,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-with-red-dots-1927.jpg',
                    title: 'Composition with red dots',
                    artist: 'Otto Gustav Carlsund',
                    year: '1927',
                    rule: {
                        "monday": [23, 25, 29, 1],
                        "tuesday": [25, 27, 28, 29],
                        "wednesday": [13, 15, 7, 27], 
                        "thursday": [13, 15, 7, 27], 
                        "friday": [18, 16, 8, 11], 
                        "saturday": [18, 19, 10, 14],
                        "sunday": [21, 23, 24, 26] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 726,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-cellulaire-au-cercle-rouge-1927(1).jpg',
                    title: 'Composition cellulaire au cercle rouge',
                    artist: 'Leon Arthur Tutundjian',
                    year: '1927',
                    rule: {
                        "monday": [21, 23, 24, 26],
                        "tuesday": [23, 25, 29, 1], 
                        "wednesday": [25, 27, 28, 29],
                        "thursday": [13, 15, 7, 27], 
                        "friday": [13, 15, 7, 27], 
                        "saturday": [18, 16, 8, 11], 
                        "sunday": [18, 19, 10, 14] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 727,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/opus-14-1927.jpg',
                    title: 'Opus 14',
                    artist: 'Victor Servranckx',
                    year: '1927',
                    rule: {
                        "monday": [18, 19, 10, 14],
                        "tuesday": [21, 23, 24, 26],
                        "wednesday": [23, 25, 29, 1], 
                        "thursday": [25, 27, 28, 29],
                        "friday": [13, 15, 7, 27], 
                        "saturday": [13, 15, 7, 27], 
                        "sunday": [18, 16, 8, 11]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 728,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/abstraction-1927-3.jpg',
                    title: 'Abstraction',
                    artist: 'David Kakabadze',
                    year: '1927',
                    rule: {
                        "monday": [19, 17, 9, 12],
                        "tuesday": [19, 20, 11, 15],
                        "wednesday": [22, 24, 25, 27], 
                        "thursday": [24, 26, 30, 2],
                        "friday": [26, 28, 29, 30], 
                        "saturday": [14, 16, 8, 28], 
                        "sunday": [14, 16, 8, 28]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 729,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/bauhausbuch-suprematistische-komposition-empfindung-einer-mystischen-welle-aus-dem-weltall.jpeg',
                    title: 'Suprematistic composition (Feeling of a mystic "wave" out of the cosmos)',
                    artist: 'Kazimir Malevich',
                    year: '1927',
                    rule: {
                        "monday": [14, 16, 8, 28],
                        "tuesday": [19, 17, 9, 12], 
                        "wednesday": [19, 20, 11, 15],
                        "thursday": [22, 24, 25, 27],
                        "friday": [24, 26, 30, 2], 
                        "saturday": [26, 28, 29, 30],
                        "sunday": [14, 16, 8, 28]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 730,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/bauhausbuch-combined-suprematistic-composition-feeling-of-metallic-sounds-dynamic-pale-metallic.jpeg',
                    title: 'Combined Suprematistic Composition. (Feeling of Metallic Sounds - Dynamic) (Pale - Metallic Colour)',
                    artist: 'Kazimir Malevich',
                    year: '1927',
                    rule: {
                        "monday": [14, 16, 8, 28],
                        "tuesday": [14, 16, 8, 28], 
                        "wednesday": [19, 17, 9, 12], 
                        "thursday": [19, 20, 11, 15],
                        "friday": [22, 24, 25, 27],
                        "saturday": [24, 26, 30, 2], 
                        "sunday": [26, 28, 29, 30] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 731,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/bird-s-eye-view.jpg',
                    title: 'Bird\'s-eye view',
                    artist: 'Pierre Alechinsky',
                    year: '?',
                    rule: {
                        "monday": [26, 28, 29, 30],
                        "tuesday": [14, 16, 8, 28], 
                        "wednesday": [14, 16, 8, 28], 
                        "thursday": [19, 17, 9, 12], 
                        "friday": [19, 20, 11, 15],
                        "saturday": [22, 24, 25, 27],
                        "sunday": [24, 26, 30, 2]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 732,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/de-toutes-parts.jpg',
                    title: 'De toutes parts',
                    artist: 'Pierre Alechinsky',
                    year: '?',
                    rule: {
                        "monday": [24, 26, 30, 2],
                        "tuesday": [26, 28, 29, 30],
                        "wednesday": [14, 16, 8, 28], 
                        "thursday": [14, 16, 8, 28], 
                        "friday": [19, 17, 9, 12], 
                        "saturday": [19, 20, 11, 15],
                        "sunday": [22, 24, 25, 27] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 733,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/one-stone-two-passes.jpg',
                    title: 'One Stone, Two Passes',
                    artist: 'Pierre Alechinsky',
                    year: '?',
                    rule: {
                        "monday": [22, 24, 25, 27],
                        "tuesday": [24, 26, 30, 2], 
                        "wednesday": [26, 28, 29, 30],
                        "thursday": [14, 16, 8, 28], 
                        "friday": [14, 16, 8, 28], 
                        "saturday": [19, 17, 9, 12], 
                        "sunday": [19, 20, 11, 15] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 734,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/plate-ii-from-the-portfolio-papiers-trait-s.jpg',
                    title: 'Plate II from the portfolio Papiers Traités',
                    artist: 'Pierre Alechinsky',
                    year: '?',
                    rule: {
                        "monday": [19, 20, 11, 15],
                        "tuesday": [22, 24, 25, 27],
                        "wednesday": [24, 26, 30, 2], 
                        "thursday": [26, 28, 29, 30],
                        "friday": [14, 16, 8, 28], 
                        "saturday": [14, 16, 8, 28], 
                        "sunday": [19, 17, 9, 12]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 735,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-amazon-unconscious.jpg',
                    title: 'The Amazon unconscious',
                    artist: 'Pierre Alechinsky',
                    year: '?',
                    rule: {
                        "monday": [19, 17, 9, 12],
                        "tuesday": [19, 20, 11, 15],
                        "wednesday": [22, 24, 25, 27],
                        "thursday": [24, 26, 30, 2], 
                        "friday": [26, 28, 29, 30],
                        "saturday": [14, 16, 8, 28], 
                        "sunday": [14, 16, 8, 28]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 736,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/black-red-1928.jpg',
                    title: 'Black-Red',
                    artist: 'Wassily Kandinsky',
                    year: '1928',
                    rule: {
                        "monday": [14, 16, 8, 28],
                        "tuesday": [19, 17, 9, 12], 
                        "wednesday": [19, 20, 11, 15],
                        "thursday": [22, 24, 25, 27],
                        "friday": [24, 26, 30, 2], 
                        "saturday": [26, 28, 29, 30],
                        "sunday": [14, 16, 8, 28]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 737,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/on-the-points-1928.jpg',
                    title: 'On the points',
                    artist: 'Wassily Kandinsky',
                    year: '1928',
                    rule: {
                        "monday": [14, 16, 8, 28],
                        "tuesday": [14, 16, 8, 28], 
                        "wednesday": [19, 17, 9, 12], 
                        "thursday": [19, 20, 11, 15],
                        "friday": [22, 24, 25, 27],
                        "saturday": [24, 26, 30, 2], 
                        "sunday": [26, 28, 29, 30] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 738,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-with-half-values-1928.jpg',
                    title: 'Composition with half values',
                    artist: 'Theo van Doesburg',
                    year: '1928',
                    rule: {
                        "monday": [26, 28, 29, 30],
                        "tuesday": [14, 16, 8, 28], 
                        "wednesday": [14, 16, 8, 28], 
                        "thursday": [19, 17, 9, 12], 
                        "friday": [19, 20, 11, 15],
                        "saturday": [22, 24, 25, 27],
                        "sunday": [24, 26, 30, 2]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 739,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/two-grays-i-1928.jpg',
                    title: 'Two grays I',
                    artist: 'Frantisek Kupka',
                    year: '1928',
                    rule: {
                        "monday": [24, 26, 30, 2],
                        "tuesday": [26, 28, 29, 30],
                        "wednesday": [14, 16, 8, 28], 
                        "thursday": [14, 16, 8, 28], 
                        "friday": [19, 17, 9, 12], 
                        "saturday": [19, 20, 11, 15],
                        "sunday": [22, 24, 25, 27] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 740,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/vertical-and-horizontal-composition-1928.jpg',
                    title: 'Vertical and horizontal composition',
                    artist: 'Sophie Taeuber-Arp',
                    year: '1928',
                    rule: {
                        "monday": [22, 24, 25, 27],
                        "tuesday": [24, 26, 30, 2], 
                        "wednesday": [26, 28, 29, 30],
                        "thursday": [14, 16, 8, 28], 
                        "friday": [14, 16, 8, 28], 
                        "saturday": [19, 17, 9, 12], 
                        "sunday": [19, 20, 11, 15] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 741,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/painting-iv-mechanical-abstraction-1916.jpg',
                    title: 'Painting IV (Mechanical Abstraction)',
                    artist: 'Morton Shamberg',
                    year: '1916',
                    rule: {
                        "monday": [19, 20, 11, 15],
                        "tuesday": [22, 24, 25, 27],
                        "wednesday": [24, 26, 30, 2], 
                        "thursday": [26, 28, 29, 30],
                        "friday": [14, 16, 8, 28], 
                        "saturday": [14, 16, 8, 28], 
                        "sunday": [19, 17, 9, 12]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 742,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/composition-1928.jpg',
                    title: 'Composition',
                    artist: 'Auguste Herbin',
                    year: '1928',
                    rule: {
                        "monday": [20, 18, 10, 13],
                        "tuesday": [20, 21, 12, 16],
                        "wednesday": [23, 25, 26, 28], 
                        "thursday": [25, 27, 31, 3],
                        "friday": [27, 29, 30, 31], 
                        "saturday": [15, 17, 9, 29], 
                        "sunday": [15, 17, 9, 29]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 743,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/relief-rouge-d-placement.jpg',
                    title: 'Relief rouge à déplacement',
                    artist: 'Julio Le Parc',
                    year: '?',
                    rule: {
                        "monday": [15, 17, 9, 29],
                        "tuesday": [20, 18, 10, 13],
                        "wednesday": [20, 21, 12, 16],
                        "thursday": [23, 25, 26, 28],
                        "friday": [25, 27, 31, 3], 
                        "saturday": [27, 29, 30, 31],
                        "sunday": [15, 17, 9, 29]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 744,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/the-tree-1928.jpg',
                    title: 'The Tree',
                    artist: 'Serge Charchoune',
                    year: '1928',
                    rule: {
                        "monday": [15, 17, 9, 29],
                        "tuesday": [15, 17, 9, 29], 
                        "wednesday": [20, 18, 10, 13],
                        "thursday": [20, 21, 12, 16],
                        "friday": [23, 25, 26, 28],
                        "saturday": [25, 27, 31, 3], 
                        "sunday": [27, 29, 30, 31] 
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
                {
                    id: 745,
                    user_id: 1,
                    theme: 'Abstract Art',
                    img_path: 'https://s3.amazonaws.com/hours168-hurdaudio/img/january/untitled-07-2006(1).jpg',
                    title: 'Untitled 07',
                    artist: 'Gary Hume',
                    year: '2006',
                    rule: {
                        "monday": [27, 29, 30, 31],
                        "tuesday": [15, 17, 9, 29], 
                        "wednesday": [15, 17, 9, 29], 
                        "thursday": [20, 18, 10, 13],
                        "friday": [20, 21, 12, 16],
                        "saturday": [23, 25, 26, 28],
                        "sunday": [25, 27, 31, 3]  
                    },
                    created_at: new Date('2017-07-20T13:44:00.000Z'),
                    updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
        }).then(() => {
            return knex.raw("SELECT setval('january_arts_id_seq', (SELECT MAX(id) FROM january_arts));");
        });
};
