import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import {LoginserviceService} from '../loginservice.service';
import { MessageService } from '../message.service';
import { SidebarModule } from 'ng-sidebar';
import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { AppComponent } from '../app.component';


@NgModule({

  declarations: [AppComponent],
    imports: [BrowserModule, SidebarModule.forRoot()],
    bootstrap: [AppComponent],

})


@Component({
  selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']





})
export class HomepageComponent implements OnInit {


   accname;
   accpassword;
   fail = true;

  constructor(private messageService: MessageService, private LoginserviceService : LoginserviceService) {

    this.accname = this.LoginserviceService.name ;
    this.accpassword = this.LoginserviceService.pw;

    if(this.accname == "test" && this.accpassword == "123"){
      this.fail = false;

    }



   }

    _opened: boolean = false;

    _toggleSidebar() {
     this._opened = !this._opened;
   }

  ngOnInit() {
  }




}
