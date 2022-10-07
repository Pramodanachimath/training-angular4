import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  choice:string=''
  propertyName:string=''
  courses:Course[]=[
      new Course('Java','Backend',2000,'offline','Pramod'),
      new Course('Angular','Frontend',12000,'offline'),
      new Course('Spring','Backend',8000,'online','Virat'),
      new Course('Cucumber','Testing',1000,'online'),
      new Course('Selenium','Testing',1000,'offline'),
      new Course('React','Frontend',10000,'offline','Jinto')
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
