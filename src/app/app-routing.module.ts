import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { HomeComponent } from './home/home.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', component: TitleComponent},
  { path: 'home', component: HomeComponent},
  { path: 'list', component: ListComponent},
  { path: 'gameboard', component: GameboardComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
