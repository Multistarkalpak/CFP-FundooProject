import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpservicesService } from '../httpService/httpservices.service';


@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  
  constructor(private httpService:HttpservicesService) { }

  signin(reqdata:any){
    console.log(reqdata);

    let header ={
      headers:new HttpHeaders({
        'content-type' :'application/json',

      })
    }

    return this.httpService.postService('/user/login',reqdata,false,header)
  }

  register(reqdata:any){
    console.log(reqdata);

    let header ={
      headers:new HttpHeaders({
        'content-type' :'application/json',

      })
    }

    return this.httpService.postService('/user/userSignUp',reqdata,false,header)
  }

  resetpassword(reqdata:any){
    console.log(reqdata);

    let header ={
      headers:new HttpHeaders({
        'content-type' :'application/json',

      })
    }

    return this.httpService.postService('/user/reset',reqdata,false,header)
  }

  // login(reqdata:any){
  //   console.log(reqdata);

  //   let header ={
  //     header:new HttpHeaders({
  //       'content-type' : 'application/json',
  //     })
  //   }

  //   return this.httpService.postService('')
  // }


}

