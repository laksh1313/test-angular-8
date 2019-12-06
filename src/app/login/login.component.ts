import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { User } from  '../user';
import { AuthService } from  '../auth.service';
import { ApiService } from '../api.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  responseArray; 
  message; 

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private formBuilder: FormBuilder, 
    private apiService: ApiService
     ) { }


  ngOnInit() {
  }
  login(UserDetails){
 
    var data = this.formData(UserDetails);
    this.apiService.loginUserWebsrviceCall(data).subscribe((response)=>{
          this.responseArray = response; 
          
          if(this.responseArray.status == 'true'){
              var auth = this.authService.login(UserDetails);
              var getItem = this.authService.isLoggedIn();

              if(getItem == true){
                  this.router.navigate(['/','test']);
              }
              else{
                  return this.message = "Something went wrong.";
              }
              console.log('getItem', getItem); 
          }
          else{
              return this.message = this.responseArray.message; 
          }
    });
  }

  formData(userdata){
    let input = new FormData();
    input.append('email', userdata.email);
    input.append('password', userdata.password);

    return input; 
   }
}
