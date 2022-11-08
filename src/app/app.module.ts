import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { forgetemailComponent } from './components/forgetemail/forgetemail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { resetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SigninComponent } from './components/signin/signin.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from '././components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { IconsComponent } from './components/icons/icons.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule} from '@angular/material/divider';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { CreateNotesComponent } from './components/create-notes/create-notes.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';





@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent, 
    forgetemailComponent, 
    resetpasswordComponent, 
    SigninComponent, 
    DashboardComponent, 
    IconsComponent, 
    GetAllNotesComponent, 
    CreateNotesComponent, 
    DisplayNotesComponent, 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
