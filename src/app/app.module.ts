import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TestTestComponent } from './test-test/test-test.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { PersonNamePipe } from './person-name.pipe';
import { LoginComponent } from './login/login.component';
import { RegistrationModuleModule } from './registration-module/registration-module.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [  


];  

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestTestComponent,
    RegistrationComponent,
    PersonNamePipe,
    LoginComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RegistrationModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
