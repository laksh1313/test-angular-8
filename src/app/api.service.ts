import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  //webservice to get the employ data
  getEmployeeDetails(){
    return this.httpClient.get("http://dummy.restapiexample.com/api/v1/employees"); 
  }
  
  //webservice for registration
  registerUsersWebservice(params){

     return this.httpClient.post('http://localhost/Rumpur/webservices/webservice/registration',params, {
      headers: new HttpHeaders({
        
         })
      });
  }

  //webservice call for login
  loginUserWebsrviceCall(params){
    
    return this.httpClient.post('http://localhost/Rumpur/webservices/webservice/loginUser',params, {
      headers: new HttpHeaders({
        
         })
      });
  }
}
