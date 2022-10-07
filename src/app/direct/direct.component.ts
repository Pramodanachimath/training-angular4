import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {

  // username:string='Pramod';
  // itemName!:string;
  // successclass="myclass"
  // errorclass="myerror";
  //  itemlist="mylist"
  // items=['Dosa','Idli','Avalakki','vada','Jamun'];

  myclass="mytype";

  // courses:Course[]=[
  //   new Course('Java','Backend',2000,'offline','Pramod'),
  //   new Course('Angular','Frontend',12000,'offline'),
  //   new Course('Spring','Backend',8000,'online','Virat'),
  //   new Course('Cucumber','Testing',1000,'online'),
  //   new Course('Selenium','Testing',1000,'offline'),
  //   new Course('React','Frontend',10000,'offline','Jinto')
  // ]

  birthday='2022-09-08T11:43:00';
  
  employee={
    name:'Pramod',
    salary:200000,
    city:'Bang'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
