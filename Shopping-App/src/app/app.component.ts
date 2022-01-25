import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  addedFeature:string='home';

  addFeature(featureData:string){
      this.addedFeature=featureData;
  }
}
