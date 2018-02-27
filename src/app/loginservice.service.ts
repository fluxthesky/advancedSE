import { Injectable } from '@angular/core';

@Injectable()
export class LoginserviceService {



 name;
 pw;

  constructor() { }


  setData(name,pw){
    this.name = name;
    this.pw = pw;
  }

}
