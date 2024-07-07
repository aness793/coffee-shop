import { Component } from '@angular/core';
import {tags} from '../data'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
tags=tags
gg?:string
constructor(private Activatedroute:ActivatedRoute){
  this.Activatedroute.params.subscribe((params)=>{
    if(params.tag)
      this.gg = params.tag
  })
}



}