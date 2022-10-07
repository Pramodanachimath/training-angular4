import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp-child',
  templateUrl: './comp-child.component.html',
  styleUrls: ['./comp-child.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class CompChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
