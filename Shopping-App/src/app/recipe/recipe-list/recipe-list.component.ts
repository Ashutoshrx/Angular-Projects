import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies:Recipe[]=[
    new Recipe('Chicken Pakoda','This is a recipe for making chicken pakoda','https://www.whiskaffair.com/wp-content/uploads/2020/06/Chicken-Pakora-2-3.jpg'),
    new Recipe('Masala Dosa','This is how we make a Masala Dosa','https://www.palatesdesire.com/wp-content/uploads/2019/01/Gobi_masala_Dosa@palates_desire-scaled.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // createNewRecipe(){
  //   this.recipies.push(
  //     new Recipe();
  //   )
  // }

}
