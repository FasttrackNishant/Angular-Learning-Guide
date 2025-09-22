### New Data

step 1 : isLoggedIn:string ='true'
in log in page
step 2: write 
localStorage.setItem('logged',this.isLoggedIn) in submit or LogIn Method
step 3 : create guard 
   ng g guard Authentication
step 4:   in Authentication Guard 
write following code
let userstatus=localStorage.getItem("logged")
console.log("userstatus"+userstatus)
  if(userstatus=='true')
  return true;
  else
  {
    alert("You are not logged")
return false;
  }
step 5:where to appy guard in 
routing Module :
as follows 
{path:'private',component:PrivateComponent,canActivate:[authenticationGuard]}
==================
step 1
  ng g guard UnSaveData
  select Deactivate Guard using space bar and press enter\
step 2 
modify guard as follows
export const unSavedDataGuard: CanDeactivateFn<AdduserComponent> = (component:AdduserComponent, currentRoute:ActivatedRouteSnapshot, currentState:RouterStateSnapshot, nextState) => {
 
return  confirm('Do you want to leave the Form?, Data is not saved') 
  //return component.canExit()
};
step 3 apply it to Register component in routing Module