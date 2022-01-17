import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../ingredients';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredients[]=[
    new Ingredients('Tomatoes',5),
    new Ingredients('Patatoes',7)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
