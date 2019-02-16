(function() {
  'use strict';
  var dayClock = false;
  var weekClock = false;
  var monthClock = false;
  var profileClock = true;
  var currentUserId = 0;
  var toggle = {};
  var pastAppointmentIds = [];
  var themeSet = false;


  function setClock(){
    if ((profileClock) && (!dayClock) && (!weekClock) && (!monthClock)) {
       document.getElementById("userProfileClock").innerHTML=new Date().toLocaleTimeString('en-GB');
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
    userAsString = str.slice(position, str.indexOf('recovery='));
    user = parseInt(userAsString);
    return(user);
  }

  function getSecurityStringFromParams(str) {
    let security = '';
    let position = str.indexOf('recovery=');
    position += 9;
    security = str.slice(position);

    return(security);
  }

  function checkValidBancampEmbed(embedString) {
    let valid = true;

    if (embedString.indexOf('src="') === -1) {
      valid = false;
    }
    if (embedString.indexOf('href="') === -1) {
      valid = false;
    }
    if (embedString.indexOf('</a>') === -1) {
      valid = false;
    }
    return(valid);
  }

  function extractSrcStringFromBandcampEmbed(embedString) {
    let srcString = '';
    let startIndex = embedString.indexOf('src="') + 5;
    let endIndex = startIndex;

    while ((embedString[endIndex] !== '"') && (endIndex < embedString.length)) {
      ++endIndex;
    }
    srcString = embedString.slice(startIndex, endIndex);

    return(srcString);
  }

  function extractHrefStringFromBandcampEmbed(embedString) {
    let hrefString = '';
    let startIndex = embedString.indexOf('href="') + 6;
    let endIndex = startIndex;

    while ((embedString[endIndex] !== '"') && (endIndex < embedString.length)) {
      ++endIndex;
    }
    hrefString = embedString.slice(startIndex, endIndex);

    return(hrefString);
  }

  function extractATagFromBandcampEmbed(embedString) {
    let aTag = '';
    let endIndex = embedString.indexOf('</a>');
    let startIndex = endIndex;

    while ((embedString[startIndex] !== '>') && (startIndex > 0)) {
      --startIndex;
    }
    aTag = embedString.slice((startIndex + 1), endIndex);

    return(aTag);
  }


  angular.module('app')
    .component('userprofile', {
      controller: UserprofileController,
      templateUrl: '/js/userprofile/userprofile.template.html'
    });

    UserprofileController.$inject = ['$http', '$state', '$stateParams'];

    function UserprofileController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.gotoDayview = gotoDayview;
      vm.profileEditor = profileEditor;
      vm.closeUserEditor = closeUserEditor;
      vm.userPhotoEditor = userPhotoEditor;
      vm.userPhotoEditDone = userPhotoEditDone;
      vm.gotoMonthView = gotoMonthView;
      vm.gotoWeek = gotoWeek;
      vm.logout = logout;
      vm.photUploader = photUploader;
      vm.blocktypeEditor = blocktypeEditor;
      vm.closeBlocktypeEditor = closeBlocktypeEditor;
      vm.editBlock = editBlock;
      vm.userExistingBlocksEditorDone = userExistingBlocksEditorDone;
      vm.createNewBlocktype = createNewBlocktype;
      vm.blocktypeReport = blocktypeReport;
      vm.blocktypeReportDone = blocktypeReportDone;
      vm.deleteBlock = deleteBlock;
      vm.holidayManage = holidayManage;
      vm.closeHolidayManager = closeHolidayManager;
      vm.occasionManage = occasionManage;
      vm.closeOccasionsManager = closeOccasionsManager;
      vm.editHoliday = editHoliday;
      vm.userHolidayEditorDone = userHolidayEditorDone;
      vm.billsManager = billsManager;
      vm.closeBillsManager = closeBillsManager;
      vm.editOccaision = editOccaision;
      vm.userOccasionsEditorDone = userOccasionsEditorDone;
      vm.deleteHoliday = deleteHoliday;
      vm.taskManager = taskManager;
      vm.closeTasksManager = closeTasksManager;
      vm.editBill = editBill;
      vm.userBillsEditorDone = userBillsEditorDone;
      vm.deleteOccasion = deleteOccasion;
      vm.addNewHoliday = addNewHoliday;
      vm.goalManager = goalManager;
      vm.closeGoalsManager = closeGoalsManager;
      vm.editTask = editTask;
      vm.userTasksEditorDone = userTasksEditorDone;
      vm.deleteBill = deleteBill;
      vm.addNewOccasion = addNewOccasion;
      vm.holidayReport = holidayReport;
      vm.holidayReportDone = holidayReportDone;
      vm.observanceManager = observanceManager;
      vm.closeObservancesManager = closeObservancesManager;
      vm.toggleObservancMonth = toggleObservancMonth;
      vm.editGoal = editGoal;
      vm.userGoalsEditorDone = userGoalsEditorDone;
      vm.deleteTask = deleteTask;
      vm.addNewBill = addNewBill;
      vm.occasionReport = occasionReport;
      vm.occasionsReportDone = occasionsReportDone;
      vm.artsCurationManagement = artsCurationManagement;
      vm.closeArtCurratorManager = closeArtCurratorManager;
      vm.toggleArtCurratorMonth = toggleArtCurratorMonth;
      vm.displayArts = displayArts;
      vm.editObservance = editObservance;
      vm.userObservancesEditorDone = userObservancesEditorDone;
      vm.deleteGoal = deleteGoal;
      vm.addNewTask = addNewTask;
      vm.billsReport = billsReport;
      vm.billsReportDone = billsReportDone;
      vm.musicsCurationManagement = musicsCurationManagement;
      vm.closeMusicCurratorManager = closeMusicCurratorManager;
      vm.toggleMusicCurratorMonth = toggleMusicCurratorMonth;
      vm.displayMusics = displayMusics;
      vm.editArtCurrate = editArtCurrate;
      vm.userArtCurratorEditorDone = userArtCurratorEditorDone;
      vm.deleteObservance = deleteObservance;
      vm.editObservance = editObservance;
      vm.addNewGoal = addNewGoal;
      vm.tasksReport = tasksReport;
      vm.tasksReportDone = tasksReportDone;
      vm.tilesCurratorManagement = tilesCurratorManagement;
      vm.closeTilesCurratorManager = closeTilesCurratorManager;
      vm.toggleTilesCurratorMonth = toggleTilesCurratorMonth;
      vm.tileHoverColor = tileHoverColor;
      vm.tileClick = tileClick;
      vm.editMusicCurrate = editMusicCurrate;
      vm.userMusicCurratorEditorDone = userMusicCurratorEditorDone;
      vm.deleteArtCurrate = deleteArtCurrate;
      vm.addNewObservance = addNewObservance;
      vm.goalsReport = goalsReport;
      vm.goalsReportDone = goalsReportDone;
      vm.modulesManager = modulesManager;
      vm.closeModulesManager = closeModulesManager;
      vm.editTilesCurrate = editTilesCurrate;
      vm.userTilesCurratorEditorDone = userTilesCurratorEditorDone;
      vm.deleteMusicCurrate = deleteMusicCurrate;
      vm.addNewArt = addNewArt;
      vm.observancesReport = observancesReport;
      vm.observanceReportDone = observanceReportDone;
      vm.artModuleDisplay = artModuleDisplay;
      vm.deleteTilesCurrate = deleteTilesCurrate;
      vm.addNewMusic = addNewMusic;
      vm.artCurratorReport = artCurratorReport;
      vm.artsCurratorReportDone = artsCurratorReportDone;
      vm.userEditMessage = userEditMessage;
      vm.userEditMessageCompleted = userEditMessageCompleted;
      vm.musicModuleDisplay = musicModuleDisplay;
      vm.addNewTiles = addNewTiles;
      vm.musicCurratorReport = musicCurratorReport;
      vm.musicCurratorReportDone = musicCurratorReportDone;
      vm.userEditComment = userEditComment;
      vm.userEditCommentCompleted = userEditCommentCompleted;
      vm.userDeleteMessage = userDeleteMessage;
      vm.userMessageDeleteCancel = userMessageDeleteCancel;
      vm.userMessageDeleteConfirmClick = userMessageDeleteConfirmClick;
      vm.tileModuleDisplay = tileModuleDisplay;
      vm.tilesCurratorReport = tilesCurratorReport;
      vm.tileCurratorReportDone = tileCurratorReportDone;
      vm.appointmentYes = appointmentYes;
      vm.appointmentNo = appointmentNo;
      vm.userDeleteComment = userDeleteComment;
      vm.userCommentDeleteCancel = userCommentDeleteCancel;
      vm.userCommentDeleteConfirmClick = userCommentDeleteConfirmClick;
      vm.postNewMessage = postNewMessage;
      vm.messageForAllUsers = messageForAllUsers;
      vm.messageForAllFriends = messageForAllFriends;
      vm.messageDirect = messageDirect;
      vm.userEditTimeblockShareComment = userEditTimeblockShareComment;
      vm.userEditTimeblockShareCommentCompleted = userEditTimeblockShareCommentCompleted;
      vm.deleteTimeblockShare = deleteTimeblockShare;
      vm.timeblockShareDeleteDeny = timeblockShareDeleteDeny;
      vm.timeblockShareDeleteConfirm = timeblockShareDeleteConfirm;
      vm.addNewComment = addNewComment;
      vm.declineHolidayShare = declineHolidayShare;
      vm.acceptHolidayShare = acceptHolidayShare;
      vm.userDeleteTimeblockShareComment = userDeleteTimeblockShareComment;
      vm.userTimeblockCommentDeleteCancel = userTimeblockCommentDeleteCancel;
      vm.userTimeblockCommentDeleteConfirmClick = userTimeblockCommentDeleteConfirmClick;
      vm.artModuleViewer = artModuleViewer;
      vm.artModuleViewDone = artModuleViewDone;
      vm.userEditHolidayShareComment = userEditHolidayShareComment;
      vm.userEditHolidayShareCommentCompleted = userEditHolidayShareCommentCompleted;
      vm.deleteHolidayShare = deleteHolidayShare;
      vm.addNewTimeblockComment = addNewTimeblockComment;
      vm.occasionDeclineSelect = occasionDeclineSelect;
      vm.occasionAcceptSelect = occasionAcceptSelect;
      vm.userDeleteHolidayShareComment = userDeleteHolidayShareComment;
      vm.userHolidayShareCommentDeleteCancel = userHolidayShareCommentDeleteCancel;
      vm.userHolidayShareCommentDeleteConfirmClick = userHolidayShareCommentDeleteConfirmClick;
      vm.shareHolidayWithFriend = shareHolidayWithFriend;
      vm.cancelHolidayInvite = cancelHolidayInvite;
      vm.userEditOccasionShareComment = userEditOccasionShareComment;
      vm.userEditOccasionShareCommentCompleted = userEditOccasionShareCommentCompleted;
      vm.deleteOccasionShare = deleteOccasionShare;
      vm.addNewHolidayShareComment = addNewHolidayShareComment;
      vm.musicModuleViewer = musicModuleViewer;
      vm.musicModuleViewDone = musicModuleViewDone;
      vm.musicViewerSource = '';
      vm.musicViewerAnchor = '';
      vm.musicViewerHref = '';
      vm.declineTask = declineTask;
      vm.acceptTask = acceptTask;
      vm.userDeleteOccasionShareComment = userDeleteOccasionShareComment;
      vm.cancelOccasionInvite = cancelOccasionInvite;
      vm.userEditTaskShareComment = userEditTaskShareComment;
      vm.userEditTaskShareCommentCompleted = userEditTaskShareCommentCompleted;
      vm.deleteTaskShare = deleteTaskShare;
      vm.addNewOccasionShareComment = addNewOccasionShareComment;
      vm.declineObservanceShare = declineObservanceShare;
      vm.acceptObservanceShare = acceptObservanceShare;
      vm.userDeleteTaskShareComment = userDeleteTaskShareComment;
      vm.userTaskShareCommentDeleteCancel = userTaskShareCommentDeleteCancel;
      vm.userTaskShareCommentDeleteConfirmClick = userTaskShareCommentDeleteConfirmClick;
      vm.shareTask = shareTask;
      vm.cancelTaskInvite = cancelTaskInvite;
      vm.tileModuleViewer = tileModuleViewer;
      vm.tileModuleViewDone = tileModuleViewDone;
      vm.userEditObservanceShareComment = userEditObservanceShareComment;
      vm.userEditObservanceShareCommentCompleted = userEditObservanceShareCommentCompleted;
      vm.deleteObservanceShare = deleteObservanceShare;
      vm.addNewTaskShareComment = addNewTaskShareComment;
      vm.declineArtShare = declineArtShare;
      vm.acceptArtShare = acceptArtShare;
      vm.userDeleteObservanceShareComment = userDeleteObservanceShareComment;
      vm.userObservanceShareCommentDeleteCancel = userObservanceShareCommentDeleteCancel;
      vm.userObservanceShareCommentDeleteConfirmClick = userObservanceShareCommentDeleteConfirmClick;
      vm.shareObservance = shareObservance;
      vm.cancelObservanceInvite = cancelObservanceInvite;
      vm.userEditArtModuleComment = userEditArtModuleComment;
      vm.userEditArtModuleCommentCompleted = userEditArtModuleCommentCompleted;
      vm.userEditArtShareComment = userEditArtShareComment;
      vm.userEditArtShareCommentCompleted = userEditArtShareCommentCompleted;
      vm.deleteArtShare = deleteArtShare;
      vm.addNewObservanceShareComment = addNewObservanceShareComment;

      function addNewObservanceShareComment(observanceId) {
        let subObj = {
          user_id: currentUserId,
          observance_share: observanceId,
          comment: ''
        };
        let index = 0;
        for (let i = 0; i < vm.activeObservanceShares.length; i++) {
          if (parseInt(vm.activeObservanceShares[i].id) === parseInt(observanceId)) {
            index = i;
          }
        }
        if ((vm.activeObservanceShares[index].comments === undefined) || (vm.activeObservanceShares[index].comments === null) || (vm.activeObservanceShares[index].comments.length < 1)) {
          vm.activeObservanceShares[index].comments = [];
        }
        $http.post(`/observance_share_comments`, subObj)
        .then(newCommentData => {
          let newComment = newCommentData.data[0];
          let check = new Date(newComment.created_at);
          newComment.cleanDate = cleanDateHoliday(newComment.created_at) + ' at ' + check.toLocaleTimeString('en-GB') + '.';
          vm.activeObservanceShares[index].comments.push(newComment);
          obtainObservanceCommenterDatas(newComment, index, (vm.activeObservanceShares[index].comments.length - 1));

          setTimeout(() => {
            userEditObservanceShareComment(newComment.id);
            document.getElementById('thisIsTheObservanceShareCommentEditor' + newComment.id).focus();
          }, 100);
        });
      }

      function deleteArtShare(artId) {
        $http.delete(`/art_shares/${artId}`)
        .then(deletedArtShareData => {
          let deletedArtShare = deletedArtShareData.data[0];
          for (let i = 0; i <vm.activeArtShares.length; i++) {
            if (parseInt(vm.activeArtShares[i].id) === parseInt(artId)) {
              vm.activeArtShares.splice(i, 1);
            }
          }
        });
      }

      function userEditArtShareCommentCompleted(commentId, artId) {
        let thisIsTheArtShareCommentEditor = document.getElementById('thisIsTheArtShareCommentEditor' + commentId);
        let thisIsArtCommentEditDoneDiv = document.getElementById('thisIsArtCommentEditDoneDiv' + commentId);
        let thisIsArtShareCommentComment = document.getElementById('thisIsArtShareCommentComment' + commentId);
        let editDeleteArtShareCommentDiv = document.getElementById('editDeleteArtShareCommentDiv' + commentId);

        let subObj = {
          comment: thisIsTheArtShareCommentEditor.value
        }

        $http.get(`/art_share_comments/${commentId}`)
        .then(commentData => {
          let comment = commentData.data;
          if (comment.comment !== subObj.comment) {
            $http.patch(`/art_share_comments/${comment.id}`, subObj)
            .then(patchedCommentData => {
              let patchedComment = patchedCommentData.data;
              thisIsTheArtShareCommentEditor.setAttribute("style", "display: none;");
              thisIsArtCommentEditDoneDiv.setAttribute("style", "display: none;");
              thisIsArtShareCommentComment.innerHTML = patchedComment.comment;
              thisIsArtShareCommentComment.setAttribute("style", "visibility: visible;");
              editDeleteArtShareCommentDiv.setAttribute("style", "display: initial;");
            });
          } else {
            thisIsTheArtShareCommentEditor.setAttribute("style", "display: none;");
            thisIsArtCommentEditDoneDiv.setAttribute("style", "display: none;");
            thisIsArtShareCommentComment.setAttribute("style", "visibility: visible;");
            editDeleteArtShareCommentDiv.setAttribute("style", "display: initial;");
          }
        });
      }

      function userEditArtShareComment(commentId, artId) {
        $http.get(`/art_share_comments/${commentId}`)
        .then(commentData => {
          let comment = commentData.data;
          let thisIsTheArtShareCommentEditor = document.getElementById('thisIsTheArtShareCommentEditor' + comment.id);
          let thisIsArtShareCommentComment = document.getElementById('thisIsArtShareCommentComment' + comment.id);
          document.getElementById('editDeleteArtShareCommentDiv' + comment.id).setAttribute("style", "display: none;");
          thisIsTheArtShareCommentEditor.setAttribute("style", "display: initial;");
          thisIsTheArtShareCommentEditor.value = comment.comment;
          thisIsArtShareCommentComment.setAttribute("style", "visibility: hidden;");
          document.getElementById('thisIsArtShareCommentEditDoneDiv' + comment.id).setAttribute("style", "display: initial;");
        });
      }

      function obtainMusicShareMusic (musicShare, index) {
        $http.get(`/${musicShare.music_month}/${musicShare.music_id}`)
        .then(musicSelectionData => {
          let musicSelection = musicSelectionData.data;
          vm.activeMusicShares[index].src_strings = musicSelection.src_string;
          vm.activeMusicShares[index].href_strings = musicSelection.href_string;
          vm.activeMusicShares[index].a_strings = musicSelection.a_string;
        });
      }

      function obtainMusicSharerData(musicShare, index) {
        $http.get(`/users/${musicShare.user_id}`)
        .then(userIdData => {
          let userId = userIdData.data;
          $http.get(`/users/${musicShare.share_associate_id}`)
          .then(shareAssociateIdData => {
            let shareAssociateId = shareAssociateIdData.data;
            if (parseInt(musicShare.share_associate_id) === parseInt(currentUserId)) {
              vm.activeMusicShares[index].inv_img = userId.user_avatar_url;
              vm.activeMusicShares[index].inviter = userId.name;
              vm.activeMusicShares[index].invitee = shareAssociateId.name;
            } else {
              vm.activeMusicShares[index].inv_img = shareAssociateId.user_avatar_url;
              vm.activeMusicShares[index].inviter = shareAssociateId.name;
              vm.activeMusicShares[index].invitee = userId.name;
            }
          });
        })
      }

      function retrieveUserMusicShares() {
        let datea;
        let dateb;
        let check;
        $http.get('music_shares')
        .then(allMusicSharesData => {
          let allMusicShares = allMusicSharesData.data;
          let musicShares = allMusicShares.filter(entry => {
            return((parseInt(entry.user_id) === parseInt(currentUserId)) || (parseInt(entry.share_associate_id) === parseInt(currentUserId)));
          });
          musicShares = musicShares.sort((a, b) => {
            datea = new Date(a.created_at);
            dateb = new Date(b.created_at);
            return ((datea.getTime() - dateb.getTime()));
          });
          if (musicShares.length > 0) {
            vm.activeMusicShares = [];
            for (let i = 0; i < musicShares.length; i++) {
              check = new Date(musicShares[i].created_at);
              vm.activeMusicShares[i] = {
                id: musicShares[i].id,
                music_month: musicShares[i].music_month,
                music_id: musicShares[i].music_id,
                accepted: musicShares[i].accepted,
                created_at: musicShares[i].created_at,
                updated_at: musicShares[i].updated_at,
                user_id: musicShares[i].user_id,
                share_associate_id: musicShares[i].share_associate_id,
                cleanDate: cleanDateHoliday(musicShares[i].created_at) + ' at ' + check.toLocaleTimeString('en-GB') + '.'
              };
              obtainMusicSharerData(musicShares[i], i);
              obtainMusicShareMusic(musicShares[i], i);
            }
            setTimeout(() => {
              for (let j = 0; j < vm.activeMusicShares.length; j++) {
                if (parseInt(vm.activeMusicShares[j].user_id) === parseInt(currentUserId)) {
                  document.getElementById('musicInviter' + vm.activeMusicShares[j].id).setAttribute("style", "display: none;");
                  document.getElementById('musicInvitee' + vm.activeMusicShares[j].id).setAttribute("style", "display: initial;");
                } else {
                  document.getElementById('musicInviter' + vm.activeMusicShares[j].id).setAttribute("style", "display: initial;");
                  document.getElementById('musicInvitee' + vm.activeMusicShares[j].id).setAttribute("style", "display: none;");
                }
              }
            }, (vm.activeMusicShares.length * 100));
          }
        });
      }

      function userEditArtModuleCommentCompleted(commentId, artModId) {
        let thisIsArtModuleCommentComment = document.getElementById('thisIsArtModuleCommentComment' + commentId);
        let thisIsTheArtModuleCommentEditor = document.getElementById('thisIsTheArtModuleCommentEditor' + commentId);
        let thisIsArtModuleCommentEditDoneDiv = document.getElementById('thisIsArtModuleCommentEditDoneDiv' + commentId);
        let editDeleteArtModuleUserComments = document.getElementById('editDeleteArtModuleUserComments' + commentId);

        let subObj = {
          comment: thisIsTheArtModuleCommentEditor.value
        };
        $http.patch(`/art_module_comments/${commentId}`, subObj)
        .then(commentData => {
          let comment = commentData.data;
          thisIsArtModuleCommentComment.innerHTML = subObj.comment;
          thisIsArtModuleCommentComment.setAttribute("style", "visibility: visible;");
          thisIsTheArtModuleCommentEditor.setAttribute("style", "visibility: hidden;");
          thisIsArtModuleCommentEditDoneDiv.setAttribute("style", "display: none;");
          editDeleteArtModuleUserComments.setAttribute("style", "display: initial;");
          for (let i = 0; i < vm.artModulePreview.length; i++) {
            if (parseInt(vm.artModulePreview[i].id) === parseInt(artModId)) {
              for (let j = 0; j < vm.artModulePreview[i].comments.length; j++) {
                if (parseInt(vm.artModulePreview[i].comments[j].id) === parseInt(commentId)) {
                  vm.artModulePreview[i].comments[j].comment = subObj.comment;
                }
              }
            }
          }
        });
      }

      function userEditArtModuleComment(commentId, artModId) {
        let thisIsArtModuleCommentComment = document.getElementById('thisIsArtModuleCommentComment' + commentId);
        let thisIsTheArtModuleCommentEditor = document.getElementById('thisIsTheArtModuleCommentEditor' + commentId);
        let thisIsArtModuleCommentEditDoneDiv = document.getElementById('thisIsArtModuleCommentEditDoneDiv' + commentId);
        let editDeleteArtModuleUserComments = document.getElementById('editDeleteArtModuleUserComments' + commentId);

        $http.get(`/art_module_comments/${commentId}`)
        .then(commentData => {
          let comment = commentData.data;
          thisIsArtModuleCommentComment.setAttribute("style", "visibility: hidden;");
          thisIsTheArtModuleCommentEditor.setAttribute("style", "visibility: visible;");
          thisIsTheArtModuleCommentEditor.value = comment.comment;
          thisIsArtModuleCommentEditDoneDiv.setAttribute("style", "display: initial;");
          editDeleteArtModuleUserComments.setAttribute("style", "display: none;");
        });
      }

      function cancelObservanceInvite() {
        let shareObservancePane = document.getElementById('shareObservancePane');
        let dashboard = document.getElementById('dashboard');

        shareObservancePane.setAttribute("style", "opacity: 0; z-index: -6; transition: opacity 0.5s linear;");
        dashboard.setAttribute("style", "opacity: 1; z-index: 6; transition: opacity 0.5s linear;");
      }

      function userDataForObservanceShare(observance, user, searchString, friendId) {
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
            .then(postedObservanceShareData => {
              let postedObservanceShare = postedObservanceShareData.data;
              cancelObservanceInvite();
            });
          });

        });
      }

      function populateObservanceShareFriendsList(observance, user, searchString) {
        if ((user.associates !== null) && (user.associates.friends !== null) && (user.associates.friends.length > 0)) {
          for (let i = 0; i < user.associates.friends.length; i++) {
            userDataForObservanceShare(observance, user, searchString, user.associates.friends[i]);
          }
        }
      }

      function shareObservance(observanceId) {
        let shareObservancePane = document.getElementById('shareObservancePane');
        let dashboard = document.getElementById('dashboard');
        let observanceShareImage = document.getElementById('observanceShareImage');
        let observanceShareName = document.getElementById('observanceShareName');
        let observanceShareDate = document.getElementById('observanceShareDate');
        let month = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
        let observanceShareSearchBarDiv = document.getElementById('observanceShareSearchBarDiv');
        let observanceWhoToShareSearch = document.getElementById('observanceWhoToShareSearch');
        if (observanceWhoToShareSearch) {
          observanceWhoToShareSearch.parentNode.removeChild(observanceWhoToShareSearch);
          observanceWhoToShareSearch = document.createElement('input');
          observanceShareSearchBarDiv.appendChild(observanceWhoToShareSearch);
          observanceWhoToShareSearch.id = 'observanceWhoToShareSearch';
          observanceWhoToShareSearch.type = 'text';
          observanceWhoToShareSearch.placeholder = 'search';
        }
        let observanceFriendsSearchList = document.getElementById('observanceFriendsSearchList');
        while(observanceFriendsSearchList.firstChild) {
          observanceFriendsSearchList.removeChild(observanceFriendsSearchList.firstChild);
        }

        $http.get(`/observances/${observanceId}`)
        .then(observanceData => {
          let observance = observanceData.data;
          let dayOf = new Date(observance.day_of);
          observanceShareImage.src = observance.picture;
          observanceShareName.innerHTML = observance.name;
          observanceShareDate.innerHTML = 'Every ' + dayOf.getDate() + ' ' + month[dayOf.getMonth()];
          $http.get(`/users/${currentUserId}`)
          .then(userData => {
            let user = userData.data;
            populateObservanceShareFriendsList(observance, user, observanceWhoToShareSearch.value);

            observanceWhoToShareSearch.addEventListener('keyup', () => {
              while(observanceFriendsSearchList.firstChild) {
                observanceFriendsSearchList.removeChild(observanceFriendsSearchList.firstChild);
              }
              populateObservanceShareFriendsList(observance, user, observanceWhoToShareSearch.value);
            });
          });
        });

        shareObservancePane.setAttribute("style", "opacity: 1; z-index: 6; transition: opacity 0.5s linear;");
        dashboard.setAttribute("style", "opacity: 0; z-index: -6; transition: opacity 0.5s linear;");
      }

      function userObservanceShareCommentDeleteConfirmClick(commentId, observeId) {
        $http.delete(`/observance_share_comments/${commentId}`)
        .then(deletedData => {
          let deleted = deletedData.data;
          let delIndex = -1;
          for (let i = 0; i < vm.activeObservanceShares.length; i++) {
            if (parseInt(vm.activeObservanceShares[i].id) === parseInt(observeId)) {
              delIndex = i;
            }
          }
          for (let j = 0; j < vm.activeObservanceShares[delIndex].comments.length; j++) {
            if (parseInt(vm.activeObservanceShares[delIndex].comments[j].id) === parseInt(commentId)) {
              vm.activeObservanceShares[delIndex].comments.splice(j, 1);
            }
          }
        });
      }

      function userObservanceShareCommentDeleteCancel(commentId) {
        let deleteObservanceShareCommentConfirm = document.getElementById('deleteObservanceShareCommentConfirm' + commentId);
        let editDeleteObservanceShareCommentDiv = document.getElementById('editDeleteObservanceShareCommentDiv' + commentId);

        deleteObservanceShareCommentConfirm.setAttribute("style", "display: none;");
        editDeleteObservanceShareCommentDiv.setAttribute("style", "display: initial;");
      }

      function userDeleteObservanceShareComment(commentId) {
        let deleteObservanceShareCommentConfirm = document.getElementById('deleteObservanceShareCommentConfirm' + commentId);
        let editDeleteObservanceShareCommentDiv = document.getElementById('editDeleteObservanceShareCommentDiv' + commentId);

        deleteObservanceShareCommentConfirm.setAttribute("style", "display: initial;");
        editDeleteObservanceShareCommentDiv.setAttribute("style", "display: none;");
      }

      function obtainArtShareMonthThemeData(artMonth, artSharePaneAccept, artShareThemeLabel, artShareAcceptUserThemeInput, suggestedTheme) {
        let path = artMonth + 'byuser';
        $http.get(`/${path}/${currentUserId}`)
        .then(userArtData => {
          let userArt = userArtData.data;
          if (userArt.length > 0) {
            artShareThemeLabel.innerHTML = 'Theme: ' + userArt[0].theme;
            themeSet = true;
            artShareAcceptUserThemeInput.setAttribute("style", "display: none;");
            artSharePaneAccept.setAttribute("style", "visibility: visible;");
          } else {
            if (suggestedTheme !== '') {
              artShareThemeLabel.innerHTML = 'Theme: ' + suggestedTheme;
              themeSet = true;
              artShareAcceptUserThemeInput.setAttribute("style", "display: none;");
              artSharePaneAccept.setAttribute("style", "visibility: visible;");
            } else {
              artShareThemeLabel.innerHTML = 'Theme: ';
              themeSet = false;
              artShareAcceptUserThemeInput.setAttribute("style", "display: initial;");
              artSharePaneAccept.setAttribute("style", "visibility: hidden;");
            }
          }
        });
      }

      function addArtShare(artMonth, suggestedTheme, themeInputValue, acceptArtPane, art, artShareId) {

        let daysInMonth = 0;
        let theTheme = '';
        if (suggestedTheme === '') {
          theTheme = themeInputValue;
        } else {
          theTheme = suggestedTheme;
        }
        switch(artMonth) {
          case('january_arts'):
            daysInMonth = 31;
            break;
          case('february_arts'):
            daysInMonth = 29;
            break;
          case('march_arts'):
            daysInMonth = 31;
            break;
          case('april_arts'):
            daysInMonth = 30;
            break;
          case('may_arts'):
            daysInMonth = 31;
            break;
          case('june_arts'):
            daysInMonth = 30;
            break;
          case('july_arts'):
            daysInMonth = 31;
            break;
          case('august_arts'):
            daysInMonth = 31;
            break;
          case('september_arts'):
            daysInMonth = 30;
            break;
          case('october_arts'):
            daysInMonth = 31;
            break;
          case('november_arts'):
            daysInMonth = 30;
            break;
          case('december_arts'):
            daysInMonth = 31;
            break;
          default:
            console.log('unsupported month');
        }

        function setRulesArray(len, monthDays) {
          let arr = [];
          let total = ((Math.floor(monthDays/len)) + (Math.floor(Math.random() * 4))) + 2;
          let random = 0;

          while (arr.length < total) {
            random = (Math.floor(Math.random() * monthDays)) + 1;
            if (arr.length === 0) {
              arr[0] = random;
            } else {
              if (arr.indexOf(random) === -1) {
                arr.push(random);
              }
            }

          }

          return(arr);
        }

        let path = artMonth + 'byuser';

        $http.get(`/${path}/${currentUserId}`)
        .then(userMonthArtsData => {
          let userMonthArts = userMonthArtsData.data;
          if (userMonthArts.length > 0) {
            let subObj = {
              user_id: currentUserId,
              theme: userMonthArts[0].theme,
              img_path: art.img_path,
              title: art.title,
              artist: art.artist,
              year: art.year,
              rule: {
                monday: setRulesArray(userMonthArts.length, daysInMonth),
                tuesday: setRulesArray(userMonthArts.length, daysInMonth),
                wednesday: setRulesArray(userMonthArts.length, daysInMonth),
                thursday: setRulesArray(userMonthArts.length, daysInMonth),
                friday: setRulesArray(userMonthArts.length, daysInMonth),
                saturday: setRulesArray(userMonthArts.length, daysInMonth),
                sunday: setRulesArray(userMonthArts.length, daysInMonth)
              }
            }
            $http.post(`/${artMonth}`, subObj)
            .then(postedArtData => {
              let postedArt = postedArtData.data;
              acceptArtPane.setAttribute("style", "opacity: 0; z-index: -6; transition: opacity 0.5s linear;");
              let shareObj = {
                accepted: true,
                responded: true
              };
              $http.patch(`/art_shares/${artShareId}`, shareObj)
              .then(sharedData => {
                let shared = sharedData.data;
                console.log(shared);
              });
            });
          } else {
            let subNewObj = {
              user_id: currentUserId,
              theme: theTheme,
              img_path: art.img_path,
              title: art.title,
              artist: art.artist,
              year: art.year,
              rule: {
                monday: setRulesArray(userMonthArts.length, daysInMonth),
                tuesday: setRulesArray(userMonthArts.length, daysInMonth),
                wednesday: setRulesArray(userMonthArts.length, daysInMonth),
                thursday: setRulesArray(userMonthArts.length, daysInMonth),
                friday: setRulesArray(userMonthArts.length, daysInMonth),
                saturday: setRulesArray(userMonthArts.length, daysInMonth),
                sunday: setRulesArray(userMonthArts.length, daysInMonth)
              }
            }
            $http.post(`/${artMonth}`, subNewObj)
            .then(postedNArtData => {
              let postedNArt = postedNArtData.data;
              acceptArtPane.setAttribute("style", "opacity: 0; z-index: -6; transition: opacity 0.5s linear;");
              let sharedNObj = {
                accepted: true,
                responded: true
              };
              $http.patch(`/art_shares/${artShareId}`, sharedNObj)
              .then(sharedNData => {
                let sharedN = sharedNData.data;
                console.log(sharedN);
              });
            });
          }

          document.getElementById('artAcceptDecline' + artShareId).setAttribute("style", "display: none;");
          document.getElementById('artShareAccepted' + artShareId).setAttribute("style", "display: initial;");
          document.getElementById('artShareDeclined' + artShareId).setAttribute("style", "display: none;");
        });
      }

      function acceptArtShare(artShareId, suggestedTheme) {
        let selectorValues = [ 'none', 'january_arts', 'february_arts', 'march_arts', 'april_arts', 'may_arts', 'june_arts', 'july_arts', 'august_arts', 'september_arts', 'october_arts', 'november_arts', 'december_arts' ];
        let selectorLabels = [ '', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
        let ele;
        let acceptArtPane = document.getElementById('acceptArtPane');
        let acceptArtArt = document.getElementById('acceptArtArt');
        let acceptedArtTitle = document.getElementById('acceptedArtTitle');
        let acceptedArtArtistYear = document.getElementById('acceptedArtArtistYear');
        let artShareMonthSelectorDiv = document.getElementById('artShareMonthSelectorDiv');
        while(artShareMonthSelectorDiv.firstChild) {
          artShareMonthSelectorDiv.removeChild(artShareMonthSelectorDiv.firstChild);
        }
        let artShareArtMonthSelect = document.createElement('select');
        artShareMonthSelectorDiv.appendChild(artShareArtMonthSelect);
        artShareArtMonthSelect.id = 'artShareArtMonthSelect';
        for (let ind = 0; ind < selectorValues.length; ind++) {
          ele = document.createElement('option');
          artShareArtMonthSelect.appendChild(ele);
          ele.value = selectorValues[ind];
          ele.innerHTML = selectorLabels[ind];
        }
        artShareArtMonthSelect.value = 'none';
        let artShareAcceptUserThemeInputDiv = document.getElementById('artShareAcceptUserThemeInputDiv');
        let artShareAcceptUserThemeInput = document.getElementById('artShareAcceptUserThemeInput');
        if (artShareAcceptUserThemeInput) {
          artShareAcceptUserThemeInput.parentNode.removeChild(artShareAcceptUserThemeInput);
          artShareAcceptUserThemeInput = document.createElement('input');
          artShareAcceptUserThemeInputDiv.appendChild(artShareAcceptUserThemeInput);
          artShareAcceptUserThemeInput.id = 'artShareAcceptUserThemeInput';
          artShareAcceptUserThemeInput.type = 'text';
          artShareAcceptUserThemeInput.value = '';
        }
        let artSharePaneCancelOrNotDiv = document.getElementById('artSharePaneCancelOrNotDiv');
        let artSharePaneCancel = document.getElementById('artSharePaneCancel');
        if (artSharePaneCancel) {
          artSharePaneCancel.parentNode.removeChild(artSharePaneCancel);
          artSharePaneCancel = document.createElement('a');
          artSharePaneCancelOrNotDiv.appendChild(artSharePaneCancel);
          artSharePaneCancel.id = 'artSharePaneCancel';
          artSharePaneCancel.className = 'btn';
          artSharePaneCancel.innerHTML = 'cancel';
          artSharePaneCancel.setAttribute("style", "cursor: pointer;");
        }
        let artSharePaneAccept = document.getElementById('artSharePaneAccept');
        if (artSharePaneAccept) {
          artSharePaneAccept.parentNode.removeChild(artSharePaneAccept);
          artSharePaneAccept = document.createElement('a');
          artSharePaneCancelOrNotDiv.appendChild(artSharePaneAccept);
          artSharePaneAccept.id = 'artSharePaneAccept';
          artSharePaneAccept.className = 'btn';
          artSharePaneAccept.innerHTML = 'accept';
          artSharePaneAccept.setAttribute("style", "cursor: pointer; visibility: hidden;");

        }
        themeSet = false;
        let artShareThemeLabel = document.getElementById('artShareThemeLabel');

        $http.get(`/art_shares/${artShareId}`)
        .then(shareData => {
          let share = shareData.data;
          $http.get(`/${share.art_month}/${share.art_id}`)
          .then(artData => {
            let art = artData.data;
            acceptArtPane.setAttribute("style", "opacity: 1; z-index: 6; transition: opacity 0.5s linear;");
            acceptArtArt.src = art.img_path;
            acceptedArtTitle.innerHTML = art.title;
            acceptedArtArtistYear.innerHTML = art.artist + ', ' + art.year;

            artShareArtMonthSelect.addEventListener('change', () => {
              if (artShareArtMonthSelect.value === 'none') {
                artSharePaneAccept.setAttribute("style", "visibility: hidden;");
              } else {
                if (themeSet) {
                  artSharePaneAccept.setAttribute("style", "visibility: visible; cursor: pointer;");
                } else {
                  artSharePaneAccept.setAttribute("style", "visibility: hidden;");
                }
                obtainArtShareMonthThemeData(artShareArtMonthSelect.value, artSharePaneAccept, artShareThemeLabel, artShareAcceptUserThemeInput, suggestedTheme);

              }
            });

            artShareAcceptUserThemeInput.addEventListener('keyup', () => {
              if (artShareAcceptUserThemeInput.value === '') {
                themeSet = false;
                artSharePaneAccept.setAttribute("style", "visibility: hidden;");
              } else {
                themeSet = true;
                artSharePaneAccept.setAttribute("style", "visibility: visible; cursor: pointer;");
              }
            });

            artSharePaneCancel.addEventListener('click', () => {
              acceptArtPane.setAttribute("style", "opacity: 0; z-index: -6; transition: opacity 0.5s linear;");
            });

            artSharePaneAccept.addEventListener('click', () => {
              addArtShare(artShareArtMonthSelect.value, suggestedTheme, artShareAcceptUserThemeInput.value, acceptArtPane, art, artShareId);
            });
          });
        });
      }

      function declineArtShare(artShareId) {
        let subObj = {
          accepted: false,
          responded: true
        };
        let artAcceptDecline = document.getElementById('artAcceptDecline' + artShareId);
        let artShareAccepted = document.getElementById('artShareAccepted' + artShareId);
        let artShareDeclined = document.getElementById('artShareDeclined' + artShareId);

        $http.patch(`/art_shares/${artShareId}`, subObj)
        .then(subbedData => {
          let subbed = subbedData.data;
          artAcceptDecline.setAttribute("style", "display: none;");
          artShareAccepted.setAttribute("style", "display: none;");
          artShareDeclined.setAttribute("style", "display: initial;");
        });
      }

      function addNewTaskShareComment(taskId) {
        let cDate = new Date();
        let index;
        let subObj = {
          user_id: currentUserId,
          task_share: taskId,
          comment: ''
        };
        $http.post('/task_share_comments', subObj)
        .then(commentData => {
          let comment = commentData.data[0];
          for (let i = 0; i < vm.activeTaskShares.length; i++) {
            if (vm.activeTaskShares[i].id === taskId) {
              index = i;
            }
          }

          if (vm.activeTaskShares[index].comments === undefined) {
            vm.activeTaskShares[index].comments = [];
          }
          vm.activeTaskShares[index].comments[vm.activeTaskShares[index].comments.length] = {
            id: comment.id,
            comment: comment.comment,
            cleanDate: cleanDateHoliday(comment.created_at) + ' at ' +  cDate.toLocaleTimeString('en-GB'),
            updated_at: comment.updated_at,
            created_at: comment.created_at
          };
          retrieveTaskCommenterProfileInfo(comment.user_id, index, (vm.activeTaskShares[index].comments.length - 1));

          setTimeout(() => {
            userEditTaskShareComment(comment.id);
            document.getElementById('thisIsTheTaskShareCommentEditor' + comment.id).focus();
          }, 100);
        });
      }

      function deleteObservanceShare(shareId) {
        let index;
        for (let i = 0; i < vm.activeObservanceShares.length; i++) {
          if (parseInt(vm.activeObservanceShares[i].id) === parseInt(shareId)) {
            index = i;
          }
        }
        if (index !== undefined) {
          $http.delete(`/observance_shares/${shareId}`)
          .then(shareData => {
            let share = shareData.data;
            console.log(share);
            vm.activeObservanceShares.splice(index, 1);
          });
        }
      }

      function executeEmptyObserveComment(obComId) {
        $http.delete(`/observance_share_comments/${obComId}`)
        .then(goneCommentData => {
          let goneComment = goneCommentData.data;
          for (let i = 0; i < vm.activeObservanceShares.length; i++) {
            if ((vm.activeObservanceShares[i].comments !== undefined) && (vm.activeObservanceShares[i].comments !== null)) {
              for (let j = 0; j < vm.activeObservanceShares[i].comments.length; j++) {
                if (parseInt(vm.activeObservanceShares[i].comments[j].id) === parseInt(obComId)) {
                  vm.activeObservanceShares[i].comments.splice(j, 1);
                }
              }
            }
          }
        });
      }

      function deleteEmptyObervanceComments() {
        $http.get('/observance_share_comments')
        .then(allObserveCommentsData => {
          let allObserveComments = allObserveCommentsData.data;
          let userObserveComments = allObserveComments.filter(a => {
            return(parseInt(a.user_id) === parseInt(currentUserId));
          });
          if (userObserveComments.length > 0) {
            for (let i = 0; i < userObserveComments.length; i++) {
              if (userObserveComments[i].comment === '') {
                executeEmptyObserveComment(userObserveComments[i].id);
              }
            }
          }
        })
      }

      function userEditObservanceShareCommentCompleted (commentId) {
        let thisIsTheObservanceShareCommentEditor = document.getElementById('thisIsTheObservanceShareCommentEditor' + commentId);
        let thisIsObservanceShareCommentEditDoneDiv = document.getElementById('thisIsObservanceShareCommentEditDoneDiv' + commentId);
        let thisIsObservanceShareCommentComment = document.getElementById('thisIsObservanceShareCommentComment' + commentId);

        $http.get(`/observance_share_comments/${commentId}`)
        .then(commentData => {
          let comment = commentData;
          thisIsTheObservanceShareCommentEditor.setAttribute("style", "display: none;");
          thisIsObservanceShareCommentEditDoneDiv.setAttribute("style", "display: none;");
          thisIsObservanceShareCommentComment.setAttribute("style", "visibility: visible;");
          if (thisIsTheObservanceShareCommentEditor.value !== comment.comment) {
            let now = new Date();
            let subObj = {
              comment: thisIsTheObservanceShareCommentEditor.value,
              updated_at: now
            }
            $http.patch(`/observance_share_comments/${commentId}`, subObj)
            .then(editedCommentData => {
              let editedComment = editedCommentData.data;
              thisIsObservanceShareCommentComment.innerHTML = subObj.comment;
              if (parseInt(editedComment.user_id) === parseInt(currentUserId)) {
                document.getElementById('editDeleteObservanceShareCommentDiv' + editedComment.id).setAttribute("style", "display: initial;");
              }
              deleteEmptyObervanceComments();
            });
          }
        });
      }

      function userEditObservanceShareComment(commentId) {
        let thisIsTheObservanceShareCommentEditor = document.getElementById('thisIsTheObservanceShareCommentEditor' + commentId);
        let thisIsObservanceShareCommentEditDoneDiv = document.getElementById('thisIsObservanceShareCommentEditDoneDiv' + commentId);
        let thisIsObservanceShareCommentComment = document.getElementById('thisIsObservanceShareCommentComment' + commentId);

        $http.get(`/observance_share_comments/${commentId}`)
        .then(commentData => {
          let comment = commentData.data;
          thisIsTheObservanceShareCommentEditor.setAttribute("style", "display: initial;");
          thisIsTheObservanceShareCommentEditor.value = comment.comment;
          thisIsObservanceShareCommentEditDoneDiv.setAttribute("style", "display: initial;");
          thisIsObservanceShareCommentComment.setAttribute("style", "visibility: hidden;");
        });
      }

      function getArtDatas(artShare, index) {
        $http.get(`/${artShare.art_month}/${artShare.art_id}`)
        .then(artData => {
          let art = artData.data;
          vm.activeArtShares[index].img_path = art.img_path;
          vm.activeArtShares[index].title = art.title;
          vm.activeArtShares[index].artist = art.artist;
          vm.activeArtShares[index].year = art.year;
          if (art.theme !== '') {
            vm.activeArtShares[index].suggestedTheme = 'Suggested Theme: ' + art.theme;
          } else {
            vm.activeArtShares[index].suggestedTheme = '';
          }

        });
      }

      function getArtShareUserData(artShare, index) {
        $http.get(`/users/${artShare.share_associate_id}`)
        .then(inviteeData => {
          let invitee = inviteeData.data;
          $http.get(`/users/${artShare.user_id}`)
          .then(inviterData => {
            let inviter = inviterData.data;
            vm.activeArtShares[index].inviter = inviter.name;
            vm.activeArtShares[index].invitee = invitee.name;
            if (parseInt(artShare.share_associate_id) === parseInt(currentUserId)) {
              vm.activeArtShares[index].inv_img = inviter.user_avatar_url;
            } else {
              vm.activeArtShares[index].inv_img = invitee.user_avatar_url;
            }
            vm.activeArtShares[index].invitedImg = invitee.user_avatar_url;
          });
        });
      }

      function getArtShareCommenterDetails(shareComment, shareIndex, commentIndex) {
        $http.get(`/users/${shareComment.user_id}`)
        .then(commenterData => {
          let commenter = commenterData.data;
          vm.activeArtShares[shareIndex].comments[commentIndex].user_avatar_url = commenter.user_avatar_url;
          vm.activeArtShares[shareIndex].comments[commentIndex].name = commenter.name;
        });
      }

      function getArtShareComments(artShare, index) {
        let check;

        $http.get('/art_share_comments')
        .then(artShareCommentsData => {
          let artShareComments = artShareCommentsData.data;
          let shareComments = artShareComments.filter(entry => {
            return(entry.art_share === artShare.id);
          });
          if (shareComments.length > 0) {
            for (let i = 0; i < shareComments.length; i++) {
              if (i === 0) {
                vm.activeArtShares[index].comments = [];
              }
              vm.activeArtShares[index].comments[i] = {
                id: shareComments[i].id,
                comment: shareComments[i].comment,
                user_id: shareComments[i].user_id
              };
              getArtShareCommenterDetails(shareComments[i], index, i);
              check = new Date(shareComments[i].created_at);
              vm.activeArtShares[index].comments[i].cleanDate = cleanDateHoliday(shareComments[i].created_at) + ' at ' + check.toLocaleTimeString('en-GB') + '.';
            }
            setTimeout(() => {
              for (let j = 0; j < vm.activeArtShares[index].comments.length; j++) {
                if (parseInt(vm.activeArtShares[index].comments[j].user_id) === parseInt(currentUserId)) {
                  document.getElementById('editDeleteArtShareCommentDiv' + vm.activeArtShares[index].comments[j].id).setAttribute("style", "display: initial;");
                } else {
                  document.getElementById('editDeleteArtShareCommentDiv' + vm.activeArtShares[index].comments[j].id).setAttribute("style", "display: none;");
                }
                document.getElementById('thisIsTheArtShareCommentEditor' + vm.activeArtShares[index].comments[j].id).setAttribute("style", "display: none;");
                document.getElementById('thisIsArtShareCommentEditDoneDiv' + vm.activeArtShares[index].comments[j].id).setAttribute("style", "display: none;");
              }
            }, (vm.activeArtShares[index].comments.length * 100));
          }
        });
      }

      function retrieveUserArtShares() {
        let aDate;
        let bDate;
        let check;

        $http.get('/art_shares')
        .then(allArtSharesData => {
          let allArtShares = allArtSharesData.data;
          let artShares = allArtShares.filter(entry => {
            return((parseInt(entry.share_associate_id) === parseInt(currentUserId)) || (parseInt(entry.user_id) === parseInt(currentUserIs)));
          });
          artShares = artShares.sort((a, b) => {
            aDate = new Date(a.created_at);
            bDate = new Date(b.created_at);
            return(aDate.getDate() - bDate.getDate());
          });
          if (artShares.length > 0) {
            vm.activeArtShares = [];
            for (let i = 0; i < artShares.length; i++) {
              check = new Date(artShares[i].created_at);
              vm.activeArtShares[i] = {};
              vm.activeArtShares[i].id = artShares[i].id;
              vm.activeArtShares[i].user_id = artShares[i].user_id;
              vm.activeArtShares[i].share_associate_id = artShares[i].share_associate_id;
              vm.activeArtShares[i].responded = artShares[i].responded;
              vm.activeArtShares[i].accepted = artShares[i].accepted;
              vm.activeArtShares[i].cleanDate = cleanDateHoliday(artShares[i].created_at) + ' at ' + check.toLocaleTimeString('en-GB') + '.';
              getArtShareUserData(artShares[i], i);
              getArtDatas(artShares[i], i);
              getArtShareComments(artShares[i], i);
            }
            setTimeout(() => {
              for (let j = 0; j < vm.activeArtShares.length; j++) {
                if ((parseInt(vm.activeArtShares[j].share_associate_id) === parseInt(currentUserId))) {
                  document.getElementById('thisIsArtShareDeleteDiv' + vm.activeArtShares[j].id).setAttribute("style", "display: none;");
                  document.getElementById('artblockInviter' + vm.activeArtShares[j].id).setAttribute("style", "display: initial;");
                  document.getElementById('artblockInvitee' + vm.activeArtShares[j].id).setAttribute("style", "display: none;");
                  if (vm.activeArtShares[j].responded) {
                    document.getElementById('artAcceptDecline' + vm.activeArtShares[j].id).setAttribute("style", "display: none;");
                    if (vm.activeArtShares[j].accepted) {
                      document.getElementById('artShareAccepted' + vm.activeArtShares[j].id).setAttribute("style", "display: initial;");
                      document.getElementById('artShareDeclined' + vm.activeArtShares[j].id).setAttribute("style", "display: none;");
                    } else {
                      document.getElementById('artShareAccepted' + vm.activeArtShares[j].id).setAttribute("style", "display: none;");
                      document.getElementById('artShareDeclined' + vm.activeArtShares[j].id).setAttribute("style", "display: initial;");
                    }
                  } else {
                    document.getElementById('artAcceptDecline' + vm.activeArtShares[j].id).setAttribute("style", "display: initial; margin-left: 5vmin;");
                    document.getElementById('artShareAccepted' + vm.activeArtShares[j].id).setAttribute("style", "display: none;");
                    document.getElementById('artShareDeclined' + vm.activeArtShares[j].id).setAttribute("style", "display: none;");
                  }
                } else {
                  document.getElementById('thisIsArtShareDeleteDiv' + vm.activeArtShares[j].id).setAttribute("style", "display: initial;");
                  document.getElementById('artblockInviter' + vm.activeArtShares[j].id).setAttribute("style", "display: none;");
                  document.getElementById('artblockInvitee' + vm.activeArtShares[j].id).setAttribute("style", "display: initial;");
                  document.getElementById('artAcceptDecline' + vm.activeArtShares[j].id).setAttribute("style", "display: none;");
                  if (vm.activeArtShares[j].responded) {
                    if (vm.activeArtShares[j].accepted) {
                      document.getElementById('artShareAccepted' + vm.activeArtShares[j].id).setAttribute("style", "display: initial;");
                      document.getElementById('artShareDeclined' + vm.activeArtShares[j].id).setAttribute("style", "display: none;");
                    } else {
                      document.getElementById('artShareAccepted' + vm.activeArtShares[j].id).setAttribute("style", "display: none;");
                      document.getElementById('artShareDeclined' + vm.activeArtShares[j].id).setAttribute("style", "display: initial;");
                    }
                  } else {
                    document.getElementById('artShareAccepted' + vm.activeArtShares[j].id).setAttribute("style", "display: none;");
                    document.getElementById('artShareDeclined' + vm.activeArtShares[j].id).setAttribute("style", "display: none;");
                  }
                }
              }
            }, 150);
          }
        });
      }

      function tileModuleViewDone() {
        let tileModuleViewPane = document.getElementById('tileModuleViewPane');
        let dashboard = document.getElementById('dashboard');

        tileModuleViewPane.setAttribute("style", "visibility: hidden; opacity: 0; z-index: -6; transition: opacity 0.5s linear;");
        dashboard.setAttribute("style", "z-index: 6; opacity: 1; transition: opacity 0.4s linear;");
      }

      function tileModuleViewer(userId, theme) {
        let tileModuleViewPane = document.getElementById('tileModuleViewPane');
        let dashboard = document.getElementById('dashboard');
        let tileModuleViewAuthorPic = document.getElementById('tileModuleViewAuthorPic');
        let tileModuleViewAuthorName = document.getElementById('tileModuleViewAuthorName');
        let tileModuleViewTheme = document.getElementById('tileModuleViewTheme');
        let indexLeft = 0;
        let indexCenter = 0;
        let indexRight = 0;
        let tileModuleViewPictureCenter = document.getElementById('tileModuleViewPictureCenter');
        let randomDate = 0;
        let hoverOverColor = '#000000';
        let hoverOutColor = '#ffffff';
        let tileModuleViewPictureLeft = document.getElementById('tileModuleViewPictureLeft');
        let tileModuleViewPictureRight = document.getElementById('tileModuleViewPictureRight');
        while(tileModuleViewPictureCenter.firstChild) {
          tileModuleViewPictureCenter.removeChild(tileModuleViewPictureCenter.firstChild);
        }
        let numberDate = document.createElement('p');
        tileModuleViewPictureCenter.appendChild(numberDate);
        let tileModuleViewNavButtons = document.getElementById('tileModuleViewNavButtons');
        let tileModuleViewNavNext = document.getElementById('tileModuleViewNavNext');
        if (tileModuleViewNavNext) {
          tileModuleViewNavNext.parentNode.removeChild(tileModuleViewNavNext);
          tileModuleViewNavNext = document.createElement('a');
          tileModuleViewNavButtons.appendChild(tileModuleViewNavNext);
          tileModuleViewNavNext.id = 'tileModuleViewNavNext';
          tileModuleViewNavNext.className = 'btn';
          tileModuleViewNavNext.setAttribute("style", "cursor: pointer;");
          tileModuleViewNavNext.innerHTML = 'next';
        }
        let tileModuleViewNavPrevious = document.getElementById('tileModuleViewNavPrevious');
        if (tileModuleViewNavPrevious) {
          tileModuleViewNavPrevious.parentNode.removeChild(tileModuleViewNavPrevious);
          tileModuleViewNavPrevious = document.createElement('a');
          tileModuleViewNavButtons.appendChild(tileModuleViewNavPrevious);
          tileModuleViewNavPrevious.id = 'tileModuleViewNavPrevious';
          tileModuleViewNavPrevious.className = 'btn';
          tileModuleViewNavPrevious.setAttribute("style", "cursor: pointer;");
          tileModuleViewNavPrevious.innerHTML = 'prev';
        }


        $http.get(`/users/${userId}`)
        .then(authorData => {
          let author = authorData.data;
          tileModuleViewAuthorPic.src = author.user_avatar_url;
          tileModuleViewAuthorName.innerHTML = 'Contributor: ' + author.name;
          tileModuleViewTheme.innerHTML = 'Theme: ' + theme;
          $http.get('/tiles_modules')
          .then(allTilesData => {
            let allTiles = allTilesData.data;
            let tileModule = allTiles.filter(entry => {
              return((parseInt(entry.user_author_id) === parseInt(userId)) && (entry.theme === theme));
            });
            tileModule = tileModule.sort((a, b) => {
              if (a.type.toLowerCase() < b.type.toLowerCase()) {
                return -1;
              } else if (a.type.toLowerCase() > b.type.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            indexLeft = tileModule.length - 1;
            indexRight = 1;
            randomDate = Math.floor(Math.random() * 31) + 1;
            tileModuleViewPictureCenter.firstChild.innerHTML = randomDate.toString();
            tileModuleViewPictureCenter.firstChild.setAttribute("style", "color: " + tileModule[0].color_dark + ";");
            hoverOverColor = tileModule[0].color_light;
            hoverOutColor = tileModule[0].color_dark;
            tileModuleViewPictureCenter.setAttribute("style", "background-image: url(" + tileModule[0].src_string + "); background-repeat: " + tileModule[0].repeat_value + "; background-size: " + tileModule[0].size_value + "; border: 10px solid " + tileModule[0].color_medium + ";");
            switch(tileModule[0].type) {
              case('default'):
                tileModuleViewTheme.innerHTML = 'Theme: ' + theme + ' -  ' + 'off-month tile';
                break;
              case('mtwt'):
                tileModuleViewTheme.innerHTML = 'Theme: ' + theme + ' -  ' + 'Mon/Tue/Wed/Thu tile';
                break;
              case('week'):
                tileModuleViewTheme.innerHTML = 'Theme: ' + theme + '  - ' + 'week tile';
                break;
              case('friday'):
                tileModuleViewTheme.innerHTML = 'Theme: ' + theme + '  - ' + 'friday tile';
                break;
              case('saturday'):
                tileModuleViewTheme.innerHTML = 'Theme: ' + theme + '  - ' + 'saturday tile';
                break;
              case('sunday'):
                tileModuleViewTheme.innerHTML = 'Theme: ' + theme + ' -  ' + 'sunday tile';
                break;
              case('holiday'):
                tileModuleViewTheme.innerHTML = 'Theme: ' + theme + '  - ' + 'holiday tile';
                break;
              default:
                console.log('unsupported tile type');
            }
            tileModuleViewPictureLeft.firstChild.src = tileModule[indexLeft].src_string;
            tileModuleViewPictureRight.firstChild.src = tileModule[indexRight].src_string;

            numberDate.addEventListener('mouseover', () => {
              numberDate.setAttribute("style", "color: " + hoverOverColor + "; cursor: pointer;");
            });
            numberDate.addEventListener('mouseout', () => {
              numberDate.setAttribute("style", "color: " + hoverOutColor + "; cursor: pointer;");
            });

            tileModuleViewNavNext.addEventListener('click', () => {
              indexLeft = indexCenter;
              indexCenter = indexRight;
              indexRight += 1;
              if (indexRight === tileModule.length) {
                indexRight = 0;
              }
              randomDate = Math.floor(Math.random() * 31) + 1;
              tileModuleViewPictureCenter.firstChild.innerHTML = randomDate.toString();
              tileModuleViewPictureCenter.firstChild.setAttribute("style", "color: " + tileModule[indexCenter].color_dark + ";");
              hoverOverColor = tileModule[indexCenter].color_light;
              hoverOutColor = tileModule[indexCenter].color_dark;
              tileModuleViewPictureCenter.setAttribute("style", "background-image: url(" + tileModule[indexCenter].src_string + "); background-repeat: " + tileModule[indexCenter].repeat_value + "; background-size: " + tileModule[indexCenter].size_value + "; border: 10px solid " + tileModule[indexCenter].color_medium + ";");
              switch(tileModule[indexCenter].type) {
                case('default'):
                  tileModuleViewTheme.innerHTML = 'Theme: ' + theme + ' -  ' + 'off-month tile';
                  break;
                case('mtwt'):
                  tileModuleViewTheme.innerHTML = 'Theme: ' + theme + ' -  ' + 'Mon/Tue/Wed/Thu tile';
                  break;
                case('week'):
                  tileModuleViewTheme.innerHTML = 'Theme: ' + theme + '  - ' + 'week tile';
                  break;
                case('friday'):
                  tileModuleViewTheme.innerHTML = 'Theme: ' + theme + '  - ' + 'friday tile';
                  break;
                case('saturday'):
                  tileModuleViewTheme.innerHTML = 'Theme: ' + theme + '  - ' + 'saturday tile';
                  break;
                case('sunday'):
                  tileModuleViewTheme.innerHTML = 'Theme: ' + theme + ' -  ' + 'sunday tile';
                  break;
                case('holiday'):
                  tileModuleViewTheme.innerHTML = 'Theme: ' + theme + '  - ' + 'holiday tile';
                  break;
                default:
                  console.log('unsupported tile type');
              }
              tileModuleViewPictureLeft.firstChild.src = tileModule[indexLeft].src_string;
              tileModuleViewPictureRight.firstChild.src = tileModule[indexRight].src_string;

            });
            tileModuleViewNavPrevious.addEventListener('click', () => {
              indexRight = indexCenter;
              indexCenter = indexLeft;
              indexLeft -= 1;
              if (indexLeft < 0) {
                indexLeft = tileModule.length - 1;
              }
              randomDate = Math.floor(Math.random() * 31) + 1;
              tileModuleViewPictureCenter.firstChild.innerHTML = randomDate.toString();
              tileModuleViewPictureCenter.firstChild.setAttribute("style", "color: " + tileModule[indexCenter].color_dark + ";");
              hoverOverColor = tileModule[indexCenter].color_light;
              hoverOutColor = tileModule[indexCenter].color_dark;
              tileModuleViewPictureCenter.setAttribute("style", "background-image: url(" + tileModule[indexCenter].src_string + "); background-repeat: " + tileModule[indexCenter].repeat_value + "; background-size: " + tileModule[indexCenter].size_value + "; border: 10px solid " + tileModule[indexCenter].color_medium + ";");
              switch(tileModule[indexCenter].type) {
                case('default'):
                  tileModuleViewTheme.innerHTML = 'Theme: ' + theme + ' -  ' + 'off-month tile';
                  break;
                case('mtwt'):
                  tileModuleViewTheme.innerHTML = 'Theme: ' + theme + ' -  ' + 'Mon/Tue/Wed/Thu tile';
                  break;
                case('week'):
                  tileModuleViewTheme.innerHTML = 'Theme: ' + theme + '  - ' + 'week tile';
                  break;
                case('friday'):
                  tileModuleViewTheme.innerHTML = 'Theme: ' + theme + '  - ' + 'friday tile';
                  break;
                case('saturday'):
                  tileModuleViewTheme.innerHTML = 'Theme: ' + theme + '  - ' + 'saturday tile';
                  break;
                case('sunday'):
                  tileModuleViewTheme.innerHTML = 'Theme: ' + theme + ' -  ' + 'sunday tile';
                  break;
                case('holiday'):
                  tileModuleViewTheme.innerHTML = 'Theme: ' + theme + '  - ' + 'holiday tile';
                  break;
                default:
                  console.log('unsupported tile type');
              }
              tileModuleViewPictureLeft.firstChild.src = tileModule[indexLeft].src_string;
              tileModuleViewPictureRight.firstChild.src = tileModule[indexRight].src_string;
            });

          });
        });

        tileModuleViewPane.setAttribute("style", "visibility: visible; opacity: 1; z-index: 6; transition: opacity 0.5s linear;");
        dashboard.setAttribute("style", "z-index: -6; opacity: 0.3; transition: opacity 0.4s linear;");
      }

      function cancelTaskInvite() {
        let shareTaskPane = document.getElementById('shareTaskPane');

        shareTaskPane.setAttribute("style", "z-index: -6; opacity: 0; transition: opacity 0.5s linear;");
      }

      function populateFriendSelectorTaskShare(imageDiv, nameDiv, friendId) {
        $http.get(`/users/${friendId}`)
        .then(friendData => {
          let friend = friendData.data;
          imageDiv.src = friend.user_avatar_url;
          nameDiv.innerHTML = friend.name;
        });
      }

      function listenForFriendTaskAdd(friendDiv, friendId, taskId) {
        friendDiv.addEventListener('click', () => {
          let subObj = {
            user_id: currentUserId,
            task_id: taskId,
            share_associate_id: friendId,
            responded: false,
            accepted: false
          };
          $http.post('/task_shares', subObj)
          .then(sharedData => {
            let shared = sharedData.data;
            cancelTaskInvite();
          });
        });
      }

      function taskFriendsListFiltered(taskFriendsSearchList, friendId, filter, taskId) {
        let friendDiv;
        let theImg;
        let theName;
        let theBr;

        $http.get(`/users/${friendId}`)
        .then(friendData => {
          let friend = friendData.data;
          if ((friend.name.toLowerCase().indexOf(filter) !== -1) || (friend.email.toLowerCase().indexOf(filter) !== -1)) {
            friendDiv = document.createElement('div');
            taskFriendsSearchList.appendChild(friendDiv);
            theImg = document.createElement('img');
            friendDiv.appendChild(theImg);
            theImg.src = friend.user_avatar_url;
            theName = document.createElement('p');
            friendDiv.appendChild(theName);
            theName.innerHTML = friend.name;
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
            listenForFriendTaskAdd(friendDiv, friendId, taskId);
          }

        });
      }

      function shareTask(taskId) {
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
        let shareTaskPane = document.getElementById('shareTaskPane');
        let taskShareName = document.getElementById('taskShareName');
        let taskShareUserNotes = document.getElementById('taskShareUserNotes');
        let taskShareDueDate = document.getElementById('taskShareDueDate');
        let taskShareCompletionStatus = document.getElementById('taskShareCompletionStatus');
        let taskOccasionSearchBarDiv = document.getElementById('taskOccasionSearchBarDiv');
        let taskWhoToShareSearch = document.getElementById('taskWhoToShareSearch');
        if (taskWhoToShareSearch) {
          taskWhoToShareSearch.parentNode.removeChild(taskWhoToShareSearch);
          taskWhoToShareSearch = document.createElement('input');
          taskOccasionSearchBarDiv.appendChild(taskWhoToShareSearch);
          taskWhoToShareSearch.id = 'taskWhoToShareSearch';
          taskWhoToShareSearch.type = 'text';
          taskWhoToShareSearch.placeholder = 'search';
        }
        let taskFriendsSearchList = document.getElementById('taskFriendsSearchList');
        while(taskFriendsSearchList.firstChild) {
          taskFriendsSearchList.removeChild(taskFriendsSearchList.firstChild);
        }

        $http.get(`/tasks/${taskId}`)
        .then(taskData => {
          let task = taskData.data;
          let due = new Date(task.due_date);
          let completion;
          if (task.is_completed) {
            completion = new Date(task.completed_date);
          }
          taskShareName.innerHTML = 'Task: ' + task.name;
          taskShareUserNotes.innerHTML = 'Notes: ' + task.user_notes;
          taskShareDueDate.innerHTML = 'Due: ' + due.getDate() + ' ' + months[due.getMonth()] + ' ' + due.getFullYear();
          if (task.is_completed) {
            taskShareCompletionStatus.innerHTML = 'Completed on ' + completion.getDate() + ' ' + months[completion.getMonth()] + ' ' + completion.getFullYear();
          } else {
            taskShareCompletionStatus.innerHTML = 'Not yet completed.';
          }
          $http.get(`/users/${currentUserId}`)
          .then(userData => {
            let user = userData.data;
            let friendDiv;
            let theImg;
            let theName;
            let theBr;
            if ((user.associates !== null) && (user.associates.friends !== undefined) && (user.associates.friends.length > 0)) {
              for (let i = 0; i < user.associates.friends.length; i++) {
                friendDiv = document.createElement('div');
                taskFriendsSearchList.appendChild(friendDiv);
                theImg = document.createElement('img');
                friendDiv.appendChild(theImg);
                theName = document.createElement('p');
                friendDiv.appendChild(theName);
                populateFriendSelectorTaskShare(theImg, theName, user.associates.friends[i]);
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
                listenForFriendTaskAdd(friendDiv, user.associates.friends[i], taskId);
              }
              taskWhoToShareSearch.addEventListener('keyup', () => {
                while(taskFriendsSearchList.firstChild) {
                  taskFriendsSearchList.removeChild(taskFriendsSearchList.firstChild);
                }
                for (let k = 0; k < user.associates.friends.length; k++) {
                  taskFriendsListFiltered(taskFriendsSearchList, user.associates.friends[k], taskWhoToShareSearch.value, taskId);
                }
              });
            }
          });
        });

        shareTaskPane.setAttribute("style", "z-index: 6; opacity: 1; transition: opacity 0.5s linear;");
      }

      function userTaskShareCommentDeleteConfirmClick(commentId, taskId) {
        $http.delete(`/task_share_comments/${commentId}`)
        .then(goneCommentData => {
          let goneComment = goneCommentData.data;
          for (let i = 0; i < vm.activeTaskShares.length; i++) {
            if (vm.activeTaskShares[i].id === taskId) {
              for (let j = 0; j < vm.activeTaskShares[i].comments.length; j++) {
                if (vm.activeTaskShares[i].comments[j].id === taskId) {
                  vm.activeTaskShares[i].comments.splice(j, 1);
                  return;
                }
              }
            }
          }
        });
      }

      function userTaskShareCommentDeleteCancel(commentId) {
        let deleteTaskShareCommentConfirm = document.getElementById('deleteTaskShareCommentConfirm' + commentId);
        let editDeleteTaskShareCommentDiv = document.getElementById('editDeleteTaskShareCommentDiv' + commentId);

        deleteTaskShareCommentConfirm.setAttribute("style", "display: none;");
        editDeleteTaskShareCommentDiv.setAttribute("style", "display: initial;");
      }

      function userDeleteTaskShareComment(commentId, taskId) {
        let deleteTaskShareCommentConfirm = document.getElementById('deleteTaskShareCommentConfirm' + commentId);
        let editDeleteTaskShareCommentDiv = document.getElementById('editDeleteTaskShareCommentDiv' + commentId);

        deleteTaskShareCommentConfirm.setAttribute("style", "display: initial;");
        editDeleteTaskShareCommentDiv.setAttribute("style", "display: none;");
      }

      function acceptObservanceShare(observanceId) {
        let now = new Date();
        let subObj = {
          responded: true,
          accepted: true,
          updated_at: now
        };
        $http.patch(`/observance_shares/${observanceId}`, subObj)
        .then(observeData => {
          let observe = observeData.data;
          document.getElementById('observanceAcceptDecline' + observanceId).setAttribute("style", "display: none;");
          document.getElementById('observanceShareAccepted' + observanceId).setAttribute("style", "display: initial;");
          document.getElementById('observanceShareDeclined' + observanceId).setAttribute("style", "display: none;");
          $http.get(`/observances/${observe.observance_id}`)
          .then(sharedObserveData => {
            let sharedObserve = sharedObserveData.data;
            let sub = {
              user_id: currentUserId,
              name: sharedObserve.name,
              color: sharedObserve.color,
              picture: sharedObserve.picture,
              day_of: sharedObserve.day_of,
              is_annual: sharedObserve.is_annual,
              art_override: sharedObserve.art_override,
              music_override: sharedObserve.music_override,
              override_content: sharedObserve.override_content
            };
            $http.post(`/observances`, sub)
            .then(addedObserveData => {
              let addedObserve = addedObserveData.data;
              console.log('success!');
            });
          });
        });
      }

      function declineObservanceShare(observanceId) {
        let now = new Date();
        let subObj = {
          responded: true,
          accepted: false,
          updated_at: now
        };
        $http.patch(`/observance_shares/${observanceId}`, subObj)
        .then(observeData=>{
          let observe = observeData.data;
          document.getElementById('observanceAcceptDecline' + observanceId).setAttribute("style", "display: none;");
          document.getElementById('observanceShareAccepted' + observanceId).setAttribute("style", "display: none;");
          document.getElementById('observanceShareDeclined' + observanceId).setAttribute("style", "display: initial;");
        });
      }

      function addNewOccasionShareComment(occasionId) {
        let subObj = {
          user_id: currentUserId,
          occasions_share: occasionId,
          comment: ''
        };
        $http.post('/occasions_share_comments', subObj)
        .then(shareData=>{
          let share = shareData.data[0];
          console.log(share);
          let index = 0;
          for (let i = 0; i < vm.activeOccasionShares.length; i++) {
            if (vm.activeOccasionShares[i].id === occasionId) {
              index = i;
            }
          }
          if (vm.activeOccasionShares[index].comments === undefined) {
            vm.activeOccasionShares[index].comments = []
          }
          vm.activeOccasionShares[index].comments.push(share);

          obtainCommenterNameAndPic(share, index, (vm.activeOccasionShares[index].comments.length - 1));

          setTimeout(()=>{
            userEditOccasionShareComment(share.id);
            document.getElementById('thisIsTheOccasionShareCommentEditor' + share.id).focus();

          }, 50);
        });

      }

      function deleteTaskShare(taskId) {
        $http.delete(`/task_shares/${taskId}`)
        .then(taskData=>{
          let task = taskData.data;
          for (let i = 0; i < vm.activeTaskShares.length; i++) {
            if (vm.activeTaskShares[i].id === taskId) {
              vm.activeTaskShares.splice(i, 1);
            }
          }
        });
      }

      function purgeIndividualEmptyTaskComment(commentId) {
        $http.delete(`/task_share_comments/${commentId}`)
        .then(purgedData => {
          let purged = purgedData.data;
          console.log(purged);
        });
      }

      function purgeEmptyTaskComments() {
        $http.get(`/task_share_commentsbyuser/${currentUserId}`)
        .then(commentsData => {
          let comments = commentsData.data;
          for (let i = 0; i < comments.length; i++) {
            if (comments[i].comment === '') {
              purgeIndividualEmptyTaskComment(comments[i].id);
            }
          }
        });
      }

      function userEditTaskShareCommentCompleted(commentId) {
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
        let now = new Date();
        let editor = document.getElementById('thisIsTheTaskShareCommentEditor' + commentId);
        let commentSpot = document.getElementById('thisIsTheTaskShareComment' + commentId);
        let subObj = {
          comment: editor.value,
          updated_at: now
        };
        if (subObj.comment !== '') {
          $http.patch(`/task_share_comments/${commentId}`, subObj)
          .then(commentData=>{
            let comment = commentData.data;
            let update = new Date(now);
            let minutesString = '';
            if (update.getMinutes() < 10) {
              minutesString += '0' + update.getMinutes().toString;
            } else {
              minutesString += update.getMinutes().toString();
            }
            commentSpot.setAttribute("style", "visibility: visible;");
            document.getElementById('taskCommentComment' + commentId).innerHTML = comment.comment;
            editor.setAttribute("style", "display: none;");
            document.getElementById('thisIsTaskCommentEditDoneDiv' + commentId).setAttribute("style", "display: none;");
            document.getElementById('editDeleteTaskShareCommentDiv' + commentId).setAttribute("style", "display: initial;");

          });
        } else {
          editor.setAttribute("style", "display: none;");
          document.getElementById('thisIsTaskCommentEditDoneDiv' + commentId).setAttribute("style", "display: none;");
          document.getElementById('editDeleteTaskShareCommentDiv' + commentId).setAttribute("style", "display: initial;");
        }
        purgeEmptyTaskComments();
      }

      function userEditTaskShareComment(commentId) {
        let editor = document.getElementById('thisIsTheTaskShareCommentEditor' + commentId);
        document.getElementById('thisIsTheTaskShareComment' + commentId).setAttribute("style", "visibility: hidden;");
        $http.get(`/task_share_comments/${commentId}`)
        .then(commentData=>{
          let comment = commentData.data;
          editor.setAttribute("style", "display: initial;");
          editor.value = comment.comment;
          document.getElementById('thisIsTaskCommentEditDoneDiv' + commentId).setAttribute("style", "display: initial;");
          document.getElementById('editDeleteTaskShareCommentDiv' + commentId).setAttribute("style", "display: none;");
        });

      }

      function obtainObservanceInviterInviteeDatas(observanceShare, index) {
        let otherId = 0;
        if (parseInt(observanceShare.user_id) === parseInt(currentUserId)) {
          otherId = parseInt(observanceShare.share_associate_id);
        } else {
          otherId = parseInt(observanceShare.user_id);
        }

        $http.get(`/users/${currentUserId}`)
        .then(currentUserData => {
          let currentUser = currentUserData.data;
          $http.get(`/users/${otherId}`)
          .then(otherUserData => {
            let otherUser = otherUserData.data;
            vm.activeObservanceShares[index].inviterImg = otherUser.user_avatar_url;
            if (parseInt(observanceShare.user_id) === parseInt(otherId)) {
              vm.activeObservanceShares[index].invitee = currentUser.name;
              vm.activeObservanceShares[index].inviter = otherUser.name;
            } else {
              vm.activeObservanceShares[index].invitee = otherUser.name;
              vm.activeObservanceShares[index].inviter = currentUser.name;
            }
          });
        });
      }

      function obtainObservanceDatas(observanceShare, index) {

        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

        $http.get(`/observances/${observanceShare.observance_id}`)
        .then(observanceData => {
          let observance = observanceData.data;
          let dayOf = new Date(observance.day_of);
          vm.activeObservanceShares[index].name = observance.name;
          vm.activeObservanceShares[index].picture = observance.picture;
          vm.activeObservanceShares[index].cleanDayOf = 'Every ' + dayOf.getDate() + ' ' + months[dayOf.getMonth()];
          if (observance.art_override) {
            vm.activeObservanceShares[index].artWorks = [];
            for (let i = 0; i < observance.override_content.img_paths.length; i++) {
              vm.activeObservanceShares[index].artWorks[i] = {};
              vm.activeObservanceShares[index].artWorks[i].img_paths = observance.override_content.img_paths[i];
              vm.activeObservanceShares[index].artWorks[i].artists = observance.override_content.artists[i];
              vm.activeObservanceShares[index].artWorks[i].titles = observance.override_content.titles[i];
              vm.activeObservanceShares[index].artWorks[i].years = observance.override_content.years[i];
            }
          }
          if (observance.music_override) {
            vm.activeObservanceShares[index].musicWorks = [];
            for (let j = 0; j < observance.override_content.src_strings.length; j++) {
              vm.activeObservanceShares[index].musicWorks[j] = {};
              vm.activeObservanceShares[index].musicWorks[j].src_strings = observance.override_content.src_strings[j];
              vm.activeObservanceShares[index].musicWorks[j].href_strings = observance.override_content.href_strings[j];
              vm.activeObservanceShares[index].musicWorks[j].a_strings = observance.override_content.a_strings[j];
            }
          }
        });
      }

      function obtainObservanceCommenterDatas(comment, observeIndex, index) {
        $http.get(`/users/${comment.user_id}`)
        .then(commenterData => {
          let commenter = commenterData.data;
          vm.activeObservanceShares[observeIndex].comments[index].user_avatar_url = commenter.user_avatar_url;
          vm.activeObservanceShares[observeIndex].comments[index].name = commenter.name;
        });
      }

      function obstainObservanceComments(observance, index) {
        let aDate;
        let bDate;
        let check;

        $http.get('/observance_share_comments')
        .then(allObservanceShareData => {
          let allObservanceShare = allObservanceShareData.data;
          let observanceComments = allObservanceShare.filter(entry => {
            return(entry.observance_share === observance.id);
          });
          observanceComments = observanceComments.sort((a, b) => {
            aDate = new Date(a.created_at);
            bDate = new Date(b.created_at);
            return(aDate.getDate() - bDate.getDate());
          });
          if (observanceComments.length > 0) {
            vm.activeObservanceShares[index].comments = [];
            for (let i = 0; i < observanceComments.length; i++) {
              vm.activeObservanceShares[index].comments[i] = {};
              vm.activeObservanceShares[index].comments[i].comment = observanceComments[i].comment;
              vm.activeObservanceShares[index].comments[i].id = observanceComments[i].id;
              check = new Date(observanceComments[i].created_at);
              vm.activeObservanceShares[index].comments[i].cleanDate = cleanDateHoliday(observanceComments[i].created_at) + ' at ' + check.toLocaleTimeString('en-GB') + '.';
              obtainObservanceCommenterDatas(observanceComments[i], index, i);
              vm.activeObservanceShares[index].comments[i].user_id = observanceComments[i].user_id;
            }
            setTimeout(() => {
              for (let k = 0; k < vm.activeObservanceShares[index].comments.length; k++) {
                document.getElementById('thisIsTheObservanceShareCommentEditor' + vm.activeObservanceShares[index].comments[k].id).setAttribute("style", "display: none;");
                document.getElementById('thisIsObservanceShareCommentEditDoneDiv' + vm.activeObservanceShares[index].comments[k].id).setAttribute("style", "display: none;");
                if (parseInt(vm.activeObservanceShares[index].comments[k].user_id) === parseInt(currentUserId)) {
                  document.getElementById('editDeleteObservanceShareCommentDiv' + vm.activeObservanceShares[index].comments[k].id).setAttribute("style", "display: initial;");
                } else {
                  document.getElementById('editDeleteObservanceShareCommentDiv' + vm.activeObservanceShares[index].comments[k].id).setAttribute("style", "display: none;");
                  alert(currentUserId);
                  alert(vm.activeObservanceShares[index].comments[k].user_id);
                  alert((vm.activeObservanceShares[index].comments[k].user_id) === parseInt(currentUserId));
                }
              }
            }, 150);
          }
        });
      }

      function retrieveUserObservanceShares() {
        let check;

        $http.get('/observance_shares')
        .then(allObservanceData => {
          let allObservance = allObservanceData.data;
          let userObservanceShares = allObservance.filter(entry => {
            return((parseInt(entry.user_id) === parseInt(currentUserId)) || (parseInt(entry.share_associate_id) === parseInt(currentUserId)));
          });
          if (userObservanceShares.length > 0) {
            vm.activeObservanceShares = [];
            for (let i = 0; i < userObservanceShares.length; i++) {
              check = new Date(userObservanceShares[i].created_at);
              vm.activeObservanceShares[i] = {};
              vm.activeObservanceShares[i].id = userObservanceShares[i].id;
              vm.activeObservanceShares[i].cleanDate = cleanDateHoliday(userObservanceShares[i].created_at) + ' at ' + check.toLocaleTimeString('en-GB') + '.';
              obtainObservanceInviterInviteeDatas(userObservanceShares[i], i);
              obtainObservanceDatas(userObservanceShares[i], i);
              obstainObservanceComments(userObservanceShares[i], i);
            }
          }
          setTimeout(() => {
            for (let j = 0; j < userObservanceShares.length; j++) {
              if ((parseInt(userObservanceShares[j].user_id)) === (parseInt(currentUserId))) {
                document.getElementById('thisIsObservanceShareDeleteDiv' + userObservanceShares[j].id).setAttribute("style", "display: initial;");
                document.getElementById('observanceblockInviter' + userObservanceShares[j].id).setAttribute("style", "display: none;");
                document.getElementById('observanceblockInvitee' + userObservanceShares[j].id).setAttribute("style", "display: initial;");
                if (userObservanceShares[j].responded) {
                  document.getElementById('observanceAcceptDecline' + userObservanceShares[j].id).setAttribute("style", "display: none;");
                  if (userObservanceShares[j].accepted) {
                    document.getElementById('observanceShareAccepted' + userObservanceShares[j].id).setAttribute("style", "display: initial;");
                    document.getElementById('observanceShareDeclined' + userObservanceShares[j].id).setAttribute("style", "display: none;");
                  } else {
                    document.getElementById('observanceShareAccepted' + userObservanceShares[j].id).setAttribute("style", "display: none;");
                    document.getElementById('observanceShareDeclined' + userObservanceShares[j].id).setAttribute("style", "display: initial;");
                  }
                } else {
                  document.getElementById('observanceAcceptDecline' + userObservanceShares[j].id).setAttribute("style", "display: none;");
                  document.getElementById('observanceShareAccepted' + userObservanceShares[j].id).setAttribute("style", "display: none;");
                  document.getElementById('observanceShareDeclined' + userObservanceShares[j].id).setAttribute("style", "display: none;");
                }

              } else {
                document.getElementById('thisIsObservanceShareDeleteDiv' + userObservanceShares[j].id).setAttribute("style", "display: none;");
                document.getElementById('observanceblockInviter' + userObservanceShares[j].id).setAttribute("style", "display: initial;");
                document.getElementById('observanceblockInvitee' + userObservanceShares[j].id).setAttribute("style", "display: none;");
                document.getElementById('observanceAcceptDecline' + userObservanceShares[j].id).setAttribute("style", "display: none;");
                if (userObservanceShares[j].responded) {
                  if (userObservanceShares[j].accepted) {
                    document.getElementById('observanceShareAccepted' + userObservanceShares[j].id).setAttribute("style", "display: initial;");
                    document.getElementById('observanceShareDeclined' + userObservanceShares[j].id).setAttribute("style", "display: none;");
                  } else {
                    document.getElementById('observanceShareAccepted' + userObservanceShares[j].id).setAttribute("style", "display: none;");
                    document.getElementById('observanceShareDeclined' + userObservanceShares[j].id).setAttribute("style", "display: initial;");
                  }
                } else {
                  document.getElementById('observanceShareAccepted' + userObservanceShares[j].id).setAttribute("style", "display: none;");
                  document.getElementById('observanceShareDeclined' + userObservanceShares[j].id).setAttribute("style", "display: none;");
                }
              }
            }
          }, (userObservanceShares.length * 25));
        });
      }

      function cancelOccasionInvite() {
        let shareOccasionPane = document.getElementById('shareOccasionPane');

        shareOccasionPane.setAttribute("style", "z-index: -6; opacity: 0; transition: all 0.5s linear;");
      }

      function userDeleteOccasionShareComment(commentId, occasionId) {
        $http.delete(`/occasions_share_comments/${commentId}`)
        .then(delCommentData=>{
          let delComment = delCommentData.data;
          for (let i = 0; i < vm.activeOccasionShares.length; i++) {
            if (vm.activeOccasionShares[i].id === occasionId) {
              for (let j = 0; j < vm.activeOccasionShares[i].comments.length; j++) {
                if (vm.activeOccasionShares[i].comments[j].id === commentId) {
                  vm.activeOccasionShares[i].comments.splice(j, 1);
                }
              }
            }
          }

        });
      }

      function acceptTask(taskId) {
        let taskPatcher = {
          responded: true,
          accepted: true,
          updated_at: new Date()
        };
        $http.patch(`/task_shares/${taskId}`, taskPatcher)
        .then(patchedTaskData=>{
          let patchedTask = patchedTaskData.data;
          $http.get(`/tasks/${patchedTask.task_id}`)
          .then(assignedTaskData=>{
            let assignedTask = assignedTaskData.data;
            $http.post('/tasks', assignedTask)
            .then(taskInData=>{
              let taskIn = taskInData.data;
              document.getElementById('taskAcceptDecline' + patchedTask.id).setAttribute("style", "display: none;");
              document.getElementById('taskShareAccepted' + patchedTask.id).setAttribute("style", "display: initial;");
              document.getElementById('taskShareDeclined' + patchedTask.id).setAttribute("style", "display: none;");
            });
          });
        });
      }

      function declineTask(taskId) {
        let taskPatcher = {
          responded: true,
          accepted: false,
          updated_at: new Date()
        };
        $http.patch(`/task_shares/${taskId}`, taskPatcher)
        .then(patchedTaskData=>{
          let patchedTask = patchedTaskData.data;
          document.getElementById('taskAcceptDecline' + patchedTask.id).setAttribute("style", "display: none;");
          document.getElementById('taskShareAccepted' + patchedTask.id).setAttribute("style", "display: none;");
          document.getElementById('taskShareDeclined' + patchedTask.id).setAttribute("style", "display: initial;");
        });

      }


      function musicModuleViewDone() {
        let musicModuleViewPane = document.getElementById('musicModuleViewPane');

        musicModuleViewPane.setAttribute("style", "visibility: hidden; opacity: 0; z-index: -6; transition: opacity 0.5s linear;");
      }

      function musicModuleViewer(userId, theme) {
        let musicModuleViewPane = document.getElementById('musicModuleViewPane');
        let musicModuleViewAuthorPic = document.getElementById('musicModuleViewAuthorPic');
        let musicModuleViewAuthorName = document.getElementById('musicModuleViewAuthorName');
        let leftIndex = 0;
        let centerIndex = 0;
        let rightIndex = 0;
        let musicModuleViewTheme = document.getElementById('musicModuleViewTheme');
        let musicLeftTitle = document.getElementById('musicLeftTitle');
        let musicCenterTitle = document.getElementById('musicCenterTitle');
        let musicRightTitle = document.getElementById('musicRightTitle');
        let musicModulePlayerIframe = document.getElementById('musicModulePlayerIframe');
        let musicModulePlayerAnchor = document.getElementById('musicModulePlayerAnchor');
        let musicModuleViewNavButtons = document.getElementById('musicModuleViewNavButtons');
        let musicModuleViewNavNext = document.getElementById('musicModuleViewNavNext');
        if (musicModuleViewNavNext) {
          musicModuleViewNavNext.parentNode.removeChild(musicModuleViewNavNext);
          musicModuleViewNavNext = document.createElement('a');
          musicModuleViewNavButtons.appendChild(musicModuleViewNavNext);
          musicModuleViewNavNext.id = 'musicModuleViewNavNext';
          musicModuleViewNavNext.className = 'btn';
          musicModuleViewNavNext.innerHTML = 'next';
          musicModuleViewNavNext.setAttribute("style", "cursor: pointer;");
        }
        let musicModuleViewNavPrevious = document.getElementById('musicModuleViewNavPrevious');
        if (musicModuleViewNavPrevious) {
          musicModuleViewNavPrevious.parentNode.removeChild(musicModuleViewNavPrevious);
          musicModuleViewNavPrevious = document.createElement('a');
          musicModuleViewNavButtons.appendChild(musicModuleViewNavPrevious);
          musicModuleViewNavPrevious.id = 'musicModuleViewNavPrevious';
          musicModuleViewNavPrevious.className = 'btn';
          musicModuleViewNavPrevious.innerHTML = 'prev';
          musicModuleViewNavPrevious.setAttribute("style", "cursor: pointer;");
        }
        let musicLoader = document.getElementById('musicLoader');
        let musicCenterLoader = document.getElementById('musicCenterLoader');
        if (musicCenterLoader) {
          musicCenterLoader.parentNode.removeChild(musicCenterLoader);
          musicCenterLoader = document.createElement('p');
          musicLoader.appendChild(musicCenterLoader);
          musicCenterLoader.id = 'musicCenterLoader';
          musicCenterLoader.innerHTML = 'load';
          musicCenterLoader.setAttribute("style", "cursor: pointer;");
        }


        musicModuleViewTheme.innerHTML = 'Theme: ' + theme;

        $http.get(`/users/${userId}`)
        .then(authorData=>{
          let author = authorData.data;
          musicModuleViewAuthorPic.src = author.user_avatar_url;
          musicModuleViewAuthorName.innerHTML = 'Author: ' + author.name;

          $http.get(`/music_modulesbyuser/${userId}`)
          .then(allModulesData=>{
            let allModules = allModulesData.data;
            let selectedMusicModule = allModules.filter(entry=>{
              return(entry.theme === theme);
            });
            selectedMusicModule = selectedMusicModule.sort((a, b)=>{
              if (a.a_string.toLowerCase() < b.a_string.toLowerCase()) {
                return -1;
              } else if (a.a_string.toLowerCase() > b.a_string.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });

            leftIndex = selectedMusicModule.length - 1;
            centerIndex = 0;
            rightIndex = 1;
            musicLeftTitle.innerHTML = selectedMusicModule[leftIndex].a_string;
            musicCenterTitle.innerHTML = selectedMusicModule[centerIndex].a_string;
            musicRightTitle.innerHTML = selectedMusicModule[rightIndex].a_string;
            vm.musicViewerSource = selectedMusicModule[centerIndex].src_string;
            vm.musicViewerHref = selectedMusicModule[centerIndex].href_string;
            vm.musicViewerAnchor = selectedMusicModule[centerIndex].a_string;

            musicModuleViewNavNext.addEventListener('click', ()=>{
              leftIndex = centerIndex;
              centerIndex = rightIndex;
              ++rightIndex;
              if (rightIndex === selectedMusicModule.length) {
                rightIndex = 0;
              }
              musicLeftTitle.innerHTML = selectedMusicModule[leftIndex].a_string;
              musicCenterTitle.innerHTML = selectedMusicModule[centerIndex].a_string;
              musicRightTitle.innerHTML = selectedMusicModule[rightIndex].a_string;
            });
            musicModuleViewNavPrevious.addEventListener('click', ()=>{
              rightIndex = centerIndex;
              centerIndex = leftIndex;
              --leftIndex;
              if (leftIndex === selectedMusicModule.length) {
                leftIndex = 0;
              }
              musicLeftTitle.innerHTML = selectedMusicModule[leftIndex].a_string;
              musicCenterTitle.innerHTML = selectedMusicModule[centerIndex].a_string;
              musicRightTitle.innerHTML = selectedMusicModule[rightIndex].a_string;
            });
            musicCenterLoader.addEventListener('click', ()=>{
              if (vm.musicViewerSource !== selectedMusicModule[centerIndex].src_string) {
                vm.musicViewerSource = selectedMusicModule[centerIndex].src_string;
                vm.musicViewerHref = selectedMusicModule[centerIndex].href_string;
                vm.musicViewerAnchor = selectedMusicModule[centerIndex].a_string;
                musicModulePlayerIframe.src = vm.musicViewerSource;
                musicModulePlayerAnchor.href = vm.musicViewerHref;
                vm.musicViewerHref.innerHTML = vm.musicViewerAnchor;
              }
            });
          });

        });

        musicModuleViewPane.setAttribute("style", "visibility: visible; opacity: 1; z-index: 6; transition: opacity 0.5s linear;");
      }

      function addNewHolidayShareComment(holidayShareId) {
        let subObj = {
          user_id: currentUserId,
          holiday_share: holidayShareId,
          comment: ''
        };
        $http.post('/holiday_share_comments', subObj)
        .then(shareData=>{
          let share = shareData.data[0];
          console.log(share);
          let index = 0;
          for (let i = 0; i < vm.activeHolidayShares.length; i++) {
            if (vm.activeHolidayShares[i].id === holidayShareId) {
              index = i;
            }
          }
          if (vm.activeHolidayShares[index].comments === undefined) {
            vm.activeHolidayShares[index].comments = []
          }
          vm.activeHolidayShares[index].comments.push(share);

          obtainUserDataHolidayShareComment(index, (vm.activeHolidayShares[index].comments.length - 1), share);

          setTimeout(()=>{
            userEditHolidayShareComment(share.id);
            // document.getElementById('thisIsHolidayShareCommentEditDoneDiv' + share.id).setAttribute("style", "display: initial;");
          }, 50);
        });
      }

      function deleteOccasionShare(occasionId) {

        $http.delete(`/occasions_shares/${occasionId}`)
        .then(deletedOccasionData=>{
          let deletedOccasion = deletedOccasionData.data;

          for (let i = 0; i < vm.activeOccasionShares.length; i++) {
            if (vm.activeOccasionShares[i].id === deletedOccasion.id) {
              vm.activeOccasionShares.splice(i, 1);
              return;
            }
          }
        });
      }

      function removeTheBlankOccasionComment(commentId) {
        $http.delete(`/occasions_share_comments/${commentId}`)
        .then(deletedData => {
          let deleted = deletedData.data;
          for (let i = 0; i < vm.activeOccasionShares.length; i++) {
            if ((vm.activeOccasionShares[i].comments !== undefined) && (vm.activeOccasionShares[i].comments.length > 0)) {
              for (let j = 0; j <vm.activeOccasionShares[i].comments.length; j++) {
                if (parseInt(vm.activeOccasionShares[i].comments[j].id) === parseInt(commentId)) {
                  vm.activeOccasionShares[i].comments.splice(j, 1);
                  return;
                }
              }
            }
          }
        });
      }

      function removeBlankOccasionComments() {
        $http.get(`/occasions_share_commentsbyuser/${currentUserId}`)
        .then(userCommentsData=>{
          let userComments = userCommentsData.data;
          for (let i = 0; i < userComments.length; i++) {
            if (userComments[i].comment === '') {
              removeTheBlankOccasionComment(userComments[i].id);
            }
          }
        });
      }

      function userEditOccasionShareCommentCompleted(commentId) {
        let thisIsTheOccasionShareCommentEditor = document.getElementById('thisIsTheOccasionShareCommentEditor' + commentId);
        let thisIsOccasionShareCommentEditDoneDiv = document.getElementById('thisIsOccasionShareCommentEditDoneDiv' + commentId);
        let thisIsOccasionShareComment = document.getElementById('thisIsOccasionShareComment' + commentId);
        let editDeleteOccasionShareCommentDiv = document.getElementById('editDeleteOccasionShareCommentDiv' + commentId);
        let now = new Date();
        let subObj = {
          comment: thisIsTheOccasionShareCommentEditor.value,
          updated_at: now
        };

        $http.patch(`/occasions_share_comments/${commentId}`, subObj)
        .then(editedData=>{
          let edited = editedData.data;
          thisIsTheOccasionShareCommentEditor.setAttribute("style", "display: none;");
          thisIsOccasionShareCommentEditDoneDiv.setAttribute("style", "display: none;");
          thisIsOccasionShareComment.innerHTML = edited.comment;
          thisIsOccasionShareComment.setAttribute("style", "visibility: visible;");
          editDeleteOccasionShareCommentDiv.setAttribute("style", "display: initial;");
          removeBlankOccasionComments();

        });

      }

      function userEditOccasionShareComment(commentId) {
        let thisIsTheOccasionShareCommentEditor = document.getElementById('thisIsTheOccasionShareCommentEditor' + commentId);
        let thisIsOccasionShareCommentEditDoneDiv = document.getElementById('thisIsOccasionShareCommentEditDoneDiv' + commentId);
        let thisIsOccasionShareComment = document.getElementById('thisIsOccasionShareComment' + commentId);
        let editDeleteOccasionShareCommentDiv = document.getElementById('editDeleteOccasionShareCommentDiv' + commentId);

        $http.get(`/occasions_share_comments/${commentId}`)
        .then(commentData=>{
          let comment = commentData.data;
          thisIsTheOccasionShareCommentEditor.setAttribute("style", "display: initial;");
          thisIsTheOccasionShareCommentEditor.value = comment.comment;
          thisIsOccasionShareCommentEditDoneDiv.setAttribute("style", "display: initial;");
          thisIsOccasionShareComment.setAttribute("style", "visibility: hidden;");
          editDeleteOccasionShareCommentDiv.setAttribute("style", "display: none;");


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

      function userHolidayFriendAdd(fullFriendsList, userId) {
        $http.get(`/users/${userId}`)
        .then(friendData=>{
          let friend = friendData.data;
          fullFriendsList.push(friend);
        });
      }

      function setHolidayShareListener(theDiv, holidayId, friendId) {

        theDiv.addEventListener('click', ()=>{
          let subObj = {
            user_id: currentUserId,
            holiday_id: holidayId,
            share_associate_id: friendId,
            accepted: false,
            responded: false
          }
          $http.post('/holiday_shares', subObj)
          .then(holidayShareData=>{
            let holidayShare = holidayShareData.data[0];
            cancelHolidayInvite();
            retrieveUserHolidayShares();
          });
        });
      }

      function shareHolidayWithFriend(holidayId){
        let shareHolidayPane = document.getElementById('shareHolidayPane');
        let holidayShareImage = document.getElementById('holidayShareImage');
        let holidayShareHolidayName = document.getElementById('holidayShareHolidayName');
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
          let fullFriendsList = [];
          let filteredFriends = [];
          let theDiv;
          let theImg;
          let theName;
          let theBr;
          if ((user.associates !== undefined) && (user.associates.friends !== undefined)) {
            if (user.associates.friends.length > 0) {
              for (let i = 0; i < user.associates.friends.length; i++) {
                userHolidayFriendAdd(fullFriendsList, user.associates.friends[i]);
              }
              setTimeout(()=>{
                fullFriendsList = fullFriendsList.sort((a, b)=>{
                  if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                  } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                for (let j = 0; j < fullFriendsList.length; j++) {
                  theDiv = document.createElement('div');
                  holidayFriendsSearchList.appendChild(theDiv);
                  theImg = document.createElement('img');
                  theDiv.appendChild(theImg);
                  theImg.src = fullFriendsList[j].user_avatar_url;
                  theName = document.createElement('p');
                  theDiv.appendChild(theName);
                  theName.innerHTML = fullFriendsList[j].name;
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
                  setHolidayShareListener(theDiv, holidayId, fullFriendsList[j].id);
                  theDiv.setAttribute("style", "cursor: pointer;");
                }
                holidayWhoToShareSearch.addEventListener('keyup', ()=>{
                  while (holidayFriendsSearchList.firstChild) {
                    holidayFriendsSearchList.removeChild(holidayFriendsSearchList.firstChild);
                  }
                  if (holidayWhoToShareSearch.value !== '') {
                    filteredFriends = fullFriendsList.filter(entry=>{
                      return((entry.name.toLowerCase().indexOf(holidayWhoToShareSearch.value) !== -1) || (entry.email.toLowerCase().indexOf(holidayWhoToShareSearch.value) !== -1));
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
                    if (filteredFriends.length > 0) {
                      for (let k = 0; k < filteredFriends.length; k++) {
                        theDiv = document.createElement('div');
                        holidayFriendsSearchList.appendChild(theDiv);
                        theImg = document.createElement('img');
                        theDiv.appendChild(theImg);
                        theImg.src = filteredFriends[k].user_avatar_url;
                        theName = document.createElement('p');
                        theDiv.appendChild(theName);
                        theName.innerHTML = filteredFriends[k].name;
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
                        setHolidayShareListener(theDiv, holidayId, filteredFriends[k].id);
                        theDiv.setAttribute("style", "cursor: pointer;");
                      }
                    }
                  } else {
                    for (let j = 0; j < fullFriendsList.length; j++) {
                      theDiv = document.createElement('div');
                      holidayFriendsSearchList.appendChild(theDiv);
                      theImg = document.createElement('img');
                      theDiv.appendChild(theImg);
                      theImg.src = fullFriendsList[j].user_avatar_url;
                      theName = document.createElement('p');
                      theDiv.appendChild(theName);
                      theName.innerHTML = fullFriendsList[j].name;
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
                      setHolidayShareListener(theDiv, holidayId, fullFriendsList[j].id);
                      theDiv.setAttribute("style", "cursor: pointer;");
                    }
                  }
                });
              }, (user.associates.friends.length * 100));


            }
          }
        });

        shareHolidayPane.setAttribute("style", "z-index: 6; opacity: 1; transition: opacity 0.5s linear;");
      }

      function userHolidayShareCommentDeleteConfirmClick(holidayShareCommentId) {
        let editDeleteHolidayShareCommentDiv = document.getElementById('editDeleteHolidayShareCommentDiv' + holidayShareCommentId);
        let deleteHolidayShareCommentConfirm = document.getElementById('deleteHolidayShareCommentConfirm' + holidayShareCommentId);

        $http.delete(`/holiday_share_comments/${holidayShareCommentId}`)
        .then(goneCommentData=>{
          let goneComment = goneCommentData.data;
          for (let i = 0; i < vm.activeHolidayShares.length; i++) {
            if (vm.activeHolidayShares[i].id === goneComment.holiday_share) {
              for (let j = 0; j < vm.activeHolidayShares[i].comments.length; j++) {
                if (vm.activeHolidayShares[i].comments[j].id === holidayShareCommentId) {
                  vm.activeHolidayShares[i].comments.splice(j, 1);
                }
              }
            }
          }
        });

        editDeleteHolidayShareCommentDiv.setAttribute("style", "display: initial;");
        deleteHolidayShareCommentConfirm.setAttribute("style", "display: none;");
      }

      function userHolidayShareCommentDeleteCancel(holidayShareCommentId) {
        let editDeleteHolidayShareCommentDiv = document.getElementById('editDeleteHolidayShareCommentDiv' + holidayShareCommentId);
        let deleteHolidayShareCommentConfirm = document.getElementById('deleteHolidayShareCommentConfirm' + holidayShareCommentId);

        editDeleteHolidayShareCommentDiv.setAttribute("style", "display: initial;");
        deleteHolidayShareCommentConfirm.setAttribute("style", "display: none;");
      }

      function userDeleteHolidayShareComment(holidayShareCommentId) {
        let editDeleteHolidayShareCommentDiv = document.getElementById('editDeleteHolidayShareCommentDiv' + holidayShareCommentId);
        let deleteHolidayShareCommentConfirm = document.getElementById('deleteHolidayShareCommentConfirm' + holidayShareCommentId);

        editDeleteHolidayShareCommentDiv.setAttribute("style", "display: none;");
        deleteHolidayShareCommentConfirm.setAttribute("style", "display: initial;");
      }

      function occasionAcceptSelect(occasionId) {
        let now = new Date();
        let subObj = {
          responded: true,
          accepted: true,
          updated_at: now
        };

        $http.patch(`/occasions_shares/${occasionId}`, subObj)
        .then(patchedShareData=>{
          let patchedShare = patchedShareData.data;
          document.getElementById('occasionAcceptDecline' + occasionId).setAttribute("style", "display: none;");
          document.getElementById('occasionShareAccepted' + occasionId).setAttribute("style", "display: initial;");
          $http.get(`/occasions/${patchedShare.occasion_id}`)
          .then(occasionData=>{
            let occasion = occasionData.data;
            let occObj = {
              user_id: currentUserId,
              name: occasion.name,
              day_of: occasion.day_of,
              is_annual: occasion.is_annual
            };
            $http.post('/occasions', occObj)
            .then(addedData=>{
              console.log(addedData.data);
            });
          });
        });
      }

      function occasionDeclineSelect(occasionId) {
        let now = new Date();
        let subObj = {
          responded: true,
          accepted: false,
          updated_at: now
        };
        $http.patch(`/occasions_shares/${occasionId}`, subObj)
        .then(patchedShareData=>{
          let patchedShare = patchedShareData.data;
          document.getElementById('occasionAcceptDecline' + occasionId).setAttribute("style", "display: none;");
          document.getElementById('occasionShareDeclined' + occasionId).setAttribute("style", "display: initial;");
        });
      }

      function addNewTimeblockComment(timeblockId) {
        let check = new Date();
        let subObj = {
          user_id: currentUserId,
          timeblock_share: timeblockId,
          comment: ''
        };
        $http.post(`/timeblock_share_comments`, subObj)
        .then(commentData=>{
          let comment = commentData.data[0];
          let index = 0;
          let createDate = new Date(comment.created_at);
          let updateDate = new Date(comment.updated_at);
          for (let i = 0; i < vm.activeTimeblockShares.length; i++) {
            if (vm.activeTimeblockShares[i].id === timeblockId) {
              if (vm.activeTimeblockShares[i].comments === undefined) {
                vm.activeTimeblockShares[i].comments = [];
                index = 0;
              } else {
                index = vm.activeTimeblockShares[i].comments.length;
              }
              vm.activeTimeblockShares[i].comments[index] = {};
              vm.activeTimeblockShares[i].comments[index].comment = comment.comment;
              vm.activeTimeblockShares[i].comments[index].id = comment.id;
              getUserInfosForAppointmentComment(timeblockId, i, comment, index);
              if (updateDate.getTime() < (createDate.getTime() + 150001)) {
                vm.activeTimeblockShares[i].comments[index].cleanDate = cleanDateHoliday(comment.created_at) + ' at ' +  check.toLocaleTimeString('en-GB');
              } else {
                vm.activeTimeblockShares[i].comments[index].cleanDate = cleanDateHoliday(comment.created_at) + ' at ' +  check.toLocaleTimeString('en-GB') + ' - updated - ' + cleanDateHoliday(comment.updated_at) + ' at ' + updateDate.toLocaleTimeString('en-GB');
              }
              if (vm.activeTimeblockShares[i].comments.length === 1) {
                vm.activeTimeblockShares[i].commentsLength = '1 comment';
              } else {
                vm.activeTimeblockShares[i].commentsLength = vm.activeTimeblockShares[i].comments.length + ' comments';
              }

            }
          }
          setTimeout(()=>{
            userEditTimeblockShareComment(comment.id);
          }, 100);


        });
      }

      function deleteHolidayShare(holidayShareId) {
        // alert(holidayShareId);
        $http.delete(`/holiday_shares/${holidayShareId}`)
        .then(deletedHolidayShareData=>{
          let deletedHolidayShare = deletedHolidayShareData.data;

          for (let i = 0; i < vm.activeHolidayShares.length; i++) {
            if (vm.activeHolidayShares[i].id === deletedHolidayShare.id) {
              vm.activeHolidayShares.splice(i, 1);
              i--;
            }
          }

        });
      }

      function pruneTheEmptyHolidayShareComment(commentId) {
        $http.delete(`/holiday_share_comments/${commentId}`)
        .then(()=>{
          if (vm.activeHolidayShares.length > 0) {
            for (let i = 0; i < vm.activeHolidayShares.length; i++) {
              if ((vm.activeHolidayShares[i].comments !== undefined) && (vm.activeHolidayShares[i].comments.length > 0)) {
                for (let j = 0; j < vm.activeHolidayShares[i].comments.length; j++) {
                  if (vm.activeHolidayShares[i].comments[j].id === commentId) {
                    vm.activeHolidayShares[i].comments.splice(j, 1);
                  }
                }
              }
            }
          }
        });
      }



      function clearOutBlankHolidayShareComments() {
        // alert('called!!');
        $http.get(`/holiday_share_commentsbyuser/${currentUserId}`)
        .then(allCommentsData=>{
          let allComments = allCommentsData.data;
          if (allComments.length > 0) {
            for (let i = 0; i < allComments.length; i++) {
              if (allComments[i].comment === '') {
                pruneTheEmptyHolidayShareComment(allComments[i].id);
              }
            }
          }
        });
      }

      function userEditHolidayShareCommentCompleted(commentId) {
        // alert(commentId);

        let thisIsTheHolidayShareCommentEditor = document.getElementById('thisIsTheHolidayShareCommentEditor' + commentId);
        let thisIsHolidayShareCommentEditDoneDiv = document.getElementById('thisIsHolidayShareCommentEditDoneDiv' + commentId);
        let editDeleteHolidayShareCommentDiv = document.getElementById('editDeleteHolidayShareCommentDiv' + commentId);
        let thisIsHolidayShareCommentComment = document.getElementById('thisIsHolidayShareCommentComment' + commentId);

        $http.get(`/holiday_share_comments/${commentId}`)
        .then(commentData=>{
          let comment = commentData.data;
          let now = new Date();
          if (thisIsTheHolidayShareCommentEditor.value !== comment.comment) {
            thisIsHolidayShareCommentComment.innerHTML = thisIsTheHolidayShareCommentEditor.value;
            let subObj = {
              comment: thisIsTheHolidayShareCommentEditor.value,
              updated_at: now
            };
            $http.patch(`/holiday_share_comments/${commentId}`, subObj)
            .then(updatedCommentData=>{
              let updatedComment = updatedCommentData.data;
              clearOutBlankHolidayShareComments();
            });
          } else {
            thisIsTheHolidayShareCommentEditor.value = '';
            clearOutBlankHolidayShareComments();
          }

        });

        thisIsTheHolidayShareCommentEditor.setAttribute("style", "display: none;");
        // thisIsTheHolidayShareCommentEditor.value = '';
        thisIsHolidayShareCommentEditDoneDiv.setAttribute("style", "display: none;");
        editDeleteHolidayShareCommentDiv.setAttribute("style", "visibility: visible; display: initial;");
        thisIsHolidayShareCommentComment.setAttribute("style", "visibility: visible;");

      }

      function userEditHolidayShareComment(commentId) {
        // alert(commentId);
        let thisIsTheHolidayShareCommentEditor = document.getElementById('thisIsTheHolidayShareCommentEditor' + commentId);
        let thisIsHolidayShareCommentEditDoneDiv = document.getElementById('thisIsHolidayShareCommentEditDoneDiv' + commentId);
        let editDeleteHolidayShareCommentDiv = document.getElementById('editDeleteHolidayShareCommentDiv' + commentId);
        let thisIsHolidayShareCommentComment = document.getElementById('thisIsHolidayShareCommentComment' + commentId);

        $http.get(`/holiday_share_comments/${commentId}`)
        .then(commentData=>{
          let comment = commentData.data;
          thisIsTheHolidayShareCommentEditor.setAttribute("style", "display: initial;");
          thisIsTheHolidayShareCommentEditor.value = comment.comment;
          thisIsHolidayShareCommentEditDoneDiv.setAttribute("style", "display: initial;");
          editDeleteHolidayShareCommentDiv.setAttribute("style", "visibility: hidden;");
          thisIsHolidayShareCommentComment.setAttribute("style", "visibility: hidden;");
        });
      }

      function occasionNameAndOccurance(occasionId, index) {

        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

        $http.get(`/occasions/${occasionId}`)
        .then(occasionData=>{
          let occasion = occasionData.data;
          let dayOf = new Date(occasion.day_of);
          vm.activeOccasionShares[index].name = occasion.name;
          if (occasion.is_annual) {
            vm.activeOccasionShares[index].occurance = 'Every ' + dayOf.getDate() + ' ' + months[dayOf.getMonth()];
          } else {
            vm.activeOccasionShares[index].occurance = 'On ' + dayOf.getDate() + ' ' + months[dayOf.getMonth()] + ' ' + dayOf.getYear();
          }
        });
      }

      function occasionImagerAndNames(inviter, invitee, index, isInviter, id) {
        $http.get(`/users/${inviter}`)
        .then(inviterUserData=>{
          let inviterUser = inviterUserData.data;
          $http.get(`/users/${invitee}`)
          .then(inviteeUserData=>{
            let inviteeUser = inviteeUserData.data;

            if (isInviter) {
              vm.activeOccasionShares[index].sharerImg = inviteeUser.user_avatar_url;
              vm.activeOccasionShares[index].inviteeImg = inviteeUser.user_avatar_url;
              vm.activeOccasionShares[index].invitee = inviteeUser.name;
            } else {
              vm.activeOccasionShares[index].sharerImg = inviterUser.user_avatar_url;
              vm.activeOccasionShares[index].inviteeImg = inviteeUser.user_avatar_url;
              vm.activeOccasionShares[index].invitee = inviteeUser.name;
            }
            vm.activeOccasionShares[index].sharrerName = inviterUser.name;
            vm.activeOccasionShares[index].inviteeName = inviteeUser.name;
            setTimeout(()=>{
              if (isInviter) {
                document.getElementById('occasionSharer' + id).setAttribute("style", "display: none;");
                document.getElementById('occasionAcceptDecline' + id).setAttribute("style", "display: none;");

              } else {
                document.getElementById('occasionSharee' + id).setAttribute("style", "display: none;");
              }
            }, 75);
          });
        });
      }

      function obtainCommenterNameAndPic(comment, index, index2) {
        $http.get(`/users/${comment.user_id}`)
        .then(userData=>{
          let user = userData.data;
          vm.activeOccasionShares[index].comments[index2].user_avatar_url = user.user_avatar_url;
          vm.activeOccasionShares[index].comments[index2].name = user.name;
        });
      }

      function retreiveOccasionShareComments(share, index) {
        let aDate;
        let bDate;
        let createDate;
        let updateDate;
        $http.get('/occasions_share_comments')
        .then(allCommentsData=>{
          let allComments = allCommentsData.data;
          let shareComments = allComments.filter(entry=>{
            return(entry.occasions_share === share.id);
          });
          shareComments = shareComments.sort((a, b)=>{
            aDate = new Date(a.created_at);
            bDate = new Date(b.created_at);
            return(aDate.getDate() - bDate.getDate());
          });
          console.log(shareComments);
          if (shareComments.length > 0) {
            vm.activeOccasionShares[index].comments = [];
            console.log(vm.activeOccasionShares[index]);
            for (let i = 0; i < shareComments.length; i++) {
              createDate = new Date(shareComments[i].created_at);
              updateDate = new Date(shareComments[i].updated_at);
              vm.activeOccasionShares[index].comments[i] = {};
              vm.activeOccasionShares[index].comments[i].comment = shareComments[i].comment;
              vm.activeOccasionShares[index].comments[i].id = shareComments[i].id;
              vm.activeOccasionShares[index].comments[i].user_id = shareComments[i].user_id;
              obtainCommenterNameAndPic(shareComments[i], index, i);
              if (updateDate.getTime() < (createDate.getTime() + 15001)) {
                vm.activeOccasionShares[index].comments[i].cleanDate = cleanDateHoliday(shareComments[i].updated_at) + ' - ' + timeDate(shareComments[i].updated_at);
              } else {
                vm.activeOccasionShares[index].comments[i].cleanDate = cleanDateHoliday(shareComments[i].created_at) + ' - ' + timeDate(shareComments[i].created_at) + ' - updated - ' + cleanDateHoliday(shareComments[i].updated_at) + ' - ' + timeDate(shareComments[i].updated_at);
              }
            }
            setTimeout(()=>{

              if (vm.activeOccasionShares[index].comments !== undefined) {
                for (let j = 0; j < vm.activeOccasionShares[index].comments.length; j++) {

                  if (parseInt(vm.activeOccasionShares[index].comments[j].user_id) === parseInt(currentUserId)) {
                    document.getElementById('editDeleteOccasionShareCommentDiv' + vm.activeOccasionShares[index].comments[j].id).setAttribute("style", "display: initial;");
                    // document.getElementById('thisIsTheOccasionShareCommentEditor' + vm.activeOccasionShares[index].comments[j].id).setAttribute("style", "visibility: hidden;");
                  }
                  document.getElementById('thisIsTheOccasionShareCommentEditor' + vm.activeOccasionShares[index].comments[j].id).setAttribute("style", "display: none;");

                }
              }

            }, (shareComments.length * 100));
          }
        });
      }

      function retrieveUserOccasionShares() {
        let now = new Date();
        let shareDate;
        let expireTime;

        $http.get(`/occasions_shares`)
        .then(allSharesData=>{
          let allShares = allSharesData.data;
          let inviterShares = allShares.filter(sh=>{
            return((parseInt(sh.user_id) === parseInt(currentUserId)) && (parseInt(sh.share_associate_id) !== parseInt(currentUserId)));
          });
          let inviteeShares = allShares.filter(share=>{
            return(parseInt(share.share_associate_id) === parseInt(currentUserId));
          });
          let shares = inviteeShares.concat(inviterShares);
          if (shares.length > 0) {
            vm.activeOccasionShares = [];
            for (let i = 0; i < shares.length; i++) {
              vm.activeOccasionShares[i] = {};
              vm.activeOccasionShares[i].id = shares[i].id;
              vm.activeOccasionShares[i].updated_at = shares[i].updated_at;
              vm.activeOccasionShares[i].user_id = shares[i].user_id;
              occasionImagerAndNames(shares[i].user_id, shares[i].share_associate_id, i, ((parseInt(shares[i].user_id) === parseInt(currentUserId)) && (parseInt(shares[i].share_associate_id) !== parseInt(currentUserId))), shares[i].id);
              vm.activeOccasionShares[i].cleanDate = cleanDateHoliday(shares[i].created_at) + ' - ' + timeDate(shares[i].updated_at);
              occasionNameAndOccurance(shares[i].occasion_id, i);
              retreiveOccasionShareComments(shares[i], i);
              vm.activeOccasionShares[i].cleanUpdatedAt = cleanDateHoliday(shares[i].updated_at) + ' - ' + timeDate(shares[i].updated_at);
            }
            setTimeout(()=>{
              for (let j = 0; j < shares.length; j++) {
                if (parseInt(shares[j].user_id) !== parseInt(currentUserId)) {
                  document.getElementById('thisIsOccasionShareDeleteDiv' + shares[j].id).setAttribute("style", "display: none;");
                }
                if (shares[j].responded) {
                  document.getElementById('occasionAcceptDecline' + shares[j].id).setAttribute("style", "display: none;");
                  if (shares[j].accepted) {
                    document.getElementById('occasionShareAccepted' + shares[j].id).setAttribute("style", "display: initial;");
                    document.getElementById('occasionShareDeclined' + shares[j].id).setAttribute("style", "display: none;");
                  } else {
                    document.getElementById('occasionShareAccepted' + shares[j].id).setAttribute("style", "display: none;");
                    document.getElementById('occasionShareDeclined' + shares[j].id).setAttribute("style", "display: initial;");
                  }
                } else {
                  document.getElementById('occasionShareAccepted' + shares[j].id).setAttribute("style", "display: none;");
                  document.getElementById('occasionShareDeclined' + shares[j].id).setAttribute("style", "display: none;");
                }
              }
              for (let k = 0; k < vm.activeOccasionShares.length; k++) {
                shareDate = new Date(vm.activeOccasionShares[k].updated_at);
                expireTime = new Date(vm.activeOccasionShares[k].updated_at);
                expireTime.setDate(expireTime.getDate() + 30);
                if (now.getTime() > expireTime.getTime()) {
                  vm.activeOccasionShares.splice(k, 1);
                  k--;
                }
              }
            }, 100);
          }
        });
      }

      function artModuleViewDone() {
        let artModuleViewPane = document.getElementById('artModuleViewPane');
        let dashboard = document.getElementById('dashboard');

        artModuleViewPane.setAttribute("style", "visibility: hidden; opacity: 0; z-index: -6;");
        dashboard.setAttribute("style", "z-index: 6; opacity: 1; transition: opacity 0.4s linear;");
      }

      function artModuleViewer(authorId, theme) {
        let artModuleViewPane = document.getElementById('artModuleViewPane');
        let dashboard = document.getElementById('dashboard');
        let artModuleViewAuthorPic = document.getElementById('artModuleViewAuthorPic');
        let artModuleViewAuthorName = document.getElementById('artModuleViewAuthorName');
        let index = 0;
        let artModuleViewTheme = document.getElementById('artModuleViewTheme');
        let artModuleViewPictureLeft = document.getElementById('artModuleViewPictureLeft');
        let artModuleViewPictureCenter = document.getElementById('artModuleViewPictureCenter');
        let artModuleViewPictureRight = document.getElementById('artModuleViewPictureRight');
        let artModuleViewNavButtons = document.getElementById('artModuleViewNavButtons');
        let artModuleViewNavNext = document.getElementById('artModuleViewNavNext');
        if (artModuleViewNavNext) {
          artModuleViewNavNext.parentNode.removeChild(artModuleViewNavNext);
          artModuleViewNavNext = document.createElement('a');
          artModuleViewNavButtons.appendChild(artModuleViewNavNext);
          artModuleViewNavNext.id = 'artModuleViewNavNext';
          artModuleViewNavNext.className = 'btn';
          artModuleViewNavNext.innerHTML = 'next';
          artModuleViewNavNext.setAttribute("style", "cursor: pointer;");
        }
        let artModuleViewNavPrevious = document.getElementById('artModuleViewNavPrevious');
        if (artModuleViewNavPrevious) {
          artModuleViewNavPrevious.parentNode.removeChild(artModuleViewNavPrevious);
          artModuleViewNavPrevious = document.createElement('a');
          artModuleViewNavButtons.appendChild(artModuleViewNavPrevious);
          artModuleViewNavPrevious.id = 'artModuleViewNavPrevious';
          artModuleViewNavPrevious.className = 'btn';
          artModuleViewNavPrevious.innerHTML = 'prev';
          artModuleViewNavPrevious.setAttribute("style", "cursor: pointer;");
        }

        $http.get(`/users/${authorId}`)
        .then(authorData=>{
          let author = authorData.data;
          artModuleViewAuthorPic.src = author.user_avatar_url;
          artModuleViewAuthorName.innerHTML = 'Contributor: ' + author.name;
          $http.get(`/art_modulesbyuser/${authorId}`)
          .then(allArtModulesData=>{
            let allArtModules = allArtModulesData.data;
            let artModule = allArtModules.filter(art=>{
              return(art.theme === theme);
            });
            artModule = artModule.sort((a, b)=>{
              if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
              } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            index = artModule.length - 1;
            artModuleViewTheme.innerHTML = artModule[0].theme + ' - ' + artModule[0].artist + ': ' + artModule[0].title + ', ' + artModule[0].year;
            artModuleViewPictureLeft.src = artModule[index].img_path;
            artModuleViewPictureCenter.src = artModule[0].img_path;
            artModuleViewPictureRight.src = artModule[1].img_path;

            artModuleViewNavNext.addEventListener('click', ()=>{
              let centerIndex = 0;
              let rightIndex = 0;
              index++;
              if (index === artModule.length) {
                index = 0;
              }
              centerIndex = index + 1;
              if (centerIndex === artModule.length) {
                centerIndex = 0;
              }
              rightIndex = centerIndex + 1;
              if (rightIndex === artModule.length) {
                rightIndex = 0;
              }
              artModuleViewPictureLeft.src = artModule[index].img_path;
              artModuleViewPictureCenter.src = artModule[centerIndex].img_path;
              artModuleViewPictureRight.src = artModule[rightIndex].img_path;
              artModuleViewTheme.innerHTML = artModule[centerIndex].theme + ' - ' + artModule[centerIndex].artist + ': ' + artModule[centerIndex].title + ', ' + artModule[centerIndex].year;
            });
            artModuleViewNavPrevious.addEventListener('click', ()=>{
              let centerIndex = 0;
              let rightIndex = 0;
              index--;
              if (index === -1) {
                index = artModule.length - 1;
              }
              centerIndex = index + 1;
              if (centerIndex === artModule.length) {
                centerIndex = 0;
              }
              rightIndex = centerIndex + 1;
              if (rightIndex === artModule.length) {
                rightIndex = 0;
              }
              artModuleViewPictureLeft.src = artModule[index].img_path;
              artModuleViewPictureCenter.src = artModule[centerIndex].img_path;
              artModuleViewPictureRight.src = artModule[rightIndex].img_path;
              artModuleViewTheme.innerHTML = artModule[centerIndex].theme + ' - ' + artModule[centerIndex].artist + ': ' + artModule[centerIndex].title + ', ' + artModule[centerIndex].year;
            });
          });
        });

        artModuleViewPane.setAttribute("style", "visibility: visible; opacity: 1; z-index: 6; transition: opacity 0.5s linear;");
        dashboard.setAttribute("style", "z-index: -6; opacity: 0.3; transition: opacity 0.4s linear;");
      }

      function userTimeblockCommentDeleteConfirmClick(timeblockShareCommentId) {
        let deleteTimeblockCommentConfirm = document.getElementById('deleteTimeblockCommentConfirm' + timeblockShareCommentId);
        let editDeleteTimeblockShareCommentDiv = document.getElementById('editDeleteTimeblockShareCommentDiv' + timeblockShareCommentId);
        let timeblockIndex = 0;
        let timeblockCommentIndex = 0;

        $http.delete(`/timeblock_share_comments/${timeblockShareCommentId}`)
        .then(goneCommentData=>{
          let goneComment = goneCommentData.data;
          for (let i = 0; i < vm.activeTimeblockShares.length; i++) {
            if ((vm.activeTimeblockShares[i].comments !== undefined) && (vm.activeTimeblockShares[i].comments.length > 0)) {
              for (let j = 0; j < vm.activeTimeblockShares[i].comments.length; j++) {
                if (parseInt(vm.activeTimeblockShares[i].comments[j].id) === parseInt(goneComment.id)) {
                  timeblockIndex = i;
                  timeblockCommentIndex = j;
                }
              }
            }
          }
          vm.activeTimeblockShares[timeblockIndex].comments.splice(timeblockCommentIndex, 1);
          if (vm.activeTimeblockShares[timeblockIndex].comments.length === 0) {
            vm.activeTimeblockShares[timeblockIndex].commentsLength = '0 comments';
          } else if (vm.activeTimeblockShares[timeblockIndex].comments.length === 1) {
            vm.activeTimeblockShares[timeblockIndex].commentsLength = '1 comment';
          } else {
            vm.activeTimeblockShares[timeblockIndex].commentsLength = vm.activeTimeblockShares[timeblockIndex].comments.length + ' comments';
          }
        });

        deleteTimeblockCommentConfirm.setAttribute("style", "display: none;");
        editDeleteTimeblockShareCommentDiv.setAttribute("style", "display: initial;");
      }

      function userTimeblockCommentDeleteCancel(timeblockShareCommentId) {
        let deleteTimeblockCommentConfirm = document.getElementById('deleteTimeblockCommentConfirm' + timeblockShareCommentId);
        let editDeleteTimeblockShareCommentDiv = document.getElementById('editDeleteTimeblockShareCommentDiv' + timeblockShareCommentId);

        deleteTimeblockCommentConfirm.setAttribute("style", "display: none;");
        editDeleteTimeblockShareCommentDiv.setAttribute("style", "display: initial;");
      }

      function userDeleteTimeblockShareComment(timeblockShareCommentId) {
        let deleteTimeblockCommentConfirm = document.getElementById('deleteTimeblockCommentConfirm' + timeblockShareCommentId);
        let editDeleteTimeblockShareCommentDiv = document.getElementById('editDeleteTimeblockShareCommentDiv' + timeblockShareCommentId);

        deleteTimeblockCommentConfirm.setAttribute("style", "display: initial;");
        editDeleteTimeblockShareCommentDiv.setAttribute("style", "display: none;");
      }

      function holidayPoster(targetUserId, holiday) {
        let subObj = {
          user_id: targetUserId,
          name: holiday.name,
          color: holiday.color,
          picture: holiday.picture,
          day_of: holiday.day_of,
          is_annual: holiday.is_annual,
          rule: holiday.rule,
          art_override: holiday.art_override,
          music_override: holiday.music_override,
          override_content: holiday.override_content
        };
        $http.post('/holidays', subObj).
        then(()=>{
          console.log('posted');
        });
      }

      function addHolidayShare(share) {
        let holidayName = '';
        $http.get(`/holidaysbyuser/${share.user_id}`)
        .then(holidayListData=>{
          let holidayList = holidayListData.data;
          let holidayRef = holidayList.filter(entry=>{
            return(entry.id === share.holiday_id);
          });
          holidayName = holidayRef[0].name;
          let insertableHolidays = holidayList.filter(ent=>{
            return(ent.name === holidayName);
          });
          if (insertableHolidays.length > 0) {
            for (let i = 0; i < insertableHolidays.length; i++) {
              holidayPoster(share.share_associate_id, insertableHolidays[i]);
            }
          } else {
            alert ('ERROR inserting holiday(s).');
          }
        });
      }

      function acceptHolidayShare(holidayShareId) {
        let now = new Date();
        let subObj = {
          accepted: true,
          responded: true,
          updated_at: now
        };
        $http.patch(`/holiday_shares/${holidayShareId}`, subObj)
        .then(holidayShareData=>{
          let holidayShare = holidayShareData.data;
          document.getElementById('holidayAcceptDecline' + holidayShare.id).setAttribute("style", "display: none;");
          document.getElementById('holidayShareAccepted' + holidayShare.id).setAttribute("style", "display: initial;");
          addHolidayShare(holidayShare);
        });
      }

      function declineHolidayShare(holidayShareId) {
        let now = new Date();
        let subObj = {
          accepted: false,
          responded: true,
          updated_at: now
        };
        $http.patch(`/holiday_shares/${holidayShareId}`, subObj)
        .then(holidayShareData=>{
          let holidayShare = holidayShareData.data;
          document.getElementById('holidayAcceptDecline' + holidayShare.id).setAttribute("style", "display: none;");
          document.getElementById('holidayShareDeclined' + holidayShare.id).setAttribute("style", "display: initial;");
        });

      }

      function addNewComment(messageId) {
        let newCommentButton = document.getElementById('newCommentButton' + messageId);
        let index = 0;
        let subObj = {
          user_id: currentUserId,
          message_id: messageId,
          comment: ''
        };
        for (let i = 0; i < vm.userMessages.length; i++) {
          if (parseInt(vm.userMessages[i].id) === parseInt(messageId)) {
            index = i;
          }
        }
        $http.post('/comments', subObj)
        .then(commentData=>{
          let comment = commentData.data[0];
          console.log(comment);
          comment.cleanDate = cleanDateHoliday(comment.created_at) + ' - ' + timeDate(comment.updated_at);
          newCommentButton.setAttribute("style", "visibility: hidden;");
          if (vm.userMessages[index].comments === undefined) {
            vm.userMessages[index].comments = [];
          }
          vm.userMessages[index].comments.push(comment);
          pullCommenterUserData(comment, (vm.userMessages[index].comments.length - 1), index);
          setTimeout(()=>{
            userEditComment(comment.id);
            console.log(document.getElementById('commentSpace').clientHeight);
            document.getElementById('commentSpace').scrollTop = (document.getElementById('commentSpace').scrollHeight - document.getElementById('commentSpace').clientHeight);
            document.getElementById('thisIsTheCommentEditor' + comment.id).focus();
          }, 100);

        });
      }

      function timeblockShareDeleteConfirm(timeblockShareId) {
        let thisIsTimeblockShareDeleteDiv = document.getElementById("thisIsTimeblockShareDeleteDiv" + timeblockShareId);
        let thisIsTimeblockShareDeleteConfirmDiv = document.getElementById("thisIsTimeblockShareDeleteConfirmDiv" + timeblockShareId);

        $http.delete(`/timeblock_shares/${timeblockShareId}`)
        .then(goneAppointmentData=>{
          let goneAppointment = goneAppointmentData.data;
          for (let i = 0; i < vm.activeTimeblockShares.length; i++) {
            if (parseInt(vm.activeTimeblockShares[i].id) === parseInt(timeblockShareId)) {
              vm.activeTimeblockShares.splice(i, 1);
            }
          }
        });

        thisIsTimeblockShareDeleteDiv.setAttribute("style", "display: initial;");
        thisIsTimeblockShareDeleteConfirmDiv.setAttribute("style", "display: none;");
      }

      function timeblockShareDeleteDeny(timeblockShareId) {
        let thisIsTimeblockShareDeleteDiv = document.getElementById("thisIsTimeblockShareDeleteDiv" + timeblockShareId);
        let thisIsTimeblockShareDeleteConfirmDiv = document.getElementById("thisIsTimeblockShareDeleteConfirmDiv" + timeblockShareId);

        thisIsTimeblockShareDeleteDiv.setAttribute("style", "display: initial;");
        thisIsTimeblockShareDeleteConfirmDiv.setAttribute("style", "display: none;");
      }

      function deleteTimeblockShare(timeblockShareId) {
        let thisIsTimeblockShareDeleteDiv = document.getElementById("thisIsTimeblockShareDeleteDiv" + timeblockShareId);
        let thisIsTimeblockShareDeleteConfirmDiv = document.getElementById("thisIsTimeblockShareDeleteConfirmDiv" + timeblockShareId);

        thisIsTimeblockShareDeleteDiv.setAttribute("style", "display: none;");
        thisIsTimeblockShareDeleteConfirmDiv.setAttribute("style", "display: initial;");
      }

      function removeEmptyTimeblockShareComment(id) {
        $http.delete(`/timeblock_share_comments/${id}`)
        .then(emptyData=>{
          let empty = emptyData.data;
          for (let i = 0; i < vm.activeTimeblockShares.length; i++) {
            if (vm.activeTimeblockShares[i].comments !== undefined) {
              for (let j = 0; j < vm.activeTimeblockShares[i].comments.length; j++) {
                if (vm.activeTimeblockShares[i].comments[j].id === id) {
                  vm.activeTimeblockShares[i].comments.splice(j, 1);
                }
              }
            }
          }
        });
      }

      function deleteEmptyAppointmentComments() {
        $http.get(`/timeblock_share_commentsbyuser/${currentUserId}`)
        .then(commentsData=>{
          let comments = commentsData.data;
          if (comments.length > 0) {
            for (let i = 0; i < comments.length; i++) {
              if (comments[i].comment === '') {
                removeEmptyTimeblockShareComment(comments[i].id);
              }
            }
          }
        });
      }

      function userEditTimeblockShareCommentCompleted(timeblockShareId) {

        let thisIsTheTimeblockShareCommentEditor = document.getElementById('thisIsTheTimeblockShareCommentEditor' + timeblockShareId);
        let thisIsTimeblockShareCommentEditDoneDiv = document.getElementById('thisIsTimeblockShareCommentEditDoneDiv' + timeblockShareId);
        let thisIsTheTimeblockShareComment = document.getElementById('thisIsTheTimeblockShareComment' + timeblockShareId);
        let editDeleteTimeblockShareCommentDiv = document.getElementById('editDeleteTimeblockShareCommentDiv' + timeblockShareId);
        let subObj = {
          comment: thisIsTheTimeblockShareCommentEditor.value,
          updated_at: new Date()
        };
        $http.patch(`/timeblock_share_comments/${timeblockShareId}`, subObj)
        .then(updatedCommentData=>{
          let updatedComment = updatedCommentData.data;
          thisIsTheTimeblockShareCommentEditor.setAttribute("style", "display: none;");
          thisIsTimeblockShareCommentEditDoneDiv.setAttribute("style", "display: none;");
          thisIsTheTimeblockShareComment.innerHTML = updatedComment.comment;
          thisIsTheTimeblockShareComment.setAttribute("style", "visibility: visible;");
          editDeleteTimeblockShareCommentDiv.setAttribute("style", "display: initial;");
          deleteEmptyAppointmentComments();
        });
      }

      function userEditTimeblockShareComment(timeblockShareId) {

        let thisIsTheTimeblockShareCommentEditor = document.getElementById('thisIsTheTimeblockShareCommentEditor' + timeblockShareId);
        let thisIsTimeblockShareCommentEditDoneDiv = document.getElementById('thisIsTimeblockShareCommentEditDoneDiv' + timeblockShareId);
        let thisIsTheTimeblockShareComment = document.getElementById('thisIsTheTimeblockShareComment' + timeblockShareId);
        let editDeleteTimeblockShareCommentDiv = document.getElementById('editDeleteTimeblockShareCommentDiv' + timeblockShareId);

        $http.get(`/timeblock_share_comments/${timeblockShareId}`)
        .then(timeblockShareCommentData=>{
          let timeblockShareComment = timeblockShareCommentData.data;
          thisIsTheTimeblockShareCommentEditor.setAttribute("style", "display: initial;");
          thisIsTheTimeblockShareCommentEditor.value = timeblockShareComment.comment;
          thisIsTheTimeblockShareCommentEditor.focus();
          thisIsTimeblockShareCommentEditDoneDiv.setAttribute("style", "display: initial;");
          thisIsTheTimeblockShareComment.setAttribute("style", "visibility: hidden;");
          editDeleteTimeblockShareCommentDiv.setAttribute("style", "display: none;");

        });
      }

      function populateFriendsList(associatesList, userId) {
        $http.get(`/users/${userId}`)
        .then(friendData=>{
          let friend = friendData.data;
          associatesList.push(friend);
        });
      }

      function handleFriendClick(entry, friendId) {
        let directMessageList = document.getElementById('directMessageList');

        entry.addEventListener('click', ()=>{
          $http.get(`/users/${currentUserId}`)
          .then(userData=>{
            let user = userData.data;
            let messageSubObj = {
              user_id: parseInt(currentUserId),
              to_user_id: parseInt(friendId),
              message: '',
              public: false
            };
            $http.get(`/users/${friendId}`)
            .then(theFriendData=>{
              let theFriend = theFriendData.data;
              $http.post('/messages', messageSubObj)
              .then(messageData=>{
                let message = messageData.data[0];
                let cleanerMessage = cleanDateHoliday(message.created_at) + ' - ' + timeDate(message.created_at);
                let userMessage = {
                  id: message.id,
                  cleanDate: cleanerMessage,
                  message: message.message,
                  senderImg: user.user_avatar_url,
                  senderName: user.name,
                  recipientName: theFriend.name
                };
                vm.userMessages.unshift(userMessage);
                userEditMessage(message.id);

              });
            });

          });
          directMessageList.setAttribute("style", "display: none;");
        });
      }

      function displayFriendsList(div, list) {
        let element;
        let entry;
        while (div.firstChild) {
          div.removeChild(div.firstChild);
        }
        for (let i = 0; i < list.length; i++) {
          element = document.createElement('br');
          div.appendChild(element);
          entry = document.createElement('div');
          div.appendChild(entry);
          entry.setAttribute("style", "cursor: pointer;");
          element = document.createElement('img');
          entry.appendChild(element);
          element.src = list[i].user_avatar_url;
          element = document.createElement('p');
          entry.appendChild(element);
          element.innerHTML = list[i].name;
          element = document.createElement('br');
          div.appendChild(element);
          element = document.createElement('br');
          div.appendChild(element);
          element = document.createElement('br');
          div.appendChild(element);
          handleFriendClick(entry, list[i].id);
        }
      }

      function messageDirect() {
        let authorNewMessageQuery = document.getElementById('authorNewMessageQuery');
        let directMessageList = document.getElementById('directMessageList');
        let directMessageSearchDiv = document.getElementById('directMessageSearchDiv');
        let directMessageTargetSearch = document.getElementById('directMessageTargetSearch');
        if (directMessageTargetSearch) {
          directMessageTargetSearch.parentNode.removeChild(directMessageTargetSearch);
          directMessageTargetSearch = document.createElement('input');
          directMessageSearchDiv.appendChild(directMessageTargetSearch);
          directMessageTargetSearch.id = 'directMessageTargetSearch';
          directMessageTargetSearch.type = 'text';
          directMessageTargetSearch.className = 'pure-input-1';
          directMessageTargetSearch.placeholder = 'search';
        }
        let listOfFriendsDiv = document.getElementById('listOfFriendsDiv');
        while (listOfFriendsDiv.firstChild) {
          listOfFriendsDiv.removeChild(listOfFriendsDiv.firstChild);
        }
        let filteredList = [];
        let associatesList = [];
        $http.get(`/users/${currentUserId}`)
        .then(userData=>{
          let user = userData.data;
          if (user.associates.friends.length > 0) {
            for (let i = 0; i < user.associates.friends.length; i++) {
              populateFriendsList(associatesList, user.associates.friends[i], listOfFriendsDiv);
            }
          }
          setTimeout(()=>{
            associatesList = associatesList.sort((a, b)=>{
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            displayFriendsList(listOfFriendsDiv, associatesList);
            directMessageTargetSearch.addEventListener('keyup', ()=>{
              let nameString = '';
              let subString = '';
              if (directMessageTargetSearch.value === '') {
                displayFriendsList(listOfFriendsDiv, associatesList);
              } else {
                filteredList = associatesList.filter(entity=>{
                  nameString = entity.name.toLowerCase();
                  subString = directMessageTargetSearch.value.toLowerCase();
                  return(nameString.includes(subString));
                });
                displayFriendsList(listOfFriendsDiv, filteredList);
              }
            });
          }, 250);
        });

        authorNewMessageQuery.setAttribute("style", "display: none;");
        directMessageList.setAttribute("style", "display: initial;");
      }

      function messageForAllFriends() {
        $http.get(`/users/${currentUserId}`)
        .then(userData=>{
          let user = userData.data;
          let messageSubObj = {
            user_id: parseInt(currentUserId),
            to_user_id: parseInt(currentUserId),
            message: '',
            public: true
          };
          $http.post('/messages', messageSubObj)
          .then(messageData=>{
            let message = messageData.data[0];
            let cleaner = new Date();
            let userMessage = {
              id: message.id,
              cleanDate: cleanDateHoliday(cleaner) + ' - ' + timeDate(cleaner),
              message: message.message,
              senderImg: user.user_avatar_url,
              senderName: user.name,
              recipientName: 'All Friends'
            };
            vm.userMessages.unshift(userMessage);
            userEditMessage(message.id);

            document.getElementById('authorNewMessageQuery').setAttribute("style", "display: none;");
          });
        });
      }

      function messageForAllUsers() {
        $http.get(`/users/${currentUserId}`)
        .then(userData=>{
          let user = userData.data;
          $http.get('users')
          .then(allUsersData=>{
            let allUsers = allUsersData.data;
            let friends = [];
            if (allUsers.length > 0) {
              for (let i = 0; i < allUsers.length; i++) {
                if (parseInt(allUsers[i].id) !== parseInt(currentUserId)) {
                  friends.push(parseInt(allUsers[i].id));
                }
              }
            }
            let userSubObj = {
              associates: {
                friends: friends
              }
            };
            $http.patch(`/users/${currentUserId}`, userSubObj)
            .then(updatedData=>{
              let updated = updatedData.data;
              console.log(updated);
              let messageSub = {
                user_id: parseInt(currentUserId),
                to_user_id: parseInt(currentUserId),
                message: '',
                public: true
              };

              $http.post('/messages', messageSub)
              .then(messageData=>{
                let message = messageData.data[0];
                let cleaner = new Date();
                let userMessage = {
                  id: message.id,
                  cleanDate: cleanDateHoliday(cleaner) + ' - ' + timeDate(cleaner),
                  message: message.message,
                  senderImg: user.user_avatar_url,
                  senderName: user.name,
                  recipientName: 'All 168h Users'
                };
                vm.userMessages.unshift(userMessage);
                userEditMessage(message.id);

                document.getElementById('authorNewMessageQuery').setAttribute("style", "display: none;");
              });
            });
          });
        });
      }

      function postNewMessage() {
        let postNewMessageButton = document.getElementById('postNewMessageButton');
        let authorNewMessageQuery = document.getElementById('authorNewMessageQuery');
        let adminMessageAllButton = document.getElementById('adminMessageAllButton');

        $http.get(`/users/${currentUserId}`)
        .then(userData=>{
          let user = userData.data;
          if (user.is_admin) {
            adminMessageAllButton.setAttribute("style", "visibility: visible;");
          }
        });

        postNewMessageButton.setAttribute("style", "visibility: hidden;");
        authorNewMessageQuery.setAttribute("style", "display: initial;");
      }

      function userCommentDeleteConfirmClick(commentId, messageId) {
        let messageIndex = 0;
        let index = 0;
        $http.delete(`/comments/${commentId}`)
        .then(deletedEntryData=>{
          let deletedEntry = deletedEntryData.data;
          for (let i = 0; i < vm.userMessages.length; i++) {
            if ((vm.userMessages[i].comments !== undefined) &&  (vm.userMessages[i].comments.length > 0)) {
              for (let j = 0; j < vm.userMessages[i].comments.length; j++) {
                if (commentId === vm.userMessages[i].comments[j].id) {
                  messageIndex = i;
                  index = j;
                }
              }
            }
          }
          vm.userMessages[messageIndex].comments.splice(index, 1);
          for (let i = 0; i < vm.userMessages.length; i++) {
            if (vm.userMessages[i].id === messageId) {
              updateCommentsNumber(i, messageId);
            }
          }
        });
      }

      function userCommentDeleteCancel(commentId) {
        let editDeleteUserComments = document.getElementById('editDeleteUserComments' + commentId.toString());
        let deleteCommentConfirm = document.getElementById('deleteCommentConfirm' + commentId.toString());

        editDeleteUserComments.setAttribute("style", "display: initial;");
        deleteCommentConfirm.setAttribute("style", "display: none;");
      }

      function userDeleteComment(commentId, messageId) {
        let editDeleteUserComments = document.getElementById('editDeleteUserComments' + commentId.toString());
        let deleteCommentConfirm = document.getElementById('deleteCommentConfirm' + commentId.toString());

        editDeleteUserComments.setAttribute("style", "display: none;");
        deleteCommentConfirm.setAttribute("style", "display: initial;");

      }

      function appointmentNo(blockShare) {
        let now = new Date();
        let subObj = {
          accepted: false,
          responded: true,
          updated_at: now
        };
        let declineAppointment = document.getElementById('declineAppointment' + blockShare.toString());
        let acceptDecline = document.getElementById('acceptDecline' + blockShare.toString());
        let element;
        $http.patch(`/timeblock_shares/${blockShare}`, subObj)
        .then(blockData=>{
          let block = blockData.data;
          declineAppointment.setAttribute("style", "display: initial;");
          acceptDecline.setAttribute("style", "display: none;");
          $http.get(`/users/${block.share_associate_id}`)
          .then(inviteeData=>{
            let invitee = inviteeData.data;
            while (declineAppointment.firstChild) {
              declineAppointment.removeChild(declineAppointment.firstChild);
            }
            declineAppointment.setAttribute("style", "padding: 2vmin; margin-right: 2vmin; float: left;");
            element = document.createElement('img');
            declineAppointment.appendChild(element);
            element.src = invitee.user_avatar_url;
            element = document.createElement('h3');
            declineAppointment.appendChild(element);
            element.setAttribute("style", "float: left; margin-left: 2vmin;");
            element.innerHTML = invitee.name + ' has declined this invitation at ' + cleanDateHoliday(block.updated_at) + ' - ' + timeDate(block.updated_at) + '.';
          });
        });
      }

      function removeConflictingBlock(blockId) {
        $http.delete(`/timeblocks/${blockId}`)
        .then(removedData=>{
          let removed = removedData.data;
          console.log(removed);
        });
      }

      function appointmentYes(blockShare) {
        let now = new Date();
        let subObj = {
          accepted: true,
          responded: true,
          updated_at: now
        };
        let acceptedAppointment = document.getElementById('acceptedAppointment' + blockShare.toString());
        let acceptDecline = document.getElementById('acceptDecline' + blockShare.toString());
        let element;
        $http.patch(`/timeblock_shares/${blockShare}`, subObj)
        .then(blockData=>{
          let block = blockData.data;
          acceptedAppointment.setAttribute("style", "display: initial;");
          acceptDecline.setAttribute("style", "display: none;");
          $http.get(`/users/${block.share_associate_id}`)
          .then(inviteeData=>{
            let invitee = inviteeData.data;
            while (acceptedAppointment.firstChild) {
              acceptedAppointment.removeChild(acceptedAppointment.firstChild);
            }
            acceptedAppointment.setAttribute("style", "padding: 2vmin; margin-right: 2vmin; float: left;");
            element = document.createElement('img');
            acceptedAppointment.appendChild(element);
            element.src = invitee.user_avatar_url;
            element = document.createElement('h3');
            acceptedAppointment.appendChild(element);
            element.setAttribute("style", "float: left; margin-left: 2vmin;");
            element.innerHTML = invitee.name + ' has accepted this invitation at ' + cleanDateHoliday(block.updated_at) + ' - ' + timeDate(block.updated_at) + '.';
            $http.get(`/timeblocksbyuser/${currentUserId}`)
            .then(userBlocksData=>{
              let userBlocks = userBlocksData.data;
              console.log(userBlocks);
              $http.get(`/timeblocks/${block.timeblock_id}`)
              .then(appointmentBlockData=>{
                let appointmentBlock = appointmentBlockData.data;
                console.log(appointmentBlock);
                if (userBlocks.length > 0) {
                  for (let i = 0; i < userBlocks.length; i++) {
                    if (appointmentBlock.id !== userBlocks[i].id) {
                      if (overlapExist(userBlocks[i], appointmentBlock)) {
                        removeConflictingBlock(userBlocks[i].id);
                      }
                    }
                  }
                }
                let subObj = {
                  user_id: currentUserId,
                  block_type: appointmentBlock.block_type,
                  start_time: appointmentBlock.start_time,
                  end_time: appointmentBlock.end_time,
                  user_notes: appointmentBlock.user_notes,
                  location: appointmentBlock.location,
                  block_data: appointmentBlock.block_data

                };
                $http.post(`/timeblocks`, subObj)
                .then(postedAppointmentData=>{
                  let postedAppointment = postedAppointmentData.data;
                  console.log(postedAppointment);
                });
              });
            });
          });
        });
      }

      function tileCurratorReportDone() {
        let reportForTilesCurrator = document.getElementById('reportForTilesCurrator');
        let tilesCurratorManagerDone = document.getElementById('tilesCurratorManagerDone');
        let userTilesCurratorEditorDiv = document.getElementById('userTilesCurratorEditorDiv');

        reportForTilesCurrator.setAttribute("style", "display: none;");
        tilesCurratorManagerDone.setAttribute("style", "visibility: visible;");
        userTilesCurratorEditorDiv.setAttribute("style", "display: none;");
      }

      function tilesCurratorReport(month) {
        let reportForTilesCurrator = document.getElementById('reportForTilesCurrator');
        let tilesCurratorManagerDone = document.getElementById('tilesCurratorManagerDone');
        let userTilesCurratorEditorDiv = document.getElementById('userTilesCurratorEditorDiv');
        let userTilesString = month.toLowerCase() + '_tilesbyuser';

        $http.get(`/${userTilesString}/${currentUserId}`)
        .then(userTilesData=>{
          let userTiles = userTilesData.data;
          if (userTiles.length > 1) {
            let defaultTiles = userTiles.filter(tile=>{
              return(tile.type === 'default');
            });
            let mtwtTiles = userTiles.filter(tile=>{
              return(tile.type === 'mtwt');
            });
            let fridayTiles = userTiles.filter(tile=>{
              return(tile.type === 'friday');
            });
            let saturdayTiles = userTiles.filter(tile=>{
              return(tile.type === 'saturday');
            });
            let sundayTiles = userTiles.filter(tile=>{
              return(tile.type === 'sunday');
            });
            let holidayTiles = userTiles.filter(tile=>{
              return(tile.type === 'holiday');
            });
            let weekTiles = userTiles.filter(tile=>{
              return(tile.type === 'week');
            });
            vm.tilesCurratorReporting = [];
            vm.tilesCurratorReporting[0] = {};
            vm.tilesCurratorReporting[0].month = month;
            vm.tilesCurratorReporting[0].theme = userTiles[0].theme;
            vm.tilesCurratorReporting[0].totalWorks = userTiles.length;
            vm.tilesCurratorReporting[0].defaultTiles = defaultTiles.length;
            vm.tilesCurratorReporting[0].mtwtTiles = mtwtTiles.length;
            vm.tilesCurratorReporting[0].fridayTiles = fridayTiles.length;
            vm.tilesCurratorReporting[0].saturdayTiles = saturdayTiles.length;
            vm.tilesCurratorReporting[0].sundayTiles = sundayTiles.length;
            vm.tilesCurratorReporting[0].holidayTiles = holidayTiles.length;
            vm.tilesCurratorReporting[0].weekTiles = weekTiles.length;
          }
        });


        reportForTilesCurrator.setAttribute("style", "display: initial;");
        tilesCurratorManagerDone.setAttribute("style", "visibility: hidden;");
        userTilesCurratorEditorDiv.setAttribute("style", "display: none;");

      }

      function userMessageDeleteConfirmClick(messageId) {
        let index = 0;
        $http.delete(`/messages/${messageId}`)
        .then(()=>{
          for (let i = 0; i < vm.userMessages.length; i++) {
            if (vm.userMessages[i].id === messageId) {
              index = i;
            }
          }
          vm.userMessages.splice(index, 1);
        });
      }

      function userMessageDeleteCancel(messageId) {
        let editDeleteDiv = document.getElementById('editDeleteDiv' + messageId);
        let deleteMessageConfirm = document.getElementById('deleteMessageConfirm' + messageId);

        editDeleteDiv.setAttribute("style", "display: initial;");
        deleteMessageConfirm.setAttribute("style", "display: none;");
      }

      function userDeleteMessage(messageId) {
        let editDeleteDiv = document.getElementById('editDeleteDiv' + messageId);
        let deleteMessageConfirm = document.getElementById('deleteMessageConfirm' + messageId);

        editDeleteDiv.setAttribute("style", "display: none;");
        deleteMessageConfirm.setAttribute("style", "display: initial;");
      }

      function deleteTheEmptyComment(commentId) {
        $http.delete(`/comments/${commentId}`)
        .then(commentData=>{
          let comment = commentData.data;
          for (let i = 0; i < vm.userMessages.length; i++) {
            if (parseInt(comment.message_id) === parseInt(vm.userMessages[i].id)) {
              for (let j = 0; j < vm.userMessages[i].comments.length; j++) {
                if (parseInt(comment.id) === parseInt(vm.userMessages[i].comments[j].id)) {
                  vm.userMessages[i].comments.splice(j, 1);
                }
              }
            }
          }
        });
      }

      function removeEmptyComments() {
        $http.get(`/commentsbyuser/${currentUserId}`)
        .then(userCommentsData=>{
          let userComments = userCommentsData.data;
          if (userComments.length > 0) {
            for (let i = 0; i < userComments.length; i++) {
              if (userComments[i].comment === '') {
                deleteTheEmptyComment(userComments[i].id);
              }
            }
          }
        });
      }

      function updateCommentsNumber(index, messageId) {
        $http.get('/comments')
        .then(allCommentsData=>{
          let allComments = allCommentsData.data;
          let filteredComments = allComments.filter(com=>{
            return(com.message_id === messageId);
          });
          if (filteredComments.length > 0) {
            if (filteredComments.length === 1) {
              vm.userMessages[index].commentsLength = '1 comment';
            } else {
              vm.userMessages[index].commentsLength = filteredComments.length + ' comments';
            }
          } else {
            vm.userMessages[index].commentsLength = '0 comments';
          }
        });
      }

      function userEditCommentCompleted(commentId, messageId) {

        let update = new Date();
        let thisIsTheCommentEditor = document.getElementById('thisIsTheCommentEditor' + commentId);
        let thisIsTheComment = document.getElementById('thisIsTheComment' + commentId);
        let thisIsCommentEditDoneDiv = document.getElementById('thisIsCommentEditDoneDiv' + commentId);
        let editDeleteUserComments = document.getElementById('editDeleteUserComments' + commentId);
        let subObj = {
          comment: thisIsTheCommentEditor.value,
          updated_at: update
        };
        $http.patch(`/comments/${commentId}`, subObj)
        .then(commentData=>{
          let comment = commentData.data;
          let newCommentButton = document.getElementById('newCommentButton' + comment.message_id);
          let updateTime = new Date(comment.updated_at);
          let createTime = new Date(comment.created_at);
          console.log(comment);
          thisIsTheComment.innerHTML = comment.comment;
          thisIsTheComment.setAttribute("style", "visibility: visible;");
          thisIsTheCommentEditor.setAttribute("style", "display: none;");
          thisIsCommentEditDoneDiv.setAttribute("style", "display: none;");
          editDeleteUserComments.setAttribute("style", "display: initial;");
          newCommentButton.setAttribute("style", "visibility: visible;");
          removeEmptyComments();
          //Clean Date update

          for (let i = 0; i < vm.userMessages.length; i++) {
            if (vm.userMessages[i].id === messageId) {
              updateCommentsNumber(i, messageId);
              for (let j = 0; j < vm.userMessages[i].comments.length; j++) {
                if (vm.userMessages[i].comments[j].id === commentId) {
                  if (updateTime.getTime() < (createTime.getTime() + 15001)) {
                    vm.userMessages[i].comments[j].cleanDate = cleanDateHoliday(comment.created_at) + ' - ' + timeDate(comment.created_at);
                  } else {
                    vm.userMessages[i].comments[j].cleanDate = cleanDateHoliday(comment.created_at) + ' - ' + timeDate(comment.created_at) + ' - - - updated at ' + cleanDateHoliday(comment.updated_at) + ' - ' + timeDate(comment.updated_at);
                  }
                }
              }

            }
          }
        });



      }

      function userEditComment(commentId, messageId) {
        let thisIsTheCommentEditor = document.getElementById('thisIsTheCommentEditor' + commentId);
        let thisIsTheComment = document.getElementById('thisIsTheComment' + commentId);
        let thisIsCommentEditDoneDiv = document.getElementById('thisIsCommentEditDoneDiv' + commentId);
        let editDeleteUserComments = document.getElementById('editDeleteUserComments' + commentId);

        thisIsTheCommentEditor.value = thisIsTheComment.innerHTML;
        thisIsTheCommentEditor.setAttribute("style", "display: initial;");
        thisIsTheComment.setAttribute("style", "visibility: hidden;");
        thisIsCommentEditDoneDiv.setAttribute("style", "display: initial;");
        editDeleteUserComments.setAttribute("style", "display: none;");

        for (let i = 0; i < vm.userMessages.length; i++) {
          if (vm.userMessages[i].id === messageId) {
            updateCommentsNumber(i, messageId);
          }
        }
      }

      function musicCurratorReportDone() {
        let reportForMusicsCurrator = document.getElementById('reportForMusicsCurrator');
        let musicCurratorManagerDone = document.getElementById('musicCurratorManagerDone');

        reportForMusicsCurrator.setAttribute("style", "display: none;");
        musicCurratorManagerDone.setAttribute("style", "visibility: visible;");
      }

      function musicCurratorReport(musicPath) {
        let userPath = musicPath + 'byuser';
        let today = new Date();
        let reportForMusicsCurrator = document.getElementById('reportForMusicsCurrator');
        let userMusicCurratorEditorDiv = document.getElementById('userMusicCurratorEditorDiv');
        let musicCurratorManagerDone = document.getElementById('musicCurratorManagerDone');
        let monthDays = 0;
        vm.musicsCurratorReporting = [];
        vm.musicsCurratorReporting[0] = {};
        let monthString = '';
        $http.get(`/${userPath}/${currentUserId}`)
        .then(userMusicsData=>{
          let userMusics = userMusicsData.data;
          vm.musicsCurratorReporting[0].totalWorks = userMusics.length;
          switch(musicPath) {
            case('friday_musics'):
              vm.musicsCurratorReporting[0].month = 'Friday Musics';
              vm.musicsCurratorReporting[0].theme = 'Friday Musics';
              break;
            case('sunday_musics'):
              vm.musicsCurratorReporting[0].month = 'Sunday Musics';
              vm.musicsCurratorReporting[0].theme = 'Sunday Musics';
              break;
            case('january_musics'):
              monthDays = 31;
              monthString = '01';
              vm.musicsCurratorReporting[0].month = 'January';
              break;
            case('february_musics'):
              monthDays = 29;
              monthString = '02';
              vm.musicsCurratorReporting[0].month = 'February';
              break;
            case('march_musics'):
              monthDays = 31;
              monthString = '03';
              vm.musicsCurratorReporting[0].month = 'March';
              break;
            case('april_musics'):
              monthDays = 30;
              monthString = '04';
              vm.musicsCurratorReporting[0].month = 'April';
              break;
            case('may_musics'):
              monthDays = 31;
              monthString = '05';
              vm.musicsCurratorReporting[0].month = 'May';
              break;
            case('june_musics'):
              monthDays = 30;
              monthString = '06';
              vm.musicsCurratorReporting[0].month = 'June';
              break;
            case('july_musics'):
              monthDays = 31;
              monthString = '07';
              vm.musicsCurratorReporting[0].month = 'July';
              break;
            case('august_musics'):
              monthDays = 31;
              monthString = '08';
              vm.musicsCurratorReporting[0].month = 'August';
              break;
            case('september_musics'):
              monthDays = 30;
              monthString = '09';
              vm.musicsCurratorReporting[0].month = 'September';
              break;
            case('october_musics'):
              monthDays = 31;
              monthString = '10';
              vm.musicsCurratorReporting[0].month = 'October';
              break;
            case('november_musics'):
              monthDays = 30;
              monthString = '11';
              vm.musicsCurratorReporting[0].month = 'November';
              break;
            case('december_musics'):
              monthDays = 31;
              monthString = '12';
              vm.musicsCurratorReporting[0].month = 'December';
              break;
            default:
              console.log('unsupported music path');
          }
          let musicsCurratorReportYearAdapter = document.getElementById('musicsCurratorReportYearAdapter');
          console.log(musicsCurratorReportYearAdapter);
          let musicsCurratorReportYear = document.getElementById('musicsCurratorReportYear');
          if (musicsCurratorReportYear) {
            musicsCurratorReportYear.parentNode.removeChild(musicsCurratorReportYear);
            musicsCurratorReportYear = document.createElement('input');
            musicsCurratorReportYearAdapter.appendChild(musicsCurratorReportYear);
            musicsCurratorReportYear.id = 'musicsCurratorReportYear';
            musicsCurratorReportYear.type = 'number';
            musicsCurratorReportYear.className = 'pure-input-1';
            musicsCurratorReportYear.min = 0;
            musicsCurratorReportYear.max = 9999;
            musicsCurratorReportYear.value = parseInt(today.getFullYear());
          }
          let musicsCoverageLabel = document.getElementById('musicsCoverageLabel');
          let musicsCurratorReportGraphs = document.getElementById('musicsCurratorReportGraphs');
          while (musicsCurratorReportGraphs.firstChild) {
            musicsCurratorReportGraphs.removeChild(musicsCurratorReportGraphs.firstChild);
          }
          let yearString = musicsCurratorReportYear.value.toString();
          let weekDays = [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ];


          if ((musicPath === 'friday_musics') || (musicPath === 'sunday_musics')) {
            musicsCurratorReportYearAdapter.setAttribute("style", "display: none;");
            musicsCoverageLabel.setAttribute("style", "display: none;");
            musicsCurratorReportGraphs.setAttribute("style", "display: none;");
          } else {
            musicsCurratorReportYearAdapter.setAttribute("style", "display: initial;");
            musicsCoverageLabel.setAttribute("style", "display: initial;");
            musicsCurratorReportGraphs.setAttribute("style", "display: initial;");
            let musicMonthStreams = {};
            let dayString = '';
            let checkDate;
            let element;
            let dayGraphLabel;
            let subElement;
            let dataStream;
            yearString = musicsCurratorReportYear.value.toString();
            musicMonthStreams.mostStreams = 0;
            for (let i = 0; i < monthDays; i++) {
              if ((i + 1) < 10) {
                dayString = '0' + (i + 1).toString();
              } else {
                dayString = (i + 1).toString();
              }
              checkDate = new Date(yearString + '-' + monthString + '-' + dayString + 'T13:44:00.000Z');
              if (weekDays[checkDate.getDay()] === 'friday') {
                musicMonthStreams[(i+1).toString()] = 'Friday';
              } else if (weekDays[checkDate.getDay()] === 'sunday') {
                musicMonthStreams[(i+1).toString()] = 'Sunday';
              } else {
                for (let j = 0; j < userMusics.length; j++) {
                  if (userMusics[j].rule[weekDays[checkDate.getDay()]].indexOf(i+1) !== -1) {
                    if (musicMonthStreams[(i+1).toString()] === undefined) {
                      musicMonthStreams[(i+1).toString()] = 1;
                    } else {
                      ++musicMonthStreams[(i+1).toString()];
                    }
                    if (musicMonthStreams[(i+1).toString()] > musicMonthStreams.mostStreams) {
                      musicMonthStreams.mostStreams = musicMonthStreams[(i+1).toString()];
                    }
                  }
                }
              }
            }
            for (let days = 0; days < monthDays; days++) {
              dayGraphLabel = document.createElement('h2');
              musicsCurratorReportGraphs.appendChild(dayGraphLabel);
              dayGraphLabel.innerHTML = (days+1).toString();
              dayGraphLabel.setAttribute("style", "margin-top: 4vmin; margin-bottom: 0");
              element = document.createElement('div');
              musicsCurratorReportGraphs.appendChild(element);
              if (musicMonthStreams[(days+1).toString()] === 'Friday') {
                subElement = document.createElement('h2');
                element.appendChild(subElement);
                subElement.innerHTML = 'Friday';
                subElement.setAttribute("style", "margin: 0 0 0 8vmin;");
              } else if (musicMonthStreams[(days+1).toString()] === 'Sunday') {
                subElement = document.createElement('h2');
                element.appendChild(subElement);
                subElement.innerHTML = 'Sunday';
                subElement.setAttribute("style", "margin: 0 0 0 8vmin;");
              } else {
                element.setAttribute("style", "width: 80%; height: 50px; border: solid 2px #000000; margin: 0 0 1vmin 8vmin; background-color: #bbbbbb;");
                subElement = document.createElement('div');
                element.appendChild(subElement);
                subElement.setAttribute("style", "background: #441E38; background-color: -webkit-linear-gradient(135deg, #441E38, #3E9B8C); background: -o-linear-gradient(135deg, #441E38, #3E9B8C); background: -moz-linear-gradient(135deg, #441E38, #3E9B8C); background: linear-gradient(135deg, #441E38, #3E9B8C); height: 100%; width: " + Math.floor(400 * (musicMonthStreams[(days+1).toString()]/userMusics.length)) + "%;");
                dataStream = document.createElement('p');
                element.appendChild(dataStream);
                dataStream.innerHTML = musicMonthStreams[(days+1).toString()].toString() + ' available streams';
                dataStream.setAttribute("style", "margin: 1vmin 0 2vmin 1vmin;");
              }
            }
            element = document.createElement('h2');
            musicsCurratorReportGraphs.appendChild(element);
            element.innerHTML = ' __  ';
            element.setAttribute("syle", "color: transparent;");
            musicsCurratorReportYear.addEventListener('change', ()=>{
              if (parseInt(musicsCurratorReportYear.value) < 1000) {
                if (parseInt(musicsCurratorReportYear.value) < 100) {
                  if (parseInt(musicsCurratorReportYear.value) < 10) {
                    yearString = '000' + musicsCurratorReportYear.value.toString();
                  } else {
                    yearString = '00' + musicsCurratorReportYear.value.toString();
                  }
                } else {
                  yearString = '0' + musicsCurratorReportYear.value.toString();
                }
              } else {
                yearString = musicsCurratorReportYear.value.toString();
              }
              while(musicsCurratorReportGraphs.firstChild) {
                musicsCurratorReportGraphs.removeChild(musicsCurratorReportGraphs.firstChild);
              }
              musicMonthStreams = {};
              musicMonthStreams.mostStreams = 0;
              for (let i = 0; i < monthDays; i++) {
                if ((i + 1) < 10) {
                  dayString = '0' + (i + 1).toString();
                } else {
                  dayString = (i + 1).toString();
                }
                checkDate = new Date(yearString + '-' + monthString + '-' + dayString + 'T13:44:00.000Z');
                if (weekDays[checkDate.getDay()] === 'friday') {
                  musicMonthStreams[(i+1).toString()] = 'Friday';
                } else if (weekDays[checkDate.getDay()] === 'sunday') {
                  musicMonthStreams[(i+1).toString()] = 'Sunday';
                } else {
                  for (let j = 0; j < userMusics.length; j++) {
                    if (userMusics[j].rule[weekDays[checkDate.getDay()]].indexOf(i+1) !== -1) {
                      if (musicMonthStreams[(i+1).toString()] === undefined) {
                        musicMonthStreams[(i+1).toString()] = 1;
                      } else {
                        ++musicMonthStreams[(i+1).toString()];
                      }
                      if (musicMonthStreams[(i+1).toString()] > musicMonthStreams.mostStreams) {
                        musicMonthStreams.mostStreams = musicMonthStreams[(i+1).toString()];
                      }
                    }
                  }
                }
              }
              for (let days = 0; days < monthDays; days++) {
                dayGraphLabel = document.createElement('h2');
                musicsCurratorReportGraphs.appendChild(dayGraphLabel);
                dayGraphLabel.innerHTML = (days+1).toString();
                dayGraphLabel.setAttribute("style", "margin-top: 4vmin; margin-bottom: 0");
                element = document.createElement('div');
                musicsCurratorReportGraphs.appendChild(element);
                if (musicMonthStreams[(days+1).toString()] === 'Friday') {
                  subElement = document.createElement('h2');
                  element.appendChild(subElement);
                  subElement.innerHTML = 'Friday';
                  subElement.setAttribute("style", "margin: 0 0 0 8vmin;");
                } else if (musicMonthStreams[(days+1).toString()] === 'Sunday') {
                  subElement = document.createElement('h2');
                  element.appendChild(subElement);
                  subElement.innerHTML = 'Sunday';
                  subElement.setAttribute("style", "margin: 0 0 0 8vmin;");
                } else {
                  element.setAttribute("style", "width: 80%; height: 50px; border: solid 2px #000000; margin: 0 0 1vmin 8vmin; background-color: #bbbbbb;");
                  subElement = document.createElement('div');
                  element.appendChild(subElement);
                  subElement.setAttribute("style", "background: #441E38; background-color: -webkit-linear-gradient(135deg, #441E38, #3E9B8C); background: -o-linear-gradient(135deg, #441E38, #3E9B8C); background: -moz-linear-gradient(135deg, #441E38, #3E9B8C); background: linear-gradient(135deg, #441E38, #3E9B8C); height: 100%; width: " + Math.floor(400 * (musicMonthStreams[(days+1).toString()]/userMusics.length)) + "%;");
                  dataStream = document.createElement('p');
                  element.appendChild(dataStream);
                  dataStream.innerHTML = musicMonthStreams[(days+1).toString()].toString() + ' available streams';
                  dataStream.setAttribute("style", "margin: 1vmin 0 2vmin 1vmin;");
                }
              }
              element = document.createElement('h2');
              musicsCurratorReportGraphs.appendChild(element);
              element.innerHTML = ' __  ';
              element.setAttribute("syle", "color: transparent;");
            });
          }
        });







        reportForMusicsCurrator.setAttribute("style", "display: initial;");
        userMusicCurratorEditorDiv.setAttribute("style", "display: none;");
        musicCurratorManagerDone.setAttribute("style", "visibility: hidden;");
      }

      function addNewTiles(month) {
        let monthTable = month.toLowerCase() + "_tiles";
        let monthGet = monthTable + "byuser";
        let subObj = {
          user_id: currentUserId,
          type: "default",
          src_string: '',
          repeat_value: "no-repeat",
          size_value: "100%",
          color_dark: "#000000",
          color_medium: "#888888",
          color_light: "#ffffff"
        };
        $http.get(`/${monthGet}/${currentUserId}`)
        .then(userMonthTilesData=>{
          let userMonthTiles = userMonthTilesData.data;
          if (userMonthTiles.length > 0) {
            subObj.theme = userMonthTiles[0].theme;
          } else {
            subObj.theme = '';
          }
          $http.post(`/${monthTable}`, subObj)
          .then(addedTileData=>{
            let addedTile = addedTileData.data[0];
            console.log(addedTile.id);
            editTilesCurrate(monthTable, addedTile.id);
          });
        });
      }

      function removeEmptyMessage(messageId) {
        $http.delete(`/messages/${messageId}`)
        .then(()=>{
          if (vm.userMessages.length > 0) {
            for (let i = 0; i < vm.userMessages.length; i++) {
              if (vm.userMessages[i].id === messageId) {
                vm.userMessages.splice(i, 1);
              }
            }
          }
        });
      }

      function cleanBlankMessages() {
        $http.get(`/messagesbyuser/${currentUserId}`)
        .then(allMessagesData=>{
          let allMessages = allMessagesData.data;
          if (allMessages.length > 0) {
            for (let i = 0; i < allMessages.length; i++) {
              if (allMessages[i].message === '') {
                removeEmptyMessage(allMessages[i].id);
              }
            }
          }
        });
      }

      function userEditMessageCompleted(messageId) {
        // let update = new Date();
        let thisIsTheMessageEditor = document.getElementById('thisIsTheMessageEditor' + messageId);
        let subObj = {
          message: thisIsTheMessageEditor.value,
          updated_at: new Date()
        };
        $http.patch(`/messages/${messageId}`, subObj)
        .then(messageData=>{
          let message = messageData.data;
          let thisIsTheMessage = document.getElementById('thisIsTheMessage' + messageId);
          let thisIsMessageEditDoneDiv = document.getElementById('thisIsMessageEditDoneDiv' + messageId);
          let editDeleteDiv = document.getElementById('editDeleteDiv' + messageId);


          for (let i = 0; i < vm.userMessages.length; i++) {
            if (message.id === vm.userMessages[i].id) {
              thisIsTheMessage.innerHTML = message.message;
              let created = new Date(message.created_at);
              let updated = new Date(message.updated_at);
              if (updated.getTime() <= (created.getTime() + 15000)) {
                vm.userMessages[i].cleanDate = cleanDateHoliday(message.created_at) + ' - ' + timeDate(message.created_at);
              } else {
                vm.userMessages[i].cleanDate = cleanDateHoliday(message.created_at) + ' - ' + timeDate(message.created_at) + ' - - - updated at ' + cleanDateHoliday(message.updated_at) + ' - ' + timeDate(message.updated_at);
              }
            }
          }
          cleanBlankMessages();
          thisIsTheMessage.setAttribute("style", "display: initial;");
          thisIsTheMessageEditor.setAttribute("style", "display: none;");
          thisIsMessageEditDoneDiv.setAttribute("style", "display: none;");
          editDeleteDiv.setAttribute("style", "display: initial;");
          document.getElementById('postNewMessageButton').setAttribute("style", "visibility: visible;");
        });
      }

      function userEditMessage(messageId) {
        $http.get(`/messages/${messageId}`)
        .then(messageData=>{
          let message = messageData.data;
          let thisIsTheMessage = document.getElementById('thisIsTheMessage' + message.id);
          let thisIsTheMessageEditor = document.getElementById('thisIsTheMessageEditor' + message.id);
          let thisIsMessageEditDoneDiv = document.getElementById('thisIsMessageEditDoneDiv' + message.id);
          let thisIsTheMessageEditorDoneButton = document.getElementById('thisIsTheMessageEditorDoneButton' + message.id);
          let editDeleteDiv = document.getElementById('editDeleteDiv' + message.id);

          thisIsTheMessage.setAttribute("style", "display: none;");
          thisIsTheMessageEditor.value = message.message;
          thisIsTheMessageEditor.setAttribute("style", "display: initial;");
          thisIsMessageEditDoneDiv.setAttribute("style", "display: initial;");
          thisIsTheMessageEditorDoneButton.setAttribute("style", "visibility: visible;");
          editDeleteDiv.setAttribute("style", "display: none;");
          thisIsTheMessageEditor.focus();
        });
      }

      function artsCurratorReportDone() {

        let reportForArtsCurrator = document.getElementById('reportForArtsCurrator');
        let artCurratorManagerDone = document.getElementById('artCurratorManagerDone');

        reportForArtsCurrator.setAttribute("style", "display: none;");
        artCurratorManagerDone.setAttribute("style", "visibility: visible;");
      }


      function artCurratorReport(currateMonth) {
        let today = new Date();
        let year = parseInt(today.getFullYear());
        // console.log(year + 1);
        let userArtCurratorEditorDiv = document.getElementById('userArtCurratorEditorDiv');
        let reportForArtsCurrator = document.getElementById('reportForArtsCurrator');
        let artCurratorManagerDone = document.getElementById('artCurratorManagerDone');
        let monthLength = 0;
        let monthDaysTally = {};
        let weekDays = [ 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday' ];
        let checkDate;
        let monthNum = '';
        let dateNum = '';
        let maxSelection = 0;

        vm.artsCurratorReporting = [];
        vm.artsCurratorReporting[0] = {};
        let tableString = currateMonth + 'byuser';
        let monthString = '';
        switch(currateMonth) {
          case('january_arts'):
            monthString = 'January';
            monthLength = 31;
            monthNum = '01';
            break;
          case('february_arts'):
            monthString = 'February';
            monthLength = 29;
            monthNum = '02';
            break;
          case('march_arts'):
            monthString = 'March';
            monthLength = 31;
            monthNum = '03';
            break;
          case('april_arts'):
            monthString = 'April';
            monthLength = 30;
            monthNum = '04';
            break;
          case('may_arts'):
            monthString = 'May';
            monthLength = 31;
            monthNum = '05';
            break;
          case('june_arts'):
            monthString = 'June';
            monthLength = 30;
            monthNum = '06';
            break;
          case('july_arts'):
            monthString = 'July';
            monthLength = 31;
            monthNum = '07';
            break;
          case('august_arts'):
            monthString = 'August';
            monthLength = 31;
            monthNum = '08';
            break;
          case('september_arts'):
            monthString = 'September';
            monthLength = 30;
            monthNum = '09';
            break;
          case('october_arts'):
            monthString = 'October';
            monthLength = 31;
            monthNum = '10';
            break;
          case('november_arts'):
            monthString = 'November';
            monthLength = 30;
            monthNum = '11';
            break;
          case('december_arts'):
            monthString = 'December';
            monthLength = 31;
            monthNum = '12';
            break;
          default:
            console.log('unsupported month');
        }
        vm.artsCurratorReporting[0].month = monthString;

        $http.get(`/${tableString}/${currentUserId}`)
        .then(userArtData=>{
          let userArt = userArtData.data;
          let artsCurratorReportYearAdapter = document.getElementById('artsCurratorReportYearAdapter');
          let artsCurratorReportYear = document.getElementById('artsCurratorReportYear');
          if (artsCurratorReportYear) {
            artsCurratorReportYear.parentNode.removeChild(artsCurratorReportYear);
            artsCurratorReportYear = document.createElement('input');
            artsCurratorReportYear.id = 'artsCurratorReportYear';
            artsCurratorReportYearAdapter.appendChild(artsCurratorReportYear);
            artsCurratorReportYear.type = 'number';
            artsCurratorReportYear.className = 'pure-input-1';
            artsCurratorReportYear.value = year;
          }
          vm.artsCurratorReporting[0].totalWorks = userArt.length;
          if (userArt.length > 0) {
            vm.artsCurratorReporting[0].theme = userArt[0].theme;
            for (let i = 0; i < monthLength; i++) {
              if (i < 9) {
                dateNum = '0' + (i + 1).toString();
              } else {
                dateNum = (i + 1).toString();
              }
              checkDate = new Date(year + '-' + monthNum + '-' + dateNum + 'T13:44:00.000Z');
              for (let j = 0; j < userArt.length; j++) {
                if (userArt[j].rule[weekDays[checkDate.getDay()]].indexOf(checkDate.getDate()) !== -1) {
                  if (monthDaysTally[checkDate.getDate().toString()] === undefined) {
                    monthDaysTally[checkDate.getDate().toString()] = 1;
                  } else {
                    ++monthDaysTally[checkDate.getDate().toString()];
                  }
                  if (maxSelection < monthDaysTally[checkDate.getDate().toString()]) {
                    maxSelection = monthDaysTally[checkDate.getDate().toString()];
                  }
                }
              }
            }
            let artsCurratorReportGraphs = document.getElementById('artsCurratorReportGraphs');
            console.log(artsCurratorReportGraphs);
            while (artsCurratorReportGraphs.firstChild) {
              artsCurratorReportGraphs.removeChild(artsCurratorReportGraphs.firstChild);
            }
            let dayElement;
            let hostDiv;
            let barDiv;
            let pData;
            for (let calDay = 1; calDay < (monthLength + 1); calDay++) {
              dayElement = document.createElement('h2');
              artsCurratorReportGraphs.appendChild(dayElement);
              dayElement.innerHTML = calDay;
              hostDiv = document.createElement('div');
              dayElement.appendChild(hostDiv);
              hostDiv.setAttribute("style", "width: 80%; height: 35px; border: solid 2px #000000;");
              barDiv = document.createElement('div');
              hostDiv.appendChild(barDiv);
              barDiv.setAttribute("style", "height: 100%; background-image: url(" + userArt[Math.floor(Math.random() * userArt.length)].img_path + "); background-size: 150%; width: " + (Math.floor((monthDaysTally[calDay.toString()]/maxSelection) * 100)) + "%;");
              pData = document.createElement('p');
              dayElement.appendChild(pData);
              pData.innerHTML = monthDaysTally[calDay.toString()] + ' available works';
            }

            artsCurratorReportYear.addEventListener('change', ()=>{
              let changedYear = '';
              if (artsCurratorReportYear.value < 1000) {
                if (artsCurratorReportYear.value < 100) {
                  if (artsCurratorReportYear.value < 10) {
                    changedYear = '000' + artsCurratorReportYear.value.toString();
                  } else {
                    changedYear = '00' + artsCurratorReportYear.value.toString();
                  }
                } else {
                  changedYear = '0' + artsCurratorReportYear.value.toString();
                }
              } else {
                if (artsCurratorReportYear.value > 9999) {
                  changedYear = year.toString();
                  artsCurratorReportYear.value = year;
                } else {
                  changedYear = artsCurratorReportYear.value.toString();
                }
              }
              if (userArt.length > 0) {
                monthDaysTally = {};
                for (let i = 0; i < monthLength; i++) {
                  if (i < 9) {
                    dateNum = '0' + (i + 1).toString();
                  } else {
                    dateNum = (i + 1).toString();
                  }
                  checkDate = new Date(changedYear + '-' + monthNum + '-' + dateNum + 'T13:44:00.000Z');
                  for (let j = 0; j < userArt.length; j++) {
                    if (userArt[j].rule[weekDays[checkDate.getDay()]].indexOf(checkDate.getDate()) !== -1) {
                      if (monthDaysTally[checkDate.getDate().toString()] === undefined) {
                        monthDaysTally[checkDate.getDate().toString()] = 1;
                      } else {
                        ++monthDaysTally[checkDate.getDate().toString()];
                      }
                      if (maxSelection < monthDaysTally[checkDate.getDate().toString()]) {
                        maxSelection = monthDaysTally[checkDate.getDate().toString()];
                      }
                    }
                  }
                }

                while (artsCurratorReportGraphs.firstChild) {
                  artsCurratorReportGraphs.removeChild(artsCurratorReportGraphs.firstChild);
                }

                for (let calDay = 1; calDay < (monthLength + 1); calDay++) {
                  dayElement = document.createElement('h2');
                  artsCurratorReportGraphs.appendChild(dayElement);
                  dayElement.innerHTML = calDay;
                  hostDiv = document.createElement('div');
                  dayElement.appendChild(hostDiv);
                  hostDiv.setAttribute("style", "width: 80%; height: 35px; border: solid 2px #000000;");
                  barDiv = document.createElement('div');
                  hostDiv.appendChild(barDiv);
                  barDiv.setAttribute("style", "height: 100%; background-image: url(" + userArt[Math.floor(Math.random() * userArt.length)].img_path + "); background-size: 150%; width: " + (Math.floor((monthDaysTally[calDay.toString()]/maxSelection) * 100)) + "%;");
                  pData = document.createElement('p');
                  dayElement.appendChild(pData);
                  pData.innerHTML = monthDaysTally[calDay.toString()] + ' available works';
                }
              }
            });
          } else {
            vm.artsCurratorReporting[0].theme = '';
          }
        });


        userArtCurratorEditorDiv.setAttribute("style", "display: none;");
        reportForArtsCurrator.setAttribute("style", "display: initial;");
        artCurratorManagerDone.setAttribute("style", "visibility: hidden;");
      }

      function addNewMusic(currateMonth) {
        let table = currateMonth + 'byuser';
        let min = 1;
        let max = 6;
        let monthDays = 0;
        switch(currateMonth) {
          case('january_musics'):
            monthDays = 31;
            break;
          case('february_musics'):
            monthDays = 29;
            break;
          case('march_musics'):
            monthDays = 31;
            break;
          case('april_musics'):
            monthDays = 30;
            break;
          case('may_musics'):
            monthDays = 31;
            break;
          case('june_musics'):
            monthDays = 30;
            break;
          case('july_musics'):
            monthDays = 31;
            break;
          case('august_musics'):
            monthDays = 31;
            break;
          case('september_musics'):
            monthDays = 30;
            break;
          case('october_musics'):
            monthDays = 31;
            break;
          case('november_musics'):
            monthDays = 30;
            break;
          case('december_musics'):
            monthDays = 31;
            break;
          default:
            console.log('unsupported month');
        }
        let subObj = {
          user_id: currentUserId,
          source: 'bandcamp',
          src_string: '',
          href_string: '',
          a_string: '',

        };
        if ((currateMonth !== 'friday_musics') && (currateMonth !== 'sunday_musics')) {
          subObj.rule = {
            monday: artArrayRandomizer(monthDays, min, max),
            tuesday: artArrayRandomizer(monthDays, min, max),
            wednesday: artArrayRandomizer(monthDays, min, max),
            thursday: artArrayRandomizer(monthDays, min, max),
            saturday: artArrayRandomizer(monthDays, min, max)
          };
        }

        $http.get(`/${table}/${currentUserId}`)
        .then(userMusicsData=>{
          let userMusics = userMusicsData.data;
          if ((currateMonth !== 'friday_musics') && (currateMonth !== 'sunday_musics')) {
            if (userMusics.length > 0) {
              subObj.theme = userMusics[0].theme;
            } else {
              subObj.theme = '';
            }
          }
          $http.post(`/${currateMonth}`, subObj)
          .then(musicSlotData=>{
            let musicSlot = musicSlotData.data[0];
            console.log(musicSlot);
            editMusicCurrate(currateMonth, musicSlot.id);
          });
        });
      }

      function deleteTilesCurrate(filepath, tileId) {
        let userTilesCurratorDeleteConfirmDiv = document.getElementById('userTilesCurratorDeleteConfirmDiv');
        let tilesCurratorManagerDiv = document.getElementById('tilesCurratorManagerDiv');
        let userTilesCurratorEditorDiv = document.getElementById('userTilesCurratorEditorDiv');
        let userTilesCurratorDeleteTileImage = document.getElementById('userTilesCurratorDeleteTileImage');
        let userTilesCurratorInfos = document.getElementById('userTilesCurratorInfos');
        let userTilesCurratorDeleteConfirmButtons = document.getElementById('userTilesCurratorDeleteConfirmButtons');
        let userTilesCurratorConfirmYes = document.getElementById('userTilesCurratorConfirmYes');
        if (userTilesCurratorConfirmYes) {
          userTilesCurratorConfirmYes.parentNode.removeChild(userTilesCurratorConfirmYes);
          userTilesCurratorConfirmYes = document.createElement('a');
          userTilesCurratorDeleteConfirmButtons.appendChild(userTilesCurratorConfirmYes);
          userTilesCurratorConfirmYes.id = 'userTilesCurratorConfirmYes';
          userTilesCurratorConfirmYes.className = 'btn';
          userTilesCurratorConfirmYes.innerHTML = 'yes';
          userTilesCurratorConfirmYes.setAttribute("style", "cursor: pointer;");
        }
        let userTilesCurratorConfirmNo = document.getElementById('userTilesCurratorConfirmNo');
        if (userTilesCurratorConfirmNo) {
          userTilesCurratorConfirmNo.parentNode.removeChild(userTilesCurratorConfirmNo);
          userTilesCurratorConfirmNo = document.createElement('a');
          userTilesCurratorDeleteConfirmButtons.appendChild(userTilesCurratorConfirmNo);
          userTilesCurratorConfirmNo.id = 'userTilesCurratorConfirmNo';
          userTilesCurratorConfirmNo.className = 'btn';
          userTilesCurratorConfirmNo.innerHTML = 'no';
          userTilesCurratorConfirmNo.setAttribute("style", "cursor: pointer;");
        }

        $http.get(`/${filepath}/${tileId}`)
        .then(tileData=>{
          let tile = tileData.data;
          userTilesCurratorDeleteTileImage.setAttribute("style", "background-image: url(" + tile.src_string + "); background-repeat:" + tile.repeat_value + "; background-size: " + tile.size_value + ";");
          userTilesCurratorInfos.innerHTML = filepath + ": " + tile.type + ' tile';

          userTilesCurratorConfirmYes.addEventListener('click', ()=>{
            $http.delete(`/${filepath}/${tileId}`)
            .then(()=>{
              let month = '';
              userTilesCurratorDeleteConfirmDiv.setAttribute("style", "display: none;");
              tilesCurratorManagerDiv.setAttribute("style", "display: initial;");
              tilesCurratorManagement();
              switch(filepath) {
                case('january_tiles'):
                  month = 'January'
                  break;
                case('february_tiles'):
                  month = 'February';
                  break;
                case('march_tiles'):
                  month = 'March';
                  break;
                case('april_tiles'):
                  month = 'April';
                  break;
                case('may_tiles'):
                  month = 'May';
                  break;
                case('june_tiles'):
                  month = 'June';
                  break;
                case('july_tiles'):
                  month = 'July';
                  break;
                case('august_tiles'):
                  month = 'August';
                  break;
                case('september_tiles'):
                  month = 'September';
                  break;
                case('october_tiles'):
                  month = 'October';
                  break;
                case('november_tiles'):
                  month = 'November';
                  break;
                case('december_tiles'):
                  month = 'December';
                  break;
                default:
                  console.log('no such month');
              }
              toggleTilesCurratorMonth(month);
            });
          });

          userTilesCurratorConfirmNo.addEventListener('click', ()=>{
            userTilesCurratorDeleteConfirmDiv.setAttribute("style", "display: none;");
            tilesCurratorManagerDiv.setAttribute("style", "display: initial;");
          });
        });

        userTilesCurratorDeleteConfirmDiv.setAttribute("style", "display: initial;");
        tilesCurratorManagerDiv.setAttribute("style", "display: none;");
        userTilesCurratorEditorDiv.setAttribute("style", "display: none;");
      }

      function getAuthorTileModAuthorName(authorId, index) {
        $http.get(`/users/${authorId}`)
        .then(authorData=>{
          let author = authorData.data;
          vm.tileModulePreview[index].authorName = author.name;
        });
      }

      function tileModuleDisplay() {
        let tileModuleDisplayButton = document.getElementById('tileModuleDisplayButton');
        let availableArtModules = document.getElementById('availableArtModules');
        let artModuleDisplayButton = document.getElementById('artModuleDisplayButton');
        let availableMusicModules = document.getElementById('availableMusicModules');
        let musicModuleDisplayButton = document.getElementById('musicModuleDisplayButton');
        let availableTilesModules = document.getElementById('availableTilesModules');
        let tileMember = false;
        let previewIndex = 0;

        $http.get('/tiles_modules')
        .then(allTilesData=>{
          let allTiles = allTilesData.data;
          if (allTiles.length > 0) {
            vm.tileModulePreview = [];
            for (let i = 0; i < allTiles.length; i++) {
              if (vm.tileModulePreview.length === 0) {
                vm.tileModulePreview[0] = {};
                vm.tileModulePreview[0].theme = allTiles[0].theme;
                vm.tileModulePreview[0].user_author_id = allTiles[0].user_author_id;
                getAuthorTileModAuthorName(allTiles[0].user_author_id, 0);
                vm.tileModulePreview[0].storage = [];
                vm.tileModulePreview[0].storage.push(allTiles[0]);
              } else {
                tileMember = false;
                for (let j = 0; j < vm.tileModulePreview.length; j++) {
                  if ((vm.tileModulePreview[j].storage[0].user_author_id === allTiles[i].user_author_id) && (vm.tileModulePreview[j].theme === allTiles[i].theme)) {
                    tileMember = true;
                    previewIndex = j;
                  }
                }
                if (tileMember) {
                  vm.tileModulePreview[previewIndex].storage.push(allTiles[i]);
                  vm.tileModulePreview[previewIndex].user_author_id = allTiles[i].user_author_id;
                } else {
                  previewIndex = vm.tileModulePreview.length;
                  vm.tileModulePreview[previewIndex] = {};
                  vm.tileModulePreview[previewIndex].user_author_id = allTiles[i].user_author_id;
                  vm.tileModulePreview[previewIndex].theme = allTiles[i].theme;
                  getAuthorTileModAuthorName(allTiles[i].user_author_id, previewIndex);
                  vm.tileModulePreview[previewIndex].storage = [];
                  vm.tileModulePreview[previewIndex].storage.push(allTiles[i]);
                }
              }
            }
            for (let k = 0; k < vm.tileModulePreview.length; k++) {
              vm.tileModulePreview[k].src_string = vm.tileModulePreview[k].storage[Math.floor(Math.random() * vm.tileModulePreview[k].storage.length)].src_string;
            }
          }
        });


        availableArtModules.setAttribute("style", "display: none;");
        artModuleDisplayButton.setAttribute("style", "visibility: visible;");
        availableMusicModules.setAttribute("style", "display: none;");
        musicModuleDisplayButton.setAttribute("style", "visibility: visible;");
        availableTilesModules.setAttribute("style", "display: initial;");
        tileModuleDisplayButton.setAttribute("style", "visibility: hidden;");
      }

      function musicModuleAuthorName(index, userId) {
        $http.get(`/users/${userId}`)
        .then(userData=>{
          let user = userData.data;
          vm.musicModulePreview[index].authorName = user.name;
        });
      }

      function musicModuleDisplay() {
        let tileModuleDisplayButton = document.getElementById('tileModuleDisplayButton');
        let availableArtModules = document.getElementById('availableArtModules');
        let artModuleDisplayButton = document.getElementById('artModuleDisplayButton');
        let availableMusicModules = document.getElementById('availableMusicModules');
        let musicModuleDisplayButton = document.getElementById('musicModuleDisplayButton');
        let availableTilesModules = document.getElementById('availableTilesModules');

        $http.get('/music_modules')
        .then(allMusicModsData=>{
          let allMusicMods = allMusicModsData.data;
          let musicModsPublic = allMusicMods.filter(mus=>{
            return(mus.public);
          });
          let modules = [];
          let pushed = false;
          for (let i = 0; i < musicModsPublic.length; i++) {
            pushed = false;
            if (modules.length > 0) {
              for (let j = 0; j < modules.length; j++) {
                if ((modules[j][0].theme === musicModsPublic[i].theme) && (modules[j][0].user_author_id === musicModsPublic[i].user_author_id)) {
                  modules[j].push(musicModsPublic[i]);
                  pushed = true;
                }
              }
            } else {
              modules[0] = [];
              modules[0].push(musicModsPublic[i]);
              pushed = true;
            }
            if (!pushed) {
              modules[modules.length] = [];
              modules[modules.length - 1].push(musicModsPublic[i]);
            }
          }
          console.log(modules);
          vm.musicModulePreview = [];
          let selection = 0;
          for (let k = 0; k < modules.length; k++) {
            vm.musicModulePreview[k] = {};
            selection = Math.floor(Math.random() * modules[k].length);
            vm.musicModulePreview[k].user_author_id = modules[k][selection].user_author_id;
            vm.musicModulePreview[k].src_string = modules[k][selection].src_string;
            vm.musicModulePreview[k].href_string = modules[k][selection].href_string;
            vm.musicModulePreview[k].a_string = modules[k][selection].a_string;
            vm.musicModulePreview[k].theme = modules[k][selection].theme;
            musicModuleAuthorName(k, modules[k][selection].user_author_id);
          }
        });

        availableArtModules.setAttribute("style", "display: none;");
        artModuleDisplayButton.setAttribute("style", "visibility: visible;");
        availableMusicModules.setAttribute("style", "display: initial;");
        musicModuleDisplayButton.setAttribute("style", "visibility: hidden;");
        availableTilesModules.setAttribute("style", "display: none;");
        tileModuleDisplayButton.setAttribute("style", "visibility: visible;");
      }

      function artModuleCommenterIdentity(userId, index, commentIndex) {
        $http.get(`/users/${userId}`)
        .then(commenterData => {
          let commenter = commenterData.data;
          vm.artModulePreview[index].comments[commentIndex].authorImg = commenter.user_avatar_url;
          vm.artModulePreview[index].comments[commentIndex].authorName = commenter.name;
        });
      }

      function getArtModuleComments(index) {
        console.log(vm.artModulePreview[index]);
        $http.get('/art_module_comments')
        .then(allModuleCommentsData => {
          let allModuleComments = allModuleCommentsData.data;
          let moduleComments = allModuleComments.filter(entry => {
            return((entry.art_module_author_id === vm.artModulePreview[index].user_author_id) && (entry.theme === vm.artModulePreview[index].theme));
          });
          if (moduleComments.length > 0) {
            vm.artModulePreview[index].comments = [];
            for (let i = 0; i < moduleComments.length; i++) {
              vm.artModulePreview[index].comments[i] = {
                id: moduleComments[i].id,
                comment: moduleComments[i].comment,
                user_id: moduleComments[i].user_id,
                art_module_author_id: moduleComments[i].art_module_author_id
              }
              artModuleCommenterIdentity(moduleComments[i].user_id, index, i);
              vm.artModulePreview[index].comments[i].cleanDate = cleanDateHoliday(moduleComments[i].created_at) + ' - ' + timeDate(moduleComments[i].created_at);
            }
            setTimeout(() => {
              for (let j = 0; j < vm.artModulePreview[index].comments.length; j++) {
                document.getElementById('thisIsTheArtModuleCommentEditor' + vm.artModulePreview[index].comments[j].id).setAttribute("style", "visibility: hidden;");
                document.getElementById('thisIsArtModuleCommentEditDoneDiv' + vm.artModulePreview[index].comments[j].id).setAttribute("style", "display: none;");
                if ((parseInt(vm.artModulePreview[index].comments[j].user_id) === parseInt(currentUserId)) || (parseInt(vm.artModulePreview[index].comments[j].art_module_author_id) === parseInt(currentUserId))) {
                  document.getElementById('editDeleteArtModuleUserComments' + vm.artModulePreview[index].comments[j].id).setAttribute("style", "display: initial;");
                }
              }
            }, (vm.artModulePreview[index].comments.length * 150));
          }
        });
      }

      function getArtAuthorName (authorId, index) {
        $http.get(`/users/${authorId}`)
        .then(authorData=>{
          let author = authorData.data;
          vm.artModulePreview[index].authorName = author.name;
        });
      }

      function artModuleDisplay() {
        let tileModuleDisplayButton = document.getElementById('tileModuleDisplayButton');
        let availableArtModules = document.getElementById('availableArtModules');
        let artModuleDisplayButton = document.getElementById('artModuleDisplayButton');
        let availableMusicModules = document.getElementById('availableMusicModules');
        let musicModuleDisplayButton = document.getElementById('musicModuleDisplayButton');
        let availableTilesModules = document.getElementById('availableTilesModules');
        let themeMember = false;
        let themeIndex = 0;

        $http.get('/art_modules')
        .then(allArtModulesData=>{
          let allArtModules = allArtModulesData.data;
          vm.artModulePreview = [];
          if (allArtModules.length > 0) {
            for (let i = 0; i < allArtModules.length; i++) {
              if (vm.artModulePreview.length === 0) {
                vm.artModulePreview[0] = {};
                vm.artModulePreview[0].theme = allArtModules[i].theme;
                vm.artModulePreview[0].storage = [];
                vm.artModulePreview[0].storage.push(allArtModules[i]);
                getArtAuthorName(allArtModules[i].user_author_id, 0);
                vm.artModulePreview[0].user_author_id = allArtModules[i].user_author_id;
              } else {
                themeMember = false;
                for (let j = 0; j < vm.artModulePreview.length; j++) {
                  if (vm.artModulePreview[j].theme === allArtModules[i].theme) {
                    themeMember = true;
                    themeIndex = j;
                  }
                }
                if (themeMember) {
                  vm.artModulePreview[themeIndex].storage.push(allArtModules[i]);
                } else {
                  themeIndex = vm.artModulePreview.length;
                  vm.artModulePreview[themeIndex] = {};
                  vm.artModulePreview[themeIndex].theme = allArtModules[i].theme;
                  vm.artModulePreview[themeIndex].storage = [];
                  vm.artModulePreview[themeIndex].storage.push(allArtModules[i]);
                  getArtAuthorName(allArtModules[i].user_author_id, themeIndex);
                  vm.artModulePreview[themeIndex].user_author_id = allArtModules[i].user_author_id;
                }
              }
            }
            if (vm.artModulePreview.length > 0) {
              for (let k = 0; k < vm.artModulePreview.length; k++) {
                vm.artModulePreview[k].img_path = vm.artModulePreview[k].storage[Math.floor(Math.random() * (vm.artModulePreview[k].storage.length))].img_path;
                getArtModuleComments(k);
              }
            }
          }
        });

        availableArtModules.setAttribute("style", "display: initial;");
        artModuleDisplayButton.setAttribute("style", "visibility: hidden;");
        availableMusicModules.setAttribute("style", "display: none;");
        musicModuleDisplayButton.setAttribute("style", "visibility: visible;");
        availableTilesModules.setAttribute("style", "display: none;");
        tileModuleDisplayButton.setAttribute("style", "visibility: visible;");
      }

      function observanceReportDone() {
        let reportForObservances = document.getElementById('reportForObservances');
        let observancesManagerDone = document.getElementById('observancesManagerDone');

        reportForObservances.setAttribute("style", "display: none;");
        observancesManagerDone.setAttribute("style", "visibility: visible;");
      }

      function observancesReport() {
        let checkDate;
        let currentDate = new Date();
        let reportForObservances = document.getElementById('reportForObservances');
        let observancesManagerDone = document.getElementById('observancesManagerDone');
        let userObservancesEditorDiv = document.getElementById('userObservancesEditorDiv');

        $http.get(`/observancesbyuser/${currentUserId}`)
        .then(observancesData=>{
          let observances = observancesData.data;
          if (observances.length > 0) {
            vm.observanceReporter = [];
            vm.observanceReporter[0] = {};
            vm.observanceReporter[0].calendarTotal = observances.length;
            vm.observanceReporter[0].calendarJanObservances = [];
            vm.observanceReporter[0].calendarJanTotal = 0;
            vm.observanceReporter[0].calendarJanOverlap = 0;
            vm.observanceReporter[0].januaryOverlap = {};
            vm.observanceReporter[0].calendarJanObservances = [];
            let calendarJanObservances = observances.filter(obs=>{
              checkDate = new Date(obs.day_of.slice(0, 10));
              if ((!obs.is_annual) && (currentDate.getFullYear() !== checkDate.getFullYear())) {
                if (checkDate.getMonth() === 0) {
                  return (current.getFullYear() === checkDate.getFullYear());
                } else {
                  return false;
                }
              } else {
                return(checkDate.getMonth() === 0);
              }
            });
            vm.observanceReporter[0].calendarJan = calendarJanObservances.length;
            for (let i = 0; i < calendarJanObservances.length; i++) {
              checkDate = new Date(calendarJanObservances[i].day_of.slice(0, 10));
              vm.observanceReporter[0].calendarJanObservances[i] = (calendarJanObservances[i].name);
              if (vm.observanceReporter[0].januaryOverlap[checkDate.getDate().toString()] === undefined) {
                vm.observanceReporter[0].januaryOverlap[checkDate.getDate().toString()] = 1;
                ++vm.observanceReporter[0].calendarJanTotal;
              } else {
                ++vm.observanceReporter[0].januaryOverlap[checkDate.getDate().toString()];
                ++vm.observanceReporter[0].calendarJanOverlap;
              }
            }
            vm.observanceReporter[0].calendarJanObservances = vm.observanceReporter[0].calendarJanObservances.sort((a, b)=>{
              if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
              } else if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            vm.observanceReporter[0].calendarFebObservances = [];
            vm.observanceReporter[0].calendarFebTotal = 0;
            vm.observanceReporter[0].calendarFebOverlap = 0;
            vm.observanceReporter[0].februaryOverlap = {};
            vm.observanceReporter[0].calendarFebObservances = [];
            let calendarFebObservances = observances.filter(obs=>{
              checkDate = new Date(obs.day_of.slice(0, 10));
              if ((!obs.is_annual) && (currentDate.getFullYear() !== checkDate.getFullYear())) {
                if (checkDate.getMonth() === 1) {
                  return (current.getFullYear() === checkDate.getFullYear());
                } else {
                  return false;
                }
              } else {
                return(checkDate.getMonth() === 1);
              }
            });
            vm.observanceReporter[0].calendarFeb = calendarFebObservances.length;
            for (let i = 0; i < calendarFebObservances.length; i++) {
              checkDate = new Date(calendarFebObservances[i].day_of.slice(0, 10));
              vm.observanceReporter[0].calendarFebObservances[i] = (calendarFebObservances[i].name);
              if (vm.observanceReporter[0].februaryOverlap[checkDate.getDate().toString()] === undefined) {
                vm.observanceReporter[0].februaryOverlap[checkDate.getDate().toString()] = 1;
                ++vm.observanceReporter[0].calendarFebTotal;
              } else {
                ++vm.observanceReporter[0].februaryOverlap[checkDate.getDate().toString()];
                ++vm.observanceReporter[0].calendarFebOverlap;
              }
            }
            vm.observanceReporter[0].calendarFebObservances = vm.observanceReporter[0].calendarFebObservances.sort((a, b)=>{
              if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
              } else if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            vm.observanceReporter[0].calendarMarObservances = [];
            vm.observanceReporter[0].calendarMarTotal = 0;
            vm.observanceReporter[0].calendarMarOverlap = 0;
            vm.observanceReporter[0].marchOverlap = {};
            vm.observanceReporter[0].calendarMarObservances = [];
            let calendarMarObservances = observances.filter(obs=>{
              checkDate = new Date(obs.day_of.slice(0, 10));
              if ((!obs.is_annual) && (currentDate.getFullYear() !== checkDate.getFullYear())) {
                if (checkDate.getMonth() === 2) {
                  return (current.getFullYear() === checkDate.getFullYear());
                } else {
                  return false;
                }
              } else {
                return(checkDate.getMonth() === 2);
              }
            });
            vm.observanceReporter[0].calendarMar = calendarMarObservances.length;
            for (let i = 0; i < calendarMarObservances.length; i++) {
              checkDate = new Date(calendarMarObservances[i].day_of.slice(0, 10));
              vm.observanceReporter[0].calendarMarObservances[i] = (calendarMarObservances[i].name);
              if (vm.observanceReporter[0].marchOverlap[checkDate.getDate().toString()] === undefined) {
                vm.observanceReporter[0].marchOverlap[checkDate.getDate().toString()] = 1;
                ++vm.observanceReporter[0].calendarMarTotal;
              } else {
                ++vm.observanceReporter[0].marchOverlap[checkDate.getDate().toString()];
                ++vm.observanceReporter[0].calendarMarOverlap;
              }
            }
            vm.observanceReporter[0].calendarMarObservances = vm.observanceReporter[0].calendarMarObservances.sort((a, b)=>{
              if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
              } else if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            vm.observanceReporter[0].calendarAprObservances = [];
            vm.observanceReporter[0].calendarAprTotal = 0;
            vm.observanceReporter[0].calendarAprOverlap = 0;
            vm.observanceReporter[0].aprilOverlap = {};
            vm.observanceReporter[0].calendarAprObservances = [];
            let calendarAprObservances = observances.filter(obs=>{
              checkDate = new Date(obs.day_of.slice(0, 10));
              if ((!obs.is_annual) && (currentDate.getFullYear() !== checkDate.getFullYear())) {
                if (checkDate.getMonth() === 3) {
                  return (current.getFullYear() === checkDate.getFullYear());
                } else {
                  return false;
                }
              } else {
                return(checkDate.getMonth() === 3);
              }
            });
            vm.observanceReporter[0].calendarApr = calendarAprObservances.length;
            for (let i = 0; i < calendarAprObservances.length; i++) {
              checkDate = new Date(calendarAprObservances[i].day_of.slice(0, 10));
              vm.observanceReporter[0].calendarAprObservances[i] = (calendarAprObservances[i].name);
              if (vm.observanceReporter[0].aprilOverlap[checkDate.getDate().toString()] === undefined) {
                vm.observanceReporter[0].aprilOverlap[checkDate.getDate().toString()] = 1;
                ++vm.observanceReporter[0].calendarAprTotal;
              } else {
                ++vm.observanceReporter[0].aprilOverlap[checkDate.getDate().toString()];
                ++vm.observanceReporter[0].calendarAprOverlap;
              }
            }
            vm.observanceReporter[0].calendarAprObservances = vm.observanceReporter[0].calendarAprObservances.sort((a, b)=>{
              if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
              } else if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            vm.observanceReporter[0].calendarMayObservances = [];
            vm.observanceReporter[0].calendarMayTotal = 0;
            vm.observanceReporter[0].calendarMayOverlap = 0;
            vm.observanceReporter[0].mayOverlap = {};
            vm.observanceReporter[0].calendarMayObservances = [];
            let calendarMayObservances = observances.filter(obs=>{
              checkDate = new Date(obs.day_of.slice(0, 10));
              if ((!obs.is_annual) && (currentDate.getFullYear() !== checkDate.getFullYear())) {
                if (checkDate.getMonth() === 4) {
                  return (current.getFullYear() === checkDate.getFullYear());
                } else {
                  return false;
                }
              } else {
                return(checkDate.getMonth() === 4);
              }
            });
            vm.observanceReporter[0].calendarMay = calendarMayObservances.length;
            for (let i = 0; i < calendarMayObservances.length; i++) {
              checkDate = new Date(calendarMayObservances[i].day_of.slice(0, 10));
              vm.observanceReporter[0].calendarMayObservances[i] = (calendarMayObservances[i].name);
              if (vm.observanceReporter[0].mayOverlap[checkDate.getDate().toString()] === undefined) {
                vm.observanceReporter[0].mayOverlap[checkDate.getDate().toString()] = 1;
                ++vm.observanceReporter[0].calendarMayTotal;
              } else {
                ++vm.observanceReporter[0].mayOverlap[checkDate.getDate().toString()];
                ++vm.observanceReporter[0].calendarMayOverlap;
              }
            }
            vm.observanceReporter[0].calendarMayObservances = vm.observanceReporter[0].calendarMayObservances.sort((a, b)=>{
              if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
              } else if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            vm.observanceReporter[0].calendarJunObservances = [];
            vm.observanceReporter[0].calendarJunTotal = 0;
            vm.observanceReporter[0].calendarJunOverlap = 0;
            vm.observanceReporter[0].juneOverlap = {};
            vm.observanceReporter[0].calendarJunObservances = [];
            let calendarJunObservances = observances.filter(obs=>{
              checkDate = new Date(obs.day_of.slice(0, 10));
              if ((!obs.is_annual) && (currentDate.getFullYear() !== checkDate.getFullYear())) {
                if (checkDate.getMonth() === 5) {
                  return (current.getFullYear() === checkDate.getFullYear());
                } else {
                  return false;
                }
              } else {
                return(checkDate.getMonth() === 5);
              }
            });
            vm.observanceReporter[0].calendarJun = calendarJunObservances.length;
            for (let i = 0; i < calendarJunObservances.length; i++) {
              checkDate = new Date(calendarJunObservances[i].day_of.slice(0, 10));
              vm.observanceReporter[0].calendarJunObservances[i] = (calendarJunObservances[i].name);
              if (vm.observanceReporter[0].juneOverlap[checkDate.getDate().toString()] === undefined) {
                vm.observanceReporter[0].juneOverlap[checkDate.getDate().toString()] = 1;
                ++vm.observanceReporter[0].calendarJunTotal;
              } else {
                ++vm.observanceReporter[0].juneOverlap[checkDate.getDate().toString()];
                ++vm.observanceReporter[0].calendarJunOverlap;
              }
            }
            vm.observanceReporter[0].calendarJunObservances = vm.observanceReporter[0].calendarJunObservances.sort((a, b)=>{
              if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
              } else if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            vm.observanceReporter[0].calendarJulObservances = [];
            vm.observanceReporter[0].calendarJulTotal = 0;
            vm.observanceReporter[0].calendarJulOverlap = 0;
            vm.observanceReporter[0].julyOverlap = {};
            vm.observanceReporter[0].calendarJulObservances = [];
            let calendarJulObservances = observances.filter(obs=>{
              checkDate = new Date(obs.day_of.slice(0, 10));
              if ((!obs.is_annual) && (currentDate.getFullYear() !== checkDate.getFullYear())) {
                if (checkDate.getMonth() === 6) {
                  return (current.getFullYear() === checkDate.getFullYear());
                } else {
                  return false;
                }
              } else {
                return(checkDate.getMonth() === 6);
              }
            });
            vm.observanceReporter[0].calendarJul = calendarJulObservances.length;
            for (let i = 0; i < calendarJulObservances.length; i++) {
              checkDate = new Date(calendarJulObservances[i].day_of.slice(0, 10));
              vm.observanceReporter[0].calendarJulObservances[i] = (calendarJulObservances[i].name);
              if (vm.observanceReporter[0].julyOverlap[checkDate.getDate().toString()] === undefined) {
                vm.observanceReporter[0].julyOverlap[checkDate.getDate().toString()] = 1;
                ++vm.observanceReporter[0].calendarJulTotal;
              } else {
                ++vm.observanceReporter[0].julyOverlap[checkDate.getDate().toString()];
                ++vm.observanceReporter[0].calendarJulOverlap;
              }
            }
            vm.observanceReporter[0].calendarJulObservances = vm.observanceReporter[0].calendarJulObservances.sort((a, b)=>{
              if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
              } else if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            vm.observanceReporter[0].calendarAugObservances = [];
            vm.observanceReporter[0].calendarAugTotal = 0;
            vm.observanceReporter[0].calendarAugOverlap = 0;
            vm.observanceReporter[0].augustOverlap = {};
            vm.observanceReporter[0].calendarAugObservances = [];
            let calendarAugObservances = observances.filter(obs=>{
              checkDate = new Date(obs.day_of.slice(0, 10));
              if ((!obs.is_annual) && (currentDate.getFullYear() !== checkDate.getFullYear())) {
                if (checkDate.getMonth() === 7) {
                  return (current.getFullYear() === checkDate.getFullYear());
                } else {
                  return false;
                }
              } else {
                return(checkDate.getMonth() === 7);
              }
            });
            vm.observanceReporter[0].calendarAug = calendarAugObservances.length;
            for (let i = 0; i < calendarAugObservances.length; i++) {
              checkDate = new Date(calendarAugObservances[i].day_of.slice(0, 10));
              vm.observanceReporter[0].calendarAugObservances[i] = (calendarAugObservances[i].name);
              if (vm.observanceReporter[0].augustOverlap[checkDate.getDate().toString()] === undefined) {
                vm.observanceReporter[0].augustOverlap[checkDate.getDate().toString()] = 1;
                ++vm.observanceReporter[0].calendarAugTotal;
              } else {
                ++vm.observanceReporter[0].augustOverlap[checkDate.getDate().toString()];
                ++vm.observanceReporter[0].calendarAugOverlap;
              }
            }
            vm.observanceReporter[0].calendarAugObservances = vm.observanceReporter[0].calendarAugObservances.sort((a, b)=>{
              if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
              } else if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            vm.observanceReporter[0].calendarSepObservances = [];
            vm.observanceReporter[0].calendarSepTotal = 0;
            vm.observanceReporter[0].calendarSepOverlap = 0;
            vm.observanceReporter[0].septemberOverlap = {};
            vm.observanceReporter[0].calendarSepObservances = [];
            let calendarSepObservances = observances.filter(obs=>{
              checkDate = new Date(obs.day_of.slice(0, 10));
              if ((!obs.is_annual) && (currentDate.getFullYear() !== checkDate.getFullYear())) {
                if (checkDate.getMonth() === 8) {
                  return (current.getFullYear() === checkDate.getFullYear());
                } else {
                  return false;
                }
              } else {
                return(checkDate.getMonth() === 8);
              }
            });
            vm.observanceReporter[0].calendarSep = calendarSepObservances.length;
            for (let i = 0; i < calendarSepObservances.length; i++) {
              checkDate = new Date(calendarSepObservances[i].day_of.slice(0, 10));
              vm.observanceReporter[0].calendarSepObservances[i] = (calendarSepObservances[i].name);
              if (vm.observanceReporter[0].septemberOverlap[checkDate.getDate().toString()] === undefined) {
                vm.observanceReporter[0].septemberOverlap[checkDate.getDate().toString()] = 1;
                ++vm.observanceReporter[0].calendarSepTotal;
              } else {
                ++vm.observanceReporter[0].septemberOverlap[checkDate.getDate().toString()];
                ++vm.observanceReporter[0].calendarSepOverlap;
              }
            }
            vm.observanceReporter[0].calendarSepObservances = vm.observanceReporter[0].calendarSepObservances.sort((a, b)=>{
              if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
              } else if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            vm.observanceReporter[0].calendarOctObservances = [];
            vm.observanceReporter[0].calendarOctTotal = 0;
            vm.observanceReporter[0].calendarOctOverlap = 0;
            vm.observanceReporter[0].octoberOverlap = {};
            vm.observanceReporter[0].calendarOctObservances = [];
            let calendarOctObservances = observances.filter(obs=>{
              checkDate = new Date(obs.day_of.slice(0, 10));
              if ((!obs.is_annual) && (currentDate.getFullYear() !== checkDate.getFullYear())) {
                if (checkDate.getMonth() === 9) {
                  return (current.getFullYear() === checkDate.getFullYear());
                } else {
                  return false;
                }
              } else {
                return(checkDate.getMonth() === 9);
              }
            });
            vm.observanceReporter[0].calendarOct = calendarOctObservances.length;
            for (let i = 0; i < calendarOctObservances.length; i++) {
              checkDate = new Date(calendarOctObservances[i].day_of.slice(0, 10));
              vm.observanceReporter[0].calendarOctObservances[i] = (calendarOctObservances[i].name);
              if (vm.observanceReporter[0].octoberOverlap[checkDate.getDate().toString()] === undefined) {
                vm.observanceReporter[0].octoberOverlap[checkDate.getDate().toString()] = 1;
                ++vm.observanceReporter[0].calendarOctTotal;
              } else {
                ++vm.observanceReporter[0].octoberOverlap[checkDate.getDate().toString()];
                ++vm.observanceReporter[0].calendarOctOverlap;
              }
            }
            vm.observanceReporter[0].calendarOctObservances = vm.observanceReporter[0].calendarOctObservances.sort((a, b)=>{
              if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
              } else if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            vm.observanceReporter[0].calendarNovObservances = [];
            vm.observanceReporter[0].calendarNovTotal = 0;
            vm.observanceReporter[0].calendarNovOverlap = 0;
            vm.observanceReporter[0].novemberOverlap = {};
            vm.observanceReporter[0].calendarNovObservances = [];
            let calendarNovObservances = observances.filter(obs=>{
              checkDate = new Date(obs.day_of.slice(0, 10));
              if ((!obs.is_annual) && (currentDate.getFullYear() !== checkDate.getFullYear())) {
                if (checkDate.getMonth() === 10) {
                  return (current.getFullYear() === checkDate.getFullYear());
                } else {
                  return false;
                }
              } else {
                return(checkDate.getMonth() === 10);
              }
            });
            vm.observanceReporter[0].calendarNov = calendarNovObservances.length;
            for (let i = 0; i < calendarNovObservances.length; i++) {
              checkDate = new Date(calendarNovObservances[i].day_of.slice(0, 10));
              vm.observanceReporter[0].calendarNovObservances[i] = (calendarNovObservances[i].name);
              if (vm.observanceReporter[0].novemberOverlap[checkDate.getDate().toString()] === undefined) {
                vm.observanceReporter[0].novemberOverlap[checkDate.getDate().toString()] = 1;
                ++vm.observanceReporter[0].calendarNovTotal;
              } else {
                ++vm.observanceReporter[0].novemberOverlap[checkDate.getDate().toString()];
                ++vm.observanceReporter[0].calendarNovOverlap;
              }
            }
            vm.observanceReporter[0].calendarNovObservances = vm.observanceReporter[0].calendarNovObservances.sort((a, b)=>{
              if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
              } else if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            vm.observanceReporter[0].calendarDecObservances = [];
            vm.observanceReporter[0].calendarDecTotal = 0;
            vm.observanceReporter[0].calendarDecOverlap = 0;
            vm.observanceReporter[0].decemberOverlap = {};
            vm.observanceReporter[0].calendarDecObservances = [];
            let calendarDecObservances = observances.filter(obs=>{
              checkDate = new Date(obs.day_of.slice(0, 10));
              if ((!obs.is_annual) && (currentDate.getFullYear() !== checkDate.getFullYear())) {
                if (checkDate.getMonth() === 11) {
                  return (current.getFullYear() === checkDate.getFullYear());
                } else {
                  return false;
                }
              } else {
                return(checkDate.getMonth() === 11);
              }
            });
            vm.observanceReporter[0].calendarDec = calendarDecObservances.length;
            for (let i = 0; i < calendarDecObservances.length; i++) {
              checkDate = new Date(calendarDecObservances[i].day_of.slice(0, 10));
              vm.observanceReporter[0].calendarDecObservances[i] = (calendarDecObservances[i].name);
              if (vm.observanceReporter[0].decemberOverlap[checkDate.getDate().toString()] === undefined) {
                vm.observanceReporter[0].decemberOverlap[checkDate.getDate().toString()] = 1;
                ++vm.observanceReporter[0].calendarDecTotal;
              } else {
                ++vm.observanceReporter[0].decemberOverlap[checkDate.getDate().toString()];
                ++vm.observanceReporter[0].calendarDecOverlap;
              }
            }
            vm.observanceReporter[0].calendarDecObservances = vm.observanceReporter[0].calendarDecObservances.sort((a, b)=>{
              if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
              } else if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
          } else {
            observanceReportDone();
          }
        });

        reportForObservances.setAttribute("style", "display: initial;");
        observancesManagerDone.setAttribute("style", "visibility: hidden;");
        userObservancesEditorDiv.setAttribute("style", "display: none;");
      }

      function addNewArt(monthPath) {
        let getPath = monthPath + 'byuser';
        let monthDays = 0;
        let min = 1;
        let max = 6;
        switch(monthPath) {
          case('january_arts'):
            monthDays = 31;
            console.log(monthDays);
            break;
          case('february_arts'):
            monthDays = 29;
            break;
          case('march_arts'):
            monthDays = 31;
            break;
          case('april_arts'):
            monthDays = 30;
            break;
          case('may_arts'):
            monthDays = 31;
            break;
          case('june_arts'):
            monthDays = 30;
            break;
          case('july_arts'):
            monthDays = 31;
            break;
          case('august_arts'):
            monthDays = 31;
            break;
          case('september_arts'):
            monthDays = 30;
            break;
          case('october_arts'):
            monthDays = 31;
            break;
          case('november_arts'):
            monthDays = 30;
            break;
          case('december_arts'):
            monthDays = 31;
            break;
          default:
            monthDays = 30;
        }
        let postObj = {
          user_id: currentUserId,
          img_path: '',
          title: '',
          artist: '',
          year: '',
          rule: {
            monday: artArrayRandomizer(monthDays, min, max),
            tuesday: artArrayRandomizer(monthDays, min, max),
            wednesday: artArrayRandomizer(monthDays, min, max),
            thursday: artArrayRandomizer(monthDays, min, max),
            friday: artArrayRandomizer(monthDays, min, max),
            saturday: artArrayRandomizer(monthDays, min, max),
            sunday: artArrayRandomizer(monthDays, min, max)
          }
        };

        $http.get(`/${getPath}/${currentUserId}`)
        .then(userArtsData=>{
          let userArts = userArtsData.data;
          if (userArts.length > 0) {
            postObj.theme = userArts[0].theme;
          } else {
            postObj.theme = '';
          }
          $http.post(`/${monthPath}`, postObj)
          .then(postedArtData=>{
            let postedArt = postedArtData.data[0];
            editArtCurrate(monthPath, postedArt.id);
          });
        });
      }

      function deleteMusicCurrate(monthPath, musicId) {
        let userMusicCurratorEditorDiv = document.getElementById('userMusicCurratorEditorDiv');
        let musicCurratorManagementDiv = document.getElementById('musicCurratorManagementDiv');
        let musicCurratorManagerDone = document.getElementById('musicCurratorManagerDone');
        let userMusicCurratorDeleteConfirmDiv = document.getElementById('userMusicCurratorDeleteConfirmDiv');
        let userMusicCurratorATagDelete = document.getElementById('userMusicCurratorATagDelete');
        let userMusicCurratorDeleteConfirmButtons = document.getElementById('userMusicCurratorDeleteConfirmButtons');
        let userMusicCurratorConfirmYes = document.getElementById('userMusicCurratorConfirmYes');
        if (userMusicCurratorConfirmYes) {
          userMusicCurratorConfirmYes.parentNode.removeChild(userMusicCurratorConfirmYes);
          userMusicCurratorConfirmYes = document.createElement('a');
          userMusicCurratorDeleteConfirmButtons.appendChild(userMusicCurratorConfirmYes);
          userMusicCurratorConfirmYes.id = 'userMusicCurratorConfirmYes';
          userMusicCurratorConfirmYes.className = 'btn';
          userMusicCurratorConfirmYes.innerHTML = 'yes';
          userMusicCurratorConfirmYes.setAttribute("style", "cursor: pointer;");
        }
        let userMusicCurratorConfirmNo = document.getElementById('userMusicCurratorConfirmNo');
        if (userMusicCurratorConfirmNo) {
          userMusicCurratorConfirmNo.parentNode.removeChild(userMusicCurratorConfirmNo);
          userMusicCurratorConfirmNo = document.createElement('a');
          userMusicCurratorDeleteConfirmButtons.appendChild(userMusicCurratorConfirmNo);
          userMusicCurratorConfirmNo.id = 'userMusicCurratorConfirmNo';
          userMusicCurratorConfirmNo.className = 'btn';
          userMusicCurratorConfirmNo.innerHTML = 'no';
          userMusicCurratorConfirmNo.setAttribute("style", "cursor: pointer;");
        }

        $http.get(`/${monthPath}/${musicId}`)
        .then(musicSelectionData=>{
          let musicSelection = musicSelectionData.data;
          userMusicCurratorATagDelete.innerHTML = musicSelection.a_string;

          userMusicCurratorConfirmNo.addEventListener('click', ()=>{
            musicCurratorManagementDiv.setAttribute("style", "display: initial;");
            userMusicCurratorDeleteConfirmDiv.setAttribute("style", "display: none;");
          });
          userMusicCurratorConfirmYes.addEventListener('click', ()=>{
            $http.delete(`/${monthPath}/${musicId}`)
            .then(()=>{
              musicCurratorManagementDiv.setAttribute("style", "display: initial;");
              userMusicCurratorDeleteConfirmDiv.setAttribute("style", "display: none;");
              musicsCurationManagement();
              if ((monthPath === 'friday_musics') || (monthPath === 'sunday_musics')) {
                displayWeekMusics(monthPath +'byuser');
              } else {
                displayMusics(monthPath + 'byuser');
              }
            });

          });
        });

        musicCurratorManagementDiv.setAttribute("style", "display: none;");
        musicCurratorManagerDone.setAttribute("style", "visibility: visible;");
        userMusicCurratorDeleteConfirmDiv.setAttribute("style", "display: initial;");
        userMusicCurratorEditorDiv.setAttribute("style", "display: none;");
      }

      function userTilesCurratorEditorDone() {
        cleanUpBlankTiles();
        let userTilesCurratorEditorDiv = document.getElementById('userTilesCurratorEditorDiv');
        let tilesCurratorManagerDone = document.getElementById('tilesCurratorManagerDone');

        userTilesCurratorEditorDiv.setAttribute("style", "display: none;");
        tilesCurratorManagerDone.setAttribute("style", "visibility: visible;");
        tilesCurratorManagement();
      }



      function editTilesCurrate(monthPath, tileId) {
        let randomMonthDay = 0;
        let monthDays = 0;
        let userTilesCurratorEditorDiv = document.getElementById('userTilesCurratorEditorDiv');
        let tilesCurratorManagerDone = document.getElementById('tilesCurratorManagerDone');
        let userTilesCuratorEditMonth = document.getElementById('userTilesCuratorEditMonth');
        let userTilesCuratorMonthTheme = document.getElementById('userTilesCuratorMonthTheme');
        let userTilesCuratorFirstEntryTheme = document.getElementById('userTilesCuratorFirstEntryTheme');
        let userTilesCuratorMonthThemeEntry = document.getElementById('userTilesCuratorMonthThemeEntry');
        if (userTilesCuratorMonthThemeEntry) {
          userTilesCuratorMonthThemeEntry.parentNode.removeChild(userTilesCuratorMonthThemeEntry);
          userTilesCuratorMonthThemeEntry = document.createElement('input');
          userTilesCuratorFirstEntryTheme.appendChild(userTilesCuratorMonthThemeEntry);
          userTilesCuratorMonthThemeEntry.id = 'userTilesCuratorMonthThemeEntry';
          userTilesCuratorMonthThemeEntry.type = 'text';
          userTilesCuratorMonthThemeEntry.className = 'pure-input-1';
          userTilesCuratorMonthThemeEntry.placeholder = "Month Theme";
        }
        let userTilesCurratorImageDiv = document.getElementById('userTilesCurratorImageDiv');
        let tilesCurratorDate = document.getElementById('tilesCurratorDate');
        if (tilesCurratorDate) {
          tilesCurratorDate.parentNode.removeChild(tilesCurratorDate);
          tilesCurratorDate = document.createElement('h1');
          userTilesCurratorImageDiv.appendChild(tilesCurratorDate);
          tilesCurratorDate.id = 'tilesCurratorDate';

        }
        let userTilesCurratorImgPathField = document.getElementById('userTilesCurratorImgPathField');
        let usertilesCurratorURL = document.getElementById('usertilesCurratorURL');
        if (usertilesCurratorURL) {
          usertilesCurratorURL.parentNode.removeChild(usertilesCurratorURL);
          usertilesCurratorURL = document.createElement('input');
          userTilesCurratorImgPathField.appendChild(usertilesCurratorURL);
          usertilesCurratorURL.id = 'usertilesCurratorURL';
          usertilesCurratorURL.type = 'text';
          usertilesCurratorURL.placeholder = 'imageURL';
        }
        let usertilesCurratorUploaderButton = document.getElementById('usertilesCurratorUploaderButton');
        if (usertilesCurratorUploaderButton) {
          usertilesCurratorUploaderButton.parentNode.removeChild(usertilesCurratorUploaderButton);
          usertilesCurratorUploaderButton = document.createElement('a');
          userTilesCurratorImgPathField.appendChild(usertilesCurratorUploaderButton);
          usertilesCurratorUploaderButton.id = 'usertilesCurratorUploaderButton';
          usertilesCurratorUploaderButton.className = 'btn';
          usertilesCurratorUploaderButton.innerHTML = 'upload';
          usertilesCurratorUploaderButton.setAttribute("style", "cursor: pointer;");
        }
        let userTilesCurratorImageUploaderDiv = document.getElementById('userTilesCurratorImageUploaderDiv');
        let userTilesCurratorFileUpload = document.getElementById('userTilesCurratorFileUpload');
        if (userTilesCurratorFileUpload) {
          userTilesCurratorFileUpload.parentNode.removeChild(userTilesCurratorFileUpload);
          userTilesCurratorFileUpload = document.createElement('input');
          userTilesCurratorImageUploaderDiv.appendChild(userTilesCurratorFileUpload);
          userTilesCurratorFileUpload.id = 'userTilesCurratorFileUpload';
          userTilesCurratorFileUpload.type = 'file';
        }
        let userTilesCurratorUploaderSubmit = document.getElementById('userTilesCurratorUploaderSubmit');
        if (userTilesCurratorUploaderSubmit) {
          userTilesCurratorUploaderSubmit.parentNode.removeChild(userTilesCurratorUploaderSubmit);
          userTilesCurratorUploaderSubmit = document.createElement('a');
          userTilesCurratorImageUploaderDiv.appendChild(userTilesCurratorUploaderSubmit);
          userTilesCurratorUploaderSubmit.id = 'userTilesCurratorUploaderSubmit';
          userTilesCurratorUploaderSubmit.className = 'btn';
          userTilesCurratorUploaderSubmit.innerHTML = 'upload';
          userTilesCurratorUploaderSubmit.setAttribute("style", "cursor: pointer;");
        }
        let userTilesCurratorUploaderCancel = document.getElementById('userTilesCurratorUploaderCancel');
        if (userTilesCurratorUploaderCancel) {
          userTilesCurratorUploaderCancel.parentNode.removeChild(userTilesCurratorUploaderCancel);
          userTilesCurratorUploaderCancel = document.createElement('a');
          userTilesCurratorImageUploaderDiv.appendChild(userTilesCurratorUploaderCancel);
          userTilesCurratorUploaderCancel.id = 'userTilesCurratorUploaderCancel';
          userTilesCurratorUploaderCancel.className = 'btn';
          userTilesCurratorUploaderCancel.innerHTML = 'cancel';
          userTilesCurratorUploaderCancel.setAttribute("style", "cursor: pointer;");
        }
        let tileTypes = [ 'off month tiles', 'week', 'monday, tuesday, wednesday, thursday', 'friday', 'saturday', 'sunday', 'holiday' ];
        let element;
        let userTilesCuratorTypeDiv = document.getElementById('userTilesCuratorTypeDiv');
        let userTilesCuratorSelect = document.getElementById('userTilesCuratorSelect');
        if (userTilesCuratorSelect) {
          userTilesCuratorSelect.parentNode.removeChild(userTilesCuratorSelect);
          userTilesCuratorSelect = document.createElement('select');
          userTilesCuratorTypeDiv.appendChild(userTilesCuratorSelect);
          userTilesCuratorSelect.id = 'userTilesCuratorSelect';
          userTilesCuratorSelect.className = "pure-input-1";
          for (let i = 0; i < tileTypes.length; i++) {
            element = document.createElement('option');
            userTilesCuratorSelect.appendChild(element);
            element.value = tileTypes[i];
            element.innerHTML = tileTypes[i];
          }
        }
        let tileRepeaterDiv = document.getElementById('tileRepeaterDiv');
        let userTilesCurratorRepeatValue = document.getElementById('userTilesCurratorRepeatValue');
        if (userTilesCurratorRepeatValue) {
          userTilesCurratorRepeatValue.parentNode.removeChild(userTilesCurratorRepeatValue);
          userTilesCurratorRepeatValue = document.createElement('input');
          tileRepeaterDiv.appendChild(userTilesCurratorRepeatValue);
          userTilesCurratorRepeatValue.id = 'userTilesCurratorRepeatValue';
          userTilesCurratorRepeatValue.type = 'checkbox';
          // userTilesCurratorRepeatValue.className = 'pure-input-1';
        }
        let tileSizerDiv = document.getElementById('tileSizerDiv');
        let userTilesCurratorSizeValue = document.getElementById('userTilesCurratorSizeValue');
        if (userTilesCurratorSizeValue) {
          userTilesCurratorSizeValue.parentNode.removeChild(userTilesCurratorSizeValue);
          userTilesCurratorSizeValue = document.createElement('input');
          tileSizerDiv.appendChild(userTilesCurratorSizeValue);
          userTilesCurratorSizeValue.id = 'userTilesCurratorSizeValue';
          userTilesCurratorSizeValue.type = 'number';
        }
        let tileColorDarkDiv = document.getElementById('tileColorDarkDiv');
        let userTilesCurratorColorDark = document.getElementById('userTilesCurratorColorDark');
        if (userTilesCurratorColorDark) {
          userTilesCurratorColorDark.parentNode.removeChild(userTilesCurratorColorDark);
          userTilesCurratorColorDark = document.createElement('input');
          tileColorDarkDiv.appendChild(userTilesCurratorColorDark);
          userTilesCurratorColorDark.id = 'userTilesCurratorColorDark';
          userTilesCurratorColorDark.type = 'color';
        }
        let tileColorLightDiv = document.getElementById('tileColorLightDiv');
        let userTilesCurratorColorLight = document.getElementById('userTilesCurratorColorLight');
        if (userTilesCurratorColorLight) {
          userTilesCurratorColorLight.parentNode.removeChild(userTilesCurratorColorLight);
          userTilesCurratorColorLight = document.createElement('input');
          tileColorLightDiv.appendChild(userTilesCurratorColorLight);
          userTilesCurratorColorLight.id = 'userTilesCurratorColorLight';
          userTilesCurratorColorLight.type = 'color';
        }
        let tileColorMediumDiv = document.getElementById('tileColorMediumDiv');
        let userTilesCurratorColorMedium = document.getElementById('userTilesCurratorColorMedium');
        if (userTilesCurratorColorMedium) {
          userTilesCurratorColorMedium.parentNode.removeChild(userTilesCurratorColorMedium);
          tileColorMediumDiv.appendChild(userTilesCurratorColorMedium);
          userTilesCurratorColorMedium.id = 'userTilesCurratorColorMedium';
          userTilesCurratorColorMedium.type = 'color';
        }



        switch(monthPath) {
          case('january_tiles'):
            monthDays = 31;
            userTilesCuratorMonthTheme.innerHTML = 'January Tile';
            break;
          case('february_tiles'):
            monthDays = 29;
            userTilesCuratorMonthTheme.innerHTML = 'February Tile';
            break;
          case('march_tiles'):
            monthDays = 31;
            userTilesCuratorMonthTheme.innerHTML = 'March Tile';
            break;
          case('april_tiles'):
            monthDays = 30;
            userTilesCuratorMonthTheme.innerHTML = 'April Tile';
            break;
          case('may_tiles'):
            monthDays = 31;
            userTilesCuratorMonthTheme.innerHTML = 'May Tile';
            break;
          case('june_tiles'):
            monthDays = 30;
            userTilesCuratorMonthTheme.innerHTML = 'June Tile';
            break;
          case('july_tiles'):
            monthDays = 31;
            userTilesCuratorMonthTheme.innerHTML = 'July Tile';
            break;
          case('august_tiles'):
            monthDays = 31;
            userTilesCuratorMonthTheme.innerHTML = 'August Tile';
            break;
          case('september_tiles'):
            monthDays = 30;
            userTilesCuratorMonthTheme.innerHTML = 'September Tile';
            break;
          case('october_tiles'):
            monthDays = 31;
            userTilesCuratorMonthTheme.innerHTML = 'October Tile';
            break;
          case('november_tiles'):
            monthDays = 30;
            userTilesCuratorMonthTheme.innerHTML = 'November Tile';
            break;
          case('december_tiles'):
            monthDays = 31;
            userTilesCuratorMonthTheme.innerHTML = 'December Tile';
            break;
          default:
            console.log('unsupported month');
        }
        randomMonthDay = Math.floor(Math.random() * monthDays) + 1;
        tilesCurratorDate.innerHTML = randomMonthDay;


        $http.get(`/${monthPath}/${tileId}`)
        .then(tileData=>{

          let tile = tileData.data;
          if (tile.theme === '') {
            userTilesCuratorMonthTheme.innerHTML = '';
            userTilesCuratorMonthThemeEntry.setAttribute("style", "display: initial;");
            userTilesCuratorMonthThemeEntry.addEventListener('change', ()=>{
              userTilesCuratorMonthTheme.innerHTML = userTilesCuratorMonthThemeEntry.value;
            });
            userTilesCuratorMonthThemeEntry.addEventListener('focusout', ()=>{
              if (userTilesCuratorMonthThemeEntry.value !== '') {
                let subObj = {
                  theme: userTilesCuratorMonthThemeEntry.value
                };
                $http.patch(`/${monthPath}/${tileId}`, subObj)
                .then(()=>{
                  tile.theme = subObj.theme;
                });
              }
            });
          } else {
            userTilesCuratorFirstEntryTheme.setAttribute("style", "display: none;");
            userTilesCuratorMonthTheme.innerHTML = "Theme: " + tile.theme;
          }
          if (tile.src_string !== '') {
            userTilesCurratorImageDiv.setAttribute("style", "background-image: url(" + tile.src_string + "); background-repeat: " + tile.repeat_value + "; background-size: " + tile.size_value + "; border: solid 10px " + tile.color_medium + ";");
          }
          tilesCurratorDate.setAttribute("style", "color: " + tile.color_dark + ";)");
          switch(tile.type) {
            case('default'):
              userTilesCuratorSelect.value = 'off month tiles';
              break;
            case('week'):
            userTilesCuratorSelect.value = 'week';
              break;
            case('mtwt'):
              userTilesCuratorSelect.value = 'week', 'monday, tuesday, wednesday, thursday';
              break;
            case('friday'):
              userTilesCuratorSelect.value = 'friday';
              break;
            case('saturday'):
              userTilesCuratorSelect.value = 'saturday';
              break;
            case('sunday'):
              userTilesCuratorSelect.value = 'sunday';
              break;
            case('holiday'):
              userTilesCuratorSelect.value = 'holiday';
              break;
            default:
              console.log('unsupported state');
          }
          if (tile.repeat_value === 'no-repeat') {
            userTilesCurratorRepeatValue.checked = false;
          } else {
            userTilesCurratorRepeatValue.checked = true;
          }
          userTilesCurratorSizeValue.value = parseInt(tile.size_value);
          userTilesCurratorColorDark.value = tile.color_dark;
          userTilesCurratorColorLight.value = tile.color_light;
          userTilesCurratorColorMedium.value = tile.color_medium;

          tilesCurratorDate.addEventListener('mouseover', ()=>{
            tilesCurratorDate.setAttribute("style", "color: " + tile.color_light + ";)");
          });
          tilesCurratorDate.addEventListener('mouseleave', ()=>{
            tilesCurratorDate.setAttribute("style", "color: " + tile.color_dark + ";)");
          });
          usertilesCurratorURL.addEventListener('focusout', ()=>{
            if (usertilesCurratorURL.value !== '') {
              userTilesCurratorImageDiv.setAttribute("style", "background-image: url(" + usertilesCurratorURL.value + "); background-repeat: " + tile.repeat_value + "; background-size: " + tile.size_value + "; border: solid 10px " + tile.color_medium + ";");
              let subObj = {
                src_string: usertilesCurratorURL.value
              };
              $http.patch(`/${monthPath}/${tileId}`, subObj)
              .then(()=>{
                tile.src_string = subObj.src_string;
              });
            }
          });
          usertilesCurratorUploaderButton.addEventListener('click', ()=>{
            usertilesCurratorUploaderButton.setAttribute("style", "visibility: hidden;");
            userTilesCurratorImageUploaderDiv.setAttribute("style", "visibility: visible;");
          });
          userTilesCurratorUploaderSubmit.addEventListener('click', ()=>{
            usertilesCurratorUploaderButton.setAttribute("style", "visibility: visible;");
            userTilesCurratorImageUploaderDiv.setAttribute("style", "visibility: hidden;");
            usertilesCurratorUploaderButton.setAttribute("style", "cursor: pointer;");
          });
          userTilesCurratorUploaderCancel.addEventListener('click', ()=>{
            usertilesCurratorUploaderButton.setAttribute("style", "visibility: visible;");
            userTilesCurratorImageUploaderDiv.setAttribute("style", "visibility: hidden;");
            usertilesCurratorUploaderButton.setAttribute("style", "cursor: pointer;");
          });
          userTilesCurratorColorDark.addEventListener('change', ()=>{
            let subObj = {
              color_dark: userTilesCurratorColorDark.value
            };
            tilesCurratorDate.setAttribute("style", "color: " + tile.color_dark + ";)");
            $http.patch(`/${monthPath}/${tileId}`, subObj)
            .then(()=>{
              tile.color_dark = subObj.color_dark;
            });
          });
          userTilesCurratorColorMedium.addEventListener('change', ()=>{
            let subObj = {
              color_medium: userTilesCurratorColorMedium.value
            };
            userTilesCurratorImageDiv.setAttribute("style", "background-image: url(" + tile.src_string + "); background-repeat: " + tile.repeat_value + "; background-size: " + tile.size_value + "; border: solid 10px " + subObj.color_medium + ";");
            $http.patch(`/${monthPath}/${tileId}`, subObj)
            .then(()=>{
              tile.color_medium = subObj.color_medium;
            });
          });
          userTilesCurratorColorLight.addEventListener('change', ()=>{
            let subObj = {
              color_light: userTilesCurratorColorLight.value
            };
            $http.patch(`/${monthPath}.${tileId}`, subObj)
            .then(()=>{
              tile.color_light = subObj.color_light;
            });
          });
          userTilesCuratorSelect.addEventListener('change', ()=>{
            let subObj = {};
            switch(userTilesCuratorSelect.value) {
              case('off month tiles'):
                subObj.type = 'default';
                break;
              case('week'):
                subObj.type = 'week';
                break;
              case('monday, tuesday, wednesday, thursday'):
                subObj.type = 'mtwt';
                break;
              case('friday'):
                subObj.type = 'friday';
                break;
              case('saturday'):
                subObj.type = 'saturday';
                break;
              case('sunday'):
                subObj.type = 'sunday';
                break;
              case('holiday'):
                subObj.type = 'holiday';
                break;
              default:
                console.log('unsupported state');
            }
            $http.patch(`/${monthPath}/${tileId}`, subObj)
            .then(()=>{
              tile.type = subObj.type;
            });
          });
          userTilesCurratorRepeatValue.addEventListener('click', ()=>{
            let subObj = {};
            if (userTilesCurratorRepeatValue.checked) {
              subObj.repeat_value = 'repeat';
            } else {
              subObj.repeat_value = 'no-repeat';
            }
            userTilesCurratorImageDiv.setAttribute("style", "background-image: url(" + tile.src_string + "); background-repeat: " + subObj.repeat_value + "; background-size: " + tile.size_value + "; border: solid 10px " + tile.color_medium + ";");
            $http.patch(`/${monthPath}/${tileId}`, subObj)
            .then(()=>{
              tile.repeat_value = subObj.repeat_value;
            });
          });
          userTilesCurratorSizeValue.addEventListener('change', ()=>{
            if (userTilesCurratorRepeatValue.checked) {
              tile.repeat_value = 'repeat';
            } else {
              tile.repeat_value = 'no-repeat';
            }
            let subObj = {
              size_value: userTilesCurratorSizeValue.value.toString() + '%'
            };
            userTilesCurratorImageDiv.setAttribute("style", "background-image: url(" + tile.src_string + "); background-repeat: " + tile.repeat_value + "; background-size: " + subObj.size_value + "; border: solid 10px " + tile.color_medium + ";");
            $http.patch(`/${monthPath}/${tileId}`, subObj)
            .then(()=>{
              tile.size_value = subObj.size_value;
            });
          });

        });
        userTilesCurratorEditorDiv.setAttribute("style", "display: initial;");
        tilesCurratorManagerDone.setAttribute("style", "visibility: hidden;");
      }

      function closeModulesManager() {
        let artModuleDisplayButton = document.getElementById('artModuleDisplayButton');
        let availableArtModules = document.getElementById('availableArtModules');
        let modulesManagerButton = document.getElementById('modulesManagerButton');
        let modulesZone = document.getElementById('modulesZone');
        let modulesManagementDiv = document.getElementById('modulesManagementDiv');
        let availableMusicModules = document.getElementById('availableMusicModules');
        let musicModuleDisplayButton = document.getElementById('musicModuleDisplayButton');
        let tileModuleDisplayButton = document.getElementById('tileModuleDisplayButton');
        let availableTilesModules = document.getElementById('availableTilesModules');

        modulesManagerButton.setAttribute("style", "visibility: visible;");
        modulesZone.setAttribute("style", "opacity: 1.0;");
        modulesManagementDiv.setAttribute("style", "display: none;");
        artModuleDisplayButton.setAttribute("style", "visibility: visible;");
        availableArtModules.setAttribute("style", "display: none;");
        availableMusicModules.setAttribute("style", "display: none;");
        musicModuleDisplayButton.setAttribute("style", "visibility: visible;");
        tileModuleDisplayButton.setAttribute("style", "visibility: visible;");
        availableTilesModules.setAttribute("style", "display: none;");
      }

      function modulesManager() {
        let modulesManagerButton = document.getElementById('modulesManagerButton');
        let modulesZone = document.getElementById('modulesZone');
        let modulesManagementDiv = document.getElementById('modulesManagementDiv');

        modulesManagerButton.setAttribute("style", "visibility: hidden;");
        modulesZone.setAttribute("style", "opacity: 0.3;");
        modulesManagementDiv.setAttribute("style", "display: initial;");
      }

      function goalsReportDone() {
        let reportForGoals = document.getElementById('reportForGoals');
        let goalsManagerDone = document.getElementById('goalsManagerDone');

        reportForGoals.setAttribute("style", "display: none;");
        goalsManagerDone.setAttribute("style", "visibility: visible;");
      }

      function goalsReport() {
        let goalsManagerDone = document.getElementById('goalsManagerDone');
        let reportForGoals = document.getElementById('reportForGoals');
        let userGoalsEditingDiv = document.getElementById('userGoalsEditingDiv');

        $http.get(`/goalsbyuser/${currentUserId}`)
        .then(goalsData=>{
          let goals = goalsData.data;
          vm.goalReporter = [];
          vm.goalReporter[0] = {};
          vm.goalReporter[0].total = goals.length;
          vm.goalReporter[0].hours = 0;
          for (let i = 0; i < goals.length; i++) {
            vm.goalReporter[0].hours += parseFloat(goals[i].weekly_goal);
          }
        });

        reportForGoals.setAttribute("style", "display: initial;");
        userGoalsEditingDiv.setAttribute("style", "display: none;");
        goalsManagerDone.setAttribute("style", "visibility: hidden;");
      }

      function addNewObservance() {
        let fakeDate = new Date();
        let subObj = {
          user_id: currentUserId,
          name: '',
          color: '#ffffff',
          picture: '',
          day_of: fakeDate,
          is_annual: true,
          art_override: false,
          music_override: false,
          override_content: null
        };
        $http.post('/observances', subObj)
        .then(addedObservanceData=>{
          let addedObservance = addedObservanceData.data[0];
          editObservance(addedObservance.id);
        });
      }

      function deleteArtCurrate(artMonth, artId) {
        let userArtCurratorEditorDoneButton = document.getElementById('userArtCurratorEditorDoneButton');
        let userArtCurratorDeleteConfirmDiv = document.getElementById('userArtCurratorDeleteConfirmDiv');
        let artCurratorManagementDiv = document.getElementById('artCurratorManagementDiv');
        let userArtCurratorEditorDiv = document.getElementById('userArtCurratorEditorDiv');
        let userArtCurratorDeleteImage = document.getElementById('userArtCurratorDeleteImage');
        let userArtCurratorTitleDelete = document.getElementById('userArtCurratorTitleDelete');
        let userArtCurratorArtistDelete = document.getElementById('userArtCurratorArtistDelete');
        let userArtCurratorYearDelete = document.getElementById('userArtCurratorYearDelete');
        let userArtCurratorDeleteConfirmButtons = document.getElementById('userArtCurratorDeleteConfirmButtons');
        let userArtCurratorConfirmYes = document.getElementById('userArtCurratorConfirmYes');
        if (userArtCurratorConfirmYes) {
          userArtCurratorConfirmYes.parentNode.removeChild(userArtCurratorConfirmYes);
          userArtCurratorConfirmYes = document.createElement('a');
          userArtCurratorDeleteConfirmButtons.appendChild(userArtCurratorConfirmYes);
          userArtCurratorConfirmYes.id = 'userArtCurratorConfirmYes';
          userArtCurratorConfirmYes.className = 'btn';
          userArtCurratorConfirmYes.innerHTML = 'yes';
          userArtCurratorConfirmYes.setAttribute("style", "cursor: pointer;");
        }
        let userArtCurratorConfirmNo = document.getElementById('userArtCurratorConfirmNo');
        if (userArtCurratorConfirmNo) {
          userArtCurratorConfirmNo.parentNode.removeChild(userArtCurratorConfirmNo);
          userArtCurratorConfirmNo = document.createElement('a');
          userArtCurratorDeleteConfirmButtons.appendChild(userArtCurratorConfirmNo);
          userArtCurratorConfirmNo.id = 'userArtCurratorConfirmNo';
          userArtCurratorConfirmNo.className = 'btn';
          userArtCurratorConfirmNo.innerHTML = 'no';
          userArtCurratorConfirmNo.setAttribute("style", "cursor: pointer;");
        }


        $http.get(`/${artMonth}/${artId}`)
        .then(artPieceData=>{
          let artPiece = artPieceData.data;
          userArtCurratorDeleteImage.src = artPiece.img_path;
          userArtCurratorTitleDelete.innerHTML = artPiece.title;
          userArtCurratorArtistDelete.innerHTML = artPiece.artist;
          userArtCurratorYearDelete.innerHTML = artPiece.year;

          userArtCurratorConfirmYes.addEventListener('click', ()=>{
            $http.delete(`/${artMonth}/${artId}`)
            .then(()=>{
              userArtCurratorDeleteConfirmDiv.setAttribute("style", "display: none;");
              artCurratorManagementDiv.setAttribute("style", "display: initial;");
              displayArts(artMonth + 'byuser');
            });
            userArtCurratorDeleteConfirmDiv.setAttribute("style", "display: none;");
            artCurratorManagementDiv.setAttribute("style", "display: initial;");
          });
          userArtCurratorConfirmNo.addEventListener('click', ()=>{
            userArtCurratorDeleteConfirmDiv.setAttribute("style", "display: none;");
            artCurratorManagementDiv.setAttribute("style", "display: initial;");
          });
        });

        userArtCurratorDeleteConfirmDiv.setAttribute("style", "display: initial;");
        artCurratorManagementDiv.setAttribute("style", "display: none;");
        userArtCurratorEditorDiv.setAttribute("style", "display: none;");
        userArtCurratorEditorDoneButton.setAttribute("style", "visibility: visible;");
      }

      function emptyMusicDelete(table, id) {
        $http.delete(`/${table}/${id}`)
        .then(()=>{
          console.log('empty');
        });
      }

      function jettisonEmptyMusics(table) {
        let tableString = table + 'byuser'
        $http.get(`/${tableString}/${currentUserId}`)
        .then(userMusicsData=>{
          let userMusics = userMusicsData.data;
          if (userMusics.length > 0) {
            for (let i = 0; i < userMusics.length; i++) {
              if (userMusics[i].src_string === '') {
                emptyMusicDelete(table, userMusics[i].id);
              }
            }
          }
        });
      }

      function cleanUpEmptyMusics() {
        let musicTables = [ 'friday_musics', 'sunday_musics', 'january_musics', 'february_musics', 'march_musics', 'april_musics', 'may_musics', 'june_musics', 'july_musics', 'august_musics', 'september_musics', 'october_musics', 'november_musics', 'december_musics' ];

        for (let i = 0; i < musicTables.length; i++) {
          jettisonEmptyMusics(musicTables[i]);
        }
      }

      function userMusicCurratorEditorDone() {
        let userMusicCurratorEditorDiv = document.getElementById('userMusicCurratorEditorDiv');
        let musicCurratorManagerDone = document.getElementById('musicCurratorManagerDone');

        userMusicCurratorEditorDiv.setAttribute("style", "display: none;");
        musicCurratorManagerDone.setAttribute("style", "visibility: visible;");
        cleanUpEmptyMusics();
      }

      function handleMusicFilterListener(eleCheck, value, musicSelection, musicMonth, weekday) {
        eleCheck.addEventListener('click', ()=>{
          let subObj = {
            rule: musicSelection.rule
          };
          if (eleCheck.checked) {
            subObj.rule[weekday].push(value);
          } else {
            subObj.rule[weekday].splice((subObj.rule[weekday].indexOf(value)), 1);
          }
          $http.patch(`/${musicMonth}/${musicSelection.id}`, subObj)
          .then(()=>{
            musicSelection.rule = subObj.rule;
            displayMusics(musicMonth + 'byuser');
          });
        });
      }

      function displayMusicDaysArray(element, numberDays, rulesArray, musicSelection, musicMonth, weekday) {
        let eleDiv;
        let eleCheck;
        let eleLabel;

        for (let i = 0; i < numberDays; i++) {
          eleDiv = document.createElement('div');
          element.appendChild(eleDiv);
          eleDiv.className = 'arrayMonthClass';
          eleCheck = document.createElement('input');
          eleDiv.appendChild(eleCheck);
          eleCheck.type = 'checkbox';
          if (rulesArray.indexOf(i + 1) === -1) {
            eleCheck.checked = false;
          } else {
            eleCheck.checked = true;
          }
          eleLabel = document.createElement('p');
          eleDiv.appendChild(eleLabel);
          eleLabel.innerHTML = (i + 1).toString();
          handleMusicFilterListener(eleCheck, (i + 1), musicSelection, musicMonth, weekday);
        }
      }

      function editMusicCurrate(monthTable, musicId) {
        let numberDays = 0;
        let userMusicCurratorEditorDiv = document.getElementById('userMusicCurratorEditorDiv');
        let musicCurratorManagerDone = document.getElementById('musicCurratorManagerDone');
        let musicCurratorFilter = document.getElementById('musicCurratorFilter');
        let musicCurratorMonthLabel = document.getElementById('musicCurratorMonthLabel');
        switch(monthTable) {
          case('friday_musics'):
            musicCurratorMonthLabel.innerHTML = 'Friday Music';
            musicCurratorFilter.setAttribute("style", "display: none;");
            break;
          case('sunday_musics'):
            musicCurratorMonthLabel.innerHTML = 'Sunday Music';
            musicCurratorFilter.setAttribute("style", "display: none;");
            break;
          case('january_musics'):
            musicCurratorMonthLabel.innerHTML = 'January Music';
            musicCurratorFilter.setAttribute("style", "display: initial;");
            numberDays = 31;
            break;
          case('february_musics'):
            musicCurratorMonthLabel.innerHTML = 'February Music';
            musicCurratorFilter.setAttribute("style", "display: initial;");
            numberDays = 29;
            break;
          case('march_musics'):
            musicCurratorMonthLabel.innerHTML = 'March Music';
            musicCurratorFilter.setAttribute("style", "display: initial;");
            numberDays = 31;
            break;
          case('april_musics') :
            musicCurratorMonthLabel.innerHTML = 'April Music';
            musicCurratorFilter.setAttribute("style", "display: initial;");
            numberDays = 30;
            break;
          case('may_musics'):
            musicCurratorMonthLabel.innerHTML = 'May Music';
            musicCurratorFilter.setAttribute("style", "display: initial;");
            numberDays = 31;
            break;
          case('june_musics'):
            musicCurratorMonthLabel.innerHTML = 'June Music';
            musicCurratorFilter.setAttribute("style", "display: initial;");
            numberDays = 30;
            break;
          case('july_musics'):
            musicCurratorMonthLabel.innerHTML = 'July Music';
            musicCurratorFilter.setAttribute("style", "display: initial;");
            numberDays = 31;
            break;
          case('august_musics'):
            musicCurratorMonthLabel.innerHTML = 'August Music';
            musicCurratorFilter.setAttribute("style", "display: initial;");
            numberDays = 31;
            break;
          case('september_musics'):
            musicCurratorMonthLabel.innerHTML = 'September Music';
            musicCurratorFilter.setAttribute("style", "display: initial;");
            numberDays = 30;
            break;
          case('october_musics'):
            musicCurratorMonthLabel.innerHTML = 'October Music';
            musicCurratorFilter.setAttribute("style", "display: initial;");
            numberDays = 31;
            break;
          case('november_musics'):
            musicCurratorMonthLabel.innerHTML = 'November Music';
            musicCurratorFilter.setAttribute("style", "display: initial;");
            numberDays = 30;
            break;
          case('december_musics'):
            musicCurratorMonthLabel.innerHTML = 'December Music';
            musicCurratorFilter.setAttribute("style", "display: initial;");
            numberDays = 31;
            break;
          default:
            console.log('month not supported');
        }
        let musicCurratorThemeLabel = document.getElementById('musicCurratorThemeLabel');
        let userMusicCurratorContent = document.getElementById('userMusicCurratorContent');
        while (userMusicCurratorContent.firstChild) {
          userMusicCurratorContent.removeChild(userMusicCurratorContent.firstChild);
        }
        let musicPlayer;
        let musicATag;
        let musicCurratorSubmitDiv = document.getElementById('musicCurratorSubmitDiv');
        let musicCurratorBandcampSubmissionString = document.getElementById('musicCurratorBandcampSubmissionString');
        if (musicCurratorBandcampSubmissionString) {
          musicCurratorBandcampSubmissionString.parentNode.removeChild(musicCurratorBandcampSubmissionString);
          musicCurratorBandcampSubmissionString = document.createElement('input');
          musicCurratorSubmitDiv.appendChild(musicCurratorBandcampSubmissionString);
          musicCurratorBandcampSubmissionString.id = 'musicCurratorBandcampSubmissionString';
          musicCurratorBandcampSubmissionString.type = 'text';
          musicCurratorBandcampSubmissionString.className = 'pure-input-1';
        }
        let musicCurratorBancampSubmissionErrorMessage = document.getElementById('musicCurratorBancampSubmissionErrorMessage');
        musicCurratorBancampSubmissionErrorMessage.innerHTML = '';
        if ((monthTable !== 'friday_musics') && (monthTable !== 'sunday_musics')) {
          let dayLabel;
          let userMusicCurratorMondayArray = document.getElementById('userMusicCurratorMondayArray');
          while (userMusicCurratorMondayArray.firstChild) {
            userMusicCurratorMondayArray.removeChild(userMusicCurratorMondayArray.firstChild);
          }
          dayLabel = document.createElement('p');
          userMusicCurratorMondayArray.appendChild(dayLabel);
          dayLabel.innerHTML = "Mon";
          let userMusicCurratorTuesdayArray = document.getElementById('userMusicCurratorTuesdayArray');
          while (userMusicCurratorTuesdayArray.firstChild) {
            userMusicCurratorTuesdayArray.removeChild(userMusicCurratorTuesdayArray.firstChild);
          }
          dayLabel = document.createElement('p');
          userMusicCurratorTuesdayArray.appendChild(dayLabel);
          dayLabel.innerHTML = 'Tue';
          let userMusicCurratorWednesdayArray = document.getElementById('userMusicCurratorWednesdayArray');
          while (userMusicCurratorWednesdayArray.firstChild) {
            userMusicCurratorWednesdayArray.removeChild(userMusicCurratorWednesdayArray.firstChild);
          }
          dayLabel = document.createElement('p');
          userMusicCurratorWednesdayArray.appendChild(dayLabel);
          dayLabel.innerHTML = 'Wed';
          let userMusicCurratorThursdayArray = document.getElementById('userMusicCurratorThursdayArray');
          while (userMusicCurratorThursdayArray.firstChild) {
            userMusicCurratorThursdayArray.removeChild(userMusicCurratorThursdayArray.firstChild);
          }
          dayLabel = document.createElement('p');
          userMusicCurratorThursdayArray.appendChild(dayLabel);
          dayLabel.innerHTML = 'Thu';
          let userMusicCurratorSaturdayArray = document.getElementById('userMusicCurratorSaturdayArray');
          while (userMusicCurratorSaturdayArray.firstChild) {
            userMusicCurratorSaturdayArray.removeChild(userMusicCurratorSaturdayArray.firstChild);
          }
          dayLabel = document.createElement('p');
          userMusicCurratorSaturdayArray.appendChild(dayLabel);
          dayLabel.innerHTML = 'Sat';
        }
        let userMusicCurratorRandomButtonDiv = document.getElementById('userMusicCurratorRandomButtonDiv');
        let userMusicCurratorRandomizeFilterButton = document.getElementById('userMusicCurratorRandomizeFilterButton');
        if (userMusicCurratorRandomizeFilterButton) {
          userMusicCurratorRandomizeFilterButton.parentNode.removeChild(userMusicCurratorRandomizeFilterButton);
          userMusicCurratorRandomizeFilterButton = document.createElement('button');
          userMusicCurratorRandomButtonDiv.appendChild(userMusicCurratorRandomizeFilterButton);
          userMusicCurratorRandomizeFilterButton.id = 'userMusicCurratorRandomizeFilterButton';
          userMusicCurratorRandomizeFilterButton.innerHTML = 'Randomize Values';
          userMusicCurratorRandomizeFilterButton.setAttribute("style", "background: #441E38; background-color: -webkit-linear-gradient(135deg, #441E38, #3E9B8C); background: -o-linear-gradient(135deg, #441E38, #3E9B8C); background: -moz-linear-gradient(135deg, #441E38, #3E9B8C); background: linear-gradient(135deg, #441E38, #3E9B8C); margin-left: 12vmin;");
        }

        $http.get(`/${monthTable}/${musicId}`)
        .then(musicSelectionData=>{
          let musicSelection = musicSelectionData.data;
          if ((monthTable !== 'friday_musics') && (monthTable !== 'sunday_musics')) {
            if (musicSelection.theme !== '') {
              musicCurratorThemeLabel.innerHTML = musicSelection.theme;
              musicCurratorThemeLabel.setAttribute("style", "visibility: visible;");
            } else {
              musicCurratorThemeLabel.setAttribute("style", "visibility: hidden;");
            }
            displayMusicDaysArray(userMusicCurratorMondayArray, numberDays, musicSelection.rule.monday, musicSelection, monthTable, 'monday');
            displayMusicDaysArray(userMusicCurratorTuesdayArray, numberDays, musicSelection.rule.tuesday, musicSelection, monthTable, 'tuesday');
            displayMusicDaysArray(userMusicCurratorWednesdayArray, numberDays, musicSelection.rule.wednesday, musicSelection, monthTable, 'wednesday');
            displayMusicDaysArray(userMusicCurratorThursdayArray, numberDays, musicSelection.rule.thursday, musicSelection, monthTable, 'thursday');
            displayMusicDaysArray(userMusicCurratorSaturdayArray, numberDays, musicSelection.rule.saturday, musicSelection, monthTable, 'saturday');
            userMusicCurratorRandomizeFilterButton.addEventListener('click', ()=>{
              let subObj = {
                rule: {
                  monday: [],
                  tuesday: [],
                  wednesday: [],
                  thursday: [],
                  saturday: []
                }
              };
              subObj.rule.monday = artArrayRandomizer(numberDays, 1, 6);
              subObj.rule.tuesday = artArrayRandomizer(numberDays, 1, 6);
              subObj.rule.wednesday = artArrayRandomizer(numberDays, 1, 6);
              subObj.rule.thursday = artArrayRandomizer(numberDays, 1, 6);
              subObj.rule.saturday = artArrayRandomizer(numberDays, 1, 6);
              $http.patch(`/${monthTable}/${musicId}`, subObj)
              .then(()=>{
                editMusicCurrate(monthTable, musicId);
                displayMusics(monthTable + 'byuser');
              });
            });
          } else {
            musicCurratorThemeLabel.setAttribute("style", "visibility: hidden;");
          }
          if (musicSelection.source === 'bandcamp') {
            musicPlayer = document.createElement('iframe');
            userMusicCurratorContent.appendChild(musicPlayer);
            musicPlayer.setAttribute("style", "border: 0; width: 100%; height: 650px;");
            musicPlayer.seamless = true;
            musicPlayer.src = musicSelection.src_string;
            musicATag = document.createElement('a');
            musicPlayer.appendChild(musicATag);
            musicATag.href = musicSelection.href_string;
            musicATag.innerHTML = musicSelection.a_string;
          } else {
            musicPlayer = document.createElement('iframe');
            userMusicCurratorContent.appendChild(musicPlayer);
            musicPlayer.setAttribute("style", "border: 0; width: 100%; height: 650px;");
            musicPlayer.seamless = true;
            musicATag = document.createElement('a');
            musicPlayer.appendChild(musicATag);
          }


          musicCurratorBandcampSubmissionString.addEventListener('focusout', ()=>{
            if (musicCurratorBandcampSubmissionString.value !== '') {
              if (checkValidBancampEmbed(musicCurratorBandcampSubmissionString.value)) {
                let subObj = {
                  source: 'bandcamp',
                  src_string: extractSrcStringFromBandcampEmbed(musicCurratorBandcampSubmissionString.value),
                  href_string: extractHrefStringFromBandcampEmbed(musicCurratorBandcampSubmissionString.value),
                  a_string: extractATagFromBandcampEmbed(musicCurratorBandcampSubmissionString.value)
                }
                musicPlayer.src = subObj.src_string;
                musicATag.href = subObj.href_string;
                musicATag.innerHTML = subObj.a_string;
                $http.patch(`/${monthTable}/${musicId}`, subObj)
                .then(()=>{
                  musicSelection.source = subObj.source;
                  musicSelection.src_string = subObj.src_string;
                  musicSelection.href_string = subObj.href_string;
                  musicSelection.a_string = subObj.a_string;
                });
              } else {
                musicCurratorBancampSubmissionErrorMessage.innerHTML = 'ERROR - not valid bandcamp embed string';
                musicCurratorBancampSubmissionErrorMessage.setAttribute("style", "color: #ff0000;");
              }
            } else {
              musicCurratorBancampSubmissionErrorMessage.innerHTML = '';
            }
          });

        });

        userMusicCurratorEditorDiv.setAttribute("style", "display: initial;");
        musicCurratorManagerDone.setAttribute("style", "visibility: hidden;");
      }

      function tileClick(tileId, color, src, repeatVal, sizeVal) {
        if (toggle[tileId]) {
          document.getElementById(tileId).parentNode.setAttribute("style", "border: solid 1px transparent; background-image: url(" + src + "); background-repeat: " + repeatVal + "; background-size: " + sizeVal + ";");
          toggle[tileId] = false;
        } else {
          document.getElementById(tileId).parentNode.setAttribute("style", "border: solid 10px " + color + "; background-image: url(" + src + "); background-repeat: " + repeatVal + "; background-size: " + sizeVal + ";");
          toggle[tileId] = true;
        }
      }


      function tileHoverColor(element, color) {
        document.getElementById(element).setAttribute("style", "color:" + color + ";");
      }

      function displayTiles(tileMonth) {
        let januaryTilesTheme = document.getElementById('januaryTilesTheme');
        let februaryTilesTheme = document.getElementById('februaryTilesTheme');
        let marchTilesTheme = document.getElementById('marchTilesTheme');
        let aprilTilesTheme = document.getElementById('aprilTilesTheme');
        let mayTilesTheme = document.getElementById('mayTilesTheme');
        let juneTilesTheme = document.getElementById('juneTilesTheme');
        let julyTilesTheme = document.getElementById('julyTilesTheme');
        let augustTilesTheme = document.getElementById('augustTilesTheme');
        let septemberTilesTheme = document.getElementById('septemberTilesTheme');
        let octoberTilesTheme = document.getElementById('octoberTilesTheme');
        let novemberTilesTheme = document.getElementById('novemberTilesTheme');
        let decemberTilesTheme = document.getElementById('decemberTilesTheme');

        $http.get(`/${tileMonth}/${currentUserId}`)
        .then(tilesData=>{
          let tiles = tilesData.data;
          if (tiles.length > 0) {

            switch(tileMonth) {
              case('january_tilesbyuser'):
                for (let i = 0; i < tiles.length; i++) {
                  tiles[i].randomDate = Math.floor(Math.random() * 31) + 1;
                  toggle[tiles[i].id] = false;
                }
                if (tiles[0].theme !== '') {
                  januaryTilesTheme.innerHTML = 'Theme: ' + tiles[0].theme;
                  januaryTilesTheme.setAttribute("style", "display: initial;");
                }
                vm.janDefaultTiles = tiles.filter(square=>{
                  return(square.type === 'default');
                });
                vm.janWeekTiles = tiles.filter(square=>{
                  return(square.type === 'week');
                });
                vm.janMTWTTiles = tiles.filter(square=>{
                  return(square.type === 'mtwt');
                });
                vm.janFridayTiles = tiles.filter(square=>{
                  return(square.type === 'friday');
                });
                vm.janSaturdayTiles = tiles.filter(square=>{
                  return(square.type === 'saturday');
                });
                vm.janSundayTiles = tiles.filter(square=>{
                  return(square.type === 'sunday');
                });
                vm.janHolidayTiles = tiles.filter(square=>{
                  return(square.type === 'holiday');
                });
                break;
              case('february_tilesbyuser'):
                for (let i = 0; i < tiles.length; i++) {
                  tiles[i].randomDate = Math.floor(Math.random() * 29) + 1;
                  toggle[tiles[i].id] = false;
                }
                if (tiles[0].theme !== '') {
                  februaryTilesTheme.innerHTML = 'Theme: ' + tiles[0].theme;
                  februaryTilesTheme.setAttribute("style", "display: initial;");
                }
                vm.febDefaultTiles = tiles.filter(square=>{
                  return(square.type === 'default');
                });
                vm.febWeekTiles = tiles.filter(square=>{
                  return(square.type === 'week');
                });
                vm.febMTWTTiles = tiles.filter(square=>{
                  return(square.type === 'mtwt');
                });
                vm.febFridayTiles = tiles.filter(square=>{
                  return(square.type === 'friday');
                });
                vm.febSaturdayTiles = tiles.filter(square=>{
                  return(square.type === 'saturday');
                });
                vm.febSundayTiles = tiles.filter(square=>{
                  return(square.type === 'sunday');
                });
                vm.febHolidayTiles = tiles.filter(square=>{
                  return(square.type === 'holiday');
                });
                break;
              case('march_tilesbyuser'):
                for (let i = 0; i < tiles.length; i++) {
                  tiles[i].randomDate = Math.floor(Math.random() * 31) + 1;
                  toggle[tiles[i].id] = false;
                }
                if (tiles[0].theme !== '') {
                  marchTilesTheme.innerHTML = 'Theme: ' + tiles[0].theme;
                  marchTilesTheme.setAttribute("style", "display: initial;");
                }
                vm.marDefaultTiles = tiles.filter(square=>{
                  return(square.type === 'default');
                });
                vm.marWeekTiles = tiles.filter(square=>{
                  return(square.type === 'week');
                });
                vm.marMTWTTiles = tiles.filter(square=>{
                  return(square.type === 'mtwt');
                });
                vm.marFridayTiles = tiles.filter(square=>{
                  return(square.type === 'friday');
                });
                vm.marSaturdayTiles = tiles.filter(square=>{
                  return(square.type === 'saturday');
                });
                vm.marSundayTiles = tiles.filter(square=>{
                  return(square.type === 'sunday');
                });
                vm.marHolidayTiles = tiles.filter(square=>{
                  return(square.type === 'holiday');
                });
                break;
              case('april_tilesbyuser'):
                for (let i = 0; i < tiles.length; i++) {
                  tiles[i].randomDate = Math.floor(Math.random() * 30) + 1;
                  toggle[tiles[i].id] = false;
                }
                if (tiles[0].theme !== '') {
                  aprilTilesTheme.innerHTML = 'Theme: ' + tiles[0].theme;
                  aprilTilesTheme.setAttribute("style", "display: initial;");
                }
                vm.aprDefaultTiles = tiles.filter(square=>{
                  return(square.type === 'default');
                });
                vm.aprWeekTiles = tiles.filter(square=>{
                  return(square.type === 'week');
                });
                vm.aprMTWTTiles = tiles.filter(square=>{
                  return(square.type === 'mtwt');
                });
                vm.aprFridayTiles = tiles.filter(square=>{
                  return(square.type === 'friday');
                });
                vm.aprSaturdayTiles = tiles.filter(square=>{
                  return(square.type === 'saturday');
                });
                vm.aprSundayTiles = tiles.filter(square=>{
                  return(square.type === 'sunday');
                });
                vm.aprHolidayTiles = tiles.filter(square=>{
                  return(square.type === 'holiday');
                });
                break;
              case('may_tilesbyuser'):
                for (let i = 0; i < tiles.length; i++) {
                  tiles[i].randomDate = Math.floor(Math.random() * 31) + 1;
                  toggle[tiles[i].id] = false;
                }
                if (tiles[0].theme !== '') {
                  mayTilesTheme.innerHTML = 'Theme: ' + tiles[0].theme;
                  mayTilesTheme.setAttribute("style", "display: initial;");
                }
                vm.mayDefaultTiles = tiles.filter(square=>{
                  return(square.type === 'default');
                });
                vm.mayWeekTiles = tiles.filter(square=>{
                  return(square.type === 'week');
                });
                vm.mayMTWTTiles = tiles.filter(square=>{
                  return(square.type === 'mtwt');
                });
                vm.mayFridayTiles = tiles.filter(square=>{
                  return(square.type === 'friday');
                });
                vm.maySaturdayTiles = tiles.filter(square=>{
                  return(square.type === 'saturday');
                });
                vm.maySundayTiles = tiles.filter(square=>{
                  return(square.type === 'sunday');
                });
                vm.mayHolidayTiles = tiles.filter(square=>{
                  return(square.type === 'holiday');
                });
                break;
              case('june_tilesbyuser'):
                for (let i = 0; i < tiles.length; i++) {
                  tiles[i].randomDate = Math.floor(Math.random() * 30) + 1;
                  toggle[tiles[i].id] = false;
                }
                if (tiles[0].theme !== '') {
                  juneTilesTheme.innerHTML = 'Theme: ' + tiles[0].theme;
                  juneTilesTheme.setAttribute("style", "display: initial;");
                }
                vm.junDefaultTiles = tiles.filter(square=>{
                  return(square.type === 'default');
                });
                vm.junWeekTiles = tiles.filter(square=>{
                  return(square.type === 'week');
                });
                vm.junMTWTTiles = tiles.filter(square=>{
                  return(square.type === 'mtwt');
                });
                vm.junFridayTiles = tiles.filter(square=>{
                  return(square.type === 'friday');
                });
                vm.junSaturdayTiles = tiles.filter(square=>{
                  return(square.type === 'saturday');
                });
                vm.junSundayTiles = tiles.filter(square=>{
                  return(square.type === 'sunday');
                });
                vm.junHolidayTiles = tiles.filter(square=>{
                  return(square.type === 'holiday');
                });
                break;
              case('july_tilesbyuser'):
                for (let i = 0; i < tiles.length; i++) {
                  tiles[i].randomDate = Math.floor(Math.random() * 31) + 1;
                  toggle[tiles[i].id] = false;
                }
                if (tiles[0].theme !== '') {
                  julyTilesTheme.innerHTML = 'Theme: ' + tiles[0].theme;
                  julyTilesTheme.setAttribute("style", "display: initial;");
                }
                vm.julDefaultTiles = tiles.filter(square=>{
                  return(square.type === 'default');
                });
                vm.julWeekTiles = tiles.filter(square=>{
                  return(square.type === 'week');
                });
                vm.julMTWTTiles = tiles.filter(square=>{
                  return(square.type === 'mtwt');
                });
                vm.julFridayTiles = tiles.filter(square=>{
                  return(square.type === 'friday');
                });
                vm.julSaturdayTiles = tiles.filter(square=>{
                  return(square.type === 'saturday');
                });
                vm.julSundayTiles = tiles.filter(square=>{
                  return(square.type === 'sunday');
                });
                vm.julHolidayTiles = tiles.filter(square=>{
                  return(square.type === 'holiday');
                });
                break;
              case('august_tilesbyuser'):
                for (let i = 0; i < tiles.length; i++) {
                  tiles[i].randomDate = Math.floor(Math.random() * 31) + 1;
                  toggle[tiles[i].id] = false;
                }
                if (tiles[0].theme !== '') {
                  augustTilesTheme.innerHTML = 'Theme: ' + tiles[0].theme;
                  augustTilesTheme.setAttribute("style", "display: initial;");
                }
                vm.augDefaultTiles = tiles.filter(square=>{
                  return(square.type === 'default');
                });
                vm.augWeekTiles = tiles.filter(square=>{
                  return(square.type === 'week');
                });
                vm.augMTWTTiles = tiles.filter(square=>{
                  return(square.type === 'mtwt');
                });
                vm.augFridayTiles = tiles.filter(square=>{
                  return(square.type === 'friday');
                });
                vm.augSaturdayTiles = tiles.filter(square=>{
                  return(square.type === 'saturday');
                });
                vm.augSundayTiles = tiles.filter(square=>{
                  return(square.type === 'sunday');
                });
                vm.augHolidayTiles = tiles.filter(square=>{
                  return(square.type === 'holiday');
                });
                break;
              case('september_tilesbyuser'):
                for (let i = 0; i < tiles.length; i++) {
                  tiles[i].randomDate = Math.floor(Math.random() * 30) + 1;
                  toggle[tiles[i].id] = false;
                }
                if (tiles[0].theme !== '') {
                  septemberTilesTheme.innerHTML = 'Theme: ' + tiles[0].theme;
                  septemberTilesTheme.setAttribute("style", "display: initial;");
                }
                vm.sepDefaultTiles = tiles.filter(square=>{
                  return(square.type === 'default');
                });
                vm.sepWeekTiles = tiles.filter(square=>{
                  return(square.type === 'week');
                });
                vm.sepMTWTTiles = tiles.filter(square=>{
                  return(square.type === 'mtwt');
                });
                vm.sepFridayTiles = tiles.filter(square=>{
                  return(square.type === 'friday');
                });
                vm.sepSaturdayTiles = tiles.filter(square=>{
                  return(square.type === 'saturday');
                });
                vm.sepSundayTiles = tiles.filter(square=>{
                  return(square.type === 'sunday');
                });
                vm.sepHolidayTiles = tiles.filter(square=>{
                  return(square.type === 'holiday');
                });
                break;
              case('october_tilesbyuser'):
                for (let i = 0; i < tiles.length; i++) {
                  tiles[i].randomDate = Math.floor(Math.random() * 31) + 1;
                  toggle[tiles[i].id] = false;
                }
                if (tiles[0].theme !== '') {
                  octoberTilesTheme.innerHTML = 'Theme: ' + tiles[0].theme;
                  octoberTilesTheme.setAttribute("style", "display: initial;");
                }
                vm.octDefaultTiles = tiles.filter(square=>{
                  return(square.type === 'default');
                });
                vm.octWeekTiles = tiles.filter(square=>{
                  return(square.type === 'week');
                });
                vm.octMTWTTiles = tiles.filter(square=>{
                  return(square.type === 'mtwt');
                });
                vm.octFridayTiles = tiles.filter(square=>{
                  return(square.type === 'friday');
                });
                vm.octSaturdayTiles = tiles.filter(square=>{
                  return(square.type === 'saturday');
                });
                vm.octSundayTiles = tiles.filter(square=>{
                  return(square.type === 'sunday');
                });
                vm.octHolidayTiles = tiles.filter(square=>{
                  return(square.type === 'holiday');
                });
                break;
              case('november_tilesbyuser'):
                for (let i = 0; i < tiles.length; i++) {
                  tiles[i].randomDate = Math.floor(Math.random() * 30) + 1;
                  toggle[tiles[i].id] = false;
                }
                if (tiles[0].theme !== '') {
                  novemberTilesTheme.innerHTML = 'Theme: ' + tiles[0].theme;
                  novemberTilesTheme.setAttribute("style", "display: initial;");
                }
                vm.novDefaultTiles = tiles.filter(square=>{
                  return(square.type === 'default');
                });
                vm.novWeekTiles = tiles.filter(square=>{
                  return(square.type === 'week');
                });
                vm.novMTWTTiles = tiles.filter(square=>{
                  return(square.type === 'mtwt');
                });
                vm.novFridayTiles = tiles.filter(square=>{
                  return(square.type === 'friday');
                });
                vm.novSaturdayTiles = tiles.filter(square=>{
                  return(square.type === 'saturday');
                });
                vm.novSundayTiles = tiles.filter(square=>{
                  return(square.type === 'sunday');
                });
                vm.novHolidayTiles = tiles.filter(square=>{
                  return(square.type === 'holiday');
                });
                break;
              case('december_tilesbyuser'):
                for (let i = 0; i < tiles.length; i++) {
                  tiles[i].randomDate = Math.floor(Math.random() * 31) + 1;
                  toggle[tiles[i].id] = false;
                }
                if (tiles[0].theme !== '') {
                  decemberTilesTheme.innerHTML = 'Theme: ' + tiles[0].theme;
                  decemberTilesTheme.setAttribute("style", "display: initial;");
                }
                vm.decDefaultTiles = tiles.filter(square=>{
                  return(square.type === 'default');
                });
                vm.decWeekTiles = tiles.filter(square=>{
                  return(square.type === 'week');
                });
                vm.decMTWTTiles = tiles.filter(square=>{
                  return(square.type === 'mtwt');
                });
                vm.decFridayTiles = tiles.filter(square=>{
                  return(square.type === 'friday');
                });
                vm.decSaturdayTiles = tiles.filter(square=>{
                  return(square.type === 'saturday');
                });
                vm.decSundayTiles = tiles.filter(square=>{
                  return(square.type === 'sunday');
                });
                vm.decHolidayTiles = tiles.filter(square=>{
                  return(square.type === 'holiday');
                });
                break;
              default:
                console.log('month not supported');
            }
          }
        });
      }

      function toggleTilesCurratorMonth(month) {
        let januaryTilesCurratorToggleDiv = document.getElementById('januaryTilesCurratorToggleDiv');
        let januaryTilesCurratorDisplay = document.getElementById('januaryTilesCurratorDisplay');
        let februaryTilesCurratorToggleDiv = document.getElementById('februaryTilesCurratorToggleDiv');
        let februaryTilesCurratorDisplay = document.getElementById('februaryTilesCurratorDisplay');
        let marchTilesCurratorToggleDiv = document.getElementById('marchTilesCurratorToggleDiv');
        let marchTilesCurratorDisplay = document.getElementById('marchTilesCurratorDisplay');
        let aprilTilesCurratorToggleDiv = document.getElementById('aprilTilesCurratorToggleDiv');
        let aprilTilesCurratorDisplay = document.getElementById('aprilTilesCurratorDisplay');
        let mayTilesCurratorToggleDiv = document.getElementById('mayTilesCurratorToggleDiv');
        let mayTilesCurratorDisplay = document.getElementById('mayTilesCurratorDisplay');
        let juneTilesCurratorToggleDiv = document.getElementById('juneTilesCurratorToggleDiv');
        let juneTilesCurratorDisplay = document.getElementById('juneTilesCurratorDisplay');
        let julyTilesCurratorToggleDiv = document.getElementById('julyTilesCurratorToggleDiv');
        let julyTilesCurratorDisplay = document.getElementById('julyTilesCurratorDisplay');
        let augustTilesCurratorToggleDiv = document.getElementById('augustTilesCurratorToggleDiv');
        let augustTilesCurratorDisplay = document.getElementById('augustTilesCurratorDisplay');
        let septemberTilesCurratorToggleDiv = document.getElementById('septemberTilesCurratorToggleDiv');
        let septemberTilesCurratorDisplay = document.getElementById('septemberTilesCurratorDisplay');
        let octoberTilesCurratorToggleDiv = document.getElementById('octoberTilesCurratorToggleDiv');
        let octoberTilesCurratorDisplay = document.getElementById('octoberTilesCurratorDisplay');
        let novemberTilesCurratorToggleDiv = document.getElementById('novemberTilesCurratorToggleDiv');
        let novemberTilesCurratorDisplay = document.getElementById('novemberTilesCurratorDisplay');
        let decemberTilesCurratorToggleDiv = document.getElementById('decemberTilesCurratorToggleDiv');
        let decemberTilesCurratorDisplay = document.getElementById('decemberTilesCurratorDisplay');

        switch(month) {
          case('January'):
            januaryTilesCurratorToggleDiv.setAttribute("style", "display: none;");
            januaryTilesCurratorDisplay.setAttribute("style", "display: initial;");
            februaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            marchTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchTilesCurratorDisplay.setAttribute("style", "display: none;");
            aprilTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilTilesCurratorDisplay.setAttribute("style", "display: none;");
            mayTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayTilesCurratorDisplay.setAttribute("style", "display: none;");
            juneTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneTilesCurratorDisplay.setAttribute("style", "display: none;");
            julyTilesCurratorToggleDiv.setAttribute("style", "display: intitial;");
            julyTilesCurratorDisplay.setAttribute("style", "display: none;");
            augustTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustTilesCurratorDisplay.setAttribute("style", "display: none;");
            septemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            octoberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberTilesCurratorDisplay.setAttribute("style", "display: none;");
            novemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            decemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            displayTiles('january_tilesbyuser');
            break;
          case('February'):
            januaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            februaryTilesCurratorToggleDiv.setAttribute("style", "display: none;");
            februaryTilesCurratorDisplay.setAttribute("style", "display: initial;");
            marchTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchTilesCurratorDisplay.setAttribute("style", "display: none;");
            aprilTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilTilesCurratorDisplay.setAttribute("style", "display: none;");
            mayTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayTilesCurratorDisplay.setAttribute("style", "display: none;");
            juneTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneTilesCurratorDisplay.setAttribute("style", "display: none;");
            julyTilesCurratorToggleDiv.setAttribute("style", "display: intitial;");
            julyTilesCurratorDisplay.setAttribute("style", "display: none;");
            augustTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustTilesCurratorDisplay.setAttribute("style", "display: none;");
            septemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            octoberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberTilesCurratorDisplay.setAttribute("style", "display: none;");
            novemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            decemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            displayTiles('february_tilesbyuser');
            break;
          case('March'):
            januaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            februaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            marchTilesCurratorToggleDiv.setAttribute("style", "display: none;");
            marchTilesCurratorDisplay.setAttribute("style", "display: initial;");
            aprilTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilTilesCurratorDisplay.setAttribute("style", "display: none;");
            mayTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayTilesCurratorDisplay.setAttribute("style", "display: none;");
            juneTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneTilesCurratorDisplay.setAttribute("style", "display: none;");
            julyTilesCurratorToggleDiv.setAttribute("style", "display: intitial;");
            julyTilesCurratorDisplay.setAttribute("style", "display: none;");
            augustTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustTilesCurratorDisplay.setAttribute("style", "display: none;");
            septemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            octoberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberTilesCurratorDisplay.setAttribute("style", "display: none;");
            novemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            decemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            displayTiles('march_tilesbyuser');
            break;
          case('April'):
            januaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            februaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            marchTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchTilesCurratorDisplay.setAttribute("style", "display: none;");
            aprilTilesCurratorToggleDiv.setAttribute("style", "display: none;");
            aprilTilesCurratorDisplay.setAttribute("style", "display: initial;");
            mayTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayTilesCurratorDisplay.setAttribute("style", "display: none;");
            juneTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneTilesCurratorDisplay.setAttribute("style", "display: none;");
            julyTilesCurratorToggleDiv.setAttribute("style", "display: intitial;");
            julyTilesCurratorDisplay.setAttribute("style", "display: none;");
            augustTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustTilesCurratorDisplay.setAttribute("style", "display: none;");
            septemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            octoberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberTilesCurratorDisplay.setAttribute("style", "display: none;");
            novemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            decemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            displayTiles('april_tilesbyuser');
            break;
          case('May'):
            januaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            februaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            marchTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchTilesCurratorDisplay.setAttribute("style", "display: none;");
            aprilTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilTilesCurratorDisplay.setAttribute("style", "display: none;");
            mayTilesCurratorToggleDiv.setAttribute("style", "display: none;");
            mayTilesCurratorDisplay.setAttribute("style", "display: initial;");
            juneTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneTilesCurratorDisplay.setAttribute("style", "display: none;");
            julyTilesCurratorToggleDiv.setAttribute("style", "display: intitial;");
            julyTilesCurratorDisplay.setAttribute("style", "display: none;");
            augustTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustTilesCurratorDisplay.setAttribute("style", "display: none;");
            septemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            octoberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberTilesCurratorDisplay.setAttribute("style", "display: none;");
            novemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            decemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            displayTiles('may_tilesbyuser');
            break;
          case('June'):
            januaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            februaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            marchTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchTilesCurratorDisplay.setAttribute("style", "display: none;");
            aprilTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilTilesCurratorDisplay.setAttribute("style", "display: none;");
            mayTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayTilesCurratorDisplay.setAttribute("style", "display: none;");
            juneTilesCurratorToggleDiv.setAttribute("style", "display: none;");
            juneTilesCurratorDisplay.setAttribute("style", "display: initial;");
            julyTilesCurratorToggleDiv.setAttribute("style", "display: intitial;");
            julyTilesCurratorDisplay.setAttribute("style", "display: none;");
            augustTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustTilesCurratorDisplay.setAttribute("style", "display: none;");
            septemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            octoberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberTilesCurratorDisplay.setAttribute("style", "display: none;");
            novemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            decemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            displayTiles('june_tilesbyuser');
            break;
          case('July'):
            januaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            februaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            marchTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchTilesCurratorDisplay.setAttribute("style", "display: none;");
            aprilTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilTilesCurratorDisplay.setAttribute("style", "display: none;");
            mayTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayTilesCurratorDisplay.setAttribute("style", "display: none;");
            juneTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneTilesCurratorDisplay.setAttribute("style", "display: none;");
            julyTilesCurratorToggleDiv.setAttribute("style", "display: none;");
            julyTilesCurratorDisplay.setAttribute("style", "display: initial;");
            augustTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustTilesCurratorDisplay.setAttribute("style", "display: none;");
            septemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            octoberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberTilesCurratorDisplay.setAttribute("style", "display: none;");
            novemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            decemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            displayTiles('july_tilesbyuser');
            break;
          case('August'):
            januaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            februaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            marchTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchTilesCurratorDisplay.setAttribute("style", "display: none;");
            aprilTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilTilesCurratorDisplay.setAttribute("style", "display: none;");
            mayTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayTilesCurratorDisplay.setAttribute("style", "display: none;");
            juneTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneTilesCurratorDisplay.setAttribute("style", "display: none;");
            julyTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyTilesCurratorDisplay.setAttribute("style", "display: none;");
            augustTilesCurratorToggleDiv.setAttribute("style", "display: none;");
            augustTilesCurratorDisplay.setAttribute("style", "display: initial;");
            septemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            octoberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberTilesCurratorDisplay.setAttribute("style", "display: none;");
            novemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            decemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            displayTiles('august_tilesbyuser');
            break;
          case('September'):
            januaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            februaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            marchTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchTilesCurratorDisplay.setAttribute("style", "display: none;");
            aprilTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilTilesCurratorDisplay.setAttribute("style", "display: none;");
            mayTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayTilesCurratorDisplay.setAttribute("style", "display: none;");
            juneTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneTilesCurratorDisplay.setAttribute("style", "display: none;");
            julyTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyTilesCurratorDisplay.setAttribute("style", "display: none;");
            augustTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustTilesCurratorDisplay.setAttribute("style", "display: none;");
            septemberTilesCurratorToggleDiv.setAttribute("style", "display: none;");
            septemberTilesCurratorDisplay.setAttribute("style", "display: initial;");
            octoberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberTilesCurratorDisplay.setAttribute("style", "display: none;");
            novemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            decemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            displayTiles('september_tilesbyuser');
            break;
          case('October'):
            januaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            februaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            marchTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchTilesCurratorDisplay.setAttribute("style", "display: none;");
            aprilTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilTilesCurratorDisplay.setAttribute("style", "display: none;");
            mayTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayTilesCurratorDisplay.setAttribute("style", "display: none;");
            juneTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneTilesCurratorDisplay.setAttribute("style", "display: none;");
            julyTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyTilesCurratorDisplay.setAttribute("style", "display: none;");
            augustTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustTilesCurratorDisplay.setAttribute("style", "display: none;");
            septemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            octoberTilesCurratorToggleDiv.setAttribute("style", "display: none;");
            octoberTilesCurratorDisplay.setAttribute("style", "display: initial;");
            novemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            decemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            displayTiles('october_tilesbyuser');
            break;
          case('November'):
            januaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            februaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            marchTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchTilesCurratorDisplay.setAttribute("style", "display: none;");
            aprilTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilTilesCurratorDisplay.setAttribute("style", "display: none;");
            mayTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayTilesCurratorDisplay.setAttribute("style", "display: none;");
            juneTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneTilesCurratorDisplay.setAttribute("style", "display: none;");
            julyTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyTilesCurratorDisplay.setAttribute("style", "display: none;");
            augustTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustTilesCurratorDisplay.setAttribute("style", "display: none;");
            septemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            octoberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberTilesCurratorDisplay.setAttribute("style", "display: none;");
            novemberTilesCurratorToggleDiv.setAttribute("style", "display: none;");
            novemberTilesCurratorDisplay.setAttribute("style", "display: initial;");
            decemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            displayTiles('november_tilesbyuser');
            break;
          case('December'):
            januaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            februaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryTilesCurratorDisplay.setAttribute("style", "display: none;");
            marchTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchTilesCurratorDisplay.setAttribute("style", "display: none;");
            aprilTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilTilesCurratorDisplay.setAttribute("style", "display: none;");
            mayTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayTilesCurratorDisplay.setAttribute("style", "display: none;");
            juneTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneTilesCurratorDisplay.setAttribute("style", "display: none;");
            julyTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyTilesCurratorDisplay.setAttribute("style", "display: none;");
            augustTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustTilesCurratorDisplay.setAttribute("style", "display: none;");
            septemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            octoberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberTilesCurratorDisplay.setAttribute("style", "display: none;");
            novemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberTilesCurratorDisplay.setAttribute("style", "display: none;");
            decemberTilesCurratorToggleDiv.setAttribute("style", "display: none;");
            decemberTilesCurratorDisplay.setAttribute("style", "display: initial;");
            displayTiles('december_tilesbyuser');
            break;
          default:
            console.log('month not supported');
        }
      }

      function removeBlankTile(tablePath, tileId) {
        let path = tablePath.slice(0, tablePath.indexOf('byuser'));
        $http.delete(`/${path}/${tileId}`)
        .then(()=>{
          console.log('tile removed');
        });

      }

      function scourForBlankTiles(tablePath) {
        $http.get(`/${tablePath}/${currentUserId}`)
        .then(userTilesData=>{
          let userTiles = userTilesData.data;
          if (userTiles.length > 0) {
            for (let i = 0; i < userTiles.length; i++) {
              if (userTiles[i].src_string === '') {
                removeBlankTile(tablePath, userTiles[i].id);
              }
            }
          }
        });
      }

      function cleanUpBlankTiles() {
        let tilesTables = [ 'january_tilesbyuser', 'february_tilesbyuser', 'march_tilesbyuser', 'april_tilesbyuser', 'may_tilesbyuser', 'june_tilesbyuser', 'july_tilesbyuser', 'august_tilesbyuser', 'september_tilesbyuser', 'october_tilesbyuser', 'november_tilesbyuser', 'december_tilesbyuser' ];
        for (let i = 0; i < tilesTables.length; i++) {
          scourForBlankTiles(tilesTables[i]);
        }
      }

      function closeTilesCurratorManager() {
        let tilesCuratorManager = document.getElementById('tilesCuratorManager');
        let tilesCurratorManagerDiv = document.getElementById('tilesCurratorManagerDiv');
        let tilesCurratorZone = document.getElementById('tilesCurratorZone');
        let januaryTilesCurratorToggleDiv = document.getElementById('januaryTilesCurratorToggleDiv');
        let januaryTilesCurratorDisplay = document.getElementById('januaryTilesCurratorDisplay');
        let februaryTilesCurratorToggleDiv = document.getElementById('februaryTilesCurratorToggleDiv');
        let februaryTilesCurratorDisplay = document.getElementById('februaryTilesCurratorDisplay');
        let marchTilesCurratorToggleDiv = document.getElementById('marchTilesCurratorToggleDiv');
        let marchTilesCurratorDisplay = document.getElementById('marchTilesCurratorDisplay');
        let aprilTilesCurratorToggleDiv = document.getElementById('aprilTilesCurratorToggleDiv');
        let aprilTilesCurratorDisplay = document.getElementById('aprilTilesCurratorDisplay');
        let mayTilesCurratorToggleDiv = document.getElementById('mayTilesCurratorToggleDiv');
        let mayTilesCurratorDisplay = document.getElementById('mayTilesCurratorDisplay');
        let juneTilesCurratorToggleDiv = document.getElementById('juneTilesCurratorToggleDiv');
        let juneTilesCurratorDisplay = document.getElementById('juneTilesCurratorDisplay');
        let julyTilesCurratorToggleDiv = document.getElementById('julyTilesCurratorToggleDiv');
        let julyTilesCurratorDisplay = document.getElementById('julyTilesCurratorDisplay');
        let augustTilesCurratorToggleDiv = document.getElementById('augustTilesCurratorToggleDiv');
        let augustTilesCurratorDisplay = document.getElementById('augustTilesCurratorDisplay');
        let septemberTilesCurratorToggleDiv = document.getElementById('septemberTilesCurratorToggleDiv');
        let septemberTilesCurratorDisplay = document.getElementById('septemberTilesCurratorDisplay');
        let octoberTilesCurratorToggleDiv = document.getElementById('octoberTilesCurratorToggleDiv');
        let octoberTilesCurratorDisplay = document.getElementById('octoberTilesCurratorDisplay');
        let novemberTilesCurratorToggleDiv = document.getElementById('novemberTilesCurratorToggleDiv');
        let novemberTilesCurratorDisplay = document.getElementById('novemberTilesCurratorDisplay');
        let decemberTilesCurratorToggleDiv = document.getElementById('decemberTilesCurratorToggleDiv');
        let decemberTilesCurratorDisplay = document.getElementById('decemberTilesCurratorDisplay');

        tilesCuratorManager.setAttribute("style", "visibility: visible;");
        tilesCurratorManagerDiv.setAttribute("style", "display: none;");
        tilesCurratorZone.setAttribute("style", "opacity: 1.0;");
        januaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
        januaryTilesCurratorDisplay.setAttribute("style", "display: none;");
        februaryTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
        februaryTilesCurratorDisplay.setAttribute("style", "display: none;");
        marchTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
        marchTilesCurratorDisplay.setAttribute("style", "display: none;");
        aprilTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
        aprilTilesCurratorDisplay.setAttribute("style", "display: none;");
        mayTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
        mayTilesCurratorDisplay.setAttribute("style", "display: none;");
        juneTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
        juneTilesCurratorDisplay.setAttribute("style", "display: none;");
        julyTilesCurratorToggleDiv.setAttribute("style", "display: intitial;");
        julyTilesCurratorDisplay.setAttribute("style", "display: none;");
        augustTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
        augustTilesCurratorDisplay.setAttribute("style", "display: none;");
        septemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
        septemberTilesCurratorDisplay.setAttribute("style", "display: none;");
        octoberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
        octoberTilesCurratorDisplay.setAttribute("style", "display: none;");
        novemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
        novemberTilesCurratorDisplay.setAttribute("style", "display: none;");
        decemberTilesCurratorToggleDiv.setAttribute("style", "display: initial;");
        decemberTilesCurratorDisplay.setAttribute("style", "display: none;");

      }

      function tilesCurratorManagement() {
        let tilesCuratorManager = document.getElementById('tilesCuratorManager');
        let tilesCurratorManagerDiv = document.getElementById('tilesCurratorManagerDiv');
        let tilesCurratorZone = document.getElementById('tilesCurratorZone');

        tilesCuratorManager.setAttribute("style", "visibility: hidden;");
        tilesCurratorManagerDiv.setAttribute("style", "display: initial;");
        tilesCurratorZone.setAttribute("style", "opacity: 0.3;");
      }

      function tasksReportDone() {
        let reportForTasks = document.getElementById('reportForTasks');
        let userTasksEditingDiv = document.getElementById('userTasksEditingDiv');
        let tasksManagerDone = document.getElementById("tasksManagerDone");

        reportForTasks.setAttribute("style", "display: none;");
        userTasksEditingDiv.setAttribute("style", "display: none;");
        tasksManagerDone.setAttribute("style", "visibility: visible;");
      }

      function overdueTaskCheck(task) {
        let checkDate = new Date();
        let taskDate = new Date(task.due_date);

        if (checkDate.getFullYear() < taskDate.getFullYear()) {
          return false;
        } else if (checkDate.getFullYear() > taskDate.getFullYear()) {
          return true;
        } else if (checkDate.getMonth() < taskDate.getMonth()) {
          return false;
        } else if (checkDate.getMonth() > taskDate.getMonth()) {
          return true;
        } else if (checkDate.getDate() < taskDate.getDate()) {
          return false;
        } else if (checkDate.getDate() > taskDate.getDate()) {
          return true;
        } else {
          return false;
        }
      }

      function whichDate(d1Date, d2Date) {
        let d1 = new Date(d1Date);
        let d2 = new Date(d2Date);

        if (d1.getFullYear() < d2.getFullYear()) {
          return -1;
        } else if (d1.getFullYear() > d2.getFullYear()) {
          return 1;
        } else if (d1.getMonth() < d2.getMonth()) {
          return -1;
        } else if (d1.getMonth() > d2.getMonth()) {
          return 1;
        } else if (d1.getDate() < d2.getDate()) {
          return -1;
        } else if (d1.getDate() > d2.getDate()) {
          return 1;
        } else {
          return 0;
        }
      }

      function tasksReport() {
        let reportForTasks = document.getElementById('reportForTasks');
        let userTasksEditingDiv = document.getElementById('userTasksEditingDiv');
        let tasksManagerDone = document.getElementById("tasksManagerDone");

        $http.get(`/tasksbyuser/${currentUserId}`)
        .then(tasksListData=>{
          let tasksList = tasksListData.data;
          for (let i = 0; i < tasksList.length; i++) {
            tasksList[i].cleanDueDate = cleanDateHoliday(tasksList[i].due_date);
            if (tasksList[i].is_completed) {
              tasksList[i].cleanCompletedDate = cleanDateHoliday(tasksList[i].completed_date);
            }
          }
          let pending = tasksList.filter(task=>{
            return(!task.is_completed);
          });
          pending = pending.sort((a, b)=>{
            return(whichDate(a.due_date, b.due_date));
          });
          let complete = tasksList.filter(task=>{
            return(task.is_completed);
          });
          complete = complete.sort((a, b)=>{
            return(whichDate(a.completed_date, b.completed_date));
          });
          let overdue = pending.filter(task=>{
            return(overdueTaskCheck(task));
          });
          vm.taskReporter = [];
          vm.taskReporter[0] = {};
          vm.taskReporter[0].totalTasks = tasksList.length;
          vm.taskReporter[0].totalComplete = complete.length;
          vm.taskReporter[0].totalPending = pending.length;
          vm.taskReporter[0].overdue = overdue.length;
          vm.pendingTasks = pending;
          vm.completedTasks = complete;
        });

        reportForTasks.setAttribute("style", "display: initial;");
        userTasksEditingDiv.setAttribute("style", "display: none;");
        tasksManagerDone.setAttribute("style", "visibility: hidden;");
      }

      function addNewGoal() {

        $http.get(`/blocktypesbyuser/${currentUserId}`)
        .then(blocksData=>{
          let blocks = blocksData.data;

          let subObj = {
            user_id: currentUserId,
            block_type: blocks[0].id,
            weekly_goal: 0.0
          };

          $http.post('/goals', subObj)
          .then(goalData=>{
            let goal = goalData.data[0];
            editGoal(goal.id);
          });
        });

      }

      function deleteObservance(observanceId) {
        let observancesManagementDiv = document.getElementById('observancesManagementDiv');
        let userObservancesEditorDiv = document.getElementById('userObservancesEditorDiv');
        let userObservancesDeleteConfirmDiv = document.getElementById('userObservancesDeleteConfirmDiv');
        let observancesManagerDone = document.getElementById('observancesManagerDone');
        let userObservanceDeleteConfirmButtons = document.getElementById('userObservanceDeleteConfirmButtons');
        let userObservanceConfirmYes = document.getElementById('userObservanceConfirmYes');
        if (userObservanceConfirmYes) {
          userObservanceConfirmYes.parentNode.removeChild(userObservanceConfirmYes);
          userObservanceConfirmYes = document.createElement('a');
          userObservanceDeleteConfirmButtons.appendChild(userObservanceConfirmYes);
          userObservanceConfirmYes.id = 'userObservanceConfirmYes';
          userObservanceConfirmYes.className = 'btn';
          userObservanceConfirmYes.innerHTML = 'yes';
          userObservanceConfirmYes.setAttribute("style", "cursor: pointer;");
        }
        let userObservanceConfirmNo = document.getElementById('userObservanceConfirmNo');
        if (userObservanceConfirmNo) {
          userObservanceConfirmNo.parentNode.removeChild(userObservanceConfirmNo);
          userObservanceConfirmNo = document.createElement('a');
          userObservanceDeleteConfirmButtons.appendChild(userObservanceConfirmNo);
          userObservanceConfirmNo.id = 'userObservanceConfirmNo';
          userObservanceConfirmNo.className = 'btn';
          userObservanceConfirmNo.innerHTML = 'no';
          userObservanceConfirmNo.setAttribute("style", "cursor: pointer;");
        }
        let userObservanceDeleteImage = document.getElementById('userObservanceDeleteImage');
        let userObservanceDeleteName = document.getElementById('userObservanceDeleteName');
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
        let userObservanceDeleteDate = document.getElementById('userObservanceDeleteDate');

        $http.get(`/observances/${observanceId}`)
        .then(observeData=>{
          let observe = observeData.data;
          let checkDate = new Date(observe.day_of);

          userObservanceDeleteImage.src = observe.picture;
          userObservanceDeleteName.innerHTML = observe.name;
          userObservanceDeleteDate.innerHTML = checkDate.getDate().toString() + ' ' + months[checkDate.getMonth()];

          userObservanceConfirmYes.addEventListener('click',()=>{
            $http.delete(`/observances/${observanceId}`)
            .then(()=>{
              observancesManagementDiv.setAttribute("style", "display: initial;");
              userObservancesDeleteConfirmDiv.setAttribute("style", "display: none;");
              observanceManager();
            });

          });
          userObservanceConfirmNo.addEventListener('click', ()=>{
            observancesManagementDiv.setAttribute("style", "display: initial;");
            userObservancesDeleteConfirmDiv.setAttribute("style", "display: none;");
            observanceManager();
          });
        });

        observancesManagementDiv.setAttribute("style", "display: none;");
        userObservancesEditorDiv.setAttribute("style", "display: none;");
        userObservancesDeleteConfirmDiv.setAttribute("style", "display: initial;");
        observancesManagerDone.setAttribute("style", "visibility: visible;");
      }

      function purgeArtEntry(monthPath, artId) {
        $http.delete(`/${monthPath}/${artId}`)
        .then(()=>{
          console.log('deleted art');
        });
      }

      function scourTheArtsTablesForEmtpies(monthPath) {
        let getPath = monthPath + 'byuser';
        $http.get(`/${getPath}/${currentUserId}`)
        .then(artTableData=>{
          if (artTableData.data.length > 0) {
            let empties = artTableData.data.filter(art=>{
              return(art.img_path === '');
            });
            if (empties.length >0) {
              for (let i = 0; i < empties.length; i++) {
                purgeArtEntry(monthPath, empties[i].id);
              }
            }
          }
        });
      }

      function purgeEmptyUserArts() {
        scourTheArtsTablesForEmtpies('january_arts');
        scourTheArtsTablesForEmtpies('february_arts');
        scourTheArtsTablesForEmtpies('march_arts');
        scourTheArtsTablesForEmtpies('april_arts');
        scourTheArtsTablesForEmtpies('may_arts');
        scourTheArtsTablesForEmtpies('june_arts');
        scourTheArtsTablesForEmtpies('july_arts');
        scourTheArtsTablesForEmtpies('august_arts');
        scourTheArtsTablesForEmtpies('september_arts');
        scourTheArtsTablesForEmtpies('october_arts');
        scourTheArtsTablesForEmtpies('november_arts');
        scourTheArtsTablesForEmtpies('december_arts');

      }

      function userArtCurratorEditorDone() {
        let userArtCurratorEditorDiv = document.getElementById('userArtCurratorEditorDiv');
        let artCurratorManagerDone = document.getElementById('artCurratorManagerDone');
        purgeEmptyUserArts();

        userArtCurratorEditorDiv.setAttribute("style", "display: none;");
        artCurratorManagerDone.setAttribute("style", "visibility: visible;");
      }

      function handleArtFilterListener(eleCheck, value, artPiece, artMonth, weekday) {
        eleCheck.addEventListener('click', ()=>{
          let subObj = {
            rule: artPiece.rule
          };
          if (eleCheck.checked) {
            subObj.rule[weekday].push(value);
          } else {
            subObj.rule[weekday].splice((subObj.rule[weekday].indexOf(value)), 1);
          }
          $http.patch(`/${artMonth}/${artPiece.id}`, subObj)
          .then(()=>{
            artPiece.rule = subObj.rule;
            displayArts(artMonth + 'byuser');
          });
        });
      }

      function artArrayRandomizer(maxValue, minimumTotal, maximumTotal) {

        let endResult = [];
        let total = Math.floor(Math.random() * (maximumTotal - minimumTotal)) + minimumTotal;
        let randomVal = Math.floor(Math.random() * maxValue) + 1;

        for (let i = 0; i < total; i++) {
          while (endResult.indexOf(randomVal) !== -1) {
            randomVal = Math.floor(Math.random() * maxValue) + 1;
          }
          endResult.push(randomVal);
        }
        return(endResult);
      }

      function displayDaysArray(element, numberDays, rulesArray, artPiece, artMonth, weekday) {
        let eleDiv;
        let eleCheck;
        let eleLabel;

        for (let i = 0; i < numberDays; i++) {
          eleDiv = document.createElement('div');
          element.appendChild(eleDiv);
          eleDiv.className = 'arrayMonthClass';
          eleCheck = document.createElement('input');
          eleDiv.appendChild(eleCheck);
          eleCheck.type = 'checkbox';
          if (rulesArray.indexOf(i + 1) === -1) {
            eleCheck.checked = false;
          } else {
            eleCheck.checked = true;
          }
          eleLabel = document.createElement('p');
          eleDiv.appendChild(eleLabel);
          eleLabel.innerHTML = (i + 1).toString();
          handleArtFilterListener(eleCheck, (i + 1), artPiece, artMonth, weekday);
        }
      }

      function editArtCurrate(artMonth, artId) {
        let userArtCurratorEditorDiv = document.getElementById('userArtCurratorEditorDiv');
        let artCurratorManagerDone = document.getElementById('artCurratorManagerDone');
        let artCurratorEditorTitle = document.getElementById('artCurratorEditorTitle');
        let userArtCuratorEditMonth = document.getElementById('userArtCuratorEditMonth');
        let userArtCuratorFirstEntryTheme = document.getElementById('userArtCuratorFirstEntryTheme');
        let userArtCuratorMonthThemeEntry = document.getElementById('userArtCuratorMonthThemeEntry');
        if (userArtCuratorMonthThemeEntry) {
          userArtCuratorMonthThemeEntry.parentNode.removeChild(userArtCuratorMonthThemeEntry);
          userArtCuratorMonthThemeEntry = document.createElement('input');
          userArtCuratorFirstEntryTheme.appendChild(userArtCuratorMonthThemeEntry);
          userArtCuratorMonthThemeEntry.id = 'userArtCuratorMonthThemeEntry';
          userArtCuratorMonthThemeEntry.type = 'text';
          userArtCuratorMonthThemeEntry.className = 'pure-input-1';
          userArtCuratorMonthThemeEntry.placeholder = 'month art theme';
        }
        let userArtCuratorEditImage = document.getElementById('userArtCuratorEditImage');
        let userArtCurratorImgPathField = document.getElementById('userArtCurratorImgPathField');
        let userArtCurratorURL = document.getElementById('userArtCurratorURL');
        if (userArtCurratorURL) {
          userArtCurratorURL.parentNode.removeChild(userArtCurratorURL);
          userArtCurratorURL = document.createElement('input');
          userArtCurratorImgPathField.appendChild(userArtCurratorURL);
          userArtCurratorURL.id = 'userArtCurratorURL';
          userArtCurratorURL.type = 'text';
          userArtCurratorURL.className = 'pure-input-1';
          userArtCurratorURL.placeholder = 'imageURL';
        }
        let userArtCurratorUploaderButton = document.getElementById('userArtCurratorUploaderButton');
        if (userArtCurratorUploaderButton) {
          userArtCurratorUploaderButton.parentNode.removeChild(userArtCurratorUploaderButton);
          userArtCurratorUploaderButton = document.createElement('a');
          userArtCurratorImgPathField.appendChild(userArtCurratorUploaderButton);
          userArtCurratorUploaderButton.id = 'userArtCurratorUploaderButton';
          userArtCurratorUploaderButton.className = 'btn';
          userArtCurratorUploaderButton.innerHTML = 'upload';
          userArtCurratorUploaderButton.setAttribute("style", "cursor: pointer;");
        }
        let userArtCurratorImageUploaderDiv = document.getElementById('userArtCurratorImageUploaderDiv');
        userArtCurratorImageUploaderDiv.setAttribute("style", "visibility: hidden;");
        let userArtCurratorUploaderSubmit = document.getElementById('userArtCurratorUploaderSubmit');
        if (userArtCurratorUploaderSubmit) {
          userArtCurratorUploaderSubmit.parentNode.removeChild(userArtCurratorUploaderSubmit);
          userArtCurratorUploaderSubmit = document.createElement('a');
          userArtCurratorImageUploaderDiv.appendChild(userArtCurratorUploaderSubmit);
          userArtCurratorUploaderSubmit.id = 'userArtCurratorUploaderSubmit';
          userArtCurratorUploaderSubmit.className = 'btn';
          userArtCurratorUploaderSubmit.innerHTML = 'submit';
          userArtCurratorUploaderSubmit.setAttribute("style", "cursor: pointer;");
        }
        let userArtCurratorUploaderCancel = document.getElementById('userArtCurratorUploaderCancel');
        if (userArtCurratorUploaderCancel) {
          userArtCurratorUploaderCancel.parentNode.removeChild(userArtCurratorUploaderCancel);
          userArtCurratorUploaderCancel = document.createElement('a');
          userArtCurratorImageUploaderDiv.appendChild(userArtCurratorUploaderCancel);
          userArtCurratorUploaderCancel.id = 'userArtCurratorUploaderCancel';
          userArtCurratorUploaderCancel.className = 'btn';
          userArtCurratorUploaderCancel.innerHTML = 'cancel';
          userArtCurratorUploaderCancel.setAttribute("style", "cursor: pointer;");
        }
        let userArtCurratorNewTextFieldsDiv = document.getElementById('userArtCurratorNewTextFieldsDiv');
        let userArtCurratorAddArtist = document.getElementById('userArtCurratorAddArtist');
        if (userArtCurratorAddArtist) {
          userArtCurratorAddArtist.parentNode.removeChild(userArtCurratorAddArtist);
          userArtCurratorAddArtist = document.createElement('input');
          userArtCurratorNewTextFieldsDiv.appendChild(userArtCurratorAddArtist);
          userArtCurratorAddArtist.id = 'userArtCurratorAddArtist';
          userArtCurratorAddArtist.type = 'text';
          userArtCurratorAddArtist.className = 'pure-input-1';
          userArtCurratorAddArtist.placeholder = 'artist';
        }
        let userArtCurratorAddTitle = document.getElementById('userArtCurratorAddTitle');
        if (userArtCurratorAddTitle) {
          userArtCurratorAddTitle.parentNode.removeChild(userArtCurratorAddTitle);
          userArtCurratorAddTitle = document.createElement('input');
          userArtCurratorNewTextFieldsDiv.appendChild(userArtCurratorAddTitle);
          userArtCurratorAddTitle.id = 'userArtCurratorAddTitle';
          userArtCurratorAddTitle.type = 'text';
          userArtCurratorAddTitle.className = 'pure-input-1';
          userArtCurratorAddTitle.placeholder = 'title';
        }
        let userArtCurratorAdderYear = document.getElementById('userArtCurratorAdderYear');
        if (userArtCurratorAdderYear) {
          userArtCurratorAdderYear.parentNode.removeChild(userArtCurratorAdderYear);
          userArtCurratorAdderYear = document.createElement('input');
          userArtCurratorNewTextFieldsDiv.appendChild(userArtCurratorAdderYear);
          userArtCurratorAdderYear.id = 'userArtCurratorAdderYear';
          userArtCurratorAdderYear.type = 'text';
          userArtCurratorAdderYear.className = 'pure-input-1';
          userArtCurratorAdderYear.placeholder = 'year';
        }
        let userArtCurratorRandomButtonDiv = document.getElementById('userArtCurratorRandomButtonDiv');
        let userArtCurratorRandomizeFilterButton = document.getElementById('userArtCurratorRandomizeFilterButton');
        if (userArtCurratorRandomizeFilterButton) {
          userArtCurratorRandomizeFilterButton.parentNode.removeChild(userArtCurratorRandomizeFilterButton);
          userArtCurratorRandomizeFilterButton = document.createElement('button');
          userArtCurratorRandomButtonDiv.appendChild(userArtCurratorRandomizeFilterButton);
          userArtCurratorRandomizeFilterButton.id = 'userArtCurratorRandomizeFilterButton';
          userArtCurratorRandomizeFilterButton.innerHTML = 'Randomize Values';
          userArtCurratorRandomizeFilterButton.setAttribute("style", "background: #3F2E15; background-color: -webkit-linear-gradient(135deg, #3F2E15, #C2AF0A); background: -o-linear-gradient(135deg, #3F2E15, #C2AF0A); background: -moz-linear-gradient(135deg, #3F2E15, #C2AF0A); background: linear-gradient(135deg, #3F2E15, #C2AF0A); margin-left: 16vmin;");
        }
        let numberDays = 0;
        let dayname;
        let userArtCurratorMondayArray = document.getElementById('userArtCurratorMondayArray');
        while(userArtCurratorMondayArray.firstChild) {
          userArtCurratorMondayArray.removeChild(userArtCurratorMondayArray.firstChild);
        }
        dayname = document.createElement('p');
        dayname.innerHTML = 'Mon';
        userArtCurratorMondayArray.appendChild(dayname);
        let userArtCurratorTuesdayArray = document.getElementById('userArtCurratorTuesdayArray');
        while (userArtCurratorTuesdayArray.firstChild) {
          userArtCurratorTuesdayArray.removeChild(userArtCurratorTuesdayArray.firstChild);
        }
        dayname = document.createElement('p');
        dayname.innerHTML = 'Tue';
        userArtCurratorTuesdayArray.appendChild(dayname);
        let userArtCurratorWednesdayArray = document.getElementById('userArtCurratorWednesdayArray');
        while(userArtCurratorWednesdayArray.firstChild) {
          userArtCurratorWednesdayArray.removeChild(userArtCurratorWednesdayArray.firstChild);
        }
        dayname = document.createElement('p');
        dayname.innerHTML = 'Wed';
        userArtCurratorWednesdayArray.appendChild(dayname);
        let userArtCurratorThursdayArray = document.getElementById('userArtCurratorThursdayArray');
        while (userArtCurratorThursdayArray.firstChild) {
          userArtCurratorThursdayArray.removeChild(userArtCurratorThursdayArray.firstChild);
        }
        dayname = document.createElement('p');
        dayname.innerHTML = 'Thu';
        userArtCurratorThursdayArray.appendChild(dayname);
        let userArtCurratorFridayArray = document.getElementById('userArtCurratorFridayArray');
        while (userArtCurratorFridayArray.firstChild) {
          userArtCurratorFridayArray.removeChild(userArtCurratorFridayArray.firstChild);
        }
        dayname = document.createElement('p');
        dayname.innerHTML = 'Fri';
        userArtCurratorFridayArray.appendChild(dayname);
        let userArtCurratorSaturdayArray = document.getElementById('userArtCurratorSaturdayArray');
        while (userArtCurratorSaturdayArray.firstChild) {
          userArtCurratorSaturdayArray.removeChild(userArtCurratorSaturdayArray.firstChild);
        }
        dayname = document.createElement('p');
        dayname.innerHTML = 'Sat';
        userArtCurratorSaturdayArray.appendChild(dayname);
        let userArtCurratorSundayArray = document.getElementById('userArtCurratorSundayArray');
        while (userArtCurratorSundayArray.firstChild) {
          userArtCurratorSundayArray.removeChild(userArtCurratorSundayArray.firstChild);
        }
        dayname = document.createElement('p');
        dayname.innerHTML = 'Sun';
        userArtCurratorSundayArray.appendChild(dayname);



        switch(artMonth) {
          case('january_arts'):
            artCurratorEditorTitle.innerHTML = 'Art: January';
            numberDays = 31;
            break;
          case('february_arts'):
            artCurratorEditorTitle.innerHTML = 'Art: February';
            numberDays = 29;
            break;
          case('march_arts'):
            artCurratorEditorTitle.innerHTML = 'Art: March';
            numberDays = 31;
            break;
          case('april_arts'):
            artCurratorEditorTitle.innerHTML = 'Art: April';
            numberDays = 30;
            break;
          case('may_arts'):
            artCurratorEditorTitle.innerHTML = 'Art: May';
            numberDays = 31;
            break;
          case('june_arts'):
            artCurratorEditorTitle.innerHTML = 'Art: June';
            numberDays = 30;
            break;
          case('july_arts'):
            artCurratorEditorTitle.innerHTML = 'Art: July';
            numberDays = 31;
            break;
          case('august_arts'):
            artCurratorEditorTitle.innerHTML = 'Art: August';
            numberDays = 31;
            break;
          case('september_arts'):
            artCurratorEditorTitle.innerHTML = 'Art: September';
            numberDays = 30;
            break;
          case('october_arts'):
            artCurratorEditorTitle.innerHTML = 'Art: October';
            numberDays = 31;
            break;
          case('november_arts'):
            artCurratorEditorTitle.innerHTML = 'Art: November';
            numberDays = 30;
            break;
          case('december_arts'):
            artCurratorEditorTitle.innerHTML = 'Art: December';
            numberDays = 31;
            break;
          default:
            console.log('month not supported');
        }

        $http.get(`/${artMonth}/${artId}`)
        .then(artPieceData=>{
          let artPiece = artPieceData.data;
          if (artPiece.theme === '') {
            userArtCuratorEditMonth.setAttribute("style", "display: none;");
            userArtCuratorEditMonth.innerHTML = '';
            userArtCuratorFirstEntryTheme.setAttribute("style", "display: initial;");
            userArtCuratorMonthThemeEntry.addEventListener('focusout', ()=>{
              if (userArtCuratorMonthThemeEntry.value !== '') {
                subObj = {
                  theme: userArtCuratorMonthThemeEntry.value
                };
                $http.patch(`/${artMonth}/${artId}`, subObj)
                .then(()=>{
                  artPiece.theme = userArtCuratorMonthThemeEntry.value;
                });
              }
            });
          } else {
            userArtCuratorEditMonth.setAttribute("style", "display: initial; margin: 3vmin 8vmin 3vmin 8vmin; padding: 1vmin; background-color: #dddddd;");
            userArtCuratorEditMonth.innerHTML = artPiece.theme;
            userArtCuratorFirstEntryTheme.setAttribute("style", "display: none;");
          }
          userArtCuratorEditImage.src = artPiece.img_path;
          userArtCurratorURL.value = artPiece.img_path;
          userArtCurratorAddArtist.value = artPiece.artist;
          userArtCurratorAddTitle.value = artPiece.title;
          userArtCurratorAdderYear.value = artPiece.year;
          displayDaysArray(userArtCurratorMondayArray, numberDays, artPiece.rule.monday, artPiece, artMonth, 'monday');
          displayDaysArray(userArtCurratorTuesdayArray, numberDays, artPiece.rule.tuesday, artPiece, artMonth, 'tuesday');
          displayDaysArray(userArtCurratorWednesdayArray, numberDays, artPiece.rule.wednesday, artPiece, artMonth, 'wednesday');
          displayDaysArray(userArtCurratorThursdayArray, numberDays, artPiece.rule.thursday, artPiece, artMonth, 'thursday');
          displayDaysArray(userArtCurratorFridayArray, numberDays, artPiece.rule.friday, artPiece, artMonth, 'friday');
          displayDaysArray(userArtCurratorSaturdayArray, numberDays, artPiece.rule.saturday, artPiece, artMonth, 'saturday');
          displayDaysArray(userArtCurratorSundayArray, numberDays, artPiece.rule.sunday, artPiece, artMonth, 'sunday');



          userArtCurratorURL.addEventListener('focusout', ()=>{
            if (userArtCurratorURL.value !== artPiece.img_path) {
              let subObj = {
                img_path: userArtCurratorURL.value
              };
              userArtCuratorEditImage.src = userArtCurratorURL.value;
              $http.patch(`/${artMonth}/${artId}`, subObj)
              .then(()=>{
                artPiece.img_path = subObj.img_path;
              });
            }
          });
          userArtCurratorUploaderButton.addEventListener('click', ()=>{
            userArtCurratorUploaderButton.setAttribute("style", "visibility: hidden;");
            userArtCurratorImageUploaderDiv.setAttribute("style", "visibility: visible;");
          });
          userArtCurratorUploaderSubmit.addEventListener('click', ()=>{
            userArtCurratorUploaderButton.setAttribute("style", "visibility: visible; cursor: pointer;");
            userArtCurratorImageUploaderDiv.setAttribute("style", "visibility: hidden;");
          });
          userArtCurratorUploaderCancel.addEventListener('click', ()=>{
            userArtCurratorUploaderButton.setAttribute("style", "visibility: visible; cursor: pointer;");
            userArtCurratorImageUploaderDiv.setAttribute("style", "visibility: hidden;");
          });
          userArtCurratorAddArtist.addEventListener('focusout', ()=>{
            if (userArtCurratorAddArtist.value !== artPiece.artist) {
              let subObj = {
                artist: userArtCurratorAddArtist.value
              };
              $http.patch(`/${artMonth}/${artId}`, subObj)
              .then(()=>{
                artPiece.artist = userArtCurratorAddArtist.value;
                displayArts(artMonth + 'byuser');
              });
            }
          });
          userArtCurratorAddTitle.addEventListener('focusout', ()=>{
            if (userArtCurratorAddTitle.value !== artPiece.title) {
              let subObj = {
                title: userArtCurratorAddTitle.value
              };
              $http.patch(`/${artMonth}/${artId}`, subObj)
              .then(()=>{
                artPiece.title = userArtCurratorAddTitle.value;
                displayArts(artMonth + 'byuser');
              });
            }
          });
          userArtCurratorAdderYear.addEventListener('focusout', ()=>{
            if (userArtCurratorAdderYear.value !== artPiece.year) {
              let subObj = {
                year: userArtCurratorAdderYear.value
              };
              $http.patch(`/${artMonth}/${artId}`, subObj)
              .then(()=>{
                artPiece.year = userArtCurratorAdderYear.value;
                displayArts(artMonth + 'byuser');
              });
            }
          });
          userArtCurratorRandomizeFilterButton.addEventListener('click', ()=>{
            let subObj = {
              rule: {
                monday: [],
                tuesday: [],
                wednesday: [],
                thursday: [],
                friday: [],
                saturday: [],
                sunday: []
              }
            };
            subObj.rule.monday = artArrayRandomizer(numberDays, 1, 6);
            subObj.rule.tuesday = artArrayRandomizer(numberDays, 1, 6);
            subObj.rule.wednesday = artArrayRandomizer(numberDays, 1, 6);
            subObj.rule.thursday = artArrayRandomizer(numberDays, 1, 6);
            subObj.rule.friday = artArrayRandomizer(numberDays, 1, 6);
            subObj.rule.saturday = artArrayRandomizer(numberDays, 1, 6);
            subObj.rule.sunday = artArrayRandomizer(numberDays, 1, 6);
            $http.patch(`/${artMonth}/${artId}`, subObj)
            .then(()=>{
              editArtCurrate(artMonth, artId);
              displayArts(artMonth + 'byuser');
            });
          });
        });

        userArtCurratorEditorDiv.setAttribute("style", "display: initial;");
        artCurratorManagerDone.setAttribute("style", "visibility: hidden;");

      }

      function displayMusics(monthTable) {
        let weekdayString = '';
        let monthDate = 0;
        let filteredMusics;
        let janWeekDays = [ 'janMusicMonday', 'janMusicTuesday', 'janMusicWednesday', 'janMusicThursday', 'janMusicSaturday' ];
        let janDays = [ 'janMusicDay1', 'janMusicDay2', 'janMusicDay3', 'janMusicDay4', 'janMusicDay5', 'janMusicDay6', 'janMusicDay7', 'janMusicDay8', 'janMusicDay9', 'janMusicDay10', 'janMusicDay11', 'janMusicDay12', 'janMusicDay13', 'janMusicDay14', 'janMusicDay15', 'janMusicDay16', 'janMusicDay17', 'janMusicDay18', 'janMusicDay19', 'janMusicDay20', 'janMusicDay21', 'janMusicDay22', 'janMusicDay23', 'janMusicDay24', 'janMusicDay25', 'janMusicDay26', 'janMusicDay27', 'janMusicDay28', 'janMusicDay29', 'janMusicDay30', 'janMusicDay31' ];
        let febWeekDays = [ 'febMusicMonday', 'febMusicTuesday', 'febMusicWednesday', 'febMusicThursday', 'febMusicSaturday' ];
        let febDays = [ 'febMusicDay1', 'febMusicDay2', 'febMusicDay3', 'febMusicDay4', 'febMusicDay5', 'febMusicDay6', 'febMusicDay7', 'febMusicDay8', 'febMusicDay9', 'febMusicDay10', 'febMusicDay11', 'febMusicDay12', 'febMusicDay13', 'febMusicDay14', 'febMusicDay15', 'febMusicDay16', 'febMusicDay17', 'febMusicDay18', 'febMusicDay19', 'febMusicDay20', 'febMusicDay21', 'febMusicDay22', 'febMusicDay23', 'febMusicDay24', 'febMusicDay25', 'febMusicDay26', 'febMusicDay27', 'febMusicDay28', 'febMusicDay29' ];
        let marWeekDays = [ 'marMusicMonday', 'marMusicTuesday', 'marMusicWednesday', 'marMusicThursday', 'marMusicSaturday' ];
        let marDays = [ 'marMusicDay1', 'marMusicDay2', 'marMusicDay3', 'marMusicDay4', 'marMusicDay5', 'marMusicDay6', 'marMusicDay7', 'marMusicDay8', 'marMusicDay9', 'marMusicDay10', 'marMusicDay11', 'marMusicDay12', 'marMusicDay13', 'marMusicDay14', 'marMusicDay15', 'marMusicDay16', 'marMusicDay17', 'marMusicDay18', 'marMusicDay19', 'marMusicDay20', 'marMusicDay21', 'marMusicDay22', 'marMusicDay23', 'marMusicDay24', 'marMusicDay25', 'marMusicDay26', 'marMusicDay27', 'marMusicDay28', 'marMusicDay29', 'marMusicDay30', 'marMusicDay31'];
        let aprWeekDays = [ 'aprMusicMonday', 'aprMusicTuesday', 'aprMusicWednesday', 'aprMusicThursday', 'aprMusicSaturday' ];
        let aprDays = [ 'aprMusicDay1', 'aprMusicDay2', 'aprMusicDay3', 'aprMusicDay4', 'aprMusicDay5', 'aprMusicDay6', 'aprMusicDay7', 'aprMusicDay8', 'aprMusicDay9', 'aprMusicDay10', 'aprMusicDay11', 'aprMusicDay12', 'aprMusicDay13', 'aprMusicDay14', 'aprMusicDay15', 'aprMusicDay16', 'aprMusicDay17', 'aprMusicDay18', 'aprMusicDay19', 'aprMusicDay20', 'aprMusicDay21', 'aprMusicDay22', 'aprMusicDay23', 'aprMusicDay24', 'aprMusicDay25', 'aprMusicDay26', 'aprMusicDay27', 'aprMusicDay28', 'aprMusicDay29', 'aprMusicDay30' ];
        let mayWeekDays = [ 'mayMusicMonday', 'mayMusicTuesday', 'mayMusicWednesday', 'mayMusicThursday', 'mayMusicSaturday' ];
        let mayDays = [ 'mayMusicDay1', 'mayMusicDay2', 'mayMusicDay3', 'mayMusicDay4', 'mayMusicDay5', 'mayMusicDay6', 'mayMusicDay7', 'mayMusicDay8', 'mayMusicDay9', 'mayMusicDay10', 'mayMusicDay11', 'mayMusicDay12', 'mayMusicDay13', 'mayMusicDay14', 'mayMusicDay15', 'mayMusicDay16', 'mayMusicDay17', 'mayMusicDay18', 'mayMusicDay19', 'mayMusicDay20', 'mayMusicDay21', 'mayMusicDay22', 'mayMusicDay23', 'mayMusicDay24', 'mayMusicDay25', 'mayMusicDay26', 'mayMusicDay27', 'mayMusicDay28', 'mayMusicDay29', 'mayMusicDay30', 'mayMusicDay31' ];
        let junWeekDays = [ 'junMusicMonday', 'junMusicTuesday', 'junMusicWednesday', 'junMusicThursday', 'junMusicSaturday' ];
        let junDays = [ 'junMusicDay1', 'junMusicDay2', 'junMusicDay3', 'junMusicDay4', 'junMusicDay5', 'junMusicDay6', 'junMusicDay7', 'junMusicDay8', 'junMusicDay9', 'junMusicDay10', 'junMusicDay11', 'junMusicDay12', 'junMusicDay13', 'junMusicDay14', 'junMusicDay15', 'junMusicDay16', 'junMusicDay17', 'junMusicDay18', 'junMusicDay19', 'junMusicDay20', 'junMusicDay21', 'junMusicDay22', 'junMusicDay23', 'junMusicDay24', 'junMusicDay25', 'junMusicDay26', 'junMusicDay27', 'junMusicDay28', 'junMusicDay29', 'junMusicDay30' ];
        let julWeekDays = [ 'julMusicMonday', 'julMusicTuesday', 'julMusicWednesday', 'julMusicThursday', 'julMusicSaturday' ];
        let julDays = [ 'julMusicDay1', 'julMusicDay2', 'julMusicDay3', 'julMusicDay4', 'julMusicDay5', 'julMusicDay6', 'julMusicDay7', 'julMusicDay8', 'julMusicDay9', 'julMusicDay10', 'julMusicDay11', 'julMusicDay12', 'julMusicDay13', 'julMusicDay14', 'julMusicDay15', 'julMusicDay16', 'julMusicDay17', 'julMusicDay18', 'julMusicDay19', 'julMusicDay20', 'julMusicDay21', 'julMusicDay22', 'julMusicDay23', 'julMusicDay24', 'julMusicDay25', 'julMusicDay26', 'julMusicDay27', 'julMusicDay28', 'julMusicDay29', 'julMusicDay30', 'julMusicDay31' ];
        let augWeekDays = [ 'augMusicMonday', 'augMusicTuesday', 'augMusicWednesday', 'augMusicThursday', 'augMusicSaturday' ];
        let augDays = [ 'augMusicDay1', 'augMusicDay2', 'augMusicDay3', 'augMusicDay4', 'augMusicDay5', 'augMusicDay6', 'augMusicDay7', 'augMusicDay8', 'augMusicDay9', 'augMusicDay10', 'augMusicDay11', 'augMusicDay12', 'augMusicDay13', 'augMusicDay14', 'augMusicDay15', 'augMusicDay16', 'augMusicDay17', 'augMusicDay18', 'augMusicDay19', 'augMusicDay20', 'augMusicDay21', 'augMusicDay22', 'augMusicDay23', 'augMusicDay24', 'augMusicDay25', 'augMusicDay26', 'augMusicDay27', 'augMusicDay28', 'augMusicDay29', 'augMusicDay30', 'augMusicDay31' ];
        let sepWeekDays = [ 'sepMusicMonday', 'sepMusicTuesday', 'sepMusicWednesday', 'sepMusicThursday', 'sepMusicSaturday' ];
        let sepDays = [ 'sepMusicDay1', 'sepMusicDay2', 'sepMusicDay3', 'sepMusicDay4', 'sepMusicDay5', 'sepMusicDay6', 'sepMusicDay7', 'sepMusicDay8', 'sepMusicDay9', 'sepMusicDay10', 'sepMusicDay11', 'sepMusicDay12', 'sepMusicDay13', 'sepMusicDay14', 'sepMusicDay15', 'sepMusicDay16', 'sepMusicDay17', 'sepMusicDay18', 'sepMusicDay19', 'sepMusicDay20', 'sepMusicDay21', 'sepMusicDay22', 'sepMusicDay23', 'sepMusicDay24', 'sepMusicDay25', 'sepMusicDay26', 'sepMusicDay27', 'sepMusicDay28', 'sepMusicDay29', 'sepMusicDay30' ];
        let octWeekDays = [ 'octMusicMonday', 'octMusicTuesday', 'octMusicWednesday', 'octMusicThursday', 'octMusicSaturday' ];
        let octDays = [ 'octMusicDay1', 'octMusicDay2', 'octMusicDay3', 'octMusicDay4', 'octMusicDay5', 'octMusicDay6', 'octMusicDay7', 'octMusicDay8', 'octMusicDay9', 'octMusicDay10', 'octMusicDay11', 'octMusicDay12', 'octMusicDay13', 'octMusicDay14', 'octMusicDay15', 'octMusicDay16', 'octMusicDay17', 'octMusicDay18', 'octMusicDay19', 'octMusicDay20', 'octMusicDay21', 'octMusicDay22', 'octMusicDay23', 'octMusicDay24', 'octMusicDay25', 'octMusicDay26', 'octMusicDay27', 'octMusicDay28', 'octMusicDay29', 'octMusicDay30', 'octMusicDay31' ];
        let novWeekDays = [ 'novMusicMonday', 'novMusicTuesday', 'novMusicWednesday', 'novMusicThursday', 'novMusicSaturday' ];
        let novDays = [ 'novMusicDay1', 'novMusicDay2', 'novMusicDay3', 'novMusicDay4', 'novMusicDay5', 'novMusicDay6', 'novMusicDay7', 'novMusicDay8', 'novMusicDay9', 'novMusicDay10', 'novMusicDay11', 'novMusicDay12', 'novMusicDay13', 'novMusicDay14', 'novMusicDay15', 'novMusicDay16', 'novMusicDay17', 'novMusicDay18', 'novMusicDay19', 'novMusicDay20', 'novMusicDay21', 'novMusicDay22', 'novMusicDay23', 'novMusicDay24', 'novMusicDay25', 'novMusicDay26', 'novMusicDay27', 'novMusicDay28', 'novMusicDay29', 'novMusicDay30' ];
        let decWeekDays = [ 'decMusicMonday', 'decMusicTuesday', 'decMusicWednesday', 'decMusicThursday', 'decMusicSaturday' ];
        let decDays = [ 'decMusicDay1', 'decMusicDay2', 'decMusicDay3', 'decMusicDay4', 'decMusicDay5', 'decMusicDay6', 'decMusicDay7', 'decMusicDay8', 'decMusicDay9', 'decMusicDay10', 'decMusicDay11', 'decMusicDay12', 'decMusicDay13', 'decMusicDay14', 'decMusicDay15', 'decMusicDay16', 'decMusicDay17', 'decMusicDay18', 'decMusicDay19', 'decMusicDay20', 'decMusicDay21', 'decMusicDay22', 'decMusicDay23', 'decMusicDay24', 'decMusicDay25', 'decMusicDay26', 'decMusicDay27', 'decMusicDay28', 'decMusicDay29', 'decMusicDay30', 'decMusicDay31' ];

        $http.get(`/${monthTable}/${currentUserId}`)
        .then(fullMonthMusicsData=>{
          let fullMonthMusics = fullMonthMusicsData.data;
          switch(monthTable) {
            case('january_musicsbyuser'):
              vm.janMusics = [];
              for (let i = 0; i < janWeekDays.length; i++) {
                if (document.getElementById(janWeekDays[i]).checked) {
                  weekdayString = document.getElementById(janWeekDays[i]).value;
                }
              }
              console.log(weekdayString);
              for (let j = 0; j < janDays.length; j++) {
                if (document.getElementById(janDays[j]).checked) {
                  monthDate = parseInt(document.getElementById(janDays[j]).value);
                }
              }
              console.log(monthDate);
              if ((weekdayString !== '') && (monthDate !== 0)) {
                filteredMusics = fullMonthMusics.filter(selection=>{
                  return(selection.rule[weekdayString].indexOf(monthDate) !== -1);
                });
                vm.janMusics = filteredMusics.sort((a, b)=>{
                  if (a.a_string.toLowerCase() < b.a_string.toLowerCase()) {
                    return -1;
                  } else if (a.a_string.toLowerCase() > b.a_string.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                document.getElementById('januaryMusicTheme').innerHTML = vm.janMusics[0].theme;
                document.getElementById('januaryMusicTheme').setAttribute("style", "display: initial;");
              } else {
                document.getElementById('januaryMusicTheme').setAttribute("style", "display: none;");
              }
              break;
            case('february_musicsbyuser'):
              vm.febMusics = [];
              for (let i = 0; i < febWeekDays.length; i++) {
                if (document.getElementById(febWeekDays[i]).checked) {
                  weekdayString = document.getElementById(febWeekDays[i]).value;
                }
              }
              console.log(weekdayString);
              for (let j = 0; j < febDays.length; j++) {
                if (document.getElementById(febDays[j]).checked) {
                  monthDate = parseInt(document.getElementById(febDays[j]).value);
                }
              }
              console.log(monthDate);
              if ((weekdayString !== '') && (monthDate !== 0)) {
                filteredMusics = fullMonthMusics.filter(selection=>{
                  return(selection.rule[weekdayString].indexOf(monthDate) !== -1);
                });
                vm.febMusics = filteredMusics.sort((a, b)=>{
                  if (a.a_string.toLowerCase() < b.a_string.toLowerCase()) {
                    return -1;
                  } else if (a.a_string.toLowerCase() > b.a_string.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                document.getElementById('februaryMusicTheme').innerHTML = vm.febMusics[0].theme;
                document.getElementById('februaryMusicTheme').setAttribute("style", "display: initial;");
              } else {
                document.getElementById('februaryMusicTheme').setAttribute("style", "display: none;");
              }
              break;
            case('march_musicsbyuser'):
              vm.marMusics = [];
              for (let i = 0; i < marWeekDays.length; i++) {
                if (document.getElementById(marWeekDays[i]).checked) {
                  weekdayString = document.getElementById(marWeekDays[i]).value;
                }
              }
              for (let j = 0; j < marDays.length; j++) {
                if (document.getElementById(marDays[j]).checked) {
                  monthDate = parseInt(document.getElementById(marDays[j]).value);
                }
              }
              if ((weekdayString !== '') && (monthDate !== 0)) {
                filteredMusics = fullMonthMusics.filter(selection=>{
                  return(selection.rule[weekdayString].indexOf(monthDate) !== -1);
                });
                vm.marMusics = filteredMusics.sort((a, b)=>{
                  if (a.a_string.toLowerCase() < b.a_string.toLowerCase()) {
                    return -1;
                  } else if (a.a_string.toLowerCase() > b.a_string.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                document.getElementById('marchMusicTheme').innerHTML = vm.marMusics[0].theme;
                document.getElementById('marchMusicTheme').setAttribute("style", "display: initial;");
              } else {
                document.getElementById('marchMusicTheme').setAttribute("style", "display: none;");
              }
              break;
            case('april_musicsbyuser'):
              vm.aprMusics = [];
              for (let i = 0; i < aprWeekDays.length; i++) {
                if (document.getElementById(aprWeekDays[i]).checked) {
                  weekdayString = document.getElementById(aprWeekDays[i]).value;
                }
              }
              for (let j = 0; j < aprDays.length; j++) {
                if (document.getElementById(aprDays[j]).checked) {
                  monthDate = parseInt(document.getElementById(aprDays[j]).value);
                }
              }
              if ((weekdayString !== '') && (monthDate !== 0)) {
                filteredMusics = fullMonthMusics.filter(selection=>{
                  return(selection.rule[weekdayString].indexOf(monthDate) !== -1);
                });
                vm.aprMusics = filteredMusics.sort((a, b)=>{
                  if (a.a_string.toLowerCase() < b.a_string.toLowerCase()) {
                    return -1;
                  } else if (a.a_string.toLowerCase() > b.a_string.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                document.getElementById('aprilMusicTheme').innerHTML = vm.aprMusics[0].theme;
                document.getElementById('aprilMusicTheme').setAttribute("style", "display: initial;");
              } else {
                document.getElementById('aprilMusicTheme').setAttribute("style", "display: none;");
              }
              break;
            case('may_musicsbyuser'):
              vm.aprMusics = [];
              for (let i = 0; i < mayWeekDays.length; i++) {
                if (document.getElementById(mayWeekDays[i]).checked) {
                  weekdayString = document.getElementById(mayWeekDays[i]).value;
                }
              }
              for (let j = 0; j < mayDays.length; j++) {
                if (document.getElementById(mayDays[j]).checked) {
                  monthDate = parseInt(document.getElementById(mayDays[j]).value);
                }
              }
              if ((weekdayString !== '') && (monthDate !== 0)) {
                filteredMusics = fullMonthMusics.filter(selection=>{
                  return(selection.rule[weekdayString].indexOf(monthDate) !== -1);
                });
                vm.mayMusics = filteredMusics.sort((a, b)=>{
                  if (a.a_string.toLowerCase() < b.a_string.toLowerCase()) {
                    return -1;
                  } else if (a.a_string.toLowerCase() > b.a_string.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                document.getElementById('mayMusicTheme').innerHTML = vm.mayMusics[0].theme;
                document.getElementById('mayMusicTheme').setAttribute("style", "display: initial;");
              } else {
                document.getElementById('mayMusicTheme').setAttribute("style", "display: none;");
              }
              break;
            case('june_musicsbyuser'):
              vm.junMusics = [];
              for (let i = 0; i < junWeekDays.length; i++) {
                if (document.getElementById(junWeekDays[i]).checked) {
                  weekdayString = document.getElementById(junWeekDays[i]).value;
                }
              }
              for (let j = 0; j < junDays.length; j++) {
                if (document.getElementById(junDays[j]).checked) {
                  monthDate = parseInt(document.getElementById(junDays[j]).value);
                }
              }
              if ((weekdayString !== '') && (monthDate !== 0)) {
                filteredMusics = fullMonthMusics.filter(selection=>{
                  return(selection.rule[weekdayString].indexOf(monthDate) !== -1);
                });
                vm.junMusics = filteredMusics.sort((a, b)=>{
                  if (a.a_string.toLowerCase() < b.a_string.toLowerCase()) {
                    return -1;
                  } else if (a.a_string.toLowerCase() > b.a_string.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                document.getElementById('juneMusicTheme').innerHTML = vm.junMusics[0].theme;
                document.getElementById('juneMusicTheme').setAttribute("style", "display: initial;");
              } else {
                document.getElementById('juneMusicTheme').setAttribute("style", "display: none;");
              }
              break;
            case('july_musicsbyuser'):
              vm.julMusics = [];
              for (let i = 0; i < julWeekDays.length; i++) {
                if (document.getElementById(julWeekDays[i]).checked) {
                  weekdayString = document.getElementById(julWeekDays[i]).value;
                }
              }
              for (let j = 0; j < julDays.length; j++) {
                if (document.getElementById(julDays[j]).checked) {
                  monthDate = parseInt(document.getElementById(julDays[j]).value);
                }
              }
              if ((weekdayString !== '') && (monthDate !== 0)) {
                filteredMusics = fullMonthMusics.filter(selection=>{
                  return(selection.rule[weekdayString].indexOf(monthDate) !== -1);
                });
                vm.julMusics = filteredMusics.sort((a, b)=>{
                  if (a.a_string.toLowerCase() < b.a_string.toLowerCase()) {
                    return -1;
                  } else if (a.a_string.toLowerCase() > b.a_string.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                document.getElementById('julyMusicTheme').innerHTML = vm.julMusics[0].theme;
                document.getElementById('julyMusicTheme').setAttribute("style", "display: initial;");
              } else {
                document.getElementById('julyMusicTheme').setAttribute("style", "display: none;");
              }
              break;
            case('august_musicsbyuser'):
              vm.augMusics = [];
              for (let i = 0; i < augWeekDays.length; i++) {
                if (document.getElementById(augWeekDays[i]).checked) {
                  weekdayString = document.getElementById(augWeekDays[i]).value;
                }
              }
              for (let j = 0; j < augDays.length; j++) {
                if (document.getElementById(augDays[j]).checked) {
                  monthDate = parseInt(document.getElementById(augDays[j]).value);
                }
              }
              if ((weekdayString !== '') && (monthDate !== 0)) {
                filteredMusics = fullMonthMusics.filter(selection=>{
                  return(selection.rule[weekdayString].indexOf(monthDate) !== -1);
                });
                vm.augMusics = filteredMusics.sort((a, b)=>{
                  if (a.a_string.toLowerCase() < b.a_string.toLowerCase()) {
                    return -1;
                  } else if (a.a_string.toLowerCase() > b.a_string.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                document.getElementById('augustMusicTheme').innerHTML = vm.augMusics[0].theme;
                document.getElementById('augustMusicTheme').setAttribute("style", "display: initial;");
              } else {
                document.getElementById('augustMusicTheme').setAttribute("style", "display: none;");
              }
              break;
            case('september_musicsbyuser'):
              vm.sepMusics = [];
              for (let i = 0; i < sepWeekDays.length; i++) {
                if (document.getElementById(sepWeekDays[i]).checked) {
                  weekdayString = document.getElementById(sepWeekDays[i]).value;
                }
              }
              for (let j = 0; j < sepDays.length; j++) {
                if (document.getElementById(sepDays[j]).checked) {
                  monthDate = parseInt(document.getElementById(sepDays[j]).value);
                }
              }
              if ((weekdayString !== '') && (monthDate !== 0)) {
                filteredMusics = fullMonthMusics.filter(selection=>{
                  return(selection.rule[weekdayString].indexOf(monthDate) !== -1);
                });
                vm.sepMusics = filteredMusics.sort((a, b)=>{
                  if (a.a_string.toLowerCase() < b.a_string.toLowerCase()) {
                    return -1;
                  } else if (a.a_string.toLowerCase() > b.a_string.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                document.getElementById('septemberMusicTheme').innerHTML = vm.sepMusics[0].theme;
                document.getElementById('septemberMusicTheme').setAttribute("style", "display: initial;");
              } else {
                document.getElementById('septemberMusicTheme').setAttribute("style", "display: none;");
              }
              break;
            case('october_musicsbyuser'):
              vm.octMusics = [];
              for (let i = 0; i < octWeekDays.length; i++) {
                if (document.getElementById(octWeekDays[i]).checked) {
                  weekdayString = document.getElementById(octWeekDays[i]).value;
                }
              }
              for (let j = 0; j < octDays.length; j++) {
                if (document.getElementById(octDays[j]).checked) {
                  monthDate = parseInt(document.getElementById(octDays[j]).value);
                }
              }
              if ((weekdayString !== '') && (monthDate !== 0)) {
                filteredMusics = fullMonthMusics.filter(selection=>{
                  return(selection.rule[weekdayString].indexOf(monthDate) !== -1);
                });
                vm.octMusics = filteredMusics.sort((a, b)=>{
                  if (a.a_string.toLowerCase() < b.a_string.toLowerCase()) {
                    return -1;
                  } else if (a.a_string.toLowerCase() > b.a_string.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                document.getElementById('octoberMusicTheme').innerHTML = vm.octMusics[0].theme;
                document.getElementById('octoberMusicTheme').setAttribute("style", "display: initial;");
              } else {
                document.getElementById('octoberMusicTheme').setAttribute("style", "display: none;");
              }
              break;
            case('november_musicsbyuser'):
              vm.novMusics = [];
              for (let i = 0; i < novWeekDays.length; i++) {
                if (document.getElementById(novWeekDays[i]).checked) {
                  weekdayString = document.getElementById(novWeekDays[i]).value;
                }
              }
              for (let j = 0; j < novDays.length; j++) {
                if (document.getElementById(novDays[j]).checked) {
                  monthDate = parseInt(document.getElementById(novDays[j]).value);
                }
              }
              if ((weekdayString !== '') && (monthDate !== 0)) {
                filteredMusics = fullMonthMusics.filter(selection=>{
                  return(selection.rule[weekdayString].indexOf(monthDate) !== -1);
                });
                vm.novMusics = filteredMusics.sort((a, b)=>{
                  if (a.a_string.toLowerCase() < b.a_string.toLowerCase()) {
                    return -1;
                  } else if (a.a_string.toLowerCase() > b.a_string.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                document.getElementById('novemberMusicTheme').innerHTML = vm.novMusics[0].theme;
                document.getElementById('novemberMusicTheme').setAttribute("style", "display: initial;");
              } else {
                document.getElementById('novemberMusicTheme').setAttribute("style", "display: none;");
              }
              break;
            case('december_musicsbyuser'):
              vm.decMusics = [];
              for (let i = 0; i < decWeekDays.length; i++) {
                if (document.getElementById(decWeekDays[i]).checked) {
                  weekdayString = document.getElementById(decWeekDays[i]).value;
                }
              }
              for (let j = 0; j < decDays.length; j++) {
                if (document.getElementById(decDays[j]).checked) {
                  monthDate = parseInt(document.getElementById(decDays[j]).value);
                }
              }
              if ((weekdayString !== '') && (monthDate !== 0)) {
                filteredMusics = fullMonthMusics.filter(selection=>{
                  return(selection.rule[weekdayString].indexOf(monthDate) !== -1);
                });
                vm.decMusics = filteredMusics.sort((a, b)=>{
                  if (a.a_string.toLowerCase() < b.a_string.toLowerCase()) {
                    return -1;
                  } else if (a.a_string.toLowerCase() > b.a_string.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                document.getElementById('decemberMusicTheme').innerHTML = vm.decMusics[0].theme;
                document.getElementById('decemberMusicTheme').setAttribute("style", "display: initial;");
              } else {
                document.getElementById('decemberMusicTheme').setAttribute("style", "display: none;");
              }
              break;
            default:
              console.log('month not supported');
          }
        });
      }

      function displayWeekMusics(table) {

        $http.get(`/${table}/${currentUserId}`)
        .then(dayMusicData=>{
          let dayMusic = dayMusicData.data;
          if (table === 'friday_musicsbyuser') {
            vm.friMusics = dayMusic.sort((a, b)=>{
              if (a.a_string.toLowerCase() < b.a_string.toLowerCase()) {
                return -1;
              } else if (a.a_string.toLowerCase() > b.a_string.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
          } else {
            vm.sunMusics = dayMusic.sort((a, b)=>{
              if (a.a_string.toLowerCase() < b.a_string.toLowerCase()) {
                return -1;
              } else if (a.a_string.toLowerCase() > b.a_string.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
          }
        });
      }

      function toggleMusicCurratorMonth(musicMonth) {
        let fridayMusicCurratorToggleDiv = document.getElementById('fridayMusicCurratorToggleDiv');
        let fridayMusicCurratorDisplay = document.getElementById('fridayMusicCurratorDisplay');
        let sundayMusicCurratorToggleDiv = document.getElementById('sundayMusicCurratorToggleDiv');
        let sundayMusicCurratorDisplay = document.getElementById('sundayMusicCurratorDisplay');
        let januaryMusicCurratorToggleDiv = document.getElementById('januaryMusicCurratorToggleDiv');
        let januaryMusicCurratorDisplay = document.getElementById('januaryMusicCurratorDisplay');
        let februaryMusicCurratorToggleDiv = document.getElementById('februaryMusicCurratorToggleDiv');
        let februaryMusicCurratorDisplay = document.getElementById('februaryMusicCurratorDisplay');
        let marchMusicCurratorToggleDiv = document.getElementById('marchMusicCurratorToggleDiv');
        let marchMusicCurratorDisplay = document.getElementById('marchMusicCurratorDisplay');
        let aprilMusicCurratorToggleDiv = document.getElementById('aprilMusicCurratorToggleDiv');
        let aprilMusicCurratorDisplay = document.getElementById('aprilMusicCurratorDisplay');
        let mayMusicCurratorToggleDiv = document.getElementById('mayMusicCurratorToggleDiv');
        let mayMusicCurratorDisplay = document.getElementById('mayMusicCurratorDisplay');
        let juneMusicCurratorToggleDiv = document.getElementById('juneMusicCurratorToggleDiv');
        let juneMusicCurratorDisplay = document.getElementById('juneMusicCurratorDisplay');
        let julyMusicCurratorToggleDiv = document.getElementById('julyMusicCurratorToggleDiv');
        let julyMusicCurratorDisplay = document.getElementById('julyMusicCurratorDisplay');
        let augustMusicCurratorToggleDiv = document.getElementById('augustMusicCurratorToggleDiv');
        let augustMusicCurratorDisplay = document.getElementById('augustMusicCurratorDisplay');
        let septemberMusicCurratorToggleDiv = document.getElementById('septemberMusicCurratorToggleDiv');
        let septemberMusicCurratorDisplay = document.getElementById('septemberMusicCurratorDisplay');
        let octoberMusicCurratorToggleDiv = document.getElementById('octoberMusicCurratorToggleDiv');
        let octoberMusicCurratorDisplay = document.getElementById('octoberMusicCurratorDisplay');
        let novemberMusicCurratorToggleDiv = document.getElementById('novemberMusicCurratorToggleDiv');
        let novemberMusicCurratorDisplay = document.getElementById('novemberMusicCurratorDisplay');
        let decemberMusicCurratorToggleDiv = document.getElementById('decemberMusicCurratorToggleDiv');
        let decemberMusicCurratorDisplay = document.getElementById('decemberMusicCurratorDisplay');

        switch(musicMonth) {
          case('Friday'):
            fridayMusicCurratorToggleDiv.setAttribute("style", "display: none;");
            fridayMusicCurratorDisplay.setAttribute("style", "display: initial;");
            sundayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            sundayMusicCurratorDisplay.setAttribute("style", "display: none;");
            januaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            februaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            marchMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchMusicCurratorDisplay.setAttribute("style", "display: none;");
            aprilMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilMusicCurratorDisplay.setAttribute("style", "display: none;");
            mayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayMusicCurratorDisplay.setAttribute("style", "display: none;");
            juneMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneMusicCurratorDisplay.setAttribute("style", "display: none;");
            julyMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyMusicCurratorDisplay.setAttribute("style", "display: none;");
            augustMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustMusicCurratorDisplay.setAttribute("style", "display: none;");
            septemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            octoberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberMusicCurratorDisplay.setAttribute("style", "display: none;");
            novemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            decemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            displayWeekMusics('friday_musicsbyuser');
            break;
          case('Sunday'):
            fridayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            fridayMusicCurratorDisplay.setAttribute("style", "display: none;");
            sundayMusicCurratorToggleDiv.setAttribute("style", "display: none;");
            sundayMusicCurratorDisplay.setAttribute("style", "display: initial;");
            januaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            februaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            marchMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchMusicCurratorDisplay.setAttribute("style", "display: none;");
            aprilMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilMusicCurratorDisplay.setAttribute("style", "display: none;");
            mayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayMusicCurratorDisplay.setAttribute("style", "display: none;");
            juneMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneMusicCurratorDisplay.setAttribute("style", "display: none;");
            julyMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyMusicCurratorDisplay.setAttribute("style", "display: none;");
            augustMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustMusicCurratorDisplay.setAttribute("style", "display: none;");
            septemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            octoberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberMusicCurratorDisplay.setAttribute("style", "display: none;");
            novemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            decemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            displayWeekMusics('sunday_musicsbyuser');
            break;
          case('January'):
            fridayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            fridayMusicCurratorDisplay.setAttribute("style", "display: none;");
            sundayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            sundayMusicCurratorDisplay.setAttribute("style", "display: none;");
            januaryMusicCurratorToggleDiv.setAttribute("style", "display: none;");
            januaryMusicCurratorDisplay.setAttribute("style", "display: initial;");
            februaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            marchMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchMusicCurratorDisplay.setAttribute("style", "display: none;");
            aprilMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilMusicCurratorDisplay.setAttribute("style", "display: none;");
            mayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayMusicCurratorDisplay.setAttribute("style", "display: none;");
            juneMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneMusicCurratorDisplay.setAttribute("style", "display: none;");
            julyMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyMusicCurratorDisplay.setAttribute("style", "display: none;");
            augustMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustMusicCurratorDisplay.setAttribute("style", "display: none;");
            septemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            octoberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberMusicCurratorDisplay.setAttribute("style", "display: none;");
            novemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            decemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('February'):
            fridayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            fridayMusicCurratorDisplay.setAttribute("style", "display: none;");
            sundayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            sundayMusicCurratorDisplay.setAttribute("style", "display: none;");
            januaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            februaryMusicCurratorToggleDiv.setAttribute("style", "display: none;");
            februaryMusicCurratorDisplay.setAttribute("style", "display: initial;");
            marchMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchMusicCurratorDisplay.setAttribute("style", "display: none;");
            aprilMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilMusicCurratorDisplay.setAttribute("style", "display: none;");
            mayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayMusicCurratorDisplay.setAttribute("style", "display: none;");
            juneMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneMusicCurratorDisplay.setAttribute("style", "display: none;");
            julyMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyMusicCurratorDisplay.setAttribute("style", "display: none;");
            augustMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustMusicCurratorDisplay.setAttribute("style", "display: none;");
            septemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            octoberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberMusicCurratorDisplay.setAttribute("style", "display: none;");
            novemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            decemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('March'):
            fridayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            fridayMusicCurratorDisplay.setAttribute("style", "display: none;");
            sundayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            sundayMusicCurratorDisplay.setAttribute("style", "display: none;");
            januaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            februaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            marchMusicCurratorToggleDiv.setAttribute("style", "display: none;");
            marchMusicCurratorDisplay.setAttribute("style", "display: initial;");
            aprilMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilMusicCurratorDisplay.setAttribute("style", "display: none;");
            mayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayMusicCurratorDisplay.setAttribute("style", "display: none;");
            juneMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneMusicCurratorDisplay.setAttribute("style", "display: none;");
            julyMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyMusicCurratorDisplay.setAttribute("style", "display: none;");
            augustMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustMusicCurratorDisplay.setAttribute("style", "display: none;");
            septemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            octoberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberMusicCurratorDisplay.setAttribute("style", "display: none;");
            novemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            decemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('April'):
            fridayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            fridayMusicCurratorDisplay.setAttribute("style", "display: none;");
            sundayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            sundayMusicCurratorDisplay.setAttribute("style", "display: none;");
            januaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            februaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            marchMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchMusicCurratorDisplay.setAttribute("style", "display: none;");
            aprilMusicCurratorToggleDiv.setAttribute("style", "display: none;");
            aprilMusicCurratorDisplay.setAttribute("style", "display: initial;");
            mayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayMusicCurratorDisplay.setAttribute("style", "display: none;");
            juneMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneMusicCurratorDisplay.setAttribute("style", "display: none;");
            julyMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyMusicCurratorDisplay.setAttribute("style", "display: none;");
            augustMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustMusicCurratorDisplay.setAttribute("style", "display: none;");
            septemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            octoberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberMusicCurratorDisplay.setAttribute("style", "display: none;");
            novemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            decemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('May'):
            fridayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            fridayMusicCurratorDisplay.setAttribute("style", "display: none;");
            sundayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            sundayMusicCurratorDisplay.setAttribute("style", "display: none;");
            januaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            februaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            marchMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchMusicCurratorDisplay.setAttribute("style", "display: none;");
            aprilMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilMusicCurratorDisplay.setAttribute("style", "display: none;");
            mayMusicCurratorToggleDiv.setAttribute("style", "display: none;");
            mayMusicCurratorDisplay.setAttribute("style", "display: initial;");
            juneMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneMusicCurratorDisplay.setAttribute("style", "display: none;");
            julyMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyMusicCurratorDisplay.setAttribute("style", "display: none;");
            augustMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustMusicCurratorDisplay.setAttribute("style", "display: none;");
            septemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            octoberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberMusicCurratorDisplay.setAttribute("style", "display: none;");
            novemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            decemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('June'):
            fridayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            fridayMusicCurratorDisplay.setAttribute("style", "display: none;");
            sundayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            sundayMusicCurratorDisplay.setAttribute("style", "display: none;");
            januaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            februaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            marchMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchMusicCurratorDisplay.setAttribute("style", "display: none;");
            aprilMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilMusicCurratorDisplay.setAttribute("style", "display: none;");
            mayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayMusicCurratorDisplay.setAttribute("style", "display: none;");
            juneMusicCurratorToggleDiv.setAttribute("style", "display: none;");
            juneMusicCurratorDisplay.setAttribute("style", "display: initial;");
            julyMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyMusicCurratorDisplay.setAttribute("style", "display: none;");
            augustMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustMusicCurratorDisplay.setAttribute("style", "display: none;");
            septemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            octoberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberMusicCurratorDisplay.setAttribute("style", "display: none;");
            novemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            decemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('July'):
            fridayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            fridayMusicCurratorDisplay.setAttribute("style", "display: none;");
            sundayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            sundayMusicCurratorDisplay.setAttribute("style", "display: none;");
            januaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            februaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            marchMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchMusicCurratorDisplay.setAttribute("style", "display: none;");
            aprilMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilMusicCurratorDisplay.setAttribute("style", "display: none;");
            mayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayMusicCurratorDisplay.setAttribute("style", "display: none;");
            juneMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneMusicCurratorDisplay.setAttribute("style", "display: none;");
            julyMusicCurratorToggleDiv.setAttribute("style", "display: none;");
            julyMusicCurratorDisplay.setAttribute("style", "display: initial;");
            augustMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustMusicCurratorDisplay.setAttribute("style", "display: none;");
            septemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            octoberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberMusicCurratorDisplay.setAttribute("style", "display: none;");
            novemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            decemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('August'):
            fridayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            fridayMusicCurratorDisplay.setAttribute("style", "display: none;");
            sundayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            sundayMusicCurratorDisplay.setAttribute("style", "display: none;");
            januaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            februaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            marchMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchMusicCurratorDisplay.setAttribute("style", "display: none;");
            aprilMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilMusicCurratorDisplay.setAttribute("style", "display: none;");
            mayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayMusicCurratorDisplay.setAttribute("style", "display: none;");
            juneMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneMusicCurratorDisplay.setAttribute("style", "display: none;");
            julyMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyMusicCurratorDisplay.setAttribute("style", "display: none;");
            augustMusicCurratorToggleDiv.setAttribute("style", "display: none;");
            augustMusicCurratorDisplay.setAttribute("style", "display: initial;");
            septemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            octoberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberMusicCurratorDisplay.setAttribute("style", "display: none;");
            novemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            decemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('September'):
            fridayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            fridayMusicCurratorDisplay.setAttribute("style", "display: none;");
            sundayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            sundayMusicCurratorDisplay.setAttribute("style", "display: none;");
            januaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            februaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            marchMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchMusicCurratorDisplay.setAttribute("style", "display: none;");
            aprilMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilMusicCurratorDisplay.setAttribute("style", "display: none;");
            mayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayMusicCurratorDisplay.setAttribute("style", "display: none;");
            juneMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneMusicCurratorDisplay.setAttribute("style", "display: none;");
            julyMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyMusicCurratorDisplay.setAttribute("style", "display: none;");
            augustMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustMusicCurratorDisplay.setAttribute("style", "display: none;");
            septemberMusicCurratorToggleDiv.setAttribute("style", "display: none;");
            septemberMusicCurratorDisplay.setAttribute("style", "display: initial;");
            octoberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberMusicCurratorDisplay.setAttribute("style", "display: none;");
            novemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            decemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('October'):
            fridayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            fridayMusicCurratorDisplay.setAttribute("style", "display: none;");
            sundayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            sundayMusicCurratorDisplay.setAttribute("style", "display: none;");
            januaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            februaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            marchMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchMusicCurratorDisplay.setAttribute("style", "display: none;");
            aprilMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilMusicCurratorDisplay.setAttribute("style", "display: none;");
            mayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayMusicCurratorDisplay.setAttribute("style", "display: none;");
            juneMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneMusicCurratorDisplay.setAttribute("style", "display: none;");
            julyMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyMusicCurratorDisplay.setAttribute("style", "display: none;");
            augustMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustMusicCurratorDisplay.setAttribute("style", "display: none;");
            septemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            octoberMusicCurratorToggleDiv.setAttribute("style", "display: none;");
            octoberMusicCurratorDisplay.setAttribute("style", "display: initial;");
            novemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            decemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('November'):
            fridayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            fridayMusicCurratorDisplay.setAttribute("style", "display: none;");
            sundayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            sundayMusicCurratorDisplay.setAttribute("style", "display: none;");
            januaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            februaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            marchMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchMusicCurratorDisplay.setAttribute("style", "display: none;");
            aprilMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilMusicCurratorDisplay.setAttribute("style", "display: none;");
            mayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayMusicCurratorDisplay.setAttribute("style", "display: none;");
            juneMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneMusicCurratorDisplay.setAttribute("style", "display: none;");
            julyMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyMusicCurratorDisplay.setAttribute("style", "display: none;");
            augustMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustMusicCurratorDisplay.setAttribute("style", "display: none;");
            septemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            octoberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberMusicCurratorDisplay.setAttribute("style", "display: none;");
            novemberMusicCurratorToggleDiv.setAttribute("style", "display: none;");
            novemberMusicCurratorDisplay.setAttribute("style", "display: initial;");
            decemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            decemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('December'):
            fridayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            fridayMusicCurratorDisplay.setAttribute("style", "display: none;");
            sundayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            sundayMusicCurratorDisplay.setAttribute("style", "display: none;");
            januaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            februaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryMusicCurratorDisplay.setAttribute("style", "display: none;");
            marchMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchMusicCurratorDisplay.setAttribute("style", "display: none;");
            aprilMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilMusicCurratorDisplay.setAttribute("style", "display: none;");
            mayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayMusicCurratorDisplay.setAttribute("style", "display: none;");
            juneMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            juneMusicCurratorDisplay.setAttribute("style", "display: none;");
            julyMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            julyMusicCurratorDisplay.setAttribute("style", "display: none;");
            augustMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            augustMusicCurratorDisplay.setAttribute("style", "display: none;");
            septemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            septemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            octoberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            octoberMusicCurratorDisplay.setAttribute("style", "display: none;");
            novemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
            novemberMusicCurratorDisplay.setAttribute("style", "display: none;");
            decemberMusicCurratorToggleDiv.setAttribute("style", "display: none;");
            decemberMusicCurratorDisplay.setAttribute("style", "display: initial;");
            break;
          default:
            console.log('unsupported music month');
        }
      }

      function closeMusicCurratorManager() {
        let musicCurratorManagementDiv = document.getElementById('musicCurratorManagementDiv');
        let musicCurratorZone = document.getElementById('musicCurratorZone');
        let musicCuratorManager = document.getElementById('musicCuratorManager');
        let fridayMusicCurratorToggleDiv = document.getElementById('fridayMusicCurratorToggleDiv');
        let fridayMusicCurratorDisplay = document.getElementById('fridayMusicCurratorDisplay');
        let sundayMusicCurratorToggleDiv = document.getElementById('sundayMusicCurratorToggleDiv');
        let sundayMusicCurratorDisplay = document.getElementById('sundayMusicCurratorDisplay');
        let januaryMusicCurratorToggleDiv = document.getElementById('januaryMusicCurratorToggleDiv');
        let januaryMusicCurratorDisplay = document.getElementById('januaryMusicCurratorDisplay');
        let februaryMusicCurratorToggleDiv = document.getElementById('februaryMusicCurratorToggleDiv');
        let februaryMusicCurratorDisplay = document.getElementById('februaryMusicCurratorDisplay');
        let marchMusicCurratorToggleDiv = document.getElementById('marchMusicCurratorToggleDiv');
        let marchMusicCurratorDisplay = document.getElementById('marchMusicCurratorDisplay');
        let aprilMusicCurratorToggleDiv = document.getElementById('aprilMusicCurratorToggleDiv');
        let aprilMusicCurratorDisplay = document.getElementById('aprilMusicCurratorDisplay');
        let mayMusicCurratorToggleDiv = document.getElementById('mayMusicCurratorToggleDiv');
        let mayMusicCurratorDisplay = document.getElementById('mayMusicCurratorDisplay');
        let juneMusicCurratorToggleDiv = document.getElementById('juneMusicCurratorToggleDiv');
        let juneMusicCurratorDisplay = document.getElementById('juneMusicCurratorDisplay');
        let julyMusicCurratorToggleDiv = document.getElementById('julyMusicCurratorToggleDiv');
        let julyMusicCurratorDisplay = document.getElementById('julyMusicCurratorDisplay');
        let augustMusicCurratorToggleDiv = document.getElementById('augustMusicCurratorToggleDiv');
        let augustMusicCurratorDisplay = document.getElementById('augustMusicCurratorDisplay');
        let septemberMusicCurratorToggleDiv = document.getElementById('septemberMusicCurratorToggleDiv');
        let septemberMusicCurratorDisplay = document.getElementById('septemberMusicCurratorDisplay');
        let octoberMusicCurratorToggleDiv = document.getElementById('octoberMusicCurratorToggleDiv');
        let octoberMusicCurratorDisplay = document.getElementById('octoberMusicCurratorDisplay');
        let novemberMusicCurratorToggleDiv = document.getElementById('novemberMusicCurratorToggleDiv');
        let novemberMusicCurratorDisplay = document.getElementById('novemberMusicCurratorDisplay');
        let decemberMusicCurratorToggleDiv = document.getElementById('decemberMusicCurratorToggleDiv');
        let decemberMusicCurratorDisplay = document.getElementById('decemberMusicCurratorDisplay');

        musicCurratorManagementDiv.setAttribute("style", "display: none;");
        musicCurratorZone.setAttribute("style", "opacity: 1.0;");
        musicCuratorManager.setAttribute("style", "visibility: visible;");
        fridayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
        fridayMusicCurratorDisplay.setAttribute("style", "display: none;");
        sundayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
        sundayMusicCurratorDisplay.setAttribute("style", "display: none;");
        januaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
        januaryMusicCurratorDisplay.setAttribute("style", "display: none;");
        februaryMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
        februaryMusicCurratorDisplay.setAttribute("style", "display: none;");
        marchMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
        marchMusicCurratorDisplay.setAttribute("style", "display: none;");
        aprilMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
        aprilMusicCurratorDisplay.setAttribute("style", "display: none;");
        mayMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
        mayMusicCurratorDisplay.setAttribute("style", "display: none;");
        juneMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
        juneMusicCurratorDisplay.setAttribute("style", "display: none;");
        julyMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
        julyMusicCurratorDisplay.setAttribute("style", "display: none;");
        augustMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
        augustMusicCurratorDisplay.setAttribute("style", "display: none;");
        septemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
        septemberMusicCurratorDisplay.setAttribute("style", "display: none;");
        octoberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
        octoberMusicCurratorDisplay.setAttribute("style", "display: none;");
        novemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
        novemberMusicCurratorDisplay.setAttribute("style", "display: none;");
        decemberMusicCurratorToggleDiv.setAttribute("style", "display: initial;");
        decemberMusicCurratorDisplay.setAttribute("style", "display: none;");
      }

      function musicsCurationManagement() {
        let musicCurratorManagementDiv = document.getElementById('musicCurratorManagementDiv');
        let musicCurratorZone = document.getElementById('musicCurratorZone');
        let musicCuratorManager = document.getElementById('musicCuratorManager');

        musicCurratorManagementDiv.setAttribute("style", "display: initial;");
        musicCurratorZone.setAttribute("style", "opacity: 0.3;");
        musicCuratorManager.setAttribute("style", "visibility: hidden;");
      }

      function billsReportDone() {
        let reportForBills = document.getElementById('reportForBills');
        let billsManagerDone = document.getElementById('billsManagerDone');
        let userBillsEditingDiv = document.getElementById('userBillsEditingDiv');
        let billsReporter = document.getElementById('billsReporter');

        reportForBills.setAttribute("style", "display: none;");
        billsManagerDone.setAttribute("style", "visibility: visible;");
        userBillsEditingDiv.setAttribute("style", "display: none;");
        billsReporter.setAttribute("style", "visibility: visible;");
      }

      function billOverdue(bill) {
        let today = new Date();
        let billDate = new Date(bill.due_date.slice(0,10));

        if (today.getFullYear() > billDate.getFullYear()) {
          return true;
        } else if (today.getFullYear() < billDate.getFullYear()) {
          return false;
        } else if (today.getMonth() > billDate.getMonth()) {
          return true;
        } else if (today.getMonth() < billDate.getMonth()) {
          return false;
        } else if (today.getDate() >= billDate.getDate()) {
          return true;
        } else {
          return false;
        }
      }

      function getMoreCurrent(bill1, bill2) {
        let dueDate1 = new Date(bill1.due_date.slice(0,10));
        let dueDate2 = new Date(bill2.due_date.slice(0,10));

        if (dueDate1.getFullYear() < dueDate2.getFullYear()) {
          return(bill2);
        } else if (dueDat1.getFullYear() > dueDate2.getFullYear()) {
          return(bill1);
        } else if (dueDate1.getMonth() < dueDate2.getMonth()) {
          return(bill2);
        } else if (dueDate1.getMonth() > dueDate2.getMonth()) {
          return(bill1);
        } else if (dueDate1.getDate() < dueDate2.getDate()) {
          return(bill2);
        } else if (dueDate1.getDate() > dueDate2.getDate()) {
          return(bill1);
        } else {
          return(bill1);
        }
      }

      function getNextDueBill(bill1, bill2) {
        let dueDate1 = new Date(bill1.due_date.slice(0,10));
        let dueDate2 = new Date(bill2.due_date.slice(0,10));

        if (dueDate1.getFullYear() < dueDate2.getFullYear()) {
          return(bill1);
        } else if (dueDate1.getFullYear() > dueDate2.getFullYear()) {
          return(bill2);
        } else if (dueDate1.getMonth() < dueDate2.getMonth()) {
          return(bill1);
        } else if (dueDate1.getMonth() > dueDate2.getMonth()) {
          return(bill2);
        } else if (dueDate1.getDate() < dueDate2.getDate()) {
          return(bill1);
        } else if (dueDate1.getDate() > dueDate2.getDate()) {
          return(bill2);
        } else {
          return(bill1);
        }
      }

      function getBillMonthString(yearDate) {
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let month = months[parseInt(yearDate.slice(5))] + ' ';
        let year = yearDate.slice(0,4);

        return(month + year);

      }

      function billsReport() {
        let reportForBills = document.getElementById('reportForBills');
        let billsManagerDone = document.getElementById('billsManagerDone');
        let userBillsEditingDiv = document.getElementById('userBillsEditingDiv');
        let billsReporter = document.getElementById('billsReporter');
        let arrayOfVendors = [];
        let objectOfVendors = {};
        let mostCurrent;
        let nextDue;
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let arrayOfYearDate = [];
        let objectOfYearDate = {};
        let yearDate;
        let checkYearDate;

        $http.get(`/billsbyuser/${currentUserId}`)
        .then(userBillsData=>{
          let userBills = userBillsData.data;
          vm.billReporter = [];
          vm.billVendors = [];
          vm.billReporter[0] = {};
          vm.billReporter[0].totalBills = userBills.length;
          vm.billReporter[0].totalAmount = 0;
          vm.billReporter[0].totalPaid = 0;
          vm.billReporter[0].totalDue = 0;
          vm.billReporter[0].overdue = 0;
          vm.billMonths = [];
          if (userBills.length > 0) {
            for (let i = 0; i < userBills.length; i++) {
              checkYearDate = new Date(userBills[i].due_date.slice(0,10));
              yearDate = checkYearDate.getFullYear().toString() + '-' + checkYearDate.getMonth().toString();
              vm.billReporter[0].totalAmount += parseFloat(userBills[i].amount_due);
              if (userBills[i].is_paid) {
                vm.billReporter[0].totalPaid += parseFloat(userBills[i].amount_paid);
              } else {
                vm.billReporter[0].totalDue += parseFloat(userBills[i].amount_due);
                if (billOverdue(userBills[i])) {
                  vm.billReporter[0].overdue += 1;
                }
              }
              if (arrayOfVendors.indexOf(userBills[i].pay_to) === -1) {
                arrayOfVendors.push(userBills[i].pay_to);
                objectOfVendors[userBills[i].pay_to] = [];
                objectOfVendors[userBills[i].pay_to].push(userBills[i]);
              } else {
                objectOfVendors[userBills[i].pay_to].push(userBills[i]);
              }
              if (arrayOfYearDate.indexOf(yearDate) === -1) {
                arrayOfYearDate.push(yearDate);
                objectOfYearDate[yearDate] = [];
                objectOfYearDate[yearDate].push(userBills[i]);
              } else {
                objectOfYearDate[yearDate].push(userBills[i]);
              }
            }
            arrayOfVendors = arrayOfVendors.sort((a, b)=>{
              if (a.toLowerCase() < b.toLowerCase()) {
                return -1;
              } else if (a.toLowerCase() > b.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
            arrayOfYearDate = arrayOfYearDate.sort((a, b)=>{
              if (a < b) {
                return -1;
              } else if (a > b) {
                return 1;
              } else {
                return 0;
              }
            });
            for (let j = 0; j < arrayOfVendors.length; j++) {
              vm.billVendors[j] = {};
              vm.billVendors[j].name = arrayOfVendors[j];
              vm.billVendors[j].totalPaid = parseFloat(0.00);
              vm.billVendors[j].totalDue = 0;
              vm.billVendors[j].recentBalance = 'not applicable';
              vm.billVendors[j].nextDueDate = 'no unpaid bill(s) with this creditor';
              mostCurrent = null;
              nextDue = null;
              for (let k = 0; k < objectOfVendors[arrayOfVendors[j]].length; k++) {
                if (objectOfVendors[arrayOfVendors[j]][k].is_paid) {
                  vm.billVendors[j].totalPaid += parseFloat(objectOfVendors[arrayOfVendors[j]][k].amount_paid);
                } else {
                  vm.billVendors[j].totalDue += parseFloat(objectOfVendors[arrayOfVendors[j]][k].amount_due);
                }
                if (mostCurrent === null) {
                  mostCurrent = objectOfVendors[arrayOfVendors[j]][k];
                } else {
                  mostCurrent = getMoreCurrent(mostCurrent, objectOfVendors[arrayOfVendors[j]][k]);
                }
                if (nextDue === null) {
                  nextDue = objectOfVendors[arrayOfVendors[j]][k];
                } else {
                  if (nextDue.is_paid) {
                    if (objectOfVendors[arrayOfVendros[j]][k].is_paid) {
                      nextDue = nextDue;
                    } else {
                      nextDue = objetOfVendors[arrayOfVendors[k]];
                    }
                  } else {
                    if (objectOfVendors[arrayOfVendros[j]][k].is_paid) {
                      nextDue = nextDue;
                    } else {
                      nextDue = getNextDueBill(nextDue, objectOfVendors[arrayOfVendros[j]][k]);
                    }
                  }
                }
              }
              if (mostCurrent.balance !== null) {
                if (mostCurrent.balance > 0) {
                  vm.billVendors[j].recentBalance = '$' + mostCurrent.balance.toString();
                }
              }
              if (!nextDue.is_paid) {
                let theDate = new Date(nextDue.due_date.slice(0,10));
                vm.billVendors[j].nextDueDate = theDate.getDate().toString() + ' ' + months[theDate.getMonth()] + ' ' + theDate.getFullYear().toString();
              }
            }
            for (let l = 0; l < arrayOfYearDate.length; j++) {
              vm.billMonths[l] = {};
              vm.billMonths[l].billMonthString = getBillMonthString(arrayOfYearDate[l]);
              vm.billMonths[l].billsTotal = 0;
              vm.billMonths[l].billsTotalAmount = 0;
              vm.billMonths[l].numberOfPaidBills = 0;
              vm.billMonths[l].billsPaidTotal = 0;
              vm.billMonths[l].numberOfUnpaidBills = 0;
              vm.billMonths[l].dueTotal = 0;
              for (let m = 0; m < objectOfYearDate[arrayOfYearDate[l]].length; m++) {
                ++vm.billMonths[l].billsTotal;
                vm.billMonths[l].billsTotalAmount += parseFloat(objectOfYearDate[arrayOfYearDate[l]][m].amount_due);
                if (objectOfYearDate[arrayOfYearDate[l]][m].is_paid) {
                  ++vm.billMonths[l].numberOfPaidBills;
                  vm.billMonths[l].billsPaidTotal += parseFloat(objectOfYearDate[arrayOfYearDate[l]][m].amount_paid);
                } else {
                  ++vm.billMonths[l].numberOfUnpaidBills;
                  vm.billMonths[l].dueTotal += parseFloat(objectOfYearDate[arrayOfYearDate[l]][m].amount_due);
                }
              }
            }

          }
        });

        reportForBills.setAttribute("style", "display: initial;");
        billsManagerDone.setAttribute("style", "visibility: hidden;");
        userBillsEditingDiv.setAttribute("style", "display: none;");
        billsReporter.setAttribute("style", "visibility: hidden;");
      }

      function addNewTask() {
        let checkDate = new Date();
        let subObj = {
          user_id: currentUserId,
          name: '',
          user_notes: '',
          due_date: checkDate,
          completed_date: null,
          is_completed: false
        }
        $http.post('/tasks', subObj)
        .then(createdTaskData=>{
          let createdTask = createdTaskData.data[0];

          editTask(createdTask.id);
        });
      }

      function deleteGoal(goalId) {
        let userGoalsDeleteConfirmDiv = document.getElementById('userGoalsDeleteConfirmDiv');
        let goalsManagementDiv = document.getElementById('goalsManagementDiv');
        let userGoalDeleteName = document.getElementById('userGoalDeleteName');
        let userGoalDeleteHours = document.getElementById('userGoalDeleteHours');
        let userGoalDeleteConfirmButtons = document.getElementById('userGoalDeleteConfirmButtons');
        let userGoalConfirmYes = document.getElementById('userGoalConfirmYes');
        if (userGoalConfirmYes) {
          userGoalConfirmYes.parentNode.removeChild(userGoalConfirmYes);
          userGoalConfirmYes = document.createElement('a');
          userGoalDeleteConfirmButtons.appendChild(userGoalConfirmYes);
          userGoalConfirmYes.id = 'userGoalConfirmYes';
          userGoalConfirmYes.className = 'btn';
          userGoalConfirmYes.innerHTML = 'yes';
          userGoalConfirmYes.setAttribute("style", "cursor: pointer;");
        }
        let userGoalConfirmNo = document.getElementById('userGoalConfirmNo');
        if (userGoalConfirmNo) {
          userGoalConfirmNo.parentNode.removeChild(userGoalConfirmNo);
          userGoalConfirmNo = document.createElement('a');
          userGoalDeleteConfirmButtons.appendChild(userGoalConfirmNo);
          userGoalConfirmNo.id = 'userGoalConfirmNo';
          userGoalConfirmNo.className = 'btn';
          userGoalConfirmNo.innerHTML = 'no';
          userGoalConfirmNo.setAttribute("style", "cursor: pointer;");
        }

        $http.get(`/goals/${goalId}`)
        .then(goalData=>{
          let goal = goalData.data;
          $http.get(`/blocktypes/${goal.block_type}`)
          .then(blocktypeData=>{
            let blocktype = blocktypeData.data;
            userGoalDeleteName.innerHTML = blocktype.type;
            userGoalDeleteHours.innerHTML = goal.weekly_goal + ' hours per week.';

            userGoalConfirmYes.addEventListener('click', ()=>{
              $http.delete(`/goals/${goalId}`)
              .then(()=>{
                userGoalsDeleteConfirmDiv.setAttribute("style", "display: none;");
                goalsManagementDiv.setAttribute("style", "display: initial;");
                goalManager();
              });
            });

            userGoalConfirmNo.addEventListener('click', ()=>{
              userGoalsDeleteConfirmDiv.setAttribute("style", "display: none;");
              goalsManagementDiv.setAttribute("style", "display: initial;");
              goalManager();
            });
          });
        });

        userGoalsDeleteConfirmDiv.setAttribute("style", "display: initial;");
        goalsManagementDiv.setAttribute("style", "display: none;");
      }

      function userObservancesEditorDone() {
        let userObservancesEditorDiv = document.getElementById('userObservancesEditorDiv');let observancesManagerDone = document.getElementById('observancesManagerDone');

        userObservancesEditorDiv.setAttribute("style", "display: none;");
        observancesManagerDone.setAttribute("style", "visibility: visible;");
        observanceManager();
      }

      function observeArtDeleteListen(button, observe, index, editorDiv) {
        console.log(observe);
        button.addEventListener('click', ()=>{
          let subObj = {
            override_content: observe.override_content
          };
          console.log(subObj);
          subObj.override_content.img_paths.splice(index, 1);
          subObj.override_content.titles.splice(index, 1);
          subObj.override_content.artists.splice(index, 1);
          subObj.override_content.years.splice(index, 1);

          $http.patch(`/observances/${observe.id}`, subObj)
          .then(()=>{
            observe.override_content = subObj.override_content;
            //editObservances(observe.id);
            let userObservancesArtsEditor = document.getElementById('userObservancesArtsEditor');
            let picture;
            let artist;
            let title;
            let year;
            let deleteButton;
            if (observe.override_content !== null) {
              while(userObservancesArtsEditor.firstChild) {
                userObservancesArtsEditor.removeChild(userObservancesArtsEditor.firstChild);
              }
              if (observe.override_content.img_paths !== null) {
                if (observe.override_content.img_paths.length > 0) {
                  while(userObservancesArtsEditor.firstChild) {
                    userObservancesArtsEditor.removeChild(userObservancesArtsEditor.firstChild);
                  }
                  for (let i = 0; i < observe.override_content.img_paths.length; i++) {
                    picture = document.createElement('img');
                    userObservancesArtsEditor.appendChild(picture);
                    picture.src = observe.override_content.img_paths[i];
                    deleteButton = document.createElement('a');
                    userObservancesArtsEditor.appendChild(deleteButton);
                    deleteButton.className = 'btn';
                    deleteButton.innerHTML = 'delete';
                    deleteButton.setAttribute("style", "cursor: pointer;");
                    observeArtDeleteListen(deleteButton, observe, i, userObservancesArtsEditor);
                    artist = document.createElement('input');
                    userObservancesArtsEditor.appendChild(artist);
                    artist.type = 'text';
                    artist.className = "pure-input-1";
                    artist.value = observe.override_content.artists[i];
                    observeArtistListen(artist, observe, i);
                    title = document.createElement('input');
                    userObservancesArtsEditor.appendChild(title);
                    title.type = 'text';
                    title.className = 'pure-input-1';
                    title.value = observe.override_content.titles[i];
                    observeTitleListen(title, observe, i);
                    year = document.createElement('input');
                    userObservancesArtsEditor.appendChild(year);
                    year.type = 'text';
                    year.className = 'pure-input-1';
                    year.value = observe.override_content.years[i];
                    observeYearListen(year, observe, i);
                  }

                }
              }
            }
          });
        });
      }

      function observeArtistListen(artist, observe, index) {
        artist.addEventListener('focusout', ()=>{
          if (artist.value !== observe.override_content.artists[index]) {
            let subObj = {
              override_content: observe.override_content
            };
            subObj.override_content.artists[index] = artist.value;
            $http.patch(`/observances/${observe.id}`, subObj)
            .then(()=>{
              observe.override_content = subObj.override_content;
              console.log('patched');
            });
          }
        });
      }

      function observeTitleListen(title, observe, index) {
        title.addEventListener('focusout', ()=>{
          if (title.value !== observe.override_content.titles[index]) {
            let subObj = {
              override_content: observe.override_content
            };
            subObj.override_content.titles[index] = title.value;
            $http.patch(`/observances/${observe.id}`, subObj)
            .then(()=>{
              observe.override_content = subObj.override_content;
            });
          }
        });
      }

      function observeYearListen(year, observe, index) {
        year.addEventListener('focusout', ()=>{
          if (year.value !== observe.override_content.years[index]) {
            let subObj = {
              override_content: observe.override_content
            };
            subObj.override_content.years[index] = year.value;
            $http.patch(`/observances/${observe.id}`, subObj)
            .then(()=>{
              observe.override_content = subObj.override_content;
            });
          }
        });
      }

      function observeMusicDeleteListen(button, observe, index, userObservancesMusicsEditor) {
        button.addEventListener('click', ()=>{
          let subObj = {
            override_content: observe.override_content
          };
          subObj.override_content.sources.splice(index, 1);
          subObj.override_content.src_strings.splice(index, 1);
          subObj.override_content.href_strings.splice(index, 1);
          subObj.override_content.a_strings.splice(index, 1);
          $http.patch(`/observances/${observe.id}`, subObj)
          .then(()=>{
            let musicPlayer;
            let musicATag;
            let deleteButton;
            observe.override_content = subObj.override_content;
            while (userObservancesMusicsEditor.firstChild) {
              userObservancesMusicsEditor.removeChild(userObservancesMusicsEditor.firstChild);
            }
            if (observe.override_content !== null) {
              if (observe.override_content.sources !== undefined) {
                for (let i = 0; i < observe.override_content.sources.length; i++) {
                  if (observe.override_content.sources[i] === 'bandcamp') {
                    musicPlayer = document.createElement('iframe');
                    userObservancesMusicsEditor.appendChild(musicPlayer);
                    musicPlayer.setAttribute("style", "border: 0; width: 100%; height: 650px;");
                    musicPlayer.seamless = true;
                    musicPlayer.src = observe.override_content.src_strings[i];
                    musicATag = document.createElement('a');
                    musicPlayer.appendChild(musicATag);
                    musicATag.href = observe.override_content.href_strings[i];
                    musicATag.innerHTML = observe.override_content.a_strings[i];
                    deleteButton = document.createElement('a');
                    userObservancesMusicsEditor.appendChild(deleteButton);
                    deleteButton.className = 'btn';
                    deleteButton.innerHTML = 'delete';
                    deleteButton.setAttribute("style", "cursor: pointer; margin-bottom: 1em; margin-top: 0;");
                    observeMusicDeleteListen(deleteButton, observe, i, userObservancesMusicsEditor);
                  }
                }
              }
            }
          });
        });
      }

      function editObservance(observeId) {
        let userObservancesEditorDiv = document.getElementById('userObservancesEditorDiv');
        let observancesManagerDone = document.getElementById('observancesManagerDone');
        let userObservancesNameField = document.getElementById('userObservancesNameField');
        let userObservancesName = document.getElementById('userObservancesName');
        if (userObservancesName) {
          userObservancesName.parentNode.removeChild(userObservancesName);
          userObservancesName = document.createElement('textarea');
          userObservancesNameField.appendChild(userObservancesName);
          userObservancesName.id = 'userObservancesName';
          userObservancesName.className = 'pure-input-1';
          userObservancesName.rows = '5';
        }
        let userObservancesEditorPhoto = document.getElementById('userObservancesEditorPhoto');
        let userObservancesImageEditorField = document.getElementById('userObservancesImageEditorField');
        let observancesImageURL = document.getElementById('observancesImageURL');
        if (observancesImageURL) {
          observancesImageURL.parentNode.removeChild(observancesImageURL);
          observancesImageURL = document.createElement('input');
          userObservancesImageEditorField.appendChild(observancesImageURL);
          observancesImageURL.id = 'observancesImageURL';
          observancesImageURL.type = 'text';
          observancesImageURL.className = 'pure-input-1';
        }
        let observancesImageLinkUpload = document.getElementById('observancesImageLinkUpload');
        if (observancesImageLinkUpload) {
          observancesImageLinkUpload.parentNode.removeChild(observancesImageLinkUpload);
          observancesImageLinkUpload = document.createElement('a');
          userObservancesImageEditorField.appendChild(observancesImageLinkUpload);
          observancesImageLinkUpload.id = 'observancesImageLinkUpload';
          observancesImageLinkUpload.className = 'btn';
          observancesImageLinkUpload.innerHTML = 'upload';
          observancesImageLinkUpload.setAttribute("style", "cursor: pointer;");
        }
        let userObservancesImageUploadCentre = document.getElementById('userObservancesImageUploadCentre');
        userObservancesImageUploadCentre.setAttribute("style", "visibility: hidden;");
        let userUploadObservancesPhotoConfirm = document.getElementById('userUploadObservancesPhotoConfirm');
        if (userUploadObservancesPhotoConfirm) {
          userUploadObservancesPhotoConfirm.parentNode.removeChild(userUploadObservancesPhotoConfirm);
          userUploadObservancesPhotoConfirm = document.createElement('a');
          userObservancesImageUploadCentre.appendChild(userUploadObservancesPhotoConfirm);
          userUploadObservancesPhotoConfirm.id = 'userUploadObservancesPhotoConfirm';
          userUploadObservancesPhotoConfirm.className = 'btn';
          userUploadObservancesPhotoConfirm.innerHTML = 'confirm';
          userUploadObservancesPhotoConfirm.setAttribute("style", "cursor: pointer;");
        }
        let userUploadObservancesPhotoCancel = document.getElementById('userUploadObservancesPhotoCancel');
        if (userUploadObservancesPhotoCancel) {
          userUploadObservancesPhotoCancel.parentNode.removeChild(userUploadObservancesPhotoCancel);
          userUploadObservancesPhotoCancel = document.createElement('a');
          userObservancesImageUploadCentre.appendChild(userUploadObservancesPhotoCancel);
          userUploadObservancesPhotoCancel.id = 'userUploadObservancesPhotoCancel';
          userUploadObservancesPhotoCancel.className = 'btn';
          userUploadObservancesPhotoCancel.innerHTML = 'cancel';
          userUploadObservancesPhotoCancel.setAttribute("style", "cursor: pointer;");
        }
        let userObservancesColorPicker = document.getElementById('userObservancesColorPicker');
        let userObservancesColorSelector = document.getElementById('userObservancesColorSelector');
        if (userObservancesColorSelector) {
          userObservancesColorSelector.parentNode.removeChild(userObservancesColorSelector);
          userObservancesColorSelector = document.createElement('input');
          userObservancesColorPicker.appendChild(userObservancesColorSelector);
          userObservancesColorSelector.id = 'userObservancesColorSelector';
          userObservancesColorSelector.type = 'color';
          userObservancesColorSelector.className = 'pure-input-1';
          // userObservancesColorSelector.setAttribute("style", "margin-left: 5em; height: 2em; width: 3em; cursor: pointer;");
        }
        let userObservancesEditorBar = document.getElementById('userObservancesEditorBar');
        let userObservancesEditorForm = document.getElementById('userObservancesEditorForm');
        let userObservancesAnnualCheckboxDiv = document.getElementById('userObservancesAnnualCheckboxDiv');
        let userObservancesAnnuality = document.getElementById('userObservancesAnnuality');
        if (userObservancesAnnuality) {
          userObservancesAnnuality.parentNode.removeChild(userObservancesAnnuality);
          userObservancesAnnuality = document.createElement('input');
          userObservancesAnnualCheckboxDiv.appendChild(userObservancesAnnuality);
          userObservancesAnnuality.id = 'userObservancesAnnuality';
          userObservancesAnnuality.type = 'checkbox';
        }
        let userObservancesDateField = document.getElementById('userObservancesDateField');
        let userObservancesDate = document.getElementById('userObservancesDate');
        if (userObservancesDate) {
          userObservancesDate.parentNode.removeChild(userObservancesDate);
          userObservancesDate = document.createElement('input');
          userObservancesDateField.appendChild(userObservancesDate);
          userObservancesDate.id = 'userObservancesDate';
          userObservancesDate.type = 'date';
          userObservancesDate.className = 'pure-input-1';
        }
        let observancesOverrideCheckbox = document.getElementById('observancesOverrideCheckbox');
        let userObservancesHasArtContent = document.getElementById('userObservancesHasArtContent');
        if (userObservancesHasArtContent) {
          userObservancesHasArtContent.parentNode.removeChild(userObservancesHasArtContent);
          userObservancesHasArtContent = document.createElement('input');
          observancesOverrideCheckbox.appendChild(userObservancesHasArtContent);
          userObservancesHasArtContent.id = 'userObservancesHasArtContent';
          userObservancesHasArtContent.type = 'checkbox';
        }
        let userObservancesArtContent = document.getElementById('userObservancesArtContent');
        let picture;
        let userObservancesArtsEditor = document.getElementById('userObservancesArtsEditor');
        let deleteButton;
        let artist;
        let title;
        let year;
        let userObservancesDivHolderForAddButton = document.getElementById('userObservancesDivHolderForAddButton');
        let userAddObservancesArt = document.getElementById('userAddObservancesArt');
        if (userAddObservancesArt) {
          userAddObservancesArt.parentNode.removeChild(userAddObservancesArt);
          userAddObservancesArt = document.createElement('button');
          userObservancesDivHolderForAddButton.appendChild(userAddObservancesArt);
          userAddObservancesArt.id = 'userAddObservancesArt';
          userAddObservancesArt.innerHTML = 'add new';
        }
        let observancesArtAdder = document.getElementById('observancesArtAdder');
        observancesArtAdder.setAttribute("style", "display: none;");
        let userObservancesArtAdditionDiv = document.getElementById('userObservancesArtAdditionDiv');
        let userObservanceArtAddDone = document.getElementById('userObservanceArtAddDone');
        if (userObservanceArtAddDone) {
          userObservanceArtAddDone.parentNode.removeChild(userObservanceArtAddDone);
          userObservanceArtAddDone = document.createElement('a');
          userObservancesArtAdditionDiv.appendChild(userObservanceArtAddDone);
          userObservanceArtAddDone.id = 'userObservanceArtAddDone';
          userObservanceArtAddDone.className = 'btn';
          userObservanceArtAddDone.innerHTML = 'done';
          userObservanceArtAddDone.setAttribute("style", "cursor: pointer;");
        }
        let userObservancesArtAddImagePane = document.getElementById('userObservancesArtAddImagePane');
        if (userObservancesArtAddImagePane) {
          userObservancesArtAddImagePane.parentNode.removeChild(userObservancesArtAddImagePane);
          userObservancesArtAddImagePane = document.createElement('img');
          userObservancesArtAdditionDiv.appendChild(userObservancesArtAddImagePane);
          userObservancesArtAddImagePane.id = 'userObservancesArtAddImagePane';
        }
        let userObservanceArtAddImageURL = document.getElementById('userObservanceArtAddImageURL');
        if (userObservanceArtAddImageURL) {
          userObservanceArtAddImageURL.parentNode.removeChild(userObservanceArtAddImageURL);
          userObservanceArtAddImageURL = document.createElement('input');
          userObservancesArtAdditionDiv.appendChild(userObservanceArtAddImageURL);
          userObservanceArtAddImageURL.id = 'userObservanceArtAddImageURL';
          userObservanceArtAddImageURL.type = 'text';
          userObservanceArtAddImageURL.className = 'pure-input-1';
        }
        let userObservanceArtAddUploaderButton = document.getElementById('userObservanceArtAddUploaderButton');
        if (userObservanceArtAddUploaderButton) {
          userObservanceArtAddUploaderButton.parentNode.removeChild(userObservanceArtAddUploaderButton);
          userObservanceArtAddUploaderButton = document.createElement('a');
          userObservancesArtAdditionDiv.appendChild(userObservanceArtAddUploaderButton);
          userObservanceArtAddUploaderButton.id = 'userObservanceArtAddUploaderButton';
          userObservanceArtAddUploaderButton.className = 'btn';
          userObservanceArtAddUploaderButton.innerHTML = 'upload';
          userObservanceArtAddUploaderButton.setAttribute("style", "cursor: pointer;");
        }
        let observancesArtImageUploaderDiv = document.getElementById('observancesArtImageUploaderDiv');
        observancesArtImageUploaderDiv.setAttribute("style", "visibility: hidden;");
        let observancesArtFileUpload = document.getElementById('observancesArtFileUpload');
        if (observancesArtFileUpload) {
          observancesArtFileUpload.parentNode.removeChild(observancesArtFileUpload);
          observancesArtFileUpload = document.createElement('input');
          observancesArtImageUploaderDiv.appendChild(observancesArtFileUpload);
          observancesArtFileUpload.type = 'file';
          observancesArtFileUpload.id = 'observancesArtFileUpload';
          observancesArtFileUpload.setAttribute("style", "margin-left: 3em;");
        }
        let observancesArtUploaderSubmit = document.getElementById('observancesArtUploaderSubmit');
        if (observancesArtUploaderSubmit) {
          observancesArtUploaderSubmit.parentNode.removeChild(observancesArtUploaderSubmit);
          observancesArtUploaderSubmit = document.createElement('a');
          observancesArtImageUploaderDiv.appendChild(observancesArtUploaderSubmit);
          observancesArtUploaderSubmit.id = 'observancesArtUploaderSubmit';
          observancesArtUploaderSubmit.className = 'btn';
          observancesArtUploaderSubmit.setAttribute("style", "cursor: pointer;");
          observancesArtUploaderSubmit.innerHTML = 'submit';
        }
        let observancesArtUploaderCancel = document.getElementById('observancesArtUploaderCancel');
        if (observancesArtUploaderCancel) {
          observancesArtUploaderCancel.parentNode.removeChild(observancesArtUploaderCancel);
          observancesArtUploaderCancel = document.createElement('a');
          observancesArtImageUploaderDiv.appendChild(observancesArtUploaderCancel);
          observancesArtUploaderCancel.id = 'observancesArtUploaderCancel';
          observancesArtUploaderCancel.className = 'btn';
          observancesArtUploaderCancel.setAttribute("style", "cursor: pointer;");
          observancesArtUploaderCancel.innerHTML = 'cancel';
        }
        let observanceArtAddArtist = document.getElementById('observanceArtAddArtist');
        let observancesArtAddTitle = document.getElementById('observancesArtAddTitle');
        let observancesArtAdderYear = document.getElementById('observancesArtAdderYear');
        let userObservancesMusicOverrideCheckDiv = document.getElementById('userObservancesMusicOverrideCheckDiv');
        let userObservancesHasMusicContent = document.getElementById('userObservancesHasMusicContent');
        if (userObservancesHasMusicContent) {
          userObservancesHasMusicContent.parentNode.removeChild(userObservancesHasMusicContent);
          userObservancesHasMusicContent = document.createElement('input');
          userObservancesMusicOverrideCheckDiv.appendChild(userObservancesHasMusicContent);
          userObservancesHasMusicContent.id = 'userObservancesHasMusicContent';
          userObservancesHasMusicContent.type = 'checkbox';

        }
        let userObservancesMusicContent = document.getElementById('userObservancesMusicContent');
        let userObservancesMusicsEditor = document.getElementById('userObservancesMusicsEditor');
        let musicPlayer;
        let musicATag;
        let userObservancesMusicAddButtonDiv = document.getElementById('userObservancesMusicAddButtonDiv');
        let userAddObservancesMusic = document.getElementById('userAddObservancesMusic');
        if (userAddObservancesMusic) {
          userAddObservancesMusic.parentNode.removeChild(userAddObservancesMusic);
          userAddObservancesMusic = document.createElement('button');
          userObservancesMusicAddButtonDiv.appendChild(userAddObservancesMusic);
          userAddObservancesMusic.id = 'userAddObservancesMusic';
          userAddObservancesMusic.innerHTML = 'add new';
        }
        let userObservancesMusicAddingForm = document.getElementById('userObservancesMusicAddingForm');
        userObservancesMusicAddingForm.setAttribute("style", "visibility: hidden;");
        let userObservancesMusicAddSubmit = document.getElementById('userObservancesMusicAddSubmit');
        if (userObservancesMusicAddSubmit) {
          userObservancesMusicAddSubmit.parentNode.removeChild(userObservancesMusicAddSubmit);
          userObservancesMusicAddSubmit = document.createElement('a');
          userObservancesMusicAddingForm.appendChild(userObservancesMusicAddSubmit);
          userObservancesMusicAddSubmit.id = 'userObservancesMusicAddSubmit';
          userObservancesMusicAddSubmit.className = 'btn';
          userObservancesMusicAddSubmit.setAttribute("style", "cursor: pointer;");
          userObservancesMusicAddSubmit.innerHTML = 'submit';
        }
        let userObservancesMusicAddCancel = document.getElementById('userObservancesMusicAddCancel');
        if (userObservancesMusicAddCancel) {
          userObservancesMusicAddCancel.parentNode.removeChild(userObservancesMusicAddCancel);
          userObservancesMusicAddCancel = document.createElement('a');
          userObservancesMusicAddingForm.appendChild(userObservancesMusicAddCancel);
          userObservancesMusicAddCancel.id = 'userObservancesMusicAddCancel';
          userObservancesMusicAddCancel.className = 'btn';
          userObservancesMusicAddCancel.setAttribute("style", "cursor: pointer;");
          userObservancesMusicAddCancel.innerHTML = 'cancel';
        }
        let userObservancesBandcampSubmissionString = document.getElementById('userObservancesBandcampSubmissionString');
        let userObservancesMusicAddErrorMessage = document.getElementById('userObservancesMusicAddErrorMessage');


        $http.get(`/observances/${observeId}`)
        .then(observeData=>{
          let observe = observeData.data;
          userObservancesName.value = observe.name;
          userObservancesEditorPhoto.src = observe.picture;
          observancesImageURL.value = observe.picture;
          userObservancesColorSelector.value = observe.color;
          userObservancesEditorBar.setAttribute("style", "background: " + observe.color + "; background-color: -webkit-linear-gradient(-135deg, " + observe.color + ", #FBFBF3); background: -o-linear-gradient(-135deg," + observe.color + ", #FBFBF3); background: -moz-linear-gradient(-135deg, " + observe.color + ", #FBFBF3); background: linear-gradient(-135deg, " + observe.color + ", #FBFBF3);");
          userObservancesEditorForm.setAttribute("style", "background: " + observe.color + "; background-color: -webkit-linear-gradient(135deg, " + observe.color + ", #FBFBF3); background: -o-linear-gradient(135deg," + observe.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + observe.color + ", #FBFBF3); background: linear-gradient(135deg, " + observe.color + ", #FBFBF3);");
          userAddObservancesArt.setAttribute("style", "background: " + observe.color + "; background-color: -webkit-linear-gradient(135deg, " + observe.color + ", #FBFBF3); background: -o-linear-gradient(135deg," + observe.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + observe.color + ", #FBFBF3); background: linear-gradient(135deg, " + observe.color + ", #FBFBF3);");
          userAddObservancesMusic.setAttribute("style", "background: " + observe.color + "; background-color: -webkit-linear-gradient(135deg, " + observe.color + ", #FBFBF3); background: -o-linear-gradient(135deg," + observe.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + observe.color + ", #FBFBF3); background: linear-gradient(135deg, " + observe.color + ", #FBFBF3);");
          userObservancesAnnuality.checked = observe.is_annual;
          userObservancesDate.value = observe.day_of.slice(0, 10);
          userObservancesHasArtContent.checked = observe.art_override;
          if (userObservancesHasArtContent.checked) {
            userObservancesArtContent.setAttribute("style", "display: inital;");
          } else {
            userObservancesArtContent.setAttribute("style", "display: none;");
          }
          while(userObservancesArtsEditor.firstChild) {
            userObservancesArtsEditor.removeChild(userObservancesArtsEditor.firstChild);
          }
          if (observe.override_content !== null) {
            if (observe.override_content.img_paths !== undefined) {
              if (observe.override_content.img_paths.length > 0) {
                while(userObservancesArtsEditor.firstChild) {
                  userObservancesArtsEditor.removeChild(userObservancesArtsEditor.firstChild);
                }
                for (let i = 0; i < observe.override_content.img_paths.length; i++) {
                  picture = document.createElement('img');
                  userObservancesArtsEditor.appendChild(picture);
                  picture.src = observe.override_content.img_paths[i];
                  deleteButton = document.createElement('a');
                  userObservancesArtsEditor.appendChild(deleteButton);
                  deleteButton.className = 'btn';
                  deleteButton.innerHTML = 'delete';
                  deleteButton.setAttribute("style", "cursor: pointer;");
                  observeArtDeleteListen(deleteButton, observe, i, userObservancesArtsEditor);
                  artist = document.createElement('input');
                  userObservancesArtsEditor.appendChild(artist);
                  artist.type = 'text';
                  artist.className = "pure-input-1";
                  artist.value = observe.override_content.artists[i];
                  observeArtistListen(artist, observe, i);
                  title = document.createElement('input');
                  userObservancesArtsEditor.appendChild(title);
                  title.type = 'text';
                  title.className = 'pure-input-1';
                  title.value = observe.override_content.titles[i];
                  observeTitleListen(title, observe, i);
                  year = document.createElement('input');
                  userObservancesArtsEditor.appendChild(year);
                  year.type = 'text';
                  year.className = 'pure-input-1';
                  year.value = observe.override_content.years[i];
                  observeYearListen(year, observe, i);
                }
              }
            }
          }
          userObservancesHasMusicContent.checked = observe.music_override;
          if (userObservancesHasMusicContent.checked) {
            userObservancesMusicContent.setAttribute("style", "display: initial;");
          } else {
            userObservancesMusicContent.setAttribute("style", "display: none;");
          }
          while (userObservancesMusicsEditor.firstChild) {
            userObservancesMusicsEditor.removeChild(userObservancesMusicsEditor.firstChild);
          }
          if (observe.override_content !== null) {
            if (observe.override_content.sources !== undefined) {
              for (let i = 0; i < observe.override_content.sources.length; i++) {
                if (observe.override_content.sources[i] === 'bandcamp') {
                  musicPlayer = document.createElement('iframe');
                  userObservancesMusicsEditor.appendChild(musicPlayer);
                  musicPlayer.setAttribute("style", "border: 0; width: 100%; height: 650px;");
                  musicPlayer.seamless = true;
                  musicPlayer.src = observe.override_content.src_strings[i];
                  musicATag = document.createElement('a');
                  musicPlayer.appendChild(musicATag);
                  musicATag.href = observe.override_content.href_strings[i];
                  musicATag.innerHTML = observe.override_content.a_strings[i];
                  deleteButton = document.createElement('a');
                  userObservancesMusicsEditor.appendChild(deleteButton);
                  deleteButton.className = 'btn';
                  deleteButton.innerHTML = 'delete';
                  deleteButton.setAttribute("style", "cursor: pointer; margin-bottom: 1em; margin-top: 0;");
                  observeMusicDeleteListen(deleteButton, observe, i, userObservancesMusicsEditor);
                }
              }
            }
          }


          userObservancesName.addEventListener('focusout', ()=>{
            if ((userObservancesName.value !== observe.name) && (userObservancesName.value !== '')) {
              let subObj = {
                name: userObservancesName.value
              };
              $http.patch(`/observances/${observeId}`, subObj)
              .then(()=>{
                observe.name = userObservancesName.value;
              });
            }

          });
          observancesImageURL.addEventListener('focusout', ()=>{
            if ((observancesImageURL.value !== observe.picture) && (observancesImageURL.value !== '')) {
              userObservancesEditorPhoto.src = observancesImageURL.value;
              let subObj = {
                picture: observancesImageURL.value
              };
              $http.patch(`/observances/${observeId}`, subObj)
              .then(()=>{
                observe.picture = observancesImageURL.value;
              });
            }
          });
          observancesImageLinkUpload.addEventListener('click', ()=>{
            userObservancesImageUploadCentre.setAttribute("style", "visibility: visible;");
            observancesImageLinkUpload.setAttribute("style", "visibility: hidden;");
          });
          userUploadObservancesPhotoConfirm.addEventListener('click', ()=>{
            userObservancesImageUploadCentre.setAttribute("style", "visibility: hidden;");
            observancesImageLinkUpload.setAttribute("style", "visibility: visible;");
          });
          userUploadObservancesPhotoCancel.addEventListener('click', ()=>{
            userObservancesImageUploadCentre.setAttribute("style", "visibility: hidden;");
            observancesImageLinkUpload.setAttribute("style", "visibility: visible;");
          });
          userObservancesColorSelector.addEventListener('change', ()=>{
            if (userObservancesColorSelector.value !== observe.color) {
              let subObj = {
                color: userObservancesColorSelector.value
              };
              $http.patch(`/observances/${observeId}`, subObj)
              .then(()=>{
                observe.color = userObservancesColorSelector.value;
                userObservancesEditorBar.setAttribute("style", "background: " + observe.color + "; background-color: -webkit-linear-gradient(-135deg, " + observe.color + ", #FBFBF3); background: -o-linear-gradient(-135deg," + observe.color + ", #FBFBF3); background: -moz-linear-gradient(-135deg, " + observe.color + ", #FBFBF3); background: linear-gradient(-135deg, " + observe.color + ", #FBFBF3);");
                userObservancesEditorForm.setAttribute("style", "background: " + observe.color + "; background-color: -webkit-linear-gradient(135deg, " + observe.color + ", #FBFBF3); background: -o-linear-gradient(135deg," + observe.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + observe.color + ", #FBFBF3); background: linear-gradient(135deg, " + observe.color + ", #FBFBF3);");
                userAddObservancesArt.setAttribute("style", "background: " + observe.color + "; background-color: -webkit-linear-gradient(135deg, " + observe.color + ", #FBFBF3); background: -o-linear-gradient(135deg," + observe.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + observe.color + ", #FBFBF3); background: linear-gradient(135deg, " + observe.color + ", #FBFBF3);");
                userAddObservancesMusic.setAttribute("style", "background: " + observe.color + "; background-color: -webkit-linear-gradient(135deg, " + observe.color + ", #FBFBF3); background: -o-linear-gradient(135deg," + observe.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + observe.color + ", #FBFBF3); background: linear-gradient(135deg, " + observe.color + ", #FBFBF3);");
              });
            }
          });
          userObservancesAnnuality.addEventListener('click', ()=>{
            if (userObservancesAnnuality.checked !== observe.is_annual) {
              let subObj = {
                is_annual: userObservancesAnnuality.checked
              };
              $http.patch(`/observances/${observeId}`, subObj)
              .then(()=>{
                observe.is_annual = userObservancesAnnuality.checked;
              });
            }
          });
          userObservancesDate.addEventListener('change', ()=>{
            let subObj = {
              day_of: new Date(userObservancesDate.value)
            };
            $http.patch(`/observances/${observeId}`, subObj)
            .then(()=>{
              observe.day_of = new Date(userObservancesDate.value);
            });
          });
          userObservancesHasArtContent.addEventListener('click', ()=>{
            if (userObservancesHasArtContent.checked) {
              userObservancesArtContent.setAttribute("style", "display: inital;");
              if (observe.override_content !== null) {
                if (observe.override_content.img_paths !== null) {
                  if (observe.override_content.img_paths.length > 0) {
                    while(userObservancesArtsEditor.firstChild) {
                      userObservancesArtsEditor.removeChild(userObservancesArtsEditor.firstChild);
                    }
                    for (let i = 0; i < observe.override_content.img_paths.length; i++) {
                      picture = document.createElement('img');
                      userObservancesArtsEditor.appendChild(picture);
                      picture.src = observe.override_content.img_paths[i];
                      deleteButton = document.createElement('a');
                      userObservancesArtsEditor.appendChild(deleteButton);
                      deleteButton.className = 'btn';
                      deleteButton.innerHTML = 'delete';
                      deleteButton.setAttribute("style", "cursor: pointer;");
                      observeArtDeleteListen(deleteButton, observe, i, userObservancesArtsEditor);
                      artist = document.createElement('input');
                      userObservancesArtsEditor.appendChild(artist);
                      artist.type = 'text';
                      artist.className = "pure-input-1";
                      artist.value = observe.override_content.artists[i];
                      observeArtistListen(artist, observe, i);
                      title = document.createElement('input');
                      userObservancesArtsEditor.appendChild(title);
                      title.type = 'text';
                      title.className = 'pure-input-1';
                      title.value = observe.override_content.titles[i];
                      observeTitleListen(title, observe, i);
                      year = document.createElement('input');
                      userObservancesArtsEditor.appendChild(year);
                      year.type = 'text';
                      year.className = 'pure-input-1';
                      year.value = observe.override_content.years[i];
                      //TODO write observeYearListen function
                      observeYearListen(year, observe, i);
                    }
                  }
                }
              }
            } else {
              userObservancesArtContent.setAttribute("style", "display: none;");
            }
            let subObj = {
              art_override: userObservancesHasArtContent.checked
            };
            $http.patch(`/observances/${observeId}`, subObj)
            .then(()=>{
              observe.art_override = subObj.art_override;
            });
          });
          userAddObservancesArt.addEventListener('click', ()=>{
            userAddObservancesArt.setAttribute("style", "visibility: hidden;");
            observancesArtAdder.setAttribute("style", "visibility: visible;");
          });
          userObservanceArtAddDone.addEventListener('click', ()=>{
            if (userObservanceArtAddImageURL.value !== '') {
              if (observe.override_content === null) {
                observe.override_content = {};
                observe.override_content.img_paths = [];
                observe.override_content.artists = [];
                observe.override_content.titles = [];
                observe.override_content.years = [];
              }
              let subObj = {
                override_content: observe.override_content
              };
              if (subObj.override_content.img_paths === undefined) {
                subObj.override_content.img_paths = [];
              }
              subObj.override_content.img_paths.push(userObservanceArtAddImageURL.value);
              if (subObj.override_content.artists === undefined) {
                subObj.override_content.artists = [];
              }
              subObj.override_content.artists.push(observanceArtAddArtist.value);
              if (subObj.override_content.titles === undefined) {
                subObj.override_content.titles = [];
              }
              subObj.override_content.titles.push(observancesArtAddTitle.value);
              if (subObj.override_content.years === undefined) {
                subObj.override_content.years = [];
              }
              subObj.override_content.years.push(observancesArtAdderYear.value);
              $http.patch(`/observances/${observeId}`, subObj)
              .then(()=>{
                observe.override_content = subObj.override_content;
                userObservanceArtAddImageURL.value = '';
                observanceArtAddArtist.value = '';
                observancesArtAddTitle.value = '';
                observancesArtAdderYear.value = '';
                if (observe.override_content.img_paths.length > 0) {
                  while(userObservancesArtsEditor.firstChild) {
                    userObservancesArtsEditor.removeChild(userObservancesArtsEditor.firstChild);
                  }
                  for (let i = 0; i < observe.override_content.img_paths.length; i++) {
                    picture = document.createElement('img');
                    userObservancesArtsEditor.appendChild(picture);
                    picture.src = observe.override_content.img_paths[i];
                    deleteButton = document.createElement('a');
                    userObservancesArtsEditor.appendChild(deleteButton);
                    deleteButton.className = 'btn';
                    deleteButton.innerHTML = 'delete';
                    deleteButton.setAttribute("style", "cursor: pointer;");
                    observeArtDeleteListen(deleteButton, observe, i, userObservancesArtsEditor);
                    artist = document.createElement('input');
                    userObservancesArtsEditor.appendChild(artist);
                    artist.type = 'text';
                    artist.className = "pure-input-1";
                    artist.value = observe.override_content.artists[i];
                    observeArtistListen(artist, observe, i);
                    title = document.createElement('input');
                    userObservancesArtsEditor.appendChild(title);
                    title.type = 'text';
                    title.className = 'pure-input-1';
                    title.value = observe.override_content.titles[i];
                    observeTitleListen(title, observe, i);
                    year = document.createElement('input');
                    userObservancesArtsEditor.appendChild(year);
                    year.type = 'text';
                    year.className = 'pure-input-1';
                    year.value = observe.override_content.years[i];
                    observeYearListen(year, observe, i);
                  }
                }
              });
            } else {
              userObservanceArtAddImageURL.value = '';
              observanceArtAddArtist.value = '';
              observancesArtAddTitle.value = '';
              observancesArtAdderYear.value = '';
            }
            userAddObservancesArt.setAttribute("style", "visibility: visible;");
            observancesArtAdder.setAttribute("style", "visibility: hidden;");

          });
          userObservanceArtAddImageURL.addEventListener('focusout', ()=>{
            if (userObservanceArtAddImageURL.value !== '') {
              userObservancesArtAddImagePane.src = userObservanceArtAddImageURL.value;
            }
          });
          userObservanceArtAddUploaderButton.addEventListener('click', ()=>{
            userObservanceArtAddUploaderButton.setAttribute("style", "visibility: hidden;");
            observancesArtImageUploaderDiv.setAttribute("style", "visibility: visible;");
          });
          observancesArtUploaderSubmit.addEventListener('click', ()=>{
            observancesArtImageUploaderDiv.setAttribute("style", "visibility: hidden;");
            userObservanceArtAddUploaderButton.setAttribute("style", "visibility: visible;");
          });
          observancesArtUploaderCancel.addEventListener('click', ()=>{
            observancesArtImageUploaderDiv.setAttribute("style", "visibility: hidden;");
            userObservanceArtAddUploaderButton.setAttribute("style", "visibility: visible;");
          });
          userObservancesHasMusicContent.addEventListener('click', ()=>{
            if (userObservancesHasMusicContent.checked) {
              userObservancesMusicContent.setAttribute("style", "display: initial;");
              while (userObservancesMusicsEditor.firstChild) {
                userObservancesMusicsEditor.removeChild(userObservancesMusicsEditor.firstChild);
              }
              if (observe.override_content !== null) {
                if (observe.override_content.sources !== undefined) {
                  for (let i = 0; i < observe.override_content.sources.length; i++) {
                    if (observe.override_content.sources[i] === 'bandcamp') {
                      musicPlayer = document.createElement('iframe');
                      userObservancesMusicsEditor.appendChild(musicPlayer);
                      musicPlayer.setAttribute("style", "border: 0; width: 100%; height: 650px;");
                      musicPlayer.seamless = true;
                      musicPlayer.src = observe.override_content.src_strings[i];
                      musicATag = document.createElement('a');
                      musicPlayer.appendChild(musicATag);
                      musicATag.href = observe.override_content.href_strings[i];
                      musicATag.innerHTML = observe.override_content.a_strings[i];
                      deleteButton = document.createElement('a');
                      userObservancesMusicsEditor.appendChild(deleteButton);
                      deleteButton.className = 'btn';
                      deleteButton.innerHTML = 'delete';
                      deleteButton.setAttribute("style", "cursor: pointer; margin-bottom: 1em; margin-top: 0;");
                      observeMusicDeleteListen(deleteButton, observe, i, userObservancesMusicsEditor);
                    }
                  }
                }
              }
            } else {
              userObservancesMusicContent.setAttribute("style", "display: none;");
            }
            let subObj = {
              music_override: userObservancesHasMusicContent.checked
            }
            $http.patch(`/observances/${observeId}`, subObj)
            .then(()=>{
              observe.music_override = subObj.music_override;
            });
          });
          userAddObservancesMusic.addEventListener('click', ()=>{
            userAddObservancesMusic.setAttribute("style", "visibility: hidden;");
            userObservancesMusicAddingForm.setAttribute("style", "visibility: visible;");
          });
          userObservancesMusicAddSubmit.addEventListener('click', ()=>{
            if (checkValidBancampEmbed(userObservancesBandcampSubmissionString.value)) {
              let subObj = {
                override_content: observe.override_content
              };
              if (subObj.override_content === null) {
                subObj.override_content = {};
              }
              if (subObj.override_content.sources === undefined) {
                subObj.override_content.sources = [];
                subObj.override_content.src_strings = [];
                subObj.override_content.href_strings = [];
                subObj.override_content.a_strings = [];
              }
              let index = subObj.override_content.sources.length;
              subObj.override_content.sources[index] = 'bandcamp';
              subObj.override_content.src_strings[index] = extractSrcStringFromBandcampEmbed(userObservancesBandcampSubmissionString.value);
              subObj.override_content.href_strings[index] = extractHrefStringFromBandcampEmbed(userObservancesBandcampSubmissionString.value);
              subObj.override_content.a_strings[index] = extractATagFromBandcampEmbed(userObservancesBandcampSubmissionString.value);
              $http.patch(`/observances/${observeId}`, subObj)
              .then(()=>{
                observe.override_content = subObj.override_content;
                //populateHolidayMusicEditor(userHolidayMusicsEditor, userHoliday);
                while (userObservancesMusicsEditor.firstChild) {
                  userObservancesMusicsEditor.removeChild(userObservancesMusicsEditor.firstChild);
                }
                if (observe.override_content !== null) {
                  if (observe.override_content.sources !== undefined) {
                    for (let i = 0; i < observe.override_content.sources.length; i++) {
                      if (observe.override_content.sources[i] === 'bandcamp') {
                        musicPlayer = document.createElement('iframe');
                        userObservancesMusicsEditor.appendChild(musicPlayer);
                        musicPlayer.setAttribute("style", "border: 0; width: 100%; height: 650px;");
                        musicPlayer.seamless = true;
                        musicPlayer.src = observe.override_content.src_strings[i];
                        musicATag = document.createElement('a');
                        musicPlayer.appendChild(musicATag);
                        musicATag.href = observe.override_content.href_strings[i];
                        musicATag.innerHTML = observe.override_content.a_strings[i];
                        deleteButton = document.createElement('a');
                        userObservancesMusicsEditor.appendChild(deleteButton);
                        deleteButton.className = 'btn';
                        deleteButton.innerHTML = 'delete';
                        deleteButton.setAttribute("style", "cursor: pointer; margin-bottom: 1em; margin-top: 0;");
                        observeMusicDeleteListen(deleteButton, observe, i, userObservancesMusicsEditor);
                      }
                    }
                  }
                }
                userObservancesMusicAddingForm.setAttribute("style", "visibility: hidden;");
                userAddObservancesMusic.setAttribute("style", "visibility: visible;");
                userObservancesBandcampSubmissionString.value = '';
                userObservancesMusicAddErrorMessage.innerHTML = '';
              });
            } else {
              userObservancesMusicAddErrorMessage.setAttribute("style", "color: #ff0000;");
              userObservancesMusicAddErrorMessage.innerHTML = "ERROR: Invalid embed link - please try again";
            }


          });
          userObservancesMusicAddCancel.addEventListener('click', ()=>{
            userObservancesMusicAddingForm.setAttribute("style", "visibility: hidden;");
            userAddObservancesMusic.setAttribute("style", "visibility: visible;");
            userObservancesBandcampSubmissionString.value = '';
          });
        });

        userObservancesEditorDiv.setAttribute("style", "display: initial;");
        observancesManagerDone.setAttribute("style", "visibility: hidden;");
      }

      function displayArts(artTable) {
        let janWeekDays = [ 'janArtMonday', 'janArtTuesday', 'janArtWednesday', 'janArtThursday', 'janArtFriday', 'janArtSaturday', 'janArtSunday'];
        let janDates = [ 'janArtDay1', 'janArtDay2', 'janArtDay3', 'janArtDay4', 'janArtDay5', 'janArtDay6', 'janArtDay7', 'janArtDay8', 'janArtDay9', 'janArtDay10', 'janArtDay11', 'janArtDay12', 'janArtDay13', 'janArtDay14', 'janArtDay15', 'janArtDay16', 'janArtDay17', 'janArtDay18', 'janArtDay19', 'janArtDay20', 'janArtDay21', 'janArtDay22', 'janArtDay23', 'janArtDay24', 'janArtDay25', 'janArtDay26', 'janArtDay27', 'janArtDay28', 'janArtDay29', 'janArtDay30', 'janArtDay31' ];
        let febWeekDays = [ 'febArtMonday', 'febArtTuesday', 'febArtWednesday', 'febArtThursday', 'febArtFriday', 'febArtSaturday', 'febArtSunday' ];
        let febDates = [ 'febArtDay1', 'febArtDay2', 'febArtDay3', 'febArtDay4', 'febArtDay5', 'febArtDay6', 'febArtDay7', 'febArtDay8', 'febArtDay9', 'febArtDay10', 'febArtDay11', 'febArtDay12', 'febArtDay13', 'febArtDay14', 'febArtDay15', 'febArtDay16', 'febArtDay17', 'febArtDay18', 'febArtDay19', 'febArtDay20', 'febArtDay21', 'febArtDay22', 'febArtDay23', 'febArtDay24', 'febArtDay25', 'febArtDay26', 'febArtDay27', 'febArtDay28', 'febArtDay29' ];
        let marWeekDays = [ 'marArtMonday', 'marArtTuesday', 'marArtWednesday', 'marArtThursday', 'marArtFriday', 'marArtSaturday', 'marArtSunday'];
        let marDates = [ 'marArtDay1', 'marArtDay2', 'marArtDay3', 'marArtDay4', 'marArtDay5', 'marArtDay6', 'marArtDay7', 'marArtDay8', 'marArtDay9', 'marArtDay10', 'marArtDay11', 'marArtDay12', 'marArtDay13', 'marArtDay14', 'marArtDay15', 'marArtDay16', 'marArtDay17', 'marArtDay18', 'marArtDay19', 'marArtDay20', 'marArtDay21', 'marArtDay22', 'marArtDay23', 'marArtDay24', 'marArtDay25', 'marArtDay26', 'marArtDay27', 'marArtDay28', 'marArtDay29', 'marArtDay30', 'marArtDay31'];
        let aprWeekDays = [ 'aprArtMonday', 'aprArtTuesday', 'aprArtWednesday', 'aprArtThursday', 'aprArtFriday', 'aprArtSaturday', 'aprArtSunday'];
        let aprDates = [ 'aprArtDay1', 'aprArtDay2', 'aprArtDay3', 'aprArtDay4', 'aprArtDay5', 'aprArtDay6', 'aprArtDay7', 'aprArtDay8', 'aprArtDay9', 'aprArtDay10', 'aprArtDay11', 'aprArtDay12', 'aprArtDay13', 'aprArtDay14', 'aprArtDay15', 'aprArtDay16', 'aprArtDay17', 'aprArtDay18', 'aprArtDay19', 'aprArtDay20', 'aprArtDay21', 'aprArtDay22', 'aprArtDay23', 'aprArtDay24', 'aprArtDay25', 'aprArtDay26', 'aprArtDay27', 'aprArtDay28', 'aprArtDay29', 'aprArtDay30'];
        let mayWeekDays = [ 'mayArtMonday', 'mayArtTuesday', 'mayArtWednesday', 'mayArtThursday', 'mayArtFriday', 'mayArtSaturday', 'mayArtSunday'];
        let mayDates = [ 'mayArtDay1', 'mayArtDay2', 'mayArtDay3', 'mayArtDay4', 'mayArtDay5', 'mayArtDay6', 'mayArtDay7', 'mayArtDay8', 'mayArtDay9', 'mayArtDay10', 'mayArtDay11', 'mayArtDay12', 'mayArtDay13', 'mayArtDay14', 'mayArtDay15', 'mayArtDay16', 'mayArtDay17', 'mayArtDay18', 'mayArtDay19', 'mayArtDay20', 'mayArtDay21', 'mayArtDay22', 'mayArtDay23', 'mayArtDay24', 'mayArtDay25', 'mayArtDay26', 'mayArtDay27', 'mayArtDay28', 'mayArtDay29', 'mayArtDay30', 'mayArtDay31'];
        let junWeekDays = [ 'junArtMonday', 'junArtTuesday', 'junArtWednesday', 'junArtThursday', 'junArtFriday', 'junArtSaturday', 'junArtSunday' ];
        let junDates = [ 'junArtDay1', 'junArtDay2', 'junArtDay3', 'junArtDay4', 'junArtDay5', 'junArtDay6', 'junArtDay7', 'junArtDay8', 'junArtDay9', 'junArtDay10', 'junArtDay11', 'junArtDay12', 'junArtDay13', 'junArtDay14', 'junArtDay15', 'junArtDay16', 'junArtDay17', 'junArtDay18', 'junArtDay19', 'junArtDay20', 'junArtDay21', 'junArtDay22', 'junArtDay23', 'junArtDay24', 'junArtDay25', 'junArtDay26', 'junArtDay27', 'junArtDay28', 'junArtDay29', 'junArtDay30'];
        let julWeekDays = [ 'julArtMonday', 'julArtTuesday', 'julArtWednesday', 'julArtThursday', 'julArtFriday', 'julArtSaturday', 'julArtSunday' ];
        let julDates = [ 'julArtDay1', 'julArtDay2', 'julArtDay3', 'julArtDay4', 'julArtDay5', 'julArtDay6', 'julArtDay7', 'julArtDay8', 'julArtDay9', 'julArtDay10', 'julArtDay11', 'julArtDay12', 'julArtDay13', 'julArtDay14', 'julArtDay15', 'julArtDay16', 'julArtDay17', 'julArtDay18', 'julArtDay19', 'julArtDay20', 'julArtDay21', 'julArtDay22', 'julArtDay23', 'julArtDay24', 'julArtDay25', 'julArtDay26', 'julArtDay27', 'julArtDay28', 'julArtDay29', 'julArtDay30', 'julArtDay31'];
        let augWeekDays = [ 'augArtMonday', 'augArtTuesday', 'augArtWednesday', 'augArtThursday', 'augArtFriday', 'augArtSaturday', 'augArtSunday' ];
        let augDates = [ 'augArtDay1', 'augArtDay2', 'augArtDay3', 'augArtDay4', 'augArtDay5', 'augArtDay6', 'augArtDay7', 'augArtDay8', 'augArtDay9', 'augArtDay10', 'augArtDay11', 'augArtDay12', 'augArtDay13', 'augArtDay14', 'augArtDay15', 'augArtDay16', 'augArtDay17', 'augArtDay18', 'augArtDay19', 'augArtDay20', 'augArtDay21', 'augArtDay22', 'augArtDay23', 'augArtDay24', 'augArtDay25', 'augArtDay26', 'augArtDay27', 'augArtDay28', 'augArtDay29', 'augArtDay30', 'augArtDay31'];
        let sepWeekDays = [ 'sepArtMonday', 'sepArtTuesday', 'sepArtWednesday', 'sepArtThursday', 'sepArtFriday', 'sepArtSaturday', 'sepArtSunday' ];
        let sepDates = [ 'sepArtDay1', 'sepArtDay2', 'sepArtDay3', 'sepArtDay4', 'sepArtDay5', 'sepArtDay6', 'sepArtDay7', 'sepArtDay8', 'sepArtDay9', 'sepArtDay10', 'sepArtDay11', 'sepArtDay12', 'sepArtDay13', 'sepArtDay14', 'sepArtDay15', 'sepArtDay16', 'sepArtDay17', 'sepArtDay18', 'sepArtDay19', 'sepArtDay20', 'sepArtDay21', 'sepArtDay22', 'sepArtDay23', 'sepArtDay24', 'sepArtDay25', 'sepArtDay26', 'sepArtDay27', 'sepArtDay28', 'sepArtDay29', 'sepArtDay30' ];
        let octWeekDays = [ 'octArtMonday', 'octArtTuesday', 'octArtWednesday', 'octArtThursday', 'octArtFriday', 'octArtSaturday', 'octArtSunday' ];
        let octDates = [ 'octArtDay1', 'octArtDay2', 'octArtDay3', 'octArtDay4', 'octArtDay5', 'octArtDay6', 'octArtDay7', 'octArtDay8', 'octArtDay9', 'octArtDay10', 'octArtDay11', 'octArtDay12', 'octArtDay13', 'octArtDay14', 'octArtDay15', 'octArtDay16', 'octArtDay17', 'octArtDay18', 'octArtDay19', 'octArtDay20', 'octArtDay21', 'octArtDay22', 'octArtDay23', 'octArtDay24', 'octArtDay25', 'octArtDay26', 'octArtDay27', 'octArtDay28', 'octArtDay29', 'octArtDay30', 'octArtDay31' ];
        let novWeekDays = [ 'novArtMonday', 'novArtTuesday', 'novArtWednesday', 'novArtThursday', 'novArtFriday', 'novArtSaturday', 'novArtSunday' ];
        let novDates = [ 'novArtDay1', 'novArtDay2', 'novArtDay3', 'novArtDay4', 'novArtDay5', 'novArtDay6', 'novArtDay7', 'novArtDay8', 'novArtDay9', 'novArtDay10', 'novArtDay11', 'novArtDay12', 'novArtDay13', 'novArtDay14', 'novArtDay15', 'novArtDay16', 'novArtDay17', 'novArtDay18', 'novArtDay19', 'novArtDay20', 'novArtDay21', 'novArtDay22', 'novArtDay23', 'novArtDay24', 'novArtDay25', 'novArtDay26', 'novArtDay27', 'novArtDay28', 'novArtDay29', 'novArtDay30' ];
        let decWeekDays = [ 'decArtMonday', 'decArtTuesday', 'decArtWednesday', 'decArtThursday', 'decArtFriday', 'decArtSaturday', 'decArtSunday' ];
        let decDates = [ 'decArtDay1', 'decArtDay2', 'decArtDay3', 'decArtDay4', 'decArtDay5', 'decArtDay6', 'decArtDay7', 'decArtDay8', 'decArtDay9', 'decArtDay10', 'decArtDay11', 'decArtDay12', 'decArtDay13', 'decArtDay14', 'decArtDay15', 'decArtDay16', 'decArtDay17', 'decArtDay18', 'decArtDay19', 'decArtDay20', 'decArtDay21', 'decArtDay22', 'decArtDay23', 'decArtDay24', 'decArtDay25', 'decArtDay26', 'decArtDay27', 'decArtDay28', 'decArtDay29', 'decArtDay30', 'decArtDay31' ];
        let element;
        let weekday = '';
        let monthDate = 0;
        let selectedArts;

        if (vm.janArts === undefined) {
          vm.janArts = [];
        }

        $http.get(`/${artTable}/${currentUserId}`)
        .then(monthArtData=>{
          let monthArt = monthArtData.data;
          switch(artTable) {
            case('january_artsbyuser'):
              for(let im = 0; im < janWeekDays.length; im++) {
                element = document.getElementById(janWeekDays[im]);
                if (element.checked) {
                  weekday = element.value;
                }
              }
              for(let id = 0; id < janDates.length; id++) {
                element = document.getElementById(janDates[id]);
                if (element.checked) {
                  monthDate = parseInt(element.value);
                }
              }
              if (monthDate === 0) {
                vm.janArts = [];
                document.getElementById('januaryTheme').setAttribute("style", "display: none;");
              } else {
                selectedArts = monthArt.filter(art=>{
                  console.log(art.rule[weekday].indexOf(monthDate) !== -1);
                  return(art.rule[weekday].indexOf(monthDate) !== -1);
                });

                vm.janArts = selectedArts.sort((a, b)=>{
                  if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return -1;
                  } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                document.getElementById('januaryTheme').innerHTML = 'Theme: ' + vm.janArts[0].theme;
                document.getElementById('januaryTheme').setAttribute("style", "display: initial;");
              }
              break;
            case('february_artsbyuser'):
              for(let im = 0; im < febWeekDays.length; im++) {
                element = document.getElementById(febWeekDays[im]);
                if (element.checked) {
                  weekday = element.value;
                }
              }
              for(let id = 0; id < febDates.length; id++) {
                element = document.getElementById(febDates[id]);
                if (element.checked) {
                  monthDate = parseInt(element.value);
                }
              }
              if (monthDate === 0) {
                vm.febArts = [];
                document.getElementById('februaryTheme').setAttribute("style", "display: none;");
              } else {
                selectedArts = monthArt.filter(art=>{
                  console.log(art.rule[weekday].indexOf(monthDate) !== -1);
                  return(art.rule[weekday].indexOf(monthDate) !== -1);
                });

                vm.febArts = selectedArts.sort((a, b)=>{
                  if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return -1;
                  } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                document.getElementById('februaryTheme').innerHTML = 'Theme: ' + vm.febArts[0].theme;
                document.getElementById('februaryTheme').setAttribute("style", "display: initial;");
              }
              break;
            case('march_artsbyuser'):
              for(let im = 0; im < marWeekDays.length; im++) {
                element = document.getElementById(marWeekDays[im]);
                if (element.checked) {
                  weekday = element.value;
                }
              }
              for(let id = 0; id < marDates.length; id++) {
                element = document.getElementById(marDates[id]);
                if (element.checked) {
                  monthDate = parseInt(element.value);
                }
              }
              if (monthDate === 0) {
                vm.marArts = [];
                document.getElementById('marchTheme').setAttribute("style", "display: none;");
              } else {
                selectedArts = monthArt.filter(art=>{
                  console.log(art.rule[weekday].indexOf(monthDate) !== -1);
                  return(art.rule[weekday].indexOf(monthDate) !== -1);
                });

                vm.marArts = selectedArts.sort((a, b)=>{
                  if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return -1;
                  } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                    return 1;
                  } else {
                    return 0;
                  }
                });
                document.getElementById('marchTheme').innerHTML = 'Theme: ' + vm.marArts[0].theme;
                document.getElementById('marchTheme').setAttribute("style", "display: initial;");
              }
              break;
              case('may_artsbyuser'):
                for(let im = 0; im < mayWeekDays.length; im++) {
                  element = document.getElementById(mayWeekDays[im]);
                  if (element.checked) {
                    weekday = element.value;
                  }
                }
                for(let id = 0; id < mayDates.length; id++) {
                  element = document.getElementById(mayDates[id]);
                  if (element.checked) {
                    monthDate = parseInt(element.value);
                  }
                }
                if (monthDate === 0) {
                  vm.mayArts = [];
                  document.getElementById('mayTheme').setAttribute("style", "display: none;");
                } else {
                  selectedArts = monthArt.filter(art=>{
                    console.log(art.rule[weekday].indexOf(monthDate) !== -1);
                    return(art.rule[weekday].indexOf(monthDate) !== -1);
                  });

                  vm.mayArts = selectedArts.sort((a, b)=>{
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                      return -1;
                    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
                  document.getElementById('mayTheme').innerHTML = 'Theme: ' + vm.mayArts[0].theme;
                  document.getElementById('mayTheme').setAttribute("style", "display: initial;");
                }
                break;
              case('april_artsbyuser'):
                for(let im = 0; im < aprWeekDays.length; im++) {
                  element = document.getElementById(aprWeekDays[im]);
                  if (element.checked) {
                    weekday = element.value;
                  }
                }
                for(let id = 0; id < aprDates.length; id++) {
                  element = document.getElementById(aprDates[id]);
                  if (element.checked) {
                    monthDate = parseInt(element.value);
                  }
                }
                if (monthDate === 0) {
                  vm.aprArts = [];
                  document.getElementById('aprilTheme').setAttribute("style", "display: none;");
                } else {
                  selectedArts = monthArt.filter(art=>{
                    console.log(art.rule[weekday].indexOf(monthDate) !== -1);
                    return(art.rule[weekday].indexOf(monthDate) !== -1);
                  });

                  vm.aprArts = selectedArts.sort((a, b)=>{
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                      return -1;
                    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
                  document.getElementById('aprilTheme').innerHTML = 'Theme: ' + vm.aprArts[0].theme;
                  document.getElementById('aprilTheme').setAttribute("style", "display: initial;");
                }
                break;
              case('june_artsbyuser'):
                for(let im = 0; im < junWeekDays.length; im++) {
                  element = document.getElementById(junWeekDays[im]);
                  if (element.checked) {
                    weekday = element.value;
                  }
                }
                for(let id = 0; id < junDates.length; id++) {
                  element = document.getElementById(junDates[id]);
                  if (element.checked) {
                    monthDate = parseInt(element.value);
                  }
                }
                if (monthDate === 0) {
                  vm.junArts = [];
                  document.getElementById('juneTheme').setAttribute("style", "display: none;");
                } else {
                  selectedArts = monthArt.filter(art=>{
                    console.log(art.rule[weekday].indexOf(monthDate) !== -1);
                    return(art.rule[weekday].indexOf(monthDate) !== -1);
                  });

                  vm.junArts = selectedArts.sort((a, b)=>{
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                      return -1;
                    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
                  document.getElementById('juneTheme').innerHTML = 'Theme: ' + vm.junArts[0].theme;
                  document.getElementById('juneTheme').setAttribute("style", "display: initial;");
                }
                break;
              case('july_artsbyuser'):
                for(let im = 0; im < julWeekDays.length; im++) {
                  element = document.getElementById(julWeekDays[im]);
                  if (element.checked) {
                    weekday = element.value;
                  }
                }
                for(let id = 0; id < julDates.length; id++) {
                  element = document.getElementById(julDates[id]);
                  if (element.checked) {
                    monthDate = parseInt(element.value);
                  }
                }
                if (monthDate === 0) {
                  vm.julArts = [];
                  document.getElementById('julyTheme').setAttribute("style", "display: none;");
                } else {
                  selectedArts = monthArt.filter(art=>{
                    console.log(art.rule[weekday].indexOf(monthDate) !== -1);
                    return(art.rule[weekday].indexOf(monthDate) !== -1);
                  });

                  vm.julArts = selectedArts.sort((a, b)=>{
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                      return -1;
                    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
                  document.getElementById('julyTheme').innerHTML = 'Theme: ' + vm.julArts[0].theme;
                  document.getElementById('julyTheme').setAttribute("style", "display: initial;");
                }
                break;
              case('august_artsbyuser'):
                for(let im = 0; im < augWeekDays.length; im++) {
                  element = document.getElementById(augWeekDays[im]);
                  if (element.checked) {
                    weekday = element.value;
                  }
                }
                for(let id = 0; id < augDates.length; id++) {
                  element = document.getElementById(augDates[id]);
                  if (element.checked) {
                    monthDate = parseInt(element.value);
                  }
                }
                if (monthDate === 0) {
                  vm.augArts = [];
                  document.getElementById('augustTheme').setAttribute("style", "display: none;");
                } else {
                  selectedArts = monthArt.filter(art=>{
                    console.log(art.rule[weekday].indexOf(monthDate) !== -1);
                    return(art.rule[weekday].indexOf(monthDate) !== -1);
                  });

                  vm.augArts = selectedArts.sort((a, b)=>{
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                      return -1;
                    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
                  document.getElementById('augustTheme').innerHTML = 'Theme: ' + vm.augArts[0].theme;
                  document.getElementById('augustTheme').setAttribute("style", "display: initial;");
                }
                break;
              case('september_artsbyuser'):
                for(let im = 0; im < sepWeekDays.length; im++) {
                  element = document.getElementById(sepWeekDays[im]);
                  if (element.checked) {
                    weekday = element.value;
                  }
                }
                for(let id = 0; id < sepDates.length; id++) {
                  element = document.getElementById(sepDates[id]);
                  if (element.checked) {
                    monthDate = parseInt(element.value);
                  }
                }
                if (monthDate === 0) {
                  vm.sepArts = [];
                  document.getElementById('septemberTheme').setAttribute("style", "display: none;");
                } else {
                  selectedArts = monthArt.filter(art=>{
                    console.log(art.rule[weekday].indexOf(monthDate) !== -1);
                    return(art.rule[weekday].indexOf(monthDate) !== -1);
                  });

                  vm.sepArts = selectedArts.sort((a, b)=>{
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                      return -1;
                    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
                  document.getElementById('septemberTheme').innerHTML = 'Theme: ' + vm.sepArts[0].theme;
                  document.getElementById('septemberTheme').setAttribute("style", "display: initial;");
                }
                break;
              case('october_artsbyuser'):
                for(let im = 0; im < octWeekDays.length; im++) {
                  element = document.getElementById(octWeekDays[im]);
                  if (element.checked) {
                    weekday = element.value;
                  }
                }
                for(let id = 0; id < octDates.length; id++) {
                  element = document.getElementById(octDates[id]);
                  if (element.checked) {
                    monthDate = parseInt(element.value);
                  }
                }
                if (monthDate === 0) {
                  vm.octArts = [];
                  document.getElementById('octoberTheme').setAttribute("style", "display: none;");
                } else {
                  selectedArts = monthArt.filter(art=>{
                    console.log(art.rule[weekday].indexOf(monthDate) !== -1);
                    return(art.rule[weekday].indexOf(monthDate) !== -1);
                  });

                  vm.octArts = selectedArts.sort((a, b)=>{
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                      return -1;
                    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
                  document.getElementById('octoberTheme').innerHTML = 'Theme: ' + vm.octArts[0].theme;
                  document.getElementById('octoberTheme').setAttribute("style", "display: initial;");
                }
                break;
              case('november_artsbyuser'):
                for(let im = 0; im < novWeekDays.length; im++) {
                  element = document.getElementById(novWeekDays[im]);
                  if (element.checked) {
                    weekday = element.value;
                  }
                }
                for(let id = 0; id < novDates.length; id++) {
                  element = document.getElementById(novDates[id]);
                  if (element.checked) {
                    monthDate = parseInt(element.value);
                  }
                }
                if (monthDate === 0) {
                  vm.novArts = [];
                  document.getElementById('novemberTheme').setAttribute("style", "display: none;");
                } else {
                  selectedArts = monthArt.filter(art=>{
                    console.log(art.rule[weekday].indexOf(monthDate) !== -1);
                    return(art.rule[weekday].indexOf(monthDate) !== -1);
                  });

                  vm.novArts = selectedArts.sort((a, b)=>{
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                      return -1;
                    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
                  document.getElementById('novemberTheme').innerHTML = 'Theme: ' + vm.novArts[0].theme;
                  document.getElementById('novemberTheme').setAttribute("style", "display: initial;");
                }
                break;
              case('december_artsbyuser'):
                for(let im = 0; im < decWeekDays.length; im++) {
                  element = document.getElementById(decWeekDays[im]);
                  if (element.checked) {
                    weekday = element.value;
                  }
                }
                for(let id = 0; id < decDates.length; id++) {
                  element = document.getElementById(decDates[id]);
                  if (element.checked) {
                    monthDate = parseInt(element.value);
                  }
                }
                if (monthDate === 0) {
                  vm.decArts = [];
                  document.getElementById('decemberTheme').setAttribute("style", "display: none;");
                } else {
                  selectedArts = monthArt.filter(art=>{
                    console.log(art.rule[weekday].indexOf(monthDate) !== -1);
                    return(art.rule[weekday].indexOf(monthDate) !== -1);
                  });

                  vm.decArts = selectedArts.sort((a, b)=>{
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                      return -1;
                    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                      return 1;
                    } else {
                      return 0;
                    }
                  });
                  document.getElementById('decemberTheme').innerHTML = 'Theme: ' + vm.decArts[0].theme;
                  document.getElementById('decemberTheme').setAttribute("style", "display: initial;");
                }
                break;
              default:
              console.log('month not supported');
          }
        });
      }

      function toggleArtCurratorMonth(month) {
        let januaryArtCurratorToggleDiv = document.getElementById('januaryArtCurratorToggleDiv');
        let januaryArtCurratorDisplay = document.getElementById('januaryArtCurratorDisplay');
        let februaryArtCurratorToggleDiv = document.getElementById('februaryArtCurratorToggleDiv');
        let februaryArtCurratorDisplay = document.getElementById('februaryArtCurratorDisplay');
        let marchArtCurratorToggleDiv = document.getElementById('marchArtCurratorToggleDiv');
        let marchArtCurratorDisplay = document.getElementById('marchArtCurratorDisplay');
        let aprilArtCurratorToggleDiv = document.getElementById('aprilArtCurratorToggleDiv');
        let aprilArtCurratorDisplay = document.getElementById('aprilArtCurratorDisplay');
        let mayArtCurratorToggleDiv = document.getElementById('mayArtCurratorToggleDiv');
        let mayArtCurratorDisplay = document.getElementById('mayArtCurratorDisplay');
        let junArtCurratorToggleDiv = document.getElementById('junArtCurratorToggleDiv');
        let junArtCurratorDisplay = document.getElementById('junArtCurratorDisplay');
        let julArtCurratorToggleDiv = document.getElementById('julArtCurratorToggleDiv');
        let julArtCurratorDisplay = document.getElementById('julArtCurratorDisplay');
        let augArtCurratorToggleDiv = document.getElementById('augArtCurratorToggleDiv');
        let augArtCurratorDisplay = document.getElementById('augArtCurratorDisplay');
        let sepArtCurratorToggleDiv = document.getElementById('sepArtCurratorToggleDiv');
        let sepArtCurratorDisplay = document.getElementById('sepArtCurratorDisplay');
        let octArtCurratorToggleDiv = document.getElementById('octArtCurratorToggleDiv');
        let octArtCurratorDisplay = document.getElementById('octArtCurratorDisplay');
        let novArtCurratorToggleDiv = document.getElementById('novArtCurratorToggleDiv');
        let novArtCurratorDisplay = document.getElementById('novArtCurratorDisplay');
        let decArtCurratorToggleDiv = document.getElementById('decArtCurratorToggleDiv');
        let decArtCurratorDisplay = document.getElementById('decArtCurratorDisplay');

        switch(month) {
          case('January'):
            januaryArtCurratorToggleDiv.setAttribute("style", "display: none;");
            januaryArtCurratorDisplay.setAttribute("style", "display: initial;");
            februaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryArtCurratorDisplay.setAttribute("style", "display: none;");
            marchArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchArtCurratorDisplay.setAttribute("style", "display: none;");
            aprilArtCurratorToggleDiv.setAttribute("style", "display:initial;");
            aprilArtCurratorDisplay.setAttribute("style", "display: none;");
            mayArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayArtCurratorDisplay.setAttribute("style", "display: none;");
            junArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            junArtCurratorDisplay.setAttribute("style", "display: none;");
            julArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            julArtCurratorDisplay.setAttribute("style", "display: none;");
            augArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            augArtCurratorDisplay.setAttribute("style", "display: none;");
            sepArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            sepArtCurratorDisplay.setAttribute("style", "display: none;");
            octArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            octArtCurratorDisplay.setAttribute("style", "display: none;");
            novArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            novArtCurratorDisplay.setAttribute("style", "display: none;");
            decArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            decArtCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('February'):
            januaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryArtCurratorDisplay.setAttribute("style", "display: none;");
            februaryArtCurratorToggleDiv.setAttribute("style", "display: none;");
            februaryArtCurratorDisplay.setAttribute("style", "display: initial;");
            marchArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchArtCurratorDisplay.setAttribute("style", "display: none;");
            aprilArtCurratorToggleDiv.setAttribute("style", "display:initial;");
            aprilArtCurratorDisplay.setAttribute("style", "display: none;");
            mayArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayArtCurratorDisplay.setAttribute("style", "display: none;");
            junArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            junArtCurratorDisplay.setAttribute("style", "display: none;");
            julArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            julArtCurratorDisplay.setAttribute("style", "display: none;");
            augArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            augArtCurratorDisplay.setAttribute("style", "display: none;");
            sepArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            sepArtCurratorDisplay.setAttribute("style", "display: none;");
            octArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            octArtCurratorDisplay.setAttribute("style", "display: none;");
            novArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            novArtCurratorDisplay.setAttribute("style", "display: none;");
            decArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            decArtCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('March'):
            januaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryArtCurratorDisplay.setAttribute("style", "display: none;");
            februaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryArtCurratorDisplay.setAttribute("style", "display: none;");
            marchArtCurratorToggleDiv.setAttribute("style", "display: none;");
            marchArtCurratorDisplay.setAttribute("style", "display: initial;");
            aprilArtCurratorToggleDiv.setAttribute("style", "display:initial;");
            aprilArtCurratorDisplay.setAttribute("style", "display: none;");
            mayArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayArtCurratorDisplay.setAttribute("style", "display: none;");
            junArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            junArtCurratorDisplay.setAttribute("style", "display: none;");
            julArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            julArtCurratorDisplay.setAttribute("style", "display: none;");
            augArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            augArtCurratorDisplay.setAttribute("style", "display: none;");
            sepArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            sepArtCurratorDisplay.setAttribute("style", "display: none;");
            octArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            octArtCurratorDisplay.setAttribute("style", "display: none;");
            novArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            novArtCurratorDisplay.setAttribute("style", "display: none;");
            decArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            decArtCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('April'):
            januaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryArtCurratorDisplay.setAttribute("style", "display: none;");
            februaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryArtCurratorDisplay.setAttribute("style", "display: none;");
            marchArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchArtCurratorDisplay.setAttribute("style", "display: none;");
            aprilArtCurratorToggleDiv.setAttribute("style", "display:none;");
            aprilArtCurratorDisplay.setAttribute("style", "display: initial;");
            mayArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayArtCurratorDisplay.setAttribute("style", "display: none;");
            junArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            junArtCurratorDisplay.setAttribute("style", "display: none;");
            julArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            julArtCurratorDisplay.setAttribute("style", "display: none;");
            augArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            augArtCurratorDisplay.setAttribute("style", "display: none;");
            sepArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            sepArtCurratorDisplay.setAttribute("style", "display: none;");
            octArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            octArtCurratorDisplay.setAttribute("style", "display: none;");
            novArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            novArtCurratorDisplay.setAttribute("style", "display: none;");
            decArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            decArtCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('May'):
            januaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryArtCurratorDisplay.setAttribute("style", "display: none;");
            februaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryArtCurratorDisplay.setAttribute("style", "display: none;");
            marchArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchArtCurratorDisplay.setAttribute("style", "display: none;");
            aprilArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilArtCurratorDisplay.setAttribute("style", "display: none;");
            mayArtCurratorToggleDiv.setAttribute("style", "display: none;");
            mayArtCurratorDisplay.setAttribute("style", "display: initial;");
            junArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            junArtCurratorDisplay.setAttribute("style", "display: none;");
            julArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            julArtCurratorDisplay.setAttribute("style", "display: none;");
            augArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            augArtCurratorDisplay.setAttribute("style", "display: none;");
            sepArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            sepArtCurratorDisplay.setAttribute("style", "display: none;");
            octArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            octArtCurratorDisplay.setAttribute("style", "display: none;");
            novArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            novArtCurratorDisplay.setAttribute("style", "display: none;");
            decArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            decArtCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('June'):
            januaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryArtCurratorDisplay.setAttribute("style", "display: none;");
            februaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryArtCurratorDisplay.setAttribute("style", "display: none;");
            marchArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchArtCurratorDisplay.setAttribute("style", "display: none;");
            aprilArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilArtCurratorDisplay.setAttribute("style", "display: none;");
            mayArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayArtCurratorDisplay.setAttribute("style", "display: none;");
            junArtCurratorToggleDiv.setAttribute("style", "display: none;");
            junArtCurratorDisplay.setAttribute("style", "display: initial;");
            julArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            julArtCurratorDisplay.setAttribute("style", "display: none;");
            augArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            augArtCurratorDisplay.setAttribute("style", "display: none;");
            sepArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            sepArtCurratorDisplay.setAttribute("style", "display: none;");
            octArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            octArtCurratorDisplay.setAttribute("style", "display: none;");
            novArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            novArtCurratorDisplay.setAttribute("style", "display: none;");
            decArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            decArtCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('July'):
            januaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryArtCurratorDisplay.setAttribute("style", "display: none;");
            februaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryArtCurratorDisplay.setAttribute("style", "display: none;");
            marchArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchArtCurratorDisplay.setAttribute("style", "display: none;");
            aprilArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilArtCurratorDisplay.setAttribute("style", "display: none;");
            mayArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayArtCurratorDisplay.setAttribute("style", "display: none;");
            junArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            junArtCurratorDisplay.setAttribute("style", "display: none;");
            julArtCurratorToggleDiv.setAttribute("style", "display: none;");
            julArtCurratorDisplay.setAttribute("style", "display: initial;");
            augArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            augArtCurratorDisplay.setAttribute("style", "display: none;");
            sepArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            sepArtCurratorDisplay.setAttribute("style", "display: none;");
            octArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            octArtCurratorDisplay.setAttribute("style", "display: none;");
            novArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            novArtCurratorDisplay.setAttribute("style", "display: none;");
            decArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            decArtCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('August'):
            januaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryArtCurratorDisplay.setAttribute("style", "display: none;");
            februaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryArtCurratorDisplay.setAttribute("style", "display: none;");
            marchArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchArtCurratorDisplay.setAttribute("style", "display: none;");
            aprilArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilArtCurratorDisplay.setAttribute("style", "display: none;");
            mayArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayArtCurratorDisplay.setAttribute("style", "display: none;");
            junArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            junArtCurratorDisplay.setAttribute("style", "display: none;");
            julArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            julArtCurratorDisplay.setAttribute("style", "display: none;");
            augArtCurratorToggleDiv.setAttribute("style", "display: none;");
            augArtCurratorDisplay.setAttribute("style", "display: initial;");
            sepArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            sepArtCurratorDisplay.setAttribute("style", "display: none;");
            octArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            octArtCurratorDisplay.setAttribute("style", "display: none;");
            novArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            novArtCurratorDisplay.setAttribute("style", "display: none;");
            decArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            decArtCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('September'):
            januaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryArtCurratorDisplay.setAttribute("style", "display: none;");
            februaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryArtCurratorDisplay.setAttribute("style", "display: none;");
            marchArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchArtCurratorDisplay.setAttribute("style", "display: none;");
            aprilArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilArtCurratorDisplay.setAttribute("style", "display: none;");
            mayArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayArtCurratorDisplay.setAttribute("style", "display: none;");
            junArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            junArtCurratorDisplay.setAttribute("style", "display: none;");
            julArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            julArtCurratorDisplay.setAttribute("style", "display: none;");
            augArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            augArtCurratorDisplay.setAttribute("style", "display: none;");
            sepArtCurratorToggleDiv.setAttribute("style", "display: none;");
            sepArtCurratorDisplay.setAttribute("style", "display: initial;");
            octArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            octArtCurratorDisplay.setAttribute("style", "display: none;");
            novArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            novArtCurratorDisplay.setAttribute("style", "display: none;");
            decArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            decArtCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('October'):
            januaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryArtCurratorDisplay.setAttribute("style", "display: none;");
            februaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryArtCurratorDisplay.setAttribute("style", "display: none;");
            marchArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchArtCurratorDisplay.setAttribute("style", "display: none;");
            aprilArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilArtCurratorDisplay.setAttribute("style", "display: none;");
            mayArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayArtCurratorDisplay.setAttribute("style", "display: none;");
            junArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            junArtCurratorDisplay.setAttribute("style", "display: none;");
            julArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            julArtCurratorDisplay.setAttribute("style", "display: none;");
            augArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            augArtCurratorDisplay.setAttribute("style", "display: none;");
            sepArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            sepArtCurratorDisplay.setAttribute("style", "display: none;");
            octArtCurratorToggleDiv.setAttribute("style", "display: none;");
            octArtCurratorDisplay.setAttribute("style", "display: initial;");
            novArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            novArtCurratorDisplay.setAttribute("style", "display: none;");
            decArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            decArtCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('November'):
            januaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryArtCurratorDisplay.setAttribute("style", "display: none;");
            februaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryArtCurratorDisplay.setAttribute("style", "display: none;");
            marchArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchArtCurratorDisplay.setAttribute("style", "display: none;");
            aprilArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilArtCurratorDisplay.setAttribute("style", "display: none;");
            mayArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayArtCurratorDisplay.setAttribute("style", "display: none;");
            junArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            junArtCurratorDisplay.setAttribute("style", "display: none;");
            julArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            julArtCurratorDisplay.setAttribute("style", "display: none;");
            augArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            augArtCurratorDisplay.setAttribute("style", "display: none;");
            sepArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            sepArtCurratorDisplay.setAttribute("style", "display: none;");
            octArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            octArtCurratorDisplay.setAttribute("style", "display: none;");
            novArtCurratorToggleDiv.setAttribute("style", "display: none;");
            novArtCurratorDisplay.setAttribute("style", "display: initial;");
            decArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            decArtCurratorDisplay.setAttribute("style", "display: none;");
            break;
          case('December'):
            januaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            januaryArtCurratorDisplay.setAttribute("style", "display: none;");
            februaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            februaryArtCurratorDisplay.setAttribute("style", "display: none;");
            marchArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            marchArtCurratorDisplay.setAttribute("style", "display: none;");
            aprilArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            aprilArtCurratorDisplay.setAttribute("style", "display: none;");
            mayArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            mayArtCurratorDisplay.setAttribute("style", "display: none;");
            junArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            junArtCurratorDisplay.setAttribute("style", "display: none;");
            julArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            julArtCurratorDisplay.setAttribute("style", "display: none;");
            augArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            augArtCurratorDisplay.setAttribute("style", "display: none;");
            sepArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            sepArtCurratorDisplay.setAttribute("style", "display: none;");
            octArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            octArtCurratorDisplay.setAttribute("style", "display: none;");
            novArtCurratorToggleDiv.setAttribute("style", "display: initial;");
            novArtCurratorDisplay.setAttribute("style", "display: none;");
            decArtCurratorToggleDiv.setAttribute("style", "display: none;");
            decArtCurratorDisplay.setAttribute("style", "display: initial;");
            break;
          default:
            console.log('month not supported');
        }
      }

      function closeArtCurratorManager() {
        let artCurratorManagementDiv = document.getElementById('artCurratorManagementDiv');
        let artsCurratorZone = document.getElementById('artsCurratorZone');
        let artsCuratorManager = document.getElementById('artsCuratorManager');
        let januaryArtCurratorToggleDiv = document.getElementById('januaryArtCurratorToggleDiv');
        let januaryArtCurratorDisplay = document.getElementById('januaryArtCurratorDisplay');
        let februaryArtCurratorToggleDiv = document.getElementById('februaryArtCurratorToggleDiv');
        let februaryArtCurratorDisplay = document.getElementById('februaryArtCurratorDisplay');
        let marchArtCurratorToggleDiv = document.getElementById('marchArtCurratorToggleDiv');
        let marchArtCurratorDisplay = document.getElementById('marchArtCurratorDisplay');
        let aprilArtCurratorToggleDiv = document.getElementById('aprilArtCurratorToggleDiv');
        let aprilArtCurratorDisplay = document.getElementById('aprilArtCurratorDisplay');
        let mayArtCurratorToggleDiv = document.getElementById('mayArtCurratorToggleDiv');
        let mayArtCurratorDisplay = document.getElementById('mayArtCurratorDisplay');
        let junArtCurratorToggleDiv = document.getElementById('junArtCurratorToggleDiv');
        let junArtCurratorDisplay = document.getElementById('junArtCurratorDisplay');
        let julArtCurratorToggleDiv = document.getElementById('julArtCurratorToggleDiv');
        let julArtCurratorDisplay = document.getElementById('julArtCurratorDisplay');
        let augArtCurratorToggleDiv = document.getElementById('augArtCurratorToggleDiv');
        let augArtCurratorDisplay = document.getElementById('augArtCurratorDisplay');
        let sepArtCurratorToggleDiv = document.getElementById('sepArtCurratorToggleDiv');
        let sepArtCurratorDisplay = document.getElementById('sepArtCurratorDisplay');
        let octArtCurratorToggleDiv = document.getElementById('octArtCurratorToggleDiv');
        let octArtCurratorDisplay = document.getElementById('octArtCurratorDisplay');
        let novArtCurratorToggleDiv = document.getElementById('novArtCurratorToggleDiv');
        let novArtCurratorDisplay = document.getElementById('novArtCurratorDisplay');
        let decArtCurratorToggleDiv = document.getElementById('decArtCurratorToggleDiv');
        let decArtCurratorDisplay = document.getElementById('decArtCurratorDisplay');

        artCurratorManagementDiv.setAttribute("style", "display: none;");
        artsCurratorZone.setAttribute("style", "opacity: 1.0;");
        artsCuratorManager.setAttribute("style", "visibility: visible;");
        januaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
        januaryArtCurratorDisplay.setAttribute("style", "display: none;");
        februaryArtCurratorToggleDiv.setAttribute("style", "display: initial;");
        februaryArtCurratorDisplay.setAttribute("style", "display: none;");
        marchArtCurratorToggleDiv.setAttribute("style", "display: initial;");
        marchArtCurratorDisplay.setAttribute("style", "display: none;");
        aprilArtCurratorToggleDiv.setAttribute("style", "display:initial;");
        aprilArtCurratorDisplay.setAttribute("style", "display: none;");
        mayArtCurratorToggleDiv.setAttribute("style", "display: initial;");
        mayArtCurratorDisplay.setAttribute("style", "display: none;");
        junArtCurratorToggleDiv.setAttribute("style", "display: initial;");
        junArtCurratorDisplay.setAttribute("style", "display: none;");
        julArtCurratorToggleDiv.setAttribute("style", "display: initial;");
        julArtCurratorDisplay.setAttribute("style", "display: none;");
        augArtCurratorToggleDiv.setAttribute("style", "display: initial;");
        augArtCurratorDisplay.setAttribute("style", "display: none;");
        sepArtCurratorToggleDiv.setAttribute("style", "display: initial;");
        sepArtCurratorDisplay.setAttribute("style", "display: none;");
        octArtCurratorToggleDiv.setAttribute("style", "display: initial;");
        octArtCurratorDisplay.setAttribute("style", "display: none;");
        novArtCurratorToggleDiv.setAttribute("style", "display: initial;");
        novArtCurratorDisplay.setAttribute("style", "display: none;");
        decArtCurratorToggleDiv.setAttribute("style", "display: initial;");
        decArtCurratorDisplay.setAttribute("style", "display: none;");
      }

      function artsCurationManagement() {
        let artCurratorManagementDiv = document.getElementById('artCurratorManagementDiv');
        let artsCurratorZone = document.getElementById('artsCurratorZone');
        let artsCuratorManager = document.getElementById('artsCuratorManager');

        artCurratorManagementDiv.setAttribute("style", "display: initial;");
        artsCurratorZone.setAttribute("style", "opacity: 0.3;");
        artsCuratorManager.setAttribute("style", "visibility: hidden;");
      }

      function pruneEmptyObservance(obId) {
        $http.delete(`/observances/${obId}`)
        .then(()=>{
          observanceManager();
        });
      }

      function occasionsReportDone() {
        let reportForOccasions = document.getElementById('reportForOccasions');
        let occasionReporter = document.getElementById('occasionReporter');
        let occasionsManagerDone = document.getElementById('occasionsManagerDone');
        let userOccasionsEditingDiv = document.getElementById('userOccasionsEditingDiv');

        $http.get(`/observancesbyuser/${currentUserId}`)
        .then(observancesListData=>{
          let observancesList = observancesListData.data;
          if (observancesList.length > 0) {
            for (let i = 0; i < observancesList.length; i++) {
              if (observancesList[i].name === '') {
                pruneEmptyObservance(observancesList[i].id);
              }
            }
          }
        });

        reportForOccasions.setAttribute("style", "display: none;");
        occasionReporter.setAttribute("style", "visibility: visible;");
        occasionsManagerDone.setAttribute("style", "visibility: visible;");
        userOccasionsEditingDiv.setAttribute("style", "display: none;");
      }

      function occasionReport() {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let reportForOccasions = document.getElementById('reportForOccasions');
        let occasionReporter = document.getElementById('occasionReporter');
        let occasionsManagerDone = document.getElementById('occasionsManagerDone');
        let userOccasionsEditingDiv = document.getElementById('userOccasionsEditingDiv');
        let yearStart = new Date();
        let calendarStart = new Date(yearStart.getFullYear().toString() + '-01-01T13:44:00.000Z');
        let endYear = (yearStart.getFullYear() + 1).toString();
        let calendarEnd = new Date(endYear + '-01-01T13:44:00.000Z');
        let endMonth = '';
        if ((yearStart.getMonth() + 1) < 10) {
          endMonth = '0' + (yearStart.getMonth() + 1).toString();
        } else {
          endMonth = (yearStart.getMonth() + 1).toString();
        }
        let endDay = '';
        if (yearStart.getDate() < 10) {
          endDay = '0' + yearStart.getDate().toString();
        } else {
          endDay = yearStart.getDate().toString();
        }
        let yearEnd = new Date(endYear + '-' + endMonth + '-' + endDay + 'T13:44:00.000Z');
        let checkDate;
        let occasionDate;

        $http.get(`/occasionsbyuser/${currentUserId}`)
        .then(fullOccasionsData=>{
          let fullOccasions = fullOccasionsData.data;
          vm.occasionReporter = [];
          vm.occasionReporter[0] = {};
          vm.occasionReporter[0].calendarTotal = 0;
          vm.occasionReporter[0].calendarJan = 0;
          vm.occasionReporter[0].calendarJanOccasions = [];
          vm.occasionReporter[0].calendarJanuaryOverlap = {};
          vm.occasionReporter[0].calendarJanOverlap = 0;
          vm.occasionReporter[0].calendarJanTotal = 0;
          vm.occasionReporter[0].calendarAnnual = 0;
          vm.occasionReporter[0].calendarOneOff = 0;
          vm.occasionReporter[0].calendarFeb = 0;
          vm.occasionReporter[0].calendarFebOccasions = [];
          vm.occasionReporter[0].calendarFebruaryOverlap = {};
          vm.occasionReporter[0].calendarFebOverlap = 0;
          vm.occasionReporter[0].calendarFebTotal = 0;
          vm.occasionReporter[0].calendarMar = 0;
          vm.occasionReporter[0].calendarMarOccasions = [];
          vm.occasionReporter[0].calendarMarchOverlap = {};
          vm.occasionReporter[0].calendarMarOverlap = 0;
          vm.occasionReporter[0].calendarMarTotal = 0;
          vm.occasionReporter[0].calendarApr = 0;
          vm.occasionReporter[0].calendarAprOccasions = [];
          vm.occasionReporter[0].calendarAprilOverlap = {};
          vm.occasionReporter[0].calendarAprOverlap = 0;
          vm.occasionReporter[0].calendarAprTotal = 0;
          vm.occasionReporter[0].calendarMay = 0;
          vm.occasionReporter[0].calendarMayOccasions = [];
          vm.occasionReporter[0].calendarMayMonthOverlap = {};
          vm.occasionReporter[0].calendarMayOverlap = 0;
          vm.occasionReporter[0].calendarMayTotal = 0;
          vm.occasionReporter[0].calendarJun = 0;
          vm.occasionReporter[0].calendarJunOccasions = [];
          vm.occasionReporter[0].calendarJuneOverlap = {};
          vm.occasionReporter[0].calendarJunOverlap = 0;
          vm.occasionReporter[0].calendarJunTotal = 0;
          vm.occasionReporter[0].calendarJul = 0;
          vm.occasionReporter[0].calendarJulOccasions = [];
          vm.occasionReporter[0].calendarJulyOverlap = {};
          vm.occasionReporter[0].calendarJulOverlap = 0;
          vm.occasionReporter[0].calendarJulTotal = 0;
          vm.occasionReporter[0].calendarAug = 0;
          vm.occasionReporter[0].calendarAugOccasions = [];
          vm.occasionReporter[0].calendarAugustOverlap = {};
          vm.occasionReporter[0].calendarAugOverlap = 0;
          vm.occasionReporter[0].calendarAugTotal = 0;
          vm.occasionReporter[0].calendarSep = 0;
          vm.occasionReporter[0].calendarSepOccasions = [];
          vm.occasionReporter[0].calendarSeptemberOverlap = {};
          vm.occasionReporter[0].calendarSepOverlap = 0;
          vm.occasionReporter[0].calendarSepTotal = 0;
          vm.occasionReporter[0].calendarOct = 0;
          vm.occasionReporter[0].calendarOctOccasions = [];
          vm.occasionReporter[0].calendarOctoberOverlap = {};
          vm.occasionReporter[0].calendarOctOverlap = 0;
          vm.occasionReporter[0].calendarOctTotal = 0;
          vm.occasionReporter[0].calendarNov = 0;
          vm.occasionReporter[0].calendarNovOccasions = [];
          vm.occasionReporter[0].calendarNovemberOverlap = {};
          vm.occasionReporter[0].calendarNovOverlap = 0;
          vm.occasionReporter[0].calendarNovTotal = 0;
          vm.occasionReporter[0].calendarDec = 0;
          vm.occasionReporter[0].calendarDecOccasions = [];
          vm.occasionReporter[0].calendarDecemberOverlap = {};
          vm.occasionReporter[0].calendarDecOverlap = 0;
          vm.occasionReporter[0].calendarDecTotal = 0;
          vm.occasionReporter[0].todayClean = yearStart.getDate().toString() + ' ' + months[yearStart.getMonth()] + ' ' + yearStart.getFullYear().toString();
          vm.occasionReporter[0].oneYearClean = yearEnd.getDate().toString() + ' ' + months[yearEnd.getMonth()] + ' ' + yearEnd.getFullYear().toString();
          vm.occasionReporter[0].yearTotal = 0;
          vm.occasionReporter[0].yearAnnual = 0;
          vm.occasionReporter[0].yearOneOff = 0;
          vm.occasionReporter[0].yearJan = 0;
          vm.occasionReporter[0].yearJanOccasions = [];
          vm.occasionReporter[0].yearJanuaryOverlap = {};
          vm.occasionReporter[0].yearJanOverlap = 0;
          vm.occasionReporter[0].yearJanTotal = 0;
          vm.occasionReporter[0].yearFeb = 0;
          vm.occasionReporter[0].yearFebOccasions = [];
          vm.occasionReporter[0].yearFebruaryOverlap = {};
          vm.occasionReporter[0].yearFebOverlap = 0;
          vm.occasionReporter[0].yearFebTotal = 0;
          vm.occasionReporter[0].yearMar = 0;
          vm.occasionReporter[0].yearMarOccasions = [];
          vm.occasionReporter[0].yearMarchOverlap = {};
          vm.occasionReporter[0].yearMarOverlap = 0;
          vm.occasionReporter[0].yearMarTotal = 0;
          vm.occasionReporter[0].yearApr = 0;
          vm.occasionReporter[0].yearAprOccasions = [];
          vm.occasionReporter[0].yearAprilOverlap = {};
          vm.occasionReporter[0].yearAprOverlap = 0;
          vm.occasionReporter[0].yearAprTotal = 0;
          vm.occasionReporter[0].yearMay = 0;
          vm.occasionReporter[0].yearMayOccasions = [];
          vm.occasionReporter[0].yearMayMonthOverlap = {};
          vm.occasionReporter[0].yearMayOverlap = 0;
          vm.occasionReporter[0].yearMayTotal = 0;
          vm.occasionReporter[0].yearJun = 0;
          vm.occasionReporter[0].yearJunOccasions = [];
          vm.occasionReporter[0].yearJuneOverlap = {};
          vm.occasionReporter[0].yearJunOverlap = 0;
          vm.occasionReporter[0].yearJunTotal = 0;
          vm.occasionReporter[0].yearJul = 0;
          vm.occasionReporter[0].yearJulOccasions = [];
          vm.occasionReporter[0].yearJulyOverlap = {};
          vm.occasionReporter[0].yearJulOverlap = 0;
          vm.occasionReporter[0].yearJulTotal = 0;
          vm.occasionReporter[0].yearAug = 0;
          vm.occasionReporter[0].yearAugOccasions = [];
          vm.occasionReporter[0].yearAugustOverlap = {};
          vm.occasionReporter[0].yearAugOverlap = 0;
          vm.occasionReporter[0].yearAugTotal = 0;
          vm.occasionReporter[0].yearSep = 0;
          vm.occasionReporter[0].yearSepOccasions = [];
          vm.occasionReporter[0].yearSeptemberOverlap = {};
          vm.occasionReporter[0].yearSepOverlap = 0;
          vm.occasionReporter[0].yearSepTotal = 0;
          vm.occasionReporter[0].yearOct = 0;
          vm.occasionReporter[0].yearOctOccasions = [];
          vm.occasionReporter[0].yearOctoberOverlap = {};
          vm.occasionReporter[0].yearOctOverlap = 0;
          vm.occasionReporter[0].yearOctTotal = 0;
          vm.occasionReporter[0].yearNov = 0;
          vm.occasionReporter[0].yearNovOccasions = [];
          vm.occasionReporter[0].yearNovemberOverlap = {};
          vm.occasionReporter[0].yearNovOverlap = 0;
          vm.occasionReporter[0].yearNovTotal = 0;
          vm.occasionReporter[0].yearDec = 0;
          vm.occasionReporter[0].yearDecOccasions = [];
          vm.occasionReporter[0].yearDecemberOverlap = {};
          vm.occasionReporter[0].yearDecOverlap = 0;
          vm.occasionReporter[0].yearDecTotal = 0;

          checkDate = new Date(calendarStart);
          do {
            for (let i = 0; i < fullOccasions.length; i++) {
              occasionDate = new Date(fullOccasions[i].day_of);
              if ((checkDate.getMonth() === occasionDate.getMonth()) && (checkDate.getDate() === occasionDate.getDate())) {
                if (fullOccasions[i].is_annual) {
                  vm.occasionReporter[0].calendarAnnual++;
                  vm.occasionReporter[0].calendarTotal++;
                  if (checkDate.getMonth() === 0) {

                    vm.occasionReporter[0].calendarJanOccasions.push(fullOccasions[i].name);
                    vm.occasionReporter[0].calendarJan = vm.occasionReporter[0].calendarJanOccasions.length;
                    if (vm.occasionReporter[0].calendarJanuaryOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].calendarJanuaryOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].calendarJanTotal++;
                    } else {
                      vm.occasionReporter[0].calendarJanOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 1) {

                    vm.occasionReporter[0].calendarFebOccasions.push(fullOccasions[i].name);
                    vm.occasionReporter[0].calendarFeb = vm.occasionReporter[0].calendarFebOccasions.length;
                    if (vm.occasionReporter[0].calendarFebruaryOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].calendarFebruaryOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].calendarFebTotal++;
                    } else {
                      vm.occasionReporter[0].calendarFebOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 2) {

                    vm.occasionReporter[0].calendarMarOccasions.push(fullOccasions[i].name);
                    vm.occasionReporter[0].calendarMar = vm.occasionReporter[0].calendarMarOccasions.length;
                    if (vm.occasionReporter[0].calendarMarchOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].calendarMarchOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].calendarMarTotal++;
                    } else {
                      vm.occasionReporter[0].calendarMarOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 3) {

                    vm.occasionReporter[0].calendarAprOccasions.push(fullOccasions[i].name);
                    vm.occasionReporter[0].calendarApr = vm.occasionReporter[0].calendarAprOccasions.length;
                    if (vm.occasionReporter[0].calendarAprilOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].calendarAprilOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].calendarAprTotal++;
                    } else {
                      vm.occasionReporter[0].calendarAprOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 4) {

                    vm.occasionReporter[0].calendarMayOccasions.push(fullOccasions[i].name);
                    vm.occasionReporter[0].calendarMay = vm.occasionReporter[0].calendarMayOccasions.length;
                    if (vm.occasionReporter[0].calendarMayMonthOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].calendarMayMonthOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].calendarMayTotal++;
                    } else {
                      vm.occasionReporter[0].calendarMayOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 5) {

                    vm.occasionReporter[0].calendarJunOccasions.push(fullOccasions[i].name);
                    vm.occasionReporter[0].calendarJun = vm.occasionReporter[0].calendarJunOccasions.length;
                    if (vm.occasionReporter[0].calendarJuneOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].calendarJuneOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].calendarJunTotal++;
                    } else {
                      vm.occasionReporter[0].calendarJunOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 6) {

                    vm.occasionReporter[0].calendarJulOccasions.push(fullOccasions[i].name);
                    vm.occasionReporter[0].calendarJul = vm.occasionReporter[0].calendarJulOccasions.length;
                    if (vm.occasionReporter[0].calendarJulyOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].calendarJulyOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].calendarJulTotal++;
                    } else {
                      vm.occasionReporter[0].calendarJulOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 7) {

                    vm.occasionReporter[0].calendarAugOccasions.push(fullOccasions[i].name);
                    vm.occasionReporter[0].calendarAug = vm.occasionReporter[0].calendarAugOccasions.length;
                    if (vm.occasionReporter[0].calendarAugustOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].calendarAugustOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].calendarAugTotal++;
                    } else {
                      vm.occasionReporter[0].calendarAugOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 8) {

                    vm.occasionReporter[0].calendarSepOccasions.push(fullOccasions[i].name);
                    vm.occasionReporter[0].calendarSep = vm.occasionReporter[0].calendarSepOccasions.length;
                    if (vm.occasionReporter[0].calendarSeptemberOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].calendarSeptemberOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].calendarSepTotal++;
                    } else {
                      vm.occasionReporter[0].calendarSepOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 9) {

                    vm.occasionReporter[0].calendarOctOccasions.push(fullOccasions[i].name);
                    vm.occasionReporter[0].calendarOct = vm.occasionReporter[0].calendarOctOccasions.length;
                    if (vm.occasionReporter[0].calendarOctoberOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].calendarOctoberOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].calendarOctTotal++;
                    } else {
                      vm.occasionReporter[0].calendarOctOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 10) {

                    vm.occasionReporter[0].calendarNovOccasions.push(fullOccasions[i].name);
                    vm.occasionReporter[0].calendarNov = vm.occasionReporter[0].calendarNovOccasions.length;
                    if (vm.occasionReporter[0].calendarNovemberOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].calendarNovemberOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].calendarNovTotal++;
                    } else {
                      vm.occasionReporter[0].calendarNovOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 11) {

                    vm.occasionReporter[0].calendarDecOccasions.push(fullOccasions[i].name);
                    vm.occasionReporter[0].calendarDec = vm.occasionReporter[0].calendarDecOccasions.length;
                    if (vm.occasionReporter[0].calendarDecemberOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].calendarDecemberOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].calendarDecTotal++;
                    } else {
                      vm.occasionReporter[0].calendarDecOverlap++;
                    }
                  }
                } else {
                  if (checkDate.getFullYear() === occasionDate.getFullYear()) {
                    vm.occasionReporter[0].calendarOneOff++;
                    vm.occasionReporter[0].calendarTotal++;
                    if (checkDate.getMonth() === 0) {

                      vm.occasionReporter[0].calendarJanOccasions.push(fullOccasions[i].name);
                      vm.occasionReporter[0].calendarJan = vm.occasionReporter[0].calendarJanOccasions.length;
                      if (vm.occasionReporter[0].calendarJanuaryOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].calendarJanuaryOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].calendarJanTotal++;
                      } else {
                        vm.occasionReporter[0].calendarJanOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 1) {

                      vm.occasionReporter[0].calendarFebOccasions.push(fullOccasions[i].name);
                      vm.occasionReporter[0].calendarFeb = vm.occasionReporter[0].calendarFebOccasions.length;
                      if (vm.occasionReporter[0].calendarFebruaryOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].calendarFebruaryOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].calendarFebTotal++;
                      } else {
                        vm.occasionReporter[0].calendarFebOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 2) {

                      vm.occasionReporter[0].calendarMarOccasions.push(fullOccasions[i].name);
                      vm.occasionReporter[0].calendarMar = vm.occasionReporter[0].calendarMarOccasions.length;
                      if (vm.occasionReporter[0].calendarMarchOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].calendarMarchOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].calendarMarTotal++;
                      } else {
                        vm.occasionReporter[0].calendarMarOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 3) {

                      vm.occasionReporter[0].calendarAprOccasions.push(fullOccasions[i].name);
                      vm.occasionReporter[0].calendarApr = vm.occasionReporter[0].calendarAprOccasions.length;
                      if (vm.occasionReporter[0].calendarAprilOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].calendarAprilOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].calendarAprTotal++;
                      } else {
                        vm.occasionReporter[0].calendarAprOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 4) {

                      vm.occasionReporter[0].calendarMayOccasions.push(fullOccasions[i].name);
                      vm.occasionReporter[0].calendarMay = vm.occasionReporter[0].calendarMayOccasions.length;
                      if (vm.occasionReporter[0].calendarMayMonthOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].calendarMayMonthOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].calendarMayTotal++;
                      } else {
                        vm.occasionReporter[0].calendarMayOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 5) {

                      vm.occasionReporter[0].calendarJunOccasions.push(fullOccasions[i].name);
                      vm.occasionReporter[0].calendarJun = vm.occasionReporter[0].calendarJunOccasions.length;
                      if (vm.occasionReporter[0].calendarJuneOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].calendarJuneOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].calendarJunTotal++;
                      } else {
                        vm.occasionReporter[0].calendarJunOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 6) {

                      vm.occasionReporter[0].calendarJulOccasions.push(fullOccasions[i].name);
                      vm.occasionReporter[0].calendarJul = vm.occasionReporter[0].calendarJulOccasions.length;
                      if (vm.occasionReporter[0].calendarJulyOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].calendarJulyOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].calendarJulTotal++;
                      } else {
                        vm.occasionReporter[0].calendarJulOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 7) {

                      vm.occasionReporter[0].calendarAugOccasions.push(fullOccasions[i].name);
                      vm.occasionReporter[0].calendarAug = vm.occasionReporter[0].calendarAugOccasions.length;
                      if (vm.occasionReporter[0].calendarAugustOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].calendarAugustOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].calendarAugTotal++;
                      } else {
                        vm.occasionReporter[0].calendarAugOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 8) {

                      vm.occasionReporter[0].calendarSepOccasions.push(fullOccasions[i].name);
                      vm.occasionReporter[0].calendarSep = vm.occasionReporter[0].calendarSepOccasions.length;
                      if (vm.occasionReporter[0].calendarSeptemberOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].calendarSeptemberOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].calendarSepTotal++;
                      } else {
                        vm.occasionReporter[0].calendarSepOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 9) {

                      vm.occasionReporter[0].calendarOctOccasions.push(fullOccasions[i].name);
                      vm.occasionReporter[0].calendarOct = vm.occasionReporter[0].calendarOctOccasions.length;
                      if (vm.occasionReporter[0].calendarOctoberOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].calendarOctoberOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].calendarOctTotal++;
                      } else {
                        vm.occasionReporter[0].calendarOctOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 10) {

                      vm.occasionReporter[0].calendarNovOccasions.push(fullOccasions[i].name);
                      vm.occasionReporter[0].calendarNov = vm.occasionReporter[0].calendarNovOccasions.length;
                      if (vm.occasionReporter[0].calendarNovemberOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].calendarNovemberOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].calendarNovTotal++;
                      } else {
                        vm.occasionReporter[0].calendarNovOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 11) {

                      vm.occasionReporter[0].calendarDecOccasions.push(fullOccasions[i].name);
                      vm.occasionReporter[0].calendarDec = vm.occasionReporter[0].calendarDecOccasions.length;
                      if (vm.occasionReporter[0].calendarDecemberOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].calendarDecemberOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].calendarDecTotal++;
                      } else {
                        vm.occasionReporter[0].calendarDecOverlap++;
                      }
                    }
                  }
                }
              }
            }


            checkDate.setDate(checkDate.getDate() + 1);
          } while(!areSameDate(checkDate, calendarEnd));

          checkDate = new Date(yearStart);
          do {
            for (let j = 0; j < fullOccasions.length; j++) {
              occasionDate = new Date(fullOccasions[j].day_of);
              if ((checkDate.getDate() === occasionDate.getDate()) && (checkDate.getMonth() === occasionDate.getMonth())) {
                if (fullOccasions[j].is_annual) {
                  vm.occasionReporter[0].yearTotal++;
                  vm.occasionReporter[0].yearAnnual++;
                  if (checkDate.getMonth() === 0) {

                    vm.occasionReporter[0].yearJanOccasions.push(fullOccasions[j].name);
                    vm.occasionReporter[0].yearJan = vm.occasionReporter[0].yearJanOccasions.length;
                    if (vm.occasionReporter[0].yearJanuaryOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].yearJanuaryOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].yearJanTotal++;
                    } else {
                      vm.occasionReporter[0].yearJanOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 1) {

                    vm.occasionReporter[0].yearFebOccasions.push(fullOccasions[j].name);
                    vm.occasionReporter[0].yearFeb = vm.occasionReporter[0].yearFebOccasions.length;
                    if (vm.occasionReporter[0].yearFebruaryOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].yearFebruaryOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].yearFebTotal++;
                    } else {
                      vm.occasionReporter[0].yearFebOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 2) {

                    vm.occasionReporter[0].yearMarOccasions.push(fullOccasions[j].name);
                    vm.occasionReporter[0].yearMar = vm.occasionReporter[0].yearMarOccasions.length;
                    if (vm.occasionReporter[0].yearMarchOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].yearMarchOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].yearMarTotal++;
                    } else {
                      vm.occasionReporter[0].yearMarOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 3) {

                    vm.occasionReporter[0].yearAprOccasions.push(fullOccasions[j].name);
                    vm.occasionReporter[0].yearApr = vm.occasionReporter[0].yearAprOccasions.length;
                    if (vm.occasionReporter[0].yearAprilOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].yearAprilOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].yearAprTotal++;
                    } else {
                      vm.occasionReporter[0].yearAprOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 4) {

                    vm.occasionReporter[0].yearMayOccasions.push(fullOccasions[j].name);
                    vm.occasionReporter[0].yearMay = vm.occasionReporter[0].yearMayOccasions.length;
                    if (vm.occasionReporter[0].yearMayMonthOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].yearMayMonthOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].yearMayTotal++;
                    } else {
                      vm.occasionReporter[0].yearMayOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 5) {

                    vm.occasionReporter[0].yearJunOccasions.push(fullOccasions[j].name);
                    vm.occasionReporter[0].yearJun = vm.occasionReporter[0].yearJunOccasions.length;
                    if (vm.occasionReporter[0].yearJuneOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].yearJuneOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].yearJunTotal++;
                    } else {
                      vm.occasionReporter[0].yearJunOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 6) {

                    vm.occasionReporter[0].yearJulOccasions.push(fullOccasions[j].name);
                    vm.occasionReporter[0].yearJul = vm.occasionReporter[0].yearJulOccasions.length;
                    if (vm.occasionReporter[0].yearJulyOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].yearJulyOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].yearJulTotal++;
                    } else {
                      vm.occasionReporter[0].yearJulOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 7) {

                    vm.occasionReporter[0].yearAugOccasions.push(fullOccasions[j].name);
                    vm.occasionReporter[0].yearAug = vm.occasionReporter[0].yearAugOccasions.length;
                    if (vm.occasionReporter[0].yearAugustOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].yearAugustOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].yearAugTotal++;
                    } else {
                      vm.occasionReporter[0].yearAugOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 8) {

                    vm.occasionReporter[0].yearSepOccasions.push(fullOccasions[j].name);
                    vm.occasionReporter[0].yearSep = vm.occasionReporter[0].yearSepOccasions.length;
                    if (vm.occasionReporter[0].yearSeptemberOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].yearSeptemberOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].yearSepTotal++;
                    } else {
                      vm.occasionReporter[0].yearSepOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 9) {

                    vm.occasionReporter[0].yearOctOccasions.push(fullOccasions[j].name);
                    vm.occasionReporter[0].yearOct = vm.occasionReporter[0].yearOctOccasions.length;
                    if (vm.occasionReporter[0].yearOctoberOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].yearOctoberOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].yearOctTotal++;
                    } else {
                      vm.occasionReporter[0].yearOctOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 10) {

                    vm.occasionReporter[0].yearNovOccasions.push(fullOccasions[j].name);
                    vm.occasionReporter[0].yearNov = vm.occasionReporter[0].yearNovOccasions.length;
                    if (vm.occasionReporter[0].yearNovemberOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].yearNovemberOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].yearNovTotal++;
                    } else {
                      vm.occasionReporter[0].yearNovOverlap++;
                    }
                  }
                  if (checkDate.getMonth() === 11) {

                    vm.occasionReporter[0].yearDecOccasions.push(fullOccasions[j].name);
                    vm.occasionReporter[0].yearDec = vm.occasionReporter[0].yearDecOccasions.length;
                    if (vm.occasionReporter[0].yearDecemberOverlap[checkDate.getDate().toString()] === undefined) {
                      vm.occasionReporter[0].yearDecemberOverlap[checkDate.getDate().toString()] = true;
                      vm.occasionReporter[0].yearDecTotal++;
                    } else {
                      vm.occasionReporter[0].yearDecOverlap++;
                    }
                  }
                } else {
                  if (checkDate.getFullYear() === occasionDate.getFullYear()) {
                    vm.occasionReporter[0].yearTotal++;
                    vm.occasionReporter[0].yearOneOff++;
                    if (checkDate.getMonth() === 0) {

                      vm.occasionReporter[0].yearJanOccasions.push(fullOccasions[j].name);
                      vm.occasionReporter[0].yearJan = vm.occasionReporter[0].yearJanOccasions.length;
                      if (vm.occasionReporter[0].yearJanuaryOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].yearJanuaryOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].yearJanTotal++;
                      } else {
                        vm.occasionReporter[0].yearJanOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 1) {

                      vm.occasionReporter[0].yearFebOccasions.push(fullOccasions[j].name);
                      vm.occasionReporter[0].yearFeb = vm.occasionReporter[0].yearFebOccasions.length;
                      if (vm.occasionReporter[0].yearFebruaryOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].yearFebruaryOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].yearFebTotal++;
                      } else {
                        vm.occasionReporter[0].yearFebOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 2) {

                      vm.occasionReporter[0].yearMarOccasions.push(fullOccasions[j].name);
                      vm.occasionReporter[0].yearMar = vm.occasionReporter[0].yearMarOccasions.length;
                      if (vm.occasionReporter[0].yearMarchOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].yearMarchOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].yearMarTotal++;
                      } else {
                        vm.occasionReporter[0].yearMarOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 3) {

                      vm.occasionReporter[0].yearAprOccasions.push(fullOccasions[j].name);
                      vm.occasionReporter[0].yearApr = vm.occasionReporter[0].yearAprOccasions.length;
                      if (vm.occasionReporter[0].yearAprilOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].yearAprilOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].yearAprTotal++;
                      } else {
                        vm.occasionReporter[0].yearAprOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 4) {

                      vm.occasionReporter[0].yearMayOccasions.push(fullOccasions[j].name);
                      vm.occasionReporter[0].yearMay = vm.occasionReporter[0].yearMayOccasions.length;
                      if (vm.occasionReporter[0].yearMayMonthOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].yearMayMonthOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].yearMayTotal++;
                      } else {
                        vm.occasionReporter[0].yearMayOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 5) {

                      vm.occasionReporter[0].yearJunOccasions.push(fullOccasions[j].name);
                      vm.occasionReporter[0].yearJun = vm.occasionReporter[0].yearJunOccasions.length;
                      if (vm.occasionReporter[0].yearJuneOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].yearJuneOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].yearJunTotal++;
                      } else {
                        vm.occasionReporter[0].yearJunOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 6) {

                      vm.occasionReporter[0].yearJulOccasions.push(fullOccasions[j].name);
                      vm.occasionReporter[0].yearJul = vm.occasionReporter[0].yearJulOccasions.length;
                      if (vm.occasionReporter[0].yearJulyOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].yearJulyOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].yearJulTotal++;
                      } else {
                        vm.occasionReporter[0].yearJulOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 7) {

                      vm.occasionReporter[0].yearAugOccasions.push(fullOccasions[j].name);
                      vm.occasionReporter[0].yearAug = vm.occasionReporter[0].yearAugOccasions.length;
                      if (vm.occasionReporter[0].yearAugustOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].yearAugustOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].yearAugTotal++;
                      } else {
                        vm.occasionReporter[0].yearAugOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 8) {

                      vm.occasionReporter[0].yearSepOccasions.push(fullOccasions[j].name);
                      vm.occasionReporter[0].yearSep = vm.occasionReporter[0].yearSepOccasions.length;
                      if (vm.occasionReporter[0].yearSeptemberOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].yearSeptemberOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].yearSepTotal++;
                      } else {
                        vm.occasionReporter[0].yearSepOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 9) {

                      vm.occasionReporter[0].yearOctOccasions.push(fullOccasions[j].name);
                      vm.occasionReporter[0].yearOct = vm.occasionReporter[0].yearOctOccasions.length;
                      if (vm.occasionReporter[0].yearOctoberOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].yearOctoberOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].yearOctTotal++;
                      } else {
                        vm.occasionReporter[0].yearOctOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 10) {

                      vm.occasionReporter[0].yearNovOccasions.push(fullOccasions[j].name);
                      vm.occasionReporter[0].yearNov = vm.occasionReporter[0].yearNovOccasions.length;
                      if (vm.occasionReporter[0].yearNovemberOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].yearNovemberOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].yearNovTotal++;
                      } else {
                        vm.occasionReporter[0].yearNovOverlap++;
                      }
                    }
                    if (checkDate.getMonth() === 11) {

                      vm.occasionReporter[0].yearDecOccasions.push(fullOccasions[j].name);
                      vm.occasionReporter[0].yearDec = vm.occasionReporter[0].yearDecOccasions.length;
                      if (vm.occasionReporter[0].yearDecemberOverlap[checkDate.getDate().toString()] === undefined) {
                        vm.occasionReporter[0].yearDecemberOverlap[checkDate.getDate().toString()] = true;
                        vm.occasionReporter[0].yearDecTotal++;
                      } else {
                        vm.occasionReporter[0].yearDecOverlap++;
                      }
                    }
                  }
                }
              }
            }

            checkDate.setDate(checkDate.getDate() + 1);
          } while(!areSameDate(checkDate, yearEnd));

        });

        reportForOccasions.setAttribute("style", "display: initial;");
        occasionReporter.setAttribute("style", "visibility: hidden;");
        occasionsManagerDone.setAttribute("style", "visibility: hidden;");
        userOccasionsEditingDiv.setAttribute("style", "display: none;");
      }

      function addNewBill() {
        let subObj = {
          user_id: currentUserId,
          name: '',
          pay_to: '',
          address_line1: '',
          address_line2: '',
          city: '',
          state: '',
          zip: '',
          balance: 0.00,
          amount_due: 0.00,
          amount_paid: 0.00,
          due_date: new Date(),
          date_paid: null,
          is_paid: false
        };
        $http.post('/bills', subObj)
        .then(addedbillData=>{
          let addedBill = addedbillData.data[0];
          editBill(addedBill.id);
        });
      }

      function deleteTask(taskId) {
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
        let userTaskDeleteConfirmDiv = document.getElementById('userTaskDeleteConfirmDiv');
        let tasksManagementDiv = document.getElementById('tasksManagementDiv');
        let userTasksEditingDiv = document.getElementById('userTasksEditingDiv');
        let tasksManagerDone = document.getElementById('tasksManagerDone');
        let userTaskDeleteConfirmButtons = document.getElementById('userTaskDeleteConfirmButtons');
        let userTaskConfirmYes = document.getElementById('userTaskConfirmYes');
        if (userTaskConfirmYes) {
          userTaskConfirmYes.parentNode.removeChild(userTaskConfirmYes);
          userTaskConfirmYes = document.createElement('a');
          userTaskDeleteConfirmButtons.appendChild(userTaskConfirmYes);
          userTaskConfirmYes.id = 'userTaskConfirmYes';
          userTaskConfirmYes.className = 'btn';
          userTaskConfirmYes.innerHTML = 'yes';
          userTaskConfirmYes.setAttribute("style", "cursor: pointer;");
        }
        let userTaskConfirmNo = document.getElementById('userTaskConfirmNo');
        if (userTaskConfirmNo) {
          userTaskConfirmNo.parentNode.removeChild(userTaskConfirmNo);
          userTaskConfirmNo = document.createElement('a');
          userTaskDeleteConfirmButtons.appendChild(userTaskConfirmNo);
          userTaskConfirmNo.id = 'userTaskConfirmNo';
          userTaskConfirmNo.className = 'btn';
          userTaskConfirmNo.innerHTML = 'no';
          userTaskConfirmNo.setAttribute("style", "cursor: pointer;");
        }
        let userTaskDeleteName = document.getElementById('userTaskDeleteName');
        let userTaskDue = document.getElementById('userTaskDue');
        let dueDate;
        let userTaskCompleted = document.getElementById('userTaskCompletedP');
        let completedDate;

        $http.get(`/tasks/${taskId}`)
        .then(taskData=>{
          let task = taskData.data;
          userTaskDeleteName.innerHTML = task.name;
          dueDate = new Date(task.due_date);
          userTaskDue.innerHTML = 'Due: ' + dueDate.getDate().toString() + ' ' + months[dueDate.getMonth()] + ' ' + dueDate.getFullYear().toString();
          if (task.is_completed) {
            completedDate = new Date(task.completed_date);
            userTaskCompleted.innerHTML = 'Completed on ' + completedDate.getDate().toString() + ' ' + months[completedDate.getMonth()] + ' ' + completedDate.getFullYear().toString();
          } else {
            userTaskCompleted.innerHTML = 'Not Completed';
          }


          userTaskConfirmYes.addEventListener('click', ()=>{
            $http.delete(`/tasks/${taskId}`)
            .then(()=>{
              userTaskDeleteConfirmDiv.setAttribute("style", "display: none;");
              tasksManagementDiv.setAttribute("style", "display: initial;");
              taskManager();
            });
          });

          userTaskConfirmNo.addEventListener('click', ()=>{
            userTaskDeleteConfirmDiv.setAttribute("style", "display: none;");
            tasksManagementDiv.setAttribute("style", "display: initial;");
          });

        });



        userTaskDeleteConfirmDiv.setAttribute("style", "display: initial;");
        tasksManagementDiv.setAttribute("style", "display: none;");
        userTasksEditingDiv.setAttribute("style", "display: none;");
        tasksManagerDone.setAttribute("style", "visibility: visible;");
      }

      function deleteThisGoal(goalId) {
        $http.delete(`/goals/${goalId}`)
        .then(()=>{
          goalManager();
        });
      }

      function pruneEmptyGoals() {
        $http.get(`/goalsbyuser/${currentUserId}`)
        .then(goalsData=>{
          let goals = goalsData.data;
          if (goals.length > 0) {
            for (let i = 0; i < goals.length; i++) {
              if (goals[i].weekly_goal < 0.5) {
                deleteThisGoal(goals[i].id);
              }
            }
          }
        });
      }

      function userGoalsEditorDone() {
        let userGoalsEditingDiv = document.getElementById('userGoalsEditingDiv');
        let goalsManagerDone = document.getElementById('goalsManagerDone');


        userGoalsEditingDiv.setAttribute("style", "display: none;");
        goalsManagerDone.setAttribute("style", "visibility: visible;");
        pruneEmptyGoals();
        goalManager();
      }

      function editGoal(goalId) {
        let pushIt = false;
        let userGoalsEditingDiv = document.getElementById('userGoalsEditingDiv');
        let goalsManagerDone = document.getElementById('goalsManagerDone');
        let userGoalBlocktypeDiv = document.getElementById('userGoalBlocktypeDiv');
        let userGoalBlocktypeSelect = document.getElementById('userGoalBlocktypeSelect');
        if (userGoalBlocktypeSelect) {
          userGoalBlocktypeSelect.parentNode.removeChild(userGoalBlocktypeSelect);
          userGoalBlocktypeSelect = document.createElement('select');
          userGoalBlocktypeDiv.appendChild(userGoalBlocktypeSelect);
          userGoalBlocktypeSelect.id = 'userGoalBlocktypeSelect';
          userGoalBlocktypeSelect.className = 'pure-input-1';
        }
        let element;
        let userGoalsHoursDiv = document.getElementById('userGoalsHoursDiv');
        let userGoalsHours = document.getElementById('userGoalsHours');
        if (userGoalsHours) {
          userGoalsHours.parentNode.removeChild(userGoalsHours);
          userGoalsHours = document.createElement('input');
          userGoalsHoursDiv.appendChild(userGoalsHours);
          userGoalsHours.id = 'userGoalsHours';
          userGoalsHours.type = 'number';
          userGoalsHours.min = '0.0';
          userGoalsHours.max = '168.0';
          userGoalsHours.step = '0.5';
          userGoalsHours.className = 'pure-input-1';
        }


        $http.get(`/blocktypesbyuser/${currentUserId}`)
        .then(blocktypesData=>{
          let blocks = blocktypesData.data;
          $http.get(`/goalsbyuser/${currentUserId}`)
          .then(goalsData=>{
            let goals = goalsData.data;
            $http.get(`/goals/${goalId}`)
            .then(currentGoalData=>{
              let currentGoal = currentGoalData.data;
              let blocksList = [];
              for (let i = 0; i < blocks.length; i++) {
                if (currentGoal.block_type === blocks[i].id) {
                  blocksList.push(blocks[i]);
                } else {
                  pushIt = true;
                  for (let j = 0; j < goals.length; j++) {
                    if (goals[j].block_type === blocks[i].id) {
                      pushIt = false;
                    }
                  }
                  if (pushIt) {
                    blocksList.push(blocks[i]);
                  }
                }
              }
              let blockSelect = blocksList.sort((a, b)=>{
                if (a.type.toLowerCase() < b.type.toLowerCase()) {
                  return -1;
                } else if (a.type.toLowerCase() > b.type.toLowerCase()) {
                  return 1;
                } else {
                  return 0;
                }
              });
              for (let k = 0; k < blockSelect.length; k++) {
                element = document.createElement('option');
                userGoalBlocktypeSelect.appendChild(element);
                element.value = blockSelect[k].id;
                element.innerHTML = blockSelect[k].type;
              }
              userGoalBlocktypeSelect.value = currentGoal.block_type;
              userGoalsHours.value = currentGoal.weekly_goal;

              userGoalBlocktypeSelect.addEventListener('change', ()=>{
                let subObj = {
                  block_type: parseInt(userGoalBlocktypeSelect.value)
                };
                $http.patch(`/goals/${goalId}`, subObj)
                .then(()=>{
                  currentGoal.block_type = parseInt(userGoalBlocktypeSelect.value);
                });
              });

              userGoalsHours.addEventListener('focusout', ()=>{
                let subObj = {
                  weekly_goal: userGoalsHours.value
                };
                if (parseInt(currentGoal.weekly_goal) !== parseInt(userGoalsHours.value)) {
                  $http.patch(`/goals/${goalId}`, subObj)
                  .then(()=>{
                    currentGoal.weekly_goal = userGoalsHours.value;
                  });
                }
              });
            });
          });
        });

        userGoalsEditingDiv.setAttribute("style", "display: initial;");
        goalsManagerDone.setAttribute("style", "visibility: hidden;");
      }

      function toggleObservancMonth(month) {
        let januaryObservanceToggleDiv = document.getElementById('januaryObservanceToggleDiv');
        let januaryObservanceDiv = document.getElementById('januaryObservanceDiv');
        let februaryObservanceToggleDiv = document.getElementById('februaryObservanceToggleDiv');
        let februaryObservanceDiv = document.getElementById('februaryObservanceDiv');
        let marchObservanceToggleDiv = document.getElementById('marchObservanceToggleDiv');
        let marchObservanceDiv = document.getElementById('marchObservanceDiv');
        let aprilObservanceToggleDiv = document.getElementById('aprilObservanceToggleDiv');
        let aprilObservanceDiv = document.getElementById('aprilObservanceDiv');
        let mayObservanceToggleDiv = document.getElementById('mayObservanceToggleDiv');
        let mayObservanceDiv = document.getElementById('mayObservanceDiv');
        let juneObservanceToggleDiv = document.getElementById('juneObservanceToggleDiv');
        let juneObservanceDiv = document.getElementById('juneObservanceDiv');
        let julyObservanceToggleDiv = document.getElementById('julyObservanceToggleDiv');
        let julyObservanceDiv = document.getElementById('julyObservanceDiv');
        let augustObservanceToggleDiv = document.getElementById('augustObservanceToggleDiv');
        let augustObservanceDiv = document.getElementById('augustObservanceDiv');
        let septemberObservanceToggleDiv = document.getElementById('septemberObservanceToggleDiv');
        let septemberObservanceDiv = document.getElementById('septemberObservanceDiv');
        let octoberObservanceToggleDiv = document.getElementById('octoberObservanceToggleDiv');
        let octoberObservanceDiv = document.getElementById('octoberObservanceDiv');
        let novemberObservanceToggleDiv = document.getElementById('novemberObservanceToggleDiv');
        let novemberObservanceDiv = document.getElementById('novemberObservanceDiv');
        let decemberObservanceToggleDiv = document.getElementById('decemberObservanceToggleDiv');
        let decemberObservanceDiv = document.getElementById('decemberObservanceDiv');

        switch(month) {
          case('January'):
            januaryObservanceToggleDiv.setAttribute("style", "display: none");
            januaryObservanceDiv.setAttribute("style", "display: initial;");
            februaryObservanceToggleDiv.setAttribute("style", "display: initial;");
            februaryObservanceDiv.setAttribute("style", "display: none;");
            marchObservanceToggleDiv.setAttribute("style", "display: initial;");
            marchObservanceDiv.setAttribute("style", "display: none;");
            aprilObservanceToggleDiv.setAttribute("style", "display: initial;");
            aprilObservanceDiv.setAttribute("style", "display: none;");
            mayObservanceToggleDiv.setAttribute("style", "display: initial;");
            mayObservanceDiv.setAttribute("style", "display: none;");
            juneObservanceToggleDiv.setAttribute("style", "display: initial;");
            juneObservanceDiv.setAttribute("style", "display: none;");
            julyObservanceToggleDiv.setAttribute("style", "display: initial;");
            julyObservanceDiv.setAttribute("style", "display: none;");
            augustObservanceToggleDiv.setAttribute("style", "display: initial;");
            augustObservanceDiv.setAttribute("style", "display: none;");
            septemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            septemberObservanceDiv.setAttribute("style", "display: none;");
            octoberObservanceToggleDiv.setAttribute("style", "display: initial;");
            octoberObservanceDiv.setAttribute("style", "display: none;");
            novemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            novemberObservanceDiv.setAttribute("style", "display: none;");
            decemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            decemberObservanceDiv.setAttribute("style", "display: none;");
            break;
          case('February'):
            januaryObservanceToggleDiv.setAttribute("style", "display: initial");
            januaryObservanceDiv.setAttribute("style", "display: none;");
            februaryObservanceToggleDiv.setAttribute("style", "display: none;");
            februaryObservanceDiv.setAttribute("style", "display: initial;");
            marchObservanceToggleDiv.setAttribute("style", "display: initial;");
            marchObservanceDiv.setAttribute("style", "display: none;");
            aprilObservanceToggleDiv.setAttribute("style", "display: initial;");
            aprilObservanceDiv.setAttribute("style", "display: none;");
            mayObservanceToggleDiv.setAttribute("style", "display: initial;");
            mayObservanceDiv.setAttribute("style", "display: none;");
            juneObservanceToggleDiv.setAttribute("style", "display: initial;");
            juneObservanceDiv.setAttribute("style", "display: none;");
            julyObservanceToggleDiv.setAttribute("style", "display: initial;");
            julyObservanceDiv.setAttribute("style", "display: none;");
            augustObservanceToggleDiv.setAttribute("style", "display: initial;");
            augustObservanceDiv.setAttribute("style", "display: none;");
            septemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            septemberObservanceDiv.setAttribute("style", "display: none;");
            octoberObservanceToggleDiv.setAttribute("style", "display: initial;");
            octoberObservanceDiv.setAttribute("style", "display: none;");
            novemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            novemberObservanceDiv.setAttribute("style", "display: none;");
            decemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            decemberObservanceDiv.setAttribute("style", "display: none;");
            break;
          case('March'):
            januaryObservanceToggleDiv.setAttribute("style", "display: initial");
            januaryObservanceDiv.setAttribute("style", "display: none;");
            februaryObservanceToggleDiv.setAttribute("style", "display: initial;");
            februaryObservanceDiv.setAttribute("style", "display: none;");
            marchObservanceToggleDiv.setAttribute("style", "display: none;");
            marchObservanceDiv.setAttribute("style", "display: initial;");
            aprilObservanceToggleDiv.setAttribute("style", "display: initial;");
            aprilObservanceDiv.setAttribute("style", "display: none;");
            mayObservanceToggleDiv.setAttribute("style", "display: initial;");
            mayObservanceDiv.setAttribute("style", "display: none;");
            juneObservanceToggleDiv.setAttribute("style", "display: initial;");
            juneObservanceDiv.setAttribute("style", "display: none;");
            julyObservanceToggleDiv.setAttribute("style", "display: initial;");
            julyObservanceDiv.setAttribute("style", "display: none;");
            augustObservanceToggleDiv.setAttribute("style", "display: initial;");
            augustObservanceDiv.setAttribute("style", "display: none;");
            septemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            septemberObservanceDiv.setAttribute("style", "display: none;");
            octoberObservanceToggleDiv.setAttribute("style", "display: initial;");
            octoberObservanceDiv.setAttribute("style", "display: none;");
            novemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            novemberObservanceDiv.setAttribute("style", "display: none;");
            decemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            decemberObservanceDiv.setAttribute("style", "display: none;");
            break;
          case('April'):
            januaryObservanceToggleDiv.setAttribute("style", "display: initial");
            januaryObservanceDiv.setAttribute("style", "display: none;");
            februaryObservanceToggleDiv.setAttribute("style", "display: initial;");
            februaryObservanceDiv.setAttribute("style", "display: none;");
            marchObservanceToggleDiv.setAttribute("style", "display: initial;");
            marchObservanceDiv.setAttribute("style", "display: none;");
            aprilObservanceToggleDiv.setAttribute("style", "display: none;");
            aprilObservanceDiv.setAttribute("style", "display: initial;");
            mayObservanceToggleDiv.setAttribute("style", "display: initial;");
            mayObservanceDiv.setAttribute("style", "display: none;");
            juneObservanceToggleDiv.setAttribute("style", "display: initial;");
            juneObservanceDiv.setAttribute("style", "display: none;");
            julyObservanceToggleDiv.setAttribute("style", "display: initial;");
            julyObservanceDiv.setAttribute("style", "display: none;");
            augustObservanceToggleDiv.setAttribute("style", "display: initial;");
            augustObservanceDiv.setAttribute("style", "display: none;");
            septemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            septemberObservanceDiv.setAttribute("style", "display: none;");
            octoberObservanceToggleDiv.setAttribute("style", "display: initial;");
            octoberObservanceDiv.setAttribute("style", "display: none;");
            novemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            novemberObservanceDiv.setAttribute("style", "display: none;");
            decemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            decemberObservanceDiv.setAttribute("style", "display: none;");
            break;
          case('May'):
            januaryObservanceToggleDiv.setAttribute("style", "display: initial");
            januaryObservanceDiv.setAttribute("style", "display: none;");
            februaryObservanceToggleDiv.setAttribute("style", "display: initial;");
            februaryObservanceDiv.setAttribute("style", "display: none;");
            marchObservanceToggleDiv.setAttribute("style", "display: initial;");
            marchObservanceDiv.setAttribute("style", "display: none;");
            aprilObservanceToggleDiv.setAttribute("style", "display: initial;");
            aprilObservanceDiv.setAttribute("style", "display: none;");
            mayObservanceToggleDiv.setAttribute("style", "display: none;");
            mayObservanceDiv.setAttribute("style", "display: initial;");
            juneObservanceToggleDiv.setAttribute("style", "display: initial;");
            juneObservanceDiv.setAttribute("style", "display: none;");
            julyObservanceToggleDiv.setAttribute("style", "display: initial;");
            julyObservanceDiv.setAttribute("style", "display: none;");
            augustObservanceToggleDiv.setAttribute("style", "display: initial;");
            augustObservanceDiv.setAttribute("style", "display: none;");
            septemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            septemberObservanceDiv.setAttribute("style", "display: none;");
            octoberObservanceToggleDiv.setAttribute("style", "display: initial;");
            octoberObservanceDiv.setAttribute("style", "display: none;");
            novemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            novemberObservanceDiv.setAttribute("style", "display: none;");
            decemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            decemberObservanceDiv.setAttribute("style", "display: none;");
            break;
          case('June'):
            januaryObservanceToggleDiv.setAttribute("style", "display: initial");
            januaryObservanceDiv.setAttribute("style", "display: none;");
            februaryObservanceToggleDiv.setAttribute("style", "display: initial;");
            februaryObservanceDiv.setAttribute("style", "display: none;");
            marchObservanceToggleDiv.setAttribute("style", "display: initial;");
            marchObservanceDiv.setAttribute("style", "display: none;");
            aprilObservanceToggleDiv.setAttribute("style", "display: initial;");
            aprilObservanceDiv.setAttribute("style", "display: none;");
            mayObservanceToggleDiv.setAttribute("style", "display: initial;");
            mayObservanceDiv.setAttribute("style", "display: none;");
            juneObservanceToggleDiv.setAttribute("style", "display: none;");
            juneObservanceDiv.setAttribute("style", "display: initial;");
            julyObservanceToggleDiv.setAttribute("style", "display: initial;");
            julyObservanceDiv.setAttribute("style", "display: none;");
            augustObservanceToggleDiv.setAttribute("style", "display: initial;");
            augustObservanceDiv.setAttribute("style", "display: none;");
            septemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            septemberObservanceDiv.setAttribute("style", "display: none;");
            octoberObservanceToggleDiv.setAttribute("style", "display: initial;");
            octoberObservanceDiv.setAttribute("style", "display: none;");
            novemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            novemberObservanceDiv.setAttribute("style", "display: none;");
            decemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            decemberObservanceDiv.setAttribute("style", "display: none;");
            break;
          case('July'):
            januaryObservanceToggleDiv.setAttribute("style", "display: initial");
            januaryObservanceDiv.setAttribute("style", "display: none;");
            februaryObservanceToggleDiv.setAttribute("style", "display: initial;");
            februaryObservanceDiv.setAttribute("style", "display: none;");
            marchObservanceToggleDiv.setAttribute("style", "display: initial;");
            marchObservanceDiv.setAttribute("style", "display: none;");
            aprilObservanceToggleDiv.setAttribute("style", "display: initial;");
            aprilObservanceDiv.setAttribute("style", "display: none;");
            mayObservanceToggleDiv.setAttribute("style", "display: initial;");
            mayObservanceDiv.setAttribute("style", "display: none;");
            juneObservanceToggleDiv.setAttribute("style", "display: initial;");
            juneObservanceDiv.setAttribute("style", "display: none;");
            julyObservanceToggleDiv.setAttribute("style", "display: none;");
            julyObservanceDiv.setAttribute("style", "display: initial;");
            augustObservanceToggleDiv.setAttribute("style", "display: initial;");
            augustObservanceDiv.setAttribute("style", "display: none;");
            septemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            septemberObservanceDiv.setAttribute("style", "display: none;");
            octoberObservanceToggleDiv.setAttribute("style", "display: initial;");
            octoberObservanceDiv.setAttribute("style", "display: none;");
            novemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            novemberObservanceDiv.setAttribute("style", "display: none;");
            decemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            decemberObservanceDiv.setAttribute("style", "display: none;");
            break;
          case('August'):
            januaryObservanceToggleDiv.setAttribute("style", "display: initial");
            januaryObservanceDiv.setAttribute("style", "display: none;");
            februaryObservanceToggleDiv.setAttribute("style", "display: initial;");
            februaryObservanceDiv.setAttribute("style", "display: none;");
            marchObservanceToggleDiv.setAttribute("style", "display: initial;");
            marchObservanceDiv.setAttribute("style", "display: none;");
            aprilObservanceToggleDiv.setAttribute("style", "display: initial;");
            aprilObservanceDiv.setAttribute("style", "display: none;");
            mayObservanceToggleDiv.setAttribute("style", "display: initial;");
            mayObservanceDiv.setAttribute("style", "display: none;");
            juneObservanceToggleDiv.setAttribute("style", "display: initial;");
            juneObservanceDiv.setAttribute("style", "display: none;");
            julyObservanceToggleDiv.setAttribute("style", "display: initial;");
            julyObservanceDiv.setAttribute("style", "display: none;");
            augustObservanceToggleDiv.setAttribute("style", "display: none;");
            augustObservanceDiv.setAttribute("style", "display: initial;");
            septemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            septemberObservanceDiv.setAttribute("style", "display: none;");
            octoberObservanceToggleDiv.setAttribute("style", "display: initial;");
            octoberObservanceDiv.setAttribute("style", "display: none;");
            novemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            novemberObservanceDiv.setAttribute("style", "display: none;");
            decemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            decemberObservanceDiv.setAttribute("style", "display: none;");
            break;
          case('September'):
            januaryObservanceToggleDiv.setAttribute("style", "display: initial");
            januaryObservanceDiv.setAttribute("style", "display: none;");
            februaryObservanceToggleDiv.setAttribute("style", "display: initial;");
            februaryObservanceDiv.setAttribute("style", "display: none;");
            marchObservanceToggleDiv.setAttribute("style", "display: initial;");
            marchObservanceDiv.setAttribute("style", "display: none;");
            aprilObservanceToggleDiv.setAttribute("style", "display: initial;");
            aprilObservanceDiv.setAttribute("style", "display: none;");
            mayObservanceToggleDiv.setAttribute("style", "display: initial;");
            mayObservanceDiv.setAttribute("style", "display: none;");
            juneObservanceToggleDiv.setAttribute("style", "display: initial;");
            juneObservanceDiv.setAttribute("style", "display: none;");
            julyObservanceToggleDiv.setAttribute("style", "display: initial;");
            julyObservanceDiv.setAttribute("style", "display: none;");
            augustObservanceToggleDiv.setAttribute("style", "display: initial;");
            augustObservanceDiv.setAttribute("style", "display: none;");
            septemberObservanceToggleDiv.setAttribute("style", "display: none;");
            septemberObservanceDiv.setAttribute("style", "display: initial;");
            octoberObservanceToggleDiv.setAttribute("style", "display: initial;");
            octoberObservanceDiv.setAttribute("style", "display: none;");
            novemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            novemberObservanceDiv.setAttribute("style", "display: none;");
            decemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            decemberObservanceDiv.setAttribute("style", "display: none;");
            break;
          case('October'):
            januaryObservanceToggleDiv.setAttribute("style", "display: initial");
            januaryObservanceDiv.setAttribute("style", "display: none;");
            februaryObservanceToggleDiv.setAttribute("style", "display: initial;");
            februaryObservanceDiv.setAttribute("style", "display: none;");
            marchObservanceToggleDiv.setAttribute("style", "display: initial;");
            marchObservanceDiv.setAttribute("style", "display: none;");
            aprilObservanceToggleDiv.setAttribute("style", "display: initial;");
            aprilObservanceDiv.setAttribute("style", "display: none;");
            mayObservanceToggleDiv.setAttribute("style", "display: initial;");
            mayObservanceDiv.setAttribute("style", "display: none;");
            juneObservanceToggleDiv.setAttribute("style", "display: initial;");
            juneObservanceDiv.setAttribute("style", "display: none;");
            julyObservanceToggleDiv.setAttribute("style", "display: initial;");
            julyObservanceDiv.setAttribute("style", "display: none;");
            augustObservanceToggleDiv.setAttribute("style", "display: initial;");
            augustObservanceDiv.setAttribute("style", "display: none;");
            septemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            septemberObservanceDiv.setAttribute("style", "display: none;");
            octoberObservanceToggleDiv.setAttribute("style", "display: none;");
            octoberObservanceDiv.setAttribute("style", "display: initial;");
            novemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            novemberObservanceDiv.setAttribute("style", "display: none;");
            decemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            decemberObservanceDiv.setAttribute("style", "display: none;");
            break;
          case('November'):
            januaryObservanceToggleDiv.setAttribute("style", "display: initial");
            januaryObservanceDiv.setAttribute("style", "display: none;");
            februaryObservanceToggleDiv.setAttribute("style", "display: initial;");
            februaryObservanceDiv.setAttribute("style", "display: none;");
            marchObservanceToggleDiv.setAttribute("style", "display: initial;");
            marchObservanceDiv.setAttribute("style", "display: none;");
            aprilObservanceToggleDiv.setAttribute("style", "display: initial;");
            aprilObservanceDiv.setAttribute("style", "display: none;");
            mayObservanceToggleDiv.setAttribute("style", "display: initial;");
            mayObservanceDiv.setAttribute("style", "display: none;");
            juneObservanceToggleDiv.setAttribute("style", "display: initial;");
            juneObservanceDiv.setAttribute("style", "display: none;");
            julyObservanceToggleDiv.setAttribute("style", "display: initial;");
            julyObservanceDiv.setAttribute("style", "display: none;");
            augustObservanceToggleDiv.setAttribute("style", "display: initial;");
            augustObservanceDiv.setAttribute("style", "display: none;");
            septemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            septemberObservanceDiv.setAttribute("style", "display: none;");
            octoberObservanceToggleDiv.setAttribute("style", "display: initial;");
            octoberObservanceDiv.setAttribute("style", "display: none;");
            novemberObservanceToggleDiv.setAttribute("style", "display: none;");
            novemberObservanceDiv.setAttribute("style", "display: initial;");
            decemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            decemberObservanceDiv.setAttribute("style", "display: none;");
            break;
          case('December'):
            januaryObservanceToggleDiv.setAttribute("style", "display: initial");
            januaryObservanceDiv.setAttribute("style", "display: none;");
            februaryObservanceToggleDiv.setAttribute("style", "display: initial;");
            februaryObservanceDiv.setAttribute("style", "display: none;");
            marchObservanceToggleDiv.setAttribute("style", "display: initial;");
            marchObservanceDiv.setAttribute("style", "display: none;");
            aprilObservanceToggleDiv.setAttribute("style", "display: initial;");
            aprilObservanceDiv.setAttribute("style", "display: none;");
            mayObservanceToggleDiv.setAttribute("style", "display: initial;");
            mayObservanceDiv.setAttribute("style", "display: none;");
            juneObservanceToggleDiv.setAttribute("style", "display: initial;");
            juneObservanceDiv.setAttribute("style", "display: none;");
            julyObservanceToggleDiv.setAttribute("style", "display: initial;");
            julyObservanceDiv.setAttribute("style", "display: none;");
            augustObservanceToggleDiv.setAttribute("style", "display: initial;");
            augustObservanceDiv.setAttribute("style", "display: none;");
            septemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            septemberObservanceDiv.setAttribute("style", "display: none;");
            octoberObservanceToggleDiv.setAttribute("style", "display: initial;");
            octoberObservanceDiv.setAttribute("style", "display: none;");
            novemberObservanceToggleDiv.setAttribute("style", "display: initial;");
            novemberObservanceDiv.setAttribute("style", "display: none;");
            decemberObservanceToggleDiv.setAttribute("style", "display: none;");
            decemberObservanceDiv.setAttribute("style", "display: initial;");
            break;
          default:
            console.log('error state');

        }


      }

      function closeObservancesManager() {
        let observancesManagementDiv = document.getElementById('observancesManagementDiv');
        let observancesManager = document.getElementById('observancesManager');
        let observancesZone = document.getElementById('observancesZone');


        observancesManagementDiv.setAttribute("style", "display: none;");
        observancesManager.setAttribute("style", "visibility: visible;");
        observancesZone.setAttribute("style", "opacity: 1.0;");
      }

      function observanceManager() {
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let checkDate;
        let checkDate2;
        let observancesManagementDiv = document.getElementById('observancesManagementDiv');
        let observancesManager = document.getElementById('observancesManager');
        let observancesZone = document.getElementById('observancesZone');

        $http.get(`/observancesbyuser/${currentUserId}`)
        .then(observancesData=>{
          let observances = observancesData.data;
          for (let i = 0; i < observances.length; i++) {
            checkDate = new Date(observances[i].day_of);
            observances[i].clean_date = checkDate.getDate().toString() + ' ' + months[checkDate.getMonth()] + ' ' + checkDate.getFullYear().toString();
          }
          vm.janObservances = observances.filter(entry=>{
            checkDate = new Date(entry.day_of);
            return (checkDate.getMonth() === 0);
          });
          vm.janObservances = vm.janObservances.sort((a, b)=>{
            checkDate = new Date(a.day_of);
            checkDate2 = new Date(b.day_of);
            if (checkDate.getDate() < checkDate2.getDate()) {
              return -1;
            } else if (checkDate.getDate() > checkDate2.getDate()) {
              return 1;
            } else {
              return 0;
            }
          });
          vm.febObservances = observances.filter(entry=>{
            checkDate = new Date(entry.day_of);
            return (checkDate.getMonth() === 1);
          });
          vm.febObservances = vm.febObservances.sort((a, b)=>{
            checkDate = new Date(a.day_of);
            checkDate2 = new Date(b.day_of);
            if (checkDate.getDate() < checkDate2.getDate()) {
              return -1;
            } else if (checkDate.getDate() > checkDate2.getDate()) {
              return 1;
            } else {
              return 0;
            }
          });
          vm.marObservances = observances.filter(entry=>{
            checkDate = new Date(entry.day_of);
            return(checkDate.getMonth() === 2);
          });
          vm.marObservances = vm.marObservances.sort((a, b)=>{
            checkDate = new Date(a.day_of);
            checkDate2 = new Date(b.day_of);
            if (checkDate.getDate() < checkDate2.getDate()) {
              return -1;
            } else if (checkDate.getDate() > checkDate2.getDate()) {
              return 1;
            } else {
              return 0;
            }
          });
          vm.aprObservances = observances.filter(entry=>{
            checkDate = new Date(entry.day_of);
            return(checkDate.getMonth() === 3);
          });
          vm.aprObservances = vm.aprObservances.sort((a, b)=>{
            checkDate = new Date(a.day_of);
            checkDate2 = new Date(b.day_of);
            if (checkDate.getDate() < checkDate2.getDate()) {
              return -1;
            } else if (checkDate.getDate() > checkDate2.getDate()) {
              return 1;
            } else {
              return 0;
            }
          });
          vm.mayObservances = observances.filter(entry=>{
            checkDate = new Date(entry.day_of);
            return(checkDate.getMonth() === 4);
          });
          vm.mayObservances = vm.mayObservances.sort((a, b)=>{
            checkDate = new Date(a.day_of);
            checkDate2 = new Date(b.day_of);
            if (checkDate.getDate() < checkDate2.getDate()) {
              return -1;
            } else if (checkDate.getDate() > checkDate2.getDate()) {
              return 1;
            } else {
              return 0;
            }
          });
          vm.junObservances = observances.filter(entry=>{
            checkDate = new Date(entry.day_of);
            return(checkDate.getMonth() === 5);
          });
          vm.junObservances = vm.junObservances.sort((a, b)=>{
            checkDate = new Date(a.day_of);
            checkDate2 = new Date(b.day_of);
            if (checkDate.getDate() < checkDate2.getDate()) {
              return -1;
            } else if (checkDate.getDate() > checkDate2.getDate()) {
              return 1;
            } else {
              return 0;
            }
          });
          vm.julObservances = observances.filter(entry=>{
            checkDate = new Date(entry.day_of);
            return(checkDate.getMonth() === 6);
          });
          vm.julObservances = vm.julObservances.sort((a, b)=>{
            checkDate = new Date(a.day_of);
            checkDate2 = new Date(b.day_of);
            if (checkDate.getDate() < checkDate2.getDate()) {
              return -1;
            } else if (checkDate.getDate() > checkDate2.getDate()) {
              return 1;
            } else {
              return 0;
            }
          });
          vm.augObservances = observances.filter(entry=>{
            checkDate = new Date(entry.day_of);
            return(checkDate.getMonth() === 7);
          });
          vm.augObservances = vm.augObservances.sort((a, b)=>{
            checkDate = new Date(a.day_of);
            checkDate2 = new Date(b.day_of);
            if (checkDate.getDate() < checkDate2.getDate()) {
              return -1;
            } else if (checkDate.getDate() > checkDate2.getDate()) {
              return 1;
            } else {
              return 0;
            }
          });
          vm.sepObservances = observances.filter(entry=>{
            checkDate = new Date(entry.day_of);
            return(checkDate.getMonth() === 8);
          });
          vm.sepObservances = vm.sepObservances.sort((a, b)=>{
            checkDate = new Date(a.day_of);
            checkDate2 = new Date(b.day_of);
            if (checkDate.getDate() < checkDate2.getDate()) {
              return -1;
            } else if (checkDate.getDate() > checkDate2.getDate()) {
              return 1;
            } else {
              return 0;
            }
          });
          vm.octObservances = observances.filter(entry=>{
            checkDate = new Date(entry.day_of);
            return(checkDate.getMonth() === 9);
          });
          vm.octObservances = vm.octObservances.sort((a, b)=>{
            checkDate = new Date(a.day_of);
            checkDate2 = new Date(b.day_of);
            if (checkDate.getDate() < checkDate2.getDate()) {
              return -1;
            } else if (checkDate.getDate() > checkDate2.getDate()) {
              return 1;
            } else {
              return 0;
            }
          });
          vm.novObservances = observances.filter(entry=>{
            checkDate = new Date(entry.day_of);
            return(checkDate.getMonth() === 10);
          });
          vm.novObservances = vm.novObservances.sort((a, b)=>{
            checkDate = new Date(a.day_of);
            checkDate2 = new Date(b.day_of);
            if (checkDate.getDate() < checkDate2.getDate()) {
              return -1;
            } else if (checkDate.getDate() > checkDate2.getDate()) {
              return 1;
            } else {
              return 0;
            }
          });
          vm.decObservances = observances.filter(entry=>{
            checkDate = new Date(entry.day_of);
            return(checkDate.getMonth() === 11);
          });
          vm.decObservances = vm.decObservances.sort((a, b)=>{
            checkDate = new Date(a.day_of);
            checkDate2 = new Date(b.day_of);
            if (checkDate.getDate() < checkDate2.getDate()) {
              return -1;
            } else if (checkDate.getDate() > checkDate2.getDate()) {
              return 1;
            } else {
              return 0;
            }
          });

        });

        observancesManagementDiv.setAttribute("style", "display: initial;");
        observancesManager.setAttribute("style", "visibility: hidden;");
        observancesZone.setAttribute("style", "opacity: 0.3;");
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
                    today.push(allHollidays[i]);
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
                //console.log('non-float holiday');
            }
          }
        }

        return(today);
      }

      function holidayReportDone() {
        let reportForHolidays = document.getElementById('reportForHolidays');
        let holidayManagerDone = document.getElementById('holidayManagerDone');
        let holidayReporter = document.getElementById('holidayReporter');

        reportForHolidays.setAttribute("style", "display: none;");
        holidayManagerDone.setAttribute("style", "visibility: visible;");
        holidayReporter.setAttribute("style", "visibility: visible;");
      }

      function areSameDate(date1, date2) {
        let first = new Date(date1);
        let second = new Date(date2);
        if (first.getFullYear() !== second.getFullYear()) {
          return false;
        } else if (first.getMonth() !== second.getMonth()) {
          return false;
        } else if (first.getDate() !== second.getDate()) {
          return false;
        }
        return true;
      }

      function holidayReport(){
        let reportForHolidays = document.getElementById('reportForHolidays');
        let userHolidayEditorDiv = document.getElementById('userHolidayEditorDiv');
        let holidayReporter = document.getElementById('holidayReporter');
        let holidayManagerDone = document.getElementById('holidayManagerDone');
        $http.get(`/holidaysbyuser/${currentUserId}`)
        .then(userHolidaysData=>{
          vm.holidayReporter = [];
          vm.holidayReporter[0] = {};
          let userHolidays = userHolidaysData.data;

          let nextYearMonthString = '';
          let nextYearDateString = ''
          let yearDateStart = new Date();
          let nextYear = yearDateStart.getFullYear() + 1;
          let nextYearMonth = yearDateStart.getMonth() + 1;
          if (nextYearMonth < 10) {
            nextYearMonthString = '0' + nextYearMonth;
          } else {
            nextYearMonthString = nextYearMonth.toString();
          }
          if (yearDateStart.getDate() < 10) {
            nextYearDateString = '0' + yearDateStart.getDate();
          } else {
            nextYearDateString = yearDateStart.getDate().toString();
          }
          let yearDateEnd = new Date(nextYear + '-' + nextYearMonthString + '-' + nextYearDateString + 'T13:44:00.000Z');
          console.log(yearDateEnd);
          console.log(yearDateStart.getDate());
          let calendarStart = new Date(yearDateStart.getFullYear() + '-01-01T13:44:00.000Z');
          let calendarEnd = new Date(nextYear + '-01-01T13:44:00.000Z');
          let holidayArray = [];
          vm.holidayReporter[0].calendarTotal = 0;
          vm.holidayReporter[0].yearTotal = 0;
          vm.holidayReporter[0].todayClean = cleanDateHoliday(yearDateStart);
          vm.holidayReporter[0].oneYearClean = cleanDateHoliday(yearDateEnd);
          vm.holidayReporter[0].calendarFloat = 0;
          vm.holidayReporter[0].calendarFixed = 0;
          vm.holidayReporter[0].yearFloat = 0;
          vm.holidayReporter[0].yearFixed = 0;
          vm.holidayReporter[0].calendarJan = 0;
          vm.holidayReporter[0].yearJan = 0;
          vm.holidayReporter[0].calendarJanHolidays = [];
          vm.holidayReporter[0].yearJanHolidays = [];
          vm.holidayReporter[0].yearJanOverlap = 0;
          vm.holidayReporter[0].yearJanTotal = 0;
          vm.holidayReporter[0].calendarJanOverlap = 0;
          vm.holidayReporter[0].calendarJanTotal = 0;
          vm.holidayReporter[0].calendarFebOverlap = 0;
          vm.holidayReporter[0].calendarFebTotal = 0;
          vm.holidayReporter[0].calendarFebHolidays = [];
          vm.holidayReporter[0].yearFebHolidays = [];
          vm.holidayReporter[0].yearFebOverlap = 0;
          vm.holidayReporter[0].yearFebTotal = 0;
          vm.holidayReporter[0].calendarMarOverlap = 0;
          vm.holidayReporter[0].calendarMarTotal = 0;
          vm.holidayReporter[0].calendarMarHolidays = [];
          vm.holidayReporter[0].calendarAprHolidays = [];
          vm.holidayReporter[0].calendarAprOverlap = 0;
          vm.holidayReporter[0].calendarAprTotal = 0;
          vm.holidayReporter[0].calendarMayHolidays = [];
          vm.holidayReporter[0].calendarMayOverlap = 0;
          vm.holidayReporter[0].calendarMayTotal = 0;
          vm.holidayReporter[0].calendarJunHolidays = [];
          vm.holidayReporter[0].calendarJunOverlap = 0;
          vm.holidayReporter[0].calendarJunTotal = 0;
          vm.holidayReporter[0].calendarJulHolidays = [];
          vm.holidayReporter[0].calendarJulOverlap = 0;
          vm.holidayReporter[0].calendarJulTotal = 0;
          vm.holidayReporter[0].calendarAugHolidays = [];
          vm.holidayReporter[0].calendarAugOverlap = 0;
          vm.holidayReporter[0].calendarAugTotal = 0;
          vm.holidayReporter[0].calendarSepHolidays = [];
          vm.holidayReporter[0].calendarSepOverlap = 0;
          vm.holidayReporter[0].calendarSepTotal = 0;
          vm.holidayReporter[0].calendarOctHolidays = [];
          vm.holidayReporter[0].calendarOctOverlap = 0;
          vm.holidayReporter[0].calendarOctTotal = 0;
          vm.holidayReporter[0].calendarNovHolidays = [];
          vm.holidayReporter[0].calendarNovOverlap = 0;
          vm.holidayReporter[0].calendarNovTotal = 0;
          vm.holidayReporter[0].calendarDecHolidays = [];
          vm.holidayReporter[0].calendarDecOverlap = 0;
          vm.holidayReporter[0].calendarDecTotal = 0;
          vm.holidayReporter[0].yearMarHolidays = [];
          vm.holidayReporter[0].yearMarOverlap = 0;
          vm.holidayReporter[0].yearMarTotal = 0;
          vm.holidayReporter[0].yearAprHolidays = [];
          vm.holidayReporter[0].yearAprOverlap = 0;
          vm.holidayReporter[0].yearAprTotal = 0;
          vm.holidayReporter[0].yearMayHolidays = [];
          vm.holidayReporter[0].yearMayOverlap = 0;
          vm.holidayReporter[0].yearMayTotal = 0;
          vm.holidayReporter[0].yearJunHolidays = [];
          vm.holidayReporter[0].yearJunOverlap = 0;
          vm.holidayReporter[0].yearJunTotal = 0;
          vm.holidayReporter[0].yearJulHolidays = [];
          vm.holidayReporter[0].yearJulOverlap = 0;
          vm.holidayReporter[0].yearJulTotal = 0;
          vm.holidayReporter[0].yearAugHolidays = [];
          vm.holidayReporter[0].yearAugOverlap = 0;
          vm.holidayReporter[0].yearAugTotal = 0;
          vm.holidayReporter[0].yearSepHolidays = [];
          vm.holidayReporter[0].yearSepOverlap = 0;
          vm.holidayReporter[0].yearSepTotal = 0;
          vm.holidayReporter[0].yearOctHolidays = [];
          vm.holidayReporter[0].yearOctOverlap = 0;
          vm.holidayReporter[0].yearOctTotal = 0;
          vm.holidayReporter[0].yearNovHolidays = [];
          vm.holidayReporter[0].yearNovOverlap = 0;
          vm.holidayReporter[0].yearNovTotal = 0;
          vm.holidayReporter[0].yearDecHolidays = [];
          vm.holidayReporter[0].yearDecOverlap = 0;
          vm.holidayReporter[0].yearDecTotal = 0;


          let checkDate = new Date(calendarStart);
          console.log(areSameDate(yearDateStart, yearDateEnd));
          do {
            holidayArray = [];
            holidayArray = grabHolidays(userHolidays, checkDate);
            if (holidayArray.length > 0) {
              if (checkDate.getMonth() === 0) {
                vm.holidayReporter[0].calendarJanTotal++;
              }
              if (checkDate.getMonth() === 1) {
                vm.holidayReporter[0].calendarFebTotal++;
              }
              if (checkDate.getMonth() === 2) {
                vm.holidayReporter[0].calendarMarTotal++;
              }
              if (checkDate.getMonth() === 3) {
                vm.holidayReporter[0].calendarAprTotal++;
              }
              if (checkDate.getMonth() === 4) {
                vm.holidayReporter[0].calendarMayTotal++;
              }
              if (checkDate.getMonth() === 5) {
                vm.holidayReporter[0].calendarJunTotal++;
              }
              if (checkDate.getMonth() === 6) {
                vm.holidayReporter[0].calendarJulTotal++;
              }
              if (checkDate.getMonth() === 7) {
                vm.holidayReporter[0].calendarAugTotal++;
              }
              if (checkDate.getMonth() === 8) {
                vm.holidayReporter[0].calendarSepTotal++;
              }
              if (checkDate.getMonth() === 9) {
                vm.holidayReporter[0].calendarOctTotal++;
              }
              if (checkDate.getMonth() === 10) {
                vm.holidayReporter[0].calendarNovTotal++;
              }
              if (checkDate.getMonth() === 11) {
                vm.holidayReporter[0].calendarDecTotal++;
              }
              vm.holidayReporter[0].calendarTotal++;
              if (holidayArray.length > 1) {
                if (checkDate.getMonth() === 0) {
                  vm.holidayReporter[0].calendarJanOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 1) {
                  vm.holidayReporterl[0].calendarFebOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 2) {
                  vm.holidayReporter[0].calendarMarOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 3) {
                  vm.holidayReporter[0].calendarAprOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 4) {
                  vm.holidayReporter[0].calendarMayOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 5) {
                  vm.holidayReporter[0].calendarJunOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 6) {
                  vm.holidayReporter[0].calendarJulOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 7) {
                  vm.holidayReporter[0].calendarAugOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 8) {
                  vm.holidayReporter[0].calendarSepOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 9) {
                  vm.holidayReporter[0].calendarOctOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 10) {
                  vm.holidayReporter[0].calendarNovOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 11) {
                  vm.holidayReporter[0].calendarDecOverlap += holidayArray.length;
                }
                for (let i = 0; i < holidayArray.length; i++) {
                  if (holidayArray[i].is_annual) {
                    vm.holidayReporter[0].calendarFixed++;
                  } else {
                    vm.holidayReporter[0].calendarFloat++;
                  }
                  if (checkDate.getMonth() === 0) {
                    vm.holidayReporter[0].calendarJanHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarJan = vm.holidayReporter[0].calendarJanHolidays.length;
                  }
                  if (checkDate.getMonth() === 1) {
                    vm.holidayReporter[0].calendarFebHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarFeb = vm.holidayReporter[0].calendarFebHolidays.length;
                  }
                  if (checkDate.getMonth() === 2) {
                    vm.holidayReporter[0].calendarMarHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarMar = vm.holidayReporter[0].calendarMarHolidays.length;
                  }
                  if (checkDate.getMonth() === 3) {
                    vm.holidayReporter[0].calendarAprHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarApr = vm.holidayReporter[0].calendarAprHolidays.length;
                  }
                  if (checkDate.getMonth() === 4) {
                    vm.holidayReporter[0].calendarMayHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarMay = vm.holidayReporter[0].calendarMayHolidays.length;
                  }
                  if (checkDate.getMonth() === 5) {
                    vm.holidayReporter[0].calendarJunHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarJun = vm.holidayReporter[0].calendarJunHolidays.length;
                  }
                  if (checkDate.getMonth() === 6) {
                    vm.holidayReporter[0].calendarJulHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarJul = vm.holidayReporter[0].calendarJulHolidays.length;
                  }
                  if (checkDate.getMonth() === 7) {
                    vm.holidayReporter[0].calendarAugHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarAug = vm.holidayReporter[0].calendarAugHolidays.length;
                  }
                  if (checkDate.getMonth() === 8) {
                    vm.holidayReporter[0].calendarSepHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarSep = vm.holidayReporter[0].calendarSepHolidays.length;
                  }
                  if (checkDate.getMonth() === 9) {
                    vm.holidayReporter[0].calendarOctHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendarOct = vm.holidayReporter[0].calendarOctHolidays.length;
                  }
                  if (checkDate.getMonth() === 10) {
                    vm.holidayReporter[0].calendarNovHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendar = vm.holidayReporter[0].calendarNovHolidays.length;
                  }
                  if (checkDate.getMonth() === 11) {
                    vm.holidayReporter[0].calendarDecHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].calendar = vm.holidayReporter[0].calendarDecHolidays.length;
                  }
                }
              } else {
                if (holidayArray[0].is_annual) {
                  vm.holidayReporter[0].calendarFixed++;
                } else {
                  vm.holidayReporter[0].calendarFloat++;
                }
                if (checkDate.getMonth() === 0) {
                  vm.holidayReporter[0].calendarJanHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarJan = vm.holidayReporter[0].calendarJanHolidays.length;
                }
                if (checkDate.getMonth() === 1) {
                  vm.holidayReporter[0].calendarFebHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarFeb = vm.holidayReporter[0].calendarFebHolidays.length;
                }
                if (checkDate.getMonth() === 2) {
                  vm.holidayReporter[0].calendarMarHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarMar = vm.holidayReporter[0].calendarMarHolidays.length;
                }
                if (checkDate.getMonth() === 3) {
                  vm.holidayReporter[0].calendarAprHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarApr = vm.holidayReporter[0].calendarAprHolidays.length;
                }
                if (checkDate.getMonth() === 4) {
                  vm.holidayReporter[0].calendarMayHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarMay = vm.holidayReporter[0].calendarMayHolidays.length;
                }
                if (checkDate.getMonth() === 5) {
                  vm.holidayReporter[0].calendarJunHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarJun = vm.holidayReporter[0].calendarJunHolidays.length;
                }
                if (checkDate.getMonth() === 6) {
                  vm.holidayReporter[0].calendarJulHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarJul = vm.holidayReporter[0].calendarJulHolidays.length;
                }
                if (checkDate.getMonth() === 7) {
                  vm.holidayReporter[0].calendarAugHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarAug = vm.holidayReporter[0].calendarAugHolidays.length;
                }
                if (checkDate.getMonth() === 8) {
                  vm.holidayReporter[0].calendarSepHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarSep = vm.holidayReporter[0].calendarSepHolidays.length;
                }
                if (checkDate.getMonth() === 9) {
                  vm.holidayReporter[0].calendarOctHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarOct = vm.holidayReporter[0].calendarOctHolidays.length;
                }
                if (checkDate.getMonth() === 10) {
                  vm.holidayReporter[0].calendarNovHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarNov = vm.holidayReporter[0].calendarNovHolidays.length;
                }
                if (checkDate.getMonth() === 11) {
                  vm.holidayReporter[0].calendarDecHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].calendarDec = vm.holidayReporter[0].calendarDecHolidays.length;
                }
              }

            }
            checkDate.setDate(checkDate.getDate() + 1);
          } while (!areSameDate(checkDate, calendarEnd));
          checkDate = new Date(yearDateStart);
          do {
            holidayArray = [];
            holidayArray = grabHolidays(userHolidays, checkDate);
            if (holidayArray.length > 0) {
              vm.holidayReporter[0].yearTotal++;
              if (checkDate.getMonth() === 0) {
                vm.holidayReporter[0].yearJanTotal++;
              }
              if (checkDate.getMonth() === 1) {
                vm.holidayReporter[0].yearFebTotal++;
              }
              if (checkDate.getMonth() === 2) {
                vm.holidayReporter[0].yearMarTotal++;
              }
              if (checkDate.getMonth() === 3) {
                vm.holidayReporter[0].yearAprTotal++;
              }
              if (checkDate.getMonth() === 4) {
                vm.holidayReporter[0].yearMayTotal++;
              }
              if (checkDate.getMonth() === 5) {
                vm.holidayReporter[0].yearJunTotal++;
              }
              if (checkDate.getMonth() === 6) {
                vm.holidayReporter[0].yearJulTotal++;
              }
              if (checkDate.getMonth() === 7) {
                vm.holidayReporter[0].yearAugTotal++;
              }
              if (checkDate.getMonth() === 8) {
                vm.holidayReporter[0].yearSepTotal++;
              }
              if (checkDate.getMonth() === 9) {
                vm.holidayReporter[0].yearOctTotal++;
              }
              if (checkDate.getMonth() === 10) {
                vm.holidayReporter[0].yearNovTotal++;
              }
              if (checkDate.getMonth() === 11) {
                vm.holidayReporter[0].yearDecTotal++;
              }
              if (holidayArray.length > 1) {
                if (checkDate.getMonth() === 0) {
                  vm.holidayReporter[0].yearJanOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 1) {
                  vm.holidayReporter[0].yearFebOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 2) {
                  vm.holidayReporter[0].yearMarOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 3) {
                  vm.holidayReporter[0].yearAprOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 4) {
                  vm.holidayReporter[0].yearMayOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 5) {
                  vm.holidayReporter[0].yearJunOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 6) {
                  vm.holidayReporter[0].yearJulOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 7) {
                  vm.holidayReporter[0].yearAugOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 8) {
                  vm.holidayReporter[0].yearSepOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 9) {
                  vm.holidayReporter[0].yearOctOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 10) {
                  vm.holidayReporter[0].yearNovOverlap += holidayArray.length;
                }
                if (checkDate.getMonth() === 11) {
                  vm.holidayReporter[0].yearDecOverlap += holidayArray.length;
                }
                for (let i = 0; i < holidayArray.length; i++) {
                  if (holidayArray[i].is_annual) {
                    vm.holidayReporter[0].yearFixed++;
                  } else {
                    vm.holidayReporter[0].yearFloat++;
                  }
                  if (checkDate.getMonth() === 0) {
                    vm.holidayReporter[0].yearJanHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearJan = vm.holidayReporter[0].yearJanHolidays.length;
                  }
                  if (checkDate.getMonth() === 1) {
                    vm.holidayReporter[0].yearFebHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearFeb = vm.holidayReporter[0].yearFebHolidays.length;
                  }
                  if (checkDate.getMonth() === 2) {
                    vm.holidayReporter[0].yearMarHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearMar = vm.holidayReporter[0].yearMarHolidays.length;
                  }
                  if (checkDate.getMonth() === 3) {
                    vm.holidayReporter[0].yearAprHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearApr = vm.holidayReporter[0].yearAprHolidays.length;
                  }
                  if (checkDate.getMonth() === 4) {
                    vm.holidayReporter[0].yearMayHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearMay = vm.holidayReporter[0].yearMayHolidays.length;
                  }
                  if (checkDate.getMonth() === 5) {
                    vm.holidayReporter[0].yearJunHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearJun = vm.holidayReporter[0].yearJunHolidays.length;
                  }
                  if (checkDate.getMonth() === 6) {
                    vm.holidayReporter[0].yearJulHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearJul = vm.holidayReporter[0].yearJulHolidays.length;
                  }
                  if (checkDate.getMonth() === 7) {
                    vm.holidayReporter[0].yearAugHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearAug = vm.holidayReporter[0].yearAugHolidays.length;
                  }
                  if (checkDate.getMonth() === 8) {
                    vm.holidayReporter[0].yearSepHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearSep = vm.holidayReporter[0].yearSepHolidays.length;
                  }
                  if (checkDate.getMonth() === 9) {
                    vm.holidayReporter[0].yearOctHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearOct = vm.holidayReporter[0].yearOctHolidays.length;
                  }
                  if (checkDate.getMonth() === 10) {
                    vm.holidayReporter[0].yearNovHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearNov = vm.holidayReporter[0].yearNovHolidays.length;
                  }
                  if (checkDate.getMonth() === 11) {
                    vm.holidayReporter[0].yearDecHolidays.push(holidayArray[i].name);
                    vm.holidayReporter[0].yearDec = vm.holidayReporter[0].yearDecHolidays.length;
                  }
                }
              } else {
                if (holidayArray[0].is_annual) {
                  vm.holidayReporter[0].yearFixed++;
                } else {
                  vm.holidayReporter[0].yearFloat++;
                }
                if (checkDate.getMonth() === 0) {
                  vm.holidayReporter[0].yearJanHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearJan = vm.holidayReporter[0].yearJanHolidays.length;
                }
                if (checkDate.getMonth() === 1) {
                  vm.holidayReporter[0].yearFebHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearFeb = vm.holidayReporter[0].yearFebHolidays.length;
                }
                if (checkDate.getMonth() === 2) {
                  vm.holidayReporter[0].yearMarHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearMar = vm.holidayReporter[0].yearMarHolidays.length;
                }
                if (checkDate.getMonth() === 3) {
                  vm.holidayReporter[0].yearAprHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearApr = vm.holidayReporter[0].yearAprHolidays.length;
                }
                if (checkDate.getMonth() === 4) {
                  vm.holidayReporter[0].yearMayHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearMay = vm.holidayReporter[0].yearMayHolidays.length;
                }
                if (checkDate.getMonth() === 5) {
                  vm.holidayReporter[0].yearJunHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearJun = vm.holidayReporter[0].yearJunHolidays.length;
                }
                if (checkDate.getMonth() === 6) {
                  vm.holidayReporter[0].yearJulHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearJul = vm.holidayReporter[0].yearJulHolidays.length;
                }
                if (checkDate.getMonth() === 7) {
                  vm.holidayReporter[0].yearAugHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearAug = vm.holidayReporter[0].yearAugHolidays.length;
                }
                if (checkDate.getMonth() === 8) {
                  vm.holidayReporter[0].yearSepHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearSep = vm.holidayReporter[0].yearSepHolidays.length;
                }
                if (checkDate.getMonth() === 9) {
                  vm.holidayReporter[0].yearOctHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearOct = vm.holidayReporter[0].yearOctHolidays.length;
                }
                if (checkDate.getMonth() === 10) {
                  vm.holidayReporter[0].yearNovHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearNov = vm.holidayReporter[0].yearNovHolidays.length;
                }
                if (checkDate.getMonth() === 11) {
                  vm.holidayReporter[0].yearDecHolidays.push(holidayArray[0].name);
                  vm.holidayReporter[0].yearDec = vm.holidayReporter[0].yearDecHolidays.length;
                }
              }

            }
            checkDate.setDate(checkDate.getDate() + 1);
          } while (!areSameDate(checkDate, yearDateEnd));
        });

        reportForHolidays.setAttribute("style", "display: initial;");
        userHolidayEditorDiv.setAttribute("style", "display: none;");
        holidayManagerDone.setAttribute("style", "visibility: hidden;");
        holidayReporter.setAttribute("style", "visibility: hidden;");
      }

      function addNewOccasion (){
        let subObj = {
          user_id: currentUserId,
          name: '',
          day_of: new Date(),
          is_annual: true
        };
        $http.post('/occasions', subObj)
        .then(resultingOccasionData=>{
          let resultingOccasion = resultingOccasionData.data[0];
          editOccaision(resultingOccasion.id);
        });
      }

      function deleteBill(billId) {
        let billsManagementDiv = document.getElementById('billsManagementDiv');
        let userBillDeleteConfirmDiv = document.getElementById('userBillDeleteConfirmDiv');
        let userBillDeleteConfirmButtons = document.getElementById('userBillDeleteConfirmButtons');
        let userBillConfirmYes = document.getElementById('userBillConfirmYes');
        if (userBillConfirmYes) {
          userBillConfirmYes.parentNode.removeChild(userBillConfirmYes);
          userBillConfirmYes = document.createElement('a');
          userBillDeleteConfirmButtons.appendChild(userBillConfirmYes);
          userBillConfirmYes.id = 'userBillConfirmYes';
          userBillConfirmYes.className = 'btn';
          userBillConfirmYes.setAttribute("style", "cursor: pointer;");
          userBillConfirmYes.innerHTML = 'yes';
        }
        let userBillConfirmNo = document.getElementById('userBillConfirmNo');
        if (userBillConfirmNo) {
          userBillConfirmNo.parentNode.removeChild(userBillConfirmNo);
          userBillConfirmNo = document.createElement('a');
          userBillDeleteConfirmButtons.appendChild(userBillConfirmNo);
          userBillConfirmNo.id = 'userBillConfirmNo';
          userBillConfirmNo.className = 'btn';
          userBillConfirmNo.setAttribute("style", "cursor: pointer;");
          userBillConfirmNo.innerHTML = 'no';
        }
        let userBillDeleteName = document.getElementById('userBillDeleteName');
        let userBillDeletePayTo = document.getElementById('userBillDeletePayTo');
        let userBillDeleteAmountDue = document.getElementById('userBillDeleteAmountDue');
        let userBillDeletePaidBoolean = document.getElementById('userBillDeletePaidBoolean');

        $http.get(`/bills/${billId}`)
        .then(billForDeleteData=>{
          let billForDelete = billForDeleteData.data;
          userBillDeleteName.innerHTML = billForDelete.name;
          userBillDeletePayTo.innerHTML = 'Pay to: ' + billForDelete.pay_to;
          userBillDeleteAmountDue.innerHTML = 'Amount: ' + billForDelete.amount_due;
          if (billForDelete.is_paid) {
            userBillDeletePaidBoolean.innerHTML = 'paid';
          } else {
            userBillDeletePaidBoolean.innerHTML = 'unpaid';
          }

          userBillConfirmNo.addEventListener('click', ()=>{
            billsManagementDiv.setAttribute("style", "display: initial;");
            userBillDeleteConfirmDiv.setAttribute("style", "display: none;");
          });

          userBillConfirmYes.addEventListener('click', ()=>{
            $http.delete(`/bills/${billId}`)
            .then(()=>{
              userBillDeleteConfirmDiv.setAttribute("style", "display: none;");
              billsManager();
            });
          });

        });


        billsManagementDiv.setAttribute("style", "display: none;");
        userBillDeleteConfirmDiv.setAttribute("style", "display: initial;");
      }

      function removeEmptyTask(taskId) {
        $http.delete(`/tasks/${taskId}`)
        .then(()=>{
          taskManager();
        });
      }

      function userTasksEditorDone () {
        let userTasksEditingDiv = document.getElementById('userTasksEditingDiv');
        let tasksManagerDone = document.getElementById('tasksManagerDone');

        $http.get(`/tasksbyuser/${currentUserId}`)
        .then(userTasksData=>{
          let userTasks = userTasksData.data;
          for (let i = 0; i < userTasks.length; i++) {
            if ((userTasks[i].name === '') && (userTasks[i].user_notes === '')) {
              removeEmptyTask(userTasks[i].id);
            }
          }
        });


        userTasksEditingDiv.setAttribute("style", "display: none;");
        tasksManagerDone.setAttribute("style", "visibility: visible;");
        taskManager();
      }

      function editTask(taskId) {
        let userTasksEditingDiv = document.getElementById('userTasksEditingDiv');
        let tasksManagerDone = document.getElementById('tasksManagerDone');
        let userTaskNameDiv = document.getElementById('userTaskNameDiv');
        let userTasknameInput = document.getElementById('userTasknameInput');
        if (userTasknameInput) {
          userTasknameInput.parentNode.removeChild(userTasknameInput);
          userTasknameInput = document.createElement('input');
          userTaskNameDiv.appendChild(userTasknameInput);
          userTasknameInput.id = 'userTasknameInput';
          userTasknameInput.type = 'text';
          userTasknameInput.className = 'pure-input-1';
        }
        let userTaskNotesDiv = document.getElementById('userTaskNotesDiv');
        let userTasknotesInput = document.getElementById('userTasknotesInput');
        if (userTasknotesInput) {
          userTasknotesInput.parentNode.removeChild(userTasknotesInput);
          userTasknotesInput = document.createElement('textarea');
          userTaskNotesDiv.appendChild(userTasknotesInput);
          userTasknotesInput.id = 'userTasknotesInput';
          // userTasknotesInput.type = 'textarea';
          userTasknotesInput.rows = '5';
          userTasknotesInput.className = 'pure-input-1';
        }
        let userTaskDueDateDiv = document.getElementById('userTaskDueDateDiv');
        let userTaskDueDateInput = document.getElementById('userTaskDueDateInput');
        if (userTaskDueDateInput) {
          userTaskDueDateInput.parentNode.removeChild(userTaskDueDateInput);
          userTaskDueDateInput = document.createElement('input');
          userTaskDueDateDiv.appendChild(userTaskDueDateInput);
          userTaskDueDateInput.id = 'userTaskDueDateInput';
          userTaskDueDateInput.type = 'date';
          userTaskDueDateInput.className = 'pure-input-1';
        }
        let userTaskCompletedDiv = document.getElementById('userTaskCompletedDiv');
        let userTaskCompleted = document.getElementById('userTaskCompleted');
        if (userTaskCompleted) {
          userTaskCompleted.parentNode.removeChild(userTaskCompleted);
          userTaskCompleted = document.createElement('input');
          userTaskCompletedDiv.appendChild(userTaskCompleted);
          userTaskCompleted.id = 'userTaskCompleted';
          userTaskCompleted.type = 'checkbox';
        }
        let userTaskCompletedDateDiv = document.getElementById('userTaskCompletedDateDiv');
        let dateTaskCompletedDiv = document.getElementById('dateTaskCompletedDiv');
        let userTaskCompletedDate = document.getElementById('userTaskCompletedDate');
        if (userTaskCompletedDate) {
          userTaskCompletedDate.parentNode.removeChild(userTaskCompletedDate);
          userTaskCompletedDate = document.createElement('input');
          dateTaskCompletedDiv.appendChild(userTaskCompletedDate);
          userTaskCompletedDate.id = 'userTaskCompletedDate';
          userTaskCompletedDate.type = 'date';
          userTaskCompletedDate.className = 'pure-input-1';
        }

        $http.get(`/tasks/${taskId}`)
        .then(taskData=>{
          let task = taskData.data;
          //let dueDate = task.due_date;
          userTasknameInput.value = task.name;
          userTasknotesInput.value = task.user_notes;
          userTaskDueDateInput.value = task.due_date.slice(0, 10);
          if (task.is_completed) {
            userTaskCompleted.checked = true;
            userTaskCompletedDateDiv.setAttribute("style", "visibility: visible;");
          } else {
            userTaskCompleted.checked = false;
            userTaskCompletedDateDiv.setAttribute("style", "visibility: hidden;");
          }
          if (task.completed_date !== null) {
            userTaskCompletedDate.value = task.completed_date.slice(0, 10);
          }


          userTasknameInput.addEventListener('focusout', ()=>{
            if ((userTasknameInput.value !== '') && (userTasknameInput.value !== task.name)) {
              let subObj = {
                name: userTasknameInput.value
              };
              $http.patch(`/tasks/${taskId}`, subObj)
              .then(()=>{
                task.name = userTasknameInput.value;
              });
            }
          });
          userTasknotesInput.addEventListener('focusout', ()=>{
            if ((userTasknotesInput.value !== '') && (userTasknotesInput.value !== task.user_notes)) {
              let subObj = {
                user_notes: userTasknotesInput.value
              };
              $http.patch(`/tasks/${taskId}`, subObj)
              .then(()=>{
                task.user_notes = userTasknotesInput.value;
              });
            }
          });
          userTaskDueDateInput.addEventListener('change', ()=>{
            let subObj = {
              due_date: new Date(userTaskDueDateInput.value)
            };
            $http.patch(`/tasks/${taskId}`, subObj)
            .then(()=>{
              task.due_date = subObj.due_date;
            });
          });
          userTaskCompletedDate.addEventListener('change', ()=>{
            let subObj = {
              completed_date: new Date(userTaskCompletedDate.value)
            };
            $http.patch(`/tasks/${taskId}`, subObj)
            .then(()=>{
              task.completed_date = subObj.completed_date;
            });
          });
          userTaskCompleted.addEventListener('click', ()=>{
            let subObj = {
              is_completed: userTaskCompleted.checked
            };
            let completedDate = new Date();
            let completionString = completedDate.getFullYear() + '-';
            let month = completedDate.getMonth() + 1;
            let day = completedDate.getDate();
            if (month < 10) {
              completionString += '0' + month +'-';
            } else {
              completionString += month + '-';
            }
            if (day < 10) {
              completionString += '0' + day;
            } else {
              completionString += day;
            }
            if (userTaskCompleted.checked) {
              userTaskCompletedDateDiv.setAttribute("style", "visibility: visible;");
              userTaskCompletedDate.value = completionString;
              subObj.completed_date = new Date(completionString + 'T13:44:00.000Z');
            } else {
              userTaskCompletedDateDiv.setAttribute("style", "visibility: hidden;");
              userTaskCompletedDate.value = null;
              subObj.completed_date = null;
            }

            $http.patch(`/tasks/${taskId}`, subObj)
            .then(()=>{
              task.is_completed = userTaskCompleted.checked;
            });
          });
        });

        userTasksEditingDiv.setAttribute("style", "display: initial;");
        tasksManagerDone.setAttribute("style", "visibility: hidden;");
      }

      function closeGoalsManager() {
        let goalsManager = document.getElementById('goalsManager');
        let goalsZone = document.getElementById('goalsZone');
        let goalsManagementDiv = document.getElementById('goalsManagementDiv');

        goalsManager.setAttribute("style", "visibility: visible;");
        goalsZone.setAttribute("style", "opacity: 1.0;");
        goalsManagementDiv.setAttribute("style", "display: none;");
      }

      function getGoalBlocktypeName (index, blockId) {
        $http.get(`/blocktypes/${blockId}`)
        .then(blockData=>{
          let block = blockData.data;
          vm.userGoals[index].blocktype = block.type;
          vm.userGoals = vm.userGoals.sort((a, b)=>{
            if ((a.blocktype !== undefined) && (b.blocktype !== undefined)) {
              if (a.blocktype.toLowerCase() < b.blocktype.toLowerCase()) {
                return -1;
              } else if (a.blocktype.toLowerCase() > b.blocktype.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            } else {
              return 0;
            }
          });
        });
      }

      function goalManager() {
        let goalsManager = document.getElementById('goalsManager');
        let goalsZone = document.getElementById('goalsZone');
        let goalsManagementDiv = document.getElementById('goalsManagementDiv');

        $http.get(`/goalsbyuser/${currentUserId}`)
        .then(userGoalsData=>{
          let goals = userGoalsData.data;
          console.log(goals);
          vm.userGoals = [];
          if (goals.length > 0) {
            for (let i = 0; i < goals.length; i++) {
              vm.userGoals[i] = {};
              vm.userGoals[i].id = goals[i].id;
              vm.userGoals[i].weekly_goal = goals[i].weekly_goal;
              getGoalBlocktypeName(i, goals[i].block_type);
            }
          }
        });

        goalsManager.setAttribute("style", "visibility: hidden;");
        goalsZone.setAttribute("style", "opacity: 0.3;");
        goalsManagementDiv.setAttribute("style", "display: initial;");
      }

      function addNewHoliday() {
        let today = new Date();
        let holidaySub = {
          user_id: currentUserId,
          name: '',
          color: '#ffffff',
          picture: '',
          day_of: today,
          is_annual: true,
          rule: null,
          art_override: false,
          music_override: false,
          override_content: null
        };
        $http.post(`/holidays`, holidaySub)
        .then(newUserHolidayData=>{
          let newUserHoliday = newUserHolidayData.data[0];
          console.log(newUserHoliday);
          editHoliday(newUserHoliday.id);
        });
      }

      function deleteOccasion(occasionId) {
        let userOccasionDeleteConfirmDiv = document.getElementById('userOccasionDeleteConfirmDiv');
        let occasionsManagementDiv = document.getElementById('occasionsManagementDiv');
        let userOccasionDeleteName = document.getElementById('userOccasionDeleteName');
        let userOccasionDeleteDate = document.getElementById('userOccasionDeleteDate');
        let userOccasionDeleteAnnuality = document.getElementById('userOccasionDeleteAnnuality');
        let userOccasionDeleteConfirmButtons = document.getElementById('userOccasionDeleteConfirmButtons');
        let userOccasionConfirmYes = document.getElementById('userOccasionConfirmYes');
        if (userOccasionConfirmYes) {
          userOccasionConfirmYes.parentNode.removeChild(userOccasionConfirmYes);
          userOccasionConfirmYes = document.createElement('a');
          userOccasionDeleteConfirmButtons.appendChild(userOccasionConfirmYes);
          userOccasionConfirmYes.id = 'userOccasionConfirmYes';
          userOccasionConfirmYes.className = 'btn';
          userOccasionConfirmYes.innerHTML = 'yes';
          userOccasionConfirmYes.setAttribute("style", "cursor: pointer;");
        }
        let occasionsManagerDone = document.getElementById('occasionsManagerDone');
        let userOccasionsEditingDiv = document.getElementById('userOccasionsEditingDiv');
        let userOccasionConfirmNo = document.getElementById('userOccasionConfirmNo');
        if (userOccasionConfirmNo) {
          userOccasionConfirmNo.parentNode.removeChild(userOccasionConfirmNo);
          userOccasionConfirmNo = document.createElement('a');
          userOccasionDeleteConfirmButtons.appendChild(userOccasionConfirmNo);
          userOccasionConfirmNo.id = 'userOccasionConfirmNo';
          userOccasionConfirmNo.className = 'btn';
          userOccasionConfirmNo.innerHTML = 'no';
          userOccasionConfirmNo.setAttribute("style", "cursor: pointer;");
        }


        $http.get(`/occasions/${occasionId}`)
        .then(userOccasionData=>{
          let userOccasion = userOccasionData.data;
          userOccasionDeleteName.innerHTML = userOccasion.name;
          userOccasionDeleteDate.innerHTML = cleanDate(userOccasion.day_of);
          if (userOccasion.is_annual) {
            userOccasionDeleteAnnuality.innerHTML = 'occurs annually';
          }

          userOccasionConfirmYes.addEventListener('click', ()=>{
            $http.delete(`/occasions/${occasionId}`)
            .then(()=>{
              userOccasionDeleteConfirmDiv.setAttribute("style", "display: none;");
              occasionsManagementDiv.setAttribute("style", "display: initial;");
              userOccasionDeleteName.innerHTML = '';
              userOccasionDeleteDate.innerHTML = '';
              userOccasionDeleteAnnuality.innerHTML = '';
              occasionManage();
            });
          });
          userOccasionConfirmNo.addEventListener('click', ()=>{
            userOccasionDeleteConfirmDiv.setAttribute("style", "display: none;");
            occasionsManagementDiv.setAttribute("style", "display: initial;");
            userOccasionDeleteName.innerHTML = '';
            userOccasionDeleteDate.innerHTML = '';
            userOccasionDeleteAnnuality.innerHTML = '';
            occasionManage();
          });
        });

        userOccasionDeleteConfirmDiv.setAttribute("style", "display: initial;");
        occasionsManagementDiv.setAttribute("style", "display: none;");
        occasionsManagerDone.setAttribute("style", "visibility: visible;");
        userOccasionsEditingDiv.setAttribute("style", "display: none;");
      }

      function removeBlankBills(billId) {
        $http.delete(`/bills/${billId}`)
        .then(()=>{
          billsManager();
          console.log('blank bill deleted');
        });
      }

      function userBillsEditorDone() {
        let billsManagerDone = document.getElementById('billsManagerDone');
        let userBillsEditingDiv = document.getElementById('userBillsEditingDiv');
        let userBillNameField = document.getElementById('userBillNameField');
        let userBillsPayTo = document.getElementById('userBillsPayTo');
        let userBillsAmountDue = document.getElementById('userBillsAmountDue');

        if ((userBillNameField.value === '') && (userBillsPayTo.value === '') && (userBillsAmountDue.value < 0.01)) {
          $http.get(`/billsbyuser/${currentUserId}`)
          .then(userBillsData=>{
            let userBills = userBillsData.data;
            for (let i = 0; i < userBills.length; i++) {
              if ((userBills[i].name === '') && (userBills[i].pay_to === '') && (userBills[i].amount_due < 0.01)) {
                removeBlankBills(userBills[i].id);
              }
            }

          });
        }


        billsManagerDone.setAttribute("style", "visibility: visible;");
        userBillsEditingDiv.setAttribute("style", "display: none;");
        billsManager();
      }

      function editBill(billId) {
        let billsManagerDone = document.getElementById('billsManagerDone');
        let userBillsEditingDiv = document.getElementById('userBillsEditingDiv');
        let userBillName = document.getElementById('userBillName');
        let userPayToDiv = document.getElementById('userPayToDiv');
        let userBillsPayTo = document.getElementById('userBillsPayTo');
        if (userBillsPayTo) {
          userBillsPayTo.parentNode.removeChild(userBillsPayTo);
          userBillsPayTo = document.createElement('input');
          userPayToDiv.appendChild(userBillsPayTo);
          userBillsPayTo.id = 'userBillsPayTo';
          userBillsPayTo.type = 'text';
          userBillsPayTo.className = 'pure-input-1';
        }
        let userAddressLine1Div = document.getElementById('userAddressLine1Div');
        let userBillsAddressLine1 = document.getElementById('userBillsAddressLine1');
        if (userBillsAddressLine1) {
          userBillsAddressLine1.parentNode.removeChild(userBillsAddressLine1);
          userBillsAddressLine1 = document.createElement('input');
          userAddressLine1Div.appendChild(userBillsAddressLine1);
          userBillsAddressLine1.id = 'userBillsAddressLine1';
          userBillsAddressLine1.type = 'text';
          userBillsAddressLine1.className = 'pure-input-1';
        }
        let userAddressLine2Div = document.getElementById('userAddressLine2Div');
        let userBillsAddressLine2 = document.getElementById('userBillsAddressLine2');
        if (userBillsAddressLine2) {
          userBillsAddressLine2.parentNode.removeChild(userBillsAddressLine2);
          userBillsAddressLine2 = document.createElement('input');
          userAddressLine2Div.appendChild(userBillsAddressLine2);
          userBillsAddressLine2.id = 'userBillsAddressLine2';
          userBillsAddressLine2.type = 'text';
          userBillsAddressLine2.className = 'pure-input-1';
        }
        let userCityLineDiv = document.getElementById('userCityLineDiv');
        let userBillsAddressCity = document.getElementById('userBillsAddressCity');
        if (userBillsAddressCity) {
          userBillsAddressCity.parentNode.removeChild(userBillsAddressCity);
          userBillsAddressCity = document.createElement('input');
          userCityLineDiv.appendChild(userBillsAddressCity);
          userBillsAddressCity.id = 'userBillsAddressCity';
          userBillsAddressCity.type = 'text';
          userBillsAddressCity.className = 'pure-input-1';
        }
        let userStateLineDiv = document.getElementById('userStateLineDiv');
        let userBillsAddressState = document.getElementById('userBillsAddressState');
        if (userBillsAddressState) {
          userBillsAddressState.parentNode.removeChild(userBillsAddressState);
          userBillsAddressState = document.createElement('input');
          userStateLineDiv.appendChild(userBillsAddressState);
          userBillsAddressState.id = 'userBillsAddressState';
          userBillsAddressState.type = 'text';
          userBillsAddressState.className = 'pure-input-1';
        }
        let userZipLine = document.getElementById('userZipLine');
        let userBillsAddressZip = document.getElementById('userBillsAddressZip');
        if (userBillsAddressZip) {
          userBillsAddressZip.parentNode.removeChild(userBillsAddressZip);
          userBillsAddressZip = document.createElement('input');
          userZipLine.appendChild(userBillsAddressZip);
          userBillsAddressZip.id = 'userBillsAddressZip';
          userBillsAddressZip.type = 'text';
          userBillsAddressZip.className = 'pure-input-1';
        }
        let userBalanceLine = document.getElementById('userBalanceLine');
        let userBillsBalance = document.getElementById('userBillsBalance');
        if (userBillsBalance) {
          userBillsBalance.parentNode.removeChild(userBillsBalance);
          userBillsBalance = document.createElement('input');
          userBalanceLine.appendChild(userBillsBalance);
          userBillsBalance.id = 'userBillsBalance';
          userBillsBalance.type = 'number';
          userBillsBalance.className = 'pure-input-1';
        }
        let userAmountDueLine = document.getElementById('userAmountDueLine');
        let userBillsAmountDue = document.getElementById('userBillsAmountDue');
        if (userBillsAmountDue) {
          userBillsAmountDue.parentNode.removeChild(userBillsAmountDue);
          userBillsAmountDue = document.createElement('input');
          userAmountDueLine.appendChild(userBillsAmountDue);
          userBillsAmountDue.id = 'userBillsAmountDue';
          userBillsAmountDue.type = 'number';
          userBillsAmountDue.className = 'pure-input-1';
        }
        let userBillDueDatDiv = document.getElementById('userBillDueDatDiv');
        let userBillsDateDue = document.getElementById('userBillsDateDue');
        if (userBillsDateDue) {
          userBillsDateDue.parentNode.removeChild(userBillsDateDue);
          userBillsDateDue = document.createElement('input');
          userBillDueDatDiv.appendChild(userBillsDateDue);
          userBillsDateDue.id = 'userBillsDateDue';
          userBillsDateDue.type = 'date';
          userBillsDateDue.className = 'pure-input-1';
        }
        let idPaidCheckboxDiv = document.getElementById('idPaidCheckboxDiv');
        let userBillIsPaid = document.getElementById('userBillIsPaid');
        if (userBillIsPaid) {
          userBillIsPaid.parentNode.removeChild(userBillIsPaid);
          idPaidCheckboxDiv.appendChild(userBillIsPaid);
          userBillIsPaid.id = 'userBillIsPaid';
          userBillIsPaid.type = 'checkbox';
        }
        let userPaymentInfosDiv = document.getElementById('userPaymentInfosDiv');
        let userBillsPaidAmountDiv = document.getElementById('userBillsPaidAmountDiv');
        let userBillsAmountPaid = document.getElementById('userBillsAmountPaid');
        if (userBillsAmountPaid) {
          userBillsAmountPaid.parentNode.removeChild(userBillsAmountPaid);
          userBillsAmountPaid = document.createElement('input');
          userBillsPaidAmountDiv.appendChild(userBillsAmountPaid);
          userBillsAmountPaid.id = 'userBillsAmountPaid';
          userBillsAmountPaid.type = 'number';
          userBillsAmountPaid.className = 'pure-input-1';
        }
        let datePaidDiv = document.getElementById('datePaidDiv');
        let userBillsDatePaid = document.getElementById('userBillsDatePaid');
        if (userBillsDatePaid) {
          userBillsDatePaid.parentNode.removeChild(userBillsDatePaid);
          userBillsDatePaid = document.createElement('input');
          datePaidDiv.appendChild(userBillsDatePaid);
          userBillsDatePaid.id = 'userBillsDatePaid';
          userBillsDatePaid.type = 'date';
          userBillsDatePaid.className = 'pure-input-1';
        }
        let billNameDivDiv = document.getElementById('billNameDivDiv');
        let userBillNameField = document.getElementById('userBillNameField');
        if (userBillNameField) {
          userBillNameField.parentNode.removeChild(userBillNameField);
          userBillNameField = document.createElement('input');
          billNameDivDiv.appendChild(userBillNameField);
          userBillNameField.id = 'userBillNameField';
          userBillNameField.type = 'text';
          userBillNameField.className = 'pure-input-1';
        }

        $http.get(`/bills/${billId}`)
        .then(userBillData=>{
          let userBill = userBillData.data;
          userBillNameField.value = userBill.name;
          userBillsPayTo.value = userBill.pay_to;
          userBillsAddressLine1.value = userBill.address_line1;
          userBillsAddressLine2.value = userBill.address_line2;
          userBillsAddressCity.value = userBill.city;
          userBillsAddressState.value = userBill.state;
          userBillsAddressZip.value = userBill.zip;
          userBillsBalance.value = userBill.balance;
          userBillsAmountDue.value = userBill.amount_due;
          userBillsDateDue.value = userBill.due_date.slice(0,10);
          if (userBill.is_paid) {
            userBillIsPaid.checked = true;
            userPaymentInfosDiv.setAttribute("style", "display: initial;");
          } else {
            userBillIsPaid.checked = false;
            userPaymentInfosDiv.setAttribute("style", "display: none;");
          }
          userBillsAmountPaid.value = userBill.amount_paid;
          if (userBill.date_paid !== null) {
            userBillsDatePaid.value = userBill.date_paid.slice(0, 10);
          }

          userBillNameField.addEventListener('focusout', ()=>{
            if ((userBillNameField.value !== userBill.name) && (userBillNameField.value !== '')) {
              let subObj = {
                name: userBillNameField.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.name = userBillNameField.value;
              });
            }
          });

          userBillsPayTo.addEventListener('focusout', ()=>{
            if ((userBillsPayTo.value !== userBill.pay_to) && (userBillsPayTo.value !== '')) {
              let subObj = {
                pay_to: userBillsPayTo.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.pay_to = userBillsPayTo.value;
              });
            }
          });
          userBillsAddressLine1.addEventListener('focusout', ()=>{
            if ((userBillsAddressLine1.value !== userBill.address_line1) && (userBillsAddressLine1.value !== '')) {
              let subObj = {
                address_line1: userBillsAddressLine1.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.address_line1 = userBillsAddressLine1.value;
              });
            }
          });
          userBillsAddressLine2.addEventListener('focusout', ()=>{
            if ((userBillsAddressLine2.value !== userBill.address_line2) && (userBillsAddressLine2.value !== '')) {
              let subObj = {
                address_line2: userBillsAddressLine2.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.address_line2 = userBillsAddressLine2.value;
              });
            }
          });
          userBillsAddressCity.addEventListener('focusout', ()=>{
            if ((userBillsAddressCity.value !== userBill.city) && (userBillsAddressCity.value !== '')) {
              let subObj = {
                city: userBillsAddressCity.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.city = userBillsAddressCity.value;
              });
            }
          });
          userBillsAddressState.addEventListener('focusout', ()=>{
            if ((userBillsAddressState.value !== userBill.state) && (userBillsAddressState.value !== '')) {
              let subObj = {
                state: userBillsAddressState.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.state = userBillsAddressState.value;
              });
            }
          });
          userBillsAddressZip.addEventListener('focusout', ()=>{
            if ((userBillsAddressZip.value !== userBill.zip) && (userBillsAddressZip.value !== '')) {
              let subObj = {
                zip: userBillsAddressZip.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.zip = userBillsAddressZip.value;
              });
            }
          });
          userBillsBalance.addEventListener('focusout', ()=>{
            if (userBillsBalance.value !== userBill.balance) {
              let subObj = {
                balance: userBillsBalance.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.balance = userBillsBalance.value;
              });
            }
          });
          userBillsAmountDue.addEventListener('focusout', ()=>{
            if (userBillsAmountDue.value !== userBill.amount_due) {
              let subObj = {
                amount_due: userBillsAmountDue.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.amount_due = userBillsAmountDue.value;
              });
            }
          });
          userBillsDateDue.addEventListener('change', ()=>{
            let upDate = new Date(userBillsDateDue.value);
            let subObj = {
              due_date: upDate
            };
            $http.patch(`/bills/${billId}`, subObj)
            .then(()=>{
              userBill.due_date = upDate;
            });
          });
          userBillIsPaid.addEventListener('click', ()=>{
            let subObj = {
              is_paid: userBillIsPaid.checked
            };
            if (userBillIsPaid.checked) {
              if (userBill.date_paid === null) {
                subObj.date_paid = new Date();
              }
              if (userBill.amount_paid < 0.01) {
                subObj.amount_paid = userBill.amount_due;
                userBillsAmountPaid.value = subObj.amount_paid;
              }
              userPaymentInfosDiv.setAttribute("style", "display: initial;");
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.is_paid = true;
              });
            } else {
              userPaymentInfosDiv.setAttribute("style", "display: none;");
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.is_paid = false;
              });
            }
          });
          userBillsAmountPaid.addEventListener('focusout', ()=>{
            if (userBillsAmountPaid.value !== userBill.amount_paid) {
              let subObj = {
                amount_paid: userBillsAmountPaid.value
              };
              $http.patch(`/bills/${billId}`, subObj)
              .then(()=>{
                userBill.amount_paid = userBillsAmountPaid.value;
              });
            }
          });
          userBillsDatePaid.addEventListener('change', ()=>{
            let subObj = {
              date_paid: new Date(userBillsDatePaid.value)
            };
            $http.patch(`/bills/${billId}`, subObj)
            .then(()=>{
              userBill.date_paid = new Date(userBillsDatePaid.value);
            });
          });
        });


        billsManagerDone.setAttribute("style", "visibility: hidden;");
        userBillsEditingDiv.setAttribute("style", "display: initial;");

      }

      function populateTasksManager() {
        $http.get(`/tasksbyuser/${currentUserId}`)
        .then(userTasksData=>{
          let userTasks = userTasksData.data;
          let userPendingTasks = userTasks.filter(task=>{
            return(!task.is_completed);
          });
          let userCompletedTasks = userTasks.filter(task=>{
            return(task.is_completed);
          });
          vm.userTasksPending = userPendingTasks.sort((a, b)=>{
            if (a.due_date < b.due_date) {
              return -1;
            } else if (a.due_date > b.due_date) {
              return 1;
            } else {
              return 0;
            }
          });
          vm.userTasksCompleted = userCompletedTasks.sort((a, b)=>{
            if (a.completed_date < b.completed_date) {
              return -1;
            } else if (a.completed_date > b.completed_date) {
              return 1;
            } else {
              return 0;
            }
          });
          if (vm.userTasksPending.length > 0) {
            for (let i = 0; i < vm.userTasksPending.length; i++) {
              vm.userTasksPending[i].cleanDue = cleanDate(vm.userTasksPending[i].due_date);
            }
          }
          if (vm.userTasksCompleted.length > 0) {
            for (let j = 0; j < vm.userTasksCompleted.length; j++) {
              vm.userTasksCompleted[j].cleanCompletionDate = cleanDate(vm.userTasksCompleted[j].completed_date);
            }
          }
        });
      }

      function closeTasksManager() {
        let tasksManagementDiv = document.getElementById('tasksManagementDiv');
        let tasksManager = document.getElementById('tasksManager');
        let taskZone = document.getElementById('taskZone');

        tasksManagementDiv.setAttribute("style", "display: none;");
        tasksManager.setAttribute("style", "visibility: visible;");
        taskZone.setAttribute("style", "opacity: 1;");
      }

      function taskManager() {
        let tasksManagementDiv = document.getElementById('tasksManagementDiv');
        let tasksManager = document.getElementById('tasksManager');
        let taskZone = document.getElementById('taskZone');

        populateTasksManager();

        tasksManagementDiv.setAttribute("style", "display: initial;");
        tasksManager.setAttribute("style", "visibility: hidden;");
        taskZone.setAttribute("style", "opacity: 0.3;");
      }

      function cleanOutFloatingHolidayRecords(holidayId) {
        $http.delete(`/holidays/${holidayId}`)
        .then(()=>{
          populateHolidayManager();
        });
      }

      function deleteUserFloatingUserHoliday(holidayName, userHolidayDeleteConfirmDiv, holidayManagementDiv) {
        $http.get(`/holidaysbyuser/${currentUserId}`)
        .then(userHolidayData=>{
          let floatingHoliday = userHolidayData.data.filter(holiday=>{
            return(holiday.name === holidayName);
          });
          for (let i = 0; i <floatingHoliday.length; i++) {
            cleanOutFloatingHolidayRecords(floatingHoliday[i].id);
          }
          userHolidayDeleteConfirmDiv.setAttribute("style", "display: none;");
          holidayManagementDiv.setAttribute("style", "display: initial;");

        });
      }

      function deleteHoliday(holidayId) {
        let userHolidayDeleteConfirmDiv = document.getElementById('userHolidayDeleteConfirmDiv');
        let holidayManagementDiv = document.getElementById('holidayManagementDiv');
        let userHolidayDeleteBar = document.getElementById('userHolidayDeleteBar');
        let userHolidayDeleteConfirmForm = document.getElementById('userHolidayDeleteConfirmForm');
        let userHolidayDeleteQuery = document.getElementById('userHolidayDeleteQuery');
        let userHolidayDeleteImage = document.getElementById('userHolidayDeleteImage');
        let userHolidayDeleteConfirmButtons = document.getElementById('userHolidayDeleteConfirmButtons');
        let userHolidayConfirmYes = document.getElementById('userHolidayConfirmYes');
        if (userHolidayConfirmYes) {
          userHolidayConfirmYes.parentNode.removeChild(userHolidayConfirmYes);
          userHolidayConfirmYes = document.createElement('a');
          userHolidayDeleteConfirmButtons.appendChild(userHolidayConfirmYes);
          userHolidayConfirmYes.id = 'userHolidayConfirmYes';
          userHolidayConfirmYes.className = 'btn';
          userHolidayConfirmYes.setAttribute("style", "cursor: pointer;");
          userHolidayConfirmYes.innerHTML = 'yes';
        }
        let userHolidayConfirmNo = document.getElementById('userHolidayConfirmNo');
        if (userHolidayConfirmNo) {
          userHolidayConfirmNo.parentNode.removeChild(userHolidayConfirmNo);
          userHolidayConfirmNo = document.createElement('a');
          userHolidayDeleteConfirmButtons.appendChild(userHolidayConfirmNo);
          userHolidayConfirmNo.id = 'userHolidayConfirmNo';
          userHolidayConfirmNo.className = 'btn';
          userHolidayConfirmNo.setAttribute("style", "cursor:pointer;");
          userHolidayConfirmNo.innerHTML = 'no';
        }


        $http.get(`/holidays/${holidayId}`)
        .then((userDeleteHolidayData=>{
          let userDeleteHoliday = userDeleteHolidayData.data;
          userHolidayDeleteImage.src = userDeleteHoliday.picture;
          userHolidayDeleteBar.setAttribute("style", "background: " + userDeleteHoliday.color + "; background-color: -webkit-linear-gradient(-135deg, " + userDeleteHoliday.color + ", #ffffff); background: -o-linear-gradient(-135deg, " + userDeleteHoliday.color + ", #ffffff); background: -moz-linear-gradient(-135deg, " + userDeleteHoliday.color + ", #ffffff); background: linear-gradient(-135deg, " + userDeleteHoliday.color + ", #ffffff);");
          userHolidayDeleteConfirmForm.setAttribute("style", "background: " + userDeleteHoliday.color + "; background-color: -webkit-linear-gradient(135deg, " + userDeleteHoliday.color + ", #ffffff); background: -o-linear-gradient(135deg, " + userDeleteHoliday.color + ", #ffffff); background: -moz-linear-gradient(135deg, " + userDeleteHoliday.color + ", #ffffff); background: linear-gradient(135deg, " + userDeleteHoliday.color + ", #ffffff);");
          userHolidayDeleteQuery.innerHTML = "Delete " + userDeleteHoliday.name + "?";

          userHolidayConfirmYes.addEventListener('click', ()=>{

            if (userDeleteHoliday.is_annual) {
              $http.delete(`/holidays/${holidayId}`)
              .then(()=>{
                userHolidayDeleteConfirmDiv.setAttribute("style", "display: none;");
                holidayManagementDiv.setAttribute("style", "display: initial;");
                populateHolidayManager();
              });
            } else {
              deleteUserFloatingUserHoliday(userDeleteHoliday.name, userHolidayDeleteConfirmDiv, holidayManagementDiv);
            }
          });
          userHolidayConfirmNo.addEventListener('click', ()=>{
            userHolidayDeleteConfirmDiv.setAttribute("style", "display: none;");
            holidayManagementDiv.setAttribute("style", "display: initial;");
          });
        }));

        userHolidayDeleteConfirmDiv.setAttribute("style", "display: initial;");
        holidayManagementDiv.setAttribute("style", "display: none;");
      }

      function userOccasionsEditorDone() {
        let occasionsManagerDone = document.getElementById('occasionsManagerDone');
        let userOccasionsEditingDiv = document.getElementById('userOccasionsEditingDiv');

        occasionsManagerDone.setAttribute("style", "visibility: visible;");
        userOccasionsEditingDiv.setAttribute("style", "display: none;");
        populateOccasionManager();
      }

      function shareTheOccasion(friendId, occasionId) {
        let subObj = {
          user_id: currentUserId,
          occasion_id: occasionId,
          share_associate_id: friendId,
          responded: false,
          accepted: false
        };
        $http.post('/occasions_shares', subObj)
        .then(()=>{
          cancelOccasionInvite();
        });
      }

      function occasionShareFriendSlot(friendId, listDiv, filter, occasionId) {
        let entryDiv;
        let entryImg;
        let entryName;
        let entryBr;

        $http.get(`/users/${friendId}`)
        .then(friendData=>{
          let friend = friendData.data;
          if ((friend.name.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) || (friend.email.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1)) {
            entryDiv = document.createElement('div');
            entryDiv.setAttribute("style", "cursor: pointer;");
            listDiv.appendChild(entryDiv);
            entryImg = document.createElement('img');
            entryDiv.appendChild(entryImg);
            entryImg.src = friend.user_avatar_url;
            entryName = document.createElement('p');
            entryDiv.appendChild(entryName);
            entryName.innerHTML = friend.name;
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
              shareTheOccasion(friendId, occasionId);
            });
          }
        });
      }

      function populateOccasionShareFriendsList(listDiv, filter, occasionId) {
        $http.get(`/users/${currentUserId}`)
        .then(userData=>{
          let user = userData.data;
          if (user.associates.friends !== null) {
            if (user.associates.friends.length > 0) {
              for (let i = 0; i < user.associates.friends.length; i++) {
                occasionShareFriendSlot(user.associates.friends[i], listDiv, filter, occasionId);
              }
            }
          }
        });
      }

      function editOccaision(occasionId) {
        let occasionsManagerDone = document.getElementById('occasionsManagerDone');
        let userOccasionsEditingDiv = document.getElementById('userOccasionsEditingDiv');
        let userOccasionNameDiv = document.getElementById('userOccasionNameDiv');
        let userOccasionsEditName = document.getElementById('userOccasionsEditName');
        if (userOccasionsEditName) {
          userOccasionsEditName.parentNode.removeChild(userOccasionsEditName);
          userOccasionsEditName = document.createElement('input');
          userOccasionNameDiv.appendChild(userOccasionsEditName);
          userOccasionsEditName.id = 'userOccasionsEditName';
          userOccasionsEditName.type = 'text';
          userOccasionsEditName.className = 'pure-input-1';
        }
        let userOccasionDateDiv = document.getElementById('userOccasionDateDiv');
        let userOccasionsDate = document.getElementById('userOccasionsDate');
        if (userOccasionsDate) {
          userOccasionsDate.parentNode.removeChild(userOccasionsDate);
          userOccasionsDate = document.createElement('input');
          userOccasionDateDiv.appendChild(userOccasionsDate);
          userOccasionsDate.id = 'userOccasionsDate';
          userOccasionsDate.className = 'pure-input-1';
          userOccasionsDate.type = 'date';
        }
        let userOccasionAnnualCheckboxDiv = document.getElementById('userOccasionAnnualCheckboxDiv');
        let userOccasionsAnnualState = document.getElementById('userOccasionsAnnualState');
        if (userOccasionsAnnualState) {
          userOccasionsAnnualState.parentNode.removeChild(userOccasionsAnnualState);
          userOccasionsAnnualState = document.createElement('input');
          userOccasionAnnualCheckboxDiv.appendChild(userOccasionsAnnualState);
          userOccasionsAnnualState.id = userOccasionsAnnualState;
          userOccasionsAnnualState.type = 'checkbox';
        }
        let userOccasionsEditorShareDiv = document.getElementById('userOccasionsEditorShareDiv');
        let userOccasionsEditorShare = document.getElementById('userOccasionsEditorShare');
        if (userOccasionsEditorShare) {
          userOccasionsEditorShare.parentNode.removeChild(userOccasionsEditorShare);
          userOccasionsEditorShare = document.createElement('a');
          userOccasionsEditorShareDiv.appendChild(userOccasionsEditorShare);
          userOccasionsEditorShare.id = 'userOccasionsEditorShare';
          userOccasionsEditorShare.className = 'btn';
          userOccasionsEditorShare.innerHTML = 'share';
          userOccasionsEditorShare.setAttribute("style", "cursor: pointer;");
        }
        let shareOccasionPane = document.getElementById('shareOccasionPane');
        let occasionShareName = document.getElementById('occasionShareName');
        let occasionShareDate = document.getElementById('occasionShareDate');
        let ocDate;
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
        let occasionShareAnnuality = document.getElementById('occasionShareAnnuality');
        let occasionFriendsSearchList = document.getElementById('occasionFriendsSearchList');
        let shareOccasionSearchBarDiv = document.getElementById('shareOccasionSearchBarDiv');
        let occasionWhoToShareSearch = document.getElementById('occasionWhoToShareSearch');
        if (occasionWhoToShareSearch) {
          occasionWhoToShareSearch.parentNode.removeChild(occasionWhoToShareSearch);
          occasionWhoToShareSearch = document.createElement('input');
          shareOccasionSearchBarDiv.appendChild(occasionWhoToShareSearch);
          occasionWhoToShareSearch.id = 'occasionWhoToShareSearch';
          occasionWhoToShareSearch.type = 'text';
          occasionWhoToShareSearch.placeholder = 'search';
        }

        $http.get(`/occasions/${occasionId}`)
        .then(occasionData=>{
          let occasion = occasionData.data;
          userOccasionsEditName.value = occasion.name;
          userOccasionsDate.value = occasion.day_of.slice(0,10);
          if (occasion.is_annual) {
            userOccasionsAnnualState.checked = true;
          } else {
            userOccasionsAnnualState.checked = false;
          }

          userOccasionsEditName.addEventListener('focusout', ()=>{
            let subObj = {
              name: userOccasionsEditName.value
            };
            if ((userOccasionsEditName.value !== '') && (userOccasionsEditName.value !== occasion.name)) {
              $http.patch(`/occasions/${occasionId}`, subObj)
              .then(()=>{
                occasion.name = subObj.name;
              });
            }
          });
          userOccasionsDate.addEventListener('change', ()=>{
            let subObj = {
              day_of: new Date(userOccasionsDate.value)
            };
            $http.patch(`/occasions/${occasionId}`, subObj)
            .then(()=>{
              occasion.day_of = new Date(subObj.day_of);
            });
          });
          userOccasionsAnnualState.addEventListener('click', ()=>{
            let subObj = {
              is_annual: userOccasionsAnnualState.checked
            };
            $http.patch(`/occasions/${occasionId}`, subObj)
            .then(()=>{
              occasion.is_annual = userOccasionsAnnualState.checked;
            });
          });
          userOccasionsEditorShare.addEventListener('click', () => {
            shareOccasionPane.setAttribute("style", "z-index: 6; opacity: 1; transition: all 0.5s linear;");
            ocDate = new Date(occasion.day_of);

            occasionShareName.innerHTML = occasion.name;
            occasionShareDate.innerHTML = ocDate.getDate() + ' ' + months[ocDate.getMonth()];
            if (occasion.is_annual) {
              occasionShareAnnuality.innerHTML = 'Observed Annually';
            } else {
              occasionShareAnnuality.innerHTML = 'Observed in ' + ocDate.getFullYear();
            }
            while(occasionFriendsSearchList.firstChild) {
              occasionFriendsSearchList.removeChild(occasionFriendsSearchList.firstChild);
            }
            populateOccasionShareFriendsList(occasionFriendsSearchList, '', occasion.id);
            occasionWhoToShareSearch.addEventListener('keyup', ()=>{
              while(occasionFriendsSearchList.firstChild) {
                occasionFriendsSearchList.removeChild(occasionFriendsSearchList.firstChild);
              }
              populateOccasionShareFriendsList(occasionFriendsSearchList, occasionWhoToShareSearch.value, occasion.id);
            });
          });
        });

        userOccasionsEditingDiv.setAttribute("style", "display: initial;");
        occasionsManagerDone.setAttribute("style", "visibility: hidden;");
      }

      function closeBillsManager() {
        let billsManagerButton = document.getElementById('billsManagerButton');
        let billZone = document.getElementById('billZone');
        let billsManagementDiv = document.getElementById('billsManagementDiv');

        billsManagerButton.setAttribute("style", "visibility: visible;");
        billZone.setAttribute("style", "opacity: 1;");
        billsManagementDiv.setAttribute("style", "display: none;");
      }

      function billsManager() {
        let billsManagerButton = document.getElementById('billsManagerButton');
        let billZone = document.getElementById('billZone');
        let billsManagementDiv = document.getElementById('billsManagementDiv');

        $http.get(`/billsbyuser/${currentUserId}`)
        .then(allUserBillsData=>{
          let allUserBills = allUserBillsData.data;
          let userUnpaidBills = allUserBills.filter(bill=>{
            return(!bill.is_paid);
          });
          let userPaidBills = allUserBills.filter(bill=>{
            return(bill.is_paid);
          });
          vm.userUnpaidBills = userUnpaidBills.sort((a,b)=>{
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          });
          vm.userPaidBills = userPaidBills.sort((a,b)=>{
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          });
          if (vm.userUnpaidBills.length > 0) {
            for (let i = 0; i < vm.userUnpaidBills.length; i++) {
              vm.userUnpaidBills[i].cleanDue = cleanDate(vm.userUnpaidBills[i].due_date);
            }
          }
          if (vm.userPaidBills.length > 0) {
            for (let j = 0; j < vm.userPaidBills.length; j++) {
              vm.userPaidBills[j].cleanPaid = cleanDate(vm.userPaidBills[j].date_paid);
            }
          }
        });

        billsManagerButton.setAttribute("style", "visibility: hidden;");
        billZone.setAttribute("style", "opacity: 0.4;");
        billsManagementDiv.setAttribute("style", "display: initial;");
      }

      function userHolidayEditorDone() {
        let holidayManagerDone = document.getElementById('holidayManagerDone');
        let userHolidayEditorDiv = document.getElementById('userHolidayEditorDiv');
        let holidayReporter = document.getElementById('holidayReporter');

        holidayManagerDone.setAttribute("style", "visibility: visible;");
        holidayReporter.setAttribute("style", "visibility: visible;");
        userHolidayEditorDiv.setAttribute("style", "display: none;");
        holidayManage();
      }

      function holidayArtDeleteListen(delElement, holiday, index, div) {
        let subObj = {
          override_content: holiday.override_content
        };
        delElement.addEventListener('click', ()=>{
          subObj.override_content.img_paths.splice(index, 1);
          subObj.override_content.titles.splice(index, 1);
          subObj.override_content.artists.splice(index, 1);
          subObj.override_content.years.splice(index, 1);
          $http.patch(`/holidays/${holiday.id}`, subObj)
          .then(()=>{
            populateHolidayArtEditor(div, holiday);
          });
        });
      }

      function holidayArtistListen(artistName, holiday, index) {
        let subObj = {
          override_content: holiday.override_content
        };
        artistName.addEventListener('focusout', ()=>{
          if ((artistName.value !== '') && (artistName.value !== subObj.override_content.artists[index])) {
            subObj.override_content.artists[index] = artistName.value;
            $http.patch(`/holidays/${holiday.id}`, subObj)
            .then(()=>{
              holiday.override_content = subObj.override_content;
              console.log('success');
            });
          }
        });
      }

      function holidayTitleListen(workTitle, holiday, index) {
        let subObj = {
          override_content: holiday.override_content
        };
        workTitle.addEventListener('focusout', ()=>{
          if ((workTitle.value !== '') && (workTitle.value !== subObj.override_content.titles[index])) {
            subObj.override_content.titles[index] = workTitle.value;
            $http.patch(`/holidays/${holiday.id}`, subObj)
            .then(()=>{
              holiday.override_content = subObj.override_content;
              console.log('success');
            });
          }
        });
      }

      function holidayYearListen(theYear, holiday, index) {
        let subObj = {
          override_content: holiday.override_content
        };
        theYear.addEventListener('focusout', ()=>{
          if ((theYear.value !== '') && (theYear.value !== subObj.override_content.years[index])) {
            subObj.override_content.years[index] = theYear.value;
            $http.patch(`/holidays/${holiday.id}`, subObj)
            .then(()=>{
              holiday.override_content = subObj.override_content;
              console.log('success');
            });
          }
        });
      }

      function holidayMusicDeleteListen(button, holiday, index, musicEditor) {
        let subObj = {
          override_content: holiday.override_content
        };
        button.addEventListener('click', ()=>{
          subObj.override_content.sources.splice(index, 1);
          subObj.override_content.src_strings.splice(index, 1);
          subObj.override_content.href_strings.splice(index, 1);
          subObj.override_content.a_strings.splice(index, 1);
          $http.patch(`/holidays/${holiday.id}`, subObj)
          .then(()=>{
            holiday.override_content = subObj.override_content;
            populateHolidayMusicEditor(musicEditor, holiday);
          });
        });
      }

      function populateHolidayMusicEditor(musicEditor, holiday) {
        let deleteButton;
        let musicPlayer;
        let musicATag;

        while (musicEditor.firstChild) {
          musicEditor.removeChild(musicEditor.firstChild);
        }
        if ((holiday.override_content === null) || (holiday.override_content === undefined)) {
          holiday.override_content = {};
          holiday.override_content.img_paths = [];
          holiday.override_content.artists = [];
          holiday.override_content.titles = [];
          holiday.override_content.years = [];
          holiday.override_content.sources = [];
          holiday.override_content.src_strings = [];
          holiday.override_content.href_strings = [];
          holiday.override_content.a_strings = [];
        }
        if (holiday.override_content.sources === undefined) {
          holiday.override_content.sources = [];
          holiday.override_content.src_strings = [];
          holiday.override_content.href_strings = [];
          holiday.override_content.a_strings = [];
        }
        if (holiday.override_content.sources.length > 0) {
          for (let i = 0; i < holiday.override_content.sources.length; i++) {
            if (holiday.override_content.sources[i] === 'bandcamp') {
              musicPlayer = document.createElement('iframe');
              musicEditor.appendChild(musicPlayer);
              musicPlayer.setAttribute("style", "border: 0; width: 100%; height: 650px;");
              musicPlayer.seamless = true;
              musicPlayer.src = holiday.override_content.src_strings[i];
              musicATag = document.createElement('a');
              musicPlayer.appendChild(musicATag);
              musicATag.href = holiday.override_content.href_strings[i];
              musicATag.innerHTML = holiday.override_content.a_strings[i];
              deleteButton = document.createElement('a');
              musicEditor.appendChild(deleteButton);
              deleteButton.className = 'btn';
              deleteButton.innerHTML = 'delete';
              deleteButton.setAttribute("style", "cursor: pointer; margin-bottom: 1em; margin-top: 0;");
              holidayMusicDeleteListen(deleteButton, holiday, i, musicEditor);
            }
          }
        }
      }

      function populateHolidayArtEditor(holidayArtsDiv, holiday) {

        let deleteButton;
        let picture;
        let artist;
        let title;
        let year;

        while (holidayArtsDiv.firstChild) {
          holidayArtsDiv.removeChild(holidayArtsDiv.firstChild);
        }
        if ((holiday.override_content === null) || (holiday.override_content === undefined)) {
          holiday.override_content = {};
          holiday.override_content.img_paths = [];
          holiday.override_content.artists = [];
          holiday.override_content.titles = [];
          holiday.override_content.years = [];
          holiday.override_content.sources = [];
          holiday.override_content.src_strings = [];
          holiday.override_content.href_strings = [];
          holiday.override_content.a_strings = [];
        }
        if (holiday.override_content.img_paths.length > 0) {
          for (let i = 0; i < holiday.override_content.img_paths.length; i++) {
            picture = document.createElement('img');
            holidayArtsDiv.appendChild(picture);
            picture.src = holiday.override_content.img_paths[i];
            deleteButton = document.createElement('a');
            holidayArtsDiv.appendChild(deleteButton);
            deleteButton.className = 'btn';
            deleteButton.innerHTML = 'delete';
            deleteButton.setAttribute("style", "cursor: pointer;");
            holidayArtDeleteListen(deleteButton, holiday, i, holidayArtsDiv);
            artist = document.createElement('input');
            holidayArtsDiv.appendChild(artist);
            artist.type = 'text';
            artist.className = "pure-input-1";
            artist.value = holiday.override_content.artists[i];
            holidayArtistListen(artist, holiday, i);
            title = document.createElement('input');
            holidayArtsDiv.appendChild(title);
            title.type = 'text';
            title.className = 'pure-input-1';
            title.value = holiday.override_content.titles[i];
            holidayTitleListen(title, holiday, i);
            year = document.createElement('input');
            holidayArtsDiv.appendChild(year);
            year.type = 'text';
            year.className = 'pure-input-1';
            year.value = holiday.override_content.years[i];
            holidayYearListen(year, holiday, i);
          }
        }




      }

      function userHolidayArtAdder(adderDiv, holiday) {
        let index = holiday.override_content.img_paths.length;
        let userHolidayArtsEditor = document.getElementById('userHolidayArtsEditor');
        let userAddHolidayArt = document.getElementById('userAddHolidayArt');
        let userHolidayEditorDoneButton = document.getElementById('userHolidayEditorDoneButton');
        let doneButton = document.createElement('a');
        adderDiv.appendChild(doneButton);
        doneButton.id = 'doneButton';
        doneButton.className = 'btn';
        doneButton.innerHTML = 'done';
        doneButton.setAttribute("style", "cursor: pointer; margin-left: 16em;");
        let image = document.createElement('img');
        adderDiv.appendChild(image);
        image.id = 'image';
        image.setAttribute("style", "width: 90%; margin: 0.5em 0em 0.5em 1em;");
        let imageURL = document.createElement('input');
        adderDiv.appendChild(imageURL);
        imageURL.id = 'imageURL';
        imageURL.type = 'text';
        imageURL.className = 'pure-input-1';
        imageURL.placeholder = 'image URL';
        let imageUploadButton = document.createElement('a');
        adderDiv.appendChild(imageUploadButton);
        imageUploadButton.className = 'btn';
        imageUploadButton.innerHTML = 'upload';
        imageUploadButton.setAttribute("style", "cursor: pointer;");
        let holidayArtImageUploaderDiv = document.createElement('div');
        adderDiv.appendChild(holidayArtImageUploaderDiv);
        holidayArtImageUploaderDiv.id = 'holidayArtImageUploaderDiv';
        let artist = document.createElement('input');
        adderDiv.appendChild(artist);
        artist.type = 'text';
        artist.className = 'pure-input-1';
        artist.setAttribute("style", "visibility: hidden;");
        let title = document.createElement('input');
        adderDiv.appendChild(title);
        title.type = 'text';
        title.className = 'pure-input-1';
        title.setAttribute("style", "visibility: hidden;");
        let year = document.createElement('input');
        adderDiv.appendChild(year);
        year.type = 'text';
        year.className = 'pure-input-1';
        year.setAttribute("style", "visibility: hidden;");



        doneButton.addEventListener('click', ()=>{
          userAddHolidayArt.setAttribute("style", "visibility: visible; background: " + holiday.color + "; background-color: -webkit-linear-gradient(135deg, " + holiday.color + ", #FBFBF3); background: -o-linear-gradient(135deg, " + holiday.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + holiday.color + ", #FBFBF3); background: linear-gradient(135deg, " + holiday.color + ", #FBFBF3);");
          userHolidayEditorDoneButton.setAttribute("style", "visibility: visible;");
          while (adderDiv.firstChild) {
            adderDiv.removeChild(adderDiv.firstChild);
          }
          populateHolidayArtEditor(userHolidayArtsEditor, holiday);
        });
        imageURL.addEventListener('focusout', ()=>{
          let subObj = {
            override_content: holiday.override_content,
            art_override: true
          };
          if (imageURL.value !== '') {
            subObj.override_content.img_paths[index] = imageURL.value;
            image.src = imageURL.value;
            if (subObj.override_content.artists[index] === undefined) {
              subObj.override_content.artists[index] = '';
              artist.placeholder = 'artist';
              artist.setAttribute("style", "visibility: visible;");
            }
            if (subObj.override_content.titles[index] === undefined) {
              subObj.override_content.titles[index] = '';
              title.placeholder = 'title';
              title.setAttribute("style", "visibility: visible;");
            }
            if (subObj.override_content.years[index] === undefined) {
              subObj.override_content.years[index] = '';
              year.placeholder = 'year';
              year.setAttribute("style", "visibility: visible;");
            }
            $http.patch(`/holidays/${holiday.id}`, subObj)
            .then(()=>{
              holiday.override_content = subObj.override_content;
            });
          }
        });
        imageUploadButton.addEventListener('click', ()=>{
          let fileUploader = document.createElement('input');
          holidayArtImageUploaderDiv.appendChild(fileUploader);
          fileUploader.type = 'file';
          let submitButton = document.createElement('a');
          holidayArtImageUploaderDiv.appendChild(submitButton);
          submitButton.className = 'btn';
          submitButton.innerHTML = 'submit';
          submitButton.setAttribute("style", "cursor: pointer;");
          let cancelButton = document.createElement('a');
          holidayArtImageUploaderDiv.appendChild(cancelButton);
          cancelButton.className = 'btn';
          cancelButton.innerHTML = 'cancel';
          cancelButton.setAttribute("style", "cursor: pointer;");
          imageUploadButton.setAttribute("style", "visibility: hidden;");

          cancelButton.addEventListener('click', ()=>{
            while (holidayArtImageUploaderDiv.firstChild) {
              holidayArtImageUploaderDiv.removeChild(holidayArtImageUploaderDiv.firstChild);
            }
            imageUploadButton.setAttribute("style", "visibility: visible;");
          });
        });
        artist.addEventListener('focusout', ()=>{
          let subObj = {
            override_content: holiday.override_content
          };
          if ((artist.value !== '') && (artist.value !== subObj.override_content.artists[index])) {
            subObj.override_content.artists[index] = artist.value;
            $http.patch(`/holidays/${holiday.id}`, subObj)
            .then(()=>{
              holiday.override_content = subObj.override_content;
            });
          }
        });
        title.addEventListener('focusout', ()=>{
          let subObj = {
            override_content: holiday.override_content
          };
          if ((title.value !== '') && (title.value !== subObj.override_content.titles[index])) {
            subObj.override_content.titles[index] = title.value;
            $http.patch(`/holidays/${holiday.id}`, subObj)
            .then(()=>{
              holiday.override_content = subObj.override_content;
            });
          }
        });
        year.addEventListener('focusout', ()=>{
          let subObj = {
            override_content: holiday.override_content
          };
          if ((year.value !== '') && (year.value !== subObj.override_content.years[index])) {
            subObj.override_content.years[index] = year.value;
            $http.patch(`/holidays/${holiday.id}`, subObj)
            .then(()=>{
              holiday.override_content = subObj.override_content;
            });
          }
        });
      }

      function editHoliday(holidayId) {
        let reportForHolidays = document.getElementById('reportForHolidays');
        let element;
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let days = [ 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
        let userHolidayEditorDoneButton = document.getElementById('userHolidayEditorDoneButton');
        let holidayManagerDone = document.getElementById('holidayManagerDone');
        let userHolidayEditorDiv = document.getElementById('userHolidayEditorDiv');
        let holidayEditorTitle = document.getElementById('holidayEditorTitle');
        let userHolidayNameField = document.getElementById('userHolidayNameField');
        let userHolidayName = document.getElementById('userHolidayName');
        if (userHolidayName) {
          userHolidayName.parentNode.removeChild(userHolidayName);
          userHolidayName = document.createElement('input');
          userHolidayNameField.appendChild(userHolidayName);
          userHolidayName.id = 'userHolidayName';
          userHolidayName.type = 'text';
          userHolidayName.className = 'pure-input-1';
        }
        let userHolidayEditorBar = document.getElementById('userHolidayEditorBar');
        let userHolidayEditorForm = document.getElementById('userHolidayEditorForm');
        let userHolidayEditorPhoto = document.getElementById('userHolidayEditorPhoto');
        let userHolidayImageEditorField = document.getElementById('userHolidayImageEditorField');
        let holidayImageURL = document.getElementById('holidayImageURL');
        if (holidayImageURL) {
          holidayImageURL.parentNode.removeChild(holidayImageURL);
          holidayImageURL = document.createElement('input');
          userHolidayImageEditorField.appendChild(holidayImageURL);
          holidayImageURL.id = 'holidayImageURL';
          holidayImageURL.type = 'text';
          holidayImageURL.className = 'pure-input-1';
        }
        let holidayImageLinkUpload = document.getElementById('holidayImageLinkUpload');
        if (holidayImageLinkUpload) {
          holidayImageLinkUpload.parentNode.removeChild(holidayImageLinkUpload);
          holidayImageLinkUpload = document.createElement('a');
          userHolidayImageEditorField.appendChild(holidayImageLinkUpload);
          holidayImageLinkUpload.id = 'holidayImageLinkUpload';
          holidayImageLinkUpload.className = 'btn';
          holidayImageLinkUpload.innerHTML = 'upload';
          holidayImageLinkUpload.setAttribute("style", "cursor: pointer;");
        }
        let userHolidayImageUploadCentre = document.getElementById('userHolidayImageUploadCentre');
        let userHolidayPhotoFile = document.getElementById('userHolidayPhotoFile');
        if (userHolidayPhotoFile) {
          userHolidayPhotoFile.parentNode.removeChild(userHolidayPhotoFile);
          userHolidayPhotoFile = document.createElement('input');
          userHolidayImageUploadCentre.appendChild(userHolidayPhotoFile);
          userHolidayPhotoFile.id = 'userHolidayPhotoFile';
          userHolidayPhotoFile.type = 'file';
          userHolidayPhotoFile.className = 'pure-input-1';
          userHolidayPhotoFile.name = 'userHolidayPhotoFile';
        }
        let userUploadHolidayPhotoConfirm = document.getElementById('userUploadHolidayPhotoConfirm');
        if (userUploadHolidayPhotoConfirm) {
          userUploadHolidayPhotoConfirm.parentNode.removeChild(userUploadHolidayPhotoConfirm);
          userUploadHolidayPhotoConfirm = document.createElement('a');
          userHolidayImageUploadCentre.appendChild(userUploadHolidayPhotoConfirm);
          userUploadHolidayPhotoConfirm.id = 'userUploadHolidayPhotoConfirm';
          userUploadHolidayPhotoConfirm.className = 'btn';
          userUploadHolidayPhotoConfirm.innerHTML = 'confirm';
          userUploadHolidayPhotoConfirm.setAttribute("style", "cursor: pointer;");
        }
        let userUploadHolidayPhotoCancel = document.getElementById('userUploadHolidayPhotoCancel');
        if (userUploadHolidayPhotoCancel) {
          userUploadHolidayPhotoCancel.parentNode.removeChild(userUploadHolidayPhotoCancel);
          userUploadHolidayPhotoCancel = document.createElement('a');
          userHolidayImageUploadCentre.appendChild(userUploadHolidayPhotoCancel);
          userUploadHolidayPhotoCancel.id = 'userUploadHolidayPhotoCancel';
          userUploadHolidayPhotoCancel.className = 'btn';
          userUploadHolidayPhotoCancel.innerHTML = 'cancel';
          userUploadHolidayPhotoCancel.setAttribute("style", "cursor: pointer;");
        }
        let userHolidayColorPicker = document.getElementById('userHolidayColorPicker');
        let userHolidayColorSelector = document.getElementById('userHolidayColorSelector');
        if (userHolidayColorSelector) {
          userHolidayColorSelector.parentNode.removeChild(userHolidayColorSelector);
          userHolidayColorSelector = document.createElement('input');
          userHolidayColorPicker.appendChild(userHolidayColorSelector);
          userHolidayColorSelector.id = 'userHolidayColorSelector';
          userHolidayColorSelector.type = 'color';
          userHolidayColorSelector.className = 'pure-input-1';
        }
        let userHolidayAnnualCheckboxDiv = document.getElementById('userHolidayAnnualCheckboxDiv');
        let userHolidayAnnuality = document.getElementById('userHolidayAnnuality');
        if (userHolidayAnnuality) {
          userHolidayAnnuality.parentNode.removeChild(userHolidayAnnuality);
          userHolidayAnnuality = document.createElement('input');
          userHolidayAnnualCheckboxDiv.appendChild(userHolidayAnnuality);
          userHolidayAnnuality.id = 'userHolidayAnnuality';
          userHolidayAnnuality.type = 'checkbox';
        }
        let isFloat = document.getElementById('isFloat');
        let userSelectHolidayDate = document.getElementById('userSelectHolidayDate');
        let userHolidayDaySelect = document.getElementById('userHolidayDaySelect');
        if (userHolidayDaySelect) {
          userHolidayDaySelect.parentNode.removeChild(userHolidayDaySelect);
          userHolidayDaySelect = document.createElement('select');
          userSelectHolidayDate.appendChild(userHolidayDaySelect);
          userHolidayDaySelect.id = 'userHolidayDaySelect';
          userHolidayDaySelect.className = 'pure-input-1';
        }
        let userHolidayMonthSelect = document.getElementById('userHolidayMonthSelect');
        if (userHolidayMonthSelect) {
          userHolidayMonthSelect.parentNode.removeChild(userHolidayMonthSelect);
          userHolidayMonthSelect = document.createElement('select');
          userSelectHolidayDate.appendChild(userHolidayMonthSelect);
          userHolidayMonthSelect.id = 'userHolidayMonthSelect';
          userHolidayMonthSelect.className = 'pure-input-1';
        }
        let holidayOverrideCheckbox = document.getElementById('holidayOverrideCheckbox');
        let userHolidayHasArtContent = document.getElementById('userHolidayHasArtContent');
        if (userHolidayHasArtContent) {
          userHolidayHasArtContent.parentNode.removeChild(userHolidayHasArtContent);
          userHolidayHasArtContent = document.createElement('input');
          holidayOverrideCheckbox.appendChild(userHolidayHasArtContent);
          userHolidayHasArtContent.id = 'userHolidayHasArtContent';
          userHolidayHasArtContent.type = 'checkbox';
        }
        let userHolidayArtContent = document.getElementById('userHolidayArtContent');
        let userHolidayArtsEditor = document.getElementById('userHolidayArtsEditor');
        while (userHolidayArtsEditor.firstChild) {
          userHolidayArtsEditor.removeChild(userHolidayArtsEditor.firstChild);
        }
        let userHolidayDivHolderForAddButton = document.getElementById('userHolidayDivHolderForAddButton');
        let userAddHolidayArt = document.getElementById('userAddHolidayArt');
        if (userAddHolidayArt) {
          userAddHolidayArt.parentNode.removeChild(userAddHolidayArt);
          userAddHolidayArt = document.createElement('button');
          userHolidayDivHolderForAddButton.appendChild(userAddHolidayArt);
          userAddHolidayArt.id = 'userAddHolidayArt';
          userAddHolidayArt.innerHTML = 'add new';
        }
        let userHolidayArtAdditionDiv = document.getElementById('userHolidayArtAdditionDiv');
        while (userHolidayArtAdditionDiv.firstChild) {
          userHolidayArtAdditionDiv.removeChild(userHolidayArtAdditionDiv.firstChild);
        }
        let userHolidayMusicOverrideCheckDiv = document.getElementById('userHolidayMusicOverrideCheckDiv');
        let userHolidayHasMusicContent = document.getElementById('userHolidayHasMusicContent');
        if (userHolidayHasMusicContent) {
          userHolidayHasMusicContent.parentNode.removeChild(userHolidayHasMusicContent);
          userHolidayHasMusicContent = document.createElement('input');
          userHolidayMusicOverrideCheckDiv.appendChild(userHolidayHasMusicContent);
          userHolidayHasMusicContent.id = 'userHolidayHasMusicContent';
          userHolidayHasMusicContent.type = 'checkbox';
        }
        let userHolidayMusicContent = document.getElementById('userHolidayMusicContent');
        let userHolidayMusicsEditor = document.getElementById('userHolidayMusicsEditor');
        let userHolidayMusicAddButtonDiv = document.getElementById('userHolidayMusicAddButtonDiv');
        let userAddHolidayMusic = document.getElementById('userAddHolidayMusic');
        if (userAddHolidayMusic) {
          userAddHolidayMusic.parentNode.removeChild(userAddHolidayMusic);
          userAddHolidayMusic = document.createElement('button');
          userHolidayMusicAddButtonDiv.appendChild(userAddHolidayMusic);
          userAddHolidayMusic.id = 'userAddHolidayMusic';
          userAddHolidayMusic.innerHTML = 'add new';
          //userHolidayMusicAddButtonDiv.setAttribute("style", "visibility: visible;");
        }
        let userHolidayMusicAddingForm = document.getElementById('userHolidayMusicAddingForm');
        userHolidayMusicAddingForm.setAttribute("style", "visibility: hidden;");
        let userHolidayMusicAddSubmit = document.getElementById('userHolidayMusicAddSubmit');
        if (userHolidayMusicAddSubmit) {
          userHolidayMusicAddSubmit.parentNode.removeChild(userHolidayMusicAddSubmit);
          userHolidayMusicAddSubmit = document.createElement('a');
          userHolidayMusicAddingForm.appendChild(userHolidayMusicAddSubmit);
          userHolidayMusicAddSubmit.id = 'userHolidayMusicAddSubmit';
          userHolidayMusicAddSubmit.className = 'btn';
          userHolidayMusicAddSubmit.setAttribute("style", "cursor: pointer;");
          userHolidayMusicAddSubmit.innerHTML = 'submit';
        }
        let userHolidayMusicAddCancel = document.getElementById('userHolidayMusicAddCancel');
        if (userHolidayMusicAddCancel) {
          userHolidayMusicAddCancel.parentNode.removeChild(userHolidayMusicAddCancel);
          userHolidayMusicAddCancel = document.createElement('a');
          userHolidayMusicAddingForm.appendChild(userHolidayMusicAddCancel);
          userHolidayMusicAddCancel.id = 'userHolidayMusicAddCancel';
          userHolidayMusicAddCancel.className = 'btn';
          userHolidayMusicAddCancel.setAttribute("style", "cursor: pointer;");
          userHolidayMusicAddCancel.innerHTML = 'cancel';
        }
        let userHolidayBandcampSubmissionString = document.getElementById('userHolidayBandcampSubmissionString');
        let userHolidayMusicAddErrorMessage = document.getElementById('userHolidayMusicAddErrorMessage');
        let holidayReporter = document.getElementById('holidayReporter');


        holidayManagerDone.setAttribute("style", "visibility: hidden;");
        holidayReporter.setAttribute("style", "visibility: hidden;");
        userHolidayEditorDiv.setAttribute("style", "display: initial;");
        reportForHolidays.setAttribute("style", "display: none;");

        $http.get(`/holidays/${holidayId}`)
        .then(userHolidayData=>{
          let userHoliday = userHolidayData.data;
          let holiDate = new Date(userHoliday.day_of);
          holidayEditorTitle.innerHTML = userHoliday.name;
          userHolidayName.value = userHoliday.name;
          userHolidayEditorBar.setAttribute("style", "background: " + userHoliday.color + "; background-color: -webkit-linear-gradient(-135deg, " + userHoliday.color + ", #FBFBF3); background: -o-linear-gradient(-135deg, " + userHoliday.color + ", #FBFBF3); background: -moz-linear-gradient(-135deg, " + userHoliday.color + ", #FBFBF3); background: linear-gradient(-135deg, " + userHoliday.color + ", #FBFBF3);");
          userHolidayEditorForm.setAttribute("style", "background: " + userHoliday.color + "; background-color: -webkit-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -o-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3);");
          userAddHolidayArt.setAttribute("style", "background: " + userHoliday.color + "; background-color: -webkit-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -o-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3);");
          userAddHolidayMusic.setAttribute("style", "background: " + userHoliday.color + "; background-color: -webkit-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -o-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3);");
          userHolidayEditorPhoto.src = userHoliday.picture;
          holidayImageURL.value = userHoliday.picture;
          userHolidayColorSelector.value = userHoliday.color;
          if (userHoliday.is_annual) {
            userHolidayAnnuality.checked = true;
            isFloat.setAttribute("style", "visibility: hidden;");
            userSelectHolidayDate.setAttribute("style", "visibility: visible;");
          } else {
            userHolidayAnnuality.checked = false;
            isFloat.setAttribute("style", "visibility: visible;");
            userSelectHolidayDate.setAttribute("style", "visibility: hidden;");
          }
          while (userHolidayDaySelect.firstChild) {
            userHolidayDaySelect.removeChild(userHolidayDaySelect.firstChild);
          }
          for (let i = 0; i < days[holiDate.getMonth()]; i++) {
            element = document.createElement('option');
            userHolidayDaySelect.appendChild(element);

            element.innerHTML = (i + 1).toString();
          }
          userHolidayDaySelect.value = holiDate.getDate().toString();
          while (userHolidayMonthSelect.firstChild) {
            userHolidayMonthSelect.removeChild(userHolidayMonthSelect.firstChild);
          }
          for (let j = 0; j < months.length; j++) {
            element = document.createElement('option');
            userHolidayMonthSelect.appendChild(element);
            element.innerHTML = months[j];
          }
          userHolidayMonthSelect.value = months[holiDate.getMonth()];
          if (userHoliday.art_override) {
            userHolidayHasArtContent.checked = true;
            userHolidayArtContent.setAttribute("style", "visibility: visible;");
            populateHolidayArtEditor(userHolidayArtsEditor, userHoliday);
          } else {
            userHolidayHasArtContent.checked = false;
            userHolidayArtContent.setAttribute("style", "visibility: hidden;");
          }
          if (userHoliday.music_override) {
            userHolidayHasMusicContent.checked = true;
            userHolidayMusicContent.setAttribute("style", "visibility: visible;");
            populateHolidayMusicEditor(userHolidayMusicsEditor, userHoliday);
          } else {
            userHolidayHasMusicContent.checked = false;
            userHolidayMusicContent.setAttribute("style", "visibility: hidden;");
          }




          userHolidayName.addEventListener('focusout', ()=>{
            if ((userHolidayName.value !== '') && (userHolidayName.value !== userHoliday.name)) {
              let subObj = {
                name: userHolidayName.value
              };
              $http.patch(`/holidays/${holidayId}`, subObj)
              .then(()=>{
                userHoliday.name = userHolidayName.value;
                holidayEditorTitle.innerHTML = userHolidayName.value;
              });
            }
          });
          holidayImageURL.addEventListener('focusout', ()=>{
            if ((holidayImageURL.value !== '') && (holidayImageURL.value !== userHoliday.picture)) {
              let subObj = {
                picture: holidayImageURL.value
              };
              $http.patch(`/holidays/${holidayId}`, subObj)
              .then(()=>{
                userHoliday.picture = holidayImageURL.value;
                userHolidayEditorPhoto.src = holidayImageURL.value;
              });
            }
          });
          holidayImageLinkUpload.addEventListener('click', ()=>{
            holidayImageLinkUpload.setAttribute("style", "visibility: hidden;");
            userHolidayImageUploadCentre.setAttribute("style", "visibility: visible;");
          });
          userUploadHolidayPhotoCancel.addEventListener('click', ()=>{
            holidayImageLinkUpload.setAttribute("style", "visibility: visible; cursor: pointer;");

            userHolidayImageUploadCentre.setAttribute("style", "visibility: hidden;");
          });
          userHolidayColorSelector.addEventListener('change', ()=>{
            let subObj = {
              color: userHolidayColorSelector.value
            };
            $http.patch(`/holidays/${holidayId}`, subObj)
            .then(()=>{
              userHoliday.color = userHolidayColorSelector.value;
              userHolidayEditorBar.setAttribute("style", "background: " + userHoliday.color + "; background-color: -webkit-linear-gradient(-135deg, " + userHoliday.color + ", #FBFBF3); background: -o-linear-gradient(-135deg, " + userHoliday.color + ", #FBFBF3); background: -moz-linear-gradient(-135deg, " + userHoliday.color + ", #FBFBF3); background: linear-gradient(-135deg, " + userHoliday.color + ", #FBFBF3);");
              userHolidayEditorForm.setAttribute("style", "background: " + userHoliday.color + "; background-color: -webkit-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -o-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3);");
              userAddHolidayArt.setAttribute("style", "background: " + userHoliday.color + "; background-color: -webkit-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -o-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3);");
              userAddHolidayMusic.setAttribute("style", "background: " + userHoliday.color + "; background-color: -webkit-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -o-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: -moz-linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3); background: linear-gradient(135deg, " + userHoliday.color + ", #FBFBF3);");
            });
          });
          userHolidayAnnuality.addEventListener('click', ()=>{
            let subObj = {
              is_annual: userHolidayAnnuality.checked
            };
            $http.patch(`/holidays/${holidayId}`, subObj)
            .then(()=>{
              userHoliday.is_annual = userHolidayAnnuality.checked;
              if (userHolidayAnnuality.checked) {
                isFloat.setAttribute("style", "visibility: hidden;");
                userSelectHolidayDate.setAttribute("style", "visibility: visible;");
              } else {
                isFloat.setAttribute("style", "visibility: visible;");
                userSelectHolidayDate.setAttribute("style", "visibility: hidden;");
              }
            });
          });
          userHolidayDaySelect.addEventListener('change', ()=>{
            let subObj = {};
            let originalDate = new Date(userHoliday.day_of);
            let updateDateString = originalDate.getFullYear().toString() + '-';
            if (originalDate.getMonth() < 9) {
              updateDateString += '0' + (originalDate.getMonth() + 1).toString() + '-';
            } else {
              updateDateString += (originalDate.getMonth() + 1).toString() + '-';
            }
            if (parseInt(userHolidayDaySelect.value) < 10) {
              updateDateString += '0' + userHolidayDaySelect.value + 'T07:00:00.000Z';
            } else {
              updateDateString += userHolidayDaySelect.value + 'T07:00:00.000Z';
            }
            subObj.day_of = new Date(updateDateString);
            $http.patch(`/holidays/${holidayId}`, subObj)
            .then(()=>{
              userHoliday.day_of = subObj.day_of;
            });
          });
          userHolidayMonthSelect.addEventListener('change', ()=>{
            let subObj = {};
            let originalDate = new Date(userHoliday.day_of);
            let originalDay = originalDate.getDate();
            let updateDateString = originalDate.getFullYear().toString() + '-';
            let updateMonth = months.indexOf(userHolidayMonthSelect.value) + 1;
            if (updateMonth < 10) {
              updateDateString += '0' + updateMonth.toString() + '-';
            } else {
              updateDateString += updateMonth.toString() + '-';
            }
            if (originalDay > days[updateMonth - 1]) {
              userHolidayDaySelect.value = days[updateMonth - 1];
            } else {
              userHolidayDaySelect.value = originalDay.toString();
            }
            if (parseInt(userHolidayDaySelect.value) < 10) {
              updateDateString += '0' + userHolidayDaySelect.value + 'T07:00:00.000Z';
            } else {
              updateDateString += userHolidayDaySelect.value + 'T07:00:00.000Z';
            }
            subObj.day_of = new Date(updateDateString);
            while (userHolidayDaySelect.firstChild) {
              userHolidayDaySelect.removeChild(userHolidayDaySelect.firstChild);
            }
            for (let i = 0; i < days[updateMonth - 1]; i++) {
              element = document.createElement('option');
              userHolidayDaySelect.appendChild(element);
              element.innerHTML = (i + 1).toString();
            }
            userHolidayDaySelect.value = subObj.day_of.getDate().toString();

            $http.patch(`/holidays/${holidayId}`, subObj)
            .then(()=>{
              userHoliday.day_of = subObj.day_of;
            });
          });
          userHolidayHasArtContent.addEventListener('click', ()=>{
            let subObj = {
              art_override: userHoliday.art_override
            };
            if (userHolidayHasArtContent.checked) {
              subObj.art_override = true;
              $http.patch(`/holidays/${userHoliday.id}`, subObj)
              .then(()=>{
                userHoliday.art_override = true;
                userHolidayArtContent.setAttribute("style", "visibility: visible; display: initial;");
                populateHolidayArtEditor(userHolidayArtsEditor, userHoliday);
                userAddHolidayArt.innerHTML = 'add new';
              });

            } else {
              subObj.art_override = false;
              $http.patch(`/holidays/${userHoliday.id}`, subObj)
              .then(()=>{
                userHoliday.art_override = false;
                while (userAddHolidayArt.firstChild) {
                  userAddHolidayArt.removeChild(userAddHolidayArt.firstChild);
                }
                userHolidayArtContent.setAttribute("style", "display: none;");
                userAddHolidayArt.innerHTML = 'add new';
              });
            }
          });
          userAddHolidayArt.addEventListener('click', ()=>{
            userAddHolidayArt.setAttribute("style", "visibility: hidden;");
            userHolidayEditorDoneButton.setAttribute("style", "visibility: hidden;");
            while (userHolidayArtAdditionDiv.firstChild) {
              userHolidayArtAdditionDiv.removeChild(userHolidayArtAdditionDiv.firstChild);
            }
            userHolidayArtAdder(userHolidayArtAdditionDiv, userHoliday);
          });
          userHolidayHasMusicContent.addEventListener('click', ()=>{
            let subObj = {
              music_override: userHoliday.music_override
            };
            if (userHolidayHasMusicContent.checked) {
              subObj.music_override = true;
              $http.patch(`/holidays/${userHoliday.id}`, subObj)
              .then(()=>{
                userHoliday.music_override = true;
                userHolidayMusicContent.setAttribute("style", "visibility: visible; display: initial;");
                populateHolidayMusicEditor(userHolidayMusicsEditor, userHoliday);
                //userAddHolidayArt.innerHTML = 'add new';
              });

            } else {
              subObj.music_override = false;
              $http.patch(`/holidays/${userHoliday.id}`, subObj)
              .then(()=>{
                userHoliday.music_override = false;
                while (userHolidayMusicsEditor.firstChild) {
                  userHolidayMusicsEditor.removeChild(userHolidayMusicsEditor.firstChild);
                }
                userHolidayMusicContent.setAttribute("style", "display: none;");
                //userAddHolidayArt.innerHTML = 'add new';
              });
            }
          });
          userAddHolidayMusic.addEventListener('click', ()=>{
            userHolidayMusicAddButtonDiv.setAttribute("style", "visibility: hidden;");
            userHolidayMusicAddingForm.setAttribute("style", "visibility: visible;");
          });
          userHolidayMusicAddSubmit.addEventListener('click', ()=>{
            // Check validity of user input
            if (checkValidBancampEmbed(userHolidayBandcampSubmissionString.value)) {
              let subObj = {
                override_content: userHoliday.override_content
              };
              let index = subObj.override_content.sources.length;
              subObj.override_content.sources[index] = 'bandcamp';
              subObj.override_content.src_strings[index] = extractSrcStringFromBandcampEmbed(userHolidayBandcampSubmissionString.value);
              subObj.override_content.href_strings[index] = extractHrefStringFromBandcampEmbed(userHolidayBandcampSubmissionString.value);
              subObj.override_content.a_strings[index] = extractATagFromBandcampEmbed(userHolidayBandcampSubmissionString.value);
              $http.patch(`/holidays/${userHoliday.id}`, subObj)
              .then(()=>{
                userHoliday.override_content = subObj.override_content;
                populateHolidayMusicEditor(userHolidayMusicsEditor, userHoliday);
                userHolidayMusicAddButtonDiv.setAttribute("style", "visibility: visible;");
                userHolidayMusicAddingForm.setAttribute("style", "visibility: hidden;");
                userHolidayBandcampSubmissionString.value = '';
                userHolidayMusicAddErrorMessage.innerHTML = '';
              });
            } else {
              userHolidayMusicAddErrorMessage.setAttribute("style", "color: #ff0000;");
              userHolidayMusicAddErrorMessage.innerHTML = "ERROR: Invalid embed link - please try again";
            }
            // If valid, build submission object and patch
            // Repopulate music
            // Clear out form and hide
          });
          userHolidayMusicAddCancel.addEventListener('click', ()=>{
            userHolidayMusicAddButtonDiv.setAttribute("style", "visibility: visible;");
            userHolidayMusicAddingForm.setAttribute("style", "visibility: hidden;");
            userHolidayBandcampSubmissionString.value = '';
            userHolidayMusicAddErrorMessage.innerHTML = '';
          });
        });
      }

      function cleanDateHoliday(day) {
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
        let check = new Date(day);
        let dateString = check.getDate() + ' ' + months[check.getMonth()] + ' ' + check.getFullYear();

        return(dateString);
      }

      function cleanDate(dayOf) {
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
        let check = new Date(dayOf.slice(0,16));
        let dateString = check.getDate() + ' ' + months[check.getMonth()];

        return(dateString);
      }

      function populateHolidayManager() {
        $http.get(`/holidaysbyuser/${currentUserId}`)
        .then(userHolidaysData=>{
          let userHolidays = userHolidaysData.data;
          let prunedHolidays = [];
          let isDupe = false;
          if (userHolidays.length > 0) {
            for (let i = 0; i < userHolidays.length; i++) {
              if (userHolidays[i].is_annual) {
                userHolidays[i].day = cleanDate(userHolidays[i].day_of);
                prunedHolidays.push(userHolidays[i]);
              } else {
                isDupe = false;
                userHolidays[i].day = 'float';
                if (prunedHolidays.length > 0) {
                  for (let j = 0; j < prunedHolidays.length; j++) {
                    if (prunedHolidays[j].name === userHolidays[i].name) {
                      isDupe = true;
                    }
                  }
                }
                if (!isDupe) {
                  prunedHolidays.push(userHolidays[i]);
                }
              }
            }
            vm.userholidays = prunedHolidays.sort((a,b)=>{
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              } else {
                return 0;
              }
            });
          }
        });
      }

      function removeOccasionEntry(occasionId) {
        $http.delete(`/occasions/${occasionId}`)
        .then(()=>{
          console.log('pruned');
        });
      }

      function pruneEmptyOccasions() {
        $http.get(`/occasionsbyuser/${currentUserId}`)
        .then(resultingData=>{
          let userOccasions = resultingData.data;
          let emptyOccasions = userOccasions.filter(entry=>{
            return (entry.name === '');
          });
          if (emptyOccasions.length > 0) {
            for (let i = 0; i < emptyOccasions.length; i++) {
              removeOccasionEntry(emptyOccasions[i].id);
            }
          }
        });
      }

      function closeOccasionsManager() {
        let occasionManager = document.getElementById('occasionManager');
        let occasionsManagementDiv = document.getElementById('occasionsManagementDiv');
        let occasionZone = document.getElementById('occasionZone');


        occasionManager.setAttribute("style", "visibility: visible;");
        occasionsManagementDiv.setAttribute("style", "display: none;");
        occasionZone.setAttribute("style", "opacity: 1;");
        pruneEmptyOccasions();
      }

      function closeHolidayManager() {
        let holidayManager = document.getElementById('holidayManager');
        let holidayManagementDiv = document.getElementById('holidayManagementDiv');
        let holidayZone = document.getElementById('holidayZone');


        holidayManager.setAttribute("style", "visibility: visible;");
        holidayManagementDiv.setAttribute("style", "display: none;");
        holidayZone.setAttribute("style", "opacity: 1;");
      }

      function populateOccasionManager() {
        $http.get(`/occasionsbyuser/${currentUserId}`)
        .then(userOccasionsData=>{
          let userOccasions = userOccasionsData.data;
          for (let i = 0; i < userOccasions.length; i++) {
            userOccasions[i].dayOf = cleanDate(userOccasions[i].day_of);
            if (userOccasions[i].is_annual) {
              userOccasions[i].annualState = 'yes';
            } else {
              userOccasions[i].annualState = 'no';
            }
          }
          vm.userOccasions = userOccasions.sort((a, b)=>{
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1;
            } else if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          });
          while (vm.userOccasions[0].name === '') {
            vm.userOccasions.shift();
          }

        });
      }

      function occasionManage() {
        let occasionManager = document.getElementById('occasionManager');
        let occasionsManagementDiv = document.getElementById('occasionsManagementDiv');
        let occasionZone = document.getElementById('occasionZone');


        occasionManager.setAttribute("style", "visibility: hidden;");
        occasionsManagementDiv.setAttribute("style", "display: initial;");
        occasionZone.setAttribute("style", "opacity: 0.4;");
        populateOccasionManager();
      }

      function holidayManage() {
        let holidayManager = document.getElementById('holidayManager');
        let holidayManagementDiv = document.getElementById('holidayManagementDiv');
        let holidayZone = document.getElementById('holidayZone');


        holidayManager.setAttribute("style", "visibility: hidden;");
        holidayManagementDiv.setAttribute("style", "display: initial;");
        holidayZone.setAttribute("style", "opacity: 0.4;");
        populateHolidayManager();
      }

      function deleteBlock(blockId) {
        let deleteBlocktypeConfirm = document.getElementById('deleteBlocktypeConfirm');
        let reportForBlocktypes = document.getElementById('reportForBlocktypes');
        let blocktypeEditDiv = document.getElementById('blocktypeEditDiv');
        let deleteBlocktypeConfirmField = document.getElementById('deleteBlocktypeConfirmField');
        let deleteBlocktypeConfirmBar = document.getElementById('deleteBlocktypeConfirmBar');
        let deleteBlocktypeTitle = document.getElementById('deleteBlocktypeTitle');
        let deleteBlocktypeQuery = document.getElementById('deleteBlocktypeQuery');
        let deleteBlocktypeTotalBlocks = document.getElementById('deleteBlocktypeTotalBlocks');
        let deleteBlocktypePastBlocks = document.getElementById('deleteBlocktypePastBlocks');
        let deleteBlocktypeTodayBlocks = document.getElementById('deleteBlocktypeTodayBlocks');
        let deleteBlocktypeFutureBlocks = document.getElementById('deleteBlocktypeFutureBlocks');
        let deleteBlocktypeButtons = document.getElementById('deleteBlocktypeButtons');
        let deleteBlocktypeCancelConfirm = document.getElementById('deleteBlocktypeCancelConfirm');
        if (deleteBlocktypeCancelConfirm) {
          deleteBlocktypeCancelConfirm.parentNode.removeChild(deleteBlocktypeCancelConfirm);
          deleteBlocktypeCancelConfirm = document.createElement('a');
          deleteBlocktypeButtons.appendChild(deleteBlocktypeCancelConfirm);
          deleteBlocktypeCancelConfirm.id = 'deleteBlocktypeCancelConfirm';
          deleteBlocktypeCancelConfirm.className = 'btn';
          deleteBlocktypeCancelConfirm.innerHTML = 'confirm';
          deleteBlocktypeCancelConfirm.setAttribute("style", "cursor: pointer;");
        }
        let deleteBlocktypeCancelButton = document.getElementById('deleteBlocktypeCancelButton');
        if (deleteBlocktypeCancelButton) {
          deleteBlocktypeCancelButton.parentNode.removeChild(deleteBlocktypeCancelButton);
          deleteBlocktypeCancelButton = document.createElement('a');
          deleteBlocktypeButtons.appendChild(deleteBlocktypeCancelButton);
          deleteBlocktypeCancelButton.id = 'deleteBlocktypeCancelButton';
          deleteBlocktypeCancelButton.className = 'btn';
          deleteBlocktypeCancelButton.innerHTML = 'cancel';
          deleteBlocktypeCancelButton.setAttribute("style", "cursor: pointer;");
        }

        deleteBlocktypeConfirm.setAttribute("style", "display: initial;");
        reportForBlocktypes.setAttribute("style", "display: none;");
        blocktypeEditDiv.setAttribute("style", "display: none;");


        $http.get(`/blocktypes/${blockId}`)
        .then(blockData=>{
          let block = blockData.data;
          deleteBlocktypeConfirmField.setAttribute("style", "background: " + block.color + "; background-color: -webkit-linear-gradient(135deg, " + block.color + ", #abdada); background: -o-linear-gradient(135deg, " + block.color + ", #abdada); background: -moz-linear-gradient(135deg, " + block.color + ", #abdada); background: linear-gradient(135deg, " + block.color + ", #abdada);");
          deleteBlocktypeConfirmBar.setAttribute("style", "background: " + block.color + "; background-color: -webkit-linear-gradient(-135deg, " + block.color + ", #abdada); background: -o-linear-gradient(-135deg, " + block.color + ", #abdada); background: -moz-linear-gradient(-135deg, " + block.color + ", #abdada); background: linear-gradient(-135deg, " + block.color + ", #abdada);");
          deleteBlocktypeTitle.innerHTML = 'Delete ' + block.type + '?';
          deleteBlocktypeQuery.innerHTML = 'Delete ' + block.type + '?';
          $http.get(`/timeblocksbyuser/${currentUserId}`)
          .then(timeblocksData=>{
            let timeblocks = timeblocksData.data;
            let total = timeblocks.filter(tblock=>{
              return(tblock.block_type === block.id);
            });
            if (total.length > 0) {
              if (total.length === 1) {
                deleteBlocktypeTotalBlocks.innerHTML = 'Currently referenced in ' + total.length + ' timeblock.';
              } else {
                deleteBlocktypeTotalBlocks.innerHTML = 'Currently referenced in ' + total.length + ' timeblocks.';
              }
              let past = total.filter(block=>{
                return(getTense(block) === 'past');
              });
              let present = total.filter(block=>{
                return(getTense(block) === 'present');
              });
              let future = total.filter(block=>{
                return(getTense(block) === 'future');
              });
              if (past.length > 0) {
                deleteBlocktypePastBlocks.innerHTML = 'Referenced in ' + past.length + " prior to today.";
              }
              if (present.length > 0) {
                deleteBlocktypeTodayBlocks.innerHTML = 'Referenced in ' + present.length + ' today.';
              }
              if (future.length > 0) {
                deleteBlocktypeFutureBlocks.innerHTML = 'Referenced in ' + future.length + ' after today.';
              }
            }

            deleteBlocktypeCancelConfirm.addEventListener('click', ()=>{
              $http.delete(`/blocktypes/${blockId}`)
              .then(()=>{
                deleteBlocktypeConfirm.setAttribute("style", "display: none;");
                blocktypeEditor();
                setUserBlockTypes();
              });
            });

            deleteBlocktypeCancelButton.addEventListener('click', ()=>{
              deleteBlocktypeConfirm.setAttribute("style", "display: none;");
              blocktypeEditDiv.setAttribute("style", "display: initial;");
            });

          });
        });


      }

      function getTense(block) {
        let tense = '';
        let today = new Date();
        let start = new Date(block.start_time.slice(0, 16));
        let end = new Date(block.end_time.slice(0, 16));
        let checkDate;
        if ((start.getFullYear() !== end.getFullYear()) || (start.getMonth() !== end.getMonth()) || (start.getDate() !== end.getDate())) {
          checkDate = new Date(end);
        } else {
          checkDate = new Date(start);
        }

        if (checkDate.getFullYear() < today.getFullYear()) {
          tense = 'past';
        } else if (checkDate.getFullYear() > today.getFullYear()) {
          tense = 'future';
        } else {
          if (checkDate.getMonth() < today.getMonth()) {
            tense = 'past';
          } else if (checkDate.getMonth() > today.getMonth()) {
            tense = 'future';
          } else {
            if (checkDate.getDate() < today.getDate()) {
              tense = 'past';
            } else if (checkDate.getDate() > today.getDate()) {
              tense = 'future';
            } else {
              tense = 'present';
            }
          }
        }

        return(tense);
      }

      function getHourTotal(timeblock) {

        let start = new Date(timeblock.start_time.slice(0, 16));
        let end = new Date(timeblock.end_time.slice(0, 16));
        let hours = 0;

        if ((end.getFullYear() > start.getFullYear()) || (end.getMonth() > start.getMonth()) || (end.getDate() > start.getDate())) {
          hours = 24 - start.getHours();
          if (start.getMinutes() === 30) {
            hours -= 0.5;
          }
        } else if ((end.getFullYear() < start.getFullYear()) || (end.getMonth() < start.getMonth()) || (end.getDate() < start.getDate())) {
          hours = end.getHours();
          if (end.getMinutes() === 30) {
            hours += 0.5;
          }
        } else {
          hours = (end.getHours() - start.getHours());


          if (end.getMinutes() === 30) {
            hours += 0.5;
          }
          if (start.getMinutes() === 30) {
            hours -= 0.5;
          }
        }




        return(hours);
      }

      function sevenDayBlocks(blocks) {
        let calendarBlocks = [];
        let navDate = new Date();
        let startTime;
        let endTime;
        let checkDate;

        for (let i = 0; i < 7; i++) {
          for (let index = 0; index < blocks.length; index++) {
            startTime = new Date(blocks[index].start_time.slice(0, 16));
            endTime = new Date(blocks[index].end_time.slice(0, 16));
            if ((startTime.getFullYear() !== endTime.getFullYear()) || (startTime.getMonth() !== endTime.getMonth()) || (startTime.getDate() !== endTime.getDate())) {
              checkDate = new Date(endTime);
            } else {
              checkDate = new Date(startTime);
            }
            if ((navDate.getFullYear() === checkDate.getFullYear()) && (navDate.getMonth() === checkDate.getMonth()) && (navDate.getDate() === checkDate.getDate())) {
              calendarBlocks.push(blocks[index]);
            }
          }
          navDate.setDate(navDate.getDate()+1);
        }

        return(calendarBlocks);
      }

      function calendarWeekBlocks(blocks) {
        let calendarBlocks = [];
        let navDate = new Date();
        let startTime;
        let endTime;
        let checkDate;
        if (navDate.getDay() !== 1) {
          while (navDate.getDay() !== 1) {
            navDate.setDate(navDate.getDate()-1);
          }
        }
        for (let i = 0; i < 7; i++) {
          for (let index = 0; index < blocks.length; index++) {
            startTime = new Date(blocks[index].start_time.slice(0, 16));
            endTime = new Date(blocks[index].end_time.slice(0, 16));
            if ((startTime.getFullYear() !== endTime.getFullYear()) || (startTime.getMonth() !== endTime.getMonth()) || (startTime.getDate() !== endTime.getDate())) {
              checkDate = new Date(endTime);
            } else {
              checkDate = new Date(startTime);
            }
            if ((navDate.getFullYear() === checkDate.getFullYear()) && (navDate.getMonth() === checkDate.getMonth()) && (navDate.getDate() === checkDate.getDate())) {
              calendarBlocks.push(blocks[index]);
            }
          }
          navDate.setDate(navDate.getDate()+1);
        }

        return(calendarBlocks);
      }

      function tallyBlocktypehours(index, timeblocks) {
        let totalHours = 0;
        let pastHours = 0;
        let presentHours = 0;
        let futureHours = 0;
        let calendarHours = 0;
        let sevenDayHours = 0;
        let total = timeblocks.filter(block=>{
          return(block.block_type === vm.blockreporter[index].id);
        });
        vm.blockreporter[index].totalTimeblocks = total.length;
        let past = total.filter(block=>{
          return(getTense(block) === 'past');
        });
        let present = total.filter(block=>{
          return(getTense(block) === 'present');
        });
        let future = total.filter(block=>{
          return(getTense(block) === 'future');
        });
        let calendarWeek = calendarWeekBlocks(total);
        let week = sevenDayBlocks(total);
        vm.blockreporter[index].pastBlockTotal = past.length;
        vm.blockreporter[index].todayBlockTotal = present.length;
        vm.blockreporter[index].futureBlockTotal = future.length;

        if (total.length > 0) {
          for (let totalIndex = 0; totalIndex < total.length; totalIndex++) {
            totalHours += getHourTotal(total[totalIndex]);
          }
        }
        if (past.length > 0) {
          for (let pastIndex = 0; pastIndex < past.length; pastIndex++) {
            pastHours += getHourTotal(past[pastIndex]);
          }
        }
        if (present.length > 0) {
          for (let presentIndex = 0; presentIndex < present.length; presentIndex++) {
            presentHours += getHourTotal(present[presentIndex]);
          }
        }
        if (future.length > 0) {
          for (let futureIndex = 0; futureIndex < future.length; futureIndex++) {
            futureHours += getHourTotal(future[futureIndex]);
          }
        }
        if (calendarWeek.length > 0) {
          for (let calendarWeekIndex = 0; calendarWeekIndex < calendarWeek.length; calendarWeekIndex++) {
            calendarHours += getHourTotal(calendarWeek[calendarWeekIndex]);
          }
        }
        if (week.length > 0) {
          for (let weekIndex = 0; weekIndex < week.length; weekIndex++) {
            sevenDayHours += getHourTotal(week[weekIndex]);
          }
        }
        vm.blockreporter[index].blocktypeHours = totalHours;
        vm.blockreporter[index].blocktypePastHours = pastHours;
        vm.blockreporter[index].blocktypeTodayHours = presentHours;
        vm.blockreporter[index].blocktypeFutureHours = futureHours;
        vm.blockreporter[index].blocktypeProjectedCalendarWeekHours = calendarHours;
        vm.blockreporter[index].blocktypeProjectedWeekHours = sevenDayHours;
      }

      function blockReportCollectData() {
        $http.get(`/timeblocksbyuser/${currentUserId}`)
        .then(timeblocksData=>{
          let timeblocks = timeblocksData.data;
          if (vm.blockreporter.length > 0) {
            for (let i = 0; i < vm.blockreporter.length; i++) {
              tallyBlocktypehours(i, timeblocks);
            }
          }
        });
      }

      function blocktypeReport() {
        let reportForBlocktypes = document.getElementById('reportForBlocktypes');
        let userExistingBlockEditorDiv = document.getElementById('userExistingBlockEditorDiv');
        let blockEditDone = document.getElementById('blockEditDone');

        $http.get(`/blocktypesbyuser/${currentUserId}`)
        .then(blocksData=>{
          let blocks = blocksData.data;
          vm.blockreporter = blocks.sort((a, b)=>{
            if (a.type.toLowerCase() < b.type.toLowerCase()) {
              return -1;
            } else if (a.type.toLowerCase() > b.type.toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          });
          blockReportCollectData();
        });


        reportForBlocktypes.setAttribute("style", "display: initial;");
        userExistingBlockEditorDiv.setAttribute("style", "display: none;");
        blockEditDone.setAttribute("style", "visibility: hidden;");
      }

      function blocktypeReportDone() {
        let reportForBlocktypes = document.getElementById('reportForBlocktypes');
        let blockEditDone = document.getElementById('blockEditDone');


        reportForBlocktypes.setAttribute("style", "display: none;");
        blockEditDone.setAttribute("style", "visibility: visible;");
      }

      function createNewBlocktype() {
        let subObj = {
          user_id: currentUserId,
          type: '',
          keys: null,
          color: '#ffffff'
        };
        $http.post('/blocktypes', subObj)
        .then(submittedBlockData=>{
          let submittedBlock = submittedBlockData.data[0];
          editBlock(submittedBlock.id);
        });
      }

      function deleteTheBlankBlock(theId) {
        $http.delete(`/blocktypes/${theId}`)
        .then();
      }

      function userExistingBlocksEditorDone() {
        let userExistingBlockEditorDiv = document.getElementById('userExistingBlockEditorDiv');
        let blockEditDone = document.getElementById('blockEditDone');

        userExistingBlockEditorDiv.setAttribute("style", "display: none;");
        blockEditDone.setAttribute("style", "visibility: visible;");
        $http.get(`/blocktypesbyuser/${currentUserId}`)
        .then(userBlocksData=>{
          let userBlocks = userBlocksData.data;
          let emptyBlocks = userBlocks.filter((blok)=>{
            return (blok.type === '');
          });
          if (emptyBlocks.length > 0) {
            for (let i = 0; i < emptyBlocks.length; i++) {
              deleteTheBlankBlock(emptyBlocks[i].id);
            }
          } else {
            setUserBlockTypes();
          }
        });

      }

      function subsubValuesEventListeners(deleteButton, textEntry, block, index) {

        deleteButton.addEventListener('click', ()=>{
          let subObj = {
            keys: block.keys
          };
          if (block.keys.keys.length !== index) {
            subObj.keys.keys.splice(index, 1);
            $http.patch(`/blocktypes/${block.id}`, subObj)
            .then(patchedData=>{
              let patched = patchedData.data;
              setSubSubtypes(deleteButton.parentNode, patched);
            });
          } else {
            textEntry.parentNode.removeChild(textEntry);
            deleteButton.parentNode.removeChild(deleteButton);
          }
        });

        textEntry.addEventListener('focusout', ()=>{
          if (textEntry.value !== '') {
            let subObj = {
              keys: block.keys
            };
            subObj.keys.keys[index] = textEntry.value;
            $http.patch(`/blocktypes/${block.id}`, subObj)
            .then(patchedData=>{
              let patched = patchedData.data;
              console.log(patched);
            });
          }
        });
      }

      function valuesEventListeners(deleteButton, textEntry, block, index) {

        deleteButton.addEventListener('click', ()=>{
          let subObj = {
            keys: block.keys
          };
          if (subObj.keys[subObj.keys.keys[0] + 'Values'].length !== index) {
            subObj.keys[subObj.keys.keys[0] + 'Values'].splice(index, 1);
            $http.patch(`/blocktypes/${block.id}`, subObj)
            .then(patchedData=>{
              let patched = patchedData.data;
              setSubtypes(deleteButton.parentNode, patched);

            });
          } else {
            textEntry.parentNode.removeChild(textEntry);
            deleteButton.parentNode.removeChild(deleteButton);
          }
        });

        textEntry.addEventListener('focusout', ()=>{
          if (textEntry.value !== '') {
            let subObj = {
              keys: block.keys
            };
            subObj.keys[subObj.keys.keys[0] + 'Values'][index] = textEntry.value;
            $http.patch(`/blocktypes/${block.id}`, subObj)
            .then(patchedData=>{
              let patched = patchedData.data;
              console.log(patched);
            });
          }
        });
      }

      function setSubSubtypes(element, block) {
        let delBut;
        let valueText;

        while (element.children[0]) {
          element.removeChild(element.children[0]);
        }
        if (block.keys.keys.length > 1) {
          for (let i = 1; i < block.keys.keys.length; i++) {
            delBut = document.createElement('button');
            element.appendChild(delBut);
            delBut.className = 'removal';
            delBut.innerHTML = 'DELETE';
            valueText = document.createElement('input');
            element.appendChild(valueText);
            valueText.type = 'text';
            valueText.className = "pure-input-1";
            valueText.value = block.keys.keys[i];
            subsubValuesEventListeners(delBut, valueText, block, i);
          }
        }
        delBut = document.createElement('button');
        element.appendChild(delBut);
        delBut.className = 'removal';
        delBut.innerHTML = 'DELETE';
        valueText = document.createElement('input');
        element.appendChild(valueText);
        valueText.type = 'text';
        valueText.className = "pure-input-1";
        subsubValuesEventListeners(delBut, valueText, block, block.keys.keys.length);
      }

      function setSubtypes(element, block) {
        let delBut;
        let valueText;

        while (element.children[0]) {
          element.removeChild(element.children[0]);
        }
        if (block.keys[block.keys.keys[0] + 'Values'].length > 0) {
          for (let i = 0; i < block.keys[block.keys.keys[0] + 'Values'].length; i++) {
            delBut = document.createElement('button');
            element.appendChild(delBut);
            delBut.className = 'removal';
            delBut.innerHTML = 'DELETE';
            valueText = document.createElement('input');
            element.appendChild(valueText);
            valueText.type = "text";
            valueText.className = "pure-input-1";
            valueText.value = block.keys[block.keys.keys[0] + 'Values'][i];
            valuesEventListeners(delBut, valueText, block, i);
          }
        }
        delBut = document.createElement('button');
        element.appendChild(delBut);
        delBut.className = 'removal';
        delBut.innerHTML = 'DELETE';
        valueText = document.createElement('input');
        element.appendChild(valueText);
        valueText.type = "text";
        valueText.className = "pure-input-1";
        valuesEventListeners(delBut, valueText, block, block.keys[block.keys.keys[0] + 'Values'].length);
      }

      function editBlock(blockId) {
        let reportForBlocktypes = document.getElementById('reportForBlocktypes');
        let userExistingBlockEditorDiv = document.getElementById('userExistingBlockEditorDiv');
        let blockEditDone = document.getElementById('blockEditDone');
        let existingBlockEditorTitle = document.getElementById('existingBlockEditorTitle');
        let userExistingBlocksEditorBar = document.getElementById('userExistingBlocksEditorBar');
        let existingBlocksEditorForm = document.getElementById('existingBlocksEditorForm');
        let existingBlocktypeEditorTypeDiv = document.getElementById('existingBlocktypeEditorTypeDiv');
        let existingBlocktypeEditorType = document.getElementById('existingBlocktypeEditorType');
        if (existingBlocktypeEditorType) {
          existingBlocktypeEditorType.parentNode.removeChild(existingBlocktypeEditorType);
          existingBlocktypeEditorType = document.createElement('input');
          existingBlocktypeEditorTypeDiv.appendChild(existingBlocktypeEditorType);
          existingBlocktypeEditorType.id = 'existingBlocktypeEditorType';
          existingBlocktypeEditorType.type = 'text';
          existingBlocktypeEditorType.className = "pure-input-1";
        }
        let existingBlocktypeColorDiv = document.getElementById('existingBlocktypeColorDiv');
        let existingBlocktypeEditorColor = document.getElementById('existingBlocktypeEditorColor');
        if (existingBlocktypeEditorColor) {
          existingBlocktypeEditorColor.parentNode.removeChild(existingBlocktypeEditorColor);
          existingBlocktypeEditorColor = document.createElement('input');
          existingBlocktypeColorDiv.appendChild(existingBlocktypeEditorColor);
          existingBlocktypeEditorColor.id = 'existingBlocktypeEditorColor';
          existingBlocktypeEditorColor.type = 'color';
          existingBlocktypeEditorColor.className = "pure-input-1";
        }
        let existingBlocktypesSubCheckDiv = document.getElementById('existingBlocktypesSubCheckDiv');
        let existingBlocktypeCheck = document.getElementById('existingBlocktypeCheck');
        if (existingBlocktypeCheck) {
          existingBlocktypeCheck.parentNode.removeChild(existingBlocktypeCheck);
          existingBlocktypeCheck = document.createElement('input');
          existingBlocktypesSubCheckDiv.appendChild(existingBlocktypeCheck);
          existingBlocktypeCheck.id = 'existingBlocktypeCheck';
          existingBlocktypeCheck.type = 'checkbox';
          existingBlocktypeCheck.className = "pure-input-1";
        }
        let existingBlockSubs = document.getElementById('existingBlockSubs');
        let existingSubFields = document.getElementById('existingSubFields');
        let existingAddNewDivAnchor = document.getElementById('existingAddNewDivAnchor');
        let existingBlockAddNewSubtype = document.getElementById('existingBlockAddNewSubtype');
        if (existingBlockAddNewSubtype) {
          existingBlockAddNewSubtype.parentNode.removeChild(existingBlockAddNewSubtype);
          existingBlockAddNewSubtype = document.createElement('button');
          existingAddNewDivAnchor.appendChild(existingBlockAddNewSubtype);
          existingBlockAddNewSubtype.id = 'existingBlockAddNewSubtype';
          existingBlockAddNewSubtype.innerHTML = 'add new';
        }
        let existingBlockSubSubtypesCheckboxAnchorDiv = document.getElementById('existingBlockSubSubtypesCheckboxAnchorDiv');
        let existingBlockSubSubtypes = document.getElementById('existingBlockSubSubtypes');
        if (existingBlockSubSubtypes) {
          existingBlockSubSubtypes.parentNode.removeChild(existingBlockSubSubtypes);
          existingBlockSubSubtypes = document.createElement('input');
          existingBlockSubSubtypesCheckboxAnchorDiv.appendChild(existingBlockSubSubtypes);
          existingBlockSubSubtypes.id = 'existingBlockSubSubtypes';
          existingBlockSubSubtypes.type = 'checkbox';
          existingBlockSubSubtypes.className = "pure-input-1";
        }
        let existingBlockSubSubs = document.getElementById('existingBlockSubSubs');
        let existingBlockAddNewSubtypeAnchorDiv = document.getElementById('existingBlockAddNewSubtypeAnchorDiv');
        let existingBlockAddNewSubSubtype = document.getElementById('existingBlockAddNewSubSubtype');
        if (existingBlockAddNewSubSubtype) {
          existingBlockAddNewSubSubtype.parentNode.removeChild(existingBlockAddNewSubSubtype);
          existingBlockAddNewSubSubtype = document.createElement('button');
          existingBlockAddNewSubtypeAnchorDiv.appendChild(existingBlockAddNewSubSubtype);
          existingBlockAddNewSubSubtype.id = 'existingBlockAddNewSubSubtype';
          existingBlockAddNewSubSubtype.innerHTML = 'add new';
        }
        let existingSubSubFields = document.getElementById('existingSubSubFields');



        $http.get(`/blocktypes/${blockId}`)
        .then(blockData=>{
          let block = blockData.data;
          existingBlockEditorTitle.innerHTML = block.type;
          userExistingBlocksEditorBar.setAttribute("style", "background: " + block.color + "; background-color: -webkit-linear-gradient(-135deg, " + block.color + ", #abdada); background: -o-linear-gradient(-135deg, " + block.color + ", #abdada); background: -moz-linear-gradient(-135deg, " + block.color + ", #abdada); background: linear-gradient(-135deg, " + block.color + ", #abdada);");
          existingBlocksEditorForm.setAttribute("style", "background: " + block.color + "; background-color: -webkit-linear-gradient(135deg, " + block.color + ", #abdada); background: -o-linear-gradient(135deg, " + block.color + ", #abdada); background: -moz-linear-gradient(135deg, " + block.color + ", #abdada); background: linear-gradient(135deg, " + block.color + ", #abdada);");
          existingBlockAddNewSubtype.setAttribute("style", "background: " + block.color + "; background-color: -webkit-linear-gradient(135deg, " + block.color + ", #ffffff); background: -o-linear-gradient(135deg, " + block.color + ", #ffffff); background: -moz-linear-gradient(135deg, " + block.color + ", #ffffff); background: linear-gradient(135deg, " + block.color + ", #ffffff);");
          existingBlockAddNewSubSubtype.setAttribute("style", "background: " + block.color + "; background-color: -webkit-linear-gradient(135deg, " + block.color + ", #ffffff); background: -o-linear-gradient(135deg, " + block.color + ", #ffffff); background: -moz-linear-gradient(135deg, " + block.color + ", #ffffff); background: linear-gradient(135deg, " + block.color + ", #ffffff);");
          existingBlocktypeEditorType.value = block.type;
          existingBlocktypeEditorColor.value = block.color;
          if (block.keys !== null) {
            if (block.keys.keys !== undefined) {
              existingBlocktypeCheck.checked = true;
              existingBlockSubs.setAttribute("style", "display: initial;");
              setSubtypes(existingSubFields, block);
              if (block.keys.keys.length > 1) {
                existingBlockSubSubtypes.checked = true;
                existingBlockSubSubs.setAttribute("style", "display: initial;");
                setSubSubtypes(existingSubSubFields, block);
              } else {
                existingBlockSubSubtypes.checked = false;
                existingBlockSubSubs.setAttribute("style", "display: none;");
              }
            } else {
              existingBlocktypeCheck.checked = false;
              existingBlockSubs.setAttribute("style", "display: none;");
            }
          } else {
            existingBlocktypeCheck.checked = false;
            existingBlockSubs.setAttribute("style", "display: none;");
          }

          existingBlockAddNewSubSubtype.addEventListener('click', ()=>{
            console.log('logic goes here');
            let delBut;
            let valueText;
            let noBlankFields = true;
            if (existingSubSubFields.children[0]) {
              for (let i = 0; i < existingSubSubFields.children.length; i++) {
                if (existingSubSubFields.children[i] && (existingSubSubFields.children[i].innerHTML !== 'DELETE')) {
                  if (existingSubSubFields.children[i].value === '') {
                    noBlankFields = false;
                  }
                }
              }
            }
            if (noBlankFields) {
              delBut = document.createElement('button');
              existingSubSubFields.appendChild(delBut);
              delBut.className = 'removal';
              delBut.innerHTML = 'DELETE';
              valueText = document.createElement('input');
              existingSubSubFields.appendChild(valueText);
              valueText.type = "text";
              valueText.className = "pure-input-1";
              subsubValuesEventListeners(delBut, valueText, block, block.keys.keys.length);
            }
          });

          existingBlockSubSubtypes.addEventListener('click', ()=>{
            if (existingBlockSubSubtypes.checked) {
              existingBlockSubSubs.setAttribute("style", "display: initial;");
              setSubSubtypes(existingSubSubFields, block);
            } else {
              existingBlockSubSubs.setAttribute("style", "display: none;");
            }
          });

          existingBlocktypeCheck.addEventListener('click', ()=>{
            if(existingBlocktypeCheck.checked) {
              existingBlockSubs.setAttribute("style", "display: initial;");
              if (block.keys === null) {
                let subObj = {
                  keys: {}
                };
                subObj.keys.keys = [];
                subObj.keys.keys[0] = block.type + 'Type';
                subObj.keys[subObj.keys.keys[0] + 'Values'] = [];
                $http.patch(`/blocktypes/${block.id}`, subObj)
                .then(patchedData=>{
                  let patched = patchedData.data;
                  block = patched;
                  setSubtypes(existingSubFields, block);
                });
              } else {
                setSubtypes(existingSubFields, block);
              }
            } else {
              existingBlockSubs.setAttribute("style", "display: none;");
            }
           });

           existingBlockAddNewSubtype.addEventListener('click', ()=>{
             let delBut;
             let valueText;
             let noBlankFields = true;
             if (existingSubFields.children[0]) {
               for (let i = 0; i < existingSubFields.children.length; i++) {
                 if (existingSubFields.children[i] && (existingSubFields.children[i].innerHTML !== 'DELETE')) {
                   if (existingSubFields.children[i].value === '') {
                     noBlankFields = false;
                   }
                 }
               }
             }
             if (noBlankFields) {
               delBut = document.createElement('button');
               existingSubFields.appendChild(delBut);
               delBut.className = 'removal';
               delBut.innerHTML = 'DELETE';
               valueText = document.createElement('input');
               existingSubFields.appendChild(valueText);
               valueText.type = "text";
               valueText.className = "pure-input-1";
               valuesEventListeners(delBut, valueText, block, block.keys[block.keys.keys[0] + 'Values'].length);
             }
           });

          existingBlocktypeEditorColor.addEventListener('change', ()=>{
            let subObj = {
              color: existingBlocktypeEditorColor.value
            };
            userExistingBlocksEditorBar.setAttribute("style", "background: " + existingBlocktypeEditorColor.value + "; background-color: -webkit-linear-gradient(-135deg, " + existingBlocktypeEditorColor.value + ", #abdada); background: -o-linear-gradient(-135deg, " + existingBlocktypeEditorColor.value + ", #abdada); background: -moz-linear-gradient(-135deg, " + existingBlocktypeEditorColor.value + ", #abdada); background: linear-gradient(-135deg, " + existingBlocktypeEditorColor.value + ", #abdada);");
            existingBlocksEditorForm.setAttribute("style", "background: " + existingBlocktypeEditorColor.value + "; background-color: -webkit-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #abdada); background: -o-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #abdada); background: -moz-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #abdada); background: linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #abdada);");
            existingBlockAddNewSubtype.setAttribute("style", "background: " + existingBlocktypeEditorColor.value + "; background-color: -webkit-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #ffffff); background: -o-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #ffffff); background: -moz-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #ffffff); background: linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #ffffff);");
            existingBlockAddNewSubSubtype.setAttribute("style", "background: " + existingBlocktypeEditorColor.value + "; background-color: -webkit-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #ffffff); background: -o-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #ffffff); background: -moz-linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #ffffff); background: linear-gradient(135deg, " + existingBlocktypeEditorColor.value + ", #ffffff);");
            $http.patch(`/blocktypes/${block.id}`, subObj)
            .then(patchedData=>{
              let patched = patchedData;
              block.color = patched.color;
            });
          });
          existingBlocktypeEditorType.addEventListener('focusout', ()=>{
            let subObj = {
              type: existingBlocktypeEditorType.value
            };
            if (existingBlocktypeEditorType.value !== '') {
              existingBlockEditorTitle.innerHTML = existingBlocktypeEditorType.value;
              $http.patch(`/blocktypes/${block.id}`, subObj)
              .then(patchedData=>{
                let patched = patchedData.data;
                block.type = patched.type;
                console.log(patched);
              });
            }
          });
        });

        userExistingBlockEditorDiv.setAttribute("style", "display: initial;");
        reportForBlocktypes.setAttribute("style", "display: none;");
        blockEditDone.setAttribute("style", "visibility: hidden;");
      }

      function photUploader() {
        let photoUploadFormDiv = document.getElementById('photoUploadFormDiv');
        let dashboard = document.getElementById('dashboard');
        let userProfilePhotoForm = document.getElementById('userProfilePhotoForm');
        let photoUploaderButtonsField = document.getElementById('photoUploaderButtonsField');
        let photoSubmit = document.getElementById('photoSubmit');
        if (photoSubmit) {
          photoSubmit.parentNode.removeChild(photoSubmit);
          photoSubmit = document.createElement('a');
          photoUploaderButtonsField.appendChild(photoSubmit);
          photoSubmit.id = 'photoSubmit';
          photoSubmit.className = 'btn';
          photoSubmit.setAttribute("style", "cursor: pointer;");
          photoSubmit.innerHTML = 'submit';
          photoSubmit.type = 'submit';
        }
        let photoCancel = document.getElementById('photoCancel');
        if (photoCancel) {
          photoCancel.parentNode.removeChild(photoCancel);
          photoCancel = document.createElement('a');
          photoUploaderButtonsField.appendChild(photoCancel);
          photoCancel.id = 'photoCancel';
          photoCancel.className = 'btn';
          photoCancel.setAttribute("style", "cursor: pointer;");
          photoCancel.innerHTML = 'cancel';
        }
        let userPhotoInput = document.getElementById('userPhotoInput');


        photoUploadFormDiv.setAttribute("style", "visibility: visible; z-index: 2;");
        dashboard.setAttribute("style", "opacity: 0.3;");
        userProfilePhotoForm.setAttribute("style", "visibility: hidden;");

        photoSubmit.addEventListener('click', ()=>{

          console.log(userPhotoInput.files[0]);
          console.log(userPhotoInput);
          // $http.post('/photo_upload', subObj)
          // .then(data=>{
          //   console.log(data.data);
          // });
        });

        photoCancel.addEventListener('click', ()=>{
          photoUploadFormDiv.setAttribute("style", "visibility: hidden; z-index: -2;");
          dashboard.setAttribute("style", "opacity: 1;");
          userProfilePhotoForm.setAttribute("style", "visibility: visible;");
        });
      }

      function logout() {
        $http.get(`/users/${currentUserId}`)
        .then(userData=>{
          let user = userData.data;
          document.cookie = 'h168userId' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          document.cookie = user.security.key + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

          let res = document.cookie;
          let multiple = res.split(';');
          let key;
          for (let i = 0; i < multiple.length; i++) {
            key = multiple[i].split('=');
            document.cookie = key[0] + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
          }

          $http.post('/users/logout', {})
          .then(()=>{
            profileClock = false;
            $state.go('landing');
          });
        });
      }

      function gotoWeek() {
        profileClock = false;
        let navDay = new Date();
        if (navDay.getDay() !== 1) {
          while(navDay.getDay() !==1) {
            navDay.setDate(navDay.getDate()-1);
          }
        }
        let idString = 'user=' + currentUserId + '&weekof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        dayClock = false;
        $state.go('weekview', {id: idString});
      }

      function userPhotoEditDone() {
        let userProfilePhotoDiv = document.getElementById('userProfilePhotoDiv');
        let changeProfilePhoto = document.getElementById('changeProfilePhoto');
        let userProfileDone = document.getElementById('userProfileDone');
        let changePassword = document.getElementById('changePassword');
        let changeEmail = document.getElementById('changeEmail');
        let changeFriends = document.getElementById('changeFriends');
        let newPhotoURL = document.getElementById('newPhotoURL');
        let photoReference = document.getElementById('photoReference');
        let profilePhoto = document.getElementById('profilePhoto');

        userProfilePhotoDiv.setAttribute("style", "display: none;");
        changeProfilePhoto.setAttribute("style", "visibility: visible;");
        userProfileDone.setAttribute("style", "visibility: visible;");
        changePassword.setAttribute("style", "visibility: visible;");
        changeEmail.setAttribute("style", "visibility: visible;");
        changeFriends.setAttribute("style", "visibility: visible;");
        newPhotoURL.value = '';
        $http.get(`/users/${currentUserId}`)
        .then((userData=>{
          let user = userData.data;
          if (user.user_avatar_url !== '') {
            photoReference.src = user.user_avatar_url;
            profilePhoto.src = user.user_avatar_url;
          }
        }));
      }

      function userPhotoEditor() {
        let userProfilePhotoDiv = document.getElementById('userProfilePhotoDiv');
        let changeProfilePhoto = document.getElementById('changeProfilePhoto');
        let userProfileDone = document.getElementById('userProfileDone');
        let changePassword = document.getElementById('changePassword');
        let changeEmail = document.getElementById('changeEmail');
        let changeFriends = document.getElementById('changeFriends');
        let verifyOrSubmit = document.getElementById('verifyOrSubmit');
        let verifyPhotoURL = document.getElementById('verifyPhotoURL');
        if (verifyPhotoURL) {
          verifyPhotoURL.parentNode.removeChild(verifyPhotoURL);
          verifyPhotoURL = document.createElement('a');
          verifyOrSubmit.appendChild(verifyPhotoURL);
          verifyPhotoURL.id = 'verifyPhotoURL';
          verifyPhotoURL.className = 'btn';
          verifyPhotoURL.innerHTML = 'verify';
          verifyPhotoURL.setAttribute("style", "cursor: pointer;");
        }
        let updatePhotoURL = document.getElementById('updatePhotoURL');
        if (updatePhotoURL) {
          updatePhotoURL.parentNode.removeChild(updatePhotoURL);
          updatePhotoURL = document.createElement('a');
          verifyOrSubmit.appendChild(updatePhotoURL);
          updatePhotoURL.id = 'updatePhotoURL';
          updatePhotoURL.className = 'btn';
          updatePhotoURL.innerHTML = 'submit';
          updatePhotoURL.setAttribute("style", "cursor: pointer;");
        }
        let newPhotoURL = document.getElementById('newPhotoURL');
        let photoReference = document.getElementById('photoReference');
        let profilePhoto = document.getElementById('profilePhoto');


        userProfilePhotoDiv.setAttribute("style", "display: initial;");
        changeProfilePhoto.setAttribute("style", "visibility: hidden;");
        userProfileDone.setAttribute("style", "visibility: hidden;");
        changePassword.setAttribute("style", "visibility: hidden;");
        changeEmail.setAttribute("style", "visibility: hidden;");
        changeFriends.setAttribute("style", "visibility: hidden;");

        verifyPhotoURL.addEventListener('click', ()=>{
          if (newPhotoURL.value !== '') {
            photoReference.src = newPhotoURL.value;
          }
        });
        updatePhotoURL.addEventListener('click', ()=>{
          if (newPhotoURL.value !== '') {
            let subObj = {
              user_avatar_url: newPhotoURL.value
            };
            console.log(subObj);
            $http.patch(`/users/${currentUserId}`, subObj)
            .then(userData=>{
              let user = userData.data;
              console.log(user);
              if (user.user_avatar_url !== '') {
                photoReference.src = user.user_avatar_url;
                profilePhoto.src = user.user_avatar_url;
              }
            });
          }
        });
      }

      function blocktypeEditor() {
        let blocktypeManager = document.getElementById('blocktypeManager');
        let blocktypeEditDiv = document.getElementById('blocktypeEditDiv');
        let blocktypeZone = document.getElementById('blocktypeZone');


        blocktypeManager.setAttribute("style", "visibility: hidden;");
        blocktypeEditDiv.setAttribute("style", "display: initial;");
        blocktypeZone.setAttribute("style", "opacity: 0.4;");
      }

      function profileEditor() {
        let userEditor = document.getElementById('userEditor');
        let userEditorDiv = document.getElementById('userEditorDiv');
        let adminAccess = document.getElementById('adminAccess');
        let profileZone = document.getElementById('profileZone');
        let weekSubsEntry = document.getElementById('weekSubsEntry');
        let updateUserName = document.getElementById('updateUserName');
        let userNameInput = document.getElementById('userNameInput');
        if (updateUserName) {
          updateUserName.parentNode.removeChild(updateUserName);
          updateUserName = document.createElement('a');
          weekSubsEntry.appendChild(updateUserName);
          updateUserName.id = 'updateUserName';
          updateUserName.className = "btn";
          updateUserName.innerHTML = 'submit';
          updateUserName.setAttribute("style", "float: left; margin-left: 2.2em; cursor: pointer;");
        }

        $http.get(`/users/${currentUserId}`)
        .then(userData=>{
          let user = userData.data;
          if (user.is_admin) {
            adminAccess.setAttribute("style", "visibility: visible;");
          } else {
            adminAccess.setAttribute("style", "visibility: hidden;");
          }

          updateUserName.addEventListener('click', ()=>{
            if (userNameInput.value !== '') {
              $http.patch(`/users/${currentUserId}`, {name: userNameInput.value})
              .then((userData)=>{
                let user = userData.data;
                updateGreetingStrip(user);
              });
            }
          });
        });

        userEditor.setAttribute("style", "visibility: hidden;");
        userEditorDiv.setAttribute("style", "display: initial;");
        profileZone.setAttribute("style", "opacity: 0.4;");


      }

      function closeBlocktypeEditor() {
        let blocktypeManager = document.getElementById('blocktypeManager');
        let blocktypeEditDiv = document.getElementById('blocktypeEditDiv');
        let blocktypeZone = document.getElementById('blocktypeZone');


        blocktypeManager.setAttribute("style", "visibility: visible;");
        blocktypeEditDiv.setAttribute("style", "display: none;");
        blocktypeZone.setAttribute("style", "opacity: 1;");
      }

      function closeUserEditor() {
        let userEditor = document.getElementById('userEditor');
        let userEditorDiv = document.getElementById('userEditorDiv');
        let userNameInput = document.getElementById('userNameInput');
        let profileZone = document.getElementById('profileZone');

        userEditor.setAttribute("style", "visibility: visible;");
        userEditorDiv.setAttribute("style", "display: none;");
        userNameInput.value = '';
        profileZone.setAttribute("style", "opacity: 1;");
      }

      function gotoDayview() {
        let navDay = new Date();
        navDay.setDate(navDay.getDate());
        let idString = 'user=' + currentUserId + '&dayof=' + navDay.getFullYear() + '-' + (navDay.getMonth() + 1) + '-' + navDay.getDate();
        //myTimer = undefined;
        //weekClock = false;
        $state.go('dayview', {id: idString});
      }

      function gotoMonthView() {
        let navDay = new Date();
        profileClock = false;
        let increment = 0;
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
        $state.go('monthview', {id: idString});
      }

      function setUserBlockTypes() {
        $http.get(`/blocktypesbyuser/${currentUserId}`)
        .then(userBlocksData=>{
          let userBlocks = userBlocksData.data;

          vm.userblocktypes = userBlocks.sort((a, b)=>{
            if (a.type.toLowerCase() < b.type.toLowerCase()) {
              return -1;
            } else if (a.type.toLowerCase() > b.type.toLowerCase()) {
              return 1;
            } else {
              return 0;
            }
          });


        });
      }

      function updateGreetingStrip(user) {
        let weekday = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let greetingsUser = document.getElementById('greetingsUser');
        let greetingsDate = document.getElementById('greetingsDate');
        let today = new Date();


        greetingsUser.innerHTML = "Hello, " + user.name + ".";
        greetingsDate.innerHTML = "Today is: " + weekday[today.getDay()] + " " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();


      }

      function getProfileImageAndName(userMessage, index) {
        $http.get(`/users/${userMessage.user_id}`)
        .then(messageUserData=>{
          let messageUser = messageUserData.data;
          vm.userMessages[index].senderImg = messageUser.user_avatar_url;
          vm.userMessages[index].senderName = messageUser.name;
          if (userMessage.public) {
            vm.userMessages[index].recipientName = "All Friends";
          } else {
            $http.get(`/users/${userMessage.to_user_id}`)
            .then(friendData=>{
              let friend = friendData.data;
              vm.userMessages[index].recipientName = friend.name;
            });
          }
        });
      }

      function timeDate(timeDate) {
        let check = new Date(timeDate);
        return(check.toLocaleTimeString('en-GB'))
      }

      function pullCommenterUserData(comment, commentIndex, messageIndex) {
        $http.get(`/users/${comment.user_id}`)
        .then(commenterData=>{
          let commenter = commenterData.data;
          vm.userMessages[messageIndex].comments[commentIndex].commenterImg = commenter.user_avatar_url;
          vm.userMessages[messageIndex].comments[commentIndex].commenterName = commenter.name;
        });
      }

      function manageCommentEditButtons(comment, i, index) {
        setTimeout(()=>{
          let editDeleteDiv = document.getElementById('editDeleteUserComments' + comment.id.toString());
          let editButton = document.getElementById('commentEditButton' + comment.id.toString());
          let deleteButton = document.getElementById('commendDeleteButton' + comment.id.toString());

          if ((parseInt(comment.user_id) === parseInt(currentUserId)) || (parseInt(vm.userMessages[index].user_id) === parseInt(currentUserId))) {
            editDeleteDiv.setAttribute("style", "display: initial;");
            if (parseInt(comment.user_id) === parseInt(currentUserId)) {
              editButton.setAttribute("style", "visibility: visible;");
            } else {
              editButton.setAttribute("style", "visibility: hidden;");
            }
          } else {
            editDeleteDiv.setAttribute("style", "display: none;");
          }
        }, 50);
      }

      function retrieveComments(message, index) {
        let createTime;
        let updateTime;
        $http.get('/comments')
        .then(allCommentsData=>{
          let allComments = allCommentsData.data;
          let messageComments = allComments.filter(msg=>{
            return(msg.message_id === message.id);
          });
          if (messageComments.length > 0) {
            if (messageComments.length === 1) {
              vm.userMessages[index].commentsLength = '1 comment';
            } else {
              vm.userMessages[index].commentsLength = messageComments.length + ' comments';
            }
            messageComments = messageComments.sort((a, b)=>{
              return((new Date(a.created_at)) - (new Date(b.created_at)));
            });
            vm.userMessages[index].comments = [];
            for (let i = 0; i < messageComments.length; i++) {
              createTime = new Date(messageComments[i].created_at);
              updateTime = new Date(messageComments[i].updated_at);
              vm.userMessages[index].comments[i] = {};
              vm.userMessages[index].comments[i].id = messageComments[i].id;
              vm.userMessages[index].comments[i].comment = messageComments[i].comment;

              if (updateTime.getTime() < (createTime.getTime() + 15001)) {
                vm.userMessages[index].comments[i].cleanDate = cleanDateHoliday(messageComments[i].created_at) + ' - ' + timeDate(messageComments[i].created_at);
              } else {
                vm.userMessages[index].comments[i].cleanDate = cleanDateHoliday(messageComments[i].created_at) + ' - ' + timeDate(messageComments[i].created_at) + ' - - - updated at ' + cleanDateHoliday(messageComments[i].updated_at) + ' - ' + timeDate(messageComments[i].updated_at);
              }
              // vm.userMessages[index].comments[i].cleanDate = cleanDateHoliday(messageComments[i].created_at) + ' - ' + timeDate(messageComments[i].updated_at);
              pullCommenterUserData(messageComments[i], i, index);
              manageCommentEditButtons(messageComments[i], i, index);
            }
          } else {
            vm.userMessages[index].commentsLength = '0 comments';
          }
        });
      }

      function setMessageCRUDStates() {
        setTimeout(()=>{
          let editDeleteDiv;
          for (let i = 0; i < vm.userMessages.length; i++) {
            if (parseInt(vm.userMessages[i].user_id) === parseInt(currentUserId)) {
              editDeleteDiv = document.getElementById('editDeleteDiv' + vm.userMessages[i].id);
              editDeleteDiv.setAttribute("style", "display: initial;");
            }
          }
        }, 100);
      }

      function timeblockInviteUserData(appointment, index) {
        $http.get(`/users/${appointment.user_id}`)
        .then(inviterData=>{
          let inviter = inviterData.data;
          $http.get(`/users/${appointment.share_associate_id}`)
          .then(inviteeData=>{
            let invitee = inviteeData.data;
            console.log(inviter);
            console.log(invitee);
            if (inviter.id === parseInt(currentUserId)) {
              vm.activeTimeblockShares[index].inviterImg = invitee.user_avatar_url;
            } else {
              vm.activeTimeblockShares[index].inviterImg = inviter.user_avatar_url;
            }
            vm.activeTimeblockShares[index].inviterName = inviter.name;
            vm.activeTimeblockShares[index].inviteeName = invitee.name;
          })
        });
      }

      function inviteOrInvitee(appointment, index) {
        setTimeout(()=>{
          if (appointment.user_id === parseInt(currentUserId)) {
            document.getElementById("thisIsTimeblockShareDeleteDiv" + appointment.id).setAttribute("style", "display: initial;");
          } else {
            document.getElementById("thisIsTimeblockShareDeleteDiv" + appointment.id).setAttribute("style", "display: none;");
          }
          if (appointment.share_associate_id === parseInt(currentUserId)) {
            document.getElementById('timeblockInviter' + appointment.id.toString()).setAttribute("style", "display: initial;");
            document.getElementById('timeblockInvitee' + appointment.id.toString()).setAttribute("style", "display: none;");
            // document.getElementById('acceptDecline' + appointment.id.toString()).setAttribute("style", "display: initial; margin-left: 4vmin;");
          } else {
            document.getElementById('timeblockInvitee' + appointment.id.toString()).setAttribute("style", "display: initial;");
            document.getElementById('timeblockInviter' + appointment.id.toString()).setAttribute("style", "display: none;");
            document.getElementById('acceptDecline' + appointment.id.toString()).setAttribute("style", "display: none;");
          }
          if (appointment.accepted) {
            document.getElementById('acceptDecline' + appointment.id.toString()).setAttribute("style", "display: none;");
            let element;
            let acceptedAppointment = document.getElementById('acceptedAppointment' + appointment.id.toString());
            acceptedAppointment.setAttribute("style", "display: initial;");
            document.getElementById('declineAppointment' + appointment.id.toString()).setAttribute("style", "display: none;");
            $http.get(`/users/${appointment.share_associate_id}`)
            .then(inviteeData=>{
              let invitee = inviteeData.data;
              while (acceptedAppointment.firstChild) {
                acceptedAppointment.removeChild(acceptedAppointment.firstChild);
              }
              acceptedAppointment.setAttribute("style", "padding: 2vmin; margin-right: 2vmin; float: left;");
              element = document.createElement('img');
              acceptedAppointment.appendChild(element);
              element.src = invitee.user_avatar_url;
              element = document.createElement('h3');
              acceptedAppointment.appendChild(element);
              element.innerHTML = invitee.name  + ' has accepted this invitation.';
              element.setAttribute("style", "float: left; margin-left: 2vmin;");
            });
          } else {
            // document.getElementById('acceptDecline' + appointment.id.toString()).setAttribute("style", "display: initial;");
            // document.getElementById('acceptDecline' + appointment.id.toString()).className = 'timeBlockAcceptDenyButtons';
            document.getElementById('acceptedAppointment' + appointment.id.toString()).setAttribute("style", "display: none;");
            if (appointment.responded) {
              let elements;
              let declineAppointment = document.getElementById('declineAppointment' + appointment.id.toString());
              declineAppointment.setAttribute("style", "display: initial;");
              document.getElementById('acceptDecline' + appointment.id.toString()).setAttribute("style", "display: none;");
              $http.get(`/users/${appointment.share_associate_id}`)
              .then(inviteeData=>{
                let invitee = inviteeData.data;
                while (declineAppointment.firstChild) {
                  declineAppointment.removeChild(declineAppointment.firstChild);
                }
                declineAppointment.setAttribute("style", "padding: 2vmin; margin-right: 2vmin; float: left;");
                elements = document.createElement('img');
                declineAppointment.appendChild(elements);
                elements.src = invitee.user_avatar_url;
                elements = document.createElement('h3');
                declineAppointment.appendChild(elements);
                elements.innerHTML = invitee.name  + ' has declined this invitation.';
                elements.setAttribute("style", "float: left; margin-left: 2vmin;");
              });
            } else {
              document.getElementById('declineAppointment' + appointment.id.toString()).setAttribute("style", "display: none;");
            }
          }
        }, 50);
      }

      function overlapExist (block1, block2) {
        let overlap = false;
        let block1Start = new Date(block1.start_time);
        let block1End = new Date(block1.end_time);
        let block2Start = new Date(block2.start_time);
        let block2End = new Date(block2.end_time);

        if (block1Start.getHours() < block2Start.getHours()) {
          if (block1End.getHours() < block2Start.getHours()) {
            overlap = false;
          } else if (block1End.getHours() === block2Start.getHours()) {
            if (block1End.getMinutes() < block2Start.getMinutes()) {
              overlap = false;
            } else if (block1End.getMinutes() === block2Start.getMinutes()) {
              overlap = false;
            } else if (block1End.getMinutes() > block2Start.getMinutes()) {
              overlap = true;
            }
          } else if (block1End.getHours() > block2Start.getHours()) {
            overlap = true;
          }

        } else if (block1Start.getHours() === block2Start.getHours()) {
          if (block1Start.getMinutes() < block2Start.getMinutes()) {
            if ((block2End.getHours() === block2Start.getHours()) && (block2.end.getMinutes() === block2Start.getMinutes())) {
              overlap = false;
            } else {
              overlap = true;
            }
          } else if (block1Start.getMinutes() === block2Start.getMinutes()) {
            overlap = true;
          } else if (block1Start.getMinutes() > block2Start.getMinutes()) {
            overlap = true;
          }

        } else if (block1Start.getHours() > block2Start.getHours()) {
          if (block1Start.getHours() < block2End.getHours()) {
            overlap = true;
          } else if (block1Start.getHours() === block2End.getHours()) {
            if (block1Start.getMinutes() < block2End.getMinutes()) {
              overlap = true;
            } else if (block1Start.getMinutes() === block2End.getMinutes()) {
              overlap = false;
            } else if (block1Start.getMinutes() > block2End.getMinutes()) {
              overlap = false;
            }
          } else if (block1Start.getHours() > block2Start.getHours()) {
            if (block1End.getHours() > block2Start.getHours()) {
              overlap = true;
            } else if (block1End.getHours() === block2Start.getHours()) {
              if (block1End.getMinutes() < block2Start.getMinutes()) {
                overlap = false;
              } else if (block1End.getMinutes() === block2Start.getMinutes()) {
                overlap = false;
              } else if (block1End.getMinutes() > block2Start.getMinutes()) {
                overlap = true;
              }
            } else if (block1End.getHours() > block2Start.getHours()) {
              overlap = true;
            }

          }
        }

        return(overlap);
      }

      function determinConflictStatus(appointment, index, timeblock) {
        let checkStart = new Date(timeblock.start_time);
        let checkEnd = new Date(timeblock.end_time);
        let checkDate;
        let conflict = false;
        $http.get(`/timeblocksbyuser/${currentUserId}`)
        .then(allUserBlocksData=>{
          let allUserBlocks = allUserBlocksData.data;
          let dayOfUserBlocks = allUserBlocks.filter(entry=>{
            checkDate = new Date(entry.start_time);
            return((checkDate.getFullYear() === checkStart.getFullYear()) && (checkDate.getMonth() === checkStart.getMonth()) && (checkDate.getDate() == checkStart.getDate()));
          });
          console.log(dayOfUserBlocks);
          if (dayOfUserBlocks.length < 1) {
            vm.activeTimeblockShares[index].conflictStatus = 'No conflicts with your current schedule.';
          } else {
            for (let i = 0; i < dayOfUserBlocks.length; i++) {
              if (overlapExist(timeblock, dayOfUserBlocks[i])) {
                conflict = true;
              }
            }
            if (conflict) {
              vm.activeTimeblockShares[index].conflictStatus = 'Currently conflicts with appointment(s) in your schedule.';
            } else {
              vm.activeTimeblockShares[index].conflictStatus = 'No conflicts with your current schedule.';
            }
          }
        });
      }

      function timeblockShareAppointmentData (appointment, index) {
        $http.get(`/timeblocks/${appointment.timeblock_id}`)
        .then(timeblockData=>{
          let userTimeblock = timeblockData.data;
          let start = new Date(userTimeblock.start_time);
          let end = new Date(userTimeblock.end_time);
          $http.get(`/blocktypes/${userTimeblock.block_type}`)
          .then(blocktypeData=>{
            let blocktype = blocktypeData.data;
            vm.activeTimeblockShares[index].typeName = blocktype.type;
            vm.activeTimeblockShares[index].startTime = userTimeblock.start_time.slice(11, 16) + ' - ' + cleanDateHoliday(userTimeblock.start_time);
            vm.activeTimeblockShares[index].endTime = userTimeblock.end_time.slice(11, 16) + ' - ' + cleanDateHoliday(userTimeblock.end_time);
            if (userTimeblock.location !== '') {
              vm.activeTimeblockShares[index].location = 'Location: ' + userTimeblock.location;
            }
            if (userTimeblock.user_notes !== '') {
              vm.activeTimeblockShares[index].blockNotes = 'Notes: ' +  userTimeblock.user_notes;
            }
            if (userTimeblock.block_data !== null) {
              vm.activeTimeblockShares[index].blockType = [];
              vm.activeTimeblockShares[index].blockType[0] = {};
              vm.activeTimeblockShares[index].blockType[0].key = blocktype.type + ' type:';
              vm.activeTimeblockShares[index].blockType[0].val = blocktype.keys.meetingTypeValues[userTimeblock.block_data[blocktype.keys.keys[0]]]
              if (blocktype.keys.keys.length > 1) {
                for (let i = 1; i < blocktype.keys.keys.length; i++) {
                  vm.activeTimeblockShares[index].blockType[i] = {};
                  vm.activeTimeblockShares[index].blockType[i].key = blocktype.keys.keys[i];
                  vm.activeTimeblockShares[index].blockType[i].val = '';
                  for (let j = 0; j < userTimeblock.block_data[blocktype.keys.keys[i]].length; j++) {
                    if (j > 0) {
                      vm.activeTimeblockShares[index].blockType[i].val += ',';
                    }
                    vm.activeTimeblockShares[index].blockType[i].val += ' ' +  userTimeblock.block_data[blocktype.keys.keys[i]][j]
                  }
                }
              }
            }
            determinConflictStatus(appointment, index, userTimeblock);
          });
        });
      }

      function getUserInfosForAppointmentComment(appointment, index, comment, commentIndex) {
        $http.get(`/users/${comment.user_id}`)
        .then(commenterData=>{
          let commenter = commenterData.data;
          vm.activeTimeblockShares[index].comments[commentIndex].commenterImg = commenter.user_avatar_url;
          vm.activeTimeblockShares[index].comments[commentIndex].commenterName = commenter.name;
        });
      }

      function grabTimeblockShareComments(appointment, index) {

        $http.get('timeblock_share_comments')
        .then(sharesData=>{
          let shares = sharesData.data;
          let appointmentComments = shares.filter(share=>{
            return(share.timeblock_share === appointment.id);
          });
          if (appointmentComments.length > 0) {
            vm.activeTimeblockShares[index].comments = [];
            let aDate;
            let bDate;
            let check;
            let createDate;
            let updateDate;
            appointmentComments = appointmentComments.sort((a, b)=>{
              aDate = new Date(a.updated_at);
              bDate = new Date(b.updated_at);
              return(aDate - bDate);
            });
            for (let i = 0; i < appointmentComments.length; i++) {
              check = new Date(appointmentComments[i].updated_at);
              createDate = new Date(appointmentComments[i].created_at);
              updateDate = new Date(appointmentComments[i].updated_at);
              vm.activeTimeblockShares[index].comments[i] = {};
              vm.activeTimeblockShares[index].comments[i].comment = appointmentComments[i].comment;
              vm.activeTimeblockShares[index].comments[i].id = appointmentComments[i].id;
              getUserInfosForAppointmentComment(appointment, index, appointmentComments[i], i);
              if (updateDate.getTime() < (createDate.getTime() + 150001)) {
                vm.activeTimeblockShares[index].comments[i].cleanDate = cleanDateHoliday(appointmentComments[i].created_at) + ' at ' +  createDate.toLocaleTimeString('en-GB');
              } else {
                 vm.activeTimeblockShares[index].comments[i].cleanDate = cleanDateHoliday(appointmentComments[i].updated_at) + ' at ' +  check.toLocaleTimeString('en-GB') + ' - updated - ' + cleanDateHoliday(appointmentComments[i].updated_at) + ' at ' + updateDate.toLocaleTimeString('en-GB');
               }
            }
            setTimeout(()=>{
              let appointmentTime;
              if (appointmentComments.length > 0) {
                for (let j = 0; j < appointmentComments.length; j++) {
                  if (parseInt(appointmentComments[j].user_id) === parseInt(currentUserId)) {
                    if (vm.activeTimeblockShares[index] !== undefined) {
                      document.getElementById("editDeleteTimeblockShareCommentDiv" + vm.activeTimeblockShares[index].comments[j].id).setAttribute("style", "display: initial;");
                    }
                  }
                  if (vm.activeTimeblockShares[index] !== undefined) {
                    document.getElementById("thisIsTheTimeblockShareCommentEditor" + vm.activeTimeblockShares[index].comments[j].id).setAttribute("style", "display: none;");
                  }
                }
              }
            }, 250);
          }
        });
      }

      function pruneOutdatedAppointments(index) {

        let now = new Date();
        console.log(vm.activeTimeblockShares[index]);


        $http.get(`/timeblocks/${vm.activeTimeblockShares[index].timeblock_id}`)
        .then(timeblockData=>{
          let timeblock = timeblockData.data;
          let appointmentEnded = new Date(timeblock.end_time);
          if (now.getTime() > appointmentEnded.getTime()) {
            // vm.activeTimeblockShares.splice(index, 1);
            pastAppointmentIds.push(index);
            // console.log(pastAppointmentIds);
          }
        });
      }

      function retrieveUserAppointments() {
        let check;
        pastAppointmentIds = [];
        $http.get('/timeblock_shares')
        .then(allTimeblockSharesData=>{
          let allTimeblockShares = allTimeblockSharesData.data;
          let userAppointments = allTimeblockShares.filter(apt=>{
            return((apt.user_id === parseInt(currentUserId)) || (apt.share_associate_id === parseInt(currentUserId)));
          });
          if (userAppointments.length > 0) {
            vm.activeTimeblockShares = [];
            for (let i = 0; i < userAppointments.length; i++) {
              check = new Date(userAppointments[i].updated_at);
              vm.activeTimeblockShares[i] = {};
              vm.activeTimeblockShares[i].id = userAppointments[i].id;
              vm.activeTimeblockShares[i].timeblock_id = userAppointments[i].timeblock_id;
              timeblockInviteUserData(userAppointments[i], i);
              vm.activeTimeblockShares[i].cleanDate = cleanDateHoliday(userAppointments[i].updated_at) + ' at ' +  check.toLocaleTimeString('en-GB');
              inviteOrInvitee(userAppointments[i], i);
              timeblockShareAppointmentData(userAppointments[i], i);
              grabTimeblockShareComments(userAppointments[i], i);
            }
            setTimeout(()=>{
              if (vm.activeTimeblockShares.length > 0) {
                for (let j = 0; j < vm.activeTimeblockShares.length; j++) {
                  pruneOutdatedAppointments(j);
                  if (vm.activeTimeblockShares[j].comments !== undefined) {
                    if (vm.activeTimeblockShares[j].comments.length === 1) {
                      vm.activeTimeblockShares[j].commentsLength = '1 comment';
                    } else {
                      vm.activeTimeblockShares[j].commentsLength = vm.activeTimeblockShares[j].comments.length + ' comments';
                    }
                  } else {
                    vm.activeTimeblockShares[j].commentsLength = '0 comments';
                  }
                }
              }
              setTimeout(()=>{

                if (pastAppointmentIds.length > 0) {
                  for (let k = pastAppointmentIds.length - 1; k !== -1; k--) {
                    vm.activeTimeblockShares.splice(pastAppointmentIds[k], 1);

                  }
                }
              }, (vm.activeTimeblockShares.length * 150));

            }, 75);

          }
        });
      }

      function gatherHolidayInviteeData(userId, index) {
        $http.get(`/users/${userId}`)
        .then(inviteeData=>{
          let invitee = inviteeData.data;
          vm.activeHolidayShares[index].inviteeImg = invitee.user_avatar_url;
          vm.activeHolidayShares[index].invitee = invitee.name;
        });
      }

      function gatherHolidayInviterData(userId, index) {
        $http.get(`/users/${userId}`)
        .then(inUserData=>{
          let inUser = inUserData.data;
          vm.activeHolidayShares[index].inviterImg = inUser.user_avatar_url;
          vm.activeHolidayShares[index].inviter = inUser.name;

        });
      }

      function obtainUserDataHolidayShareComment(holidayShareIndex, commentIndex, comment) {
        $http.get(`/users/${comment.user_id}`)
        .then(userData=>{
          let user = userData.data;
          vm.activeHolidayShares[holidayShareIndex].comments[commentIndex].user_avatar_url = user.user_avatar_url;
          vm.activeHolidayShares[holidayShareIndex].comments[commentIndex].name = user.name;
        });
      }

      function gatherHolidayShareComments(index, holidayShare) {
        let checkDate;
        let upDate;

        $http.get('/holiday_share_comments')
        .then(holidayCommentData=>{
          let holidayComments = holidayCommentData.data;
          let comments = holidayComments.filter(entry=>{
            return(parseInt(entry.holiday_share) === parseInt(holidayShare.id));
          });
          if (comments.length > 0) {
            vm.activeHolidayShares[index].comments = [];
            comments = comments.sort((a, b)=>{

              return((new Date(a.created_at)) - (new Date(b.created_at)));
            });
            console.log(comments);
            for (let i = 0; i < comments.length; i++) {
              checkDate = new Date(comments[i].created_at);
              upDate = new Date(comments[i].updated_at);
              vm.activeHolidayShares[index].comments[i] = {};
              vm.activeHolidayShares[index].comments[i].comment = comments[i].comment;
              vm.activeHolidayShares[index].comments[i].id = comments[i].id;
              if ((upDate.getTime() - checkDate.getTime()) > 10000) {
                vm.activeHolidayShares[index].comments[i].cleanDate = cleanDateHoliday(comments[i].created_at) + ' - ' + timeDate(comments[i].created_at) + ' - Updated at: ' + cleanDateHoliday(comments[i].updated_at) + ' - ' + timeDate(comments[i].updated_at);
              } else {
                vm.activeHolidayShares[index].comments[i].cleanDate = cleanDateHoliday(comments[i].created_at) + ' - ' + timeDate(comments[i].created_at);
              }
              obtainUserDataHolidayShareComment(index, i, comments[i]);
            }
            setTimeout(()=>{
              for (let j = 0; j < comments.length; j++) {
                document.getElementById('thisIsTheHolidayShareCommentEditor' + comments[j].id).setAttribute("style", "display: none;");
                if (parseInt(comments[j].user_id) === parseInt(currentUserId)) {
                  document.getElementById('editDeleteHolidayShareCommentDiv' + comments[j].id).setAttribute("style", "display: initial;");
                }
              }
            }, 75);
          }
        });
      }

      function gatherHolidayShareHoliday(holidayId, index) {
        let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

        $http.get(`/holidays/${holidayId}`)
        .then(holidayData=>{
          let holiday = holidayData.data;
          let holidate;
          vm.activeHolidayShares[index].name = holiday.name;
          vm.activeHolidayShares[index].picture = holiday.picture;
          // vm.activeHolidayShares[index].share_associate_id = holiday.share_associate_id;
          // vm.activeHolidayShares[index].id = holiday.id;
          if (holiday.is_annual) {
            holidate = new Date(holiday.day_of);
            vm.activeHolidayShares[index].annuality = 'On ' + holidate.getDate() + ' ' + months[holidate.getMonth()];
          } else {
            vm.activeHolidayShares[index].annuality = 'Floating Holiday';
          }
          if (holiday.art_override) {
            vm.activeHolidayShares[index].artWorks = [];
            for (let i = 0; i < holiday.override_content.img_paths.length; i++) {
              vm.activeHolidayShares[index].artWorks[i] = {};
              vm.activeHolidayShares[index].artWorks[i].img_paths = holiday.override_content.img_paths[i];
              vm.activeHolidayShares[index].artWorks[i].titles = holiday.override_content.titles[i];
              vm.activeHolidayShares[index].artWorks[i].artists = holiday.override_content.artists[i];
              vm.activeHolidayShares[index].artWorks[i].years = holiday.override_content.years[i];
            }
          }
          if (holiday.music_override) {
            vm.activeHolidayShares[index].musicWorks = [];
            for (let j = 0; j < holiday.override_content.sources.length; j++) {
              vm.activeHolidayShares[index].musicWorks[j] = {};
              vm.activeHolidayShares[index].musicWorks[j].src_strings = holiday.override_content.src_strings[j];
              vm.activeHolidayShares[index].musicWorks[j].href_strings = holiday.override_content.href_strings[j];
              vm.activeHolidayShares[index].musicWorks[j].a_strings = holiday.override_content.a_strings[j];
            }
          }

        });
      }

      function retrieveUserHolidayShares() {
        let expireTime = new Date();
        expireTime.setDate(expireTime.getDate() - 30);
        let checkTime;
        $http.get(`/users/${currentUserId}`)
        .then(userData=>{
          let user = userData.data;
          $http.get('/holiday_shares')
          .then(allHolidaySharesData=>{
            let allHolidayShares = allHolidaySharesData.data;
            if (allHolidayShares.length > 0) {
              for (let i = 0; i < allHolidayShares.length; i++) {
                checkTime = new Date(allHolidayShares[i].created_at);
                if (expireTime.getTime() > checkTime.getTime()) {
                  allHolidayShares.splice(i, 1);
                  i--;
                }
              }
            }
            let sharedHolidays = allHolidayShares.filter(day=>{
              return(parseInt(day.share_associate_id) === parseInt(currentUserId));
            });

            let offeredHolidays = allHolidayShares.filter(day=>{
              return((parseInt(day.user_id) === parseInt(currentUserId)) && (parseInt(day.share_associate_id) !== parseInt(currentUserId)));
            });
            let holidayShares = sharedHolidays.concat(offeredHolidays);
            if (holidayShares.length > 0) {
              vm.activeHolidayShares = [];
              for (let i = 0; i < holidayShares.length; i++) {
                vm.activeHolidayShares[i] = {};
                vm.activeHolidayShares[i].id = holidayShares[i].id;
                vm.activeHolidayShares[i].share_associate_id = holidayShares[i].share_associate_id;
                gatherHolidayInviterData(holidayShares[i].user_id, i);
                gatherHolidayInviteeData(holidayShares[i].share_associate_id, i);
                if (holidayShares[i].responded) {
                  if (holidayShares[i].accepted) {
                    vm.activeHolidayShares[i].cleanDate = cleanDateHoliday(holidayShares[i].created_at) + ' - ' + timeDate(holidayShares[i].created_at) + ' - ' + 'accepted at: ' + cleanDateHoliday(holidayShares[i].updated_at) + ' - ' + timeDate(holidayShares[i].updated_at);
                  } else {
                    vm.activeHolidayShares[i].cleanDate = cleanDateHoliday(holidayShares[i].created_at) + ' - ' + timeDate(holidayShares[i].created_at) + ' - ' + 'declined at: ' + cleanDateHoliday(holidayShares[i].updated_at) + ' - ' + timeDate(holidayShares[i].updated_at);
                  }
                } else {
                  vm.activeHolidayShares[i].cleanDate = cleanDateHoliday(holidayShares[i].updated_at) + ' - ' + timeDate(holidayShares[i].updated_at);
                }
                gatherHolidayShareHoliday(holidayShares[i].holiday_id, i);
                gatherHolidayShareComments(i, holidayShares[i]);
              }
            }
            setTimeout(()=>{
              if (holidayShares.length > 0) {
                for (let shared = 0; shared < holidayShares.length; shared++) {
                  if (parseInt(holidayShares[shared].user_id) !== parseInt(currentUserId)) {
                    document.getElementById('thisIsHolidayShareDeleteDiv' + holidayShares[shared].id).setAttribute("style", "display: none;");
                  }
                  if (parseInt(holidayShares[shared].share_associate_id) === parseInt(currentUserId)) {
                    document.getElementById('holidayblockInvitee' + holidayShares[shared].id).setAttribute("style", "display: none;");
                    if (holidayShares[shared].responded) {
                      document.getElementById('holidayAcceptDecline' + holidayShares[shared].id).setAttribute("style", "display: none;");
                      if (holidayShares[shared].accepted) {
                        document.getElementById('holidayShareAccepted' + holidayShares[shared].id).setAttribute("style", "display: initial;");
                        document.getElementById('holidayShareDeclined' + holidayShares[shared].id).setAttribute("style", "display: none;");
                      } else {
                        document.getElementById('holidayShareAccepted' + holidayShares[shared].id).setAttribute("style", "display: none;");
                        document.getElementById('holidayShareDeclined' + holidayShares[shared].id).setAttribute("style", "display: initial;");
                      }
                    } else {
                      // document.getElementById('holidayAcceptDecline' + holidayShares[shared].id).setAttribute("style", "display: initial;");
                      // document.getElementById('holidayAcceptDecline' + holidayShares[shared].id).className = 'holidayAcceptDenyButtons';
                      document.getElementById('holidayShareAccepted' + holidayShares[shared].id).setAttribute("style", "display: none;");
                      document.getElementById('holidayShareDeclined' + holidayShares[shared].id).setAttribute("style", "display: none;");
                    }

                  } else {
                    document.getElementById('holidayblockInviter' + holidayShares[shared].id).setAttribute("style", "display: none;");
                    document.getElementById('holidayAcceptDecline' + holidayShares[shared].id).setAttribute("style", "display: none;");
                    if (holidayShares[shared].responded) {
                      if (holidayShares[shared].accepted) {
                        document.getElementById('holidayShareAccepted' + holidayShares[shared].id).setAttribute("style", "display: initial;");
                        document.getElementById('holidayShareDeclined' + holidayShares[shared].id).setAttribute("style", "display: none;");
                      } else {
                        document.getElementById('holidayShareAccepted' + holidayShares[shared].id).setAttribute("style", "display: none;");
                        document.getElementById('holidayShareDeclined' + holidayShares[shared].id).setAttribute("style", "display: initial;");
                      }
                    } else {
                      document.getElementById('holidayShareAccepted' + holidayShares[shared].id).setAttribute("style", "display: none;");
                      document.getElementById('holidayShareDeclined' + holidayShares[shared].id).setAttribute("style", "display: none;");
                    }
                  }
                }
              }
            }, 75);

          });
        });
      }

      function retrieveUserMessages() {
        let expireTime = new Date();
        expireTime.setDate(expireTime.getDate() - 30);
        let updated = new Date();
        $http.get(`/users/${currentUserId}`)
        .then(userData=>{
          let user = userData.data;
          $http.get('/messages')
          .then(allMessagesData=>{
            let allMessages = allMessagesData.data;
            console.log(expireTime);
            if (allMessages.length > 0) {
              for (let i = 0; i < allMessages.length; i++) {
                updated = new Date(allMessages[i].updated_at);
                if (updated.getTime() < expireTime.getTime()) {
                  allMessages.splice(i, 1);
                  i--;
                }
              }
            }
            //filter out any messages not updated in the last 30 days.
            // let allMessages = allMessages.filter(entry=>{
            //   updated = new Date(entry.updated_at);
            //   return(updated.getTime() > expireTime.getTime());
            // });
            let directMessages = allMessages.filter(note=>{
              return((!note.public) && ((parseInt(note.to_user_id) === parseInt(currentUserId)) || (parseInt(note.user_id) === parseInt(currentUserId))));
            });


            let friendMessages = allMessages.filter(note=>{

              return((note.public) && ((user.associates.friends.indexOf(parseInt(note.user_id) !== -1)) || (parseInt(note.user_id) === parseInt(currentUserId))));
            });

            if (directMessages.length > 0) {
              directMessages = directMessages.sort((a, b)=>{
                return((new Date(a.created_at)) - (new Date(b.created_at)));
              });
            }
            if (friendMessages.length > 0) {
              friendMessages = friendMessages.sort((a, b)=>{
                return((new Date(b.created_at)) - (new Date(a.created_at)));
              });
            }
            let createTime;
            let updateTime;
            vm.userMessages = [];
            vm.userMessages = directMessages.concat(friendMessages);
            if (vm.userMessages.length > 0) {
              for (let i = 0; i < vm.userMessages.length; i++) {
                getProfileImageAndName(vm.userMessages[i], i);
                createTime = new Date(vm.userMessages[i].created_at);
                updateTime = new Date(vm.userMessages[i].updated_at);


                if (updateTime.getTime() <= (updateTime.getTime() + 15000)) {
                  vm.userMessages[i].cleanDate = cleanDateHoliday(vm.userMessages[i].created_at) + ' - ' + timeDate(vm.userMessages[i].updated_at);
                } else {
                  vm.userMessages[i].cleanDate = cleanDateHoliday(vm.userMessages[i].created_at) + ' - ' + timeDate(vm.userMessages[i].created_at) + ' - - - updated at ' + cleanDateHoliday(vm.userMessages[i].updated_at) + ' - ' + timeDate(vm.userMessages[i].updated_at);
                }
                retrieveComments(vm.userMessages[i], i);
              }
              setMessageCRUDStates();
            }
          });
        });

      }

      function getTaskShareUserAndPicture(userId, context, index) {
        $http.get(`/users/${userId}`)
        .then(theUserData=>{
          let theUser = theUserData.data;
          if (parseInt(currentUserId) !== parseInt(userId)) {
            vm.activeTaskShares[index].task_pic = theUser.user_avatar_url;
          }
          if (context === 'tasker') {
            vm.activeTaskShares[index].sharerName = theUser.name;
          } else {
            vm.activeTaskShares[index].shareeName = theUser.name;
            vm.activeTaskShares[index].sharee_pic = theUser.user_avatar_url;

          }
        });
      }

      function getTaskShareTaskDetails(taskId, index) {
        $http.get(`/tasks/${taskId}`)
        .then(theTaskData=>{
          let theTask = theTaskData.data;
          vm.activeTaskShares[index].taskName = theTask.name;
          vm.activeTaskShares[index].taskUserNotes = theTask.user_notes;
          vm.activeTaskShares[index].dueDate = 'Due on ' + cleanDateHoliday(theTask.due_date);
          if (theTask.is_completed) {
            vm.activeTaskShares[index].completionStatus = 'Task is marked as completed on ' + cleanDateHoliday(theTask.completed_date);
          } else {
            vm.activeTaskShares[index].completionStatus = 'Task is not yet completed.';
          }
        });
      }

      function retrieveTaskCommenterProfileInfo(commenterId, taskIndex, commentIndex) {
        $http.get(`/users/${commenterId}`)
        .then(commenterData=>{
          let commenter = commenterData.data;
          vm.activeTaskShares[taskIndex].comments[commentIndex].commenterImg = commenter.user_avatar_url;
          vm.activeTaskShares[taskIndex].comments[commentIndex].commenterName = commenter.name;
        });
      }

      function retrieveTaskShareComments(taskShare, index) {
        let cDate;
        $http.get('/task_share_comments')
        .then(allTaskShareCommentsData=>{
          let allTaskShareComments = allTaskShareCommentsData.data;
          let taskComments = allTaskShareComments.filter(cmnt=>{
            return(cmnt.task_share === taskShare.id);
          });
          if (taskComments.length > 0) {
            vm.activeTaskShares[index].comments = [];
            let createDate;
            let updateDate;
            let updateString = '';
            for (let i = 0; i < taskComments.length; i++) {
              cDate = new Date(taskComments[i].created_at);
              createDate = new Date(taskComments[i].created_at);
              updateDate = new Date(taskComments[i].updated_at);
              if ((updateDate.getTime() - createDate.getTime()) > 10000) {
                updateString = cleanDateHoliday(taskComments[i].created_at) + ' at ' +  cDate.toLocaleTimeString('en-GB') + ' - Updated at - ' + cleanDateHoliday(taskComments[i].updated_at) + ' at ' + updateDate.toLocaleTimeString('en-GB');
              } else {
                updateString = cleanDateHoliday(taskComments[i].created_at) + ' at ' +  cDate.toLocaleTimeString('en-GB');
              }
              vm.activeTaskShares[index].comments[i] = {
                id: taskComments[i].id,
                comment: taskComments[i].comment,
                cleanDate: cleanDateHoliday(taskComments[i].created_at) + ' at ' +  cDate.toLocaleTimeString('en-GB'),
                updated_at: taskComments[i].updated_at,
                created_at: taskComments[i].created_at,
                updateClean: updateString
              };
              retrieveTaskCommenterProfileInfo(taskComments[i].user_id, index, i);
            }
            setTimeout(() => {
              for (let j = 0; j < taskComments.length; j++) {
                document.getElementById('thisIsTheTaskShareCommentEditor' + taskComments[j].id).setAttribute("style", "display: none;");
                document.getElementById('thisIsTaskCommentEditDoneDiv' + taskComments[j].id).setAttribute("style", "display: none;");
                if (parseInt(taskComments[j].user_id) === parseInt(currentUserId)) {
                  document.getElementById('editDeleteTaskShareCommentDiv' + taskComments[j].id).setAttribute("style", "display: initial;");
                } else {
                  document.getElementById('editDeleteTaskShareCommentDiv' + taskComments[j].id).setAttribute("style", "display: none;");
                }
              }
            }, (taskComments.length * 25));
          }
        });
      }

      function retrieveUserTaskShares() {
        let aDate;
        let bDate;
        let cDate;
        let uDate;

        $http.get(`/task_shares`)
        .then(allTaskSharesData=>{
          let allTaskShares = allTaskSharesData.data;
          console.log(allTaskShares);
          let userTaskShares = allTaskShares.filter(tsk=>{
            return((parseInt(tsk.share_associate_id) === parseInt(currentUserId)) || (parseInt(tsk.user_id) === parseInt(currentUserId)));
          });
          console.log(userTaskShares);
          userTaskShares = userTaskShares.sort((a, b)=>{
            aDate = new Date(a.created_at);
            bDate = new Date(b.created_at);
            return(aDate.getDate() - bDate.getDate());
          });
          if (userTaskShares.length > 0) {
            vm.activeTaskShares = [];
            for (let i = 0; i < userTaskShares.length; i++) {
              vm.activeTaskShares[i] = {};
              if (userTaskShares[i].share_associate_id !== currentUserId) {
                getTaskShareUserAndPicture(userTaskShares[i].user_id, 'tasker', i);
                getTaskShareUserAndPicture(userTaskShares[i].share_associate_id, 'taskee', i);
              } else {
                getTaskShareUserAndPicture(userTaskShares[i].share_associate_id, 'taskee', i);
              }
              cDate = new Date(userTaskShares[i].created_at);
              uDate = new Date(userTaskShares[i].updated_at);
              vm.activeTaskShares[i].cleanDate =  cleanDateHoliday(userTaskShares[i].created_at) + ' at ' +  cDate.toLocaleTimeString('en-GB');
              if (cDate.getTime() < uDate.getTime()) {
                vm.activeTaskShares[i].updatedClean = cleanDateHoliday(userTaskShares[i].updated_at) + ' at ' + uDate.toLocaleTimeString('en-GB');
              }

              getTaskShareTaskDetails(userTaskShares[i].task_id, i);
              vm.activeTaskShares[i].id = userTaskShares[i].id;
              vm.activeTaskShares[i].task_id = userTaskShares[i].task_id;
              vm.activeTaskShares[i].updated_at = userTaskShares[i].updated_at;
              vm.activeTaskShares[i].created_at = userTaskShares[i].created_at;
              retrieveTaskShareComments(userTaskShares[i], i);
              console.log(vm.activeTaskShares);
            }
            setTimeout(()=>{
              let thinDate;
              let currentThin = new Date();
              for (let thinner = 0; thinner < vm.activeTaskShares.length; thinner++) {
                thinDate = new Date(vm.activeTaskShares[thinner].updated_at);
                thinDate.setDate(thinDate.getDate() + 30);
                if ((currentThin.getTime() > thinDate.getTime())) {
                  vm.activeTaskShares.splice(thinner, 1);
                  --thinner;
                }
              }
              for (let j = 0; j < userTaskShares.length; j++) {
                if (userTaskShares[j].share_associate_id !== currentUserId) {
                  document.getElementById('taskSharer' + vm.activeTaskShares[j].id).setAttribute("style", "display: initial;");
                  document.getElementById('taskSharee' + vm.activeTaskShares[j].id).setAttribute("style", "display: none;");
                  document.getElementById('thisIsTaskShareDeleteDiv' + userTaskShares[j].id).setAttribute("style", "display: none;");
                  if (userTaskShares[j].responded) {
                    document.getElementById('taskAcceptDecline' + vm.activeTaskShares[j].id).setAttribute("style", "display: none;");
                    if (userTaskShares[j].accepted) {

                      document.getElementById('taskShareDeclined' + userTaskShares[j].id).setAttribute("style", "display: none;");
                    } else {
                      document.getElementById('taskShareAccepted' + userTaskShares[j].id).setAttribute("style", "display: none;");

                    }
                  } else {
                    document.getElementById('taskShareAccepted' + userTaskShares[j].id).setAttribute("style", "display: none;");
                    document.getElementById('taskShareDeclined' + userTaskShares[j].id).setAttribute("style", "display: none;");
                  }

                } else {
                  document.getElementById('taskSharer' + vm.activeTaskShares[j].id).setAttribute("style", "display: none;");
                  document.getElementById('taskSharee' + vm.activeTaskShares[j].id).setAttribute("style", "display: initial;");
                  document.getElementById('taskAcceptDecline' + vm.activeTaskShares[j].id).setAttribute("style", "display: none;");
                  document.getElementById('thisIsTaskShareDeleteDiv' + userTaskShares[j].id).setAttribute("style", "display: initial;");
                  if (userTaskShares[j].responded) {
                    if (userTaskShares[j].accepted) {

                      document.getElementById('taskShareDeclined' + userTaskShares[j].id).setAttribute("style", "display: none;");
                    } else {
                      document.getElementById('taskShareAccepted' + userTaskShares[j].id).setAttribute("style", "display: none;");

                    }
                  } else {
                    document.getElementById('taskShareAccepted' + userTaskShares[j].id).setAttribute("style", "display: none;");
                    document.getElementById('taskShareDeclined' + userTaskShares[j].id).setAttribute("style", "display: none;");
                  }
                }
              }
            }, (vm.activeTaskShares.length * 50));
          }
        });
      }




      function onInit() {
        console.log("profileview is lit");
        currentUserId = $stateParams.id;

        var myTimer = setInterval(setClock,1000);
        let userCookie = getCookie('h168userId');
        if (parseInt(userCookie) !== parseInt(currentUserId)) {

          alert('forbidden user access');
          profileClock = false;
          let res = document.cookie;
          let multiple = res.split(';');
          let key;
          for (let i = 0; i < multiple.length; i++) {
            key = multiple[i].split('=');
            document.cookie = key[0] + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
          }
          $state.go('landing');
        } else {
          $http.get(`/users/${currentUserId}`)
          .then(userData=>{
            var userAccount = userData.data;
            if ((getCookie(userAccount.security.key)) !== (userAccount.security.value)) {

              alert('access denied');
              dayClock = false;
              $state.go('landing');
            }
            updateGreetingStrip(userAccount);
            setUserBlockTypes();
            let userPic = document.getElementById('userPic');
            let profilePhoto = document.createElement('img');
            let photoReference = document.getElementById('photoReference');
            userPic.appendChild(profilePhoto);
            profilePhoto.id = 'profilePhoto';
            if (userAccount.user_avatar_url !== '') {
              profilePhoto.src = userAccount.user_avatar_url;
              photoReference.src = userAccount.user_avatar_url;

            } else {
              profilePhoto.src = '../img/blank-profile-picture-973460_1280.png';
              photoReference.src = '../img/blank-profile-picture-973460_1280.png';
            }
            profilePhoto.setAttribute("style", "height: 7em; width: 7em; margin-left: 1.6em; margin-top: 1.2em; border: 2px solid #0000cc;");
            photoReference.setAttribute("style", "height: 10em; width: 10em; margin-left: 4.6em; margin-top: 1.2em; border: 2px solid #0000cc;");
            retrieveUserMessages();
            retrieveUserAppointments();
            retrieveUserHolidayShares();
            retrieveUserOccasionShares();
            retrieveUserTaskShares();
            retrieveUserObservanceShares();
            retrieveUserArtShares();
            retrieveUserMusicShares();
          });
        }


      }
    }


}());
