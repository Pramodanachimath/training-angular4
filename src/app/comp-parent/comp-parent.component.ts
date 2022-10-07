import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp-parent',
  templateUrl: './comp-parent.component.html',
  styleUrls: ['./comp-parent.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class CompParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
