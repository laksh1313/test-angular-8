import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Location } from "@angular/common";
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  isHeaderExists;
  route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe(val => {
      
      if ((location.path() == "/login") || (location.path() == "") || (location.path() == "/registration")) {
        this.isHeaderExists = false; 
      } else {
        this.isHeaderExists = true; 
      }
    });
  }


}
