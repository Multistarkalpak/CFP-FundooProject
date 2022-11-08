import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { resetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { forgetemailComponent } from './components/forgetemail/forgetemail.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
const routes: Routes = [
  {path : "registration",component:RegistrationComponent},
  {path : "signin",component:SigninComponent},
  {path : "forgetemail",component:forgetemailComponent},
  {path : "resetpassword",component:resetpasswordComponent},
  {path : "dashboard", component:DashboardComponent,
  children: [
    {path : "notes",component:GetAllNotesComponent},

  ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
