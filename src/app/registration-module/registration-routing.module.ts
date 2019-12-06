import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationModuleComponent } from './registration-module.component';


const routes: Routes = [
    {
        path: 'registration_module',
        component: RegistrationModuleComponent
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
