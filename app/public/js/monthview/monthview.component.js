(function() {
  'use strict';
  var dayClock = false;
  var weekClock = false;
  var monthClock = true;
  var profileClock = false;
  var currentUserId;
  var months = [ 'zero', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  var viewMonth = 0;
  var viewYear = 0;
  var defaultTile = 0;
  var weekTile = 1;
  var mtwtTile = 2;
  var fridayTile = 3;
  var saturdayTile = 4;
  var sundayTile = 5;
  var holidayTile = 6;



  function setClock(){
    if ((monthClock) && (!weekClock) && (!dayClock) && (!profileClock)) {
       document.getElementById("monthClock").innerHTML=new Date().toLocaleTimeString('en-GB');
     }
  }

  function getCookie (name) {
    var cookies = document.cookie.split(';');
    for(var i=0 ; i < cookies.length ; ++i) {
        var pair = cookies[i].trim().split('=');
        if(pair[0] === name) {
            return (pair[1]);
          }
    }
    return null;
  }

  function getUserFromParams(str) {
    let user = 0;
    let userAsString = '';
    let position = str.indexOf('user=');
    position += 5;
    userAsString = str.slice(position, str.indexOf('&year='));
    user = parseInt(userAsString);
    return(user);
  }

  function spokenOutput (str) {
    var u = new SpeechSynthesisUtterance();
    var synth = window.speechSynthesis;
    u.text = str;
    u.lang = 'en-US';
    u.rate = 0.98;
    //  u.voice = voices[0];
    u.onend = function(event) {
     setTimeout(function() {
       console.log(str);
     });
   };
    speechSynthesis.speak(u);
  }


  function getSecurityStringFromParams(str) {
    let security = '';
    let position = str.indexOf('recovery=');
    position += 9;
    security = str.slice(position);

    return(security);
  }

  function grabHolidays(allHollidays, day) {
    let today = [];
    let checkDate = new Date(day);
    let holiDate;

    for (let i = 0; i < allHollidays.length; i++) {
      holiDate = new Date(allHollidays[i].day_of);
      if ((checkDate.getFullYear() === holiDate.getFullYear()) && (checkDate.getMonth() === holiDate.getMonth()) && (checkDate.getDate() === holiDate.getDate())) {
        today.push(allHollidays[i]);
      } else if ((allHollidays[i].is_annual) && (checkDate.getMonth() === holiDate.getMonth()) && (checkDate.getDate() === holiDate.getDate())) {
        today.push(allHollidays[i]);
      } else {
        switch (allHollidays[i].name) {
          case ('Martin Luther King Day'):
            if ((checkDate.getMonth() === 0) && (checkDate.getDay() === 1)) {
              if ((checkDate.getDate() > 14) && (checkDate.getDate() < 22)) {
                today.push(today[i]);
              }
            }
            break;
          case ('Clean Out Your Computer Day'):
            if ((checkDate.getMonth() === 1) && (checkDate.getDay() === 1)) {
              if ((checkDate.getDate() > 7) && (checkDate.getDate() < 15)) {
                today.push(allHollidays[i]);
              }
            }
            break;
          case ('President\'s Day'):
            if ((checkDate.getMonth() === 1) && (checkDate.getDay() === 1)) {
              if ((checkDate.getDate() > 14) && (checkDate.getDate() < 22)) {
                today.push(allHollidays[i]);
              }
            }
            break;
          case ('Father\'s Day'):
            if ((checkDate.getMonth() === 5) && (checkDate.getDay() === 0)) {
              if ((checkDate.getDate() > 14) && (checkDate.getDate() < 22)) {
                today.push(allHollidays[i]);
              }
            }
            break;
          case ('Labour Day'):
            if ((checkDate.getMonth() === 8) && (checkDate.getDay() === 1)) {
              if (checkDate.getDate() < 8) {
                today.push(allHollidays[i]);
              }
            }
            break;
          case ('Mother\'s Day'):
            if ((checkDate.getMonth() === 4) && (checkDate.getDay() === 0)) {
              if ((checkDate.getDate() > 7) && (checkDate.getDate() < 15)) {
                today.push(allHollidays[i]);
              }
            }
            break;
          case ('Book Lover\'s Day'):
            if ((checkDate.getMonth() === 9) && (checkDate.getDay === 7)) {
              if (checkDate.getDay() < 8) {
                today.push(allHollidays[i]);
              }
            }
            break;
          case ('Thanksgiving Day'):
            if ((checkDate.getMonth() === 10) && (checkDate.getDay() === 4)) {
              if ((checkDate.getDate() > 21) && (checkDate.getDate() < 29)) {
                today.push(allHollidays[i]);
              }
            }
            break;
          case ('Black Friday'):
            if ((checkDate.getMonth() === 10) && (checkDate.getDay() === 5)) {
              if (((checkDate.getDate() - 1) > 21) && ((checkDate.getDate() - 1) < 29)) {
                today.push(allHollidays[i]);
              }
            }
            break;
          case ('Cyber Monday'):
            if (((checkDate.getMonth() === 11) || (checkDate.getMonth() === 10)) && (checkDate.getDay() === 1)) {
              if (((checkDate.getMonth() === 10) && ((checkDate.getDate() - 4) > 21) && ((checkDate.getDate() - 4) < 29)) || (checkDate.getMonth() === 11) && ((checkDate.getDate() - 4) < -1 )) {
                today.push(allHollidays[i]);
              }
            }
            break;
          case ('Advent'):
            if (checkDate.getDay() === 6) {
              if ((checkDate.getMonth() === 10) || (checkDate.getMonth() === 11)) {
                let xmas = new Date(checkDate.getFullYear() + '-12-25T13:44:00.000Z');
                switch (xmas.getDay()) {
                  case (0):
                    if ((checkDate.getDate() === 3) || (checkDate.getDate() === 10) || (checkDate.getDate() === 17) || (checkDate.getDate() === 24)) {
                      today.push(allHollidays[i]);
                    }
                    break;
                  case (1):
                    if ((checkDate.getDate() === 2) || (checkDate.getDate() === 9) || (checkDate.getDate() === 16) || (checkDate.getDate() === 23)) {
                      today.push(allHollidays[i]);
                    }
                    break;
                  case (2):
                    if ((checkDate.getDate() === 1) ||   (checkDate.getDate() === 8) || (checkDate.getDate() === 15) || (checkDate.getDate() === 22)) {
                    today.push(allHollidays[i]);
                    }
                    break;
                  case (3):
                    if ((checkDate.getDate() === 31) ||   (checkDate.getDate() === 7) || (checkDate.getDate() === 14) || (checkDate.getDate() === 21)) {
                      today.push(allHollidays[i]);
                    }
                    break;
                  case (4):
                    if ((checkDate.getDate() === 30) ||   (checkDate.getDate() === 6) || (checkDate.getDate() === 13) || (checkDate.getDate() === 20)) {
                      today.push(allHollidays[i]);
                    }
                    break;
                  case (5):
                    if ((checkDate.getDate() === 29) ||   (checkDate.getDate() === 5) || (checkDate.getDate() === 12) || (checkDate.getDate() === 19)) {
                      today.push(allHollidays[i]);
                    }
                    break;
                  case (6):
                    if ((checkDate.getDate() === 28) ||   (checkDate.getDate() === 4) || (checkDate.getDate() === 11) || (checkDate.getDate() === 18)) {
                      today.push(allHollidays[i]);
                    }
                    break;
                  default:
                  console.log('impossible situation for advent');
                }
              }
            }
            break;
          case ('Victoria Day'):
            if ((checkDate.getMonth() === 4) && (checkDate.getDay() === 1)) {
              if ((checkDate.getDate() > 17) && (checkDate.getDate() < 25)) {
                today.push(allHollidays[i]);
              }
            }
            break;
          case ('Civic Holiday (Canada)'):
            if ((checkDate.getMonth() === 7) && (checkDate.getDay() === 1)) {
              if (checkDate.getDate() < 8) {
                today.push(allHollidays[i]);
              }
            }
            break;
          case ('Indigenous Peoples\' Day'):
            if ((checkDate.getMonth() === 8) && (checkDate.getDay() === 5)) {
              if ((checkDate.getDate() > 21) && (checkDate.getDate() < 29)) {
                today.push(allHollidays[i]);
              }
            }
            break;
          case ('Arbor Day'):
            if ((checkDate.getMonth() === 3) &&(checkDate.getDay() === 5)) {
              if (checkDate.getDate() > 23) {
                today.push(allHollidays[i]);
              }
            }
            break;
          case ('Canadian Thanksgiving'):
            if ((checkDate.getMonth() === 9) && (checkDate.getDay() === 1)) {
              if ((checkDate.getDate() > 7) && (checkDate.getDate() < 15)) {
                today.push(allHollidays[i]);
              }
            }
            break;
          case ('Memorial Day'):
            if ((checkDate.getMonth() === 4) && (checkDate.getDay() === 1)) {
              if (checkDate.getDate() > 24) {
                today.push(allHollidays[i]);
              }
            }
            break;
          default:
            console.log('non-float holiday');
        }
      }
    }

    return(today);
  }

  function pastPresentFuture (checkDay) {
    let check = new Date(checkDay);
    let today = new Date();
    let timeString = '';
    if (today.getFullYear() < check.getFullYear()) {
      timeString = 'future';
    } else if (today.getFullYear() > check.getFullYear()) {
      timeString = 'past';
    } else {
      if (today.getMonth() < check.getMonth()) {
        timeString = 'future';
      } else if (today.getMonth() > check.getMonth()) {
        timeString = 'past';
      } else {
        if (today.getDate() < check.getDate()) {
          timeString = 'future';
        } else if (today.getDate() > check.getDate()) {
          timeString = 'past';
        } else {
          timeString = 'present';
        }
      }
    }

    return(timeString);
  }



  angular.module('app')
    .component('monthview', {
      controller: MonthviewController,
      templateUrl: '/js/monthview/monthview.template.html'
    });

    MonthviewController.$inject = ['$http', '$state', '$stateParams'];

    function MonthviewController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.gotoDay = gotoDay;
      vm.gotoCurrentMonth = gotoCurrentMonth;
      vm.gotoLastMonth = gotoLastMonth;
      vm.gotoNextMonth = gotoNextMonth;
      vm.gotoThisWeek = gotoThisWeek;
      vm.gotoProfile = gotoProfile;

      function gotoProfile() {
        monthClock = false;
        window.clearInterval(setClock);
        $state.go('userprofile', {id: currentUserId});
      }

      function gotoDay() {
        let navDay = new Date();
        navDay.setDate(navDay.getDate());
        let idString = 'user=' + currentUserId + '&dayof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        monthClock = false;
        window.clearInterval(setClock);
        $state.go('dayview', {id: idString});
      }

      function gotoThisWeek() {
        weekClock = false;
        let navDay = new Date();
        navDay.setDate(navDay.getDate());
        if (navDay.getDay() !== 1) {
          while(navDay.getDay() !==1) {
            navDay.setDate(navDay.getDate()-1);
          }
        }
        let idString = 'user=' + currentUserId + '&weekof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        window.clearInterval(setClock);
        $state.go('weekview', {id: idString});
      }

      function gotoCurrentMonth() {
        let navDay = new Date();
        navDay.setDate(navDay.getDate());
        let idString = 'user=' +currentUserId + '&year=' + navDay.getFullYear() + '&month=' + (navDay.getMonth() + 1);
        window.clearInterval(setClock);
        $state.go('monthview', {id: idString});
      }

      function gotoLastMonth() {

        let month = months.indexOf(viewMonth);
        let year = viewYear;
        if (month === 1) {
          month = 12;
          --year;
        } else {
          --month;
        }
        let idString = 'user=' + currentUserId + '&year=' + year + '&month=' + month;
        window.clearInterval(setClock);
        $state.go('monthview', {id: idString});
      }

      function gotoNextMonth() {

        let month = months.indexOf(viewMonth);
        let year = viewYear;
        if (month === 12) {
          month = 1;
          ++year;
        } else {
          ++month;
        }
        let idString = 'user=' + currentUserId + '&year=' + year + '&month=' + month;
        window.clearInterval(setClock);
        $state.go('monthview', {id: idString});
      }

      function pullMonthFromParams(params) {
        let month = '';
        let monthNumeral = 0;
        let position = params.indexOf('&month=');
        position += 7;
        monthNumeral = parseInt(params.slice(position));
        month = months[monthNumeral];

        return(month);
      }

      function pullYearFromParams(params) {
        let year = 0;
        let position = params.indexOf('&year=');
        position += 6;
        year = parseInt(params.slice(position, (position + 4)));

        return(year);
      }

      function onMonthMouseover(element) {
        let mouseoverColor = 'silver';
        let mouseoutColor = 'black';
        //console.log(element.parentNode.color_dark);
        if (element.parentNode.color_dark) {
          mouseoutColor = element.parentNode.color_dark;
        }
        if (element.parentNode.color_light) {
          mouseoverColor = element.parentNode.color_light;
        }
        element.setAttribute("style", "color: " + mouseoutColor + ";");
        element.addEventListener('mouseover', ()=>{
          element.setAttribute("style", "color: " + mouseoverColor + ";");
        });
        element.addEventListener('mouseout', ()=>{
          element.setAttribute("style", "color: " + mouseoutColor + ";");
        });
      }

      function offMonthMouseover(element) {
        let mouseoverColor = 'white';
        let mouseoutColor = '#999FFF';
        if (element.parentNode.color_dark) {
          mouseoutColor = element.parentNode.color_dark;
        }
        if (element.parentNode.color_light) {
          mouseoutColor = element.parentNode.color_light;
        }
        element.setAttribute("style", "color: " + mouseoutColor + ";");
        element.addEventListener('mouseover', ()=>{
          element.setAttribute("style", "color: " + mouseoverColor + "; opacity: 0.8;");
        });
        element.addEventListener('mouseout', ()=>{
          element.setAttribute("style", "color: " + mouseoutColor + "; opacity: 0.6;");
        });
      }

      function dayEventlistenHandler(element, indexDate) {

        element.addEventListener('click', ()=>{
          console.log(indexDate);
          let navDate = new Date(indexDate);
          let idString = 'user=' + currentUserId + '&dayof=' + navDate.getFullYear() + '-' + (navDate.getMonth() + 1) + '-' + navDate.getDate();
          monthClock = false;
          window.clearInterval(setClock);
          $state.go('dayview', {id: idString});
        });
      }

      function weekTileStateHandler(element, dateString) {
        let weekDayStatus = [];
        let navDay = new Date(dateString);
        for (let i = 0; i < 7; i++) {
          weekDayStatus[i] = pastPresentFuture(navDay);
          navDay.setDate(navDay.getDate() + 1);

        }
        if (weekDayStatus.indexOf('present') !== -1) {
          element.parentNode.setAttribute("style", "border: solid 4px " + element.parentNode.parentNode.borderColor + ";");
        } else if (weekDayStatus[0] === 'past') {
          element.parentNode.parentNode.setAttribute("style", "opacity: 0.6;");
        }
      }

      function weekButtonListner(element, dateString) {
        weekTileStateHandler(element, dateString);
        element.children[0].addEventListener('click', ()=>{
          let navDay = new Date(dateString);
          let idString = 'user=' + currentUserId + '&weekof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
          monthClock = false;
          window.clearInterval(setClock);
          $state.go('weekview', {id: idString});
        });
      }

      function setDayTile(element, dateString, tiles) {
        let tileDay = new Date(dateString);
        let specificTile = 0;
        let holidayList = [];
        $http.get(`/holidaysbyuser/${currentUserId}`)
        .then(allHolidayData=>{
          let allHolidays = allHolidayData.data;
          //default tiles
          if ((months.indexOf(viewMonth) - 1) !== tileDay.getMonth()) {
            specificTile = Math.floor(Math.random() * tiles[defaultTile].length);
            element.setAttribute("style", "background-image: url(" + tiles[defaultTile][specificTile].src_string + "); background-repeat: " + tiles[defaultTile][specificTile].repeat_value + "; background-size: " + tiles[defaultTile][specificTile].size_value + ";");
            element.color_dark = tiles[defaultTile][specificTile].color_dark;
            element.color_medium = tiles[defaultTile][specificTile].color_medium;
            element.color_light = tiles[defaultTile][specificTile].color_light;
            element.specificTile = tiles[defaultTile][specificTile].src_string;
          } else {
            holidayList = grabHolidays(allHolidays, dateString);
            if (holidayList.length > 0) {
              specificTile = Math.floor(Math.random() * tiles[holidayTile].length);
              if (pastPresentFuture(tileDay) === 'present') {
                element.setAttribute("style", "background-image: url(" + tiles[holidayTile][specificTile].src_string + "); background-repeat: " + tiles[holidayTile][specificTile].repeat_value + "; background-size: " + tiles[holidayTile][specificTile].size_value + "; border: solid 5px " + tiles[holidayTile][specificTile].color_medium + ";");
              } else {
                element.setAttribute("style", "background-image: url(" + tiles[holidayTile][specificTile].src_string + "); background-repeat: " + tiles[holidayTile][specificTile].repeat_value + "; background-size: " + tiles[holidayTile][specificTile].size_value + ";");
              }
              element.color_dark = tiles[holidayTile][specificTile].color_dark;
              element.color_medium = tiles[holidayTile][specificTile].color_medium;
              element.color_light = tiles[holidayTile][specificTile].color_light;
              element.specificTile = tiles[holidayTile][specificTile].src_string;
            } else if ((tileDay.getDay() > 0) && (tileDay.getDay() < 5)) {
              specificTile = Math.floor(Math.random() * tiles[mtwtTile].length);
              if (pastPresentFuture(tileDay) === 'present') {
                element.setAttribute("style", "background-image: url(" + tiles[mtwtTile][specificTile].src_string + "); background-repeat: " + tiles[mtwtTile][specificTile].repeat_value + "; background-size: " + tiles[mtwtTile][specificTile].size_value + "; border: solid 5px " + tiles[mtwtTile][specificTile].color_medium + ";");
              } else {
                element.setAttribute("style", "background-image: url(" + tiles[mtwtTile][specificTile].src_string + "); background-repeat: " + tiles[mtwtTile][specificTile].repeat_value + "; background-size: " + tiles[mtwtTile][specificTile].size_value + ";");
              }
              element.color_dark = tiles[mtwtTile][specificTile].color_dark;
              element.color_medium = tiles[mtwtTile][specificTile].color_medium;
              element.color_light = tiles[mtwtTile][specificTile].color_light;
              element.specificTile = tiles[mtwtTile][specificTile].src_string;
            } else if (tileDay.getDay() === 5) {
              specificTile = Math.floor(Math.random() * tiles[fridayTile].length);
              if (pastPresentFuture(tileDay) === 'present') {
                element.setAttribute("style", "background-image: url(" + tiles[fridayTile][specificTile].src_string + "); background-repeat: " + tiles[fridayTile][specificTile].repeat_value + "; background-size: " + tiles[fridayTile][specificTile].size_value + "; border: solid 5px " + tiles[fridayTile][specificTile].color_medium + ";");
              } else {
                element.setAttribute("style", "background-image: url(" + tiles[fridayTile][specificTile].src_string + "); background-repeat: " + tiles[fridayTile][specificTile].repeat_value + "; background-size: " + tiles[fridayTile][specificTile].size_value + ";");
              }
              element.color_dark = tiles[fridayTile][specificTile].color_dark;
              element.color_medium = tiles[fridayTile][specificTile].color_medium;
              element.color_light = tiles[fridayTile][specificTile].color_light;
              element.specificTile = tiles[fridayTile][specificTile].src_string;
            } else if (tileDay.getDay() === 6) {
              specificTile = Math.floor(Math.random() * tiles[saturdayTile].length);
              if (pastPresentFuture(tileDay) === 'present') {
                element.setAttribute("style", "background-image: url(" + tiles[saturdayTile][specificTile].src_string + "); background-repeat: " + tiles[saturdayTile][specificTile].repeat_value + "; background-size: " + tiles[saturdayTile][specificTile].size_value + "; border: solid 5px " + tiles[saturdayTile][specificTile].color_medium + ";");
              } else {
                element.setAttribute("style", "background-image: url(" + tiles[saturdayTile][specificTile].src_string + "); background-repeat: " + tiles[saturdayTile][specificTile].repeat_value + "; background-size: " + tiles[saturdayTile][specificTile].size_value + ";");
              }
              element.color_dark = tiles[saturdayTile][specificTile].color_dark;
              element.color_medium = tiles[saturdayTile][specificTile].color_medium;
              element.color_light = tiles[saturdayTile][specificTile].color_light;
              element.specificTile = tiles[saturdayTile][specificTile].src_string;
            } else if (tileDay.getDay() === 0) {
              specificTile = Math.floor(Math.random() * tiles[sundayTile].length);
              if (pastPresentFuture(tileDay) === 'present') {
                element.setAttribute("style", "background-image: url(" + tiles[sundayTile][specificTile].src_string + "); background-repeat: " + tiles[sundayTile][specificTile].repeat_value + "; background-size: " + tiles[sundayTile][specificTile].size_value + "; border: solid 5px " + tiles[sundayTile][specificTile].color_medium + ";");
              } else {
                element.setAttribute("style", "background-image: url(" + tiles[sundayTile][specificTile].src_string + "); background-repeat: " + tiles[sundayTile][specificTile].repeat_value + "; background-size: " + tiles[sundayTile][specificTile].size_value + ";");
              }
              element.color_dark = tiles[sundayTile][specificTile].color_dark;
              element.color_medium = tiles[sundayTile][specificTile].color_medium;
              element.color_light = tiles[sundayTile][specificTile].color_light;
              element.specificTile = tiles[sundayTile][specificTile].src_string;
            }
          }

          if ((tileDay.getMonth() + 1) === months.indexOf(viewMonth)) {
            element.children[0].className = 'onMonth';
            element.children[0].setAttribute("style", "color: " + element.color_dark + ";");
            onMonthMouseover(element.children[0]);
          } else {
            element.children[0].className = 'offMonth';
            element.children[0].setAttribute("style", "color: " + element.color_dark + ";");
            element.children[0].setAttribute("style", "opacity: 0.6;");
            offMonthMouseover(element.children[0]);
          }

          //holiday tiles
          //mtwt tiles
          //friday tiles
          //saturday tiles
          //sunday tiles
        });

      }


      function updateMonthDisplay(tiles) {
        let divArray = [ 'week1MondayCell', 'week1TuesdayCell', 'week1WednesdayCell', 'week1ThursdayCell', 'week1FridayCell', 'week1SaturdayCell', 'week1SundayCell', 'week2MondayCell', 'week2TuesdayCell', 'week2WednesdayCell', 'week2ThursdayCell', 'week2FridayCell', 'week2SaturdayCell', 'week2SundayCell', 'week3MondayCell', 'week3TuesdayCell', 'week3WednesdayCell', 'week3ThursdayCell', 'week3FridayCell', 'week3SaturdayCell', 'week3SundayCell', 'week4MondayCell', 'week4TuesdayCell', 'week4WednesdayCell', 'week4ThursdayCell', 'week4FridayCell', 'week4SaturdayCell', 'week4SundayCell', 'week5MondayCell', 'week5TuesdayCell', 'week5WednesdayCell', 'week5ThursdayCell', 'week5FridayCell', 'week5SaturdayCell', 'week5SundayCell', 'week6MondayCell', 'week6TuesdayCell', 'week6WednesdayCell', 'week6ThursdayCell', 'week6FridayCell', 'week6SaturdayCell', 'week6SundayCell' ];
        let week6 = document.getElementById('week6');
        let element;
        let monthIndex = months.indexOf(viewMonth);
        let monthString;
        let dayString;
        let dateString;
        if (monthIndex < 10) {
          monthString = '0' + monthIndex.toString();
        } else {
          monthString = monthIndex.toString();
        }
        let theFirst = new Date(viewYear + '-' + monthString + '-01T13:44:00.000Z');
        let indexDate = new Date(viewYear + '-' + monthString + '-01T13:44:00.000Z');
        if (indexDate.getDay() !== 1) {
          while (indexDate.getDay() !== 1){
            indexDate.setDate(indexDate.getDate()-1);
          }
        }
        for (let i = 0; i < divArray.length; i++) {
          element = document.getElementById(divArray[i]);
          element.children[0].innerHTML = indexDate.getDate();
          monthString = (indexDate.getMonth() + 1).toString();
          if (monthString.length < 2) {
            monthString = '0' + monthString;
          }
          dayString = indexDate.getDate().toString();
          if (dayString.length < 2) {
            dayString = '0' + dayString;
          }
          if ((monthString === '12') && (indexDate.getDate() > 25)) {
            dateString = (parseInt(viewYear) - 1) + '-' + monthString + '-' + dayString + 'T13:44:00.000Z';
          } else {
            dateString = viewYear + '-' + monthString + '-' + dayString + 'T13:44:00.000Z';
          }
          setDayTile(element, dateString, tiles);
          dayEventlistenHandler(element, dateString);
          switch(divArray[i]) {
            case('week1MondayCell'):
              weekButtonListner(document.getElementById('weekOf1'), dateString);
              break;
            case('week2MondayCell'):
              weekButtonListner(document.getElementById('weekOf2'), dateString);
              break;
            case('week3MondayCell'):
              weekButtonListner(document.getElementById('weekOf3'), dateString);
              break;
            case('week4MondayCell'):
              weekButtonListner(document.getElementById('weekOf4'), dateString);
              break;
            case('week5MondayCell'):
              weekButtonListner(document.getElementById('weekOf5'), dateString);
              break;
            case('week6MondayCell'):
              weekButtonListner(document.getElementById('weekOf6'), dateString);
              break;
            default:
              console.log('not a monday div');
          }
          if (divArray[i] === 'week6MondayCell') {
            if ((indexDate.getMonth() + 1) === months.indexOf(viewMonth)) {
              week6.setAttribute("style", "visibility: visible;");
            } else {
              week6.setAttribute("style", "visibility: hidden;");
            }

          }


          indexDate.setDate(indexDate.getDate()+1);
        }
      }

      function updateMonthYear() {
        let monthYear = document.getElementById('monthYear');
        monthYear.innerHTML = viewMonth + ' ' + viewYear;
      }

      function setTheWeekCellTiles(tilesArr) {
        let element;
        let weekOfTile = 0;
        let weekDivs = [ 'weekOf1Cell', 'weekOf2Cell', 'weekOf3Cell', 'weekOf4Cell', 'weekOf5Cell', 'weekOf6Cell' ];
        for (let i = 0; i < weekDivs.length; i++) {
          weekOfTile = Math.floor(Math.random() * tilesArr[weekTile].length);
          //console.log(tilesArr[weekTile][weekOfTile]);
          element = document.getElementById(weekDivs[i]);
          element.borderColor = tilesArr[weekTile][weekOfTile].color_dark;
          element.setAttribute("style", "background-image: url(" + tilesArr[weekTile][weekOfTile].src_string + "); background-repeat: " + tilesArr[weekTile][weekOfTile].repeat_value + "; background-size: " + tilesArr[weekTile][weekOfTile].size_value + ";");
        }
      }

      function onInit() {
        console.log("Monthview is lit");
        let monthTilesString = '';
        let tiles = [];
        tiles[defaultTile] = [];
        tiles[weekTile] = [];
        tiles[mtwtTile] = [];
        tiles[fridayTile] = [];
        tiles[saturdayTile] = [];
        tiles[sundayTile] = [];
        tiles[holidayTile] = [];
        dayClock = false;
        weekClock = false;
        monthClock = true;


        var myTimer = setInterval(setClock,1000);
        let userDateViewString = ($stateParams.id);
        currentUserId = getUserFromParams(userDateViewString);
        // check user ID cookies and reject bad cookies
        let userCookie = getCookie('h168userId');
        if (parseInt(userCookie) !== parseInt(currentUserId)) {
          let res = document.cookie;
          let multiple = res.split(';');
          let key;
          for (let i = 0; i < multiple.length; i++) {
            key = multiple[i].split('=');
            document.cookie = key[0] + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
          }

          alert('forbidden user access');
          monthClock = false;
          window.clearInterval(setClock);
          $state.go('landing');
        } else {
          $http.get(`/users/${currentUserId}`)
          .then(userData=>{
            var userAccount = userData.data;
            if ((getCookie(userAccount.security.key)) !== (userAccount.security.value)) {

              alert('access denied');
              monthClock = false;
              window.clearInterval(setClock);
              $state.go('landing');
            }
          });
        }
        viewMonth = pullMonthFromParams(userDateViewString);
        viewYear = parseInt(pullYearFromParams(userDateViewString));
        // console.log(viewMonth);
        //console.log(viewYear);

        switch(viewMonth) {
           case('January'):
             monthTilesString = 'january_tilesbyuser';
             break;
          case('February'):
            monthTilesString = 'february_tilesbyuser';
            break;
          case('March'):
            monthTilesString = 'march_tilesbyuser';
            break;
          case('April'):
            monthTilesString = 'april_tilesbyuser';
            break;
          case('May'):
            monthTilesString = 'may_tilesbyuser';
            break;
          case('June'):
            monthTilesString = 'june_tilesbyuser';
            break;
          case('July'):
            monthTilesString = 'july_tilesbyuser';
            break;
          case('August'):
            monthTilesString = 'august_tilesbyuser';
            break;
          // case('September'):
          //   monthTilesString = 'september_tilesbyuser';
          //   break;
          case('October'):
            monthTilesString = 'october_tilesbyuser';
            break;
          case('November'):
            monthTilesString = 'november_tilesbyuser';
            break;
          case('December'):
            monthTilesString = 'december_tilesbyuser';
            break;
          default:
            console.log('Month Tiles not yet supported for this month');
        }
        if (monthTilesString !== '') {
          $http.get(`/${monthTilesString}/${currentUserId}`)
          .then(monthTilesData=>{
            let monthTiles = monthTilesData.data;
            if (monthTiles.length > 0) {
              for (let i = 0; i < monthTiles.length; i++) {
                switch(monthTiles[i].type) {
                  case ('default'):
                    tiles[defaultTile].push(monthTiles[i]);
                    break;
                  case ('week'):
                    tiles[weekTile].push(monthTiles[i]);
                    break;
                  case ('mtwt'):
                    tiles[mtwtTile].push(monthTiles[i]);
                    break;
                  case ('friday'):
                    tiles[fridayTile].push(monthTiles[i]);
                    break;
                  case ('saturday'):
                    tiles[saturdayTile].push(monthTiles[i]);
                    break;
                  case ('sunday'):
                    tiles[sundayTile].push(monthTiles[i]);
                    break;
                  case ('holiday'):
                    tiles[holidayTile].push(monthTiles[i]);
                    break;
                  default:
                    console.log('error state');
                    console.log(monthTiles[i].type);

                }
              }
              setTheWeekCellTiles(tiles);
              updateMonthYear();
              updateMonthDisplay(tiles);
            } else {
              updateMonthYear();
              updateMonthDisplay();
            }
          });
        } else {
          updateMonthYear();
          updateMonthDisplay();
        }
      }
    }


}());
