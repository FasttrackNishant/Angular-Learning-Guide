import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { InlineComponent } from './inline/inline.component';
import { Inline1Component } from './inline1/inline1.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { EventsComponent } from './events/events.component';
import { BindingComponent } from './binding/binding.component';
import { ClassbindingsComponent } from './classbindings/classbindings.component';
import { NgClassDirComponent } from './ng-class-dir/ng-class-dir.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    InlineComponent,
    Inline1Component,
    InterpolationComponent,
    EventsComponent,
    BindingComponent,
    ClassbindingsComponent,
    NgClassDirComponent,
    StyleBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
