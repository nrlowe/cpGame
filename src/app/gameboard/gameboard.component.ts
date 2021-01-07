import { Component, OnInit } from '@angular/core';
import { GameboardService } from './gameboard.service';
import { Protocol } from '../models/protocol';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent {
//TODO: Add difficulties in future?
  public protocol: Protocol;
  public board: String[];
  public boardConstants: String[] = ["BD","55","E9","FF","7A","1C","D5"];

  constructor(private _gbservice : GameboardService) {

  //   this.board = [];
  //   for(var i = 0; i < 5; i++){
  //     this.board.push(i.toString());
  //   }
  //   this.buffer = String['55'];
  }

  ngOnInit(): void {
    this.protocol = new Protocol(0);
    this._gbservice.initializeBuffer(this.protocol);
  }

  initializeBoard(){
    //this._gbservice
  }

  nextRound(){

  }

  gameOver(){

  }

}
