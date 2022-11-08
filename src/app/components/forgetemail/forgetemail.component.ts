import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {  UserservicesService } from 'src/app/services/userService/userservices.service';


@Component({
  selector: 'app-forgetemail',
  templateUrl: './forgetemail.component.html',
  styleUrls: ['./forgetemail.component.scss']
})
export class forgetemailComponent implements OnInit {
  
  forgetemailForm!: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder, private user : UserservicesService ) { }

  ngOnInit(): void {
    this.forgetemailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }
  get f() { return this.forgetemailForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgetemailForm.valid) {
      let payload = {
        email: this.forgetemailForm.value.email,
      }
      this.user.resetpassword(payload).subscribe((response:any) =>{
        console.log(response)
      })
        return;
    }
  }

}
