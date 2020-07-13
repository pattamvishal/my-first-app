import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NewCmp2Component } from './new-cmp2/new-cmp2.component';
import { ChangeTextDirective } from './change-text.directive';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    NewCmp2Component,
    ChangeTextDirective
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
