import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output('feature') featureToBeAdded=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onDisplayFeature(eventData:string){
    this.featureToBeAdded.emit(eventData);
  }

}
