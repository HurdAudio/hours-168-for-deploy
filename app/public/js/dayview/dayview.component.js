(function() {
  'use strict';
  var dayClock = false;
  var weekClock = false;
  var monthClock = false;
  var landingClock = false;
  var myTimer = setInterval(setClockDay,1000);
  var currentUserId = 0;
  var viewDate;
  var year = 0;
  var month = 0;
  var day = 0;
  var currentEdit = 0;
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var hours = ['h0', 'h030', 'h1', 'h130', 'h2', 'h230', 'h3', 'h330', 'h4', 'h430', 'h5', 'h530', 'h6', 'h630', 'h7', 'h730', 'h8', 'h830', 'h9', 'h930', 'h10', 'h1030', 'h11', 'h1130', 'h12', 'h1230', 'h13', 'h1330', 'h14', 'h1430', 'h15', 'h1530', 'h16', 'h1630', 'h17', 'h1730', 'h18', 'h1830', 'h19', 'h1930', 'h20', 'h2030', 'h21', 'h2130', 'h22', 'h2230', 'h23', 'h2330', 'h00' ];
  var hoursTime = ['0:00', '0:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30', '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30', '24:00' ];
  var pulses = [ '#ff0000', '#ff1100', '#ff2211', '#ff3322', '#ff4433', '#ff5544', '#ff6655', '#ff7766', '#ff8877', '#ff9988', '#ffaa99', '#ffbbaa', '#ffccbb', '#ffddcc', '#ffeedd', '#ffffee', '#ffeeff', '#ffddee', '#ffccdd', '#ffbbcc', '#ffaabb', '#ff99aa', '#ff8899', '#ff7788', '#ff6677', '#ff5566', '#ff4455', '#ff3344', '#ff2233', '#ff1122', '#ff0011' ];
  var pomoInterval = 25;
  var pomoBreakInterval = 5;
  var numberOfPomo = 4;
  var pomoStateArr = [ 'pomoTimerSetting', 'pomoBreakSetting', 'numberOfPomos', 'pomoCountdown'];
  var pomoState = 0;

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


  function setClockDay(){
    if ((dayClock) && (!weekClock) && (!monthClock) && (!landingClock)){
      document.getElementById("clockDayview").innerHTML=new Date().toLocaleTimeString('en-GB');
    }
  }



  angular.module('app')
    .component('dayview', {
      controller: DayviewController,
      templateUrl: '/js/dayview/dayview.template.html'
    });

    DayviewController.$inject = ['$http', '$state', '$stateParams'];

    function DayviewController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.previousDay = previousDay;
      vm.nextDay = nextDay;
      vm.gotoToday = gotoToday;
      vm.addOccasionToDay = addOccasionToDay;
      vm.submitOccasionToDay = submitOccasionToDay;
      vm.editOccasion = editOccasion;
      vm.payBillButton = payBillButton;
      vm.billInfo = billInfo;
      vm.addBillToDay = addBillToDay;
      vm.taskCompletedButton = taskCompletedButton;
      vm.taskInfo = taskInfo;
      vm.addTaskToDay = addTaskToDay;
      vm.verbalizeTimeblock = verbalizeTimeblock;
      vm.advanceArt = advanceArt;
      vm.gotoWeek = gotoWeek;
      vm.gotoMonth = gotoMonth;
      vm.speakWord = speakWord;
      vm.speakHistory = speakHistory;
      vm.userProfile = userProfile;
      vm.cancelAppointmentInvite = cancelAppointmentInvite;
      vm.shareHoliday = shareHoliday;
      vm.cancelHolidayInvite = cancelHolidayInvite;
      vm.shareOccasion = shareOccasion;
      vm.cancelOccasionInvite = cancelOccasionInvite;
      vm.taskShareNow = taskShareNow;
      vm.cancelTaskInvite = cancelTaskInvite;
      vm.shareObservance = shareObservance;
      vm.cancelObservanceInvite = cancelObservanceInvite;

      function cancelObservanceInvite() {
        let shareObservancePane = document.getElementById('shareObservancePane');
        let schedulePanel = document.getElementById('schedulePanel');

        shareObservancePane.setAttribute("style", "opacity: 0; z-index: -6; transition: opacity 0.5s linear;");
        schedulePanel.setAttribute("style", "opacity: 1; z-index: 6; transition: opacity 0.5s linear;");
      }

      function friendFieldObservanceShare(user, observance, searchString, friendId) {
        let observanceFriendsSearchList = document.getElementById('observanceFriendsSearchList');

        $http.get(`/users/${friendId}`)
        .then(friendData => {
          let friend = friendData.data;
          if (searchString !== '') {
            if ((friend.name.toLowerCase().indexOf(searchString.toLowerCase()) === -1) && (friend.email.toLowerCase().indexOf(searchString.toLowerCase()) === -1)) {
              return;
            }
          }
          let theDiv = document.createElement('div');
          observanceFriendsSearchList.appendChild(theDiv);
          let theImg = document.createElement('img');
          theDiv.appendChild(theImg);
          theImg.src = friend.user_avatar_url;
          let theP = document.createElement('p');
          theDiv.appendChild(theP);
          theP.innerHTML = friend.name;
          let theBr = document.createElement('br');
          theDiv.appendChild(theBr);
          theBr = document.createElement('br');
          theDiv.appendChild(theBr);
          theBr = document.createElement('br');
          theDiv.appendChild(theBr);
          theBr = document.createElement('br');
          theDiv.appendChild(theBr);
          theBr = document.createElement('br');
          theDiv.appendChild(theBr);
          theBr = document.createElement('br');
          theDiv.appendChild(theBr);
          theDiv.setAttribute("style", "cursor: pointer;");

          theDiv.addEventListener('click', () => {
            let subObj = {
              user_id: currentUserId,
              observance_id: observance.id,
              share_associate_id: friend.id,
              accepted: false,
              responded: false
            };
            $http.post('/observance_shares', subObj)
            .then(sharedObservanceData => {
              let sharedObservance = sharedObservanceData.data;
              cancelObservanceInvite();
            });
          });
        });
      }

      function populateUserForSharingObservance(user, observance, searchString) {
        if ((user.associates !== null) && (user.associates.friends !== null) && (user.associates.friends.length > 0)) {
          for (let i = 0; i <user.associates.friends.length; i++) {
            friendFieldObservanceShare(user, observance, searchString, user.associates.friends[i]);
          }
        }
      }

      function shareObservance(observeId) {
        let shareObservancePane = document.getElementById('shareObservancePane');
        let schedulePanel = document.getElementById('schedulePanel');
        let observanceShareImage = document.getElementById('observanceShareImage');
        let observanceShareName = document.getElementById('observanceShareName');
        let observanceShareDate = document.getElementById('observanceShareDate');
        let month = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
        let observanceFriendsSearchList = document.getElementById('observanceFriendsSearchList');
        while (observanceFriendsSearchList.firstChild) {
          observanceFriendsSearchList.removeChild(observanceFriendsSearchList.firstChild);
        }
        let shareObservanceSearchBarDiv = document.getElementById('shareObservanceSearchBarDiv');
        let taskWhoToShareObservanceSearch = document.getElementById('taskWhoToShareObservanceSearch');
        if (taskWhoToShareObservanceSearch) {
          taskWhoToShareObservanceSearch.parentNode.removeChild(taskWhoToShareObservanceSearch);
          taskWhoToShareObservanceSearch = document.createElement('input');
          shareObservanceSearchBarDiv.appendChild(taskWhoToShareObservanceSearch);
          taskWhoToShareObservanceSearch.id = 'taskWhoToShareObservanceSearch';
          taskWhoToShareObservanceSearch.type = 'text';
          taskWhoToShareObservanceSearch.placeholder = 'search';
        }

        $http.get(`/observances/${observeId}`)
        .then(observanceData => {
          let observance = observanceData.data;
          let dayOf = new Date(observance.day_of);
          observanceShareImage.src = observance.picture;
          observanceShareName.innerHTML = observance.name;
          observanceShareDate.innerHTML = 'Every ' + dayOf.getDate() + ' ' + month[dayOf.getMonth()];
          $http.get(`/users/${currentUserId}`)
          .then(userData => {
            let user = userData.data;
            populateUserForSharingObservance(user, observance, taskWhoToShareObservanceSearch.value);

            taskWhoToShareObservanceSearch.addEventListener('keyup', () => {
              while (observanceFriendsSearchList.firstChild) {
                observanceFriendsSearchList.removeChild(observanceFriendsSearchList.firstChild);
              }
              populateUserForSharingObservance(user, observance, taskWhoToShareObservanceSearch.value);
            });
          });


        });

        shareObservancePane.setAttribute("style", "opacity: 1; z-index: 6; transition: opacity 0.5s linear;");
        schedulePanel.setAttribute("style", "opacity: 0; z-index: -6; transition: opacity 0.5s linear;");
      }

      function cancelTaskInvite() {
        let shareTaskPane = document.getElementById('shareTaskPane');

        shareTaskPane.setAttribute("style", "z-index: -6; opacity: 0; transition: opacity 0.5s linear;");
      }

      function populateTaskFriendsList(friendId, imgBlock, nameBlock) {
        $http.get(`/users/${friendId}`)
        .then(friendData => {
          let friend = friendData.data;
          imgBlock.src = friend.user_avatar_url;
          nameBlock.innerHTML = friend.name;
        });
      }

      function taskFriendClick(friendDiv, friendId, taskId) {
        friendDiv.addEventListener('click', () => {
          let subObj = {
            user_id: currentUserId,
            task_id: taskId,
            share_associate_id: friendId,
            responded: false,
            accepted: false
          };

          $http.post('/task_shares', subObj)
          .then(subTaskData => {
            let subTask = subTaskData.data;
            cancelTaskInvite();
          });
        });
      }

      function filterTheTaskFriendsList(friendList, friendId, filter, taskId) {
        let theDiv;
        let theImg;
        let theName;
        let theBr;

        $http.get(`/users/${friendId}`)
        .then(friendData => {
          let friend = friendData.data;
          if ((friend.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1) || (friend.email.toLowerCase().indexOf(filter.toLowerCase()) !== -1)) {
            theDiv = document.createElement('div');
            friendList.appendChild(theDiv);
            theImg = document.createElement('img');
            theDiv.appendChild(theImg);
            theImg.src = friend.user_avatar_url;
            theName = document.createElement('p');
            theDiv.appendChild(theName);
            theName.innerHTML = friend.name;
            theBr = document.createElement('br');
            theDiv.appendChild(theBr);
            theBr = document.createElement('br');
            theDiv.appendChild(theBr);
            theBr = document.createElement('br');
            theDiv.appendChild(theBr);
            theBr = document.createElement('br');
            theDiv.appendChild(theBr);
            theBr = document.createElement('br');
            theDiv.appendChild(theBr);
            theDiv.setAttribute("style", "cursor: pointer;");
            taskFriendClick(theDiv, friendId, taskId);
          }
        });
      }

      function taskShareNow(taskId) {
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
        let shareTaskPane = document.getElementById('shareTaskPane');
        let taskShareName = document.getElementById('taskShareName');
        let taskShareNotes = document.getElementById('taskShareNotes');
        let taskShareDueDate = document.getElementById('taskShareDueDate');
        let taskShareCompletionStatus = document.getElementById('taskShareCompletionStatus');
        let taskFriendsSearchList = document.getElementById('taskFriendsSearchList');
        while(taskFriendsSearchList.firstChild) {
          taskFriendsSearchList.removeChild(taskFriendsSearchList.firstChild);
        }
        let shareTaskSearchBarDiv = document.getElementById('shareTaskSearchBarDiv');
        let taskWhoToShareSearch = document.getElementById('taskWhoToShareSearch');
        if (taskWhoToShareSearch) {
          taskWhoToShareSearch.parentNode.removeChild(taskWhoToShareSearch);
          taskWhoToShareSearch = document.createElement('input');
          shareTaskSearchBarDiv.appendChild(taskWhoToShareSearch);
          taskWhoToShareSearch.id = 'taskWhoToShareSearch';
          taskWhoToShareSearch.type = 'text';
          taskWhoToShareSearch.placeholder = 'search';
        }
        let friendDiv;
        let theImg;
        let theName;
        let theBr;


        $http.get(`/users/${currentUserId}`)
        .then(userData => {
          let user = userData.data;
          $http.get(`/tasks/${taskId}`)
          .then(taskData => {
            let task = taskData.data;
            let due = new Date(task.due_date);
            let completion;
            if (task.is_completed) {
              completion = new Date(task.completed_date);
            }
            taskShareName.innerHTML = 'Task: ' + task.name;
            taskShareNotes.innerHTML = 'Notes: ' + task.user_notes;
            taskShareDueDate.innerHTML = 'Due: ' + due.getDate() + ' ' + months[due.getMonth()] + ' ' + due.getFullYear();
            if (task.is_completed) {
              taskShareCompletionStatus.innerHTML = 'Completed on ' + completion.getDate() + ' ' + months[completion.getMonth()] + ' ' + completion.getFullYear() + '.';
            } else {
              taskShareCompletionStatus.innerHTML = 'Task not yet completed';
            }
            if ((user.associates !== null) && (user.associates.friends !== undefined) && (user.associates.friends.length > 0)) {
              for (let i = 0; i < user.associates.friends.length; i++) {
                friendDiv = document.createElement('div');
                taskFriendsSearchList.appendChild(friendDiv);
                theImg = document.createElement('img');
                friendDiv.appendChild(theImg);
                theName = document.createElement('p');
                friendDiv.appendChild(theName);
                populateTaskFriendsList(user.associates.friends[i], theImg, theName);
                theBr = document.createElement('br');
                friendDiv.appendChild(theBr);
                theBr = document.createElement('br');
                friendDiv.appendChild(theBr);
                theBr = document.createElement('br');
                friendDiv.appendChild(theBr);
                theBr = document.createElement('br');
                friendDiv.appendChild(theBr);
                theBr = document.createElement('br');
                friendDiv.appendChild(theBr);
                friendDiv.setAttribute("style", "cursor: pointer;");
                taskFriendClick(friendDiv, user.associates.friends[i], taskId);
              }
              taskWhoToShareSearch.addEventListener('keyup', () => {
                while(taskFriendsSearchList.firstChild) {
                  taskFriendsSearchList.removeChild(taskFriendsSearchList.firstChild);
                }
                for (let k = 0; k < user.associates.friends.length; k++) {
                  filterTheTaskFriendsList(taskFriendsSearchList, user.associates.friends[k], taskWhoToShareSearch.value, taskId);
                }
              });
            }
          });
        });

        shareTaskPane.setAttribute("style", "z-index: 6; opacity: 1; transition: opacity 0.5s linear;");
      }

      function cancelOccasionInvite() {
        let shareOccasionPane = document.getElementById('shareOccasionPane');

        shareOccasionPane.setAttribute("style", "opacity: 0; z-index: -6; transition: all 0.5s linear;");
      }

      function occasionShareListEntry(friendId, listDiv, filter, occasionId) {
        let entryDiv;
        let entryImg;
        let entryP;
        let entryBr;

        $http.get(`/users/${friendId}`)
        .then(friendData=>{
          let friend = friendData.data;
          console.log(friend.email + ' ' + filter);
          console.log(friend.email.toLowerCase().toString().indexOf(filter.toString().toLowerCase()));
          if ((friend.name.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) || (friend.email.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1)) {
            entryDiv = document.createElement('div');
            listDiv.appendChild(entryDiv);
            entryDiv.setAttribute("style", "cursor: pointer;");
            entryImg = document.createElement('img');
            entryDiv.appendChild(entryImg);
            entryImg.src = friend.user_avatar_url;
            entryP = document.createElement('p');
            entryDiv.appendChild(entryP);
            entryP.innerHTML = friend.name;
            entryBr = document.createElement('br');
            entryDiv.appendChild(entryBr);
            entryBr = document.createElement('br');
            entryDiv.appendChild(entryBr);
            entryBr = document.createElement('br');
            entryDiv.appendChild(entryBr);
            entryBr = document.createElement('br');
            entryDiv.appendChild(entryBr);
            entryBr = document.createElement('br');
            entryDiv.appendChild(entryBr);
            entryDiv.addEventListener('click', ()=>{
              let subObj = {
                user_id: currentUserId,
                occasion_id: occasionId,
                share_associate_id: friend.id,
                responded: false,
                accepted: false
              };
              $http.post('occasions_shares', subObj)
              .then(shareData=>{
                let share = shareData.data;
                cancelOccasionInvite();
              });
            });
          }
        });
      }

      function populateOccasionShareList(listDiv, filter, occasionId) {

        $http.get(`/users/${currentUserId}`)
        .then(userData=>{
          let user = userData.data;
          if ((user.associates.friends !== null) && (user.associates.friends.length > 0)) {
            for (let i = 0; i < user.associates.friends.length; i++) {
              occasionShareListEntry(user.associates.friends[i], listDiv, filter, occasionId);
            }
          }
        });
      }

      function shareOccasion(occasionId) {
        let shareOccasionPane = document.getElementById('shareOccasionPane');
        let occasionShareName = document.getElementById('occasionShareName');
        let occasionShareDate = document.getElementById('occasionShareDate');
        let ocDay;
        let occasionShareAnnuality = document.getElementById('occasionShareAnnuality');
        let occasionFriendsSearchList = document.getElementById('occasionFriendsSearchList');
        while (occasionFriendsSearchList.firstChild) {
          occasionFriendsSearchList.removeChild(occasionFriendsSearchList.firstChild);
        }
        let occasionWhoToShareSearch = document.getElementById('occasionWhoToShareSearch');

        $http.get(`/occasions/${occasionId}`)
        .then(occasionData=>{
          let occasion = occasionData.data;
          ocDay = new Date(occasion.day_of);
          occasionShareName.innerHTML = occasion.name;
          occasionShareDate.innerHTML = ocDay.getDate() + ' ' + months[ocDay.getMonth()];
          if (occasion.is_annual) {
            occasionShareAnnuality.innerHTML = 'Observed Annually'
          } else {
            occasionShareAnnuality.innerHTML = 'Observed in ' + ocDay.getFullYear();
          }
          populateOccasionShareList(occasionFriendsSearchList, '', occasionId);
          occasionWhoToShareSearch.addEventListener('keyup', () => {
            while (occasionFriendsSearchList.firstChild) {
              occasionFriendsSearchList.removeChild(occasionFriendsSearchList.firstChild);
            }
            populateOccasionShareList(occasionFriendsSearchList, occasionWhoToShareSearch.value, occasionId);
          });
        });

        shareOccasionPane.setAttribute("style", "opacity: 1; z-index: 6; transition: all 0.5s linear;");
      }

      function populateUserFriendsListForHolidays(allFriendsList, friendId) {
        $http.get(`/users/${friendId}`)
        .then(friendData=>{
          let friend = friendData.data;
          allFriendsList.push(friend);
        });
      }

      function cancelHolidayInvite() {
        let shareHolidayPane = document.getElementById('shareHolidayPane');
        let holidayShareImage = document.getElementById('holidayShareImage');
        let holidayShareHolidayName = document.getElementById('holidayShareHolidayName');

        shareHolidayPane.setAttribute("style", "z-index: -6; opacity: 0; transition: opacity 0.5s linear;");
        holidayShareImage.src = '';
        holidayShareHolidayName.innerHTML = '';
      }

      function handleHolidayShareEvents(theDiv, holidayId, friendId) {
        theDiv.addEventListener('click', ()=>{
          let subObj = {
            user_id: currentUserId,
            holiday_id: holidayId,
            share_associate_id: friendId,
            accepted: false,
            responded: false
          };
          $http.post('/holiday_shares', subObj)
          .then(shareData=>{
            let share = shareData.data;
            cancelHolidayInvite();
          });
        });
      }

      function shareHoliday(holidayId) {
        let shareHolidayPane = document.getElementById('shareHolidayPane');
        let holidayShareImage = document.getElementById('holidayShareImage');
        let holidayShareHolidayName = document.getElementById('holidayShareHolidayName');
        let allFriendsList = [];
        let shareHolidaySearchBarDiv = document.getElementById('shareHolidaySearchBarDiv');
        let holidayWhoToShareSearch = document.getElementById('holidayWhoToShareSearch');
        if (holidayWhoToShareSearch) {
          holidayWhoToShareSearch.parentNode.removeChild(holidayWhoToShareSearch);
          holidayWhoToShareSearch = document.createElement('input');
          shareHolidaySearchBarDiv.appendChild(holidayWhoToShareSearch);
          holidayWhoToShareSearch.id = 'holidayWhoToShareSearch';
          holidayWhoToShareSearch.type = 'text';
          holidayWhoToShareSearch.placeholder = 'search';
        }
        let holidayFriendsSearchList = document.getElementById('holidayFriendsSearchList');
        while (holidayFriendsSearchList.firstChild) {
          holidayFriendsSearchList.removeChild(holidayFriendsSearchList.firstChild);
        }

        $http.get(`/holidays/${holidayId}`)
        .then(holidayData=>{
          let holiday = holidayData.data;
          holidayShareImage.src = holiday.picture;
          holidayShareHolidayName.innerHTML = holiday.name;
        });

        $http.get(`/users/${currentUserId}`)
        .then(userData=>{
          let user = userData.data;
          let theDiv;
          let theImg;
          let theName;
          let theBr;
          let filteredList;
          if ((user.associates !== undefined) && (user.associates.friends !== undefined)) {
            if (user.associates.friends.length > 0) {
              for (let i = 0; i < user.associates.friends.length; i++) {
                populateUserFriendsListForHolidays(allFriendsList, user.associates.friends[i]);
              }
              setTimeout(()=>{
                allFriendsList = allFriendsList.sort((a, b)=>{
                  if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                  } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                for (let j = 0; j < allFriendsList.length; j++) {
                  theDiv = document.createElement('div');
                  holidayFriendsSearchList.appendChild(theDiv);
                  theImg = document.createElement('img');
                  theDiv.appendChild(theImg);
                  theImg.src = allFriendsList[j].user_avatar_url;
                  theName = document.createElement('p');
                  theDiv.appendChild(theName);
                  theName.innerHTML = allFriendsList[j].name;
                  theBr = document.createElement('br');
                  theDiv.appendChild(theBr);
                  theBr = document.createElement('br');
                  theDiv.appendChild(theBr);
                  theBr = document.createElement('br');
                  theDiv.appendChild(theBr);
                  theBr = document.createElement('br');
                  theDiv.appendChild(theBr);
                  theBr = document.createElement('br');
                  theDiv.appendChild(theBr);
                  theBr = document.createElement('br');
                  theDiv.appendChild(theBr);
                  theDiv.setAttribute("style", "cursor: pointer;");
                  handleHolidayShareEvents(theDiv, holidayId, allFriendsList[j].id);
                }
                holidayWhoToShareSearch.addEventListener('keyup', ()=>{
                  while (holidayFriendsSearchList.firstChild) {
                    holidayFriendsSearchList.removeChild(holidayFriendsSearchList.firstChild);
                  }
                  if (holidayWhoToShareSearch.value === '') {
                    for (let k = 0; k < allFriendsList.length; k++) {
                      theDiv = document.createElement('div');
                      holidayFriendsSearchList.appendChild(theDiv);
                      theImg = document.createElement('img');
                      theDiv.appendChild(theImg);
                      theImg.src = allFriendsList[k].user_avatar_url;
                      theName = document.createElement('p');
                      theDiv.appendChild(theName);
                      theName.innerHTML = allFriendsList[k].name;
                      theBr = document.createElement('br');
                      theDiv.appendChild(theBr);
                      theBr = document.createElement('br');
                      theDiv.appendChild(theBr);
                      theBr = document.createElement('br');
                      theDiv.appendChild(theBr);
                      theBr = document.createElement('br');
                      theDiv.appendChild(theBr);
                      theBr = document.createElement('br');
                      theDiv.appendChild(theBr);
                      theBr = document.createElement('br');
                      theDiv.appendChild(theBr);
                      theDiv.setAttribute("style", "cursor: pointer;");
                      handleHolidayShareEvents(theDiv, holidayId, allFriendsList[k].id);
                    }
                  } else {
                    filteredList = allFriendsList.filter(entry=>{
                      return((entry.name.toLowerCase().indexOf(holidayWhoToShareSearch.value) !== -1) || (entry.email.toLowerCase().indexOf(holidayWhoToShareSearch.value) !== -1));
                    });
                    filteredList = filteredList.sort((a, b)=>{
                      if (a.name.toLowerCase() < b.name.toLowerCase()) {
                        return -1;
                      } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                      } else {
                        return 0;
                      }
                    });
                    if (filteredList.length > 0) {
                      for (let l = 0; l < filteredList.length; l++) {
                        theDiv = document.createElement('div');
                        holidayFriendsSearchList.appendChild(theDiv);
                        theImg = document.createElement('img');
                        theDiv.appendChild(theImg);
                        theImg.src = filteredList[l].user_avatar_url;
                        theName = document.createElement('p');
                        theDiv.appendChild(theName);
                        theName.innerHTML = filteredList[l].name;
                        theBr = document.createElement('br');
                        theDiv.appendChild(theBr);
                        theBr = document.createElement('br');
                        theDiv.appendChild(theBr);
                        theBr = document.createElement('br');
                        theDiv.appendChild(theBr);
                        theBr = document.createElement('br');
                        theDiv.appendChild(theBr);
                        theBr = document.createElement('br');
                        theDiv.appendChild(theBr);
                        theBr = document.createElement('br');
                        theDiv.appendChild(theBr);
                        theDiv.setAttribute("style", "cursor: pointer;");
                        handleHolidayShareEvents(theDiv, holidayId, filteredList[l].id);
                      }
                    }
                  }
                });
              }, (user.associates.friends.length * 100));
            }
          }

        });

        shareHolidayPane.setAttribute("style", "z-index: 6; opacity: 1; transition: opacity 0.5s linear;");
      }

      function cancelAppointmentInvite() {
        document.getElementById('dayviewWhoToShareSearch').value = '';
        let shareAppointmentPane = document.getElementById('shareAppointmentPane');
        let schedulePanel = document.getElementById('schedulePanel');

        schedulePanel.setAttribute("style", "opacity: 1;");
        shareAppointmentPane.setAttribute("style", "z-index: -6; opacity: 0;");
      }

      function speakHistory() {
        let yearFact = document.getElementById('yearFact');
        let eventFact = document.getElementById('eventFact');
        let history = yearFact.innerHTML + eventFact.innerHTML;
        spokenOutput(history);
      }



      function speakWord() {
        let wordOfDay = document.getElementById('wordOfDay');
        spokenOutput(wordOfDay.innerHTML);
      }

      function userProfile() {
        dayClock = false;
        window.clearInterval(setClockDay);
        $state.go('userprofile', {id: currentUserId});
      }

      function gotoMonth() {
        dayClock = false;
        let increment = 0;
        let navDay = new Date(viewDate);
        let dayMonth = (navDay.getMonth() + 1);
        let dayYear = navDay.getFullYear();
        let mondayYear = dayYear;
        let mondayMonth = dayMonth;
        if (navDay.getDay() !== 1) {
          while(navDay.getDay() !==1) {
            navDay.setDate(navDay.getDate()-1);
            ++increment;
          }
        }
        mondayMonth = (navDay.getMonth() + 1);
        mondayYear = navDay.getFullYear();
        if (dayMonth !== mondayMonth) {
          if (increment > 4) {
            dayMonth = mondayMonth;
            if (mondayYear !== dayYear) {
              dayYear = mondayYear;
            }
          }
        }
        let idString = 'user=' + currentUserId + '&year=' + dayYear + '&month=' + dayMonth;
        dayClock = false;
        window.clearInterval(setClockDay);
        $state.go('monthview', {id: idString});
      }

      function advanceArt(index) {
        let nextArt = index + 1;
        let currentArt = document.getElementById('art' + index);
        if (nextArt === vm.dailyArts.length) {
          nextArt = 0;
        }
        // if (vm.dailyArts.length > 1) {
        //   if (nextArt === index) {
        //     while(nextArt === index) {
        //       nextArt = Math.floor(Math.random()*vm.arts.length);
        //     }
        //   }
        // }
        let nextElement;
        // if (nextArt === vm.arts.length) {
        //   nextArt = 0;
        // }
        nextElement = document.getElementById('art' + nextArt);
        transitionPane(currentArt, nextElement);
        // currentArt.setAttribute("style", "display: none;");
        // nextElement.setAttribute("style", "display: initial;");

      }

      function transitionPane(oldPane, newPane) {
        let fadeTime = 2;

        switch (Math.floor(Math.random()*4)) {
          case(0):
            oldPane.setAttribute("style", "-webkit-transform: rotateY(270deg); transform: rotateY(270deg); transition: transform " + fadeTime + "s linear;");
            setTimeout(()=>{
              oldPane.setAttribute("style", "display: none; -webkit-transform: rotateY(0deg); transform: rotateY(0deg);");
              newPane.setAttribute("style", "display: initial; visibility: hidden; -webkit-transform: rotateY(90deg); transform: rotateY(90deg);");
              setTimeout(()=>{
                newPane.setAttribute("style", "visibility: visible; -webkit-transform: rotateY(0deg); transform: rotateY(0deg); transition: transform " + fadeTime/2 + "s linear;");
              }, (fadeTime * 25));
            }, (fadeTime * 1000));
            break;
          case(1):
            oldPane.setAttribute("style", "-webkit-transform: rotateZ(360deg); transform: rotateZ(360deg); opacity: 0; transition: transform " + fadeTime + "s, opacity "+ fadeTime +"s linear;");
            setTimeout(()=>{
              oldPane.setAttribute("style", "display: none; -webkit-transform: rotateY(0deg); transform: rotateY(0deg);");
              newPane.setAttribute("style", "display: initial; visibility: hidden; -webkit-transform: rotateZ(180deg); transform: rotateZ(180deg); opacity: 0;");
              setTimeout(()=>{
                newPane.setAttribute("style", "visibility: visible; -webkit-transform: rotateZ(0deg); transform: rotateZ(0deg); opacity: 1; transition: transform " + fadeTime/2 + "s, opacity " + fadeTime + "s linear;");
              }, (fadeTime * 25));
            }, (fadeTime * 1000));
            break;
          case(2):
            oldPane.setAttribute("style", "-webkit-transform: rotateX(270deg); transform: rotateX(270deg); transition: transform " + fadeTime + "s linear;");
            setTimeout(()=>{
              oldPane.setAttribute("style", "display: none; -webkit-transform: rotateX(0deg); transform: rotateX(0deg);");
              newPane.setAttribute("style", "display: initial; visibility: hidden; -webkit-transform: rotateX(900deg); transform: rotateX(90deg);");
              setTimeout(()=>{
                newPane.setAttribute("style", "visibility: visible; -webkit-transform: rotateX(0deg); transform: rotateX(0deg); transition: transform " + fadeTime/2 + "s linear;");
              }, (fadeTime * 25));
            }, (fadeTime * 1000));
            break;
          default:
          oldPane.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + fadeTime + "s, opacity " + fadeTime + "s linear;");
          //newPane.setAttribute("style", "visibility: hidden; opacity: 0; display: initial;");
          setTimeout(()=>{
            oldPane.setAttribute("style", "display:none;");
            newPane.setAttribute("style", "display: initial; visibility: hidden; opacity: 0;");
            setTimeout(()=>{
              newPane.setAttribute("style", "display: initial; visibility: visible; opacity: 1; transition: opacity " + fadeTime/2 + "s linear;");
            }, (fadeTime * 25));

          }, (fadeTime * 1000));
        }


      }

      function verbalizeTimeblock(blockID) {
        let idValue = parseInt(blockID);
        if (blockID) {
          $http.get(`/timeblocks/${idValue}`)
          .then(timeData=>{
            let time = timeData.data;
            let userNotes = time.user_notes;
            let location = time.location;
            $http.get(`/blocktypes/${time.block_type}`)
            .then(blockData=>{
              let block = blockData.data;
              let speakString = block.type;
              if ((location !== null) && (location !== '')) {
                speakString += ' at ' + location;
              }
              if ((userNotes !== null) && (userNotes !== '')) {
                speakString += '. ' + userNotes;
              }
              spokenOutput(speakString);
            });
          });
        }
      }

      function addTaskToDay() {
        let taskEntryForm = document.getElementById('taskEntryForm');
        let addTaskButton = document.getElementById('addTaskButton');
        let taskEntryCancelButton = document.getElementById('taskEntryCancelButton');
        let taskSubmitButton = document.getElementById('taskSubmitButton');
        let enterTaskName = document.getElementById('enterTaskName');
        let taskEntryErrorField = document.getElementById('taskEntryErrorField');
        let enterTaskInfos = document.getElementById('enterTaskInfos');
        let enterTaskDate = document.getElementById('enterTaskDate');
        let days = 0;

        taskEntryForm.setAttribute("style", "display: initial;");
        addTaskButton.setAttribute("style", "display: none;");


        taskEntryCancelButton.addEventListener('click', ()=>{

          taskEntryErrorField.innerHTML = '';
          enterTaskName.value = '';
          enterTaskInfos.value = '';
          enterTaskDate.value = '';
          taskEntryForm.setAttribute("style", "display: none;");
          addTaskButton.setAttribute("style", "display: initial; position: relative; display: block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after {content: \"\"; position: absolute; z-index: -5; transition: all 250ms ease-out;}");
          taskEntryCancelButton.removeEventListener('click', ()=>{
            console.log('tidy');
          });
          taskSubmitButton.removeEventListener('click', ()=>{
            console.log('tidy');
          });
        });
        taskSubmitButton.addEventListener('click', ()=>{
          let newTaskSubmission = {};
          if (enterTaskName.value === '') {
            taskEntryErrorField.innerHTML = 'Please enter Task Name';
          } else {
            newTaskSubmission.name = enterTaskName.value;
            newTaskSubmission.user_notes = enterTaskInfos.value;
            if (enterTaskDate.value === '') {
              taskEntryErrorField.innerHTML = 'Please enter Due Date';
            } else {
              taskEntryErrorField.innerHTML = '';
              newTaskSubmission.due_date = new Date(enterTaskDate.value + 'T13:44:00.000Z');
              newTaskSubmission.is_completed = false;
              newTaskSubmission.user_id = currentUserId;
              newTaskSubmission.completed_date = null;
              $http.post('/tasks', newTaskSubmission)
              .then(addedTaskData=>{
                let addedTask = addedTaskData.data[0];
                addedTask.clean_date = getCleanDate(addedTask.due_date);
                switch(getBillTense(viewDate, addedTask.due_date)) {
                  case ('past'):
                    days = getOverdueStatus(viewDate, addedTask.due_date);
                    if (days === 1) {
                      addedTask.due_state = ' was due yesterday.';
                    } else {
                      addedTask.due_state = ' is ' + days + '  days overdue!';
                    }
                    break;
                  case ('present'):

                    addedTask.due_state = ' is DUE today!';
                    break;
                  case ('future'):
                    days = getFutureDueDate(viewDate, addedTask.due_date);
                    if (days === 1) {
                      addedTask.due_state = ' is due tomorrow.';
                    } else {
                      addedTask.due_state = ' is due in ' + days + ' days.';
                    }
                    break;
                  default:
                    console.log('non-standard state');
                }
                vm.tasks.push(addedTask);
                taskEntryErrorField.innerHTML = '';
                enterTaskName.value = '';
                enterTaskInfos.value = '';
                enterTaskDate.value = '';
                taskEntryForm.setAttribute("style", "display: none;");
                addTaskButton.setAttribute("style", "display: initial; position: relative; display: block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after {content: \"\"; position: absolute; z-index: -5; transition: all 250ms ease-out;}");
                taskEntryCancelButton.removeEventListener('click', ()=>{
                  console.log('tidy');
                });
                taskSubmitButton.removeEventListener('click', ()=>{
                  console.log('tidy');
                });
              });
            }
          }


        });
      }

      function taskInfo(taskID) {

        $http.get(`/tasks/${taskID}`)
        .then(taskData=>{
          let task = taskData.data;
          let taskInfoPane = document.getElementById(task.id + task.name);
          let infoButton = document.getElementById(task.name + task.id + task.name + task.id + task.name);
          let exitButton = document.getElementById(task.name + task.name +task.id);
          let taskEditForm = document.getElementById(task.name + task.id + task.name + task.name);
          let taskEditButton = document.getElementById(task.name + task.id + task.name);
          let taskPatchSubmit = document.getElementById(task.id + task.name + task.id + task.name + task.user_id + task.name);
          let taskEditName = document.getElementById(task.user_id + task.name + task.id);
          let taskEditUserNotes = document.getElementById(task.name + task.user_id + task.name + task.id);
          let taskEditDate = document.getElementById(task.id +task.name + task.id + task.name +task.name + task.name + task.id);
          let days = 0;
          let errorField = document.getElementById(task.name + task.user_id + task.name + task.id + task.name + task.id);
          taskInfoPane.setAttribute("style", "display: initial;");
          infoButton.setAttribute("style", "display: none;");
          taskEditForm.setAttribute("style", "display: none;");
          errorField.setAttribute("style", "font-family: 'Alike Angular', serif; color: #ff0000; font-size: 18px; margin-left: 3em;");


          exitButton.addEventListener('click', ()=>{
            taskInfoPane.setAttribute("style", "display: none;");
            infoButton.setAttribute("style", "display: initial; position: relative; display: block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after {content: \"\"; position: absolute; z-index: -5; transition: all 250ms ease-out;}");
            taskEditButton.setAttribute("style", "display: initial; position: relative; display: block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after {content: \"\"; position: absolute; z-index: -5; transition: all 250ms ease-out;}");
            taskEditName.value = '';
            taskEditUserNotes.value = '';
            taskEditDate.value = '';
            errorField.innerHTML = '';
            exitButton.removeEventListener('click', ()=>{
              console.log('tidy');
            });
            taskEditButton.removeEventListener('click', ()=>{
              console.log('tidy');
            });
            taskPatchSubmit.removeEventListener('click', ()=>{
              console.log('tidy');
            });
          });
          taskEditButton.addEventListener('click', ()=>{
            taskEditForm.setAttribute("style", "display: intial;");
            taskEditButton.setAttribute("style", "display: none;");
          });
          taskPatchSubmit.addEventListener('click', ()=>{
            let taskPatcher = {};
            if (taskEditName.value.length < 1) {
              taskPatcher.name = task.name;
            } else {
              taskPatcher.name = taskEditName.value;
            }
            if (taskEditUserNotes.value.length < 1) {
              taskPatcher.user_notes = task.user_notes;
            } else {
              taskPatcher.user_notes = taskEditUserNotes.value;
            }
            if (taskEditDate.value !== '') {
              taskPatcher.due_date = new Date(taskEditDate.value + 'T13:44:00.000Z');
            } else {
              taskPatcher.due_date = task.due_date;
            }
            if ((taskEditName.value.length < 1) && (taskEditUserNotes.value.length < 1) && (taskEditDate.value.length !== '')) {
              errorField.innerHTML = 'Please Enter Task Data';
            } else {
              $http.patch(`/tasks/${taskID}`, taskPatcher)
              .then(patchedTaskData=>{
                let patchedTask = patchedTaskData.data;
                errorField.innerHTML = '';
                //TODO update the vm.tasks entry to reflect patched data;
                for (let i = 0; i < vm.tasks.length; i++) {
                  if (vm.tasks[i].id === patchedTask.id) {
                    vm.tasks[i].name = patchedTask.name;
                    vm.tasks[i].user_notes = patchedTask.user_notes;
                    vm.tasks[i].due_date = patchedTask.due_date;
                    vm.tasks[i].clean_date = getCleanDate(patchedTask.due_date);
                    switch(getBillTense(viewDate, patchedTask.due_date)) {
                      case ('past'):
                        days = getOverdueStatus(viewDate, patchedTask.due_date);
                        if (days === 1) {
                          vm.tasks[i].due_state = ' was due yesterday.';
                        } else {
                          vm.tasks[i].due_state = ' is ' + days + '  days overdue!';
                        }
                        break;
                      case ('present'):

                        vm.tasks[i].due_state = ' is DUE today!';
                        break;
                      case ('future'):
                        days = getFutureDueDate(viewDate, patchedTask.due_date);
                        if (days === 1) {
                          vm.tasks[i].due_state = ' is due tomorrow.';
                        } else {
                          vm.tasks[i].due_state = ' is due in ' + days + ' days.';
                        }
                        break;
                      default:
                        console.log('non-standard state');
                    }
                  }
                }


                taskInfoPane.setAttribute("style", "display: none;");
                infoButton.setAttribute("style", "display: initial; position: relative; display: block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after {content: \"\"; position: absolute; z-index: -5; transition: all 250ms ease-out;}");
                taskEditButton.setAttribute("style", "display: initial; position: relative; display: block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after {content: \"\"; position: absolute; z-index: -5; transition: all 250ms ease-out;}");
                taskEditName.value = '';
                taskEditUserNotes.value = '';
                taskEditDate.value = '';
                exitButton.removeEventListener('click', ()=>{
                  console.log('tidy');
                });
                taskEditButton.removeEventListener('click', ()=>{
                  console.log('tidy');
                });
                taskPatchSubmit.removeEventListener('click', ()=>{
                  console.log('tidy');
                });
              });
            }
          });
        });

      }

      function taskCompletedButton(taskID) {

        let taskCompletion = {};
        let doneDate = new Date();
        taskCompletion.is_completed = true;
        taskCompletion.completed_date = doneDate;
        $http.get(`/tasks/${taskID}`)
        .then(completedTaskData=>{
          let completedTask = completedTaskData.data;
          let taskDisplay = document.getElementById(completedTask.name + completedTask.id);
          $http.patch(`/tasks/${taskID}`, taskCompletion)
          .then(taskData=>{
            let task = taskData.data;
            taskDisplay.parentNode.removeChild(taskDisplay);
          });
        });
      }

      function addBillToDay() {
        let addBillButton = document.getElementById('addBillButton');
        let billEntryForm = document.getElementById('billEntryForm');
        let billEntryErrorField = document.getElementById('billEntryErrorField');
        let billEntryCancelButton = document.getElementById('billEntryCancelButton');
        let billSubmitButton = document.getElementById('billSubmitButton');
        let enterBillName = document.getElementById('enterBillName');
        let enterAmountDue = document.getElementById('enterAmountDue');
        let enterDueDate = document.getElementById('enterDueDate');
        let enterBalance = document.getElementById('enterBalance');
        let enterDebtHolder = document.getElementById('enterDebtHolder');
        let enterBillAddressLine1 = document.getElementById('enterBillAddressLine1');
        let enterBillAddressLine2 = document.getElementById('enterBillAddressLine2');
        let enterBillAddressCity = document.getElementById('enterBillAddressCity');
        let enterBillAddressState = document.getElementById('enterBillAddressState');
        let enterBillAddressZip = document.getElementById('enterBillAddressZip');

        addBillButton.setAttribute("style", "display: none;");
        billEntryForm.setAttribute("style", "display: initial;");

        billSubmitButton.addEventListener('click', ()=>{
          let billSubmit = {};
          if (enterBillName.value) {
            billSubmit.name = enterBillName.value;
            if (enterAmountDue.value) {
              billSubmit.amount_due = enterAmountDue.value;
              if (enterDueDate.value) {
                billSubmit.due_date = new Date(enterDueDate.value + 'T13:44:00.000Z');
                billSubmit.clean_date = getCleanDate(enterDueDate.value);
                billEntryErrorField.innerHTML = '';
                if (enterBalance.value) {
                  billSubmit.balance = enterBalance.value;
                }
                if (enterDebtHolder.value) {
                  billSubmit.pay_to = enterDebtHolder.value;
                }
                if (enterBillAddressLine1.value) {
                  billSubmit.address_line1 = enterBillAddressLine1.value;
                }
                if (enterBillAddressLine2.value) {
                  billSubmit.address_line2 = enterBillAddressLine2.value;

                }
                if (enterBillAddressCity.value) {
                  billSubmit.city = enterBillAddressCity.value;
                }
                if (enterBillAddressState.value) {
                  billSubmit.state = enterBillAddressState.value;
                }
                if (enterBillAddressZip.value) {
                  billSubmit.zip = enterBillAddressZip.value;
                }
                billSubmit.is_paid = false;
                billSubmit.amount_paid = 0.00;
                billSubmit.user_id = currentUserId;
                $http.post('/bills', billSubmit)
                .then(newBillData=>{
                  let newBill = newBillData.data;
                  newBill[0].clean_date = billSubmit.clean_date;
                  switch(getBillTense(viewDate, newBill.due_date)) {
                    case ('past'):

                      if (days === 1) {
                        newBill[0].due_state = ' was due yesterday.';
                      } else {
                        newBill[0].due_state = ' is ' + days + '  days overdue!';
                      }
                      break;
                    case ('present'):

                      newBill[0].due_state = ' is DUE today!';
                      break;
                    case ('future'):
                      days = getFutureDueDate(viewDate, newBill[0].due_date);
                      if (days === 1) {
                        newBill[0].due_state = ' is due tomorrow.';
                      } else {
                        newBill[0].due_state = ' is due in ' + days + ' days.';
                      }
                      break;
                    default:
                      console.log('non-standard state');
                  }
                  vm.bills.push(newBill[0]);

                  billEntryForm.setAttribute("style", "display: none;");
                  billEntryErrorField.innerHTML = '';
                  addBillButton.setAttribute("style", "display: initial; position: relative; display: block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after {content: \"\"; position: absolute; z-index: -5; transition: all 250ms ease-out;}");
                  enterBillName.value = '';
                  enterAmountDue.value = '';
                  enterDueDate.value = '';
                  enterBalance.value = '';
                  enterDebtHolder.value = '';
                  enterBillAddressLine1.value = '';
                  enterBillAddressLine2.value = '';
                  enterBillAddressCity.value = '';
                  enterBillAddressState.value = '';
                  enterBillAddressZip.value = '';
                  billEntryErrorField.value = '';

                  billEntryCancelButton.removeEventListener('click', ()=>{
                    console.log('tidy');
                  });
                  billSubmitButton.removeEventListener('click', ()=>{
                    console.log('tidy');
                  });
                });

              } else {
                billEntryErrorField.innerHTML = 'Please enter a due date';
              }
            } else {
              billEntryErrorField.innerHTML = 'Please enter amount due';
            }
          } else {
            billEntryErrorField.innerHTML = 'Please enter bill name';
          }

        });

        billEntryCancelButton.addEventListener('click', ()=>{
          billEntryForm.setAttribute("style", "display: none;");
          billEntryErrorField.innerHTML = '';
          addBillButton.setAttribute("style", "display: initial; position: relative; display: block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after {content: \"\"; position: absolute; z-index: -5; transition: all 250ms ease-out;}");

          billEntryCancelButton.removeEventListener('click', ()=>{
            console.log('tidy');
          });
          billSubmitButton.removeEventListener('click', ()=>{
            console.log('tidy');
          });
        });
      }

      function billInfo(billId) {
        $http.get(`/bills/${billId}`)
        .then(theBillData=>{
          let theBill = theBillData.data;
          let infoButton = document.getElementById(theBill.name + theBill.id + theBill.name + theBill.id +theBill.name);
          let infoDiv = document.getElementById(theBill.name + theBill.id + theBill.name + theBill.id);
          let exitButton = document.getElementById(theBill.id + theBill.name + theBill.name + theBill.name);


          infoDiv.setAttribute("style", "display: initial;");
          infoButton.setAttribute("style", "display: none;");
          exitButton.addEventListener('click', ()=>{
            infoDiv.setAttribute("style", "display: none;");
            infoButton.setAttribute("style", "display: initial; position: relative; display: block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after {content: \"\"; position: absolute; z-index: -5; transition: all 250ms ease-out;}");
            exitButton.removeEventListener('click', ()=>{
              console.log('removed event listener');
            });
          });
        });
      }

      function payBillButton(billId) {
        console.log(billId);
        $http.get(`/bills/${billId}`)
        .then(theBillData=>{
          let theBill = theBillData.data;
          let paymentAmount = document.getElementById(theBill.user_id + theBill.name + theBill.id);
          let firstPayButton = document.getElementById(theBill.name + theBill.user_id + theBill.id);
          let paidPalDiv = document.getElementById(theBill.id + theBill.name);
          let secondPayButton = document.getElementById(theBill.name + theBill.id + theBill.name);
          let cancelKey = document.getElementById(theBill.name + theBill.name + theBill.id);
          firstPayButton.setAttribute("style", "display:none;");
          paidPalDiv.setAttribute("style", "display: initial;");
          paymentAmount.value = theBill.amount_due;
          paymentAmount.setAttribute("style", "margin-left: 4em; width: 40%;");
          cancelKey.addEventListener('click', ()=>{
            firstPayButton.setAttribute("style", "display: initial; position: relative; display: block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after {content: \"\"; position: absolute; z-index: -5; transition: all 250ms ease-out;}");
            paidPalDiv.setAttribute("style", "display: none; align-self: center;");
            cancelKey.removeEventListener('click', ()=>{
              console.log('don\'t really need event listener here');
              secondPayButton.removeEventListener('click', ()=>{
                console.log('safety');
              });
            });
          });
          secondPayButton.addEventListener('click', ()=>{
            let patchObject = {};
            patchObject.amount_paid = paymentAmount.value;
            patchObject.is_paid = true;
            patchObject.date_paid = new Date();
            $http.patch(`/bills/${billId}`, patchObject)
            .then(data=>{
              let patchedBill = data.data;
              let paidBillField = document.getElementById(theBill.name + theBill.id);
              paidPalDiv.setAttribute("style", "display: none;");
              paidBillField.parentNode.removeChild(paidBillField);
            });

            cancelKey.removeEventListener('click', ()=>{
              console.log('tidy');
            });
          });
        });
      }

      function editOccasion (occasionID) {
        let editOccasionName = document.getElementById('editOccasionName');
        let addOccasionButton = document.getElementById('addOccasionButton');
        let occasionsList = document.getElementById('occasionsList');
        let editDeleteOccasion = document.getElementById('editDeleteOccasion');
        let deleteOccasionButton = document.getElementById('deleteOccasionButton');
        let editOccasionButton = document.getElementById('editOccasionButton');

        editOccasionName.value = '';
        addOccasionButton.setAttribute("style", "display: none;");
        occasionsList.setAttribute("style", "display: none;");
        editDeleteOccasion.setAttribute("style", "display: initial;");
        $http.get(`/occasions/${occasionID}`)
        .then(editData=>{
          let edit = editData.data;
          let listItem = document.getElementById(edit.name + edit.id);
          editOccasionName.value = edit.name;

          deleteOccasionButton.addEventListener('click', ()=>{
            $http.delete(`/occasions/${occasionID}`)
            .then(deletedData=>{
              let deleted = deletedData.data;

              listItem.parentNode.removeChild(listItem);

              addOccasionButton.setAttribute("style", "display: initial;");
              occasionsList.setAttribute("style", "display: initial;");
              editDeleteOccasion.setAttribute("style", "display: none;");
              deleteOccasionButton.removeEventListener('click', ()=>{
              });
              editOccasionButton.removeEventListener('click', ()=>{
              });



            });
          });

          editOccasionButton.addEventListener('click', ()=>{
            let patchObject = {};
            let patchedDisplay = document.getElementById(edit.name + edit.id);
            patchObject.name = editOccasionName.value;
            $http.patch(`/occasions/${occasionID}`, patchObject)
            .then(patchedData=>{
              let patched = patchedData.data;
              patchedDisplay.innerHTML = '-' + patched.name;

            });
            addOccasionButton.setAttribute("style", "display: initial;");
            occasionsList.setAttribute("style", "display: initial;");
            editDeleteOccasion.setAttribute("style", "display: none;");
            editOccasionButton.removeEventListener('click', ()=>{
              console.log('removed');
            });
            deleteOccasionButton.removeEventListener('click', ()=>{
              console.log('removed');
            });
            editOccasionName.value = '';
          });

        });
      }

      function submitOccasionToDay () {

        let yyyy = viewDate.getFullYear();
        let mm = viewDate.getMonth() + 1;
        if (mm < 10) {
          mm = '0' + mm;
        }
        let dd = viewDate.getDate();
        if (dd < 10) {
          dd = '0' + dd;
        }
        let addOccasionButton = document.getElementById('addOccasionButton');
        let addNewOccasion = document.getElementById('addNewOccasion');
        let newOccasionsName = document.getElementById('newOccasionsName');
        let isAnnualOccasion = document.getElementById('isAnnualOccasion');
        let occasionEntryName = newOccasionsName.value;
        newOccasionsName.value = null;
        newOccasionsName.placeholder = 'occasion';
        if (occasionEntryName.length > 0) {
          let occasionObject = {};
          let addDate = new Date(yyyy + '-' + mm + '-' + dd + 'T00:54:02.315Z');
          occasionObject.user_id = currentUserId;
          occasionObject.name = occasionEntryName;
          occasionObject.day_of = addDate;
          occasionObject.is_annual = isAnnualOccasion.checked;
          //vm.occasions.push(occasionObject);
          $http.post('/occasions', occasionObject)
          .then(ocData=>{
            let oc = ocData.data;
            vm.occasions.push(oc[0]);
          });
        }



        addOccasionButton.setAttribute("style", "display: initial;");
        addNewOccasion.setAttribute("style", "display: none;");
      }

      function addOccasionToDay () {
        let addOccasionButton = document.getElementById('addOccasionButton');
        let addNewOccasion = document.getElementById('addNewOccasion');

        addOccasionButton.setAttribute("style", "display: none;");
        addNewOccasion.setAttribute("style", "display: initial;");
      }

      function gotoWeek() {
        dayClock = false;
        let navDay = new Date(viewDate);
        if (navDay.getDay() !== 1) {
          while(navDay.getDay() !==1) {
            navDay.setDate(navDay.getDate()-1);
          }
        }
        let idString = 'user=' + currentUserId + '&weekof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        dayClock = false;
        window.clearInterval(setClockDay);
        $state.go('weekview', {id: idString});
      }

      function previousDay() {
        let navDay = new Date(viewDate);
        navDay.setDate(navDay.getDate()-1);
        let idString = 'user=' + currentUserId + '&dayof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        dayClock = false;
        window.clearInterval(setClockDay);
        $state.go('dayview', {id: idString});

      }

      function nextDay() {
        let navDay = new Date(viewDate);
        navDay.setDate(navDay.getDate() + 1);
        let idString = 'user=' + currentUserId + '&dayof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        dayClock = false;
        window.clearInterval(setClockDay);
        $state.go('dayview', {id: idString});
      }

      function gotoToday() {
        let navDay = new Date();
        navDay.setDate(navDay.getDate());
        let idString = 'user=' + currentUserId + '&dayof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        dayClock = false;
        window.clearInterval(setClockDay);
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

      function getH168Year(parseInput) {

        return(parseInt(parseInput.slice(0, 4)));
      }

      function getH168Month(parseInput) {
        let position = 5;
        let monthAsString = '';

        while ((parseInput[position] !== '-') && (position < parseInput.length)) {
          monthAsString = monthAsString + parseInput[position];
          ++position;
        }

        return(parseInt(monthAsString));
      }

      function getH168Day(parseInput) {
        let position = 5;
        let dayAsString = '';

        while ((parseInput[position] !== '-') && (position < parseInput.length)) {
          ++position;
        }
        ++position;
        for (let i = position; i < parseInput.length; i++) {
          dayAsString = dayAsString + parseInput[i];
        }

        return(parseInt(dayAsString));
      }

      function getDateViewFromParams(parseThis) {
        let displayDate;
        let passedDateString = '';
        let dateParamInput = '';
        let position = parseThis.indexOf('dayof=');
        position += 6;
        for (let i = position; i < parseThis.length; i++) {
          passedDateString = passedDateString + parseThis[i];
        }
        year = getH168Year(passedDateString);
        month = getH168Month(passedDateString);
        day = getH168Day(passedDateString);

        dateParamInput = year + '-';
        if (month < 10) {
          dateParamInput = dateParamInput + '0' + month + '-';
        } else {
          dateParamInput = dateParamInput + month + '-';
        }
        if (day < 10) {
          dateParamInput = dateParamInput + '0' + day;
        } else {
          dateParamInput = dateParamInput + day;
        }
        displayDate = new Date(dateParamInput + 'T13:44:00.000Z');
        //displayDate.setDate(displayDate.getDate() + 1);
        return(displayDate);
      }

      function getTense(checkDate) {
        let whatTense = '';
        let today = new Date();

        if (checkDate.getFullYear() > today.getFullYear()) {
          whatTense = 'future';
        } else if (checkDate.getFullYear() < today.getFullYear()) {
          whatTense = 'past';
        } else {

          if (checkDate.getMonth() > today.getMonth()) {
            whatTense = 'future';
          } else if (checkDate.getMonth() < today.getMonth()) {
            whatTense = 'past';
          } else {
            if (checkDate.getDate() > today.getDate()) {
              whatTense = 'future';
            } else if (checkDate.getDate() < today.getDate()) {
              whatTense = 'past';
            } else {
              whatTense = 'present';
            }
          }
        }
        return(whatTense);
      }

      function getCurrentTimePosition() {
        let position = 0;
        let timer = new Date();

        let nowHour = timer.getHours();
        if (nowHour < 0) {
          nowHour = 24 - nowHour;
        }
        let nowMinute = timer.getMinutes();

        if (nowMinute < 30) {
          position = nowHour * 2;
        } else {
          position = (nowHour * 2) + 1;
        }



        return(position);
      }

      function pulseThePresent(currentTimePoint) {
        if (getTense(viewDate) !== 'present') {
          return;
        }
        let element = document.getElementById(hours[currentTimePoint]);
        if (currentTimePoint !== getCurrentTimePosition()) {

          element.setAttribute("style", "color: #bb9933; filter: hue-rotate(0deg);");
          if (currentTimePoint !== (hours.length - 1)) {
            pulseThePresent((currentTimePoint + 1));
          }
        } else {
          setTimeout(()=>{
            if (element) {
              element.setAttribute("style", "color: #ff0000; filter: hue-rotate(180deg); transition: filter 2s linear;");
              setTimeout(() => {
                element.setAttribute("style", "color: #ff0000; filter: hue-rotate(0deg); transition: filter 2s linear;");
                pulseThePresent(currentTimePoint);
              }, 2000)
            }
          }, 2000);
        }
      }

      function getClockString(hundredthsOfASeconds) {
        let clockString = '';
        let minuteString = '';
        let secondString = '';
        let hundredthSecondString = '';
        let minute = Math.floor(hundredthsOfASeconds/6000);
        let seconds = Math.floor((hundredthsOfASeconds - (minute * 6000))/100);
        let hundreths = (hundredthsOfASeconds - (minute * 6000) - (seconds * 100));
        minuteString = minute.toString();
        if (seconds < 10) {
          secondString = '0' + seconds.toString();
        } else {
          secondString = seconds.toString();
        }
        if (hundreths < 10) {
          hundredthSecondString = '0' + hundreths.toString();
        } else {
          hundredthSecondString = hundreths.toString();
        }
        clockString = minuteString + ':' + secondString + '.' + hundredthSecondString;




        return(clockString);
      }

      function pomoHandler() {
        let pomoTimerSetting = document.getElementById('pomoTimerSetting');
        let pomoNext = document.getElementById('pomoNext');
        let decreasePomoInterval = document.getElementById('decreasePomoInterval');
        let setPomoInterval = document.getElementById('setPomoInterval');
        let increasePomoInterval = document.getElementById('increasePomoInterval');
        let pomoPrevious = document.getElementById('pomoPrevious');
        let pomoBreakSetting = document.getElementById('pomoBreakSetting');
        let setBreakInterval = document.getElementById('setBreakInterval');
        let numberOfPomos = document.getElementById('numberOfPomos');
        let decreaseBreakInterval = document.getElementById('decreaseBreakInterval');
        let increaseBreakInterval = document.getElementById('increaseBreakInterval');
        let pomoCountdown = document.getElementById('pomoCountdown');
        let decreaseNumberOfPomos = document.getElementById('decreaseNumberOfPomos');
        let increaseNumberOfPomos = document.getElementById('increaseNumberOfPomos');
        let setNumberOfPomos = document.getElementById('setNumberOfPomos');
        let countdownClock = document.getElementById('countdownClock');
        let countdownPause = document.getElementById('countdownPause');
        let countdownResume = document.getElementById('countdownResume');
        let cancelPomo = document.getElementById('cancelPomo');
        let countdownStart = document.getElementById('countdownStart');
        let pomoFocusCounter = document.getElementById('pomoFocusCounter');


        pomoCountdown.setAttribute("style", "display:none;");
        countdownPause.setAttribute("style", "display: none;");
        countdownResume.setAttribute("style", "display: none;");
        cancelPomo.setAttribute("style", "display: none;");

        setPomoInterval.innerHTML = pomoInterval;
        setBreakInterval.innerHTML = pomoBreakInterval;
        setNumberOfPomos.innerHTML = numberOfPomo;
        countdownClock.innerHTML = getClockString(pomoInterval * 6000);


        countdownStart.addEventListener('click', ()=>{
          let paused = false;
          let cancelled = false;
          let pomoSequencer = [];
          let timerValue = pomoInterval * 6000;
          let breakTimerValue = pomoBreakInterval * 6000;
          let sequenceIndex = 0;
          let pomoStep = 1;

          countdownStart.setAttribute("style", "display: none;");
          countdownPause.setAttribute("style", "display: initial;");
          pomoPrevious.setAttribute("style", "display: none;");

          for (let i = 0; i < numberOfPomo; i++) {
            pomoSequencer[sequenceIndex] = {};
            pomoSequencer[sequenceIndex].interval = 'Focus: ';
            pomoSequencer[sequenceIndex].pomo = pomoStep;
            pomoSequencer[sequenceIndex].timer = timerValue;
            if (pomoStep !== numberOfPomo) {
              ++sequenceIndex;
              pomoSequencer[sequenceIndex] = {};
              pomoSequencer[sequenceIndex].interval = 'Break: ';
              pomoSequencer[sequenceIndex].pomo = pomoStep;
              pomoSequencer[sequenceIndex].timer = breakTimerValue;
              ++pomoStep;
            }
            ++sequenceIndex;
          }

          function runTheTimer(sequence, time) {
            if (cancelled) {
              runTheTimer([]);
              return;
            }
            if (sequence.length < 1) {
              spokenOutput('Pomodoro sequence completed.');
              countdownClock.setAttribute("style", "color: #000000;");
              countdownClock.innerHTML = '0:00.00';
              pomoFocusCounter.innerHTML = 'Completed';
              countdownPause.setAttribute("style", "display: none;");
              cancelPomo.setAttribute("style", "display: initial;");
              cancelPomo.innerHTML = 'Done';
              return;
            }
            if ((sequence[0].interval === 'Focus: ') && (sequence[0].timer === timerValue)) {
              //Start of sequence, reset display values
              countdownClock.setAttribute("style", "color: #000000;");
              pomoFocusCounter.innerHTML = sequence[0].interval + sequence[0].pomo;
              sequence[0].timeStamp = new Date(time);
              spokenOutput('Focus now.');
            }
            if ((sequence[0].interval === 'Break: ') && (sequence[0].timer === breakTimerValue)) {
              //Start of Sequence, reset display values
              countdownClock.setAttribute("style", "color: #000000;");
              pomoFocusCounter.innerHTML = sequence[0].interval + sequence[0].pomo;
              sequence[0].timeStamp = new Date(time);
              spokenOutput('Break time.');
            }
            countdownClock.innerHTML = getClockString(sequence[0].timer);
            if (sequence[0].timer === 1000) {
              countdownClock.setAttribute("style", "color: #ff0000;");
              spokenOutput('Ten seconds remaining.');
            }
            if (sequence[0].timer === 500) {
              spokenOutput('Five.');
            }
            if (sequence[0].timer === 400) {
              spokenOutput('Four.');
            }
            if (sequence[0].timer === 300) {
              spokenOutput('Three.');
            }
            if (sequence[0].timer === 200) {
              spokenOutput('Two.');
            }
            if (sequence[0].timer === 100) {
              spokenOutput('One... and ');
            }
            if (!paused) {
              let current = new Date();
              let stamp = new Date(sequence[0].timeStamp);
              sequence[0].timeStamp = current;
              let difference = (current.getTime() - stamp.getTime());
              if (difference > 100) {
                console.log(difference);
                sequence[0].timer -= Math.floor(difference/10);
                if (sequence[0].timer < 0) {
                  runTheTimer(sequence.slice(1));
                  return;
                }
              } else {
                --sequence[0].timer;
              }
            }
            let pauserTime = new Date();
            sequence[0].timeStamp = pauserTime;
            setTimeout(()=>{
              if (sequence[0].timer === 0) {
                runTheTimer(sequence.slice(1));
              } else {
                runTheTimer(sequence);
              }
            }, 10);
          }

          let currentTime = new Date();

          runTheTimer(pomoSequencer, currentTime);



          countdownPause.addEventListener('click', ()=>{
            countdownPause.setAttribute("style", "display: none;");
            countdownResume.setAttribute("style", "display: initial;");
            cancelPomo.setAttribute("style", "display: initial;");
            paused = true;
          });
          countdownResume.addEventListener('click', ()=>{
            countdownPause.setAttribute("style", "display: initial;");
            countdownResume.setAttribute("style", "display: none;");
            cancelPomo.setAttribute("style", "display: none;");
            paused = false;
          });
          cancelPomo.addEventListener('click', ()=>{
            cancelled = true;
            pomoState = 0;
            countdownPause.setAttribute("style", "display: none;");
            countdownResume.setAttribute("style", "display: none;");
            cancelPomo.setAttribute("style", "display: none;");
            countdownStart.setAttribute("style", "display: initial;");
            cancelPomo.innerHTML = 'Cancel';
            countdownClock.innerHTML = getClockString(pomoInterval * 6000);
            pomoCountdown.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s 1s, opacity 1s linear;");
            pomoNext.setAttribute("style", "display: initial;");
            setTimeout(()=>{
              pomoCountdown.setAttribute("style", "display: none;");
              pomoTimerSetting.setAttribute("style", "display: initial;");
              pomoTimerSetting.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity 1s linear;");
            }, 1000);
          });
        });


        increaseNumberOfPomos.addEventListener('click', ()=>{
          ++numberOfPomo;
          if (numberOfPomo === 8) {
            increaseNumberOfPomos.setAttribute("style", "display: none;");
            decreaseNumberOfPomos.setAttribute("style", "display: initial;");
          } else {
            increaseNumberOfPomos.setAttribute("style", "display: initial;");
            decreaseNumberOfPomos.setAttribute("style", "display: initial;");
          }
          setNumberOfPomos.innerHTML = numberOfPomo;

        });
        decreaseNumberOfPomos.addEventListener('click', ()=>{
          --numberOfPomo;
          if (numberOfPomo === 1) {
            increaseNumberOfPomos.setAttribute("style", "display: initial;");
            decreaseNumberOfPomos.setAttribute("style", "display: none;");
          } else {
            increaseNumberOfPomos.setAttribute("style", "display: initial;");
            decreaseNumberOfPomos.setAttribute("style", "display: initial;");
          }
          setNumberOfPomos.innerHTML = numberOfPomo;
        });
        decreaseBreakInterval.addEventListener('click', ()=>{
          --pomoBreakInterval;
          if (pomoBreakInterval === 1) {
            decreaseBreakInterval.setAttribute("style", "display: none;");
            increaseBreakInterval.setAttribute("style", "display: initial;");
          } else {
            decreaseBreakInterval.setAttribute("style", "display: initial;");
            increaseBreakInterval.setAttribute("style", "display: initial;");
          }
          setBreakInterval.innerHTML = pomoBreakInterval;
        });
        increaseBreakInterval.addEventListener('click', ()=>{
          ++pomoBreakInterval;
          if (pomoBreakInterval === 15) {
            decreaseBreakInterval.setAttribute("style", "display: initial;");
            increaseBreakInterval.setAttribute("style", "display: none;");
          } else {
            decreaseBreakInterval.setAttribute("style", "display: initial;");
            increaseBreakInterval.setAttribute("style", "display: initial;");
          }
          setBreakInterval.innerHTML = pomoBreakInterval;
        });

        decreasePomoInterval.addEventListener('click', ()=>{

          --pomoInterval;
          setPomoInterval.innerHTML = pomoInterval;
          countdownClock.innerHTML = getClockString(pomoInterval * 6000);
          if (pomoInterval === 1) {
            decreasePomoInterval.setAttribute("style", "display: none;");
            increasePomoInterval.setAttribute("style", "display: initial;");
          } else {
            decreasePomoInterval.setAttribute("style", "display: initial;");
            increasePomoInterval.setAttribute("style", "display: initial;");
          }
        });
        increasePomoInterval.addEventListener('click', ()=>{

          ++pomoInterval;
          countdownClock.innerHTML = getClockString(pomoInterval * 6000);
          setPomoInterval.innerHTML = pomoInterval;
          if (pomoInterval === 60) {
            increasePomoInterval.setAttribute("style", "display: none;");
            decreasePomoInterval.setAttribute("style", "display: initial;");
          } else {
            increasePomoInterval.setAttribute("style", "display: initial;");
            decreasePomoInterval.setAttribute("style", "display: initial;");
          }
        });


        pomoNext.addEventListener('click', ()=>{
          let timer = 1;
          let currentState = pomoState;
          let newState = currentState + 1;
          if (newState === pomoStateArr.length) {
            newState = 0;
            pomoPrevious.setAttribute("style", "display: none;");
          } else {
            pomoPrevious.setAttribute("style", "display: initial;");
          }
          pomoState = newState;
          switch (pomoStateArr[currentState]) {
            case ('pomoTimerSetting'):
              pomoTimerSetting.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              setTimeout(()=>{
                pomoTimerSetting.setAttribute("style", "display: none;");
                pomoBreakSetting.setAttribute("style", "display: initial;");
                pomoBreakSetting.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
              }, (timer*1000));
              break;
            case ('pomoBreakSetting'):
              pomoBreakSetting.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              setTimeout(()=>{
                pomoBreakSetting.setAttribute("style", "display: none;");
                numberOfPomos.setAttribute("style", "display: initial;");
                numberOfPomos.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
              }, (timer*1000));
              break;
            case ('numberOfPomos'):
              numberOfPomos.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              pomoNext.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              setTimeout(()=>{
                numberOfPomos.setAttribute("style", "display: none;");
                pomoNext.setAttribute("style", "visibility: visible; display: none;");
                pomoCountdown.setAttribute("style", "display: initial;");
                pomoCountdown.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
              }, (timer*1000));
              break;
            default:
              console.log('state is not accounted for');
          }



        });
        pomoPrevious.addEventListener('click', ()=>{
          let timer = 1;
          let currentState = pomoState;
          let newState = currentState - 1;
          if (newState < 0) {
            newState = pomoStateArr.length - 1;
            pomoNext.setAttribute("style", "display: none;");
          } else {
            pomoNext.setAttribute("style", "display: initial;");
          }
          if (newState === 0) {
            pomoPrevious.setAttribute("style", "display: none;");
          } else {
            pomoPrevious.setAttribute("style", "display: initial;");
          }
          pomoState = newState;
          switch (pomoStateArr[currentState]) {
            case ('pomoTimerSetting'):
              pomoTimerSetting.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              setTimeout(()=>{
                pomoTimerSetting.setAttribute("style", "display: none;");
                numberOfPomos.setAttribute("style", "display: initial;");
                numberOfPomos.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
              }, (timer*1000));
              break;
            case ('pomoBreakSetting'):
              pomoBreakSetting.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              setTimeout(()=>{
                pomoBreakSetting.setAttribute("style", "display: none;");
                pomoTimerSetting.setAttribute("style", "display: initial;");
                pomoTimerSetting.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
              }, (timer*1000));
              break;
            case ('numberOfPomos'):
              numberOfPomos.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              setTimeout(()=>{
                numberOfPomos.setAttribute("style", "display: none;");
                pomoBreakSetting.setAttribute("style", "display: initial;");
                pomoBreakSetting.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
              }, (timer*1000));
              break;
            case ('pomoCountdown'):
              pomoCountdown.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              pomoNext.setAttribute("style", "display: initial;");
              setTimeout(()=>{
                pomoCountdown.setAttribute("style", "display: none;");
                numberOfPomos.setAttribute("style", "display: initial;");
                numberOfPomos.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
              }, (timer*1000));
              break;
            default:
              console.log('state is not accounted for');
          }



        });

      }

      function setTimeColors() {
        //Check date for past, present or future
        let tense = getTense(viewDate);
        let multiElement = document.getElementsByClassName('hour');
        let currentTimePosition = getCurrentTimePosition();
        let pomodoro = document.getElementById('pomodoro');

        if (tense === 'future') {
          pomodoro.parentNode.removeChild(pomodoro);
          for (let i = 0; i < multiElement.length; i++) {
            multiElement[i].setAttribute("style", "color: #000000;");
          }
        } else if (tense === 'past') {
          pomodoro.parentNode.removeChild(pomodoro);
          for (let j = 0; j < multiElement.length; j++) {
            multiElement[j].setAttribute("style", "color: #bb9933;");
          }
        } else {
          pomodoro.setAttribute("style", "visibility: visible;");
          pomoHandler();
          //TODO update hours using clock string
          for (let k = 0; k < currentTimePosition; k++) {
            let element = document.getElementById(hours[k]);
            element.setAttribute("style", "color: #bb9933;");
          }
          for (let l = (currentTimePosition + 1); l < hours.length - 1; l++) {
            let elementFuture = document.getElementById(hours[l]);
            elementFuture.setAttribute("style", "color: #000000;");
          }
          pulseThePresent(currentTimePosition, 0);
        }
      }

      function detectHolidays() {
        let holidayArray = [];
        $http.get(`/holidaysbyuser/${currentUserId}`)
        .then(holidayData=>{
          let holidayList = holidayData.data;
          for (let i = 0; i < holidayList.length; i++) {
            // check for exact date match
            let yyyy = parseInt(holidayList[i].day_of.slice(0,4));
            let mm = parseInt(holidayList[i].day_of.slice(5,7));
            let dd = parseInt(holidayList[i].day_of.slice(8,10));

            if ((yyyy === viewDate.getFullYear()) && (mm === (viewDate.getMonth() + 1)) && (dd === viewDate.getDate())) {
              holidayArray.push(holidayList[i]);
            } else {
              if (holidayList[i].is_annual) {

                if (((mm - 1) === viewDate.getMonth()) && (dd === viewDate.getDate())) {
                  holidayArray.push(holidayList[i]);
                }
              } else {
                // check for floating holidays
                switch (holidayList[i].name) {
                  case ('Martin Luther King Day'):
                    if ((viewDate.getMonth() === 0) && (viewDate.getDay() === 1)) {
                      if ((viewDate.getDate() > 14) && (viewDate.getDate() < 22)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Clean Out Your Computer Day'):
                    if ((viewDate.getMonth() === 1) && (viewDate.getDay() === 1)) {
                      if ((viewDate.getDate() > 7) && (viewDate.getDate() < 15)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('President\'s Day'):
                    if ((viewDate.getMonth() === 1) && (viewDate.getDay() === 1)) {
                      if ((viewDate.getDate() > 14) && (viewDate.getDate() < 22)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Father\'s Day'):
                    if ((viewDate.getMonth() === 5) && (viewDate.getDay() === 0)) {
                      if ((viewDate.getDate() > 14) && (viewDate.getDate() < 22)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Labour Day'):
                    if ((viewDate.getMonth() === 8) && (viewDate.getDay() === 1)) {
                      if (viewDate.getDate() < 8) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Mother\'s Day'):
                    if ((viewDate.getMonth() === 4) && (viewDate.getDay() === 0)) {
                      if ((viewDate.getDate() > 7) && (viewDate.getDate() < 15)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Book Lover\'s Day'):
                    if ((viewDate.getMonth() === 9) && (viewDate.getDay === 7)) {
                      if (viewDate.getDay() < 8) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Thanksgiving Day'):
                    if ((viewDate.getMonth() === 10) && (viewDate.getDay() === 4)) {
                      if ((viewDate.getDate() > 21) && (viewDate.getDate() < 29)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Black Friday'):
                    if ((viewDate.getMonth() === 10) && (viewDate.getDay() === 5)) {
                      if (((viewDate.getDate() - 1) > 21) && ((viewDate.getDate() - 1) < 29)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Cyber Monday'):
                    if (((viewDate.getMonth() === 11) || (viewDate.getMonth() === 10)) && (viewDate.getDay() === 1)) {
                      if (((viewDate.getMonth() === 10) && ((viewDate.getDate() - 4) > 21) && ((viewDate.getDate() - 4) < 29)) || (viewDate.getMonth() === 11) && ((viewDate.getDate() - 4) < -1 )) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Advent'):
                    if (viewDate.getDay() === 6) {
                      if ((viewDate.getMonth() === 10) || (viewDate.getMonth() === 11)) {
                        let xmas = new Date(viewDate.getFullYear() + '-12-25T13:44:00.000Z');
                        switch (xmas.getDay()) {
                          case (0):
                            if ((viewDate.getDate() === 3) || (viewDate.getDate() === 10) || (viewDate.getDate() === 17) || (viewDate.getDate() === 24)) {
                              holidayArray.push(holidayList[i]);
                            }
                            break;
                          case (1):
                            if ((viewDate.getDate() === 2) || (viewDate.getDate() === 9) || (viewDate.getDate() === 16) || (viewDate.getDate() === 23)) {
                              holidayArray.push(holidayList[i]);
                            }
                            break;
                          case (2):
                            if ((viewDate.getDate() === 1) ||   (viewDate.getDate() === 8) || (viewDate.getDate() === 15) || (viewDate.getDate() === 22)) {
                            holidayArray.push(holidayList[i]);
                            }
                            break;
                          case (3):
                            if ((viewDate.getDate() === 31) ||   (viewDate.getDate() === 7) || (viewDate.getDate() === 14) || (viewDate.getDate() === 21)) {
                              holidayArray.push(holidayList[i]);
                            }
                            break;
                          case (4):
                            if ((viewDate.getDate() === 30) ||   (viewDate.getDate() === 6) || (viewDate.getDate() === 13) || (viewDate.getDate() === 20)) {
                              holidayArray.push(holidayList[i]);
                            }
                            break;
                          case (5):
                            if ((viewDate.getDate() === 29) ||   (viewDate.getDate() === 5) || (viewDate.getDate() === 12) || (viewDate.getDate() === 19)) {
                              holidayArray.push(holidayList[i]);
                            }
                            break;
                          case (6):
                            if ((viewDate.getDate() === 28) ||   (viewDate.getDate() === 4) || (viewDate.getDate() === 11) || (viewDate.getDate() === 18)) {
                              holidayArray.push(holidayList[i]);
                            }
                            break;
                          default:
                          console.log('impossible situation for advent');
                        }
                      }
                    }
                    break;
                  case ('Victoria Day'):
                    if ((viewDate.getMonth() === 4) && (viewDate.getDay() === 1)) {
                      if ((viewDate.getDate() > 17) && (viewDate.getDate() < 25)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Civic Holiday (Canada)'):
                    if ((viewDate.getMonth() === 7) && (viewDate.getDay() === 1)) {
                      if (viewDate.getDate() < 8) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Indigenous Peoples\' Day'):
                    if ((viewDate.getMonth() === 8) && (viewDate.getDay() === 5)) {
                      if ((viewDate.getDate() > 21) && (viewDate.getDate() < 29)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Arbor Day'):
                    if ((viewDate.getMonth() === 3) &&(viewDate.getDay() === 5)) {
                      if (viewDate.getDate() > 23) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Canadian Thanksgiving'):
                    if ((viewDate.getMonth() === 9) && (viewDate.getDay() === 1)) {
                      if ((viewDate.getDate() > 7) && (viewDate.getDate() < 15)) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  case ('Memorial Day'):
                    if ((viewDate.getMonth() === 4) && (viewDate.getDay() === 1)) {
                      if (viewDate.getDate() > 24) {
                        holidayArray.push(holidayList[i]);
                      }
                    }
                    break;
                  default:
                    console.log('non-float holiday');
                }

              }
            }


          }
          vm.holidays = holidayArray;
          //art override_content
          vm.arts = [];
          let indexArt = 0;
          if (vm.holidays.length > 0) {
            for (let i = 0; i < vm.holidays.length; i++) {
              if (vm.holidays[i].art_override) {
                for (let j = 0; j < vm.holidays[i].override_content.img_paths.length; j++) {
                  vm.arts[indexArt] = {};
                  vm.arts[indexArt].img_path = vm.holidays[i].override_content.img_paths[j];
                  vm.arts[indexArt].artist = vm.holidays[i].override_content.artists[j];
                  vm.arts[indexArt].title = vm.holidays[i].override_content.titles[j];
                  vm.arts[indexArt].year = vm.holidays[i].override_content.years[j];
                  vm.arts[indexArt].index = indexArt;
                  ++indexArt;
                }
              }
            }
          }
          //music override_content
          vm.musics = [];
          let indexMusic = 0;
          if(vm.holidays.length > 0) {
            for (let k = 0; k < vm.holidays.length; k++) {
              if (vm.holidays[k].music_override) {
                for(let l = 0; l < vm.holidays[k].override_content.sources.length; l++) {
                  vm.musics[indexMusic] = {};
                  vm.musics[indexMusic].index = indexMusic;
                  vm.musics[indexMusic].src_string = vm.holidays[k].override_content.src_strings[l];
                  vm.musics[indexMusic].href_string = vm.holidays[k].override_content.href_strings[l];
                  vm.musics[indexMusic].a_string = vm.holidays[k].override_content.a_strings[l];
                  ++indexMusic;
                }
              }
            }
          }
          detectObservances();
        });
      }

      function detectObservances() {
        // alert('here');
        let indexArt = vm.arts.length;
        let indexMusic = vm.musics.length;
        let userTimezoneOffset = viewDate.getTimezoneOffset() * 60000;
        // console.log(userTimezoneOffset);
        vm.observances = [];
        let observancesPane = document.getElementById('observancesPane');
        $http.get(`/observancesbyuser/${currentUserId}`)
        .then(userObservancesData=>{
          let userObservances = userObservancesData.data;
          let observanceDate;
          for (let i = 0; i < userObservances.length; i++) {
            observanceDate = new Date(userObservances[i].day_of);
            // alert('here');
            observanceDate = new Date(observanceDate.getTime() + userTimezoneOffset);
            // alert(observanceDate);
            if ((viewDate.getMonth() === observanceDate.getMonth()) && (viewDate.getDate() === (observanceDate.getDate()))) {
              vm.observances.push(userObservances[i]);
            }
          }
          if (vm.observances.length < 1) {
            observancesPane.setAttribute("style", "display: none;");
          } else {
            for (let j = 0; j < vm.observances.length; j++) {
              if (vm.observances[j].art_override) {
                for (let k = 0; k < vm.observances[j].override_content.img_paths.length; k++) {
                  vm.arts[indexArt] = {};
                  vm.arts[indexArt].img_path = vm.observances[j].override_content.img_paths[k];
                  vm.arts[indexArt].artist = vm.observances[j].override_content.artists[k];
                  vm.arts[indexArt].title = vm.observances[j].override_content.titles[k];
                  vm.arts[indexArt].year = vm.observances[j].override_content.years[k];
                  vm.arts[indexArt].index = indexArt;
                  ++indexArt;
                }
              }
              if (vm.observances[j].music_override) {
                for (let l = 0; l < vm.observances[j].override_content.sources.length; l++) {
                  vm.musics[indexMusic] = {};
                  vm.musics[indexMusic].index = indexMusic;
                  vm.musics[indexMusic].src_string =  vm.observances[j].override_content.src_strings[l];
                  vm.musics[indexMusic].href_string = vm.observances[j].override_content.href_strings[l];
                  vm.musics[indexMusic].a_string = vm.observances[j].override_content.a_strings[l];
                  ++indexMusic;
                }
              }

            }
          }
          //art override content

          monthArt();
          //music override content
          monthMusic();
        });
      }

      function randomizedArray(length) {
        let arr = [];
        let rand = 0;

        for (let i = 0; i < length; i++) {
          arr[i] = i;
        }
        for (let k = 0; k < arr.length; k++) {
          for (let j = 0; j < arr.length; j++) {
            rand = Math.floor(Math.random() * arr.length);
            if (rand !== j) {
              [arr[j], arr[rand]] = [arr[rand], arr[j]];
            }
          }
        }

        return(arr);
      }

      function monthMusic() {
        let indexMusic = vm.musics.length;
        let theDate = new Date(viewDate);
        let theMonthString = '';
        let dayOfWeek = '';
        let musicPlayer = document.getElementById('musicPlayer');
        let element;
        let secondElement;
        let indiceArray = [];
        let indice = 0;
        let musicPlayerBackSelection = document.getElementById('musicPlayerBackSelection');
        let musicPlayerNextSelection = document.getElementById('musicPlayerNextSelection');
        document.getElementById('musicPlayer');

        // Sunday and Friday override the monthArt
        if ((theDate.getDay() === 0) || (theDate.getDay() === 5)) {
          let theDayString = '';
          if (theDate.getDay() === 0) {
            theDayString = 'sunday_musicsbyuser';
          } else {
            theDayString = 'friday_musicsbyuser';
          }
          $http.get(`/${theDayString}/${currentUserId}`)
          .then(specialDayMusicData=>{
            let specialDayMusic = specialDayMusicData.data;
            if (specialDayMusic.length > 5) {
              let filteredDaySelections = [];
              let rander = Math.floor(Math.random() * specialDayMusic.length);
              filteredDaySelections.push(rander);
              do {
                rander = Math.floor(Math.random() * specialDayMusic.length);
                if (filteredDaySelections.indexOf(rander) === -1) {
                  filteredDaySelections.push(rander);
                }
              } while(filteredDaySelections.length < 5);
              for (let hh = 0; hh < filteredDaySelections.length; hh++) {
                vm.musics[indexMusic] = {};
                vm.musics[indexMusic].index = indexMusic;
                vm.musics[indexMusic].src_string = specialDayMusic[filteredDaySelections[hh]].src_string;
                vm.musics[indexMusic].href_string = specialDayMusic[filteredDaySelections[hh]].href_string;
                vm.musics[indexMusic].a_string = specialDayMusic[filteredDaySelections[hh]].a_string;
                ++indexMusic;
              }
            } else {
              for (let i = 0; i < specialDayMusic.length; i++) {
                vm.musics[indexMusic] = {};
                vm.musics[indexMusic].index = indexMusic;
                vm.musics[indexMusic].src_string = specialDayMusic[i].src_string;
                vm.musics[indexMusic].href_string = specialDayMusic[i].href_string;
                vm.musics[indexMusic].a_string = specialDayMusic[i].a_string;
                ++indexMusic;
              }
            }
            while (vm.musics.length > 9) {
              vm.musics.splice((Math.floor(Math.random()) * vm.musics.length), 1);
            }
            for (let uu = 0; uu < vm.musics.length; uu++) {
              vm.musics[uu].index = uu;
            }
            vm.dailyMusics = [];
            vm.dailyMusics = vm.musics;
            setTimeout(()=>{
              if (vm.dailyMusics.length > 0) {
                indiceArray = randomizedArray(vm.dailyMusics.length);
                for (let qq = 1; qq < indiceArray.length; qq++) {
                  element = document.getElementById('musics' + indiceArray[qq]);
                  element.setAttribute("style", "display: none;");
                }
                musicPlayer.setAttribute("style", "display: initial;");
                musicPlayerBackSelection.addEventListener('click', ()=>{
                  element = document.getElementById('musics' + indiceArray[indice]);
                  if (indice === 0) {
                    indice = indiceArray.length - 1;
                  } else {
                    --indice;
                  }
                  secondElement = document.getElementById('musics' + indiceArray[indice]);
                  transitionPane(element, secondElement);
                });
                musicPlayerNextSelection.addEventListener('click', ()=>{
                  element = document.getElementById('musics' + indiceArray[indice]);
                  ++indice;
                  if (indice === indiceArray.length) {
                    indice = 0;
                  }
                  secondElement = document.getElementById('musics' + indiceArray[indice]);
                  transitionPane(element, secondElement);
                  //secondElement.children[0]["ng-src"] = vm.musics[indiceArray[indice]].src_string;
                  //secondElement.children[0].href = vm.musics[indiceArray[indice]].href_string;
                  //secondElement.children[0].contentWindow.location(vm.musics[indiceArray[indice]].href_string);
                });
              } else {
                if (vm.dailyMusics.length !== 0) {
                  musicPlayer.setAttribute("style", "display: initial;");
                }
                musicPlayerBackSelection.setAttribute("style", "display: none;");
                musicPlayerNextSelection.setAttribute("style", "display: none;");
              }
            }, (vm.dailyMusics.length * 1500));
          });
        } else {
          switch(theDate.getDay()) {
            case(1):
              dayOfWeek = 'monday';
              break;
            case(2):
              dayOfWeek = 'tuesday';
              break;
            case(3):
              dayOfWeek = 'wednesday';
              break;
            case(4):
              dayOfWeek = 'thursday';
              break;
            case(6):
              dayOfWeek = 'saturday';
              break;
            default:
              console.log('day not supported');
          }
          switch(theDate.getMonth()) {
            case(0):
              theMonthString = 'january_musicsbyuser';
              break;
            case(1):
              theMonthString = "february_musicsbyuser";
              break;
            case(2):
              theMonthString = "march_musicsbyuser";
              break;
            case(3):
              theMonthString = 'april_musicsbyuser';
              break;
            case(4):
              theMonthString = 'may_musicsbyuser';
              break;
            case(5):
              theMonthString = 'june_musicsbyuser';
              break;
            case(6):
              theMonthString = 'july_musicsbyuser';
              break;
            case(7):
              theMonthString = "august_musicsbyuser";
              break;
            case(8):
              theMonthString = 'september_musicsbyuser';
              break;
            case(9):
              theMonthString = 'october_musicsbyuser';
              break;
            case(10):
              theMonthString = 'november_musicsbyuser';
              break;
            case(11):
              theMonthString = 'december_musicsbyuser';
              break;
            default:
              console.log('month not yet supported');
          }
          if (theMonthString !== '') {
            $http.get(`/${theMonthString}/${currentUserId}`)
            .then(monthMusicData=>{
              let monthMusic = monthMusicData.data;
              //console.log(monthMusic);
              for (let pp = 0; pp < monthMusic.length; pp++) {
                if (monthMusic[pp].rule[dayOfWeek].indexOf(theDate.getDate()) !== -1) {
                  vm.musics[indexMusic] = {};
                  vm.musics[indexMusic].index = indexMusic;
                  vm.musics[indexMusic].src_string = monthMusic[pp].src_string;
                  vm.musics[indexMusic].href_string = monthMusic[pp].href_string;
                  vm.musics[indexMusic].a_string = monthMusic[pp].a_string;
                  ++indexMusic;
                }

              }
              let swap1 = 0;
              let swap2 = 0;
              let temp;
              for (let swp = 0; swp < (vm.musics.length * 2); swp++) {
                swap1 = Math.floor(Math.random() * vm.musics.length);
                swap2 = Math.floor(Math.random() * vm.musics.length);
                if (swap1 !== swap2) {
                  temp = vm.musics[swap1];
                  vm.musics[swap1] = vm.musics[swap2];
                  vm.musics[swap2] = temp;
                }
              }
              while(vm.musics.length > 9) {
                vm.musics.splice((Math.floor(Math.random() * vm.musics.length)), 1);
              }
              for (let uu = 0; uu < vm.musics.length; uu++) {
                vm.musics[uu].index = uu;
              }
              vm.dailyMusics = [];
              vm.dailyMusics = vm.musics;
              setTimeout(()=>{
                if (vm.dailyMusics.length > 0) {
                  indiceArray = randomizedArray(vm.dailyMusics.length);
                  for (let qq = 1; qq < indiceArray.length; qq++) {
                    element = document.getElementById('musics' + indiceArray[qq]);
                    if (element) {
                      element.setAttribute("style", "display: none;");
                    }
                  }
                  musicPlayer.setAttribute("style", "display: initial;");
                  musicPlayerBackSelection.addEventListener('click', ()=>{
                    element = document.getElementById('musics' + indiceArray[indice]);
                    if (indice === 0) {
                      indice = indiceArray.length - 1;
                    } else {
                      --indice;
                    }
                    secondElement = document.getElementById('musics' + indiceArray[indice]);
                    transitionPane(element, secondElement);
                  });
                  musicPlayerNextSelection.addEventListener('click', ()=>{
                    element = document.getElementById('musics' + indiceArray[indice]);
                    ++indice;
                    if (indice === indiceArray.length) {
                      indice = 0;
                    }
                    secondElement = document.getElementById('musics' + indiceArray[indice]);
                    transitionPane(element, secondElement);
                    secondElement.children[0]["ng-src"] = vm.dailyMusics[indiceArray[indice]].src_string;
                    secondElement.children[0].href = vm.dailyMusics[indiceArray[indice]].href_string;
                    secondElement.children[0].contentWindow.location(vm.dailyMusics[indiceArray[indice]].href_string);
                  });
                } else {
                  if (vm.dailyMusics.length !== 0) {
                    musicPlayer.setAttribute("style", "display: initial;");
                  }
                  musicPlayerBackSelection.setAttribute("style", "display: none;");
                  musicPlayerNextSelection.setAttribute("style", "display: none;");
                }
              }, (vm.dailyMusics.length * 1500));
            });
          } else {
            setTimeout(()=>{
              if (vm.dailyMusics.length < 1) {
                musicPlayer.setAttribute("style", "display: none;");
              } else {
                console.log(vm.dailyMusics);
              }
            }, 55);

          }
        }
      }


      function monthArt() {
        let theDate = new Date(viewDate);
        let monthTable = '';
        let theDay = '';
        let indexArt = vm.arts.length;
        let artPane = document.getElementById('artPane');
        let element;

        switch(theDate.getMonth()) {
          case(0):
            monthTable = 'january_artsbyuser';
            break;
          case(1):
            monthTable = 'february_artsbyuser';
            break;
          case(2):
            monthTable = 'march_artsbyuser';
            break;
          case(3):
            monthTable = 'april_artsbyuser';
            break;
          case(4):
            monthTable = 'may_artsbyuser';
            break;
          case(5):
            monthTable = 'june_artsbyuser';
            break;
          case(6):
            monthTable = 'july_artsbyuser';
            break;
          case(7):
            monthTable = 'august_artsbyuser';
            break;
          case(8):
            monthTable = 'september_artsbyuser';
            break;
          case(9):
            monthTable = 'october_artsbyuser';
            break;
          case(10):
            monthTable = 'november_artsbyuser';
            break;
          case(11):
            monthTable = 'december_artsbyuser';
            break;
          default:
            console.log('month art not yet supported');
        }
        switch(theDate.getDay()) {
          case(0):
            theDay = 'sunday';
            break;
          case(1):
            theDay = 'monday';
            break;
          case(2):
            theDay = 'tuesday';
            break;
          case(3):
            theDay = 'wednesday';
            break;
          case(4):
            theDay = 'thursday';
            break;
          case(5):
            theDay = 'friday';
            break;
          case(6):
            theDay = 'saturday';
            break;
          default:
            console.log('bad day value');
        }

        if (monthTable !== '') {
          $http.get(`/${monthTable}/${currentUserId}`)
          .then(monthArtData=>{
            let monthArt = monthArtData.data;
            for (let i = 0; i < monthArt.length; i++) {
              if (monthArt[i].rule[theDay].indexOf(theDate.getDate()) !== -1) {
                vm.arts[indexArt] = {};
                vm.arts[indexArt].img_path = monthArt[i].img_path;
                vm.arts[indexArt].artist = monthArt[i].artist;
                vm.arts[indexArt].title = monthArt[i].title;
                vm.arts[indexArt].year = monthArt[i].year;
                vm.arts[indexArt].index = indexArt;
                ++indexArt;
              }
            }

            if (vm.arts.length > 0) {
              let indice = 0;
              let swapa = Math.floor(Math.random() * vm.arts.length);
              let swapb = Math.floor(Math.random() * vm.arts.length);
              let temp;
              for (let ra = 0; ra < (vm.arts.length * 2); ra++) {
                swapa = Math.floor(Math.random() * vm.arts.length);
                swapb = Math.floor(Math.random() * vm.arts.length);
                if (swapa !== swapb) {
                  temp = vm.arts[swapa];
                  vm.arts[swapa] = vm.arts[swapb];
                  vm.arts[swapb] = temp;
                }
              }


              vm.dailyArts = vm.arts;


              setTimeout(()=>{
                for (let a = 0; a <vm.dailyArts.length; a++) {
                  element = document.getElementById('art' + a);
                  if (element !== null) {
                    element.setAttribute("style", "display: none;");
                  }
                }
                indice = Math.floor(Math.random() * (vm.dailyArts.length));
                element = document.getElementById('art' + indice);
                element.setAttribute("style", "display: initial;");
                artPane.setAttribute("style", "display: initial;");
              }, 10);


            }



          });

        } else {
          if (vm.arts.length > 1) {
            let indice = 0;

            //console.log(vm.arts.length);
            setTimeout(()=>{
              for (let a = 0; a <vm.arts.length; a++) {
                element = document.getElementById('art' + a);
                if (element !== null) {
                  element.setAttribute("style", "display: none;");
                }
              }
              indice = Math.floor(Math.random() * (vm.arts.length));
              element = document.getElementById('art' + indice);
              element.setAttribute("style", "display: initial;");
              artPane.setAttribute("style", "display: initial;");
            }, 10);


          }
        }


      }

      function detectOccasions () {
        let occasionArray = [];
        //let occasionsTitle = document.getElementById('occasionsTitle');
        $http.get(`/occasionsbyuser/${currentUserId}`)
        .then(occasionsListData=>{
          let occasionsList = occasionsListData.data;
          for (let i = 0; i < occasionsList.length; i++) {
            let yyyy = parseInt(occasionsList[i].day_of.slice(0,4));
            let mm = parseInt(occasionsList[i].day_of.slice(5,7));
            let dd = parseInt(occasionsList[i].day_of.slice(8,10));

            if ((parseInt(yyyy) === viewDate.getFullYear()) && (mm === (viewDate.getMonth() + 1)) && (dd === viewDate.getDate())) {
              occasionArray.push(occasionsList[i]);
            } else {
              if (occasionsList[i].is_annual) {
                if ((mm === (viewDate.getMonth() + 1)) && (dd === viewDate.getDate())) {
                  occasionArray.push(occasionsList[i]);
                }
              }
            }
          }
          // if (occasionArray.length < 1) {
          //   occasionsTitle.innerHTML = '';
          // }
          vm.occasions = occasionArray;
        });
      }

      function sameDay(date1, date2) {
        let result = true;
        let comp1 = new Date(date1);
        let comp2 = new Date(date2);
        if (comp1.getFullYear() !== comp2.getFullYear()) {
          result = false;
        }
        if (comp1.getMonth() !== comp2.getMonth()) {
          result = false;
        }
        if (comp1.getDate() !== comp2.getDate()) {
          result = false;
        }
        return(result);
      }

      function getOverdueStatus(viewingDate, due) {
        let day = new Date(viewingDate);
        let dueDay = new Date(due);
        let result = 0;
        do {
          ++result;
          day.setDate(day.getDate()-1);
        } while(!sameDay(day, dueDay));

        return(result);
      }

      function getFutureDueDate(viewingDate, due) {
        let day = new Date(viewingDate);
        let dueDay = new Date(due);
        let result = 0;
        do {
          ++result;
          day.setDate(day.getDate()+1);
        } while(!sameDay(day, dueDay));

        return(result);
      }

      function getBillTense(calendarDate, billDate) {
        let compareToDate = new Date(calendarDate);
        let billDue = new Date(billDate);
        let tense = '';
        if (compareToDate.getFullYear() !== billDue.getFullYear()) {
          if (compareToDate.getFullYear() > billDue.getFullYear()) {
            tense = 'past';
          } else {
            tense = 'future';
          }
        } else if (compareToDate.getMonth() !== billDue.getMonth()) {
          if (compareToDate.getMonth() > billDue.getMonth()) {
            tense = 'past';
          } else {
            tense = 'future';
          }
        } else if (compareToDate.getDate() !== billDue.getDate()) {
          if (compareToDate.getDate() > billDue.getDate()) {
            tense = 'past';
          } else {
            tense = 'future';
          }
        } else {
          tense = 'present';
        }
        return(tense);
      }

      function overdueFlash(elem, message) {
        if (message !== 'stop') {
          elem.setAttribute("style", "background: #ff0000; background: -webkit-linear-gradient(0deg, #ff0000, #cc9900); background: -o-linear-gradient(0deg, #ff0000, #cc9900);   background: -moz-linear-gradient(0deg, #ff0000, #cc9900); background: linear-gradient(0deg, #ff0000, #cc9900); transition: background 125ms ease;");
          setTimeout(()=>{
            elem.setAttribute("style", "background: #ee0011; background-color: -webkit-linear-gradient(45deg, #ee0011, #cc9900); background: -o-linear-gradient(45deg, #ee0011, #cc9900);   background: -moz-linear-gradient(45deg, #ee0011, #cc9900); background: linear-gradient(45deg, #ee0011, #cc9900); transition: background 125ms ease;");
            setTimeout(()=>{
              elem.setAttribute("style", "background: #dd0022; background-color: -webkit-linear-gradient(90deg, #dd0022, #cc9900); background: -o-linear-gradient(90deg, #dd0022, #cc9900);   background: -moz-linear-gradient(90deg, #dd0022, #cc9900); background: linear-gradient(90deg, #dd0022, #cc9900); transition: background 125ms ease;");
              setTimeout(()=>{
                elem.setAttribute("style", "background: #cc0033; background-color: -webkit-linear-gradient(135deg, #cc0033, #cc9900); background: -o-linear-gradient(135deg, #cc0033, #cc9900);   background: -moz-linear-gradient(135deg, #cc0033, #cc9900); background: linear-gradient(135deg, #cc0033, #cc9900); transition: background 125ms ease;");
                setTimeout(()=>{
                  elem.setAttribute("style", "background: #bb1144; background-color: -webkit-linear-gradient(180deg, #bb1144, #cc9900); background: -o-linear-gradient(180deg, #bb1144, #cc9900);   background: -moz-linear-gradient(180deg, #bb1144, #cc9900); background: linear-gradient(180deg,#bb1144, #cc9900); transition: background 125ms ease;");
                  setTimeout(()=>{
                    elem.setAttribute("style", "background: #aa2255; background-color: -webkit-linear-gradient(-135deg, #aa2255, #cc9900); background: -o-linear-gradient(-135deg, #aa2255, #cc9900);   background: -moz-linear-gradient(-135deg, #aa2255, #cc9900); background: linear-gradient(-135deg, #aa2255, #cc9900); transition: background 125ms ease;");
                    setTimeout(()=>{
                      elem.setAttribute("style", "background: #bb3344; background-color: -webkit-linear-gradient(-90deg, #bb3344, #cc9900); background: -o-linear-gradient(-90deg, #bb3344, #cc9900);   background: -moz-linear-gradient(-90deg, #bb3344, #cc9900); background: linear-gradient(-90deg, #bb3344, #cc9900); transition: background 125ms ease;");
                      setTimeout(()=>{
                        elem.setAttribute("style", "background: #cc4433; background-color: -webkit-linear-gradient(-45deg, #cc4433, #cc9900); background: -o-linear-gradient(-45deg, #cc4433, #cc9900);   background: -moz-linear-gradient(-45deg, #cc4433, #cc9900); background: linear-gradient(-45deg, #cc4433, #cc9900); transition: background 125ms ease;");
                        setTimeout(()=>{
                          elem.setAttribute("style", "background: #dd5522; background: -webkit-linear-gradient(0deg, #dd5522, #cc9900); background: -o-linear-gradient(0deg, #dd5522, #cc9900);   background: -moz-linear-gradient(0deg, #dd5522, #cc9900); background: linear-gradient(0deg, #dd5522, #cc9900); transition: background 125ms ease;");
                          setTimeout(()=>{
                            elem.setAttribute("style", "background: #ee4411; background: -webkit-linear-gradient(45deg, #ee4411, #cc9900); background: -o-linear-gradient(45deg, #ee4411, #cc9900);   background: -moz-linear-gradient(45deg, #ee4411, #cc9900); background: linear-gradient(45deg, #ee4411, #cc9900); transition: background 125ms ease;");
                            setTimeout(()=>{
                              elem.setAttribute("style", "background: #ff3300; background: -webkit-linear-gradient(90deg, #ff3300, #cc9900); background: -o-linear-gradient(90deg, #ff3300, #cc9900);   background: -moz-linear-gradient(90deg, #ff3300, #cc9900); background: linear-gradient(90deg, #ff3300, #cc9900); transition: background 125ms ease;");
                              setTimeout(()=>{
                                elem.setAttribute("style", "background: #ff2200; background: -webkit-linear-gradient(135deg, #ff2200, #cc9900); background: -o-linear-gradient(135deg, #ff2200, #cc9900);   background: -moz-linear-gradient(135deg, #ff2200, #cc9900); background: linear-gradient(135deg, #ff2200, #cc9900); transition: background 125ms ease;");
                                setTimeout(()=>{
                                  elem.setAttribute("style", "background: #ff1100; background: -webkit-linear-gradient(180deg, #ff1100, #cc9900); background: -o-linear-gradient(180deg, #ff1100, #cc9900);   background: -moz-linear-gradient(180deg, #ff1100, #cc9900); background: linear-gradient(180deg, #ff1100, #cc9900); transition: background 125ms ease;");
                                  setTimeout(()=>{
                                    elem.setAttribute("style", "background: #ff0000; background: -webkit-linear-gradient(-135deg, #ff0000, #cc9900); background: -o-linear-gradient(-135deg, #ff0000, #cc9900);   background: -moz-linear-gradient(-135deg, #ff0000, #cc9900); background: linear-gradient(-135deg, #ff0000, #cc9900); transition: background 125ms ease;");
                                    setTimeout(()=>{
                                      elem.setAttribute("style", "background: #ff0000; background: -webkit-linear-gradient(-90deg, #ff0000, #cc9900); background: -o-linear-gradient(-90deg, #ff0000, #cc9900);   background: -moz-linear-gradient(-90deg, #ff0000, #cc9900); background: linear-gradient(-90deg, #ff0000, #cc9900); transition: background 125ms ease;");
                                      setTimeout(()=>{
                                        elem.setAttribute("style", "background: #ff0000; background: -webkit-linear-gradient(-45deg, #ff0000, #cc9900); background: -o-linear-gradient(-45deg, #ff0000, #cc9900);   background: -moz-linear-gradient(-45deg, #ff0000, #cc9900); background: linear-gradient(-45deg, #ff0000, #cc9900); transition: background 125ms ease;");
                                        setTimeout(()=>{
                                          overdueFlash(elem);
                                        }, 65);
                                      }, 65);
                                    }, 65);
                                  }, 65);
                                }, 65);
                              }, 65);
                            }, 65);
                          }, 65);
                        }, 65);
                      }, 65);
                    }, 65);
                  }, 65);
                }, 65);
              }, 65);
            }, 65);
          }, 65);
        }
      }

      function getCleanDate(theDate) {
        let cleanString = '';
        let yyyy = theDate.slice(0, 4);
        let mm = theDate.slice(5, 7);
        let dd = theDate.slice(8, 10);
        if (dd[0] === '0') {
          dd = dd[1];
        }
        switch(mm) {
          case('01'):
            mm = 'January';
            break;
          case('02'):
            mm = 'February';
            break;
          case('03'):
            mm = 'March';
            break;
          case('04'):
            mm = 'April';
            break;
          case('05'):
            mm = 'May';
            break;
          case('06'):
            mm = 'June';
            break;
          case('07'):
            mm = 'July';
            break;
          case('08'):
            mm = 'August';
            break;
          case('09'):
            mm = 'September';
            break;
          case('10'):
            mm = 'October';
            break;
          case('11'):
            mm = "November";
            break;
          case('12'):
            mm = "December";
            break;
          default:
            console.log('date error ' + mm);
        }
        cleanString = dd + ' ' + mm + ' ' + yyyy;


        return(cleanString);
      }

      function detectBills() {
        $http.get(`/billsByUser/${currentUserId}`)
        .then(currentBillsData=>{
          let days = 0;
          let currentBills = currentBillsData.data;
          let currentBillsDue = [];
          let element = document.getElementById('billsList');
          let todaysBills = [];
          let yesterdaysBills = [];
          currentBillsDue = currentBills.filter((bill)=>{
            return (bill.is_paid === false);
          });
          if (currentBillsDue.length > 0) {
            for (let i = 0; i < currentBillsDue.length; i++) {
              currentBillsDue[i].clean_date = getCleanDate(currentBillsDue[i].due_date);
              switch(getBillTense(viewDate, currentBillsDue[i].due_date)) {
                case ('past'):
                  // element = document.getElementById(currentBillsDue[i].name + currentBillsDue[i].id);
                  // overdueFlash(element);
                  yesterdaysBills.push(currentBillsDue[i]);
                  days = getOverdueStatus(viewDate, currentBillsDue[i].due_date);
                  if (days === 1) {
                    currentBillsDue[i].due_state = ' was due yesterday.';
                  } else {
                    currentBillsDue[i].due_state = ' is ' + days + '  days overdue!';
                  }
                  break;
                case ('present'):
                  // element = document.getElementById(currentBillsDue[i].name + currentBillsDue[i].id);
                  // element.setAttribute("style", "background-color: #ff0000;");
                  todaysBills.push(currentBillsDue[i]);
                  currentBillsDue[i].due_state = ' is DUE today!';
                  break;
                case ('future'):
                  days = getFutureDueDate(viewDate, currentBillsDue[i].due_date);
                  if (days === 1) {
                    currentBillsDue[i].due_state = ' is due tomorrow.';
                  } else {
                    currentBillsDue[i].due_state = ' is due in ' + days + ' days.';
                  }
                  break;
                default:
                  console.log('non-standard state');
              }

            }
          } else {
            element.setAttribute("style", "display: none;");
          }
          vm.bills = currentBillsDue;
          let idString = '';

          setTimeout(()=>{
            if (todaysBills.length > 0) {
              for (let dueNow = 0; dueNow < todaysBills.length; dueNow++) {
                idString = todaysBills[dueNow].name + todaysBills[dueNow].id;
                document.getElementById(idString).setAttribute("style", "background: #ff0000; background: -webkit-linear-gradient(-45deg, #ff0000, #cc9900); background: -o-linear-gradient(-45deg, #ff0000, #cc9900);   background: -moz-linear-gradient(-45deg, #ff0000, #cc9900); background: linear-gradient(-45deg, #ff0000, #cc9900);");
              }
            }
            if (yesterdaysBills.length > 0) {
              for (let dueThen = 0; dueThen < yesterdaysBills.length; dueThen++) {
                element = document.getElementById(yesterdaysBills[dueThen].name + yesterdaysBills[dueThen].id);
                overdueFlash(element);
              }
            }
          }, 1000);

        });
      }

      function detectTasks() {
        $http.get(`/tasksbyuser/${currentUserId}`)
        .then(currentTasksData=>{
          let days = 0;
          let currentTasks = currentTasksData.data;
          let currentTasksDue = [];
          let element = document.getElementById('tasksList');
          let todaysTasks = [];
          let yesterdaysTasks = [];
          currentTasksDue = currentTasks.filter((task)=>{
            return (task.is_completed === false);
          });
          if (currentTasksDue.length > 0) {
            for (let i = 0; i < currentTasksDue.length; i++) {
              currentTasksDue[i].clean_date = getCleanDate(currentTasksDue[i].due_date);
              switch(getBillTense(viewDate, currentTasksDue[i].due_date)) {
                case ('past'):
                  // element = document.getElementById(currentBillsDue[i].name + currentBillsDue[i].id);
                  // overdueFlash(element);
                  yesterdaysTasks.push(currentTasksDue[i]);
                  days = getOverdueStatus(viewDate, currentTasksDue[i].due_date);
                  if (days === 1) {
                    currentTasksDue[i].due_state = ' was due yesterday.';
                  } else {
                    currentTasksDue[i].due_state = ' is ' + days + '  days overdue!';
                  }
                  break;
                case ('present'):
                  // element = document.getElementById(currentBillsDue[i].name + currentBillsDue[i].id);
                  // element.setAttribute("style", "background-color: #ff0000;");
                  todaysTasks.push(currentTasksDue[i]);
                  currentTasksDue[i].due_state = ' is DUE today!';
                  break;
                case ('future'):
                  days = getFutureDueDate(viewDate, currentTasksDue[i].due_date);
                  if (days === 1) {
                    currentTasksDue[i].due_state = ' is due tomorrow.';
                  } else {
                    currentTasksDue[i].due_state = ' is due in ' + days + ' days.';
                  }
                  break;
                default:
                  console.log('non-standard state');
              }

            }
          } else {
            element.setAttribute("style", "display: none;");
          }
          vm.tasks = currentTasksDue;
          let idString = '';

          setTimeout(()=>{
            if (todaysTasks.length > 0) {
              for (let dueNow = 0; dueNow < todaysTasks.length; dueNow++) {
                idString = todaysTasks[dueNow].name + todaysTasks[dueNow].id;
                document.getElementById(idString).setAttribute("style", "background: #ff0000; background: -webkit-linear-gradient(-45deg, #ff0000, #cc9900); background: -o-linear-gradient(-45deg, #ff0000, #cc9900);   background: -moz-linear-gradient(-45deg, #ff0000, #cc9900); background: linear-gradient(-45deg, #ff0000, #cc9900);");
              }
            }
            if (yesterdaysTasks.length > 0) {
              for (let dueThen = 0; dueThen < yesterdaysTasks.length; dueThen++) {
                element = document.getElementById(yesterdaysTasks[dueThen].name + yesterdaysTasks[dueThen].id);
                overdueFlash(element);
              }
            }
          }, 1000);

        });
      }

      function convertTimeToID(time) {
        let timeID = '';
        let timeCheck = time.toString();
        let hour = '';
        if (timeCheck[11] === '0') {
          if (timeCheck[12] === '0') {
            hour = '00';
          } else {
            hour = timeCheck[12];
          }
        } else {
          hour = timeCheck.slice(11,13);
        }

        if (timeCheck[14] === '3') {
          timeID = 'h' + hour + '30';
        } else {
          timeID = 'h' + hour;
        }

        return(timeID);
      }

      function timeblockRange(block) {
        let times = [];
        let start = convertTimeToID(block.start_time);
        let end = convertTimeToID(block.end_time);

        let index = hours.indexOf(start);
        let endIndex = hours.indexOf(end);

        if (endIndex < index) {
          index = 0;
        }

        for (let i = index; i < endIndex; i++) {
          times.push(hours[i]);
        }
        return(times);
      }

      function resetScheduleField(timeblockRemoved) {
        let divArray = timeblockRange(timeblockRemoved);
        let element = document.getElementById(divArray[0]);
        let strCut = element.children[0].children[0].innerHTML.indexOf(' -');
        element.children[0].children[0].innerHTML = element.children[0].children[0].innerHTML.slice(0, strCut);
        element.children[0].appointment = undefined;
        //element.children[0].children[0].appointment = undefined;
        //element.appointment = undefined;

        for (let i = 0; i < divArray.length; i++) {
          element = document.getElementById(divArray[i]);
          element.children[0].setAttribute("style", "background-color: transparent;");
          element.children[0].appointment = undefined;
          //element.children[0].children[0].appointment = undefined;
          //element.appointment = undefined;

        }

      }

      function populateKeys(element, block, initialString, timeblock) {

        if (element.firstChild) {
          while (element.firstChild) {
            element.removeChild(element.firstChild);
          }
        }
        //console.log(block.keys);

        if (block.keys === null) {
          return;
        }

        let newSelect;

        let keyValueList = block.keys[block.keys.keys[0] + "Values"];
        let keyValueSorted = keyValueList.sort((a, b)=>{
          if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
          } else if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
          } else {
            return 0;
          }
        });
        let keyInUse = keyValueList[timeblock.block_data[block.keys.keys[0]]];

        for (let i = 0; i <keyValueSorted.length; i++) {
          newSelect = document.createElement('option');
          element.appendChild(newSelect);
          newSelect.innerHTML = keyValueSorted[i];
        }
        newSelect = document.createElement('option');
        element.appendChild(newSelect);
        newSelect.innerHTML = initialString;

        return(keyInUse);
      }

      function populateSelections(element, selectionsArray, initialString, timeblock) {

        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }

        let newSelect;
        let blockIdInUse = {};

        for (let i = 0; i < selectionsArray.length; i++) {
          newSelect = document.createElement('option');
          element.appendChild(newSelect);
          newSelect.innerHTML = selectionsArray[i].type;
          newSelect.blocktype = selectionsArray[i].id;
          if (selectionsArray[i].id === timeblock.block_type) {
            blockIdInUse = selectionsArray[i];
            element.value = selectionsArray[i].type;
          }
        }

        newSelect = document.createElement('option');
        element.appendChild(newSelect);
        newSelect.innerHTML = initialString;

        return(blockIdInUse);
      }

      function setEditorColor(element, color) {


        element.setAttribute("style", "display: initial; width: 30.5%; height: 41em; overflow: scroll; margin-left: 0.1em; background: " + color +"; background-color: -webkit-linear-gradient(135deg, " + color + ", #abdada); background: -o-linear-gradient(135deg, " + color + ", #abdada); background: -moz-linear-gradient(135deg, " + color + ", #abdada); background: linear-gradient(135deg, " + color + ", #abdada);");
      }

      function timeString (time) {
        let outputString = '';
        let timer = time.toString();
        if (timer[11] === '0') {
          outputString = timer.slice(12, 16);
        } else {
          outputString = timer.slice(11, 16);
        }

        return(outputString);
      }

      function updateEndTimeButtons(timeID, endTime, decrease, increase) {
        let indexPoint = hoursTime.indexOf(endTime);
        let check;
        if (indexPoint > (hoursTime.length - 2)) {
          increase.setAttribute("style", "visibility: hidden;");
        } else {
          check = document.getElementById(hours[indexPoint]);
          if (check.children[0].appointment === undefined) {
            increase.setAttribute("style", "visibility: visible;");
          } else {
            increase.setAttribute("style", "visibility: hidden;");
          }
        }
        if (indexPoint === 1) {
          decrease.setAttribute("style", "visibility: hidden;");
        } else {
          check = document.getElementById(hours[indexPoint - 2]);
          if (check.children[0].appointment === timeID) {
            decrease.setAttribute("style", "visibility: visible;");
          } else {
            decrease.setAttribute("style", "visibility: hidden;");
          }
        }
      }

      function updateStartTimeButtons(timeID, startTime, endTime, decrease, increase) {
        let indexPoint = hoursTime.indexOf(startTime);
        let indexPoint2 = hoursTime.indexOf(endTime);
        let check;
        if (indexPoint === 0) {
          decrease.setAttribute("style", "visibility: hidden;");
        } else {
          check = document.getElementById(hours[indexPoint - 1]);
          if (check.children[0].appointment === undefined) {
            decrease.setAttribute("style", "visibility: visible;");
          } else {
            decrease.setAttribute("style", "visibility: hidden;");
          }
        }
        if (indexPoint === (indexPoint.length - 2)) {
          increase.setAttribute("style", "visibility: hidden;");
        } else {
          check = document.getElementById(hours[indexPoint + 1]);
          if ((check.children[0].appointment === undefined) || (check.children[0].appointment === timeID)) {
            if ((indexPoint2 - indexPoint) === 1) {
              increase.setAttribute("style", "visibility: hidden;");
            } else {
              increase.setAttribute("style", "visibility: visible;");
            }
          } else {
            increase.setAttribute("style", "visibility: hidden;");
          }
        }
      }

      function additionalSuptypeInputHandler(element, timeblock, inputField, index) {
        element.addEventListener('focusout', ()=>{
          let sub = {
            block_data: timeblock.block_data
          };
          if (element.value !== '') {
            if (sub.block_data[inputField][index] === undefined) {

            }
            sub.block_data[inputField][index] = element.value;
            $http.patch(`/timeblocks/${timeblock.id}`, sub)
            .then(data=>{
              console.log(data.data);
            });
          }
        });
      }

      function keyButtonHandler(keyButton, timeblock) {
        let newElement;
        let appendDiv = keyButton.div;
        let inputField = appendDiv.id.toString();
        inputField = inputField.slice(0, inputField.length - 3);
        let index = 0;


        keyButton.button.addEventListener('click', ()=>{
          if (appendDiv.lastChild.value !== '') {
            newElement = document.createElement('input');
            appendDiv.appendChild(newElement);
            newElement.type = "text";
            newElement.class = "pure-input-1";
            newElement.value = '';
            newElement.id = keyButton.keyEntry + keyButton.keyEntryNumber;
            ++keyButton.keyEntryNumber;
            newElement.setAttribute("style", "font-family: 'Alike Angular', serif; font-size: 18px; margin-left: 3em; width: 80%;");
            for (let i = 2; i < appendDiv.children.length; i++) {
              if (appendDiv.children[i] === newElement) {
                index = i - 2;
              }
            }
            additionalSuptypeInputHandler(newElement, timeblock, inputField, index);
          }
        });
      }

      function populateKeySubfields(element, timeblock, currentBlock) {
        let newEntry;
        let newEntryTitle;
        let newDiv;
        let divArray = [];
        let buttonObject = {};

        while(element.firstChild) {
          element.removeChild(element.firstChild);
        }

        $http.get(`/timeblocks/${timeblock.id}`)
        .then(currentData=>{
          let current = currentData.data;
          $http.get(`/blocktypes/${current.block_type}`)
          .then(updatedBlockData=>{
            let updatedBlock = updatedBlockData.data;
            for (let i = 1; i < updatedBlock.keys.keys.length; i++) {
              newDiv = document.createElement('div');
              element.appendChild(newDiv);

              newEntryTitle = document.createElement('p');
              newDiv.appendChild(newEntryTitle);
              newEntryTitle.innerHTML = updatedBlock.keys.keys[i] + ':';
              newEntryTitle.setAttribute("style", "margin-bottom:0.2em;");

              newDiv.id = updatedBlock.keys.keys[i] + 'Div';
              newEntry = document.createElement('button');
              newDiv.appendChild(newEntry);
              newEntry.innerHTML = 'add new';

              newEntry.setAttribute("style", "font-weight: bolder; font-family: 'Asul', sans-serif; font-size: 24px; background: " + updatedBlock.color + "; background-color: -webkit-linear-gradient(135deg, " + updatedBlock.color + ", #ffffff); background: -o-linear-gradient(135deg, " + updatedBlock.color + ", #ffffff); background: -moz-linear-gradient(135deg, " + updatedBlock.color + ", #ffffff); background: linear-gradient(135deg, " + updatedBlock.color + ", #ffffff); opacity: 0.7; margin-left: 2.2em; margin-top: 0; margin-bottom: 0;");
              buttonObject.div = newDiv;
              buttonObject.button = newEntry;
              buttonObject.keyEntry = updatedBlock.keys.keys[i];
              buttonObject.keyEntryNumber = updatedBlock.keys.keys.length;
              divArray.push(buttonObject);
              keyButtonHandler(buttonObject, current);

              if (current.block_data[updatedBlock.keys.keys[i]] === undefined) {
                current.block_data[updatedBlock.keys.keys[i]] = [];
              }

              if (current.block_data[updatedBlock.keys.keys[i]]) {
                for (let j = 0; j < current.block_data[updatedBlock.keys.keys[i]].length; j++) {
                  newEntry = document.createElement('input');
                  newDiv.appendChild(newEntry);
                  newEntry.type = "text";
                  newEntry.id = "updatedBlock.keys.keys[i] + i";
                  newEntry.class = "pure-input-1";
                  newEntry.value = current.block_data[updatedBlock.keys.keys[i]][j];
                  newEntry.setAttribute("style", "font-family: 'Alike Angular', serif; font-size: 18px; margin-left: 3em; width: 80%;");
                  additionalSuptypeInputHandler(newEntry, current, updatedBlock.keys.keys[i], j);
                }
              }
              newEntry = document.createElement('input');
              newDiv.appendChild(newEntry);
              newEntry.type = "text";
              newEntry.class = "pure-input-1";
              newEntry.setAttribute("style", "font-family: 'Alike Angular', serif; font-size: 18px; margin-left: 3em; width: 80%;");
              additionalSuptypeInputHandler(newEntry, current, updatedBlock.keys.keys[i], current.block_data[updatedBlock.keys.keys[i]].length);


            }
          });
        });

      }

      function changeBlocktype(blocksArray, newType) {
        let blocker = {};

        for (let i = 0; i < blocksArray.length; i++) {
          if (blocksArray[i].type === newType) {
            blocker = blocksArray[i];
          }
        }

        return(blocker);
      }

      function sideblockUpdate(timeblock, blocktype) {
        let timeArray = timeblockRange(timeblock);
        let element = document.getElementById(timeArray[0]);
        let title = element.children[0].children[0].innerHTML;
        let insertText = blocktype.type;
        let splicePoint1 = title.indexOf(' - ') + 3;
        let splicePoint2 = title.indexOf('<button');
        let replaceText = title.slice(0, splicePoint1) + insertText + title.slice(splicePoint2);
        element.children[0].children[0].innerHTML = replaceText;
        element.children[0].setAttribute("style", "background-color: " + blocktype.color + "; opacity: 0.8; border-top: solid " + blocktype.color + " 6px;");
        element.children[0].children[0].children[0].addEventListener('click', (e)=>{
          e.preventDefault();
          e.stopPropagation();
          verbalizeTimeblock(timeblock.id);
        });
        if (timeArray.length > 1) {
          for (let i = 1; i < timeArray.length; i++) {
            element = document.getElementById(timeArray[i]);
            element.children[0].setAttribute("style", "background-color: " + blocktype.color + "; opacity: 0.8; border-top: solid " + blocktype.color + " 6px;");
          }
        }
      }

      function updateBlockType(currentTimeblock, updatedBlock) {
        let editDeleteAppointments = document.getElementById('editDeleteAppointments');
        let blockKeysSelector = document.getElementById('blockKeysSelector');
        let editAdditionalKeys = document.getElementById('editAdditionalKeys');
        let editBlockKeys = document.getElementById('editBlockKeys');
        let block_data = currentTimeblock.block_data;

        let patchObject = {
          block_type: updatedBlock.id,
        };
        if (updatedBlock.keys !== null) {

          editBlockKeys.setAttribute("style", "display: initial;");
          if (updatedBlock.keys.keys.length > 1) {
            editAdditionalKeys.setAttribute("style", "display: initial;");
          } else {
            editAdditionalKeys.setAttribute("style", "display: none;");
          }
        } else {

          editBlockKeys.setAttribute("style", "display: none;");
          editAdditionalKeys.setAttribute("style", "display: none;");
        }
        if (updatedBlock.keys !== null) {

          if ((block_data === undefined) || (block_data === null)) {
            block_data = {};
          }
          if ((currentTimeblock.block_data === null) || (currentTimeblock.block_data[updatedBlock.keys.keys[0]] === undefined)) {
            block_data[updatedBlock.keys.keys[0]] = 0;
            patchObject.block_data = block_data;
          }
        }

        $http.patch(`/timeblocks/${currentTimeblock.id}`, patchObject)
        .then(timeblockData=>{
          let timeblock = timeblockData.data;
          sideblockUpdate(timeblock, updatedBlock);
          setEditorColor(editDeleteAppointments, updatedBlock.color);
          //editAppointment(timeblock.id);
          if (blockKeysSelector.firstChild) {
            while(blockKeysSelector.firstChild) {
              blockKeysSelector.removeChild(blockKeysSelector.firstChild);
            }
          }
          if (editAdditionalKeys.firstChild) {
            while(editAdditionalKeys.firstChild) {
              editAdditionalKeys.removeChild(editAdditionalKeys.firstChild);
            }
          }

          if (blockKeysSelector) {
            populateKeys(blockKeysSelector, updatedBlock, 'add new value...', timeblock);

          }
          if (updatedBlock.keys !== null) {
            if (updatedBlock.keys.keys.length > 1) {
              populateKeySubfields(editAdditionalKeys, timeblock, updatedBlock);
            }
            blockKeysSelector.value = updatedBlock.keys[updatedBlock.keys.keys[0] + "Values"][timeblock.block_data[updatedBlock.keys.keys[0]]];
          }



        });
      }

      function blocktypeCRUDHandler(timeblock) {
        let blocktypeCRUDForm = document.getElementById('blocktypeCRUDForm');
        let blocktypeCRUDColor = document.getElementById('blocktypeCRUDColor');
        let blocktypeCRUDAddNewSubtype = document.getElementById('blocktypeCRUDAddNewSubtype');
        let blocktypeCRUDAdditionalDataTypeAdds = document.getElementById('blocktypeCRUDAdditionalDataTypeAdds');
        let blocktypeCRUDSubtypes = document.getElementById('blocktypeCRUDSubtypes');
        let blocktypeCRUDSubtypeMaker = document.getElementById('blocktypeCRUDSubtypeMaker');
        let blocktypeCRUDKeychain = document.getElementById('blocktypeCRUDKeychain');
        let keychainList = document.getElementById('keychainList');
        keychainList.setAttribute("style", "display: none;");
        let addingTheSubtypes = document.getElementById('addingTheSubtypes');
        let blocktypeCRUDCancelButton = document.getElementById('blocktypeCRUDCancelButton');
        let blocktypeCRUDButtonsField = document.getElementById('blocktypeCRUDButtonsField');
        let blocktypeCRUDSubmitButton = document.getElementById('blocktypeCRUDSubmitButton');
        if (blocktypeCRUDSubmitButton) {
          blocktypeCRUDSubmitButton.parentNode.removeChild(blocktypeCRUDSubmitButton);
          blocktypeCRUDSubmitButton = document.createElement('a');
          blocktypeCRUDButtonsField.appendChild(blocktypeCRUDSubmitButton);
          blocktypeCRUDSubmitButton.id = "blocktypeCRUDSubmitButton";
          blocktypeCRUDSubmitButton.className = "btn";
          blocktypeCRUDSubmitButton.innerHTML = "submit";
          blocktypeCRUDSubmitButton.setAttribute("style", "cursor: pointer;");
        }
        if (blocktypeCRUDCancelButton) {
          blocktypeCRUDCancelButton.parentNode.removeChild(blocktypeCRUDCancelButton);
          blocktypeCRUDCancelButton = document.createElement('a');
          blocktypeCRUDButtonsField.appendChild(blocktypeCRUDCancelButton);
          blocktypeCRUDCancelButton.id = "blocktypeCRUDCancelButton";
          blocktypeCRUDCancelButton.className = "btn";
          blocktypeCRUDCancelButton.innerHTML = "cancel";
          blocktypeCRUDCancelButton.setAttribute("style", "cursor: pointer;");
        }
        let blocktypeCRUDType = document.getElementById('blocktypeCRUDType');
        let blocktypeCRUD = document.getElementById('blocktypeCRUD');
        let editDeleteAppointments = document.getElementById('editDeleteAppointments');
        let blocktypeCRUDErrorField = document.getElementById('blocktypeCRUDErrorField');
        let newSubtypeField;
        let subtypeChildren;
        let secondaryTypeChildren;
        let secondarySubtypeField;

        blocktypeCRUDSubtypes.checked = true;
        blocktypeCRUDKeychain.checked = false;



        //console.log(blocktypeCRUDColor.value);

        blocktypeCRUDForm.setAttribute("style", "background: " + blocktypeCRUDColor.value + "; background-color: -webkit-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada);");

        blocktypeCRUDAddNewSubtype.setAttribute("style", "background: " + blocktypeCRUDColor.value + "; background-color: -webkit-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada);");

        blocktypeCRUDAdditionalDataTypeAdds.setAttribute("style", "background: " + blocktypeCRUDColor.value + "; background-color: -webkit-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada);");

        $http.get(`/blocktypesbyuser/${currentUserId}`)
        .then(blocksData=>{
          let blocks = blocksData.data;


          blocktypeCRUDAddNewSubtype.addEventListener('click', ()=>{
            let blankTextField = false;
            subtypeChildren = addingTheSubtypes.children;
            if (subtypeChildren.length > 1) {
              for (let i = 1; i < subtypeChildren.length; i++) {
                if (subtypeChildren[i].value === '') {
                  blankTextField = true;
                }
              }
            }
            if (!blankTextField) {
              newSubtypeField = document.createElement('input');
              addingTheSubtypes.appendChild(newSubtypeField);
              newSubtypeField.type = "text";
              newSubtypeField.className = "pure-input-1";
            }
          });

          blocktypeCRUDAdditionalDataTypeAdds.addEventListener('click', ()=>{
            let blankTextField = false;
            secondaryTypeChildren = keychainList.children;
            if (secondaryTypeChildren.length > 1) {
              for (let i = 1; i < secondaryTypeChildren.length; i++) {
                if (secondaryTypeChildren[i].value === '') {
                  blankTextField = true;
                }
              }
            }
            if (!blankTextField) {
              secondarySubtypeField = document.createElement('input');
              keychainList.appendChild(secondarySubtypeField);
              secondarySubtypeField.type = "text";
              secondarySubtypeField.className = "pure-input-1";
            }
          });

          blocktypeCRUDSubtypes.addEventListener('change', ()=>{
            if (blocktypeCRUDSubtypes.checked) {
              blocktypeCRUDSubtypeMaker.setAttribute("style", "display: initial;");
            } else {
              blocktypeCRUDSubtypeMaker.setAttribute("style", "display: none;");
            }
          });

          blocktypeCRUDKeychain.addEventListener('change', ()=>{
            if (blocktypeCRUDKeychain.checked) {
              keychainList.setAttribute("style", "display: initial;");
            } else {
              keychainList.setAttribute("style", "display: none;");
            }
          });

          blocktypeCRUDColor.addEventListener('change', ()=>{
            blocktypeCRUDForm.setAttribute("style", "background: " + blocktypeCRUDColor.value + "; background-color: -webkit-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada);");

            blocktypeCRUDAddNewSubtype.setAttribute("style", "background: " + blocktypeCRUDColor.value + "; background-color: -webkit-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada);");

            blocktypeCRUDAdditionalDataTypeAdds.setAttribute("style", "background: " + blocktypeCRUDColor.value + "; background-color: -webkit-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada);");
          });

          blocktypeCRUDCancelButton.addEventListener('click', ()=>{
            //console.log('deleteded');
            blocktypeCRUDType.value = '';
            blocktypeCRUDColor.value = '#22ac44';
            blocktypeCRUDSubtypes.checked = true;
            addingTheSubtypes.children[1].value = '';
            if (addingTheSubtypes.children.length > 2) {
              while (addingTheSubtypes.children[2]) {
                addingTheSubtypes.removeChild(addingTheSubtypes.children[2]);
              }
            }
            blocktypeCRUDKeychain.checked = false;
            keychainList.children[1].value = '';
            if (keychainList.children.length > 2) {
              while (keychainList.children[2]) {
                keychainList.removeChild(keychainList.children[2]);
              }
            }
            keychainList.setAttribute("style", "display: none;");
            blocktypeCRUDSubtypeMaker.setAttribute("style", "display: initial;");
            blocktypeCRUDForm.setAttribute("style", "background: " + blocktypeCRUDColor.value + "; background-color: -webkit-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada);");

            blocktypeCRUDAddNewSubtype.setAttribute("style", "background: " + blocktypeCRUDColor.value + "; background-color: -webkit-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada);");

            blocktypeCRUDAdditionalDataTypeAdds.setAttribute("style", "background: " + blocktypeCRUDColor.value + "; background-color: -webkit-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada);");
            blocktypeCRUDErrorField.innerHTML = '';
            blocktypeCRUD.setAttribute("style", "display: none;");
            editDeleteAppointments.setAttribute("style", "display: initial;");
            editAppointment(timeblock.id);
          });

          blocktypeCRUDSubmitButton.addEventListener('click', ()=>{
            blocktypeCRUDErrorField.innerHTML = '';
            if (blocktypeCRUDType.value === '') {
              blocktypeCRUDErrorField.innerHTML = 'Please enter a blocktype name.';
              blocktypeCRUDErrorField.setAttribute("style", "color: #ff0000; font-size: 18px; font-family: 'Asul', sans-serif; margin-left: 3em;");
              return;
            } else {
              for (let i = 0; i < blocks.length; i++) {
                if (blocktypeCRUDType.value === blocks[i].type) {
                  blocktypeCRUDErrorField.innerHTML = 'That blocktype name is already in use.';
                  blocktypeCRUDErrorField.setAttribute("style", "color: #ff0000; font-size: 18px; font-family: 'Asul', sans-serif; margin-left: 3em;");
                  return;
                }
              }
            }
            if (blocktypeCRUDSubtypes.checked) {
              if (addingTheSubtypes.children[1].value === '') {
                blocktypeCRUDErrorField.innerHTML = 'Please enter at least one subtype (or uncheck subtypes).';
                blocktypeCRUDErrorField.setAttribute("style", "color: #ff0000; font-size: 18px; font-family: 'Asul', sans-serif; margin-left: 3em;");
                return;
              }
              if (blocktypeCRUDKeychain.checked) {
                if (keychainList.children[1].value === '') {
                  blocktypeCRUDErrorField.innerHTML = 'Please enter at least one additional data type value (or uncheck additional data types).';
                  blocktypeCRUDErrorField.setAttribute("style", "color: #ff0000; font-size: 18px; font-family: 'Asul', sans-serif; margin-left: 3em;");
                  return;
                }
              }
            }
            // We've cleared all the checks, now we package up the user input as an object for posting
            let blockSubmit = {
              user_id: currentUserId,
              type: blocktypeCRUDType.value,
              color: blocktypeCRUDColor.value
            };
            if (blocktypeCRUDSubtypes.checked) {
              blockSubmit.keys = {};
              blockSubmit.keys.keys = [];
              blockSubmit.keys.keys[0] = blocktypeCRUDType.value + "Type";
              blockSubmit.keys[blockSubmit.keys.keys[0] + "Values"] = [];
              for (let j = 1; j < addingTheSubtypes.children.length; j++) {
                blockSubmit.keys[blockSubmit.keys.keys[0] + "Values"].push(addingTheSubtypes.children[j].value);
              }
              if (blocktypeCRUDKeychain.checked) {
                for (let k = 1; k < keychainList.children.length; k++) {
                  blockSubmit.keys.keys[k] = keychainList.children[k].value;
                }
              }
            }
            //post new blocktype
            $http.post('/blocktypes', blockSubmit)
            .then(addedBlockData=>{
              let addedBlock = addedBlockData.data[0];
              let timeUpdate = {
                block_type: addedBlock.id
              };
              if (addedBlock.keys !== null) {
                timeUpdate.block_data = {};
                timeUpdate.block_data[addedBlock.keys.keys[0]] = 0;
              }
              $http.patch(`/timeblocks/${timeblock.id}`, timeUpdate)
              .then(timeUpdatedData=>{
                let timeUpdated = timeUpdatedData.data;
                console.log(timeUpdated);
                blocktypeCRUDType.value = '';
                blocktypeCRUDColor.value = '#22ac44';
                blocktypeCRUDSubtypes.checked = true;
                addingTheSubtypes.children[1].value = '';
                if (addingTheSubtypes.children.length > 2) {
                  while (addingTheSubtypes.children[2]) {
                    addingTheSubtypes.removeChild(addingTheSubtypes.children[2]);
                  }
                }
                blocktypeCRUDKeychain.checked = false;
                keychainList.children[1].value = '';
                if (keychainList.children.length > 2) {
                  while (keychainList.children[2]) {
                    keychainList.removeChild(keychainList.children[2]);
                  }
                }
                keychainList.setAttribute("style", "display: none;");
                blocktypeCRUDSubtypeMaker.setAttribute("style", "display: initial;");
                blocktypeCRUDForm.setAttribute("style", "background: " + blocktypeCRUDColor.value + "; background-color: -webkit-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada);");

                blocktypeCRUDAddNewSubtype.setAttribute("style", "background: " + blocktypeCRUDColor.value + "; background-color: -webkit-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada);");

                blocktypeCRUDAdditionalDataTypeAdds.setAttribute("style", "background: " + blocktypeCRUDColor.value + "; background-color: -webkit-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada); background: linear-gradient(135deg, " + blocktypeCRUDColor.value + ", #abdada);");
                blocktypeCRUDErrorField.innerHTML = '';
                blocktypeCRUD.setAttribute("style", "display: none;");
                editDeleteAppointments.setAttribute("style", "display: initial;");
                editAppointment(timeblock.id);
                sideblockUpdate(timeblock, addedBlock);
              });
            });
          });
        });
      }

      function updateBlockSubtype(timeblock, blocktype, blockKey) {
        let submission = {
          block_data: timeblock.block_data
        };
        submission.block_data[blocktype.keys.keys[0]] = blocktype.keys[blocktype.keys.keys[0] + "Values"].indexOf(blockKey);

        $http.patch(`/timeblocks/${timeblock.id}`, submission)
        .then();

      }

      function subtypeCRUDHandler(timeblock, block) {
        let editDeleteAppointments = document.getElementById('editDeleteAppointments');
        let blocktypeCRUDErrorField = document.getElementById('blocktypeCRUDErrorField');
        let subtypeCRUDEntry = document.getElementById('subtypeCRUDEntry');
        let subtypeCRUD = document.getElementById('subtypeCRUD');
        let subtypeCRUDButtonsField = document.getElementById('subtypeCRUDButtonsField');
        let subtypeCRUDSubmissionButton = document.getElementById('subtypeCRUDSubmissionButton');
        if (subtypeCRUDSubmissionButton) {
          subtypeCRUDSubmissionButton.parentNode.removeChild(subtypeCRUDSubmissionButton);
          subtypeCRUDSubmissionButton = document.createElement('a');
          subtypeCRUDButtonsField.appendChild(subtypeCRUDSubmissionButton);
          subtypeCRUDSubmissionButton.id = "subtypeCRUDSubmissionButton";
          subtypeCRUDSubmissionButton.className = "btn";
          subtypeCRUDSubmissionButton.innerHTML = "submit";
          subtypeCRUDSubmissionButton.setAttribute("style", "cursor: pointer;");
        }
        let subtypeCRUDCancelButton = document.getElementById('subtypeCRUDCancelButton');
        if (subtypeCRUDCancelButton) {
          subtypeCRUDCancelButton.parentNode.removeChild(subtypeCRUDCancelButton);
          subtypeCRUDCancelButton = document.createElement('a');
          subtypeCRUDButtonsField.appendChild(subtypeCRUDCancelButton);
          subtypeCRUDCancelButton.id = "subtypeCRUDCancelButton";
          subtypeCRUDCancelButton.className = "btn";
          subtypeCRUDCancelButton.innerHTML = "cancel";
          subtypeCRUDCancelButton.setAttribute("style", "cursor: pointer;");
        }

        subtypeCRUDCancelButton.addEventListener('click', ()=>{
          subtypeCRUDEntry.value = '';
          subtypeCRUD.setAttribute("style", "display: none;");
          editDeleteAppointments.setAttribute("style", "display: initial;");
          blocktypeCRUDErrorField.innerHTML = '';
          editAppointment(timeblock.id);
        });

        subtypeCRUDSubmissionButton.addEventListener('click', ()=>{
          if (subtypeCRUDEntry.value === '') {
            blocktypeCRUDErrorField = 'Please enter a valid subtype value.';
            blocktypeCRUDErrorField.setAttribute("style", "color: #ff0000; font-size: 18px; font-family: 'Asul', sans-serif; margin-left: 3em;");
            return;
          }
          if (block.keys[block.keys.keys[0] + "Values"].indexOf(subtypeCRUDEntry.value) !== -1) {
            blocktypeCRUDErrorField = 'This value already exists in the blocktype construct.';
            blocktypeCRUDErrorField.setAttribute("style", "color: #ff0000; font-size: 18px; font-family: 'Asul', sans-serif; margin-left: 3em;");
            return;
          }

          let blockSub = {
            keys: block.keys
          };
          blockSub.keys[blockSub.keys.keys[0] + "Values"][blockSub.keys[blockSub.keys.keys[0] + "Values"].length] = (subtypeCRUDEntry.value);
          $http.patch(`/blocktypes/${block.id}`, blockSub)
          .then(updatedBlockData=>{
            let updatedBlock = updatedBlockData.data;
            let timeSub = {
              block_data: timeblock.block_data
            };
            timeSub.block_data[updatedBlock.keys.keys[0]] = updatedBlock.keys[updatedBlock.keys.keys[0] + "Values"].indexOf(subtypeCRUDEntry.value);
            $http.patch(`/timeblocks/${timeblock.id}`, timeSub)
            .then(updatedTimeData=>{
              let updatedTime = updatedTimeData.data;
              subtypeCRUDEntry.value = '';
              subtypeCRUD.setAttribute("style", "display: none;");
              editDeleteAppointments.setAttribute("style", "display: initial;");
              blocktypeCRUDErrorField.innerHTML = '';
              editAppointment(timeblock.id);
            });
          });


        });
      }

      function grabLatestUserNotes(timeblock, editUserNotes) {
        let submission = {
          user_notes: editUserNotes.value
        };
        $http.patch(`/timeblocks/${timeblock.id}`, submission)
        .then();
      }

      function grabLatestLocation(timeblock, editLocation) {
        let submission = {
          location: editLocation.value
        };
        $http.patch(`/timeblocks/${timeblock.id}`, submission)
        .then();
      }

      function rollforwardEndTimeHalfHour(timeblock, block) {
        $http.get(`/timeblocks/${timeblock.id}`)
        .then(currentData=>{
          let current = currentData.data;
          let editDeleteEnd = document.getElementById('editDeleteEnd');
          let editDeleteEndDecrease = document.getElementById('editDeleteEndDecrease');
          let editDeleteEndIncrease = document.getElementById('editDeleteEndIncrease');
          let editDeleteStart = document.getElementById('editDeleteStart');
          let submit = {
            end_time: current.end_time
          };
          let firstPart = submit.end_time.slice(0, 11);
          let timePart = submit.end_time.slice(11, 16);
          let thirdPart = submit.end_time.slice(16);
          let timeString = '';
          let index = 0;
          let elementNew;
          let elementOld;
          if (timePart[0] === '0') {
            timeString = timePart.slice(1);
          } else {
            timeString = timePart;
          }
          index = hoursTime.indexOf(timeString);
          timeString = hoursTime[index + 1];
          if (timeString.length === 4) {
            timePart = '0' + timeString;
          } else {
            timePart = timeString;
          }
          submit.end_time = new Date(firstPart + timePart + thirdPart);
          $http.patch(`/timeblocks/${current.id}`, submit)
          .then(updatedTimeData=>{
            let updatedTime = updatedTimeData.data;
            editDeleteEnd.innerHTML = timeString;
            elementOld = document.getElementById(hours[index - 1]);
            elementNew = document.getElementById(hours[index]);
            elementNew.children[0].appointment = current.id;
            elementNew.children[0].setAttribute("style", "background-color: " + block.color + "; opacity: 0.8; border-top: solid " + block.color + " 7px; color: #bb9933;");
            updateEndTimeButtons(current.id, editDeleteEnd.innerHTML, editDeleteEndDecrease, editDeleteEndIncrease);
          });
        });
      }

      function rollbackEndTimeHalfHour(timeblock, block) {
        $http.get(`/timeblocks/${timeblock.id}`)
        .then(currentData=>{
          let current = currentData.data;
          let editDeleteEnd = document.getElementById('editDeleteEnd');
          let editDeleteEndDecrease = document.getElementById('editDeleteEndDecrease');
          let editDeleteEndIncrease = document.getElementById('editDeleteEndIncrease');
          let editDeleteStart = document.getElementById('editDeleteStart');
          let submit = {
            end_time: current.end_time
          };
          let firstPart = submit.end_time.slice(0, 11);
          let timePart = submit.end_time.slice(11, 16);
          let thirdPart = submit.end_time.slice(16);
          let timeString = '';
          let index = 0;
          let elementNew;
          let elementOld;
          if (timePart[0] === '0') {
            timeString = timePart.slice(1);
          } else {
            timeString = timePart;
          }
          index = hoursTime.indexOf(timeString);
          timeString = hoursTime[index - 1];
          if (timeString.length === 4) {
            timePart = '0' + timeString;
          } else {
            timePart = timeString;
          }
          submit.end_time = new Date(firstPart + timePart + thirdPart);
          $http.patch(`/timeblocks/${current.id}`, submit)
          .then(updatedTimeData=>{
            let updatedTime = updatedTimeData.data;
            //console.log(updatedTime);
            editDeleteEnd.innerHTML = timeString;
            elementOld = document.getElementById(hours[index - 1]);
            elementNew = document.getElementById(hours[index]);
            elementOld.children[0].appointment = undefined;
            elementOld.children[0].setAttribute("style", "background-color: transparent; border-top: 0;");
            updateEndTimeButtons(current.id, editDeleteEnd.innerHTML, editDeleteEndDecrease, editDeleteEndIncrease);
          });
        });
      }

      function rollforwardStartTimeHalfHour(timeblock, block) {
        $http.get(`/timeblocks/${timeblock.id}`)
        .then(currentData=>{
          let current = currentData.data;
          let editDeleteStart = document.getElementById('editDeleteStart');
          let editDeleteStartDecrease = document.getElementById('editDeleteStartDecrease');
          let editDeleteStartIncrease = document.getElementById('editDeleteStartIncrease');
          let editDeleteEnd = document.getElementById('editDeleteEnd');
          let submit = {
            start_time: current.start_time
          };
          let firstPart = submit.start_time.slice(0, 11);
          let timePart = submit.start_time.slice(11, 16);
          let thirdPart = submit.start_time.slice(16);
          let timeString = '';
          let index = 0;
          let elementNew;
          let elementOld;
          let elementOldSnippet = '';
          if (timePart[0] === '0') {
            timeString = timePart.slice(1);
          } else {
            timeString = timePart;
          }
          index = hoursTime.indexOf(timeString);
          timeString = hoursTime[index + 1];
          if (timeString.length === 4) {
            timePart = '0' + timeString;
          } else {
            timePart = timeString;
          }
          submit.start_time = new Date(firstPart + timePart + thirdPart);
          $http.patch(`/timeblocks/${current.id}`, submit)
          .then(updatedTimeData=>{
            let updatedTime = updatedTimeData.data;
            editDeleteStart.innerHTML = timeString;
            //TODO update sidePanel
            elementOld = document.getElementById(hours[index]);
            elementNew = document.getElementById(hours[index+1]);
            let oldString = elementOld.children[0].children[0].innerHTML;
            let newString = elementNew.children[0].children[0].innerHTML;
            elementOldSnippet = oldString.slice(oldString.indexOf(' - '));
            newString = newString + elementOldSnippet;
            oldString = oldString.slice(0, oldString.indexOf(' - '));
            elementOld.children[0].children[0].innerHTML = oldString;
            elementNew.children[0].children[0].innerHTML = newString;
            elementOld.children[0].appointment = undefined;
            elementOld.children[0].setAttribute("style", "background-color: transparent;");

            //TODO update button status - delete needs to update .appointment values
            updateStartTimeButtons(timeblock.id, editDeleteStart.innerHTML, editDeleteEnd.innerHTML, editDeleteStartDecrease, editDeleteStartIncrease);
            // if (getTense(viewDate) === 'past') {
            //
            //   elementNew.children[0].setAttribute("style", "background-color: " + block.color + "; opacity: 0.8; border-top: solid " + block.color + " 3px; border-bottom: solid " + block.color + " 3px; color: #bb9933;");
            // } else if (getTense(viewDate) === 'future') {
            //   elementNew.children[0].setAttribute("style", "background-color: " + block.color + "; opacity: 0.8; border-top: solid " + block.color + " 3px; border-bottom: solid " + block.color + " 3px; color: #000000;");
            // } else {
            //   let currentTimePosition = getCurrentTimePosition();
            //   if (hours.indexOf(elementNew.id) < currentTimePosition) {
            //     elementNew.children[0].setAttribute("style", "background-color: " + block.color + "; opacity: 0.8; border-top: solid " + block.color + " 3px; border-bottom: solid " + block.color + " 3px; color: #bb9933;");
            //   } else if (hours.indexOf(elementNew.id) > currentTimePosition) {
            //     elementNew.children[0].setAttribute("style", "background-color: " + block.color + "; opacity: 0.8; border-top: solid " + block.color + " 3px; border-bottom: solid " + block.color + " 3px; color: #000000;");
            //   } else {
            //     elementNew.children[0].setAttribute("style", "background-color: " + block.color + "; opacity: 0.8; border-top: solid " + block.color + " 3px; border-bottom: solid " + block.color + " 3px;");
            //   }
            // }
            elementNew.children[0].children[0].children[0].addEventListener('click', (e)=>{
              e.preventDefault();
              e.stopPropagation();
              verbalizeTimeblock(current.id);
            });
            //setTimeColors();
          });
        });
      }

      function rollbackStartTimeHalfHour(timeblock, block) {
        $http.get(`/timeblocks/${timeblock.id}`)
        .then(currentData=>{
          let current = currentData.data;
          let editDeleteStart = document.getElementById('editDeleteStart');
          let editDeleteStartDecrease = document.getElementById('editDeleteStartDecrease');
          let editDeleteStartIncrease = document.getElementById('editDeleteStartIncrease');
          let editDeleteEnd = document.getElementById('editDeleteEnd');
          let submit = {
            start_time: current.start_time
          };
          let firstPart = submit.start_time.slice(0, 11);
          let timePart = submit.start_time.slice(11, 16);
          let thirdPart = submit.start_time.slice(16);
          let timeString = '';
          let index = 0;
          let elementNew;
          let elementOld;
          let elementOldSnippet = '';
          if (timePart[0] === '0') {
            timeString = timePart.slice(1);
          } else {
            timeString = timePart;
          }
          index = hoursTime.indexOf(timeString);
          timeString = hoursTime[index - 1];
          if (timeString.length === 4) {
            timePart = '0' + timeString;
          } else {
            timePart = timeString;
          }
          submit.start_time = new Date(firstPart + timePart + thirdPart);
          $http.patch(`/timeblocks/${current.id}`, submit)
          .then(updatedTimeData=>{
            let updatedTime = updatedTimeData.data;
            editDeleteStart.innerHTML = timeString;
            //TODO update sidePanel
            elementOld = document.getElementById(hours[index]);
            elementNew = document.getElementById(hours[index-1]);
            let oldString = elementOld.children[0].children[0].innerHTML;
            let newString = elementNew.children[0].children[0].innerHTML;
            elementOldSnippet = oldString.slice(oldString.indexOf(' - '));
            newString = newString + elementOldSnippet;
            oldString = oldString.slice(0, oldString.indexOf(' - '));
            elementOld.children[0].children[0].innerHTML = oldString;
            elementNew.children[0].children[0].innerHTML = newString;
            elementNew.children[0].appointment = updatedTime.id;

            //TODO update button status - delete needs to update .appointment values
            updateStartTimeButtons(timeblock.id, editDeleteStart.innerHTML, editDeleteEnd.innerHTML, editDeleteStartDecrease, editDeleteStartIncrease);
            if (getTense(viewDate) === 'past') {
              elementNew.children[0].setAttribute("style", "background-color: " + block.color + "; opacity: 0.8; border-top: solid " + block.color + " 7px; color: #bb9933;");
            } else if (getTense(viewDate) === 'future') {
              elementNew.children[0].setAttribute("style", "background-color: " + block.color + "; opacity: 0.8; border-top: solid " + block.color + " 7px; color: #000000;");
            } else {
              let currentTimePosition = getCurrentTimePosition();
              if (hours.indexOf(elementNew.id) < currentTimePosition) {
                elementNew.children[0].setAttribute("style", "background-color: " + block.color + "; opacity: 0.8; border-top: solid " + block.color + " 7px; color: #bb9933;");
              } else if (hours.indexOf(elementNew.id) > currentTimePosition) {
                elementNew.children[0].setAttribute("style", "background-color: " + block.color + "; opacity: 0.8; border-top: solid " + block.color + " 7px; color: #000000;");
              } else {
                elementNew.children[0].setAttribute("style", "background-color: " + block.color + "; opacity: 0.8; border-top: solid " + block.color + " 7px;");
              }
            }
            elementNew.children[0].children[0].children[0].addEventListener('click', (e)=>{
              e.preventDefault();
              e.stopPropagation();
              verbalizeTimeblock(current.id);
            });
            //setTimeColors();
          });
        });

      }

      function grabImageAndName(imgEl, nameEl, id) {
        $http.get(`/users/${id}`)
        .then(friendData=>{
          let friend = friendData.data;
          imgEl.src = friend.user_avatar_url;
          nameEl.innerHTML = friend.name;
        });
      }

      function supplyUser(friendsList, index, friendId) {
        $http.get(`/users/${friendId}`)
        .then(friendData=>{
          friendsList[index] = friendData.data;
        });
      }

      function timeblockShareCreate(divElement, timeblockId, friendId) {
        divElement.addEventListener('click', ()=>{
          let subObj = {
            user_id: parseInt(currentUserId),
            timeblock_id: timeblockId,
            share_associate_id: friendId,
            accepted: false,
            responded: false
          };
          $http.post('timeblock_shares', subObj)
          .then(sharedData=>{
            let shared = sharedData.data;
            document.getElementById('dayviewWhoToShareSearch').value = '';
            let shareAppointmentPane = document.getElementById('shareAppointmentPane');
            let schedulePanel = document.getElementById('schedulePanel');

            schedulePanel.setAttribute("style", "opacity: 1;");
            shareAppointmentPane.setAttribute("style", "z-index: -6; opacity: 0;");
          });
        });
      }

      function populateFriendsAndMaintainEventListenersWithString(charSet, timeblockId) {
        let dayviewFriendsSearchList = document.getElementById('dayviewFriendsSearchList');
        let divElement;
        let imgElement;
        let nameElement;
        let lineBreak;
        let userList = [];

        $http.get(`/users/${currentUserId}`)
        .then(userData=>{
          let user = userData.data;
          if (user.associates.friends.length > 0) {
            for (let i = 0; i < user.associates.friends.length; i++) {
              userList[i] = {};
              supplyUser(userList, i, user.associates.friends[i]);

            }
            setTimeout(()=>{
              let filteredList = userList.filter(entry=>{
                return((entry.name.toLowerCase().indexOf(charSet) !== -1) || (entry.email.toLowerCase().indexOf(charSet) !== -1));
              });
              filteredList = filteredList.sort((a, b)=>{
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                  return -1;
                } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                  return 1;
                } else {
                  return 0;
                }
              });
              if (filteredList.length > 0) {
                while(dayviewFriendsSearchList.firstChild) {
                  dayviewFriendsSearchList.removeChild(dayviewFriendsSearchList.firstChild);
                }
                for (let j = 0; j < filteredList.length; j++) {
                  divElement = document.createElement('div');
                  dayviewFriendsSearchList.appendChild(divElement);
                  divElement.setAttribute("style", "cursor: pointer;");
                  imgElement = document.createElement('img');
                  divElement.appendChild(imgElement);
                  imgElement.src = filteredList[j].user_avatar_url;
                  nameElement = document.createElement('p');
                  divElement.appendChild(nameElement);
                  nameElement.innerHTML = filteredList[j].name;
                  lineBreak = document.createElement('br');
                  divElement.appendChild(lineBreak);
                  lineBreak = document.createElement('br');
                  divElement.appendChild(lineBreak);
                  lineBreak = document.createElement('br');
                  divElement.appendChild(lineBreak);
                  lineBreak = document.createElement('br');
                  divElement.appendChild(lineBreak);
                  lineBreak = document.createElement('br');
                  divElement.appendChild(lineBreak);
                  lineBreak = document.createElement('br');
                  divElement.appendChild(lineBreak);
                  timeblockShareCreate(divElement, timeblockId, filteredList[j].id);
                }
              }
            }, (user.associates.friends.length * 100));
          }
        });
      }

      function populateFriendsAndMaintainEventListeners(timeblockId) {
        let dayviewFriendsSearchList = document.getElementById('dayviewFriendsSearchList');
        let divElement;
        let imgElement;
        let nameElement;
        let lineBreak;

        while (dayviewFriendsSearchList.firstChild) {
          dayviewFriendsSearchList.removeChild(dayviewFriendsSearchList.firstChild);
        }

        $http.get(`/users/${currentUserId}`)
        .then(userData=>{
          let user = userData.data;
          console.log(user.associates.friends.length);
          if (user.associates.friends.length > 0) {
            for (let i = 0; i < user.associates.friends.length; i++) {
              divElement = document.createElement('div');
              dayviewFriendsSearchList.appendChild(divElement);
              divElement.setAttribute("style", "cursor: pointer;");
              imgElement = document.createElement('img');
              divElement.appendChild(imgElement);
              nameElement = document.createElement('p');
              divElement.appendChild(nameElement);
              lineBreak = document.createElement('br');
              divElement.appendChild(lineBreak);
              lineBreak = document.createElement('br');
              divElement.appendChild(lineBreak);
              lineBreak = document.createElement('br');
              divElement.appendChild(lineBreak);
              lineBreak = document.createElement('br');
              divElement.appendChild(lineBreak);
              lineBreak = document.createElement('br');
              divElement.appendChild(lineBreak);
              lineBreak = document.createElement('br');
              divElement.appendChild(lineBreak);
              grabImageAndName(imgElement, nameElement, user.associates.friends[i]);
              timeblockShareCreate(divElement, timeblockId, user.associates.friends[i]);
            }
          }
        });
      }

      function editAppointment(blockID, divTimeString) {
        currentEdit = blockID;
        let editDeleteForm = document.getElementById('editDeleteForm');
        let editDeleteAppointments = document.getElementById('editDeleteAppointments');
        let goalsPanel = document.getElementById('goalsPanel');
        let editAppointmentCancel = document.getElementById('editAppointmentCancel');
        let editDeleteFormFieldset = document.getElementById('editDeleteFormFieldset');
        let editDeleteBlocktypeSelector = document.getElementById('editDeleteBlocktypeSelector');
        if (editDeleteBlocktypeSelector) {
          editDeleteBlocktypeSelector.parentNode.removeChild(editDeleteBlocktypeSelector);
          editDeleteBlocktypeSelector = document.createElement('select');
          editDeleteFormFieldset.appendChild(editDeleteBlocktypeSelector);
          editDeleteBlocktypeSelector.id = "editDeleteBlocktypeSelector";
          editDeleteBlocktypeSelector.setAttribute("style", "font-family: 'Alike Angular', serif; font-size: 18px; margin-left: 3em; width: 80%;");

        }
        let blockKeysSelector = document.getElementById('blockKeysSelector');
        let editBlockKeys = document.getElementById('editBlockKeys');
        if (blockKeysSelector) {
          blockKeysSelector.parentNode.removeChild(blockKeysSelector);
          blockKeysSelector = document.createElement('select');
          editBlockKeys.appendChild(blockKeysSelector);
          blockKeysSelector.id = "blockKeysSelector";
          blockKeysSelector.setAttribute("style", "font-family: 'Alike Angular', serif; font-size: 18px; margin-left: 3em; width: 80%;");

        }
        let editDeleteStart = document.getElementById('editDeleteStart');
        let editDeleteEnd = document.getElementById('editDeleteEnd');
        let editDeleteStartDecrease = document.getElementById('editDeleteStartDecrease');
        let timeImage;
        let startTimeEditor = document.getElementById('startTimeEditor');
        if (editDeleteStartDecrease) {
          editDeleteStartDecrease.parentNode.removeChild(editDeleteStartDecrease);
          editDeleteStartDecrease = document.createElement('button');
          startTimeEditor.appendChild(editDeleteStartDecrease);
          editDeleteStartDecrease.id = "editDeleteStartDecrease";
          timeImage = document.createElement('img');
          editDeleteStartDecrease.appendChild(timeImage);
          timeImage.src = "./img/noun_592617_cc.png";
          timeImage.setAttribute("style", "width: 100%; height: 100%;");
          editDeleteStartDecrease.setAttribute("style", "border-radius: 100%; font-size: 18px; background-color: #ddff11; opacity: 0.9; border-radius: 100%; float: left; margin: 0.2em; margin-left: 2.2em; padding: 0; width: 2em; height: 2em;");

        }
        let editDeleteStartIncrease = document.getElementById('editDeleteStartIncrease');
        if (editDeleteStartIncrease) {
          editDeleteStartIncrease.parentNode.removeChild(editDeleteStartIncrease);
          editDeleteStartIncrease = document.createElement('button');
          startTimeEditor.appendChild(editDeleteStartIncrease);
          editDeleteStartIncrease.id = "editDeleteStartIncrease";
          timeImage = document.createElement('img');
          editDeleteStartIncrease.appendChild(timeImage);
          timeImage.src = "./img/noun_651094_cc.png";
          timeImage.setAttribute("style", "width: 100%; height: 100%;");
          editDeleteStartIncrease.setAttribute("style", "border-radius: 100%; font-size: 18px; background-color: #ddff11; opacity: 0.9; border-radius: 100%; float: left; margin: 0.2em; margin-left: 2.2em; padding: 0; width: 2em; height: 2em;");
        }
        let blocktypeCRUD = document.getElementById('blocktypeCRUD');
        let endTimeEditor = document.getElementById('endTimeEditor');
        let editDeleteEndDecrease = document.getElementById('editDeleteEndDecrease');
        if (editDeleteEndDecrease) {
          editDeleteEndDecrease.parentNode.removeChild(editDeleteEndDecrease);
          editDeleteEndDecrease = document.createElement('button');
          endTimeEditor.appendChild(editDeleteEndDecrease);
          editDeleteEndDecrease.id = "editDeleteEndDecrease";
          timeImage = document.createElement('img');
          editDeleteEndDecrease.appendChild(timeImage);
          timeImage.src = "./img/noun_592617_cc.png";
          timeImage.setAttribute("style", "width: 100%; height: 100%;");
          editDeleteEndDecrease.setAttribute("style", "border-radius: 100%; font-size: 18px; background-color: #ddff11; opacity: 0.9; border-radius: 100%; float: left; margin: 0.2em; margin-left: 2.2em; padding: 0; width: 2em; height: 2em;");
        }
        let editDeleteEndIncrease = document.getElementById('editDeleteEndIncrease');
        if (editDeleteEndIncrease) {
          editDeleteEndIncrease.parentNode.removeChild(editDeleteEndIncrease);
          editDeleteEndIncrease = document.createElement('button');
          endTimeEditor.appendChild(editDeleteEndIncrease);
          editDeleteEndIncrease.id = "editDeleteEndIncrease";
          timeImage = document.createElement('img');
          editDeleteEndIncrease.appendChild(timeImage);
          timeImage.src = "./img/noun_651094_cc.png";
          timeImage.setAttribute("style", "width: 100%; height: 100%;");
          editDeleteEndIncrease.setAttribute("style", "border-radius: 100%; font-size: 18px; background-color: #ddff11; opacity: 0.9; border-radius: 100%; float: left; margin: 0.2em; margin-left: 2.2em; padding: 0; width: 2em; height: 2em;");
        }
        let locationField = document.getElementById('locationField');
        let editLocation = document.getElementById('editLocation');
        editLocation.value = '';
        if (editLocation) {
          editLocation.parentNode.removeChild(editLocation);
          editLocation = document.createElement('input');
          locationField.appendChild(editLocation);
          editLocation.id = "editLocation";
          editLocation.type = "text";
          editLocation.className = "pure-input-1";
          editLocation.setAttribute("style", "font-family: 'Alike Angular', serif; font-size: 18px; margin-left: 3em; width: 80%;");
        }
        let notesField = document.getElementById('notesField');
        let editUserNotes = document.getElementById('editUserNotes');
        editUserNotes.value = '';
        if (editUserNotes) {
          editUserNotes.parentNode.removeChild(editUserNotes);
          editUserNotes = document.createElement('textarea');
          notesField.appendChild(editUserNotes);
          editUserNotes.id = "editUserNotes";
          editUserNotes.rows = "5";
          editUserNotes.className = "pure-input-1";
          editUserNotes.setAttribute("style", "font-family: 'Alike Angular', serif; font-size: 18px; margin-left: 3em; width: 80%; rows: 5;");
        }
        let subtypeCRUD = document.getElementById('subtypeCRUD');
        let shareButtonDiv = document.getElementById('shareButtonDiv');
        let shareTimeblockButton = document.getElementById('shareTimeblockButton');
        if (shareTimeblockButton) {
          shareTimeblockButton.parentNode.removeChild(shareTimeblockButton);
          shareTimeblockButton = document.createElement('a');
          shareButtonDiv.appendChild(shareTimeblockButton);
          shareTimeblockButton.id = 'shareTimeblockButton';
          shareTimeblockButton.className = 'btn';
          shareTimeblockButton.setAttribute("style", "cursor: pointer;");
          shareTimeblockButton.innerHTML = 'share';
        }
        let shareAppointmentSearchBarDiv = document.getElementById('shareAppointmentSearchBarDiv');
        let dayviewWhoToShareSearch = document.getElementById('dayviewWhoToShareSearch');
        if (dayviewWhoToShareSearch) {
          dayviewWhoToShareSearch.parentNode.removeChild(dayviewWhoToShareSearch);
          dayviewWhoToShareSearch = document.createElement('input');
          shareAppointmentSearchBarDiv.appendChild(dayviewWhoToShareSearch);
          dayviewWhoToShareSearch.id = 'dayviewWhoToShareSearch';
          dayviewWhoToShareSearch.type = 'text';
          dayviewWhoToShareSearch.placeholder = 'search';
        }


        let editAdditionalKeys = document.getElementById('editAdditionalKeys');
        let editAppointmentDelete = document.getElementById('editAppointmentDelete');
        if (editAppointmentDelete) {
          editAppointmentDelete.parentNode.removeChild(editAppointmentDelete);
        }
        editAppointmentDelete = document.createElement('a');
        editDeleteForm.appendChild(editAppointmentDelete);
        //editAppointmentDelete.href = "";

        editAppointmentDelete.className = "btn";
        editAppointmentDelete.id = "editAppointmentDelete";
        editAppointmentDelete.setAttribute("style", "float: left; margin-left: 0.6em; cursor: pointer;");
        editAppointmentDelete.innerHTML = "delete";
        while(editAdditionalKeys.firstChild) {
          editAdditionalKeys.removeChild(editAdditionalKeys.firstChild);
        }
        if (blockID) {
          $http.get(`/timeblocks/${blockID}`)
          .then(blockData=>{
            let timeblock = blockData.data;
            $http.get(`/blocktypesbyuser/${currentUserId}`)
            .then(blocksData=>{
              let blocks = blocksData.data;
              let currentBlocktype;
              let inclusiveBlock = blocks.filter(bl=>{
                return(bl.id === timeblock.id);
              });
              if (inclusiveBlock.length === 0) {
                $http.get(`/blocktypes/${timeblock.block_type}`)
                .then(alienBlockData=>{
                  let alienBlock = alienBlockData.data;
                  blocks.push(alienBlock);
                  let sortedBlocks = blocks.sort((a, b)=>{
                    if (a.type.toLowerCase() < b.type.toLowerCase()) {
                      return -1;
                    } else if (a.type.toLowerCase() > b.type.toLowerCase()) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
                  currentBlocktype = populateSelections(editDeleteBlocktypeSelector, sortedBlocks, 'add new blocktype...', timeblock);
                  if (currentBlocktype.keys === null) {
                    editBlockKeys.setAttribute("style", "display: none;");
                  } else {
                    editBlockKeys.setAttribute("style", "display: initial;");
                    let currentKey = populateKeys(blockKeysSelector, currentBlocktype, 'add new value...', timeblock);
                    blockKeysSelector.value = currentKey;
                    if (currentBlocktype.keys.keys.length > 1) {
                      populateKeySubfields(editAdditionalKeys, timeblock, currentBlocktype);

                    }
                  }
                  setEditorColor(editDeleteAppointments, currentBlocktype.color);
                  editDeleteStart.innerHTML = timeString(timeblock.start_time);
                  editDeleteEnd.innerHTML = timeString(timeblock.end_time);
                  updateStartTimeButtons(timeblock.id, editDeleteStart.innerHTML, editDeleteEnd.innerHTML, editDeleteStartDecrease, editDeleteStartIncrease);
                  updateEndTimeButtons(timeblock.id, editDeleteEnd.innerHTML, editDeleteEndDecrease, editDeleteEndIncrease);
                  editLocation.value = timeblock.location;
                  editUserNotes.value = timeblock.user_notes;
                });
              } else {
                let sortedBlocks = blocks.sort((a, b)=>{
                  if (a.type.toLowerCase() < b.type.toLowerCase()) {
                    return -1;
                  } else if (a.type.toLowerCase() > b.type.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                currentBlocktype = populateSelections(editDeleteBlocktypeSelector, sortedBlocks, 'add new blocktype...', timeblock);
                if (currentBlocktype.keys === null) {
                  editBlockKeys.setAttribute("style", "display: none;");
                } else {
                  editBlockKeys.setAttribute("style", "display: initial;");
                  let currentKey = populateKeys(blockKeysSelector, currentBlocktype, 'add new value...', timeblock);
                  blockKeysSelector.value = currentKey;
                  if (currentBlocktype.keys.keys.length > 1) {
                    populateKeySubfields(editAdditionalKeys, timeblock, currentBlocktype);

                  }
                }
                setEditorColor(editDeleteAppointments, currentBlocktype.color);
                editDeleteStart.innerHTML = timeString(timeblock.start_time);
                editDeleteEnd.innerHTML = timeString(timeblock.end_time);
                updateStartTimeButtons(timeblock.id, editDeleteStart.innerHTML, editDeleteEnd.innerHTML, editDeleteStartDecrease, editDeleteStartIncrease);
                updateEndTimeButtons(timeblock.id, editDeleteEnd.innerHTML, editDeleteEndDecrease, editDeleteEndIncrease);
                editLocation.value = timeblock.location;
                editUserNotes.value = timeblock.user_notes;
              }

              //// Selector Block Type Listener

              shareTimeblockButton.addEventListener('click', ()=>{
                let schedulePanel = document.getElementById('schedulePanel');
                let shareAppointmentPane = document.getElementById('shareAppointmentPane');
                let dayviewFriendsSearchList = document.getElementById('dayviewFriendsSearchList');
                while (dayviewFriendsSearchList.firstChild) {
                  dayviewFriendsSearchList.removeChild(dayviewFriendsSearchList.firstChild);
                }

                schedulePanel.setAttribute("style", "opacity: 0.1;");
                shareAppointmentPane.setAttribute("style", "background: #ffffff; background-color: -webkit-linear-gradient(135deg, #ffffff, " + currentBlocktype.color + "); background: -o-linear-gradient(135deg, #ffffff, " + currentBlocktype.color + "); background: -moz-linear-gradient(135deg, #ffffff, " + currentBlocktype.color + "); background: linear-gradient(135deg, #ffffff, " + currentBlocktype.color + "); z-index: 6; opacity: 1; transition: opacity 1s linear;");
                populateFriendsAndMaintainEventListeners(blockID);
                dayviewWhoToShareSearch.addEventListener('keyup', ()=>{
                  while (dayviewFriendsSearchList.firstChild) {
                    dayviewFriendsSearchList.removeChild(dayviewFriendsSearchList.firstChild);
                  }
                  if (dayviewWhoToShareSearch.value !== '') {
                    populateFriendsAndMaintainEventListenersWithString(dayviewWhoToShareSearch.value.toLowerCase(), blockID);
                  } else {
                    populateFriendsAndMaintainEventListeners(blockID);
                  }
                });
              });

              editDeleteBlocktypeSelector.addEventListener('change', ()=>{
                if (editDeleteBlocktypeSelector.value !== 'add new blocktype...') {
                  currentBlocktype = changeBlocktype(blocks, editDeleteBlocktypeSelector.value);
                  updateBlockType(timeblock, currentBlocktype);
                  // if (editAdditionalKeys.firstChild) {
                  //   while (editAdditionalKeys.firstChild) {
                  //     editAdditionalKeys.removeChild.firstChild;
                  //   }
                  // }
                  populateKeySubfields(editAdditionalKeys, timeblock, currentBlocktype);
                } else {
                  blocktypeCRUD.setAttribute("style", "display: initial;");
                  editDeleteAppointments.setAttribute("style", "display: none;");
                  blocktypeCRUDHandler(timeblock);
                }
              });

              //// Selector Subtype Listener

              blockKeysSelector.addEventListener('change', ()=>{
                console.log(blockKeysSelector.value);
                if (blockKeysSelector.value !== 'add new value...') {
                  updateBlockSubtype(timeblock, currentBlocktype, blockKeysSelector.value);
                  if (currentBlocktype.keys.keys.length > 1) {
                    populateKeySubfields(editAdditionalKeys, timeblock, currentBlocktype);
                  } else {
                    editAdditionalKeys.setAttribute("style", "display: none;");
                  }
                } else {
                  subtypeCRUD.setAttribute("style", "display: initial;");
                  editDeleteAppointments.setAttribute("style", "display: none;");
                  subtypeCRUDHandler(timeblock, currentBlocktype);
                }
              });

              //// Start Time Decrease Button Listener
              editDeleteStartDecrease.addEventListener('click', ()=>{
                console.log('click');
                rollbackStartTimeHalfHour(timeblock, currentBlocktype);
              });

              //// Start Time Increase Button Listener
              editDeleteStartIncrease.addEventListener('click', ()=>{
                rollforwardStartTimeHalfHour(timeblock, currentBlocktype);

              });

              //// End Time Decrease Button Listener
              editDeleteEndDecrease.addEventListener('click', ()=>{
                rollbackEndTimeHalfHour(timeblock, currentBlocktype);
              });

              //// End Time Increase Button Listener
              editDeleteEndIncrease.addEventListener('click', ()=>{
                rollforwardEndTimeHalfHour(timeblock, currentBlocktype);
              });

              //// Location Field Listener
              editLocation.addEventListener('focusout', ()=>{
                grabLatestLocation(timeblock, editLocation);
              });

              //// User Notes Listener
              editUserNotes.addEventListener('focusout', ()=>{
                grabLatestUserNotes(timeblock, editUserNotes);
              });
            });
          });



          editDeleteAppointments.setAttribute("style", "display: initial;");
          blocktypeCRUD.setAttribute("style", "display: none;");
          goalsPanel.setAttribute("style", "display: none;");



          editAppointmentCancel.addEventListener('click', ()=>{
            editDeleteAppointments.setAttribute("style", "display: none;");
            goalsPanel.setAttribute("style", "display: initial;");
            setScheduleGenerator();
            setGoalsReport();
          });
          editAppointmentDelete.addEventListener('click', ()=>{
            editDeleteAppointments.setAttribute("style", "display: none;");
            goalsPanel.setAttribute("style", "display: initial;");
            if (currentEdit) {
              $http.delete(`/timeblocks/${currentEdit}`)
              .then(deletedData=>{
                let deleted = deletedData.data;
                currentEdit = 0;
                resetScheduleField(deleted);
                setScheduleGenerator();
                setGoalsReport();
              });
            }
          });
        } else {
          console.log(divTimeString);
          //TODO create functionality
          createNewAppointment(divTimeString);
        }
      }

      function createNewAppointment(start) {
        let startIndex = hoursTime.indexOf(start);
        let endIndex = startIndex + 1;
        let mmString = '';
        let ddString = '';
        let startTimeString = '';
        let endTimeString = '';
        let fullStartTimeString = '';
        let fullEndTimeString = '';
        if (hoursTime[startIndex].length === 4) {
          startTimeString = '0' + hoursTime[startIndex];
        } else {
          startTimeString = hoursTime[startIndex];
        }
        if (hoursTime[endIndex].length === 4) {
          endTimeString = '0' + hoursTime[endIndex];
        } else {
          endTimeString = hoursTime[endIndex];
        }
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
          let appointmentObject = {
            user_id: currentUserId,
            block_type: sortedBlocks[0].id,
            user_notes: '',
            location: ''
          };
          let yyyy = viewDate.getFullYear();
          let mm = viewDate.getMonth() + 1;
          let dd = viewDate.getDate();
          let tail = ':00.000Z';
          if (mm < 10) {
            mmString = '0' + mm;
          } else {
            mmString = mm.toString();
          }
          if (dd < 10) {
            ddString = '0' + dd;
          } else {
            ddString = dd.toString();
          }
          fullStartTimeString = yyyy + '-' + mmString + '-' + ddString + 'T' + startTimeString + tail;
          fullEndTimeString = yyyy + '-' + mmString + '-' + ddString + 'T' + endTimeString + tail;
          appointmentObject.start_time = new Date(fullStartTimeString);
          appointmentObject.end_time = new Date(fullEndTimeString);
          if (sortedBlocks[0].keys !== null) {
            appointmentObject.block_data = {};
            appointmentObject.block_data[sortedBlocks[0].keys.keys[0] + "Type"] = 0;
          } else {
            appointmentObject.block_data = null;
          }
          $http.post('/timeblocks', appointmentObject)
          .then(timeblockAddedData=>{
            let timeblockAdded = timeblockAddedData.data[0];
            //TODO add new block to left pane
            let addBlockDiv = document.getElementById(hours[startIndex]);
            let divString = hoursTime[startIndex] + ' - ' + userBlocks[0].type;
            addBlockDiv.children[0].appointment = timeblockAdded.id;
            addBlockDiv.children[0].children[0].innerHTML = divString;
            addBlockDiv.children[0].setAttribute("style", "background-color: " + userBlocks[0].color + "; opacity: 0.8; border-top: solid " + userBlocks[0].color + " 6px;");
            let newButton = document.createElement('button');
            addBlockDiv.children[0].children[0].appendChild(newButton);
            //newButton.innerHTML = 'speak';
            let speaker = document.createElement('img');
            newButton.appendChild(speaker);
            speaker.src ="./img/icon-1628258_640.png";
            speaker.setAttribute("style", "width: 60%;");
            newButton.addEventListener('click', (e)=>{
              e.preventDefault();
              e.stopPropagation();
              console.log(timeblockAdded.id);
              verbalizeTimeblock(timeblockAdded.id);
            });
            //TODO pass new block over to editor
            editAppointment(timeblockAdded.id);
          });
        });

      }

      function setFillAppointments(timeblock, lineID) {
        let element = document.getElementById(lineID);
        element = element.children[0];
        $http.get(`/blocktypes/${timeblock.block_type}`)
        .then(blockData=>{
          let block = blockData.data;
          element.setAttribute("style", "height: 100%; background-color: " + block.color + "; opacity: 0.8; border-top: solid " + block.color + " 3px;");
          element.appointment = timeblock.id;
          element.addEventListener('click', ()=>{
            editAppointment(element.appointment);
          });
        });
      }

      function setToplineAppointment(timeblock, lineID) {
        let element = document.getElementById(lineID);
        element = element.children[0];
        $http.get(`/blocktypes/${timeblock.block_type}`)
        .then(blockData=>{
          let block = blockData.data;
          element.setAttribute("style", "height: 100%; background-color: " + block.color + "; opacity: 0.8; border-top: solid " + block.color + " 3px;");
          element.appointment = timeblock.id;
          element = element.children[0];
          element.innerHTML = element.innerHTML + ' - ' + block.type;
          //element.setAttribute("ng-click", "$ctrl.verbalizeTimeblock(" + parseInt(timeblock.id) + ")");
          let newButton = document.createElement('button');
          element.appendChild(newButton);
          //newButton.innerHTML = 'speak';
          let speaker = document.createElement('img');
          newButton.appendChild(speaker);
          speaker.src ="./img/icon-1628258_640.png";
          speaker.setAttribute("style", "width: 60%;");
          element.appointment = timeblock.id;
          newButton.addEventListener('click', (e)=>{
            e.preventDefault();
            e.stopPropagation();
            verbalizeTimeblock(timeblock.id);
          });
          element.children[0].addEventListener('click', (e)=>{
            e.preventDefault();
            e.stopPropagation();
            editAppointment(element.appointment, element.children[0].innerHTML);
          });
        });
      }

      function getAppointmentTense(referenceDate, startTimeDate) {


        let tense = 'present';
        let start = startTimeDate.toString();
        let referenceYear = referenceDate.getFullYear();
        let startYear = parseInt(start.slice(0, 4));
        let referenceMonth = referenceDate.getMonth() +1;
        let startMonth = start.slice(5, 7);
        startMonth = parseInt(startMonth);
        let referenceDay = referenceDate.getDate();
        let startDay = start.slice(8, 10);
        startDay = parseInt(startDay);

        if (startYear > referenceYear) {
          tense = 'future';
        } else if (startYear < referenceYear) {
          tense = 'past';
        } else {
          if (startMonth > referenceMonth) {
            tense = 'future';
          } else if (startMonth < referenceMonth) {
            tense = 'past';
          } else {
            if (startDay > referenceDay) {
              tense = 'future';
            } else if (startDay < referenceDay) {
              tense = 'past';
            } else {
              tense = 'present';
            }
          }
        }


        return(tense);
      }

      function emptyHourEventListener(element) {
        element.addEventListener('click', (e)=>{
          e.preventDefault();
          e.stopPropagation();
          editAppointment(element.appointment, element.children[0].innerHTML);
        });
      }

      function getCleanTime(block) {
        //console.log(block);
        let time = '';
        if (block[11] === '0') {
          time = block.slice(12, 16);
        } else {
          time = block.slice(11, 16);
        }

        return(time);
      }

      function getBlockDataForAppointments(timeblock, index) {
        let datasString = '';
        $http.get(`/blocktypes/${timeblock.block_type}`)
        .then(blockData=>{
          let block = blockData.data;
          vm.appointments[index].blocktype = block.type;
          if (timeblock.block_data !== null) {
            vm.appointments[index].blocksubtype = block.keys[block.keys.keys[0] + "Values"][timeblock.block_data[block.keys.keys[0]]];
            if (block.keys.keys.length > 1) {
              for (let i = 1; i < block.keys.keys.length; i++) {
                datasString += block.keys.keys[i] + ': \n';
                if (timeblock.block_data[block.keys.keys[i]] !== undefined) {
                  if (timeblock.block_data[block.keys.keys[i]].length > 0) {
                    for (let j = 0; j < timeblock.block_data[block.keys.keys[i]].length; j++) {
                      datasString += '\t' +  timeblock.block_data[block.keys.keys[i]][j] + '\n';
                    }
                  }
                }
              }
              vm.appointments[index].additional_datas = datasString;
            }
          }
        });
      }

      function blockDuration (timeblock) {
        let duration = 0;
        let start = hoursTime.indexOf(getCleanTime(timeblock.start_time));
        let finish = hoursTime.indexOf(getCleanTime(timeblock.end_time));
        if (finish === 0) {
          finish = hoursTime.length - 1;
        }
        duration = (finish - start)/2;
        return(duration);
      }

      function currentWeekGoals(userGoal, index, weekGoal, block) {
        let floatingDate = new Date(viewDate);
        let message = '';
        let quantified;
        let week = [];

        let projected = 0;
        for (let h = 0; h < 7; h++) {
          week[h] = {};
        }


        $http.get(`/timeblocksbyuser/${currentUserId}`)
        .then(userTimeblocksData=>{
          let userTimeblocks = userTimeblocksData.data;
          for (let i = 0; i < week.length; i++) {
            week[i].date = new Date(floatingDate);
            week[i].date.setDate(floatingDate.getDate()+i);
            week[i].timeblocks = [];
            for (let j = 0; j < userTimeblocks.length; j++) {
              if (getAppointmentTense(week[i].date, userTimeblocks[j].start_time) === 'present') {
                week[i].timeblocks.push(userTimeblocks[j]);
              }
            }
          }
          // console.log(week);
          for (let k = 0; k < week.length; k++) {
            if (week[k].timeblocks.length > 0) {
              for (let m = 0; m < week[k].timeblocks.length; m++) {
                if (week[k].timeblocks[m].block_type === userGoal.block_type) {
                  projected += blockDuration(week[k].timeblocks[m]);
                }
              }
            }
          }
          let calendarWeekDiv = document.getElementById(vm.goals[index].type + vm.goals[index].id + vm.goals[index].type + vm.goals[index].id + vm.goals[index].type);
          if (projected < weekGoal) {
            quantified = weekGoal - projected;
            message = quantified + ' hours below goal.';
            if (projected < (weekGoal * 0.6)) {
              overdueFlash(calendarWeekDiv);
            } else if (projected < (weekGoal * 0.7)) {
              calendarWeekDiv.setAttribute("style", "background-color: #ff0000; background-color: -webkit-linear-gradient(135deg, #ff0000, #22aa44); background: -o-linear-gradient(135deg, #ff0000, #22aa44); background: -moz-linear-gradient(135deg, #ff0000, #22aa44); background: linear-gradient(135deg, #ff0000, #22aa44);");
            } else if (projected < (weekGoal * 0.8)) {
              calendarWeekDiv.setAttribute("style", "background-color: #ffff00; background-color: -webkit-linear-gradient(135deg, #ffff00, #22aa44); background: -o-linear-gradient(135deg, #ffff00, #22aa44); background: -moz-linear-gradient(135deg, #ffff00, #22aa44); background: linear-gradient(135deg, #ffff00, #22aa44);");
            } else if (projected < (weekGoal * 0.9)) {
              calendarWeekDiv.setAttribute("style", "background-color: #00ff00; background-color: -webkit-linear-gradient(135deg, #00ff00, #22aa44); background: -o-linear-gradient(135deg, #00ff00, #22aa44); background: -moz-linear-gradient(135deg, #00ff00, #22aa44); background: linear-gradient(135deg, #00ff00, #22aa44);");
            } else {
              calendarWeekDiv.setAttribute("style", "background-color: transparent;");
            }
          } else if (projected > weekGoal) {
            quantified = projected - weekGoal;
            message = quantified + ' hours over goal.';
          } else {
            message = 'You are right on track.';
          }
          vm.goals[index].current_week_total = projected;
          vm.goals[index].current_week_message = message;
          let goalDiv = document.getElementById(vm.goals[index].type + vm.goals[index].id);
          goalDiv.setAttribute("style", "background: " + block.color +"; background-color: -webkit-linear-gradient(135deg, " + block.color + ", #abdada); background: -o-linear-gradient(135deg, " + block.color + ", #abdada); background: -moz-linear-gradient(135deg, " + block.color + ", #abdada); background: linear-gradient(135deg, " + block.color + ", #abdada); opacity: 0.8;");


        });
      }

      function calendarWeekGoals(userGoal, index, weekGoal, block) {
        let floatingDate;
        let message = '';
        let quantified;
        let week = [];

        let projected = 0;
        for (let h = 0; h < 7; h++) {
          week[h] = {};
        }
        console.log(viewDate.getDay());
        if (viewDate.getDay() === 1) {
          floatingDate = new Date(viewDate);
        } else {
          floatingDate = new Date(viewDate);
          while(floatingDate.getDay() !==1) {
            floatingDate.setDate(floatingDate.getDate()-1);
          }
        }
        $http.get(`/timeblocksbyuser/${currentUserId}`)
        .then(userTimeblocksData=>{
          let userTimeblocks = userTimeblocksData.data;
          for (let i = 0; i < week.length; i++) {
            week[i].date = new Date(floatingDate);
            week[i].date.setDate(floatingDate.getDate()+i);
            week[i].timeblocks = [];
            for (let j = 0; j < userTimeblocks.length; j++) {
              if (getAppointmentTense(week[i].date, userTimeblocks[j].start_time) === 'present') {
                week[i].timeblocks.push(userTimeblocks[j]);
              }
            }
          }
          console.log(week);
          for (let k = 0; k < week.length; k++) {
            if (week[k].timeblocks.length > 0) {
              for (let m = 0; m < week[k].timeblocks.length; m++) {
                if (week[k].timeblocks[m].block_type === userGoal.block_type) {
                  projected += blockDuration(week[k].timeblocks[m]);
                }
              }
            }
          }
          let calendarWeekDiv = document.getElementById(vm.goals[index].type + vm.goals[index].id + vm.goals[index].type);
          if (projected < weekGoal) {
            quantified = weekGoal - projected;
            message = quantified + ' hours below goal.';
            if (projected < (weekGoal * 0.6)) {
              overdueFlash(calendarWeekDiv);
            } else if (projected < (weekGoal * 0.7)) {
              calendarWeekDiv.setAttribute("style", "background-color: #ff0000; background-color: -webkit-linear-gradient(135deg, #ff0000, #22aa44); background: -o-linear-gradient(135deg, #ff0000, #22aa44); background: -moz-linear-gradient(135deg, #ff0000, #22aa44); background: linear-gradient(135deg, #ff0000, #22aa44);");
            } else if (projected < (weekGoal * 0.8)) {
              calendarWeekDiv.setAttribute("style", "background-color: #ffff00; background-color: -webkit-linear-gradient(135deg, #ffff00, #22aa44); background: -o-linear-gradient(135deg, #ffff00, #22aa44); background: -moz-linear-gradient(135deg, #ffff00, #22aa44); background: linear-gradient(135deg, #ffff00, #22aa44);");
            } else if (projected < (weekGoal * 0.9)) {
              calendarWeekDiv.setAttribute("style", "background-color: #00ff00; background-color: -webkit-linear-gradient(135deg, #00ff00, #22aa44); background: -o-linear-gradient(135deg, #00ff00, #22aa44); background: -moz-linear-gradient(135deg, #00ff00, #22aa44); background: linear-gradient(135deg, #00ff00, #22aa44);");
            } else {
              calendarWeekDiv.setAttribute("style", "background-color: transparent;");
            }
          } else if (projected > weekGoal) {
            quantified = projected - weekGoal;
            message = quantified + ' hours over goal.';
          } else {
            message = 'You are right on track.';
          }
          vm.goals[index].calendar_week_total = projected;
          vm.goals[index].calendar_week_message = message;


        });

      }

      function grabGoaltypeAndReport (userGoal, index, weekGoal) {
        $http.get(`/blocktypes/${userGoal.block_type}`)
        .then(blockData=>{
          let block = blockData.data;


          vm.goals[index].type = block.type;

          //goalDiv.setAttribute("style", "background: " + block.color +"; background-color: -webkit-linear-gradient(135deg, " + block.color + ", #abdada); background: -o-linear-gradient(135deg, " + block.color + ", #abdada); background: -moz-linear-gradient(135deg, " + block.color + ", #abdada); background: linear-gradient(135deg, " + block.color + ", #abdada);");
          calendarWeekGoals(userGoal, index, weekGoal, block);
          currentWeekGoals(userGoal, index, weekGoal, block);
        });
      }

      function setGoalsReport() {
        let goalsPane = document.getElementById('goalsPane');
        vm.goals = [];
        $http.get(`/goalsbyuser/${currentUserId}`)
        .then(userGoalsData=>{
          let userGoals = userGoalsData.data;
          if (userGoals.length < 1) {
            goalsPane.setAttribute("style", "display: none;");
            return;
          }
          for (let i = 0; i < userGoals.length; i++) {
            vm.goals[i] = {};
            vm.goals[i].weekly_goal = userGoals[i].weekly_goal;
            vm.goals[i].id = userGoals[i].id;
            grabGoaltypeAndReport(userGoals[i], i, userGoals[i].weekly_goal);
          }
        });
      }

      function setScheduleGenerator() {
        let daySchedule = document.getElementById('daySchedule');
        vm.appointments = [];
        let index = 0;
        $http.get(`/timeblocksbyuser/${currentUserId}`)
        .then(fullUserTimeBlocksData=>{
          let fullUserTimeBlocks = fullUserTimeBlocksData.data;
          let todaysTimeblocks = [];
          todaysTimeblocks = fullUserTimeBlocks.filter((block)=>{
            return((getAppointmentTense(viewDate, block.start_time)) === 'present');
          });
          if (todaysTimeblocks.length > 0) {

            for (let i = 0; i < (hoursTime.length - 1); i++) {
              for (let j = 0; j < todaysTimeblocks.length; j++) {
                if (getCleanTime(todaysTimeblocks[j].start_time) === hoursTime[i]) {
                  console.log(hoursTime[i]);
                  vm.appointments[index] = {};
                  vm.appointments[index].start_time_clean = hoursTime[i];
                  vm.appointments[index].end_time_clean = getCleanTime(todaysTimeblocks[j].end_time);
                  getBlockDataForAppointments(todaysTimeblocks[j], index);
                  vm.appointments[index].location = todaysTimeblocks[j].location;
                  vm.appointments[index].user_notes = todaysTimeblocks[j].user_notes;
                  ++index;
                }
              }
            }
            daySchedule.setAttribute("style", "display: initial;");
          } else {
            daySchedule.setAttribute("style", "display: none;");
          }
        });
        daySchedule.setAttribute("style", "background-image: url(../img/background-2044512_1920.jpg); background-repeat: repeat; font-family: 'Neuton', sans-serif; text-align: left; border-top: solid #000000 1px;");
      }

      function detectTimeBlocks() {

        $http.get(`/timeblocksbyuser/${currentUserId}`)
        .then(fullUserTimeblocksData=>{
          let fullUserTimeblocks = fullUserTimeblocksData.data;
          let todaysTimeblocks = [];
          let timeDiv;
          todaysTimeblocks = fullUserTimeblocks.filter((block)=>{
            return ((getAppointmentTense(viewDate, block.start_time)) === 'present');
          });
          if (todaysTimeblocks.length > 0) {
            let fillArray = [];

             for (let i = 0; i < todaysTimeblocks.length; i++) {
               fillArray[i] = [];
               fillArray[i] = timeblockRange(todaysTimeblocks[i]);
               setToplineAppointment(todaysTimeblocks[i], fillArray[i][0]);
               if (fillArray[i].length > 1) {
                 for (let j = 1; j < fillArray[i].length; j++) {
                   setFillAppointments(todaysTimeblocks[i], fillArray[i][j]);
                 }
               }
             }
          }
          for (let k = 0; k < (hours.length - 1); k++) {
            timeDiv = document.getElementById(hours[k]);
            if (timeDiv.children[0].appointment === undefined) {
              emptyHourEventListener(timeDiv.children[0]);
            }
          }
        });
      }

      function historicalTrivia() {
        let sendDate = new Date(viewDate);
        let yearFact = document.getElementById('yearFact');
        let eventFact = document.getElementById('eventFact');

        $http.get(`/onthisdayinhistory/${sendDate}`)
        .then(historicalJSONData=>{
          let historicalJSON = historicalJSONData.data.data;
          let rand = Math.floor(Math.random() * historicalJSON.Events.length);
          yearFact.innerHTML = "On this day in " + historicalJSON.Events[rand].year;
          eventFact.innerHTML = historicalJSON.Events[rand].text;

        });

      }

      function januaryGenerator() {
        let janWords = ['hockey', 'frappe', 'glacial', 'abstraction', 'purloin', 'precis', 'missile', 'unorthodox', 'contrarian', 'glaciation', 'framboise', 'gelid', 'catchment', 'despoil', 'peroration', 'counterfire', 'idiosyncratic', 'myopic', 'metamorphism', 'zabaglione', 'chthonic', 'effluent', 'valorize', 'larghetto', 'glaive', 'incongruous', 'keratomileusis', 'hornblende', 'profiterole', 'faery', 'leachate'];

        return(janWords);
      }

      function februaryGenerator() {
        let febWords = [ 'taffeta', 'gloss', 'velvet', 'sabbath', 'achromatic', 'mordant', 'philosophy', 'chronicle', 'antecedent', 'jacquard', 'brilliance', 'jabot', 'kislev', 'optic', 'sarcastic', 'ethos', 'diarist', 'prevenient', 'chambray', 'eclat', 'shantung', 'shabbat', 'heteroptics', 'contemptuous', 'paradigm', 'hagiographer', 'soteriological', 'seersucker', 'panache'];

        return(febWords);
      }

      function marchGenerator() {
        let marchWords = [ 'transparent', 'facade', 'spyglass', 'suffrage', 'gender', 'sex', 'discrimination', 'daughter', 'mujeres', 'semiperspicuous', 'wainscotting', 'eratosthenes', 'vassalage', 'protogyny', 'pornocracy', 'selectivity', 'sophomore', 'chateaux', 'cymophanous', 'etagere', 'ptolemies', 'confederated', 'antherozoid', 'prostibulous', 'elution', 'signee', 'yquem', 'semitranslucent', 'ormolu', 'fatimid', 'suzerain'];

        return(marchWords);
      }

      function aprilGenerator() {
        let aprilWords = [ 'reservoir', 'hidrosis', 'aqueduct', 'affiliate', 'pitching', 'doubleheaders', 'agents', 'gratis', 'unconfined', 'plenum', 'diaphoresis', 'spillway', 'ancillary', 'baserunning', 'scrimmage', 'intermediaries', 'natch', 'qu', 'politburo', 'tachypnea', 'tributary', 'exogenous', 'errors', 'trochil', 'depolarisation', 'whatchamacallit', 'none', 'dissidence', 'oesophagitis', 'lake' ];

        return (aprilWords);
      }

      function mayGenerator() {
        let mayWords = [ 'environment', 'photinia', 'ligustrum', 'labor', 'egalitarianism', 'collectivism', 'underground', 'modernist', 'krautrock', 'ecosystem', 'nandina', 'cotoneaster', 'project', 'morality', 'statist', 'guerrilla', 'deconstructionist', 'experimentalism', 'phytoplankton', 'ixora', 'pieris', 'engineering', 'aretaics', 'ideology', 'rebellion', 'dadaist', 'psychedelia', 'photosynthesis', 'fritillaria', 'tuberosa', 'technology' ];

        return(mayWords);
      }

      function juneGenerator() {
        let juneWords = [ 'lens', 'luminescent', 'illumination', 'photography', 'camera', 'postcard', 'ambient', 'monotone', 'bagpipe', 'focus', 'radiant', 'daylight', 'cinematographer', 'transmitter', 'leaflet', 'sonic', 'orotund', 'didgeridoo', 'crux', 'sylphlike', 'lucubratory', 'auteur', 'transducer', 'prospectus', 'harmonic', 'turgid', 'gamelan', 'linchpin', 'lissome', 'noctidial' ];

        return(juneWords);
      }

      function julyGenerator() {
        let julyWords = [ 'turbine', 'vapor', 'pressure', 'overthrow', 'unrest', 'transformation', 'exploitation', 'industrial', 'advertising', 'nacelle', 'carbonated', 'stress', 'destabilize', 'chaos', 'revolution', 'deprivation', 'workers', 'hype', 'bezel', 'exhaust', 'accentuate', 'destroy', 'bedlam', 'liberation', 'plight', 'technicians', 'ballyhoo', 'chamfer', 'deplete', 'reinforce', 'obliterate' ];

        return(julyWords);
      }

      function augustGenerator() {
        let augustWords = [ 'incumbent', 'abecedarian', 'original', 'prefecture', 'fashionable', 'progressive', 'bandwidth', 'din', 'cacophony', 'operator', 'basal', 'germinal', 'governorate', 'rakish', 'degenerative', 'amplitude', 'ruckus', 'dissonance', 'franchisee', 'proximal', 'heterochromatic', 'oblast', 'unconventional', 'neurological', 'magnitude', 'tumult', 'abnormality', 'proprietor', 'femoral', 'intramolecular', 'enclave' ];

        return(augustWords);
      }

      function septemberGenerator() {
        let septemberWords = [ 'upholstery', 'hides', 'nubuck', 'blog', 'position', 'situation', 'composite', 'algebra', 'derivation', 'garnish', 'obliterate', 'ripstop', 'open', 'attitude', 'conditions', 'complex', 'numeracy', 'diversion', 'chervil', 'annihilate', 'vulcanised', 'unobstructed', 'mentality', 'stipulation', 'sprawling', 'phonics', 'digression', 'fennel', 'slay', 'monofilaments' ];

        return(septemberWords);
      }

      function octoberGenerator() {
        let octoberWords = [ 'aestival', 'unseasonal', 'gelid', 'ideological', 'imperialism', 'proletariat', 'hardcore', 'argentiferous', 'copper', 'isotherombrose', 'torrential', 'stygian', 'psychotropic', 'empire', 'bourgeoisie', 'adrenalized', 'galena', 'cobalt', 'isocheim', 'severe', 'phantasmal', 'narcotic', 'conglomerate', 'aristocracy', 'slaphappy', 'hornblende', 'luteocobaltic', 'teleutospore', 'brutal', 'saurian', 'psychostimulant' ];

        return(octoberWords);
      }

      function novemberGenerator() {
        let novemberWords = [ 'wavelength', 'grisaille', 'monochrome', 'reductive', 'futurism', 'serialism', 'rift', 'darfur', 'africans', 'exciton', 'mezzotint', 'grayscale', 'tendentious', 'steampunk', 'structuralism', 'estrangement', 'nunc', 'hottentots', 'photoemission', 'gouache', 'antialiasing', 'prejudicial', 'nerd', 'platonism', 'ostracism', 'quis', 'xhosas', 'anisotropy', 'pointillism', 'transmissivity' ];

        return(novemberWords);
      }

      function decemberGenerator() {
        let decemberWords = [ 'sleet', 'precipitation', 'avalanche', 'fiction', 'containerboard', 'granulate', 'volleyball', 'bra', 'national', 'snowy', 'haste', 'snowdrift', 'imagination', 'polypropylene', 'degumming', 'baseball', 'chemise', 'patriot', 'subzero', 'impetuosity', 'slush', 'ingenuity', 'nylon', 'thermic', 'stadium', 'negligee', 'copatriot', 'artic', 'timidity', 'gravel', 'dexterity' ];

        return(decemberWords);
      }

      function generateWordArray() {
        let arr = [ 'helicopter' ];
        let dateGen = new Date(viewDate);
        switch(dateGen.getMonth()) {
          case(0):
            arr = januaryGenerator();
            break;
          case(1):
            arr = februaryGenerator();
            break;
          case(2):
            arr = marchGenerator();
            break;
          case(3):
            arr = aprilGenerator();
            break;
          case(4):
            arr = mayGenerator();
            break;
          case(5):
            arr = juneGenerator();
            break;
          case(6):
            arr = julyGenerator();
            break;
          case(7):
            arr = augustGenerator();
            break;
          case(8):
            arr = septemberGenerator();
            break;
          case(9):
            arr = octoberGenerator();
            break;
          case(10):
            arr = novemberGenerator();
            break;
          case(11):
            arr = decemberGenerator();
            break;
          default:
            console.log(arr);
        }

        return(arr);
      }

      function sendToSaturday(baseWord) {
        let nextWord = '';
        let baseDate = new Date(viewDate);
        $http.get(`/words/${baseWord}`)
        .then(wordList1Data=>{
          let wordList1 = wordList1Data.data;
          if (wordList1.length > 1) {
            nextWord = wordList1[Math.floor(Math.random() * wordList1.length)].word;
          } else if (wordList1.length < 1) {
            nextWord = baseWord;
          } else {
            nextWord = wordList1[0].word;
          }
          nextWord = nextWord.split(' ').join('+');
          $http.get(`/wordassociation/${nextWord}`)
          .then(wordList2Data=>{
            let wordList2 = wordList2Data.data;
            if (wordList2.length > 1) {
              nextWord = wordList2[Math.floor(Math.random() * wordList2.length)].word;
            } else if (wordList2.length < 1) {
              nextWord = nextWord;
            } else {
              nextWord = wordList2[0].word;
            }
            nextWord = nextWord.split(' ').join('+');
            $http.get(`/words/${nextWord}`)
            .then(wordList3Data=>{
              let wordList3 = wordList3Data.data;
              if (wordList3.length > 1) {
                nextWord = wordList3[baseDate.getFullYear() % wordList3.length].word;
              } else if (wordList3.length < 1) {
                nextWord = nextWord;
              } else {
                nextWord = wordList3[0].word;
              }
              nextWord = nextWord.split(' ').join('+');
              $http.get(`/wordassociation/${nextWord}`)
              .then(wordList4Data=>{
                let wordList4 = wordList4Data.data;
                if (wordList4.length > 1) {
                  nextWord = wordList4[Math.floor(Math.random() * wordList4.length)].word;
                } else if (wordList4.length < 1) {
                  nextWord = nextWord;
                } else {
                  nextWord = wordList4[0].word;
                }
                nextWord = nextWord.split(' ').join('+');
                $http.get(`/words/${nextWord}`)
                .then(wordList5Data=>{
                  let wordList5 = wordList5Data.data;
                  if (wordList5.length > 1) {
                    nextWord = wordList5[Math.floor(Math.random() * wordList5.length)].word;
                  } else if (wordList5.length < 1) {
                    nextWord = nextWord;
                  } else {
                    nextWord = wordList5[0].word;
                  }
                  nextWord = nextWord.split(' ').join('+');
                  $http.get(`/words/${nextWord}`)
                  .then(wordList6Data=>{
                    let wordList6 = wordList6Data.data;
                    if (wordList6.length > 1) {
                      nextWord = wordList6[Math.floor(Math.random() * wordList6.length)].word;
                    } else if (wordList6.length < 1) {
                      nextWord = nextWord;
                    } else {
                      nextWord = wordList6[0].word;
                    }
                    nextWord = nextWord.split(' ').join('+');
                    $http.get(`/wordassociation/${nextWord}`)
                    .then(wordList7Data=>{
                      let wordList7 = wordList7Data.data;
                      if (wordList7.length > 1) {
                        nextWord = wordList7[Math.floor(Math.random() * wordList7.length)].word;
                      } else if (wordList7.length < 1) {
                        nextWord = nextWord;
                      } else {
                        nextWord = wordList7[0].word;
                      }
                      if (nextWord.indexOf(' ') !== -1) {
                        nextWord = nextWord.slice(0, nextWord.indexOf(' '));
                      }
                      if (nextWord.indexOf('+') !== -1) {
                        nextWord = nextWord.slice(0, nextWord.indexOf('+'));
                      }
                      sendToDictionary(nextWord);
                    });
                  });
                });
              });
            });
          });
        });
      }

      function sendToFriday(baseWord) {
        let nextWord = '';
        let baseDate = new Date(viewDate);
        $http.get(`/words/${baseWord}`)
        .then(wordList1Data=>{
          let wordList1 = wordList1Data.data;
          if (wordList1.length > 1) {
            nextWord = wordList1[Math.floor(Math.random() * wordList1.length)].word;
          } else if (wordList1.length < 1) {
            nextWord = baseWord;
          } else {
            nextWord = wordList1[0].word;
            nextWord = nextWord.split(' ').join('+');
          }
          $http.get(`/wordassociation/${nextWord}`)
          .then(wordList2Data=>{
            let wordList2 = wordList2Data.data;
            if (wordList2.length > 1) {
              nextWord = wordList2[baseDate.getFullYear() % wordList2.length].word;
            } else if (wordList2.length < 1) {
              nextWord = nextWord;
            } else {
              nextWord = wordList2[0].word;
            }
            if (nextWord.indexOf(' ') !== -1) {
              nextWord = nextWord.slice(0, nextWord.indexOf(' '));
            }
            if (nextWord.indexOf('+') !== -1) {
              nextWord = nextWord.slice(0, nextWord.indexOf('+'));
            }
            sendToDictionary(nextWord);
          });
        });
      }

      function sendToThursday(baseWord) {
        let nextWord = '';
        let baseDate = new Date(viewDate);
        $http.get(`/wordassociation/${baseWord}`)
        .then(wordList1Data=>{
          let wordList1 = wordList1Data.data;
          if (wordList1.length > 1) {
            nextWord = wordList1[baseDate.getFullYear() % wordList1.length].word;
          } else if (wordList1.length < 1) {
            nextWord = baseWord;
          } else {
            nextWord = wordList1[0].word;
          }
          nextWord = nextWord.split(' ').join('+');
          $http.get(`/words/${nextWord}`)
          .then(wordList2Data=>{
            let wordList2 = wordList2Data.data;
            if (wordList2.length > 1) {
              nextWord = wordList2[Math.floor(Math.random() * wordList2.length)].word;
            } else if (wordList2.length < 1) {
              nextWord = nextWord;
            } else {
              nextWord = wordList2[0].word;
            }
            nextWord = nextWord.split(' ').join('+');
            $http.get(`/words/${nextWord}`)
            .then(wordList3Data=>{
              let wordList3 = wordList3Data.data;
              if (wordList3.length > 1) {
                nextWord = wordList3[Math.floor(Math.random() * wordList3.length)].word;
              } else if (wordList3.length < 1) {
                nextWord = nextWord;
              } else {
                nextWord = wordList3[0].word;
              }
              nextWord = nextWord.split(' ').join('+');
              $http.get(`/wordassociation/${nextWord}`)
              .then(wordList4Data=>{
                let wordList4 = wordList4Data.data;
                if (wordList4.length > 1) {
                  nextWord = wordList4[baseDate.getFullYear() % wordList4.length].word;
                } else if (wordList4.length <1) {
                  nextWord = nextWord;
                } else {
                  nextWord = wordList4[0].word;
                }
                nextWord = nextWord.split(' ').join('+');
                $http.get(`/words/${nextWord}`)
                .then(wordList5Data=>{
                  let wordList5 = wordList5Data.data;
                  if (wordList5.length > 1) {
                    nextWord = wordList5[Math.floor(Math.random() * wordList5.length)].word;
                  } else if (wordList5.length < 1) {
                    nextWord = nextWord;
                  } else {
                    nextWord = wordList5[0].word;
                  }
                  if (nextWord.indexOf(' ') !== -1) {
                    nextWord = nextWord.slice(0, nextWord.indexOf(' '));
                  }
                  if (nextWord.indexOf('+') !== -1) {
                    nextWord = nextWord.slice(0, nextWord.indexOf('+'));
                  }
                  sendToDictionary(nextWord);
                });
              });
            });
          });
        });
      }

      function sendToWednesday(baseWord) {
        let nextWord = '';
        let baseDate = new Date(viewDate);
        $http.get(`/wordassociation/${baseWord}`)
        .then(wordList1Data=>{
          let wordList1 = wordList1Data.data;
          if (wordList1.length > 1) {
            nextWord = wordList1[Math.floor(Math.random() * wordList1.length)].word;
          } else if (wordList1.length < 1) {
            nextWord = baseWord;
          } else {
            nextWord = wordList1[0].word;
          }
          nextWord = nextWord.split(' ').join('+');
          $http.get(`/wordassociation/${nextWord}`)
          .then(wordList2Data=>{
            let wordList2 = wordList2Data.data;
            if (wordList2.length > 1) {
              nextWord = wordList2[Math.floor(Math.random() * wordList2.length)].word;
            } else if (wordList2.length < 1) {
              nextWord = nextWord;
            } else {
              nextWord = wordList2[0].word;
            }
            nextWord = nextWord.split(' ').join('+');
            $http.get(`/words/${nextWord}`)
            .then(wordList3Data=>{
              let wordList3 = wordList3Data.data;
              if (wordList3.length > 1) {
                nextWord = wordList3[baseDate.getFullYear() % wordList3.length].word;
              } else if (wordList3.length < 1) {
                nextWord = nextWord;
              } else {
                nextWord = wordList3[0].word;
              }
              nextWord = nextWord.split(' ').join('+');
              $http.get(`/words/${nextWord}`)
              .then(wordList4Data=>{
                let wordList4 = wordList4Data.data;
                if (wordList4.length > 1) {
                  nextWord = wordList4[Math.floor(Math.random() * wordList4.length)].word;
                } else if (wordList4.length < 1) {
                  nextWord = nextWord;
                } else {
                  nextWord = wordList4[0].word;
                }
                nextWord = nextWord.split(' ').join('+');
                $http.get(`/words/${nextWord}`)
                .then(wordList5Data=>{
                  let wordList5 = wordList5Data.data;
                  if (wordList5.length > 1) {
                    nextWord = wordList5[Math.floor(Math.random() * wordList5.length)].word;
                  } else if (wordList5.length < 1) {
                    nextWord = nextWord;
                  } else {
                    nextWord = wordList5[0].word;
                  }
                  if (nextWord.indexOf(' ') !== -1) {
                    nextWord = nextWord.slice(0, nextWord.indexOf(' '));
                  }
                  if (nextWord.indexOf('+') !== -1) {
                    nextWord = nextWord.slice(0, nextWord.indexOf('+'));
                  }
                  sendToDictionary(nextWord);
                });
              });
            });
          });
        });
      }

      function sendToTuesday(baseWord) {
        let nextWord = '';
        let baseDate = new Date(viewDate);
        if ((Math.floor(Math.random() * 4)) === 0) {
          sendToDictionary(baseWord);
        } else {
          $http.get(`/wordassociation/${baseWord}`)
          .then(wordList1Data=>{
            let wordList1 = wordList1Data.data;
            if (wordList1.length > 1) {
              nextWord = wordList1[baseDate.getFullYear() % wordList1.length].word;
            } else if (wordList1.length < 1) {
              nextWord = baseWord;
            } else {
              nextWord = wordList1[0].word;
            }
            nextWord = nextWord.split(' ').join('+');
            $http.get(`/words/${nextWord}`)
            .then(wordList2Data=>{
              let wordList2 = wordList2Data.data;
              if (wordList2.length > 1) {
                nextWord = wordList2[Math.floor(Math.random() * wordList2.length)].word;
              } else if (wordList2.length < 1) {
                nextWord = nextWord;
              } else {
                nextWord = wordList2[0].word;
              }
              if (nextWord.indexOf(' ') !== -1) {
                nextWord = nextWord.slice(0, nextWord.indexOf(' '));
              }
              if (nextWord.indexOf('+') !== -1) {
                nextWord = nextWord.slice(0, nextWord.indexOf('+'));
              }
              sendToDictionary(nextWord);
            });
          });
        }
      }

      function sendToMonday(baseWord) {
        let nextWord = '';
        let baseDate = new Date(viewDate);
        $http.get(`/words/${baseWord}`)
        .then(wordList1Data=>{
          let wordList1 = wordList1Data.data;
          if (wordList1.length > 1) {
            nextWord = wordList1[Math.floor(Math.random() * wordList1.length)].word;
          } else if (wordList1.length < 1) {
            nextWord = baseWord;
          } else {
            nextWord = wordList1[0].word;
          }
          nextWord = nextWord.split(' ').join('+');
          $http.get(`/words/${nextWord}`)
          .then(wordList2Data=>{
            let wordList2 = wordList2Data.data;
            if (wordList2.length > 1) {
              nextWord = wordList2[Math.floor(Math.random() * wordList2.length)].word;
            } else if (wordList2.length < 1) {
              nextWord = nextWord;
            } else {
              nextWord = wordList2[0].word;
            }
            nextWord = nextWord.split(' ').join('+');
            $http.get(`/words/${nextWord}`)
            .then(wordList3Data=>{
              let wordList3 = wordList3Data.data;
              if (wordList3.length > 1) {
                nextWord = wordList3[Math.floor(Math.random() * wordList3.length)].word;
              } else if (wordList3.length < 1) {
                nextWord = nextWord;
              } else {
                nextWord = wordList3[0].word;
              }
              nextWord = nextWord.split(' ').join('+');
              $http.get(`/wordassociation/${nextWord}`)
              .then(wordList4Data=>{
                let wordList4 = wordList4Data.data;
                if (wordList4.length > 1) {
                  nextWord = wordList4[baseDate.getFullYear() % wordList4.length].word;
                } else if (wordList4.length < 1) {
                  nextWord = nextWord;
                } else {
                  nextWord = wordList4[0].word;
                }
                if (nextWord.indexOf(' ') !== -1) {
                  nextWord = nextWord.slice(0, nextWord.indexOf(' '));
                }
                if (nextWord.indexOf('+') !== -1) {
                  nextWord = nextWord.slice(0, nextWord.indexOf('+'));
                }
                sendToDictionary(nextWord);
              });
            });
          });
        });
      }

      function sendToSunday(baseWord) {
        let nextWord = '';
        let baseDate = new Date(viewDate);
        $http.get(`/wordassociation/${baseWord}`)
        .then(associatedWordsData=>{
          let associatedWords = associatedWordsData.data;
          if (associatedWords.length > 1) {
            nextWord = associatedWords[Math.floor(Math.random() * associatedWords.length)].word;
          } else if (associatedWords.length < 1) {
            nextWord = baseWord;
          } else {
            nextWord = associatedWords[0].word;
          }
          nextWord = nextWord.split(' ').join('+');
          $http.get(`/words/${nextWord}`)
          .then(wordDerriveData=>{
            let wordDerrive = wordDerriveData.data;
            if (wordDerrive.length > 1) {
              nextWord = wordDerrive[Math.floor(Math.random() * wordDerrive.length)].word;
            } else if (wordDerrive.length < 1) {
              nextWord = nextWord;
            } else {
              nextWord = wordDerrive[0].word;
            }
            nextWord = nextWord.split(' ').join('+');
            $http.get(`/wordassociation/${nextWord}`)
            .then(nestedWordData=>{
              let nestedWords = nestedWordData.data;
              if (nestedWords.length > 1) {
                nextWord = nestedWords[Math.floor(Math.random() * nestedWords.length)].word;
              } else if (nestedWords.length < 1) {
                nextWord = nextWord;
              } else {
                nextWord = nestedWords[0].word;
              }
              nextWord = nextWord.split(' ').join('+');
              $http.get(`/words/${nextWord}`)
              .then(wordsData=>{
                let words = wordsData.data;
                nextWord = words[baseDate.getFullYear() % words.length].word;
                //console.log(nextWord);
                //nextWord = nextWord.split(' ').join('+');
                if (nextWord.indexOf(' ') !== -1) {
                  nextWord = nextWord.slice(0, nextWord.indexOf(' '));
                }
                if (nextWord.indexOf('+') !== -1) {
                  nextWord = nextWord.slice(0, nextWord.indexOf('+'));
                }
                sendToDictionary(nextWord);
              });
            });
          });
        });
      }

      function sendToDictionary(word) {
        console.log(word);
        let wordOfDay = document.getElementById('wordOfDay');
        let wordSyllable = document.getElementById('wordSyllable');
        let pronounciation = document.getElementById('pronounciation');
        let meaningString = '';
        $http.get(`/dictionary/${word}`)
        .then(xmlData=>{
          let xml = xmlData.data;
          console.log(xml);
          $http.post('/xmlconverter', { data: xml })
          .then(dictionaryReturnData=>{
            let dictionaryReturn = dictionaryReturnData.data.entry_list;
            console.log(dictionaryReturn);
            if ((dictionaryReturn.suggestion !== undefined) && (dictionaryReturn.suggestion.length > 0)) {
              sendToDictionary(dictionaryReturn.suggestion[Math.floor(Math.random() * dictionaryReturn.suggestion.length)]);
            } else {
              if ((dictionaryReturn.entry[0].ew !== undefined) || (dictionaryReturn.entry[0].def !== undefined)) {
                wordOfDay.innerHTML = dictionaryReturn.entry[0].ew;
                if (dictionaryReturn.entry[0].hw[0]._ === undefined) {
                  wordSyllable.innerHTML = dictionaryReturn.entry[0].hw;
                } else {
                  wordSyllable.innerHTML = dictionaryReturn.entry[0].hw[0]._;
                }
                if (dictionaryReturn.entry[0].pr !== undefined) {
                  if ((dictionaryReturn.entry[0].pr[0] === undefined) || (dictionaryReturn.entry[0].pr[0]._ === undefined)) {
                    pronounciation.innerHTML = '(' + dictionaryReturn.entry[0].pr + ')';
                  } else {
                    pronounciation.innerHTML = '(' + dictionaryReturn.entry[0].pr[0]._ + ')';
                  }
                } else {
                  pronounciation.innerHTML = '';
                }
                vm.definitions = [];
                //let incrementDefs = 0;
                for (let i = 0; i < dictionaryReturn.entry.length; i++) {
                  vm.definitions[i] = {};
                  vm.definitions[i].entryWord = dictionaryReturn.entry[i].ew[0];
                  vm.definitions[i].wordType = dictionaryReturn.entry[i].fl[0];
                  meaningString = dictionaryReturn.entry[i].def[0].date + '    ';
                  for (let j = 0; j < dictionaryReturn.entry[i].def[0].dt.length; j++) {
                    //incrementDefs = j + 1;
                    //meaningString += incrementDefs + '. ';
                    if (dictionaryReturn.entry[i].def !== undefined) {
                      if (typeof(dictionaryReturn.entry[i].def[0].dt[j]) === 'object') {
                        //if (dictionaryReturn.entry[i].def[0].dt[j]._ !== undefined) {
                          meaningString += dictionaryReturn.entry[i].def[0].dt[j]._ + ' ';
                        ///} else {
                          ///meaningString += dictionaryReturn.entry[i].def[0].dt[j].un[0] + ' ';
                        ///}
                      } else {
                        meaningString += dictionaryReturn.entry[i].def[0].dt[j] + '. ';
                      }
                    }
                  }
                  vm.definitions[i].definition = meaningString;
                }
              } else {
                wordOfTheDay();
              }
            }
          });
        });
      }

      function wordOfTheDay() {
        let generateDate = new Date(viewDate);
        // $http.get('/dictionary/helicopter')
        //  .then(data=>{
        //    console.log(data.data);
        //    $http.post('/xmlconverter', { data: data.data })
        //    .then(letItFlyData=>{
        //      console.log(letItFlyData.data.entry_list.entry);
        //   });
        //  });
        //TODO write a word generator based on date
        let wordsArray = generateWordArray();
        console.log(wordsArray.length);
        switch(generateDate.getDay()) {
          case(0):
            sendToSunday(wordsArray[generateDate.getDate() - 1]);
            break;
          case(1):
            sendToMonday(wordsArray[generateDate.getDate() - 1]);
            break;
          case(2):
            sendToTuesday(wordsArray[generateDate.getDate() - 1]);
            break;
          case(3):
            sendToWednesday(wordsArray[generateDate.getDate() - 1]);
            break;
          case(4):
            sendToThursday(wordsArray[generateDate.getDate() - 1]);
            break;
          case(5):
            sendToFriday(wordsArray[generateDate.getDate() - 1]);
            break;
          case(6):
            sendToSaturday(wordsArray[generateDate.getDate() - 1]);
            break;
          default:
            console.log('the day is long');
        }
        //TODO run word through a randomized set of synonym, association apis
        //TODO pass final word through dictionary to get definitions
        //TODO send word to front end
      }

      function onInit() {
        console.log("Dayview is lit");
        dayClock = true;
        weekClock = false;
        monthClock = false;
        landingClock = false;



        let weekdaySlot = document.getElementById('weekdaySlot');
        let numdaySlot = document.getElementById('numdaySlot');
        let monthSlot = document.getElementById('monthSlot');
        let yearSlot = document.getElementById('yearSlot');
        let pomoBreakSetting = document.getElementById('pomoBreakSetting');
        pomoBreakSetting.setAttribute("style", "display: none;");
        let numberOfPomos = document.getElementById('numberOfPomos');
        numberOfPomos.setAttribute("style", "display: none;");

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
          dayClock = false;
          window.clearInterval(setClockDay);
          $state.go('landing');
        } else {
          $http.get(`/users/${currentUserId}`)
          .then(userData=>{
            var userAccount = userData.data;
            if ((getCookie(userAccount.security.key)) !== (userAccount.security.value)) {
              let res = document.cookie;
              let multiple = res.split(';');
              let key;
              for (let i = 0; i < multiple.length; i++) {
                key = multiple[i].split('=');
                document.cookie = key[0] + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
              }

              alert('access denied');
              dayClock = false;
              window.clearInterval(setClockDay);
              $state.go('landing');
            }
          });
        }
        viewDate = getDateViewFromParams(userDateViewString);
        weekdaySlot.innerHTML = days[viewDate.getDay()];
        numdaySlot.innerHTML = day;
        monthSlot.innerHTML = months[viewDate.getMonth()];
        yearSlot.innerHTML = year;
        setTimeColors();
        detectHolidays();
        detectOccasions();
        detectBills();
        detectTasks();
        detectTimeBlocks();
        setScheduleGenerator();
        setGoalsReport();
        historicalTrivia();
        wordOfTheDay();
        // $http.get('/dictionary/ems')
        // .then(data=>{
        //   console.log(data.data);
        //   $http.post('/xmlconverter', { data: data.data })
        //   .then(letItFlyData=>{
        //     console.log(letItFlyData.data.entry_list.entry);
        //   });
        // });
      }

    }

}());
