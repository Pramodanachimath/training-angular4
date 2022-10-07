import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courseparent',
  templateUrl: './courseparent.component.html',
  styleUrls: ['./courseparent.component.css']
})
export class CourseparentComponent implements OnInit {
parentmess1='From parent1 - great day'
parentmess2='From parent2 - welcome'

childone=''
childtwo=''

constructor() { }

  ngOnInit(): void {
  }

}
