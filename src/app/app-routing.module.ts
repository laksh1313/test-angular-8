import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestTestComponent } from './test-test/test-test.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {  
    path: 'test',  
    component: TestTestComponent,
    canActivate: [AuthGuard]
  }, 
  {  
    path: 'registration',  
    component: RegistrationComponent 
  },
  {  
    path: '',  
    component: LoginComponent 
  }, 
  {  
    path: 'login',  
    component: LoginComponent 
  }

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
