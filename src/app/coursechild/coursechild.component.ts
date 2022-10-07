import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-coursechild',
  templateUrl: './coursechild.component.html',
  styleUrls: ['./coursechild.component.css']
})
export class CoursechildComponent implements OnInit {

  @Input()childData1=''
  @Input()childData2=''
  @Input("cdata")childData3=''
  cmessage="Weekend is coming"
  cresult=""

  @Output() cevent1 =new EventEmitter<string>();
  @Output() cevent2 =new EventEmitter<string>();

  showMessage=()=>{
    this.cmessage="Hi";
    this.cevent1.emit('Angular events')
  }
  printName=(uname:string)=>{
     this.cresult=`Hello ${uname}`
     this.cevent2.emit(`I am back!!! ${uname}`)
     this.cevent1.emit('Angular events')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
