import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import {  UserservicesService } from 'src/app/services/userService/userservices.service';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm!: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder,private user: UserservicesService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
     );
   
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.valid) {
      let payload = {
        firstName: this.registerForm.value.firstname,
        lastName: this.registerForm.value.lastName,
        password: this.registerForm.value.password,
        email: this.registerForm.value.email,
        service:"advance"

      }
      this.user.register(payload).subscribe((response:any) =>{
        console.log(response)
      })
        return;
    }
  }
}


