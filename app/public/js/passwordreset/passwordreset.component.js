(function() {
  'use strict';



  function setClock(){
       document.getElementById("clockPasswordreset").innerHTML=new Date().toLocaleTimeString('en-GB');
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



  angular.module('app')
    .component('passwordreset', {
      controller: PasswordresetController,
      templateUrl: '/js/passwordreset/passwordreset.template.html'
    });

    PasswordresetController.$inject = ['$http', '$state', '$stateParams'];

    function PasswordresetController($http, $state, $stateParams){
      const vm = this;

      vm.$onInit = onInit;


      function onInit() {
        console.log("Passwordreset is lit");

        let userRecoveryString = ($stateParams.id);
        console.log(userRecoveryString);
        let userID = getUserFromParams(userRecoveryString);
        let securityString = getSecurityStringFromParams(userRecoveryString);
        var myTimer = setInterval(setClock,1000);
        let passwordsSubmit = document.getElementById('passwordsSubmit');
        let newPassword = document.getElementById('newPassword');
        let repeatPassword = document.getElementById('repeatPassword');

        passwordsSubmit.setAttribute("style", "display: none;");

        $http.get(`/users/${userID}`)
        .then(userData=>{
          let user = userData.data;
          if (securityString === user.security.passwordRecovery) {
            $http.get(`/users/${userID}`)
            .then(userData=>{
              let user = userData.data;

              document.addEventListener('keyup', ()=>{
                if (newPassword.value !== '') {
                  if (newPassword.value === repeatPassword.value) {
                    passwordsSubmit.setAttribute("style", "display: initial;");
                  } else {
                    passwordsSubmit.setAttribute("style", "display: none;");
                  }
                }
              });
              passwordsSubmit.addEventListener('click', ()=>{
                let submitObject = {
                  password: newPassword.value
                };
                $http.patch(`/users/${userID}`, submitObject)
                .then(patchedUserData=>{
                  let patchedUser = patchedUserData.data;
                  console.log(patchedUser);
                  $http.patch(`/users/resetsecurity/${userID}`, {})
                  .then(secureUserData=>{
                    let secureUser = secureUserData.data;
                    console.log(secureUser);
                    document.cookie = secureUser.security.key + "=" + secureUser.security.value;
                    document.cookie = "h168userId=" + secureUser.id;
                    let currentDate = new Date();
                    let yyyy = currentDate.getFullYear();
                    let mm = currentDate.getMonth() + 1;
                    let dd = currentDate.getDate();
                    let today = 'user=' + secureUser.id + '&dayof=' + yyyy + '-' + mm + '-' + dd;
                    $state.go('dayview', {id: today});
                  });
                });
              });

            });
          } else {
            console.log('forbidden access');
            $state.go('landing');
          }
        });

      }
    }


}());
