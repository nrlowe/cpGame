import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TitleComponent } from './title/title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { BoardComponent } from './gameboard/board/board.component';
import { BufferComponent } from './gameboard/buffer/buffer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    TitleComponent,
    NavbarComponent,
    GameboardComponent,
    BoardComponent,
    BufferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
