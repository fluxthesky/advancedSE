import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { LoginserviceService } from './loginservice.service';
import { SidebarModule } from 'ng-sidebar';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    MessagesComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
     FormsModule,
     AppRoutingModule,
     SidebarModule
  ],
  providers: [MessageService, LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
