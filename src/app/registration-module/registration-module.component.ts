import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-module',
  templateUrl: './registration-module.component.html',
  styleUrls: ['./registration-module.component.css']
})
export class RegistrationModuleComponent implements OnInit {
  message; 
  responseData; 
  constructor(private service:RegistrationService) { }

  ngOnInit() {
  }

registerUsers(UserDetails){
    
    var data = this.formData(UserDetails);

    this.service.registrationWebsrvice(data).subscribe((response)=>{
      this.responseData = response;
      if(this.responseData.status == 'true'){
          console.log('Successful uploaded'); 
      }
      else{
         this.message = this.responseData.message; 
      }
  });
}

  formData(UserDetails){
   let inputDetails = new FormData();
   inputDetails.append('email', UserDetails.email);
   inputDetails.append('password', UserDetails.password);
   
   return inputDetails;
  }

}
