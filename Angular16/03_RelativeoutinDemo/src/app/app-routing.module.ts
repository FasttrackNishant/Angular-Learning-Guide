import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './GuardRoutes/home/home.component';
import { AdduserComponent } from './GuardRoutes/adduser/adduser.component';
import { EdituserComponent } from './GuardRoutes/edituser/edituser.component';
import { PrivateComponent } from './GuardRoutes/private/private.component';
import { authenticationGuardGuard } from './GuardRoutes/authentication-guard.guard';
import { unsaveddataGuard } from './GuardRoutes/unsaveddata.guard';

const routes: Routes = [

  { path: 'login', component: HomeComponent },
  {
    path: 'first', component: FirstComponent, children:
      [
        { path: 'child-a', component: ChildAComponent },
        { path: 'child-b', component: ChildBComponent }
      ]
  },

  // guard routes 


  { path: 'second', component: SecondComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-user', component: AdduserComponent ,canDeactivate:[unsaveddataGuard] },
  { path: 'edit-user/:id', component: EdituserComponent },
  { path: 'private', component: PrivateComponent ,canActivate:[authenticationGuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
