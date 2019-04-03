import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {jqxGridComponent} from 'jqwidgets-scripts/jqwidgets-ng/jqxgrid/'
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ng/jqxbuttons';
@NgModule({
  declarations: [
    AppComponent,
    jqxGridComponent,
    jqxButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
