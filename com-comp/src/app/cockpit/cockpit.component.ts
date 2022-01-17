import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated=new EventEmitter<{name:string,content:string}>();
  @Output() bluePrintAdded=new EventEmitter<{name:string,content:string}>();
  serverName:string='';
  serverContent:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    this.serverCreated.emit({name:this.serverName,content:this.serverContent})
  }
  onAddBluePrint(){
    console.log("button was clicked");
    this.bluePrintAdded.emit({name:this.serverName,content:this.serverContent});
    
  }

 
}
