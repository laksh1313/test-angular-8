import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RegistrationModuleComponent } from './registration-module.component';
import { RegistrationRoutingModule } from './registration-routing.module';


@NgModule({
    declarations: [RegistrationModuleComponent],
    imports: [
        BrowserModule, 
        RegistrationRoutingModule,
        FormsModule
    ]
  })

export class RegistrationModuleModule { }
