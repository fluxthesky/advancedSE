import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import {LoginserviceService} from '../loginservice.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@NgModule({
  imports: [NgbModule ]
})

export class LoginComponent implements OnInit {



      accname = '';
      accpassword = '';



constructor(private messageService: MessageService , private loginserviceService: LoginserviceService) {



 }

 login(){

// call api here

  this.loginserviceService.setData(this.accname,this.accpassword);



 }


  ngOnInit() {



   }

}
