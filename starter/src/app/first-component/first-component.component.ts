import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  serverElements=[{type:'server',name:'Server-1',content:'This is a test server-1'},
                  {type:'server',name:'Server-2',content:'This is a test server-2'}];
  serverCreated:boolean=false;
  serverName: String = "";
  a!: Date;
  time!: String;
  date!:String;
  
  

  constructor() {
    setInterval(() => {
      this.a = new Date();
      this.time = `${this.a.getHours()}:${this.a.getMinutes()}: ${this.a.getSeconds()}`;
    }, 1000);
  }

  ngOnInit(): void {
  }

  addServer(){
    this.serverCreated=true;  
  }

  onReset() {
    this.serverCreated=false; 
    this.serverName='';
  }
  getColor(){
    return this.serverName===''? 'red':'green';
  }
  showDate(){
    
    if( document.getElementsByClassName('btn btn-info')[0].innerHTML==="Show Date"){
      document.getElementsByClassName('btn btn-info')[0].innerHTML="Hide Date";
      this.date=this.a.toLocaleDateString();
      return 'flex';
    }
    else{
      document.getElementsByClassName('btn btn-info')[0].innerHTML="Show Date";
      this.date="Developed By Ashutosh Satapathy";
      return 'none';
    }      
  }

  // This is how we toggle easily and efficiently
  showSecret:boolean=false;
  logItems:Number[]=[];
  isToggle(){
    this.showSecret=!this.showSecret;
    this.showSecret==false?document.getElementsByClassName('btn btn-danger')[0].innerHTML="Display Details":
                document.getElementsByClassName('btn btn-danger')[0].innerHTML="Hide Details"; 
    this.logItems.push(this.logItems.length+1);
    
  }
}

