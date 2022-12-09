import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SelectModule} from "./core/components/select/select.module";
import {BtnModule} from "./core/components/btn/btn.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SelectModule,
    BtnModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
