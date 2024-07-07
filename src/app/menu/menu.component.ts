import { Component, NgModule } from '@angular/core';
import { coffee } from '../coffee';
import { CommonModule } from '@angular/common';
import { cofee } from '../data';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TagsComponent } from '../tags/tags.component';
import { FoodService } from '../services/food.service';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, TagsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
food:coffee[]=[]
gg?:string
constructor(private activatedroute:ActivatedRoute , private foodservice:FoodService){
this.activatedroute.params.subscribe((params)=>{
  if (params.tag)
      {this.food = this.foodservice.getByTag(params.tag)
      this.gg = params.tag}
  else 
    this.food = cofee
})
}

}
