import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // serverElements=[];
  serverName:String='';
  serverContent:String=''

  constructor() { }

  ngOnInit(): void {
  }
  
  onAddServer(){
    console.log("Button1 was clicked");
    // this.serverElements.push({
    //     type:'server',
    //     name:this.serverName,
    //     content:this.serverContent
    //   });
    

    
  }
  onAddBluePrint(){
    console.log("button2 was clicked");
    // this.serverElements.push({
    //   type='bluePrint',
    //   name=this.serverName,
    //   content=this.serverContent
    // });
    
  }

}
