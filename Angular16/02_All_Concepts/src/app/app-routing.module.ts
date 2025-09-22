import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { PipesComponent } from './pipes/pipes.component';
import { UserlistComponent } from './userlist/userlist.component';
import { FruitslistComponent } from './fruitslist/fruitslist.component';
import { UserFormComponent } from './angular-forms/user-form/user-form.component';
import { ReactiveFormsComponent } from './angular-forms/reactive-forms/reactive-forms.component';
import { ServiceUsersComponent } from './services/service-users/service-users.component';
import { UserAddComponent } from './services/user-add/user-add.component';
import { UserEditComponent } from './services/user-edit/user-edit.component';
import { UserListComponent } from './services/user-list/user-list.component';
import { ProductListComponent } from './services/webapi/product-list/product-list.component';
import { ProudctUpdateComponent } from './services/webapi/proudct-update/proudct-update.component';
import { ProductDetailsComponent } from './services/webapi/product-details/product-details.component';
import { ProductAddComponent } from './services/webapi/product-add/product-add.component';

const routes: Routes = [

  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'oneway', component: OneWayBindingComponent },
  { path: 'twoway', component: TwoWayComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'hoverlist', component: UserlistComponent },
  { path: 'fruitlist', component: FruitslistComponent },
  { path: 'userform', component: UserFormComponent },
  { path: 'edit/:id', component: ReactiveFormsComponent },
  { path: 'service', component: ServiceUsersComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-add', component: UserAddComponent },
  { path: 'user-edit/:id', component: UserEditComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'product-update:/id', component: ProudctUpdateComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
