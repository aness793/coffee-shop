import { Component } from '@angular/core';
import { coffee } from '../coffee';
import { FoodService } from '../services/food.service';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Route, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from 'express';
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterLink, TagsComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
element!:coffee;
gg?:string
  constructor(private foodservice:FoodService, private activatedroute:ActivatedRoute){
    this.activatedroute.params.subscribe((params)=>{
      if(params.id)
      this.element =foodservice.getById(params.id)
    this.gg = params.tag
    })
}

  
  
}
