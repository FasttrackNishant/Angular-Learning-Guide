import { CanActivateFn } from '@angular/router';

export const authenticationGuardGuard: CanActivateFn = (route, state) => {

  let userStaus = localStorage.getItem('logged');
  console.log("user status" + userStaus);

  if (userStaus == 'true') {
    return true;
  }
  else {
    alert("Not logged in ");
    return false;
  }
};

