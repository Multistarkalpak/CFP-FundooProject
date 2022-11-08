import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserservicesService } from 'src/app/services/userService/userservices.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserservicesService) { }

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    },
    );
  }
  get f() { return this.signinForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signinForm.valid) {
      let payload = {
        email: this.signinForm.value.email,
        password: this.signinForm.value.password,
        
      }
      this.user.signin(payload).subscribe((response: any) => {
        console.log(response)
      })
    }
  }

}
