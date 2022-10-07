import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial',
  // templateUrl: './trial.component.html',

  template:`
  <h2> This is traisl</h2>
  <ol>
  <li>appple</li>
  <li>orange</li>
  <li>kiwi</li>
  `,
  styles:[
    `h2{color:green}
    ol>li{color:red}`
  ]
  

  // styleUrls: ['./trial.component.css']
})
export class TrialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
