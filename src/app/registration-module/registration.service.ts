import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  registrationWebsrvice(params){
    return this.http.post('http://localhost/Rumpur/webservices/webservice/registration',params, {
      });
  }
}
