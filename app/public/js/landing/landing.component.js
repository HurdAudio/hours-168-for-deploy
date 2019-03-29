(function() {
  'use strict';
  var landingClock = true;
  var weekClock = false;
  var dayClock = false;
  var monthClock = false;
  var profileClock = false;
  var productivePane = false;
  var customizePane = false;
  var socialPane = false;

  var stopBlinker = true;

  function setClock(){
    //if ((landingClock) && (!weekClock) && (!dayClock) && (!monthClock) && (!profileClock)) {
       document.getElementById("clockLanding").innerHTML=new Date().toLocaleTimeString('en-GB');
       document.getElementById('doubleClock').innerHTML=new Date().toLocaleTimeString('ko-KR');
       document.getElementById('tripleClock').innerHTML=new Date().toLocaleTimeString('en-US');
     //}
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

  function fadeInNewUserSignup(timer) {
    //let newUserForm = document.getElementById('newUserForm');
    let delayTime = (timer * 1000);
    let newUserName = document.getElementById('newUserName');
    let newUserEmail = document.getElementById('newUserEmail');
    let newUserPassword = document.getElementById('newUserPassword');
    let newUserVerifyPassword = document.getElementById('newUserVerifyPassword');
    let newUserSubmit = document.getElementById('newUserSubmit');
    let newUserExit = document.getElementById('newUserExit');

    newUserName.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
    setTimeout(()=>{
      newUserEmail.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
      setTimeout(()=>{
        newUserPassword.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
        setTimeout(()=>{
          newUserVerifyPassword.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
          setTimeout(()=>{
            newUserSubmit.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear; position: relative; display:block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after { position: absolute; z-index: -5; 	transition: all 250ms ease-out;}");
            setTimeout(()=>{
              newUserExit.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear; position: relative; display:block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after { position: absolute; z-index: -5; 	transition: all 250ms ease-out;}");
            }, (delayTime/2));
          }, (delayTime/2));
        }, delayTime);
      }, delayTime);
    }, delayTime);

    newUserExit.addEventListener('click', ()=>{
      newUserName.value = '';
      newUserEmail.value = '';
      newUserPassword.value = '';
      newUserVerifyPassword.value = '';
      resetInitialState();
    });
  }

  function fadeInLogin(timer) {
    var loginEmail = document.getElementById('loginEmail');
    var loginSubmit = document.getElementById('loginSubmit');
    var loginForgotPassword = document.getElementById('loginForgotPassword');
    var loginExit = document.getElementById('loginExit');
    var loginPassword = document.getElementById('loginPassword');
    var delayTime = (timer * 1000)/2;

    function monitorEmailField() {
      var emailAddressEntry = '';
      var passwordFieldDisplay = 'off';
      var submitButtonDisplay = 'off';

      document.addEventListener('keyup', ()=>{
        if (loginPassword.value.length > 0) {
          if (submitButtonDisplay === 'off') {
            submitButtonDisplay = 'on';
            loginSubmit.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear; position: relative; display:block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after { position: absolute; z-index: -5; 	transition: all 250ms ease-out;}");
            loginForgotPassword.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
          }
        } else {
          if (submitButtonDisplay === 'on') {
            submitButtonDisplay = 'off';
            loginSubmit.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
          }
        }
        if (loginEmail.value.length > 0) {
          emailAddressEntry = loginEmail.value;
          if ((emailAddressEntry.indexOf('@') !== -1) && (emailAddressEntry.indexOf('.') !== -1) && (emailAddressEntry.indexOf('.') !== (emailAddressEntry.length - 1))) {
            if (passwordFieldDisplay === 'off') {
              passwordFieldDisplay = 'on';
              loginPassword.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
              loginForgotPassword.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
            }
          } else {
            if (passwordFieldDisplay === 'on') {
              passwordFieldDisplay = 'off';
              loginPassword.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
              loginForgotPassword.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
            }
          }
        } else {
          if (passwordFieldDisplay === 'on') {
            passwordFieldDisplay = 'off';
            loginPassword.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
            loginForgotPassword.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
          }
        }

      });
    }

    loginEmail.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
    setTimeout(()=>{
      loginExit.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear; position: relative; display:block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after { position: absolute; z-index: -5; 	transition: all 250ms ease-out;}");
      monitorEmailField();
    }, delayTime);

  }

  function fadeOutButtons (element1, element2, element3, nextElements) {
    var fadeTime = 0.6;
    var delayTime = (fadeTime * 1000);

    element1.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + fadeTime + "s, opacity " + fadeTime + "s linear;");
    setTimeout(()=>{
      element2.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + fadeTime + "s, opacity " + fadeTime + "s linear;");
      setTimeout(()=>{
        element3.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + fadeTime + "s, opacity " + fadeTime + "s linear;");
        setTimeout(()=>{
          nextElements(fadeTime);
          element1.setAttribute("style", "display: none;");
          element2.setAttribute("style", "display: none;");
          element3.setAttribute("style", "display: none;");
          setTimeout(()=>{
          }, delayTime);
        }, delayTime);
      }, delayTime);
    }, delayTime);
  }

  function resetInitialState() {
    let newUserName = document.getElementById('newUserName');
    let newUserEmail = document.getElementById('newUserEmail');
    let newUserPassword = document.getElementById('newUserPassword');
    let newUserVerifyPassword = document.getElementById('newUserVerifyPassword');
    let newUserSubmit = document.getElementById('newUserSubmit');
    let newUserExit = document.getElementById('newUserExit');

    let landingLogin = document.getElementById('landingLogin');
    let landingNewUser = document.getElementById('landingNewUser');
    let loginEmail = document.getElementById('loginEmail');
    let loginPassword = document.getElementById('loginPassword');
    let loginSubmit = document.getElementById('loginSubmit');
    let loginExit = document.getElementById('loginExit');
    let loginForgotPassword = document.getElementById('loginForgotPassword');
    let landingInfo = document.getElementById('landingInfo');
    let userLoginForm = document.getElementById('userLoginForm');
    let loginFailNotice = document.getElementById('loginFailNotice');
    let timer = 1.4;
    let delay = (timer * 1000)/2;

    loginFailNotice.innerHTML = '';
    stopBlinker = true;
    loginFailNotice.setAttribute("style", "display: none;");
    loginExit.setAttribute("style", "visibility: hidden; opacity: 0;");
    newUserName.setAttribute("style", "visibility: hidden; opacity: 0;");
    newUserEmail.setAttribute("style", "visibility: hidden; opacity: 0;");
    newUserPassword.setAttribute("style", "visibility: hidden; opacity: 0;");
    newUserVerifyPassword.setAttribute("style", "visibility: hidden; opacity: 0;");
    newUserSubmit.setAttribute("style", "visibility: hidden; opacity: 0;");
    newUserExit.setAttribute("style", "visibility: hidden; opacity: 0;");
    loginEmail.setAttribute("style", "visibility: hidden; opacity: 0;");
    loginEmail.value = '';
    loginPassword.setAttribute("style", "visibility: hidden; opacity: 0;");
    loginPassword.value = '';
    loginSubmit.setAttribute("style", "visibility: hidden; opacity: 0;");

    loginForgotPassword.setAttribute("style", "visibility: hidden; opacity: 0;");
    landingLogin.setAttribute("style", "opacity: 0; visibility: hidden;");
    landingNewUser.setAttribute("style", "opacity: 0; visibility: hidden;");
    landingInfo.setAttribute("style", "opacity: 0; visibility: hidden;");

    setTimeout(()=>{
      userLoginForm.setAttribute("style", "display: none;");
      landingLogin.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
      landingNewUser.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");

      landingInfo.setAttribute("style", "visibility: visible; opacity: 1; transition: opacity " + timer + "s linear;");
      setTimeout(()=>{
        landingLogin.setAttribute("style", "position: relative; display:block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after { position: absolute; z-index: -5; 	transition: all 250ms ease-out;}");
        landingNewUser.setAttribute("style", "position: relative; display:block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after { position: absolute; z-index: -5; 	transition: all 250ms ease-out;}");
        landingInfo.setAttribute("style", "position: relative; display:block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after { position: absolute; z-index: -5; 	transition: all 250ms ease-out;}");
      }, delay);

    }, delay);


  }

  function blinkingCursor(displayNote, element) {
    if ((element.innerHTML === '>') || (element.innerHTML === '')) {
      return;
    } else {
      element.innerHTML = displayNote;
      setTimeout(()=>{
        if (!stopBlinker) {
          element.innerHTML = displayNote + '_';
        }
        setTimeout(()=>{
          if (!stopBlinker) {
            blinkingCursor(displayNote, element);
          }
        }, 500);
      }, 500);
    }
  }

  function messageDisplay (message, display, element, delay) {
    if (display[display.length - 1] !== '<') {
      element.innerHTML = display + '_';
    }
    if (message === '') {
      stopBlinker = false;
      blinkingCursor(display, element);
      return;
    }
    let newDisplay = display + message[0];
    let newMessage = message.slice(1);
    let setDelay = delay;
    if (newDisplay[1] === '>') {
      setDelay = setDelay * 1000;
    }
    setTimeout(()=>{
      messageDisplay(newMessage, newDisplay, element, delay);
    }, setDelay) ;
  }

  function linkSentToEmail() {
    stopBlinker = true;
    let loginFailNotice = document.getElementById('loginFailNotice');
    let messageString = '><br>>Link for resetting password has been sent to your email address.<br>>';

    loginFailNotice.setAttribute("style", "display: initial;");
    setTimeout(()=>{
      messageDisplay(messageString, '', loginFailNotice, 40);
    }, 500);
  }

  function welcomeNewUserMessage() {
    stopBlinker = true;
    let loginFailNotice = document.getElementById('loginFailNotice');
    let newUserName = document.getElementById('newUserName');
    let messageString = '>WELCOME, ' + newUserName.value + '. <br>>Your account is ready. <br>>Let\'s set up your 168h calendar features.<br>>';

    loginFailNotice.setAttribute("style", "display: initial;");
    setTimeout(()=>{
      messageDisplay(messageString, '', loginFailNotice, 40);
    }, 500);
  }

  function passwordEntriesMismatch() {
    stopBlinker = true;
    let loginFailNotice = document.getElementById('loginFailNotice');
    let newUserName = document.getElementById('newUserName');
    let messageString = '>ERROR: <br>>Password values do not match, <br>>' + newUserName.value + '. <br>>';

    loginFailNotice.setAttribute("style", "display: initial;");
    setTimeout(()=>{
      messageDisplay(messageString, '', loginFailNotice, 40);
    }, 500);
  }

  function noAccount() {
    stopBlinker = true;
    let loginFailNotice = document.getElementById('loginFailNotice');
    let messageString = '>ERROR: <br>>No account associated with email. <br>>';

    loginFailNotice.setAttribute("style", "display: initial;");
    setTimeout(()=>{
      messageDisplay(messageString, '', loginFailNotice, 40);
    }, 500);
  }

  function pleaseEnterPasswordValues() {
    stopBlinker = true;
    let loginFailNotice = document.getElementById('loginFailNotice');
    let newUserName = document.getElementById('newUserName');
    let messageString = '><br>>ERROR: <br>>Invalid password(s), <br>>' + newUserName.value + '. <br>>';

    loginFailNotice.setAttribute("style", "display: initial;");
    setTimeout(()=>{
      messageDisplay(messageString, '', loginFailNotice, 40);
    }, 500);
  }

  function emailAlreadyInSystem() {
    stopBlinker = true;
    let loginFailNotice = document.getElementById('loginFailNotice');
    let newUserName = document.getElementById('newUserName');
    let messageString = '>ERROR: <br>>Email already associated with an account, <br>>' + newUserName.value + '. <br>>';

    loginFailNotice.setAttribute("style", "display: initial;");
    setTimeout(()=>{
      messageDisplay(messageString, '', loginFailNotice, 40);
    }, 500);
  }

  function invalidEmailNotice() {
    stopBlinker = true;
    let loginFailNotice = document.getElementById('loginFailNotice');
    let newUserName = document.getElementById('newUserName');
    let messageString = '>ERROR: <br>>Please enter a valid email address, <br>>' + newUserName.value + '. <br>>';

    loginFailNotice.setAttribute("style", "display: initial;");
    setTimeout(()=>{
      messageDisplay(messageString, '', loginFailNotice, 40);
    }, 500);
  }

  function emailAndPasswordMismatch() {
    console.log('inform the user');
    stopBlinker = true;
    let loginFailNotice = document.getElementById('loginFailNotice');
    let messageString = '<br>>ERROR(403): <br>>Login failure.<br>>Email/password<br> mismatch.<br>>';

    loginFailNotice.setAttribute("style", "display: initial;");
    loginFailNotice.innerHTML = '>';
    setTimeout(()=>{
      messageDisplay(messageString, '', loginFailNotice, 40);
    }, 500);

  }

  angular.module('app')
    .component('landing', {
      controller: LandingController,
      templateUrl: '/js/landing/landing.template.html'
    });

    LandingController.$inject = ['$http', '$state', '$stateParams'];

    function LandingController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;
      vm.loginAttempt = loginAttempt;
      vm.newUserSubmit = newUserSubmit;
      vm.lostPassword = lostPassword;
      vm.restoreToLanding = restoreToLanding;
      vm.controlProduction = controlProduction;
      vm.controlCustoms = controlCustoms;
      vm.controlSociety = controlSociety;

      function lostPassword() {
        //console.log('Why you forget your password?');
        let loginEmail = document.getElementById('loginEmail');
        let checkEmail = loginEmail.value;
        let submitObj = {
          email: checkEmail
        };
        $http.post('/users/byemail', submitObj)
        .then(userAccountData=>{
          let userAccount = userAccountData.data;
          if (userAccount.email === 'unique') {
            noAccount();
          } else {
            //send email to user with link to password reset page
            let sub = {
              email: checkEmail,
              id: userAccount.id
            };
            $http.get(`/users/${userAccount.id}`)
            .then(userInfoData=>{
              let userInfo = userInfoData.data;
              sub.security = {
                key: userInfo.security.key,
                value: userInfo.security.value
              };
              linkSentToEmail();
              $http.post(`/users/lostpassword/${userAccount.id}`, sub)
              .then(emailData=>{
                let email = emailData.data;
                console.log(email);

              });
            });

          }
        });
      }

      function newUserSubmit() {
        let newUserEmail = document.getElementById('newUserEmail');
        var emailEntry = newUserEmail.value.toLowerCase();
        let newUserPassword = document.getElementById('newUserPassword');
        let newUserVerifyPassword = document.getElementById('newUserVerifyPassword');
        let newUserName = document.getElementById('newUserName');
        let newUserSubmit = document.getElementById('newUserSubmit');
        let newUserExit = document.getElementById('newUserExit');
        let nextContinue = document.getElementById('nextContinue');

        //check for valid email
        if ((emailEntry.length < 1) || (emailEntry.indexOf('@') === -1) || (emailEntry.indexOf('.') === -1) || (emailEntry.indexOf('.') === (emailEntry.length - 1))) {
          invalidEmailNotice();
          return;
        }
        //check that email is not already in user database
        let checkUniqueObj = {
          email: emailEntry
        };
        $http.post('/users/byemail', checkUniqueObj)
        .then(isItUniqueData=>{
          let isItUnique = isItUniqueData.data;
          if (isItUnique.email !== 'unique') {
            emailAlreadyInSystem();
            return;
          }
          //check that password content exists
          if ((newUserPassword.value.length < 1) || (newUserVerifyPassword.value.length < 1)) {
            pleaseEnterPasswordValues();
            return;
          }
          //check that password fields match
          if (newUserPassword.value !== newUserVerifyPassword.value) {
            passwordEntriesMismatch();
            return;
          }
          //post - send welcome message - continue button
          let submitNewUserObj = {
            name: newUserName.value,
            email: newUserEmail.value,
            password: newUserPassword.value,
            is_admin: false,
            user_avatar_url: '',
            associates: {}
          };
          $http.post('/users', submitNewUserObj)
          .then(submittedUserData=>{
            let submittedUser = submittedUserData.data[0];
            console.log(submittedUser);
            welcomeNewUserMessage();
            newUserSubmit.setAttribute("style", "display: none;");
            newUserExit.setAttribute("style", "display: none;");
            nextContinue.setAttribute("style", "display: initial; position: relative; display:block; width: 120px; margin: 10px auto; padding: 10px; border-radius: 2%; background-color: #ffff77; border: 1px solid #0000cc; font-family: 'Asul', sans-serif; font-size: 24px; color: #000; text-align: center; text-decoration: none; transform-style: flat; transition: all 250ms ease-out; &:before, &:after { position: absolute; z-index: -5; 	transition: all 250ms ease-out;}");
          });
        });

        //post - send welcome message - continue button
      }

      function loginAttempt() {
        //alert('We are logging in');
        let loginEmail = document.getElementById('loginEmail');
        let loginPassword = document.getElementById('loginPassword');
        let loginObj = {
          email: loginEmail.value,
          password: loginPassword.value
        };
        $http.post('users/login', loginObj)
        .then(loginResultData=>{
          let loginResult = loginResultData.data;
          if (loginResult.login === 'forbidden') {
            emailAndPasswordMismatch();
          } else {
            console.log('set cookies and change state');
            $http.get(`/users/${loginResult.id}`)
            .then(userData=>{
              let user = userData.data;
              console.log(user);
              document.cookie = user.security.key + "=" + user.security.value;
              document.cookie = "h168userId=" + user.id;
              $http.get(`/users/${loginResult.id}`).then(()=>{
                let currentDate = new Date();
                let yyyy = currentDate.getFullYear();
                let mm = currentDate.getMonth() + 1;
                let dd = currentDate.getDate();
                let today = 'user=' + loginResult.id + '&dayof=' + yyyy + '-' + mm + '-' + dd;
                landingClock = false;
                $state.go('dayview', {id: today});
                //myTimer = undefined;
              });
            });
          }
        });


      }

      function controlSociety() {
        let slogan = document.getElementById('slogan');
        let sellingLine = document.getElementById('sellingLine');
        let beSocial = document.getElementById('beSocial');
        let promoText = document.getElementById('promoText');
        let infoColumn2 = document.getElementById('infoColumn2');
        let infoColumn1 = document.getElementById('infoColumn1');
        let infoColumn3 = document.getElementById('infoColumn3');
        let loginDiv = document.getElementById('loginDiv');

        if (socialPane) {

          socialPane = false;
          beSocial.setAttribute("style", "visibility: visible; -webkit-transform: rotateY(90deg); -moz-transform: rotateY(90deg); -o-transform: rotateY(90deg); -ms-transform: rotateY(90deg); transform: rotateY(90deg); transition: transform 1s linear;");
          setTimeout(()=>{
            beSocial.setAttribute("style", "visibility: hidden;");
            if ((!productivePane) && (!customizePane)) {
              slogan.setAttribute("style", "display: initial; background: #22bc44; background-color: -webkit-linear-gradient(-135deg, #22dc44, #22aa44); background: -o-linear-gradient(-135deg, #22dc44, #22aa44); background: -moz-linear-gradient(-135deg, #22dc44, #22aa44); background: linear-gradient(-135deg, #22dc44, #22aa44); font-family: 'Asul', serif; font-size: 72px; align-self: center; margin-left: 3vmin; background-color: transparent; display: inline-block; border-radius: 10px; -moz-box-shadow: -1px 1px 1px #19262E, -2px 2px 2px #1E2A33, -3px 3px  3px #242F38, -4px 4px 4px #29343D, -5px 5px 7px #2E3942, -6px 6px 8px #333E47, -7px 7px 9px #38434C, -8px 8px 10px #4C4851; -webkit-box-shadow: -1px 1px 1px #19262E, -2px 2px 2px #1E2A33, -3px 3px  3px #242F38, -4px 4px 4px #29343D, -5px 5px 7px #2E3942, -6px 6px 8px #333E47, -7px 7px 9px #38434C, -8px 8px 10px #4C4851; box-shadow: -1px 1px 1px #19262E, -2px 2px 2px #1E2A33, -3px 3px  3px #242F38, -4px 4px 4px #29343D, -5px 5px 7px #2E3942, -6px 6px 8px #333E47, -7px 7px 9px #38434C, -8px 8px 10px #4C4851; padding-left: 2vmin; padding-right: 2vmin; font-weight:bold;");
              sellingLine.setAttribute("style", "visibility: visible;");
              promoText.setAttribute("style", "visibility: visible;");
              infoColumn2.setAttribute("style", "margin-top: 50vmin;");
              infoColumn1.setAttribute("style", "margin-top: 50vmin;");
              infoColumn3.setAttribute("style", "margin-top: 50vmin;");
              loginDiv.setAttribute("style", "visibility: visible;");
            }
          }, 1000);
        } else {
          if ((!productivePane) && (!customizePane)) {
            slogan.setAttribute("style", "display: none;");
            sellingLine.setAttribute("style", "visibility: hidden;");
            promoText.setAttribute("style", "visibility: hidden;");
            loginDiv.setAttribute("style", "visibility: hidden;");
          }
          socialPane = true;
          infoColumn2.setAttribute("style", "margin-top: 0;");
          infoColumn1.setAttribute("style", "margin-top: 0;");
          infoColumn3.setAttribute("style", "margin-top: 0;");
          beSocial.setAttribute("style", "visibility: visible; -webkit-transform: rotateY(-35deg); -moz-transform: rotateY(-35deg); -o-transform: rotateY(-35deg); -ms-transform: rotateY(-35deg); transform: rotateY(-35deg); transition: transform 1s linear;");
          setTimeout(()=>{
            beSocial.setAttribute("style", "visibility: visible; -webkit-transform: rotateY(5deg); -moz-transform: rotateY(5deg); -o-transform: rotateY(5deg); -ms-transform: rotateY(5deg); transform: rotateY(5deg); transition: transform 1s linear;");
          }, 1000);
        }
      }

      function controlCustoms() {
        let slogan = document.getElementById('slogan');
        let sellingLine = document.getElementById('sellingLine');
        let beCustom = document.getElementById('beCustom');
        let promoText = document.getElementById('promoText');
        let infoColumn3 = document.getElementById('infoColumn3');
        let infoColumn2 = document.getElementById('infoColumn2');
        let infoColumn1 = document.getElementById('infoColumn1');
        let loginDiv = document.getElementById('loginDiv');

        if (customizePane) {

          customizePane = false;
          beCustom.setAttribute("style", "visibility: visible; -webkit-transform: rotateY(90deg); -moz-transform: rotateY(90deg); -o-transform: rotateY(90deg); -ms-transform: rotateY(90deg); transform: rotateY(90deg); transition: transform 1s linear;");
          setTimeout(()=>{
            beCustom.setAttribute("style", "visibility: hidden;");
            if ((!productivePane) && (!socialPane)) {
              slogan.setAttribute("style", "display: initial; background: #22bc44; background-color: -webkit-linear-gradient(-135deg, #22dc44, #22aa44); background: -o-linear-gradient(-135deg, #22dc44, #22aa44); background: -moz-linear-gradient(-135deg, #22dc44, #22aa44); background: linear-gradient(-135deg, #22dc44, #22aa44); font-family: 'Asul', serif; font-size: 72px; align-self: center; margin-left: 3vmin; background-color: transparent; display: inline-block; border-radius: 10px; -moz-box-shadow: -1px 1px 1px #19262E, -2px 2px 2px #1E2A33, -3px 3px  3px #242F38, -4px 4px 4px #29343D, -5px 5px 7px #2E3942, -6px 6px 8px #333E47, -7px 7px 9px #38434C, -8px 8px 10px #4C4851; -webkit-box-shadow: -1px 1px 1px #19262E, -2px 2px 2px #1E2A33, -3px 3px  3px #242F38, -4px 4px 4px #29343D, -5px 5px 7px #2E3942, -6px 6px 8px #333E47, -7px 7px 9px #38434C, -8px 8px 10px #4C4851; box-shadow: -1px 1px 1px #19262E, -2px 2px 2px #1E2A33, -3px 3px  3px #242F38, -4px 4px 4px #29343D, -5px 5px 7px #2E3942, -6px 6px 8px #333E47, -7px 7px 9px #38434C, -8px 8px 10px #4C4851; padding-left: 2vmin; padding-right: 2vmin; font-weight:bold;");
              sellingLine.setAttribute("style", "visibility: visible;");
              promoText.setAttribute("style", "visibility: visible;");
              infoColumn2.setAttribute("style", "margin-top: 50vmin;");
              infoColumn1.setAttribute("style", "margin-top: 50vmin;");
              infoColumn3.setAttribute("style", "margin-top: 50vmin;");
              loginDiv.setAttribute("style", "visibility: visible;");
            }
          }, 1000);
        } else {
          if ((!productivePane) && (!socialPane)) {
            slogan.setAttribute("style", "display: none;");
            sellingLine.setAttribute("style", "visibility: hidden;");
            promoText.setAttribute("style", "visibility: hidden;");
            loginDiv.setAttribute("style", "visibility: hidden;");
          }
          customizePane = true;
          infoColumn2.setAttribute("style", "margin-top: 0;");
          infoColumn1.setAttribute("style", "margin-top: 0;");
          infoColumn3.setAttribute("style", "margin-top: 0;");
          beCustom.setAttribute("style", "visibility: visible; -webkit-transform: rotateY(-35deg); -moz-transform: rotateY(-35deg); -o-transform: rotateY(-35deg); -ms-transform: rotateY(-35deg); transform: rotateY(-35deg); transition: transform 1s linear;");
          setTimeout(()=>{
            beCustom.setAttribute("style", "visibility: visible; -webkit-transform: rotateY(5deg); -moz-transform: rotateY(5deg); -o-transform: rotateY(5deg); -ms-transform: rotateY(5deg); transform: rotateY(5deg); transition: transform 1s linear;");
          }, 1000);
        }
      }

      function controlProduction() {
        let slogan = document.getElementById('slogan');
        let sellingLine = document.getElementById('sellingLine');
        let beProductive = document.getElementById('beProductive');
        let promoText = document.getElementById('promoText');
        let infoColumn1 = document.getElementById('infoColumn1');
        let infoColumn2 = document.getElementById('infoColumn2');
        let infoColumn3 = document.getElementById('infoColumn3');
        let loginDiv = document.getElementById('loginDiv');

        if (productivePane) {

          productivePane = false;
          beProductive.setAttribute("style", "visibility: visible; -webkit-transform: rotateY(90deg); -moz-transform: rotateY(90deg); -o-transform: rotateY(90deg); -ms-transform: rotateY(90deg); transform: rotateY(90deg); transition: transform 1s linear;");
          setTimeout(()=>{
            beProductive.setAttribute("style", "visibility: hidden;");
            if ((!customizePane) && (!socialPane)) {
              slogan.setAttribute("style", "display: initial; background: #22bc44; background-color: -webkit-linear-gradient(-135deg, #22dc44, #22aa44); background: -o-linear-gradient(-135deg, #22dc44, #22aa44); background: -moz-linear-gradient(-135deg, #22dc44, #22aa44); background: linear-gradient(-135deg, #22dc44, #22aa44); font-family: 'Asul', serif; font-size: 72px; align-self: center; margin-left: 3vmin; background-color: transparent; display: inline-block; border-radius: 10px; -moz-box-shadow: -1px 1px 1px #19262E, -2px 2px 2px #1E2A33, -3px 3px  3px #242F38, -4px 4px 4px #29343D, -5px 5px 7px #2E3942, -6px 6px 8px #333E47, -7px 7px 9px #38434C, -8px 8px 10px #4C4851; -webkit-box-shadow: -1px 1px 1px #19262E, -2px 2px 2px #1E2A33, -3px 3px  3px #242F38, -4px 4px 4px #29343D, -5px 5px 7px #2E3942, -6px 6px 8px #333E47, -7px 7px 9px #38434C, -8px 8px 10px #4C4851; box-shadow: -1px 1px 1px #19262E, -2px 2px 2px #1E2A33, -3px 3px  3px #242F38, -4px 4px 4px #29343D, -5px 5px 7px #2E3942, -6px 6px 8px #333E47, -7px 7px 9px #38434C, -8px 8px 10px #4C4851; padding-left: 2vmin; padding-right: 2vmin; font-weight:bold;");
              sellingLine.setAttribute("style", "visibility: visible;");
              promoText.setAttribute("style", "visibility: visible;");
              infoColumn1.setAttribute("style", "margin-top: 50vmin;");
              infoColumn2.setAttribute("style", "margin-top: 50vmin;");
              infoColumn3.setAttribute("style", "margin-top: 50vmin;");
              loginDiv.setAttribute("style", "visibility: visible;");
            }
          }, 1000);
        } else {
          if ((!customizePane) && (!socialPane)) {
            slogan.setAttribute("style", "display: none;");
            sellingLine.setAttribute("style", "visibility: hidden;");
            promoText.setAttribute("style", "visibility: hidden;");
            loginDiv.setAttribute("style", "visibility: hidden;");
          }
          productivePane = true;
          infoColumn1.setAttribute("style", "margin-top: 0;");
          infoColumn2.setAttribute("style", "margin-top: 0;");
          infoColumn3.setAttribute("style", "margin-top: 0;");
          beProductive.setAttribute("style", "visibility: visible; -webkit-transform: rotateY(-35deg); -moz-transform: rotateY(-35deg); -o-transform: rotateY(-35deg); -ms-transform: rotateY(-35deg); transform: rotateY(-35deg); transition: transform 1s linear;");
          setTimeout(()=>{
            beProductive.setAttribute("style", "visibility: visible; -webkit-transform: rotateY(5deg); -moz-transform: rotateY(5deg); -o-transform: rotateY(5deg); -ms-transform: rotateY(5deg); transform: rotateY(5deg); transition: transform 1s linear;");
          }, 1000);
        }
      }

      function rotateClock(element) {
        let timer = 20 + Math.floor(Math.random() * 120);

        element.setAttribute("style", "-webkit-transform: skew(0deg, 45deg); -moz-transform: skew(0deg, 45deg); -o-transform: skew(0deg, 45deg); -ms-transform: skew(0deg, 45deg); transform: skew(0deg, 45deg); transition: transform " + timer + "s linear;");
        setTimeout(()=>{
          element.setAttribute("style", "-webkit-transform: rotateY(180deg); -moz-transform: rotateY(180deg); -o-transform: rotateY(180deg); -ms-transform: rotateY(180deg); transform: rotateY(180deg); transition: transform " + timer + "s linear;");
          setTimeout(()=>{
            element.setAttribute("style", "-webkit-transform: skew(0deg, -45deg); -moz-transform: skew(0deg, -45deg); -o-transform: skew(0deg, -45deg); -ms-transform: skew(0deg, -45deg); transform: skew(0deg, -45deg); transition: transform " + timer + "s linear;");
            setTimeout(()=>{
              element.setAttribute("style", "-webkit-transform: rotateX(180deg); -moz-transform: rotateX(180deg); -o-transform: rotateX(180deg); -ms-transform: rotateX(180deg); transform: rotateX(180deg); transition: transform " + timer + "s linear;");
              setTimeout(()=>{
                element.setAttribute("style", "-webkit-transform: skew(0deg, 180deg); -moz-transform: skew(0deg, 180deg); -o-transform: skew(0deg, 180deg); -ms-transform: skew(0deg, 180deg); transform: skew(0deg, 180deg); transition: transform " + timer + "s linear;");
                setTimeout(()=>{
                  element.setAttribute("style", "-webkit-transform: rotateZ(180deg); -moz-transform: rotateZ(180deg); -o-transform: rotateZ(180deg); -ms-transform: rotateZ(180deg); transform: rotateZ(180deg); transition: transform " + timer + "s linear;");
                  setTimeout(()=>{
                    rotateClock(element);
                  }, (timer * 1000));
                }, (timer * 1000));
              });
            }, (timer * 1000));
          }, (timer * 1000));
        }, (timer * 1000));

      }

      function restoreToLanding() {
        let timer = 0.25;
        let loginDiv = document.getElementById('loginDiv');
        let logo2img = document.getElementById('logo2img');
        let infoDiv = document.getElementById('infoDiv');
        let infoBorder1 = document.getElementById('infoBorder1');
        let infoBorder2 = document.getElementById('infoBorder2');
        let infoBorder3 = document.getElementById('infoBorder3');
        let infoSloganLine = document.getElementById('infoSloganLine');

        loginDiv.setAttribute("style", "visibility: visible; opacity: 1; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
        logo2img.setAttribute("style", "visibility: visible; opacity: 1; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
        infoBorder3.setAttribute("style", "opacity: 0; transition: opacity " + (timer * 5) + "s linear;");

        setTimeout(()=>{
          infoDiv.setAttribute("style", "-webkit-transform: rotateY(90deg); -moz-transform: rotateY(90deg); -o-transform: rotateY(90deg); -ms-transform: rotateY(90deg); transform: rotateY(90deg); transition: transform " + (timer * 4) + "s linear;");
          setTimeout(()=>{
            infoBorder1.setAttribute("style", "-webkit-transform: rotateX(180deg); -moz-transform: rotateX(180deg); -o-transform: rotateX(180deg); -ms-transform: rotateX(180deg); transform: rotateX(180deg); transition: transform " + (timer * 4) + "s linear;");
            setTimeout(()=>{
              infoBorder2.setAttribute("style", "-webkit-transform: rotateY(360deg); -moz-transform: rotateY(360deg); -o-transform: rotateY(360deg); -ms-transform: rotateY(360deg); transform: rotateY(360deg); transition: transform " + (timer * 4) + "s linear;");
              infoSloganLine.setAttribute("style", "opacity: 0; transition: opacity " + (timer * 8) + "s linear;");
              resetInitialState();
            }, (timer * 250));

          }, (timer * 250));



        }, (timer * 250));
      }

      function displayInfo() {
        let timer = 0.25;
        //let loginDiv = document.getElementById('loginDiv');
        let logo2img = document.getElementById('logo2img');
        let infoDiv = document.getElementById('infoDiv');
        let infoBorder1 = document.getElementById('infoBorder1');
        let infoBorder2 = document.getElementById('infoBorder2');
        let infoBorder3 = document.getElementById('infoBorder3');
        let infoSloganLine = document.getElementById('infoSloganLine');

        //loginDiv.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
        logo2img.setAttribute("style", "visibility: hidden; opacity: 0; transition: visibility 0s " + timer + "s, opacity " + timer + "s linear;");
        infoBorder3.setAttribute("style", "opacity: 1; transition: opacity " + (timer * 5) + "s linear;");

        setTimeout(()=>{
          infoDiv.setAttribute("style", "-webkit-transform: rotateY(0deg); -moz-transform: rotateY(0deg); -o-transform: rotateY(0deg); -ms-transform: rotateY(0deg); transform: rotateY(0deg); transition: transform " + (timer * 4) + "s linear;");
          setTimeout(()=>{
            infoBorder1.setAttribute("style", "-webkit-transform: rotateX(0deg); -moz-transform: rotateX(0deg); -o-transform: rotateX(0deg); -ms-transform: rotateX(0deg); transform: rotateX(0deg); transition: transform " + (timer * 4) + "s linear;");
            setTimeout(()=>{
              infoBorder2.setAttribute("style", "-webkit-transform: rotateY(0deg); -moz-transform: rotateY(0deg); -o-transform: rotateY(0deg); -ms-transform: rotateY(0deg); transform: rotateY(0deg); transition: transform " + (timer * 4) + "s linear;");
              infoSloganLine.setAttribute("style", "opacity: 0.9; transition: opacity " + (timer * 8) + "s linear;");
            }, (timer * 250));

          }, (timer * 250));



        }, (timer * 250));

      }

      function onInit() {
        let now = new Date();
        vm.copyrightMessage = "© 2017 - " + now.getFullYear() + " HurdAudio";
        console.log("Landing is lit");
        landingClock = true;
        weekClock = false;
        dayClock = false;
        monthClock = false;
        profileClock = false;
        //check cookies for user already logged in - change page state if this is a return user
        if (getCookie('h168userId') !== null) {
          let loggedInUser = getCookie('h168userId');
          $http.get(`/users/${loggedInUser}`)
          .then(userInfoData=>{
            let userInfo = userInfoData.data;
            let cookey = userInfo.security.key;
            let cookvalue = userInfo.security.value;
            if (getCookie(cookey) === cookvalue) {
              let userObject = {
                user_id: loggedInUser
              };
              $http.post('/users/loginstatus', userObject)
              .then(loginStatusData=>{
                let loginStatus = loginStatusData.data;
                if (loginStatus.session !== 'empty') {
                  let currentDate = new Date();
                  let yyyy = currentDate.getFullYear();
                  let mm = currentDate.getMonth() + 1;
                  let dd = currentDate.getDate();
                  let today = 'user=' + userInfo.id + '&dayof=' + yyyy + '-' + mm + '-' + dd;
                  landingClock = false;
                  $state.go('dayview', {id: today});
                  myTimer = undefined;
                } else {
                  console.log('forbidden access');
                }
              });
              // $state.go('dayview');
            }
          });
        } else {

          var myTimer = setInterval(setClock,1000);
          var landingLogin = document.getElementById('landingLogin');
          var landingNewUser = document.getElementById('landingNewUser');
          var landingInfo = document.getElementById('landingInfo');
          var loginExit = document.getElementById('loginExit');
          var userLoginForm = document.getElementById('userLoginForm');
          var landingInfo = document.getElementById('landingInfo');

          setTimeout(()=>{
            rotateClock(document.getElementById('clockLanding'));
            setTimeout(()=>{
              rotateClock(document.getElementById('doubleClock'));
              setTimeout(()=>{
                rotateClock(document.getElementById('tripleClock'));
              }, 30000);
            }, 30000);
          }, 30000);


          landingLogin.addEventListener('click', ()=>{
            userLoginForm.setAttribute("style", "display: initial;");
            fadeOutButtons(landingInfo, landingNewUser,landingLogin, fadeInLogin);

          });
          landingNewUser.addEventListener('click', ()=>{

            fadeOutButtons(landingInfo, landingLogin, landingNewUser, fadeInNewUserSignup);
          });
          landingInfo.addEventListener('click', ()=>{
            fadeOutButtons(landingLogin, landingNewUser, landingInfo, displayInfo);
          });
          loginExit.addEventListener('click', ()=>{
            resetInitialState();
          });
        }


      }

    }

}());
