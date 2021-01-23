import { Component, OnInit } from '@angular/core';
import { GameboardService } from './gameboard.service';
import { Protocol } from '../models/protocol';
import { Matrix } from '../models/matrix';
import { MaxtrixActivity } from '../models/matrixactivity';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent {
//TODO: Add difficulties in future?
  protocol: Protocol;
  public board: String[];
  public boardConstants: String[] = ["BD","55","E9","FF","7A","1C","D5"];

  activeLine: MaxtrixActivity = new MaxtrixActivity(0, true, 0, false);
  activeArray: Matrix[] = [];
  activeMatrix: Matrix[][] = [];
  
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
    this.activeMatrix = this.protocol.matrix;
  }

  initializeBoard(){
    //this._gbservice
  }

  nextRound(){

  }

  gameOver(){

  }

  //UI Functions
  setActiveRow(row:Matrix[]){
    if(this.activeLine.rowActive){
      let rowActivity = {
          rowActive: this.activeLine.activeRowNumber == row[0].rowIndex,
          //rowNotActive: this.activeLine.activeRowNumber != row[0].rowIndex
      }
    this.activeArray = row;
    return rowActivity;
    }
  }

  setActiveColumn(column:number){
    if(this.activeLine.colActive){
      let colActivity = {
          colActive: this.activeLine.activeColNumber == column,
          //rowNotActive: this.activeLine.activeRowNumber != row[0].rowIndex
      }
      //this.activeArray = row;
      let matrixlength = this.activeMatrix.length;
      var array: Matrix[] = [];
      for(let i = 0; i < matrixlength; i++){
        array.push(this.activeMatrix[column][i]);
      }
      return colActivity;
    }
  }

  colhover(){

  }

  cellActivity(rowValue: Matrix) {
    let cellActivity = {
      active: rowValue.active == true,
      notactive: rowValue.active == false
    }
    return cellActivity;
  }

  seeallvalues(){

  }

  matrixSelection(rowValue: Matrix){
    //Row Active
    if(rowValue.rowIndex == this.activeLine.activeRowNumber 
          && this.activeLine.rowActive && rowValue.active){
      this.activeLine.rowActive = false;
      this.activeLine.activeColNumber = rowValue.colIndex;
      this.activeLine.colActive = true;
      rowValue.active = false;
      this.protocol.buffer.push(rowValue.value);
    //Col Active
    } else if (rowValue.colIndex == this.activeLine.activeColNumber 
          && this.activeLine.colActive && rowValue.active) {
      this.activeLine.rowActive = true;
      this.activeLine.activeRowNumber = rowValue.rowIndex;
      this.activeLine.colActive = false;
      rowValue.active = false;
      this.protocol.buffer.push(rowValue.value);
    } else {
      console.log("NOT ACTIVE CELL");
    }
  }

}
