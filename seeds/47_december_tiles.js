'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('december_tiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('december_tiles').insert([
        {
          id: 1,
          user_id: 1,
          theme: 'Snow',
          type: 'default',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/5342733777_083fee0263_b.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#82858E',
          color_medium: '#A7AEB8',
          color_light: '#D0D1D6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 2,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snow-texture--14.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#7C7A87',
          color_medium: '#958F94',
          color_light: '#E4DFCF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 3,
          user_id: 1,
          theme: 'Snow',
          type: 'mtwt',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/9479e7d7b1fa6fe9beea06fabf05cd9f.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#A4B4C4',
          color_medium: '#E0E4ED',
          color_light: '#F3F8FB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 4,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snow_texture_2_by_arctic_stock.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#677C9B',
          color_medium: '#97A3A3',
          color_light: '#D0CBB5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 5,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snow-651409_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '156%',
          color_dark: '#4A5B75',
          color_medium: '#D1B99F',
          color_light: '#F5E6CB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 6,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snow-705109_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#040402',
          color_medium: '#717276',
          color_light: '#D4D5D0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 7,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/night-1033150_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#130016',
          color_medium: '#655268',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 8,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/austria-88739_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#040E17',
          color_medium: '#4D90BD',
          color_light: '#EEDCD4',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 9,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snow-landscape-986916_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#0E0C17',
          color_medium: '#6C778B',
          color_light: '#C5C4C9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 10,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/sedrun-2356548_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#364566',
          color_medium: '#6E7A94',
          color_light: '#EEF4F2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 11,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/foot-16491_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#50595E',
          color_medium: '#587087',
          color_light: '#CDCDCD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 12,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snowflake-1596983_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '143%',
          color_dark: '#141414',
          color_medium: '#282828',
          color_light: '#DDDDDD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 13,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/trail-586804_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#012862',
          color_medium: '#556888',
          color_light: '#DCE5E8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 14,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/path-1753194_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#6C778D',
          color_medium: '#3B7AA5',
          color_light: '#B4B5B1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 15,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/sweden-110175_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#0B080F',
          color_medium: '#8A6D8B',
          color_light: '#F6FBF6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 16,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/winter-2085829_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#010301',
          color_medium: '#58738B',
          color_light: '#FEFEFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 17,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snowflakes-1933485_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#19242A',
          color_medium: '#346585',
          color_light: '#C2CBD0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 18,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/winter-2435148_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#28263E',
          color_medium: '#4F5055',
          color_light: '#C5C1B6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 19,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/lapland-2984828_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '152%',
          color_dark: '#1D1E22',
          color_medium: '#768CAC',
          color_light: '#FFF9DD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 20,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/lavicky-1635602_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#1A141E',
          color_medium: '#9F8972',
          color_light: '#E2E3E8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 21,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/arctic-139394_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#1A051E',
          color_medium: '#B44707',
          color_light: '#FCFEF0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 22,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/ice-crystal-222272_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#060606',
          color_medium: '#2F8345',
          color_light: '#FFF60C',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 23,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/greenland-1962998_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#164563',
          color_medium: '#557C8D',
          color_light: '#DED9C9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 24,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/roadway-1081719_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#30323E',
          color_medium: '#A3A8B7',
          color_light: '#F1F2F6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 25,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/wintry-2068298_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#5F6B77',
          color_medium: '#9DA9B5',
          color_light: '#C3CAD2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 26,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/wintry-590190_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#161F24',
          color_medium: '#336EB2',
          color_light: '#BCBAC1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 27,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/ball-2995735_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#090C09',
          color_medium: '#636F51',
          color_light: '#FEFEFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 28,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snow-3012197_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#212315',
          color_medium: '#80AEBE',
          color_light: '#FBFFFD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 29,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snow-covered-270296_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#0A0A08',
          color_medium: '#40698A',
          color_light: '#FBFBFC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 30,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/hay-bales-1614929_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#002058',
          color_medium: '#2A6AB1',
          color_light: '#E9E4EA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 31,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/landscape-2905031_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#1D2B3B',
          color_medium: '#8DACC0',
          color_light: '#F7EBD3',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 32,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snowflake-297136_640.png',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#258277',
          color_medium: '#7FE4D6',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 33,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snow-1131605_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#14130E',
          color_medium: '#606163',
          color_light: '#F6F5F0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 34,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/nature-3182470_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '152%',
          color_dark: '#28272C',
          color_medium: '#5F9DE6',
          color_light: '#D0D2D2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 35,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/nature-2588077_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#090909',
          color_medium: '#61605E',
          color_light: '#C3AA82',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 36,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/winter-3118314_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#465A7A',
          color_medium: '#6584A1',
          color_light: '#DCDDD8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 37,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/ice-crystal-64157_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#000000',
          color_medium: '#5E5E5D',
          color_light: '#F4F4F2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 38,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/castelluccio-1799889_1280.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#323D53',
          color_medium: '#365981',
          color_light: '#CDC9C6',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 39,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/vehicle-3147203_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '142%',
          color_dark: '#080408',
          color_medium: '#90131D',
          color_light: '#F6F8F7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 40,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snow-2067640_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '135%',
          color_dark: '#2C141E',
          color_medium: '#B7070A',
          color_light: '#F1F5F8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 41,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snow-68564_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '180%',
          color_dark: '#000E21',
          color_medium: '#476DA1',
          color_light: '#F4F1ED',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 42,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snowflake-1872111_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#391921',
          color_medium: '#90BFF4',
          color_light: '#BFE4FE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 43,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snowy-566501_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#192115',
          color_medium: '#5D7189',
          color_light: '#ECF0EF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 44,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/sunset-2908446_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#0E1318',
          color_medium: '#4168C3',
          color_light: '#F0E3EA',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 45,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snow-3269850_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#152E4D',
          color_medium: '#6092C3',
          color_light: '#BCC0CC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 46,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/vineyard-636229_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#232320',
          color_medium: '#7B95AC',
          color_light: '#F7F7F5',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 47,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/winter-1818910_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#0D090D',
          color_medium: '#BE512D',
          color_light: '#E0DDE8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 48,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/jessica-fadel-453102-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#2D2D2D',
          color_medium: '#545454',
          color_light: '#D8D6D7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 49,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/jonathan-knepper-402493-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '190%',
          color_dark: '#575B5C',
          color_medium: '#B5BEBD',
          color_light: '#F8F9FD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 50,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/andreea-popa-602586-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '170%',
          color_dark: '#12252C',
          color_medium: '#B58D54',
          color_light: '#D0D4D7',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 51,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/yonatan-anugerah-210943-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#242328',
          color_medium: '#A98A86',
          color_light: '#E7EBEC',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 52,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/winter-2840549_1280.png',
          repeat_value: 'no-repeat',
          size_value: '110%',
          color_dark: '#B02B33',
          color_medium: '#E85039',
          color_light: '#FFFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 53,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/eli-pastor-603844-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '150%',
          color_dark: '#031637',
          color_medium: '#B3C5D3',
          color_light: '#F0F4FD',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 54,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/daniel-van-den-berg-489106-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#05041E',
          color_medium: '#A9A7AA',
          color_light: '#FDFCFE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 55,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/michael-shannon-485732-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#001D26',
          color_medium: '#6099A2',
          color_light: '#F8FAF9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 56,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/mira-kemppainen-212226-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#16131A',
          color_medium: '#FAC785',
          color_light: '#ACB1CE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 57,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/andre-benz-479579-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#3C0000',
          color_medium: '#C0003D',
          color_light: '#FDFFFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 58,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/luc-van-loon-195067-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#7A8FA0',
          color_medium: '#C8D9E0',
          color_light: '#F8FCFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 59,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/damian-mccoig-527817-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '143%',
          color_dark: '#343D4B',
          color_medium: '#93A1BB',
          color_light: '#CADBF0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 60,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/ricardo-gomez-angel-574749-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#060607',
          color_medium: '#785F41',
          color_light: '#EAEAE8',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 61,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/heping-270019-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '145%',
          color_dark: '#060F0C',
          color_medium: '#F4A41B',
          color_light: '#FFDF21',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 62,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/christmas-bauble-573194_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '158%',
          color_dark: '#120C01',
          color_medium: '#708922',
          color_light: '#D0CDC1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 63,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/eric-kuck-684577-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '142%',
          color_dark: '#39414D',
          color_medium: '#8DB5C5',
          color_light: '#D2D4CE',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 64,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/emanuel-hahn-197355-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#291E1C',
          color_medium: '#987A75',
          color_light: '#F9F9F9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 65,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/denys-nevozhai-185408-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '155%',
          color_dark: '#070603',
          color_medium: '#575E7E',
          color_light: '#FFFCFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 66,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/osman-rana-117187-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '162%',
          color_dark: '#010100',
          color_medium: '#253A3D',
          color_light: '#FDFCFF',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 67,
          user_id: 1,
          theme: 'Snow',
          type: 'holiday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/snowman-592021_1920.jpg',
          repeat_value: 'no-repeat',
          size_value: '100%',
          color_dark: '#281D1B',
          color_medium: '#E14435',
          color_light: '#F0ECE9',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 68,
          user_id: 1,
          theme: 'Snow',
          type: 'week',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/luc-van-loon-459039-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#193A59',
          color_medium: '#5EA1CE',
          color_light: '#F1EFF0',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 69,
          user_id: 1,
          theme: 'Snow',
          type: 'friday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/kalle-kortelainen-242406-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#323945',
          color_medium: '#756B74',
          color_light: '#FFFFFB',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 70,
          user_id: 1,
          theme: 'Snow',
          type: 'saturday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/asoggetti-537791-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '160%',
          color_dark: '#166291',
          color_medium: '#7E9FB9',
          color_light: '#CDE9F1',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        },
        {
          id: 71,
          user_id: 1,
          theme: 'Snow',
          type: 'sunday',
          src_string: 'https://s3.amazonaws.com/hours168-hurdaudio/img/december_tiles/tom-grimbert-tomgrimbert-1205172-unsplash.jpg',
          repeat_value: 'no-repeat',
          size_value: '140%',
          color_dark: '#022B3B',
          color_medium: '#AF9159',
          color_light: '#D2DDE2',
          created_at: new Date('2017-07-20T13:44:00.000Z'),
          updated_at: new Date('2017-07-20T13:44:00.000Z')
        }
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('december_tiles_id_seq', (SELECT MAX(id) FROM december_tiles));");
    });
};
