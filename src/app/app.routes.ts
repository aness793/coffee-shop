import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import {TagsComponent} from './tags/tags.component'

export const routes: Routes = [
    {path:'', component:MenuComponent},
    {path:'menu', component:MenuComponent},
    {path:'details', component:DetailsComponent},
    {path:'tags/:tag', component:MenuComponent},
    {path:'menu/:id', component:DetailsComponent},
    {path:'tag', component:TagsComponent},
    
];
