import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { helloComponent } from './helo.component';
import { FormsModule } from '@angular/forms';
import { HocSinhsComponent } from './student/students.component';
import { LopsComponent } from './class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    helloComponent,
    HocSinhsComponent,
    LopsComponent
  ],
  imports: [BrowserModule,FormsModule,AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
