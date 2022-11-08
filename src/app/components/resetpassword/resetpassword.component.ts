import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserservicesService } from 'src/app/services/userService/userservices.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class resetpasswordComponent implements OnInit {

  resetpasswordForm!: FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserservicesService) { }

  ngOnInit(): void {
    this.resetpasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],

    })
  }
  get f() { return this.resetpasswordForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetpasswordForm.invalid) {

      let payload = {
        password: this.resetpasswordForm.value.password,
        confirmpassword: this.resetpasswordForm.value.confirmPassword,

      }

      this.user.register(payload).subscribe((response:any) =>{
        console.log(response)
      })
      
        return;
    }
  }


}
