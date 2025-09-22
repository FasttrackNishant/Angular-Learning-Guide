import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { ImagePipe } from './image.pipe';
import { UserlistComponent } from './userlist/userlist.component';
import { HightlightDirective } from './hightlight.directive';
import { FilterPipe } from './custom-pipes/filter.pipe';
import { FruitslistComponent } from './fruitslist/fruitslist.component';
import { UserFormComponent } from './angular-forms/user-form/user-form.component';
import { ReactiveFormsComponent } from './angular-forms/reactive-forms/reactive-forms.component';
import { ServiceUsersComponent } from './services/service-users/service-users.component';
import { UserEditComponent } from './services/user-edit/user-edit.component';
import { UserAddComponent } from './services/user-add/user-add.component';
import { UserListComponent } from './services/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './services/webapi/product-list/product-list.component';
import { ProductDetailsComponent } from './services/webapi/product-details/product-details.component';
import { ProudctUpdateComponent } from './services/webapi/proudct-update/proudct-update.component';
import { ProductAddComponent } from './services/webapi/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OneWayBindingComponent,
    TwoWayComponent,
    PipesComponent,
    ImagePipe,
    UserlistComponent,
    HightlightDirective,
    FilterPipe,
    FruitslistComponent,
    UserFormComponent,
    ReactiveFormsComponent,
    ServiceUsersComponent,
    UserEditComponent,
    UserAddComponent,
    UserListComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProudctUpdateComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
