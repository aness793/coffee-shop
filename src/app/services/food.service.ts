import { Injectable } from '@angular/core';
import { cofee } from '../data';
import { coffee } from '../coffee';
import { StreamOptions } from 'stream';
import { elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
food!:coffee[]
  constructor() { 
  }
  getById(id:number):coffee{
    return cofee.find(one=>one.id == id) ?? new coffee()
  }
  getByTag(tag:string):coffee[]{
    return cofee.filter(food => food.tags!.includes(tag))
  }
}
