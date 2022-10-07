import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
message:string='Angular is fun';
newmessage:string='Hi'
  employee={
    name:'Rahul',city:'Bangalore',salary:2000
  }

  logo='assets/images/image.jpg'
  flag=true
  mylogo='assets/images/image.jpg'
  myclass="green";
  newclass="orange";
 
  username!:string;

   change = ()=>{
         this.message='goodbye for now!!!';
         this.flag=false;
         this.mylogo='assets/images/img2.jpg'
  }

  greetuser=(username:string)=>{
    this.message='Bye Bye';
  }

newmessages!:string
  showUser=(username:string)=>{
     this.newmessages=`Tea time ${username}`;
  }

  constructor() { }

  ngOnInit(): void {
  }



}
