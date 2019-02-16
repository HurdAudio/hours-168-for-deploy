(function() {
  'use strict';
  var dayClock = false;
  var weekClock = true;
  var monthClock = false;
  var landingClock = false;
  var myTimer = setInterval(setClockWeek,1000);
  var currentUserId = 0;
  var mondayDate = new Date();
  var tuesdayDate = new Date();
  var wednesdayDate = new Date();
  var thursdayDate = new Date();
  var fridayDate = new Date();
  var saturdayDate = new Date();
  var sundayDate = new Date();
  var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var dayStrips = [ 'mondayDatestrip', 'mondayName', 'tuesdayDatestrip', 'tuesdayName', 'wednesdayDateStrip', 'wednesdayName', 'thursdayDatestrip', 'thursdayName', 'fridayDatestrip', 'fridayName', 'saturdayDatestrip', 'saturdayName', 'sundayDatestrip', 'sundayName' ];
  var pulses = [ '#ff0000', '#ff1100', '#ff2211', '#ff3322', '#ff4433', '#ff5544', '#ff6655', '#ff7766', '#ff8877', '#ff9988', '#ffaa99', '#ffbbaa', '#ffccbb', '#ffddcc', '#ffeedd', '#ffffee', '#ffeeff', '#ffddee', '#ffccdd', '#ffbbcc', '#ffaabb', '#ff99aa', '#ff8899', '#ff7788', '#ff6677', '#ff5566', '#ff4455', '#ff3344', '#ff2233', '#ff1122', '#ff0011' ];
  var pulsePoint = 0;
  var hours = ['0h', '030h', '1h', '130h', '2h', '230h', '3h', '330h', '4h', '430h', '5h', '530h', '6h', '630h', '7h', '730h', '8h', '830h', '9h', '930h', '10h', '1030h', '11h', '1130h', '12h', '1230h', '13h', '1330h', '14h', '1430h', '15h', '1530h', '16h', '1630h', '17h', '1730h', '18h', '1830h', '19h', '1930h', '20h', '2030h', '21h', '2130h', '22h', '2230h', '23h', '2330h', '0h' ];
  var hoursTime = ['0:00', '0:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '24:00' ];

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


  function setClockWeek(){
    if ((weekClock) && (!dayClock) && (!monthClock) && (!landingClock)) {
      if(document.getElementById("clockWeekview")) {
        document.getElementById("clockWeekview").innerHTML=new Date().toLocaleTimeString('en-GB');
      }
     }
  }

  angular.module('app')
    .component('weekview', {
      controller: WeekviewController,
      templateUrl: '/js/weekview/weekview.template.html'
    });

    WeekviewController.$inject = ['$http', '$state', '$stateParams'];

    function WeekviewController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.gotoToday = gotoToday;
      vm.gotoThisWeek = gotoThisWeek;
      vm.gotoPreviousWeek = gotoPreviousWeek;
      vm.gotoNextWeek = gotoNextWeek;
      vm.toDayview = toDayview;
      vm.gotoMonth = gotoMonth;
      vm.gotoProfile = gotoProfile;
      vm.cancelShareCrud = cancelShareCrud;

      function cancelShareCrud() {
        let shareCRUDPopup = document.getElementById('shareCRUDPopup');
        let shareCRUDFriendsSearch = document.getElementById('shareCRUDFriendsSearch');
        // let timeCRUDPopup = document.getElementById('timeCRUDPopup');
        // let weekStrip = document.getElementById('weekStrip');

        // timeCRUDPopup.setAttribute("style", "visibility: visible; z-index: 3;");
        // weekStrip.setAttribute("style", "opacity: 0.6;");
        shareCRUDPopup.setAttribute("style", "visibility: hidden; z-index: -6; opacity: 0;");
        shareCRUDFriendsSearch.value = '';
      }

      function headshotName(friendId, imgElement, pElement) {
        $http.get(`/users/${friendId}`)
        .then(friendData=>{
          let friend = friendData.data;
          imgElement.src = friend.user_avatar_url;
          pElement.innerHTML = friend.name;
        });
      }

      function manageFriendEventListener(divElement, friendId, timeblockId) {
        divElement.addEventListener('click', ()=>{
          let subObj = {
            user_id: currentUserId,
            timeblock_id: timeblockId,
            share_associate_id: friendId,
            accepted: false,
            responded: false
          };
          $http.post('/timeblock_shares', subObj)
          .then(timeData=>{
            let time = timeData.data;
            cancelShareCrud();
          });
        });
      }

      function populateShareFriendsList(friendsIds, timeblockId) {
        let shareCRUDFriendsList = document.getElementById('shareCRUDFriendsList');
        let divElement;
        let imgElement;
        let pElement;
        let brElement;

        while (shareCRUDFriendsList.firstChild) {
          shareCRUDFriendsList.removeChild(shareCRUDFriendsList.firstChild);
        }
        for (let i = 0; i < friendsIds.length; i++) {
          divElement = document.createElement('div');
          shareCRUDFriendsList.appendChild(divElement);
          divElement.setAttribute("style", "cursor: pointer;");
          imgElement = document.createElement('img');
          divElement.appendChild(imgElement);
          pElement = document.createElement('p');
          divElement.appendChild(pElement);
          brElement = document.createElement('br');
          divElement.appendChild(brElement);
          brElement = document.createElement('br');
          divElement.appendChild(brElement);
          brElement = document.createElement('br');
          divElement.appendChild(brElement);
          brElement = document.createElement('br');
          divElement.appendChild(brElement);
          brElement = document.createElement('br');
          divElement.appendChild(brElement);
          brElement = document.createElement('br');
          divElement.appendChild(brElement);
          headshotName(friendsIds[i], imgElement, pElement);
          manageFriendEventListener(divElement, friendsIds[i], timeblockId);
        }
      }

      function fillOutListEntry(friendsArr, friendId) {
        $http.get(`/users/${friendId}`)
        .then(friendData=>{
          let friend = friendData.data;
          friendsArr.push(friend);
        });
      }

      function filterFriendsListOnInput (filterText, friendsList, timeId) {
        let shareCRUDFriendsList = document.getElementById('shareCRUDFriendsList');
        let friendsArray = [];
        let filteredArray = [];

        while (shareCRUDFriendsList.firstChild) {
          shareCRUDFriendsList.removeChild(shareCRUDFriendsList.firstChild);
        }
        for (let i = 0; i < friendsList.length; i++) {
          fillOutListEntry(friendsArray, friendsList[i]);
        }
        setTimeout(()=>{
          let filteredFriends = friendsArray.filter(entry=>{
            return((entry.name.toLowerCase().indexOf(filterText) !== -1) || (entry.email.toLowerCase().indexOf(filterText) !== -1));
          });
          filteredFriends = filteredFriends.sort((a, b)=>{
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          });
          for (let k = 0; k < filteredFriends.length; k++) {
            filteredArray[k] = filteredFriends[k].id;
          }
          populateShareFriendsList(filteredArray, timeId);
        }, (75 * friendsList.length));
      }

      function shareAppointment(timeId) {
        let shareCRUDPopup = document.getElementById('shareCRUDPopup');
        let shareCRUDFriendsList = document.getElementById('shareCRUDFriendsList');
        while (shareCRUDFriendsList.firstChild) {
          shareCRUDFriendsList.removeChild(shareCRUDFriendsList.firstChild);
        }
        let shareCRUDFRiendsSearchDiv = document.getElementById('shareCRUDFRiendsSearchDiv');
        let shareCRUDFriendsSearch = document.getElementById('shareCRUDFriendsSearch');
        if (shareCRUDFriendsSearch) {
          shareCRUDFriendsSearch.parentNode.removeChild(shareCRUDFriendsSearch);
          shareCRUDFriendsSearch = document.createElement('input');
          shareCRUDFRiendsSearchDiv.appendChild(shareCRUDFriendsSearch);
          shareCRUDFriendsSearch.id = 'shareCRUDFriendsSearch';
          shareCRUDFriendsSearch.type = 'text';
          shareCRUDFriendsSearch.placeholder = 'search';
        }
        // let timeCRUDPopup = document.getElementById('timeCRUDPopup');
        // let weekStrip = document.getElementById('weekStrip');


        // timeCRUDPopup.setAttribute("style", "visibility: hidden; z-index: -1;");
        // weekStrip.setAttribute("style", "opacity: 0.2; transition: opacity 0.5s linear;");

        $http.get(`/timeblocks/${timeId}`)
        .then(timeBlockData=>{
          let timeBlock = timeBlockData.data;

          $http.get(`/blocktypes/${timeBlock.block_type}`)
          .then(blockData=>{
            let block = blockData.data;
            shareCRUDPopup.setAttribute("style", "visibility: visible; z-index: 6; opacity: 1; background: " + block.color + "; background-color: -webkit-linear-gradient(135deg, " + block.color + ", #000000); background: -o-linear-gradient(135deg, " + block.color + ", #000000); background: -moz-linear-gradient(135deg, " + block.color + ", #000000); background: linear-gradient(135deg, " + block.color + ", #000000); transition: opacity 0.5s linear;");

            $http.get(`/users/${currentUserId}`)
            .then(userData=>{
              let user = userData.data;
              if ((user.associates.friends !== undefined) && (user.associates.friends.length > 0)) {
                populateShareFriendsList(user.associates.friends, timeId);
              }
              shareCRUDFriendsSearch.addEventListener('keyup', ()=>{
                if (shareCRUDFriendsSearch.value === '') {
                  populateShareFriendsList(user.associates.friends, timeId);
                } else {
                  filterFriendsListOnInput(shareCRUDFriendsSearch.value.toLowerCase(), user.associates.friends, timeId);
                }
              });
            });
          });
        });

      }

      function gotoProfile() {
        weekClock = false;
        $state.go('userprofile', {id: currentUserId});
      }

      function gotoMonth() {
        let mons = new Date(mondayDate);
        let suns = new Date(sundayDate);
        let month = (mons.getMonth() + 1);
        let year = mons.getFullYear();
        if (mons.getMonth() !== suns.getMonth()) {
          if (suns.getDate() > 3) {
            month = (suns.getMonth() +1);
            if (mons.getFullYear() !== suns.getFullYear()) {
              year = suns.getFullYear();
            }
          }
        }
        let idString = 'user=' +currentUserId + '&year=' + year + '&month=' + month;
        weekClock = false;
        $state.go('monthview', {id: idString});
      }

      function toDayview(dayString) {
        let navDate;
        switch(dayString) {
          case('monday'):
            navDate = new Date(mondayDate);
            break;
          case('tuesday'):
            navDate = new Date(tuesdayDate);
            break;
          case('wednesday'):
            navDate = new Date(wednesdayDate);
            break;
          case('thursday'):
            navDate = new Date(thursdayDate);
            break;
          case('friday'):
            navDate = new Date(fridayDate);
            break;
          case('saturday'):
            navDate = new Date(saturdayDate);
            break;
          case('sunday'):
            navDate = new Date(sundayDate);
            break;
          default:
            console.log('unsupported day');
        }
        let idString = 'user=' + currentUserId + '&dayof=' + navDate.getFullYear() + '-' + (navDate.getMonth() + 1) + '-' + navDate.getDate();
        dayClock = true;
        weekClock = false;
        $state.go('dayview', {id: idString});
      }

      function gotoPreviousWeek() {
        let idString = '';
        let navDate = new Date(mondayDate);
        navDate.setDate(navDate.getDate() - 7);
        idString = 'user=' + currentUserId + '&weekof=' + navDate.getFullYear() + '-' + (navDate.getMonth() + 1) + '-' + navDate.getDate();
        $state.go('weekview', {id: idString});
      }

      function gotoNextWeek() {
        let idString = '';
        let navDate = new Date(mondayDate);
        navDate.setDate(navDate.getDate() + 7);
        idString = 'user=' + currentUserId + '&weekof=' + navDate.getFullYear() + '-' + (navDate.getMonth() + 1) + '-' + navDate.getDate();
        $state.go('weekview', {id: idString});
      }

      function gotoThisWeek() {
        let navDay = new Date();
        if (navDay.getDay() !== 1) {
          while(navDay.getDay() !==1) {
            navDay.setDate(navDay.getDate()-1);
          }
        }
        let idString = 'user=' + currentUserId + '&weekof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        $state.go('weekview', {id: idString});
      }

      function gotoToday() {
        let navDay = new Date();
        navDay.setDate(navDay.getDate());
        let idString = 'user=' + currentUserId + '&dayof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        weekClock = false;
        $state.go('dayview', {id: idString});
      }

      function getUserFromParams(parseThis) {
        let user = 0;
        let userAsString = '';
        let position = parseThis.indexOf('user=');
        position += 5;
        while ((parseThis[position] !== '&') || (location < parseThis.length)) {
          userAsString = userAsString + parseThis[position];
          ++position;
        }
        user = parseInt(userAsString);


        return(user);

      }

      function setMonday(parseThis) {
        let today = new Date();
        let userTimezoneOffset = today.getTimezoneOffset() * 60000;
        let mondayDatestrip = document.getElementById('mondayDatestrip');
        let tuesdayDatestrip = document.getElementById('tuesdayDatestrip');
        let wednesdayDateStrip = document.getElementById('wednesdayDateStrip');
        let thursdayDatestrip = document.getElementById('thursdayDatestrip');
        let fridayDatestrip = document.getElementById('fridayDatestrip');
        let saturdayDatestrip = document.getElementById('saturdayDatestrip');
        let sundayDatestrip = document.getElementById('sundayDatestrip');
        let position = parseThis.indexOf('&weekof=');
        position += 8;
        let parseDate = parseThis.slice(position);
        let yyyy = parseDate.slice(0,4);
        position = 5;
        let mm = '';
        let dd = '';
        if (parseDate[6] === '-') {
          mm = '0' + parseDate[position];
        } else {
          mm = parseDate.slice(position, 7);
        }
        if (parseDate[parseDate.length - 2] === '-') {
          dd = '0' + parseDate[parseDate.length - 1];
        } else {
          dd = parseDate.slice((parseDate.length - 2));
        }
        mondayDate = new Date(yyyy + '-' + mm + '-' + dd);
        mondayDate = new Date(mondayDate.getTime() + userTimezoneOffset);
        tuesdayDate = new Date(mondayDate);
        tuesdayDate = new Date(tuesdayDate.setDate(mondayDate.getDate() + 1));
        tuesdayDate = new Date(tuesdayDate.getTime() + userTimezoneOffset);
        wednesdayDate = new Date(mondayDate);
        wednesdayDate = new Date(wednesdayDate.setDate(mondayDate.getDate() + 2));
        wednesdayDate = new Date(wednesdayDate.getTime() + userTimezoneOffset);
        thursdayDate = new Date(mondayDate);
        thursdayDate = new Date(thursdayDate.setDate(mondayDate.getDate() + 3));
        thursdayDate = new Date(thursdayDate.getTime() + userTimezoneOffset);
        fridayDate = new Date(mondayDate);
        fridayDate = new Date(fridayDate.setDate(mondayDate.getDate() + 4));
        fridayDate = new Date(fridayDate.getTime() + userTimezoneOffset);
        saturdayDate = new Date(mondayDate);
        saturdayDate = new Date(saturdayDate.setDate(mondayDate.getDate() + 5));
        saturdayDate = new Date(saturdayDate.getTime() + userTimezoneOffset);
        sundayDate = new Date(mondayDate);
        sundayDate = new Date(sundayDate.setDate(mondayDate.getDate() + 6));
        sundayDate = new Date(sundayDate.getTime() + userTimezoneOffset);
        mondayDatestrip.innerHTML = mondayDate.getDate() + ' ' + months[mondayDate.getMonth()] + ' ' + mondayDate.getFullYear();
        tuesdayDatestrip.innerHTML = tuesdayDate.getDate() + ' ' + months[tuesdayDate.getMonth()] + ' ' + tuesdayDate.getFullYear();
        wednesdayDateStrip.innerHTML = wednesdayDate.getDate() + ' ' + months[wednesdayDate.getMonth()] + ' ' + wednesdayDate.getFullYear();
        thursdayDatestrip.innerHTML = thursdayDate.getDate() + ' ' + months[thursdayDate.getMonth()] + ' ' + thursdayDate.getFullYear();
        fridayDatestrip.innerHTML = fridayDate.getDate() + ' ' + months[fridayDate.getMonth()] + ' ' + fridayDate.getFullYear();
        saturdayDatestrip.innerHTML = saturdayDate.getDate() + ' ' + months[saturdayDate.getMonth()] + ' ' + saturdayDate.getFullYear();
        sundayDatestrip.innerHTML = sundayDate.getDate() + ' ' + months[sundayDate.getMonth()] + ' ' + sundayDate.getFullYear();
      }

      function getTense(time) {
        let tense = '';
        let checkTime = new Date(time);
        let current = new Date();

        if (current.getFullYear() < checkTime.getFullYear()) {
          tense = 'future';
        } else if (current.getFullYear() > checkTime.getFullYear()) {
          tense = 'past';
        } else {
          if (current.getMonth() < checkTime.getMonth()) {
            tense = 'future';
          } else if (current.getMonth() > checkTime.getMonth()) {
            tense = 'past';
          } else {
            if (current.getDate() < checkTime.getDate()) {
              tense = 'future';
            } else if (current.getDate() > checkTime.getDate()) {
              tense = 'past';
            } else {
              tense = 'present';
            }
          }
        }

        return(tense);
      }

      function flashThePresent(element1, element2, time) {
        let checkTime = new Date(time);
        if (getTense(checkTime) !== 'present') {
          element1.setAttribute("style", "color: #bb9933;");
          element2.setAttribute("style", "color: #bb9933;");
          setPastPresentDays();
        } else {
          element1.setAttribute("style", "color: " + pulses[pulsePoint] + ";");
          element2.setAttribute("style", "color: " + pulses[pulsePoint] + ";");
          ++pulsePoint;
          if (pulsePoint === pulses.length) {
            pulsePoint = 0;
          }
          setTimeout(()=>{
            flashThePresent(element1, element2, time);
          }, 200);
        }
      }

      function setPastPresentDays() {
        let dayVals = [ 'monday', mondayDate, 'tuesday', tuesdayDate, 'wednesday', wednesdayDate, 'thursday', thursdayDate, 'friday', fridayDate, 'saturday', saturdayDate, 'sunday', sundayDate ];
        let checkDate = new Date();
        let displayDate;
        let displayDay;

        for (let i = 0; i < dayStrips.length; i += 2) {
          checkDate = new Date(dayVals[i + 1]);
          displayDate = document.getElementById(dayStrips[i]);
          displayDay = document.getElementById(dayStrips[i + 1]);
          switch(getTense(checkDate)) {
            case('past'):
              displayDate.setAttribute("style", "color: #bb9933;");
              displayDay.setAttribute("style", "color: #bb9933;");
              break;
            case('future'):
            displayDate.setAttribute("style", "color: #000000;");
            displayDay.setAttribute("style", "color: #000000;");
              break;
            case('present'):
              flashThePresent(displayDate, displayDay, checkDate);
              break;
            default:
              console.log('unsupported tense');
          }
        }
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

      function setHolidayButton(element, holidata) {

        element.addEventListener('click', (e)=>{
          e.preventDefault();
          e.stopPropagation();
          for (let i = 0; i < holidata.length; i++) {
            if (i > 0) {
              spokenOutput('... and ');
            }
            spokenOutput(holidata[i].name);
          }
        });
      }

      function tasksButtonSpeaker(element, tasks) {
        element.addEventListener('click', (e)=>{
          e.preventDefault();
          e.stopPropagation();
          for (let i = 0; i < tasks.length; i++) {
            if (i > 0) {
              spokenOutput('... and ');
            }
            spokenOutput(tasks[i].name + ' is due on this day.');
          }
        });
      }

      function billButtonSpeaker(element, bills) {
        element.addEventListener('click', (e)=>{
          e.preventDefault();
          e.stopPropagation();
          for (let i = 0; i < bills.length; i++) {
            if (i > 0) {
              spokenOutput('... and ');
            }
            spokenOutput(bills[i].name + " is due on this day.");
          }
        });
      }

      function occasionButtonSpeaker(element, occasionArray) {

        element.addEventListener('click', (e)=>{
          e.preventDefault();
          e.stopPropagation();
          for (let i = 0; i < occasionArray.length; i++) {
            if (i > 0) {
              spokenOutput('... and ');
            } else {
              spokenOutput('Remember...');
            }
            spokenOutput(occasionArray[i].name);
          }
        });
      }

      function getTheDaysTasks(tasks, dayOf) {
        let checkDate = new Date(dayOf);
        let tasker = [];
        let taskDate;

        for (let i = 0; i < tasks.length; i++) {
          taskDate = new Date(tasks[i].due_date);
          if((checkDate.getFullYear() === taskDate.getFullYear()) && (checkDate.getMonth() === taskDate.getMonth()) && (checkDate.getDate() === taskDate.getDate())) {
            tasker.push(tasks[i]);
          }
        }

        return(tasker);
      }

      function getBillsForDay(bills, dayOf) {
        let checkDate = new Date(dayOf);
        let biller = [];
        let billDate;

        for (let i = 0; i < bills.length; i++) {
          billDate = new Date(bills[i].due_date);
          if (!bills[i].is_paid) {
            if ((checkDate.getFullYear() === billDate.getFullYear()) && (checkDate.getMonth() === billDate.getMonth()) && (checkDate.getDate() === billDate.getDate())) {
              biller.push(bills[i]);
            }
          }
        }

        return(biller);
      }

      function grabOccasions(occasions, dayOf) {
        let checkDate = new Date(dayOf);
        let occasionArray = [];
        let occasionDate;

        for (let i = 0; i < occasions.length; i++) {
          occasionDate = new Date(occasions[i].day_of);
          if (occasions[i].is_annual) {
            if ((checkDate.getMonth() === occasionDate.getMonth()) && (checkDate.getDate() === occasionDate.getDate())) {
              occasionArray.push(occasions[i]);
            }
          } else {
            if ((checkDate.getFullYear() === occasionDate.getFullYear()) && (checkDate.getMonth() === occasionDate.getMonth()) && (checkDate.getDate() === occasionDate.getDate())) {
              occasionArray.push(occasions[i]);
            }
          }
        }

        return(occasionArray);
      }

      function setTasksButtons() {
        let tasksButtons = [ 'mondayTasksButton', 'tuesdayTasksButton', 'wednesdayTasksButton', 'thursdayTasksButton', 'fridayTasksButton', 'saturdayTasksButton', 'sundayTasksButton' ];
        let weekDates = [ mondayDate, tuesdayDate, wednesdayDate, thursdayDate, fridayDate, saturdayDate, sundayDate ];
        let checkDate;
        let tasksArray = [];
        let element;

        $http.get(`/tasksbyuser/${currentUserId}`)
        .then(tasksData=>{
          let tasks = tasksData.data;
          for (let i = 0; i < tasksButtons.length; i++) {
            checkDate = new Date(weekDates[i]);
            tasksArray = [];
            tasksArray = getTheDaysTasks(tasks, checkDate);
            if (tasksArray.length > 0) {
              element = document.getElementById(tasksButtons[i]);
              element.setAttribute("style", "visibility: visible;");
              tasksButtonSpeaker(element, tasksArray);
            }
          }
        });
      }

      function setBillsButtons() {
        let billsButtons = [ 'mondayBillsButton', 'tuesdayBillsButton', 'wednesdayBillsButton', 'thursdayBillsButton', 'fridayBillsButton', 'saturdayBillsButton', 'sundayBillsButton' ];
        let weekDates = [ mondayDate, tuesdayDate, wednesdayDate, thursdayDate, fridayDate, saturdayDate, sundayDate ];
        let checkDate;
        let billsArray = [];
        let element;

        $http.get(`/billsbyuser/${currentUserId}`)
        .then(billsData=>{
          let bills = billsData.data;
          for (let i = 0; i < billsButtons.length; i++) {
            checkDate = new Date(weekDates[i]);
            billsArray = [];
            billsArray = getBillsForDay(bills, checkDate);
            if (billsArray.length > 0) {
              element = document.getElementById(billsButtons[i]);
              element.setAttribute("style", "visibility: visible;");
              billButtonSpeaker(element, billsArray);
            }
          }
        });
      }

      function setOccasionButtons() {
        let occasionButtons = [ 'mondayOccasionButton', 'tuesdayOccasionButton', 'wednesdayOccasionButton', 'thursdayOccasionButton', 'fridayOccasionButton', 'saturdayOccasionButton', 'sundayOccasionButton' ];
        let weekDates = [ mondayDate, tuesdayDate, wednesdayDate, thursdayDate, fridayDate, saturdayDate, sundayDate ];
        let checkDate;
        let occasionArray = [];
        let element;

        $http.get(`/occasionsbyuser/${currentUserId}`)
        .then(occasionsData=>{
          let occasions = occasionsData.data;
          for (let i = 0; i < occasionButtons.length; i++) {
            occasionArray = [];
            checkDate = new Date(weekDates[i]);
            occasionArray = grabOccasions(occasions, checkDate);
            if (occasionArray.length > 0) {
              element = document.getElementById(occasionButtons[i]);
              element.setAttribute("style", "visibility: visible;");
              occasionButtonSpeaker(element, occasionArray);
            }
          }
        });
      }

      function setHolidayButtons() {
        let holidayButtons = [ 'mondayHolidayButton', 'tuesdayHolidayButton', 'wednesdayHolidayButton', 'thursdayHolidayButton', 'fridayHolidayButton', 'saturdayHolidayButton', 'sundayHolidayButton'];
        let weekDates = [ mondayDate, tuesdayDate, wednesdayDate, thursdayDate, fridayDate, saturdayDate, sundayDate ];
        let checkDate;
        let holiDayness = [];
        let element;

        $http.get(`/holidaysbyuser/${currentUserId}`)
        .then(holidaysData=>{
          let holidays = holidaysData.data;
          for (let i = 0; i < holidayButtons.length; i++) {
            holiDayness = [];
            checkDate = new Date(weekDates[i]);
            holiDayness = grabHolidays(holidays, checkDate);
            if (holiDayness.length > 0) {
              element = document.getElementById(holidayButtons[i]);
              element.setAttribute("style", "visibility: visible;");
              setHolidayButton(element, holiDayness);
              element.parentNode.setAttribute("style", "background: " + holiDayness[0].color + "; background: -webkit-linear-gradient(45deg, " + holiDayness[0].color + ", #ffffff); background: -o-linear-gradient(135deg, " +  holiDayness[0].color + ", #ffffff);   background: -moz-linear-gradient(135deg, " + holiDayness[0].color + ", #ffffff); background: linear-gradient(135deg, " + holiDayness[0].color + ", #ffffff);");
            }
          }
        });
      }

      function getAppointmentsForDay(blocks, dayOf) {
        let checkDate = new Date(dayOf);
        let arr = [];
        let year = checkDate.getFullYear();
        let month = checkDate.getMonth();
        let day = checkDate.getDate();

        arr = blocks.filter((timeblock)=>{
          let holder = timeblock.start_time.slice(0, 10) + 'T14:35:51.367Z';
          let apptime = new Date(holder);
          holder = timeblock.end_time.slice(0, 10) + 'T14:35:51.367Z';
          let apptEnd = new Date(holder);
          let startYear = apptime.getFullYear();
          let startMonth = apptime.getMonth();
          let startDate = apptime.getDate();
          let endYear = apptEnd.getFullYear();
          let endMonth = apptEnd.getMonth();
          let endDate = apptEnd.getDate();

          if (endDate !== startDate) {
            startDate = endDate;
            if (endMonth !== startMonth) {
              startMonth = endMonth;
            }
            if (endYear !== startYear) {
              startYear = endYear;
            }
          }
          return ((year === startYear) && (month === startMonth) && (day === startDate));
        });
        return(arr);
      }

      function populateCalendarDisplay(dayOfWeek, dayOf, apptArray, blocks) {
        let indexOfStart = 0;
        let indexOfEnd = 0;
        let element;
        let startTime;
        let endTime;
        let minutesString = '';
        let endMinutesString = '';
        let blockReference = {};
        let holder = '';

        for (let i = 0; i < apptArray.length; i++) {
          holder = apptArray[i].start_time.slice(0, 16);
          startTime = new Date(holder);
          holder = apptArray[i].end_time.slice(0,16);
          endTime = new Date(holder);
          if (startTime.getMinutes() === 0) {
            minutesString = ':00';
          } else {
            minutesString = ':30';
          }
          if (endTime.getMinutes() === 0) {
            endMinutesString = ':00';
          } else {
            endMinutesString = ':30';
          }
          indexOfStart = hoursTime.indexOf((startTime.getHours()) + minutesString);
          indexOfEnd = hoursTime.indexOf((endTime.getHours()) + endMinutesString);
          blockReference = {};
          if (indexOfStart === (hoursTime.length - 1)) {
            indexOfStart = 0;
          }
          if (indexOfEnd < indexOfStart) {
            indexOfEnd = hoursTime.length - 1;
          }

          for (let j = 0; j < blocks.length; j++) {
            if (blocks[j].id === apptArray[i].block_type) {
              blockReference = blocks[j];
            }
          }
          if (dayOfWeek === 'friday') {
            console.log(apptArray[i]);
            console.log(endTime);
            console.log(endTime.getHours());
          }
          element = document.getElementById(dayOfWeek + hours[indexOfStart]);
          element.children[0].children[0].innerHTML = hoursTime[indexOfStart] + ' - ' + blockReference.type;
          element.children[0].appointment = apptArray[i].id;
          element.children[0].setAttribute("style", "background-color: " + blockReference.color + "; opacity: 0.8; border-top: solid " + blockReference.color + " 6px; border-bottom: solid " + blockReference.color + " 1px;");

          if (indexOfEnd > (indexOfStart + 1)) {
            for (let k = (indexOfStart + 1); k < indexOfEnd; k++) {
              element = document.getElementById(dayOfWeek + hours[k]);
              element.children[0].appointment = apptArray[i].id;
              element.children[0].setAttribute("style", "background-color: " + blockReference.color + "; opacity: 0.8; border-top: solid " + blockReference.color + " 6px; border-bottom: solid " + blockReference.color + " 1px;");
            }
          }

        }
      }

      function readAppointmentBlocks() {
        let weekArray = [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        let weekDates = [ mondayDate, tuesdayDate, wednesdayDate, thursdayDate, fridayDate, saturdayDate, sundayDate ];
        let appointmentsArray = [];
        let checkDate;

        $http.get(`/blocktypes`)
        .then(blocksData=>{
          let blocks = blocksData.data;
          $http.get(`/timeblocks`)
          .then(timeblocksData=>{
            let timeblocks = timeblocksData.data;
            for (let i = 0; i < weekArray.length; i++) {
              appointmentsArray[i] = [];
              checkDate = new Date(weekDates[i]);
              appointmentsArray[i] = getAppointmentsForDay(timeblocks, checkDate);
              if (appointmentsArray[i].length > 0) {
                populateCalendarDisplay(weekArray[i], checkDate, appointmentsArray[i], blocks);
              }
            }
          });
        });
      }

      function updateToplineCRUD (timeblock, element) {
        let daysOfWeek = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let monthsOfYear = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
        let holder = timeblock.start_time.slice(0, 16);
        let startTime = new Date(holder);
        holder = timeblock.end_time.slice(0, 16);
        let endTime = new Date(holder);
        let checkDate;
        let dateString = '';

        if ((startTime.getFullYear() !== endTime.getFullYear()) || (startTime.getMonth() !== endTime.getMonth()) || (startTime.getDate() !== endTime.getDate())) {
          checkDate = new Date(endTime);
        } else {
          checkDate = new Date(startTime);
        }

        dateString = daysOfWeek[checkDate.getDay()] + ', ' + checkDate.getDate() + ' ' + monthsOfYear[checkDate.getMonth()] + ' ' + checkDate.getFullYear() + ':';
        element.innerHTML = dateString;
      }

      function populateBlockTypesSelect(currentBlock, blocks, selectorElement, timeblock) {
        let element;
        let filteredBlocks = blocks.filter(bl=>{
          return((parseInt(bl.user_id) === parseInt(currentUserId)) || (parseInt(timeblock.block_type) === parseInt(bl.id)));
        });
        let blockTypes = filteredBlocks.sort((a, b)=>{
          if (a.type.toLowerCase() < b.type.toLowerCase()) {
            return -1;
          } else if (a.type.toLowerCase() > b.type.toLowerCase()) {
            return 1;
          } else {
            return 0;
          }
        });

        while (selectorElement.firstChild) {
          selectorElement.removeChild(selectorElement.firstChild);
        }

        for (let i = 0; i < blockTypes.length; i++) {
          element = document.createElement('option');
          selectorElement.appendChild(element);
          element.innerHTML = blockTypes[i].type;
        }
        selectorElement.value = currentBlock.type;
        element = document.createElement('option');
        selectorElement.appendChild(element);
        element.innerHTML = 'add new blocktype...';
      }

      function populateBlockSubkeys(currentBlock, blocks, timeblock, selectorElement) {
        let element;

        while (selectorElement.firstChild) {
          selectorElement.removeChild(selectorElement.firstChild);
        }

        let valuesList = currentBlock.keys[currentBlock.keys.keys[0] + 'Values'].sort((a, b)=>{
          if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
          } else if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
          } else {
            return 0;
          }
        });

        for (let i = 0; i < valuesList.length; i++) {
          element = document.createElement('option');
          selectorElement.appendChild(element);
          element.innerHTML = valuesList[i];
        }
        if (timeblock.block_data === null) {
          timeblock.block_data = {};
        }
        if (timeblock.block_data[currentBlock.keys.keys[0]] === undefined) {
          timeblock.block_data[currentBlock.keys.keys[0]] = 0;
        }
        selectorElement.value = currentBlock.keys[currentBlock.keys.keys[0] + 'Values'][timeblock.block_data[currentBlock.keys.keys[0]]];
        element = document.createElement('option');
        selectorElement.appendChild(element);
        element.innerHTML = 'add new value...';
      }

      function handleListenerAdditionalTypes(element, timeblock, currentBlock, keyString, index) {
        element.addEventListener('focusout', ()=>{
          console.log('focusout');
          let subObj = {
            block_data: timeblock.block_data
          };
          if (subObj.block_data[keyString] === undefined) {
            subObj.block_data[keyString] = [];
          }
          if (element.value !== '') {
            subObj.block_data[keyString][index] = element.value;
            $http.patch(`/timeblocks/${timeblock.id}`, subObj)
            .then(()=>{
              console.log(subObj);
            });
          }

        });
      }

      function handleButtonFieldsListener(element, timeblock, currentBlock, fieldString) {



        element.addEventListener('click', ()=>{
          let emptyFields = false;
          let kids = element.parentNode.children;
          let addOn;
          let index = kids.length - 2;
          for (let i = 2; i < kids.length; i++) {
            if (kids[i].value === '') {
              emptyFields = true;
            }
          }
          if (!emptyFields) {
            addOn = document.createElement('input');
            element.parentNode.appendChild(addOn);
            addOn.type = 'text';
            addOn.class = 'pure-input-1';
            addOn.setAttribute("style", "font-family: 'Alike Angular', serif; font-size: 18px; margin-left: 8em; width: 20em;");
            handleListenerAdditionalTypes(addOn, timeblock, currentBlock, fieldString, index);
          }
        });
      }

      function populateBlockExtraValues(currentBlock, blocks, timeblock, valuesDiv) {
        let element;
        let subDiv;

        while (valuesDiv.firstChild) {
          valuesDiv.removeChild(valuesDiv.firstChild);
        }

        for (let i = 1; i < currentBlock.keys.keys.length; i++) {
          subDiv = document.createElement('div');
          valuesDiv.appendChild(subDiv);
          subDiv.id = currentBlock.keys.keys[i];
          element = document.createElement('h1');
          subDiv.appendChild(element);
          element.setAttribute("style", "font-family: 'Alike Angular', serif; font-size: 24px; color: #000000; margin-left: 5em;");
          element.innerHTML = currentBlock.keys.keys[i] + ':';
          element = document.createElement('button');
          subDiv.appendChild(element);
          element.innerHTML = 'add new';
          element.setAttribute("style", "font-weight: bolder; font-family: 'Asul', sans-serif; font-size: 24px; background: " + currentBlock.color + "; background-color: -webkit-linear-gradient(135deg, " + currentBlock.color + ", #ffffff); background: -o-linear-gradient(135deg, " + currentBlock.color + ", #ffffff); background: -moz-linear-gradient(135deg, " + currentBlock.color + ", #ffffff); background: linear-gradient(135deg, " + currentBlock.color + ", #ffffff); opacity: 0.7; margin-left: 7em; margin-top: 0; margin-bottom: 0;");
          handleButtonFieldsListener(element, timeblock, currentBlock, currentBlock.keys.keys[i]);
          if ((timeblock.block_data !== null) && (timeblock.block_data !== undefined) && (timeblock.block_data[currentBlock.keys.keys[i]] !== undefined)) {
            for (let j = 0; j < timeblock.block_data[currentBlock.keys.keys[i]].length; j++) {
              element = document.createElement('input');
              subDiv.appendChild(element);
              element.type = 'text';
              element.class = 'pure-input-1';
              element.setAttribute("style", "font-family: 'Alike Angular', serif; font-size: 18px; margin-left: 8em; width: 20em;");
              element.value = timeblock.block_data[currentBlock.keys.keys[i]][j];
              handleListenerAdditionalTypes(element, timeblock, currentBlock, currentBlock.keys.keys[i], j);
            }
          } else {
            element = document.createElement('input');
            subDiv.appendChild(element);
            element.type = 'text';
            element.class = 'pure-input-1';
            element.setAttribute("style", "font-family: 'Alike Angular', serif; font-size: 18px; margin-left: 8em; width: 20em;");
            handleListenerAdditionalTypes(element, timeblock, currentBlock, currentBlock.keys.keys[i], 0);
          }

        }
      }

      function updateStartDisplay(timeblock, startDisplay) {
        let timeString = '';
        let holder = (timeblock.start_time.slice(0, 16));
        let startTime = new Date(holder);
        holder = (timeblock.end_time.slice(0, 16));
        let endTime = new Date(holder);
        if ((endTime.getFullYear() !== startTime.getFullYear()) || (endTime.getMonth() !== startTime.getMonth()) || endTime.getDate() !== startTime.getDate()) {
          timeString = hoursTime[0];
        } else {
          timeString = (startTime.getHours()) + ':';
          if (startTime.getMinutes() === 0) {
            timeString += '00';
          } else {
            timeString += '30';
          }
        }
        startDisplay.innerHTML = timeString;
      }

      function updateEndDisplay(timeblock, endDisplay) {
        let timeString = '';
        let holder = timeblock.end_time.slice(0, 16);
        let endTime = new Date(holder);

        timeString = (endTime.getHours()) + ':';
        if (endTime.getMinutes() === 0) {
          timeString += '00';
        } else {
          timeString += '30';
        }

        endDisplay.innerHTML = timeString;
      }
      function populateUserLocation(timeblock, locationField) {
        locationField.value = timeblock.location;
      }

      function populateUserNotes(timeblock, notesField) {
        notesField.value = timeblock.user_notes;
      }

      function obtainWeekday(timeblock) {
        let weekDays = [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ];
        let start = new Date(timeblock.start_time);
        let end = new Date(timeblock.end_time);
        if ((start.getFullYear() !== end.getFullYear()) || (start.getMonth() !== end.getMonth()) || (start.getDate() !== end.getDate())) {
          return(weekDays[end.getDay()]);
        } else {
          return(weekDays[start.getDay()]);
        }
      }

      function obtainStartIndex(timeblock) {
        let index = 0;
        let holder = timeblock.start_time.slice(0, 16);
        let checkDate = new Date(holder);
        holder = timeblock.end_time.slice(0, 16);
        let end = new Date(holder);
        let timeString = (checkDate.getHours()) + ':';
        if ((end.getFullYear() !== checkDate.getFullYear()) || (end.getMonth() !== checkDate.getMonth()) || (end.getDate() !== checkDate.getDate())) {
          return(index);
        }
        if (checkDate.getMinutes() === 0) {
          timeString += '00';
        } else {
          timeString += '30';
        }
        if (timeString === '0:00') {
          index = 0;
        } else {
          index = hoursTime.indexOf(timeString);
        }

        return(index);
      }

      function obtainEndIndex(timeblock) {
        let index = 0;
        let holder = timeblock.end_time.slice(0, 16);
        let checkDate = new Date(holder);
        let timeString = (checkDate.getHours()) + ':';
        if (checkDate.getMinutes() === 0) {
          timeString += '00';
        } else {
          timeString += '30';
        }
        if ((timeString === '0:00') || (timeString === '24:00')) {
          index = hours.length - 1;
        } else {
          index = hoursTime.indexOf(timeString);
        }

        return(index);
      }

      function deleteAppointment(timeblock) {
        let element;

        let startIndex = 0;
        let endIndex = 0;
        let weekday = '';
        $http.delete(`/timeblocks/${timeblock.id}`)
        .then(timedBlockData=>{
          let timedBlock = timedBlockData.data;
          weekday = obtainWeekday(timeblock);
          startIndex = obtainStartIndex(timeblock);
          endIndex = obtainEndIndex(timeblock);
          for (let i = startIndex; i < endIndex; i++) {
            element = document.getElementById(weekday + hours[i]);
            if (i === startIndex) {
              element.children[0].children[0].innerHTML = hoursTime[i];
            }
            element.children[0].appointment = undefined;
            element.children[0].setAttribute("style", "background-color: transparent;");
          }
        });
      }

      function handleWeekviewBlocktypeCRUD(currentAppointment) {
        let blocktypeCRUDPopup = document.getElementById('blocktypeCRUDPopup');
        let timeCRUDPopup = document.getElementById('timeCRUDPopup');
        let weekBlocktypeCRUDCancelButton = document.getElementById('weekBlocktypeCRUDCancelButton');
        let weekBlocktypeCRUDColor = document.getElementById('weekBlocktypeCRUDColor');
        let weekBlockTitle = document.getElementById('weekBlockTitle');
        let weekBlockCRUDForm = document.getElementById('weekBlockCRUDForm');
        let weekBlocktypeCRUDAddNewSubtype = document.getElementById('weekBlocktypeCRUDAddNewSubtype');
        let weekBlocktypeCRUDAdditionalDataTypeAdds = document.getElementById('weekBlocktypeCRUDAdditionalDataTypeAdds');
        let weekBlocktypeCRUDSubtypes = document.getElementById('weekBlocktypeCRUDSubtypes');
        let weekBlocktypeCRUDSubtypeMaker = document.getElementById('weekBlocktypeCRUDSubtypeMaker');
        let addingTheWeekSubtypes = document.getElementById('addingTheWeekSubtypes');
        let weekBlocktypeCRUDKeychain = document.getElementById('weekBlocktypeCRUDKeychain');
        let weekKeychainList = document.getElementById('weekKeychainList');
        let weekBlocktypeCRUDSubmitButton = document.getElementById('weekBlocktypeCRUDSubmitButton');
        let weekBlocktypeCRUDErrorField = document.getElementById('weekBlocktypeCRUDErrorField');
        let weekBlocktypeCRUDType = document.getElementById('weekBlocktypeCRUDType');
        let elements;
        let populateNewField = false;

        blocktypeCRUDPopup.setAttribute("style", "visibility: visible; opacity: 1; z-index: 2;");
        timeCRUDPopup.setAttribute("style", "visibility: hidden; z-index: -1;");


        weekBlocktypeCRUDSubtypes.addEventListener('click', ()=>{
          if (weekBlocktypeCRUDSubtypes.checked) {
            weekBlocktypeCRUDSubtypeMaker.setAttribute("style", "display: initial;");
          } else {
            weekBlocktypeCRUDSubtypeMaker.setAttribute("style", "display: none;");
          }
        });

        weekBlocktypeCRUDColor.addEventListener('change', ()=>{
          weekBlockTitle.setAttribute("style", "background: " + weekBlocktypeCRUDColor.value + "; background-color: -webkit-linear-gradient(-135deg, " + weekBlocktypeCRUDColor.value + ", #abdada); background: -o-linear-gradient(-135deg, " + weekBlocktypeCRUDColor.value + "#22ac44, #abdada); background: -moz-linear-gradient(-135deg, " + weekBlocktypeCRUDColor.value + ", #abdada); background: linear-gradient(-135deg, " + weekBlocktypeCRUDColor.value + ", #abdada);");
          weekBlockCRUDForm.setAttribute("style", "background: " + weekBlocktypeCRUDColor.value + "; background-color: -webkit-linear-gradient(135deg, " + weekBlocktypeCRUDColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + weekBlocktypeCRUDColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + weekBlocktypeCRUDColor.value + "#, #abdada); background: linear-gradient(135deg, " + weekBlocktypeCRUDColor.value + ", #abdada);");
          weekBlocktypeCRUDAddNewSubtype.setAttribute("style", "background: " + weekBlocktypeCRUDColor.value + "; background-color: -webkit-linear-gradient(135deg, " + weekBlocktypeCRUDColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + weekBlocktypeCRUDColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + weekBlocktypeCRUDColor.value + "#, #abdada); background: linear-gradient(135deg, " + weekBlocktypeCRUDColor.value + ", #abdada);");
          weekBlocktypeCRUDAdditionalDataTypeAdds.setAttribute("style", "background: " + weekBlocktypeCRUDColor.value + "; background-color: -webkit-linear-gradient(135deg, " + weekBlocktypeCRUDColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + weekBlocktypeCRUDColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + weekBlocktypeCRUDColor.value + "#, #abdada); background: linear-gradient(135deg, " + weekBlocktypeCRUDColor.value + ", #abdada);");
        });

        weekBlocktypeCRUDAddNewSubtype.addEventListener('click', ()=>{
          let inputAdd;
          populateNewField = true;
          elements = addingTheWeekSubtypes.children;
          if (elements.length > 1) {
            for (let i = 1; i < elements.length; i++) {
              if (elements[i].value === '') {
                populateNewField = false;
              }
            }
          }

          if (populateNewField) {
            inputAdd = document.createElement('input');
            weekBlocktypeCRUDAddNewSubtype.parentNode.appendChild(inputAdd);
            inputAdd.type = 'text';
            inputAdd.className = 'pure-input-1';
          }
        });

        weekBlocktypeCRUDAdditionalDataTypeAdds.addEventListener('click', ()=>{
          let inputAdd;
          populateNewField = true;
          elements = weekKeychainList.children;
          if (elements.length > 1) {
            for (let i = 1; i <elements.length; i++) {
              if (elements[i].value === '') {
                populateNewField = false;
              }
            }
          }

          if (populateNewField) {
            inputAdd = document.createElement('input');
            weekKeychainList.appendChild(inputAdd);
            inputAdd.type = 'text';
            inputAdd.className = 'pure-input-1';
          }
        });

        weekBlocktypeCRUDKeychain.addEventListener('click', ()=>{
          if (weekBlocktypeCRUDKeychain.checked) {
            weekKeychainList.setAttribute("style", "display: initial;");
          } else {
            weekKeychainList.setAttribute("style", "display: none;");
          }
        });

        weekBlocktypeCRUDSubmitButton.addEventListener('click', ()=>{
          //TODO check validity of input
          let submissionObject = {
            user_id: currentUserId,
            color: weekBlocktypeCRUDColor.value
          };
          if (weekBlocktypeCRUDType.value === '') {
            weekBlocktypeCRUDErrorField.innerHTML = '*Please input a blocktype name';
          } else {
            $http.get(`/blocktypesbyuser/${currentUserId}`)
            .then(userBlocksData=>{
              let userBlocks = userBlocksData.data;
              let redundancy = userBlocks.filter((block)=>{
                return(block.type === weekBlocktypeCRUDType.value);
              });
              if (redundancy.length !== 0) {
                weekBlocktypeCRUDErrorField.innerHTML = '*That blocktype name already exists!';
              } else {
                submissionObject.type = weekBlocktypeCRUDType.value;
                if (!weekBlocktypeCRUDSubtypes.checked) {
                  submissionObject.keys = null;
                } else {
                  submissionObject.keys = {};
                }
                if (weekBlocktypeCRUDSubtypes.checked && (addingTheWeekSubtypes.children[1].value === '')) {
                  weekBlocktypeCRUDErrorField.innerHTML = '*Please enter at least one subtype or uncheck subtype option';
                  return;
                } else if (weekBlocktypeCRUDSubtypes.checked) {
                  submissionObject.keys.keys = [];
                  submissionObject.keys.keys[0] = weekBlocktypeCRUDType.value + 'Type';
                  submissionObject.keys[submissionObject.keys.keys[0] + 'Values'] = [];
                  let valueRun = addingTheWeekSubtypes.children;
                  for (let i = 1; i < valueRun.length; i++) {
                    if (addingTheWeekSubtypes.children[i].value !== '') {
                      submissionObject.keys[submissionObject.keys.keys[0] + 'Values'].push(addingTheWeekSubtypes.children[i].value);
                    }
                  }
                }
                if (weekBlocktypeCRUDKeychain.checked && (weekKeychainList.children[1].value === '')) {
                  weekBlocktypeCRUDErrorField.innerHTML = '*Please enter at least one additional data type or uncheck additional tada types option';
                  return;
                } else if (weekBlocktypeCRUDKeychain.checked) {
                  let subs = weekKeychainList.children;
                  for (let j = 1; j < subs.length; j++) {
                    if (subs[j].value !== '') {
                      submissionObject.keys.keys.push(subs[j].value);
                    }
                  }
                }
                $http.post('/blocktypes', submissionObject)
                .then(addedBlockData=>{
                  let addedBlock = addedBlockData.data[0];
                  let timeSub = {
                    block_type: addedBlock.id
                  };
                  $http.patch(`/timeblocks/${currentAppointment}`, timeSub)
                  .then(updatedTimerData=>{
                    let updatedTimer = updatedTimerData.data;
                    readAppointmentBlocks();
                    blocktypeCRUDPopup.setAttribute("style", "visibility: hidden; opacity: 0.2; z-index: -2;");
                    timeCRUDPopup.setAttribute("style", "visibility: visible; z-index: 3;");
                    appointmentEditor(currentAppointment);
                    weekBlocktypeCRUDColor.value = '#22ac44';
                    weekBlockTitle.setAttribute("style", "background: #22ac44; background-color: -webkit-linear-gradient(-135deg, #22ac44, #abdada); background: -o-linear-gradient(-135deg, #22ac44, #abdada); background: -moz-linear-gradient(-135deg, #22ac44, #abdada); background: linear-gradient(-135deg, #22ac44, #abdada);");
                    weekBlockCRUDForm.setAttribute("style", "background: #22ac44; background-color: -webkit-linear-gradient(135deg, #22ac44, #abdada); background: -o-linear-gradient(135deg, #22ac44, #abdada); background: -moz-linear-gradient(135deg, #22ac44, #abdada); background: linear-gradient(135deg, #22ac44, #abdada);");
                    weekBlocktypeCRUDAddNewSubtype.setAttribute("style", "background-color: -webkit-linear-gradient(135deg, #22ac44, #abdada); background: -o-linear-gradient(135deg, #22ac44, #abdada); background: -moz-linear-gradient(135deg, #22ac44, #abdada); background: linear-gradient(135deg, #22ac44, #abdada);");
                    weekBlocktypeCRUDAdditionalDataTypeAdds.setAttribute("style", "background-color: -webkit-linear-gradient(135deg, #22ac44, #abdada); background: -o-linear-gradient(135deg, #22ac44, #abdada); background: -moz-linear-gradient(135deg, #22ac44, #abdada); background: linear-gradient(135deg, #22ac44, #abdada);");
                    weekBlocktypeCRUDSubtypeMaker.setAttribute("style", "display: initial;");
                    weekBlocktypeCRUDSubtypes.checked = true;
                    weekBlocktypeCRUDKeychain.checked = false;
                    weekKeychainList.setAttribute("style", "display: none;");
                    while(addingTheWeekSubtypes.children[2]){
                      addingTheWeekSubtypes.removeChild(addingTheWeekSubtypes.children[2]);
                    }
                    while(weekKeychainList.children[2]) {
                      weekKeychainList.removeChild(weekKeychainList.children[2]);
                    }
                    weekKeychainList.children[1].value = '';
                    addingTheWeekSubtypes.children[1].value = '';
                    weekBlocktypeCRUDErrorField.innerHTML = '';
                    weekBlocktypeCRUDType.value = '';
                  });
                });
              }
            });
          }
        });

        weekBlocktypeCRUDCancelButton.addEventListener('click', ()=>{
          blocktypeCRUDPopup.setAttribute("style", "visibility: hidden; opacity: 0.2; z-index: -2;");
          timeCRUDPopup.setAttribute("style", "visibility: visible; z-index: 3;");
          appointmentEditor(currentAppointment);
          weekBlocktypeCRUDColor.value = '#22ac44';
          weekBlockTitle.setAttribute("style", "background: #22ac44; background-color: -webkit-linear-gradient(-135deg, #22ac44, #abdada); background: -o-linear-gradient(-135deg, #22ac44, #abdada); background: -moz-linear-gradient(-135deg, #22ac44, #abdada); background: linear-gradient(-135deg, #22ac44, #abdada);");
          weekBlockCRUDForm.setAttribute("style", "background: #22ac44; background-color: -webkit-linear-gradient(135deg, #22ac44, #abdada); background: -o-linear-gradient(135deg, #22ac44, #abdada); background: -moz-linear-gradient(135deg, #22ac44, #abdada); background: linear-gradient(135deg, #22ac44, #abdada);");
          weekBlocktypeCRUDAddNewSubtype.setAttribute("style", "background-color: -webkit-linear-gradient(135deg, #22ac44, #abdada); background: -o-linear-gradient(135deg, #22ac44, #abdada); background: -moz-linear-gradient(135deg, #22ac44, #abdada); background: linear-gradient(135deg, #22ac44, #abdada);");
          weekBlocktypeCRUDAdditionalDataTypeAdds.setAttribute("style", "background-color: -webkit-linear-gradient(135deg, #22ac44, #abdada); background: -o-linear-gradient(135deg, #22ac44, #abdada); background: -moz-linear-gradient(135deg, #22ac44, #abdada); background: linear-gradient(135deg, #22ac44, #abdada);");
          weekBlocktypeCRUDSubtypeMaker.setAttribute("style", "display: initial;");
          weekBlocktypeCRUDSubtypes.checked = true;
          weekBlocktypeCRUDKeychain.checked = false;
          weekKeychainList.setAttribute("style", "display: none;");
          while(addingTheWeekSubtypes.children[2]){
            addingTheWeekSubtypes.removeChild(addingTheWeekSubtypes.children[2]);
          }
          while(weekKeychainList.children[2]) {
            weekKeychainList.removeChild(weekKeychainList.children[2]);
          }
          weekKeychainList.children[1].value = '';
          addingTheWeekSubtypes.children[1].value = '';
          weekBlocktypeCRUDErrorField.innerHTML = '';
          weekBlocktypeCRUDType.value = '';
        });
      }

      function blockTypeHandler(weekBlocktypeSelector, currentAppointment) {
        let subObj = {};

        weekBlocktypeSelector.addEventListener('change', ()=>{
          if (weekBlocktypeSelector.value !== 'add new blocktype...') {
            $http.get(`/blocktypesbyuser/${currentUserId}`)
            .then(userBlocksData=>{
              let userBlocks = userBlocksData.data;
              let newBlock = userBlocks.filter((block)=>{
                return(block.type === weekBlocktypeSelector.value);
              });
              if (newBlock.length !== 1) {
                alert('error on the blocktype');
                return;
              } else {
                subObj.block_type = newBlock[0].id;
                $http.patch(`/timeblocks/${currentAppointment}`, subObj)
                .then(()=>{
                  appointmentEditor(currentAppointment);
                  readAppointmentBlocks();
                });
              }
            });
          } else {
            console.log('this is where we open a new modal');
            handleWeekviewBlocktypeCRUD(currentAppointment);
          }
        });
      }

      function handleSubtypeValueCRUD(timeblock) {
        let subtypeValueCRUDPopup = document.getElementById('subtypeValueCRUDPopup');
        let timeCRUDPopup = document.getElementById('timeCRUDPopup');
        let weekSubvalTitle = document.getElementById('weekSubvalTitle');
        let weekNewSubValueForm = document.getElementById('weekNewSubValueForm');
        let weekSubtypeCRUDCancelButton = document.getElementById('weekSubtypeCRUDCancelButton');
        let weekSubtypeValueField = document.getElementById('weekSubtypeValueField');
        let weekSubtypeCRUDSubmitButton = document.getElementById('weekSubtypeCRUDSubmitButton');

        subtypeValueCRUDPopup.setAttribute("style", "visibility: visible; opacity: 1; z-index: 2;");
        timeCRUDPopup.setAttribute("style", "visibility: hidden; z-index: -1;");

        $http.get(`/blocktypes/${timeblock.block_type}`)
        .then(blockData=>{
          let block = blockData.data;
          weekSubvalTitle.setAttribute("style", "background: " + block.color + "; background-color: -webkit-linear-gradient(-135deg, " + block.color + ", #abdada); background: -o-linear-gradient(-135deg, " + block.color + ", #abdada); background: -moz-linear-gradient(-135deg, " + block.color + ", #abdada); background: linear-gradient(-135deg, " + block.color + ", #abdada);");
          weekNewSubValueForm.setAttribute("style", "background: " + block.color + "; background-color: -webkit-linear-gradient(135deg, " + block.color +", #abdada); background: -o-linear-gradient(135deg, " + block.color + ", #abdada); background: -moz-linear-gradient(135deg, " + block.color + ", #abdada); background: linear-gradient(135deg, " + block.color + ", #abdada);");

          weekSubtypeCRUDSubmitButton.addEventListener('click', ()=>{
            console.log(weekSubtypeValueField.value);
            if (weekSubtypeValueField.value === '') {
              appointmentEditor(timeblock.id);
              subtypeValueCRUDPopup.setAttribute("style", "visibility: hidden; z-index: -1;");
            } else {
              if (block.keys.keys.indexOf(weekSubtypeValueField.value) !== -1) {
                appointmentEditor(timeblock.id);
                subtypeValueCRUDPopup.setAttribute("style", "visibility: hidden; z-index: -1;");
              } else {
                let blockSubmitObj = {
                  keys: block.keys
                };
                let timeblockSubmitObj = {
                  block_data: timeblock.block_data
                };
                blockSubmitObj.keys[blockSubmitObj.keys.keys[0] + 'Values'].push(weekSubtypeValueField.value);
                timeblockSubmitObj.block_data[blockSubmitObj.keys.keys[0]] = blockSubmitObj.keys[blockSubmitObj.keys.keys[0] + 'Values'].indexOf(weekSubtypeValueField.value);

                $http.patch(`/blocktypes/${block.id}`, blockSubmitObj)
                .then(()=>{
                  $http.patch(`/timeblocks/${timeblock.id}`, timeblockSubmitObj)
                  .then(()=>{
                    appointmentEditor(timeblock.id);
                    subtypeValueCRUDPopup.setAttribute("style", "visibility: hidden; z-index: -1;");
                    weekSubtypeValueField.value = '';
                  });
                });
              }
            }
          });

          weekSubtypeCRUDCancelButton.addEventListener('click', ()=>{

            appointmentEditor(timeblock.id);
            subtypeValueCRUDPopup.setAttribute("style", "visibility: hidden; z-index: -1;");
            weekSubtypeValueField.value = '';

          });

        });
      }

      function weekBlockKeysListener(selectorElement, timeblock) {
        selectorElement.addEventListener('change', ()=>{
          if (selectorElement.value !== 'add new value...') {
            $http.get(`/blocktypes/${timeblock.block_type}`)
            .then(blockData=>{
              let block = blockData.data;
              let subObj = {
                block_data: timeblock.block_data
              };
              subObj.block_data[block.keys.keys[0]] = block.keys[block.keys.keys[0] + 'Values'].indexOf(selectorElement.value);
              $http.patch(`/timeblocks/${timeblock.id}`, subObj)
              .then(updateTimeData=>{
                let updateTime = updateTimeData.data;
                console.log(updateTime);
              });
            });
          } else {
            //TODO value CRUD
            console.log('we crud here');
            handleSubtypeValueCRUD(timeblock);
          }
        });
      }

      function updateClockEndButtons(timeblock, weekEditEndDecrease, weekEditEndIncrease) {
        let weekDays = [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        let endTime = document.getElementById('weekEditEnd').innerHTML;
        let index = hoursTime.indexOf(endTime);
        let checkTime;
        let holder;
        let priorDiv;
        let postDiv;
        let priorPriorDiv;
        holder = timeblock.end_time.slice(0, 16);
        checkTime = new Date(holder);
        let dayPrefix = weekDays[checkTime.getDay()];
        postDiv = document.getElementById(dayPrefix + hours[index]);
        if (index === 1) {
          weekEditEndDecrease.setAttribute("style", "visibility: hidden;");
        } else {
          priorDiv = document.getElementById(dayPrefix + hours[index - 1]);
          priorPriorDiv = document.getElementById(dayPrefix + hours[index - 2]);
          if (priorPriorDiv.children[0].appointment !== timeblock.id) {
            weekEditEndDecrease.setAttribute("style", "visibility: hidden;");
          } else {
            weekEditEndDecrease.addEventListener('click', ()=>{
              let decreaseEndSubmission = {};
              let updatedEndTime = hoursTime[index - 1];
              if (updatedEndTime.length < 5) {
                updatedEndTime = '0' + updatedEndTime;
              }
              holder = timeblock.end_time.slice(0, 11);
              let dateChange = new Date(holder + updatedEndTime + ':00.000Z');
              decreaseEndSubmission.end_time = dateChange;
              $http.patch(`/timeblocks/${timeblock.id}`, decreaseEndSubmission)
              .then(()=>{
                readAppointmentBlocks();
                appointmentEditor(timeblock.id);
                priorDiv.children[0].appointment = undefined;
                priorDiv.children[0].setAttribute("style", "background-color: transparent;");


              });
            });
          }
        }
        if (index === (hours.length - 1)) {
          weekEditEndIncrease.setAttribute("style", "visibility: hidden;");
        } else {
          if (postDiv.children[0].appointment !== undefined) {
            weekEditEndIncrease.setAttribute("style", "visibility: hidden;");
          } else {
            console.log('we listen here too');
            weekEditEndIncrease.addEventListener('click', ()=>{
              let increaseEndSubmission = {};
              let increasedEndTime = hoursTime[index + 1];
              if (increasedEndTime.length < 5) {
                increasedEndTime = '0' + increasedEndTime;
              }
              holder = timeblock.end_time.slice(0, 11);
              let changeDate = new Date(holder + increasedEndTime + ':00.000Z');
              increaseEndSubmission.end_time = changeDate;
              $http.patch(`/timeblocks/${timeblock.id}`, increaseEndSubmission)
              .then(()=>{
                readAppointmentBlocks();
                appointmentEditor(timeblock.id);
                // startDiv.children[0].children[0].innerHTML = hoursTime[index];
                // startDiv.children[0].appointment = undefined;
                // startDiv.children[0].setAttribute("style", "background-color: transparent;");
              });
            });
          }
        }
      }

      function updateClockStartButtons(timeblock, weekEditStartDecrease, weekEditStartIncrease) {
        let weekDays = [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        let startTime = document.getElementById('weekEditStart').innerHTML;
        let index = hoursTime.indexOf(startTime);
        let checkTime;
        let holder;
        let priorDiv;
        let postDiv;
        if (index !== 0) {
          holder = timeblock.start_time.slice(0, 16);
        } else {
          holder = timeblock.end_time.slice(0, 16);
        }
        checkTime = new Date(holder);
        let dayPrefix = weekDays[checkTime.getDay()];
        let startDiv = document.getElementById(dayPrefix + hours[index]);

        if (index === 0) {
          weekEditStartDecrease.setAttribute("style", "visibility: hidden;");
        } else {
          priorDiv = document.getElementById(dayPrefix + hours[index - 1]);
          if (priorDiv.children[0].appointment !== undefined) {
            weekEditStartDecrease.setAttribute("style", "visibility: hidden;");
          } else {
            weekEditStartDecrease.addEventListener('click', ()=>{
              let decreaseStartSubmission = {};
              let updatedStartTime = hoursTime[index - 1];
              if (updatedStartTime.length < 5) {
                updatedStartTime = '0' + updatedStartTime;
              }
              holder = timeblock.start_time.slice(0, 11);
              let dateChange = new Date(holder + updatedStartTime + ':00.000Z');
              decreaseStartSubmission.start_time = dateChange;
              $http.patch(`/timeblocks/${timeblock.id}`, decreaseStartSubmission)
              .then(()=>{
                readAppointmentBlocks();
                appointmentEditor(timeblock.id);
                startDiv.children[0].children[0].innerHTML = hoursTime[index];
                priorDiv.children[0].appointment = timeblock.id;
              });
            });
          }
        }
        if (index === (hours.length - 2)) {
          weekEditStartIncrease.setAttribute("style", "visibility: hidden;");
        } else {
          postDiv = document.getElementById(dayPrefix + hours[index + 1]);
          if (postDiv.children[0].appointment !== timeblock.id) {
            weekEditStartIncrease.setAttribute("style", "visibility: hidden;");
          } else {
            weekEditStartIncrease.addEventListener('click', ()=>{
              let increaseSubmission = {};
              let increasedStartTime = hoursTime[index + 1];
              if (increasedStartTime.length < 5) {
                increasedStartTime = '0' + increasedStartTime;
              }
              holder = timeblock.start_time.slice(0, 11);
              let changeDate = new Date(holder + increasedStartTime + ':00.000Z');
              increaseSubmission.start_time = changeDate;
              $http.patch(`/timeblocks/${timeblock.id}`, increaseSubmission)
              .then(()=>{
                readAppointmentBlocks();
                appointmentEditor(timeblock.id);
                startDiv.children[0].children[0].innerHTML = hoursTime[index];
                startDiv.children[0].appointment = undefined;
                startDiv.children[0].setAttribute("style", "background-color: transparent;");
              });
            });
          }
        }
      }

      function handleLocationListener(timeblock, weekEditLocation) {
        weekEditLocation.addEventListener('focusout', ()=>{
          let sub = {
            location: weekEditLocation.value
          };
          if (timeblock.location !== sub.location) {
            $http.patch(`/timeblocks/${timeblock.id}`, sub)
            .then(()=>{
              console.log('patched');
            });
          }
        });
      }

      function handleUserNotesListener(timeblock, weekEditUserNotes) {
        weekEditUserNotes.addEventListener('focusout', ()=>{
          let sub = {
            user_notes: weekEditUserNotes.value
          };
          if (timeblock.user_notes !== sub.user_notes) {
            $http.patch(`/timeblocks/${timeblock.id}`, sub)
            .then(()=>{
              console.log('patched');
            });
          }
        });
      }

      function appointmentEditor(appointment) {
        let timeCRUDPopup = document.getElementById('timeCRUDPopup');
        let weekStrip = document.getElementById('weekStrip');
        let buttonsOfCRUD = document.getElementById('buttonsOfCRUD');
        let weekEditAppointmentDelete = document.getElementById('weekEditAppointmentDelete');
        if (weekEditAppointmentDelete) {
          weekEditAppointmentDelete.parentNode.removeChild(weekEditAppointmentDelete);
          weekEditAppointmentDelete = document.createElement('a');
          buttonsOfCRUD.appendChild(weekEditAppointmentDelete);
          weekEditAppointmentDelete.id = "weekEditAppointmentDelete";
          weekEditAppointmentDelete.className = "btn";
          weekEditAppointmentDelete.innerHTML = "delete";
          weekEditAppointmentDelete.setAttribute("style", "cursor: pointer; float: left; margin-left: 8%;");
        }
        let weekEditAppointmentCancel = document.getElementById('weekEditAppointmentCancel');
        if (weekEditAppointmentCancel) {
          weekEditAppointmentCancel.parentNode.removeChild(weekEditAppointmentCancel);
          weekEditAppointmentCancel = document.createElement('a');
          buttonsOfCRUD.appendChild(weekEditAppointmentCancel);
          weekEditAppointmentCancel.id = "weekEditAppointmentCancel";
          weekEditAppointmentCancel.className = "btn";
          weekEditAppointmentCancel.innerHTML = "done";
          weekEditAppointmentCancel.setAttribute("style", "cursor: pointer; float: left; margin-left: 8%;");
        }

        let usernameTimeblock = document.getElementById('usernameTimeblock');
        let weekviewBlocktypeSelect = document.getElementById('weekviewBlocktypeSelect');
        let weekBlocktypeSelector = document.getElementById('weekBlocktypeSelector');
        if (weekBlocktypeSelector) {
          weekBlocktypeSelector.parentNode.removeChild(weekBlocktypeSelector);
          weekBlocktypeSelector = document.createElement('select');
          weekviewBlocktypeSelect.appendChild(weekBlocktypeSelector);
          weekBlocktypeSelector.id = 'weekBlocktypeSelector';
          weekBlocktypeSelector.setAttribute("style", "font-family: 'Alike Angular', serif; font-size: 18px; margin-left: 5.8em; margin-bottom: 1em; width: 46em;");
        }
        let weekBlockKeys = document.getElementById('weekBlockKeys');
        let weekBlockKeysSelector = document.getElementById('weekBlockKeysSelector');
        if (weekBlockKeysSelector) {
          weekBlockKeysSelector.parentNode.removeChild(weekBlockKeysSelector);
          weekBlockKeysSelector = document.createElement('select');
          weekBlockKeys.appendChild(weekBlockKeysSelector);
          weekBlockKeysSelector.id = 'weekBlockKeysSelector';
          weekBlockKeysSelector.setAttribute("style", "font-family: 'Alike Angular', serif; font-size: 18px; margin-left: 5.8em; width: 46em;");
        }
        let weekStartTimeDisplay = document.getElementById('weekStartTimeDisplay');
        let weekAdditionalKeys = document.getElementById('weekAdditionalKeys');
        let weekEditStart = document.getElementById('weekEditStart');
        if (weekEditStart) {
          while(weekStartTimeDisplay.firstChild) {
            weekStartTimeDisplay.removeChild(weekStartTimeDisplay.firstChild);
          }
          weekEditStart = document.createElement('h3');
          weekStartTimeDisplay.appendChild(weekEditStart);
          weekEditStart.innerHTML = 'Start Time:';
          weekEditStart = document.createElement('h2');
          weekStartTimeDisplay.appendChild(weekEditStart);
          weekEditStart.id = 'weekEditStart';
          weekEditStart.setAttribute("style", "width: 3em; margin-left: 2em; padding-left: 0.2em; background-color:#ffffff; border-radius: 5px;");
        }
        let weekEndTimeDisplay = document.getElementById('weekEndTimeDisplay');
        let weekEditEnd = document.getElementById('weekEditEnd');
        if (weekEditEnd) {
          while(weekEndTimeDisplay.firstChild) {
            weekEndTimeDisplay.removeChild(weekEndTimeDisplay.firstChild);
          }
          weekEditEnd = document.createElement('h3');
          weekEndTimeDisplay.appendChild(weekEditEnd);
          weekEditEnd.innerHTML = 'End Time:';
          weekEditEnd = document.createElement('h2');
          weekEndTimeDisplay.appendChild(weekEditEnd);
          weekEditEnd.id = 'weekEditEnd';
          weekEditEnd.setAttribute("style", "width: 3em; margin-left: 2em; padding-left: 0.2em; background-color:#ffffff; border-radius: 5px;");
          // let el = document.createElement('br');
          // weekEndTimeDisplay.appendChild(el);

        }
        let weekLocationField = document.getElementById('weekLocationField');
        let weekEditLocation = document.getElementById('weekEditLocation');
        if (weekEditLocation) {
          weekEditLocation.parentNode.removeChild(weekEditLocation);
          weekEditLocation = document.createElement('input');
          weekLocationField.appendChild(weekEditLocation);
          weekEditLocation.id = 'weekEditLocation';
          weekEditLocation.type = 'text';
          weekEditLocation.class = 'pure-input-1';
          weekEditLocation.setAttribute("style", "width: 46em; margin-left: 0");
        }
        let weekNotesField = document.getElementById('weekNotesField');
        let weekEditUserNotes = document.getElementById('weekEditUserNotes');
        if (weekEditUserNotes) {
          weekEditUserNotes.parentNode.removeChild(weekEditUserNotes);
          weekEditUserNotes = document.createElement('textarea');
          weekNotesField.appendChild(weekEditUserNotes);
          weekEditUserNotes.id = 'weekEditUserNotes';
          weekEditUserNotes.rows = "5";
          weekEditUserNotes.class = "pure-input-1";
          weekEditUserNotes.setAttribute("style", "width: 46em; margin-left: 0");
        }
        let buttonImage;
        let weekTimestartButtons = document.getElementById('weekTimestartButtons');
        let weekEditStartDecrease = document.getElementById('weekEditStartDecrease');
        if (weekEditStartDecrease) {
          weekEditStartDecrease.parentNode.removeChild(weekEditStartDecrease);
          weekEditStartDecrease = document.createElement('button');
          weekTimestartButtons.appendChild(weekEditStartDecrease);
          weekEditStartDecrease.id = 'weekEditStartDecrease';
          buttonImage = document.createElement('img');
          weekEditStartDecrease.appendChild(buttonImage);
          buttonImage.src = './img/noun_592617_cc.png';
          buttonImage.setAttribute("style", "height: 100%; width: 100%;");
        }
        let weekEditStartIncrease = document.getElementById('weekEditStartIncrease');
        if (weekEditStartIncrease) {
          weekEditStartIncrease.parentNode.removeChild(weekEditStartIncrease);
          weekEditStartIncrease = document.createElement('button');
          weekTimestartButtons.appendChild(weekEditStartIncrease);
          weekEditStartIncrease.id = 'weekEditStartIncrease';
          buttonImage = document.createElement('img');
          weekEditStartIncrease.appendChild(buttonImage);
          buttonImage.src = './img/noun_651094_cc.png';
          buttonImage.setAttribute("style", "height: 100%; width: 100%;");
        }
        let weekTimeendButtons = document.getElementById('weekTimeendButtons');
        let weekEditEndDecrease = document.getElementById('weekEditEndDecrease');
        if (weekEditEndDecrease) {
          weekEditEndDecrease.parentNode.removeChild(weekEditEndDecrease);
          weekEditEndDecrease = document.createElement('button');
          weekTimeendButtons.appendChild(weekEditEndDecrease);
          weekEditEndDecrease.id = 'weekEditEndDecrease';
          buttonImage = document.createElement('img');
          weekEditEndDecrease.appendChild(buttonImage);
          buttonImage.src = './img/noun_592617_cc.png';
          buttonImage.setAttribute("style", "height: 100%; width: 100%;");
        }
        let weekEditEndIncrease = document.getElementById('weekEditEndIncrease');
        if (weekEditEndIncrease) {
          weekEditEndIncrease.parentNode.removeChild(weekEditEndIncrease);
          weekEditEndIncrease = document.createElement('button');
          weekTimeendButtons.appendChild(weekEditEndIncrease);
          weekEditEndIncrease.id = 'weekEditEndIncrease';
          buttonImage = document.createElement('img');
          weekEditEndIncrease.appendChild(buttonImage);
          buttonImage.src = './img/noun_651094_cc.png';
          buttonImage.setAttribute("style", "height: 100%; width: 100%;");
        }
        let timeCRUDShareButtonDiv = document.getElementById('timeCRUDShareButtonDiv');
        let timeCRUDShareButton = document.getElementById('timeCRUDShareButton');
        if (timeCRUDShareButton) {
          timeCRUDShareButton.parentNode.removeChild(timeCRUDShareButton);
          timeCRUDShareButton = document.createElement('a');
          timeCRUDShareButtonDiv.appendChild(timeCRUDShareButton);
          timeCRUDShareButton.id = 'timeCRUDShareButton';
          timeCRUDShareButton.className = 'btn';
          timeCRUDShareButton.innerHTML = 'share';
        }

        //timeCRUDPopup.setAttribute("style", "visibility: visible; opacity: 0.9;");
        weekStrip.setAttribute("style", "opacity: 0.6;");

        $http.get(`/timeblocks/${appointment}`)
        .then(timeblockData=>{
          let timeblock = timeblockData.data;
          timeCRUDShareButton.addEventListener('click', ()=>{
            shareAppointment(timeblock.id);
          });
          $http.get(`/blocktypes`)
          .then(blocksData=>{
            let blocks = blocksData.data;
            let currentBlock;
            for (let i = 0; i < blocks.length; i++) {
              if (blocks[i].id === timeblock.block_type) {
                currentBlock = blocks[i];
              }
            }
            updateToplineCRUD(timeblock, usernameTimeblock);
            populateBlockTypesSelect(currentBlock, blocks, weekBlocktypeSelector, timeblock);
            blockTypeHandler(weekBlocktypeSelector, appointment);
            if ((currentBlock.keys !== null) && (currentBlock.keys !== undefined) && (currentBlock.keys.keys.length > 0)) {
              populateBlockSubkeys(currentBlock, blocks, timeblock, weekBlockKeysSelector);
              weekBlockKeys.setAttribute("style", "display: initial;");
              weekBlockKeysListener(weekBlockKeysSelector, timeblock, currentBlock);
              if (currentBlock.keys.keys.length > 1) {
                populateBlockExtraValues(currentBlock, blocks, timeblock, weekAdditionalKeys);
                weekAdditionalKeys.setAttribute("style", "display: initial; margin-left: 24em;");
              } else {
                while (weekAdditionalKeys.firstChild) {
                  weekAdditionalKeys.removeChild(weekAdditionalKeys.firstChild);
                }
                weekAdditionalKeys.setAttribute("style", "display: none;");
              }
            } else {
              weekBlockKeys.setAttribute("style", "display: none;");
              weekAdditionalKeys.setAttribute("style", "display: none;");
            }
            updateStartDisplay(timeblock, weekEditStart);
            updateClockStartButtons(timeblock, weekEditStartDecrease, weekEditStartIncrease);
            updateEndDisplay(timeblock, weekEditEnd);
            updateClockEndButtons(timeblock, weekEditEndDecrease, weekEditEndIncrease);
            populateUserLocation(timeblock, weekEditLocation);
            handleLocationListener(timeblock, weekEditLocation);
            populateUserNotes(timeblock, weekEditUserNotes);
            handleUserNotesListener(timeblock, weekEditUserNotes);
            timeCRUDPopup.setAttribute("style", "visibility: visible; opacity: 0.8; background: " + currentBlock.value + "; background-color: -webkit-linear-gradient(135deg, " + currentBlock.color + ", #abdada); background: -o-linear-gradient(135deg, " + currentBlock.color + ", #abdada); background: -moz-linear-gradient(135deg, " + currentBlock.color + ", #abdada); background: linear-gradient(135deg, " + currentBlock.color + ", #abdada); position: fixed; align-self: center; width: 64em; align-items: center; align-content: center; margin-left: 14em; margin-right: 10em; margin-top: 1em; padding-left: 3.6em; padding-right: 3.6em; border-radius: 10px; border: solid 3px #000000; overflow: scroll; height: 60%; z-index: 3;");
            weekEditAppointmentDelete.addEventListener('click', ()=>{
              deleteAppointment(timeblock);
              timeCRUDPopup.setAttribute("style", "visibility: hidden; opacity: 0;");
              weekStrip.setAttribute("style", "opacity: 1;");
            });
          });
        });
        weekEditAppointmentCancel.addEventListener('click', ()=>{
          timeCRUDPopup.setAttribute("style", "visibility: hidden; opacity: 0;");
          weekStrip.setAttribute("style", "opacity: 1;");
        });
      }

      function weekEdit(appointment, day, hour) {


        if (appointment === undefined) {
          //alert(appointment);
          console.log(day + ' ' + hoursTime[hours.indexOf(hour)]);
          let addAppointment = {
            user_id: currentUserId,
            location: '',
            user_notes: null
          };
          let aptDate;
          let hourString = hoursTime[hours.indexOf(hour)];
          let endHourString = hoursTime[hours.indexOf(hour) + 1];
          if (hourString.length < 5) {
            hourString = '0' + hourString;
          }
          if (endHourString.length < 5) {
            endHourString = '0' + endHourString;
          }
          switch(day){
            case('monday'):
              aptDate = new Date(mondayDate);
              break;
            case('tuesday'):
              aptDate = new Date(tuesdayDate);
              break;
            case('wednesday'):
              aptDate = new Date(wednesdayDate);
              break;
            case('thursday'):
              aptDate = new Date(thursdayDate);
              break;
            case('friday'):
              aptDate = new Date(fridayDate);
              break;
            case('saturday'):
              aptDate = new Date(saturdayDate);
              break;
            case('sunday'):
              aptDate = new Date(sundayDate);
              break;
            default:
              console.log('bad day value');
          }
          let calMonth = (aptDate.getMonth() + 1).toString();
          if (calMonth.length < 2) {
            calMonth = '0' + calMonth;
          }
          let calDate = aptDate.getDate().toString();
          if (calDate.length < 2) {
            calDate = '0' + calDate;
          }
          //let startTime = new Date(aptDate.getFullYear() + '-' + calMonth + '-' + calDate + 'T' + hourString + ':00.000Z');
          addAppointment.start_time = aptDate.getFullYear() + '-' + calMonth + '-' + calDate + 'T' + hourString + ':00.000Z';
          console.log(addAppointment.start_time);
          if (endHourString === '24:00') {
            endHourString = '00:00';
            aptDate.setDate(aptDate.getDate()+1);
            calMonth = (aptDate.getMonth() + 1).toString();
            if (calMonth.length < 2) {
              calMonth = '0' + calMonth;
            }
            calDate = aptDate.getDate().toString();
            if (calDate.length < 2) {
              calDate = '0' + calDate;
            }
          }
          addAppointment.end_time = aptDate.getFullYear() + '-' + calMonth + '-' + calDate + 'T' + endHourString + ':00.000Z';
          addAppointment.block_data = {};
          $http.get(`/blocktypesbyuser/${currentUserId}`)
          .then(userBlocksData=>{
            let userBlocks = userBlocksData.data;
            let sortedBlocks = userBlocks.sort((a, b)=>{
              if (a.type.toLowerCase() < b.type.toLowerCase()) {
                return -1;
              } else if (a.type.toLowerCase() > b.type.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            addAppointment.block_type = sortedBlocks[0].id;
            if (sortedBlocks[0].keys !== null) {
              addAppointment.block_data[sortedBlocks[0].keys.keys[0]] = 0;
            }
            $http.post('/timeblocks', addAppointment)
            .then(appointData=>{
              let appoint = appointData.data[0];
              readAppointmentBlocks();
              appointmentEditor(appoint.id);
            });
          });

        } else {
          appointmentEditor(appointment);
        }

      }

      function halfHourEventListen(halfHourDiv, divDay, divHour) {

        halfHourDiv.addEventListener('click', ()=>{
          weekEdit(halfHourDiv.appointment, divDay, divHour);
        });
      }

      function setHalfhourListeners() {
        let weekArray = [ 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        let element;

        for (let i = 0; i < weekArray.length; i++) {
          for (let j = 0; j < (hours.length - 1); j++) {
            element = document.getElementById(weekArray[i] + hours[j]);
            halfHourEventListen(element.children[0], weekArray[i], hours[j]);
          }
        }
      }


      function onInit() {
        console.log("Weekview is lit");
        let userCookie = getCookie('h168userId');
        //check cookies for user already logged in - change page state if this is a return user
        dayClock = false;
        weekClock = true;
        monthClock = false;
        landingClock = false;

        let userDateViewString = ($stateParams.id);
        currentUserId = getUserFromParams(userDateViewString);
        setMonday(userDateViewString);
        if (parseInt(userCookie) !== parseInt(currentUserId)) {
          //forbidden
          alert('forbidden user access');
          weekClock = false;
          $state.go('landing');
        } else {
          $http.get(`/users/${currentUserId}`)
          .then(userData=>{
            var userAccount = userData.data;
            if ((getCookie(userAccount.security.key)) !== (userAccount.security.value)) {

              alert('access denied');
              weekClock = false;
              $state.go('landing');
            }
          });
        }
        setPastPresentDays();
        setHolidayButtons();
        setOccasionButtons();
        setBillsButtons();
        setTasksButtons();
        readAppointmentBlocks();
        setHalfhourListeners();
      }

    }

}());
