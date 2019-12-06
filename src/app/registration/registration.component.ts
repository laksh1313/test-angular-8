import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  exportAs: 'ngForm'
})
export class RegistrationComponent implements OnInit {
  responseArray;
  message;  
  birthday = new Date(); // April 15, 1988

  constructor(
    private service:ApiService,
    private router: Router) { }

  ngOnInit() {
    
  }

  registerUsers(userdata){ 
    
    var data = this.formData(userdata);
 
    this.service.registerUsersWebservice(data).subscribe((response)=>{
        this.responseArray = response;
         //console.log(this.responseArray); 
        if(this.responseArray.status == 'true'){
            this.router.navigate(['/', 'test']);
        }else{
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
