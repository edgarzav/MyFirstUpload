import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, fadeInUpOnEnterAnimation, bounceOutDownOnLeaveAnimation } from 'angular-animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    fadeInUpOnEnterAnimation({ anchor: 'enter', duration: 500, delay: 10, translate: '15px' }),
    bounceOutDownOnLeaveAnimation({ anchor: 'leave', duration: 500, delay: 10, translate: '40px' })
  ] 
})
export class AboutComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }

}
