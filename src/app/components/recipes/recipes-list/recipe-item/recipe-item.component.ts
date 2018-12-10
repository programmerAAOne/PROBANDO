import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() index: number;

  ngOnInit() {
  }

}
