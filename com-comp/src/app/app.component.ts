import { Component, Output,EventEmitter } from '@angular/core';
// import {  } from 'stream';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: { type: string, name: string, content: string }[] = [
    // {type:'server',name:'Ashutosh',content:'TestServer'}
  ];

  onServerAdded(serverData: { name: string, content: string }) {
    console.log("Button was clicked");
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }
  onBluePrintAddedd(bluePrintData: { name: string, content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.name,
      content: bluePrintData.content
    });
  }


  odd:number[]=[];
  even:number[]=[];
  startCount = 0;
  onStartCount() {
    setInterval(() => {
      if(this.startCount%2===0){
        this.even.push(this.startCount);        
      }
      else{
        this.odd.push(this.startCount);
      }
      this.startCount++;
    }, 1000);
  }

  onRefresh(){
    window.location.reload();
  }
  

}
