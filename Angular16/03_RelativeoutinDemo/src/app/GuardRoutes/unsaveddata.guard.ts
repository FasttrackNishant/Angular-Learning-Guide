import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';

export const unsaveddataGuard: CanDeactivateFn<AdduserComponent> = (component: AdduserComponent, currentRoute: ActivatedRouteSnapshot, currentState:RouterStateSnapshot, nextState) => {
  return confirm("Do you want to leave the page ?");
};
