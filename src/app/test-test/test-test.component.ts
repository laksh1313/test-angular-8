import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from  '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-test',
  templateUrl: './test-test.component.html',
  styleUrls: ['./test-test.component.css']
})
export class TestTestComponent implements OnInit {
  employDetails; 
  title="title";
  message; 

  constructor(
    private apiservice:ApiService,
    private authService:AuthService,
    private router:Router
    ) { }
  
  ngOnInit() { 
    this.apiservice.getEmployeeDetails().subscribe((data)=>{
      this.employDetails = data; 
      console.log(this.employDetails);  
    });   
  }

  logout(){
    this.authService.logout();
    let isSessionSet = this.authService.isLoggedIn();
    if(isSessionSet == false){
       this.router.navigate(['/','login']);
    }
    else{
       this.message = "Sorry something went wrong"; 
    }

  }

}
