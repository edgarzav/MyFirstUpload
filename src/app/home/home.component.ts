import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, fadeInUpOnEnterAnimation, bounceOutDownOnLeaveAnimation } from 'angular-animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fadeInUpOnEnterAnimation({ anchor: 'enter', duration: 500, delay: 10, translate: '15px' }),
    bounceOutDownOnLeaveAnimation({ anchor: 'leave', duration: 500, delay: 10, translate: '40px' })
  ] 


  

})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit() {
   
  }

}
