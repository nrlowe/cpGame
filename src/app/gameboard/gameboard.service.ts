import { Injectable, Input } from '@angular/core';
import { Protocol } from '../models/protocol';

@Injectable({
  providedIn: 'root'
 })
export class GameboardService {
  public protocol = Protocol;
  public boardConstants: String[] = ["BD","55","E9","FF","7A","1C","D5"];

  constructor() { }

  initializeBoard(){

  }

  initializeBuffer(protocol: Protocol){
    protocol.score = 0;

    // Starting sequence size is 2

    protocol.difficulty = 0;
    protocol.firstSequence = this.produceSeriesOne(protocol);
    protocol.matrix = this.produceMatrix(3, this.randomizeSequnces(protocol))
    return protocol;
  }

  produceBuffer(){

  }

  produceMatrix(size: number, sequence:String[]){
    //Sequence as a maze through the matrix
    //how to make it recursive?
    var matrixSize = size + 1;
    var row = 0;
    var column = 0;
    var matrix: String[][] = [];
    //combine the sequences together so its one sequnce, not array of sequences,
    //random configs based off difficulty
    for(let i = 0; i < matrixSize; i++){
      var rowArray :String[] = [];
      for(let j = 0; j < matrixSize; j++){
        rowArray.push(this.boardConstants[this.randomInt(this.boardConstants.length)]);
      }
      matrix.push(rowArray);
    }
    //TODO
    var firstPlacement = this.randomInt(matrixSize);
    for(let i = 0; i < sequence.length; i++){
      if(matrix[firstPlacement][column] == null){
        matrix[firstPlacement][column] = sequence[i];
        row = firstPlacement;
      }
    }
    
    return matrix;
  }

  private randomizeSequnces(protocol:Protocol){
      var finalSequence: String[] = [];
      var choices: Number[] = [];
      var notRandom: boolean = true;
      var numOfSequences = 1;
      if(typeof protocol.firstSequence !== 'undefined'){
        numOfSequences++;
      }
      if(typeof protocol.secondSequence !== 'undefined'){
        numOfSequences++;
      }
      if(typeof protocol.thirdSequence !== 'undefined'){
        numOfSequences++;
      }
      //TODO: beter way to do this
      while(choices.length != numOfSequences){
        var input = this.randomInt(numOfSequences);
        console.log(input);
        if(input == 1 && !choices.includes(2)){
          finalSequence = finalSequence.concat(protocol.firstSequence);
          choices.push(input);
        } else if (input == 2 && !choices.includes(2)){
          finalSequence = finalSequence.concat(protocol.secondSequence);
          choices.push(input);
        } else if(input == 3 && !choices.includes(3)){
          finalSequence = finalSequence.concat(protocol.thirdSequence);
          choices.push(input);
        }
      }
      return finalSequence;
  }

  private produceSeriesOne(protocol: Protocol){
    var seriesOneSize = 0;
    if(protocol.difficulty == 0){
        seriesOneSize = 2;
    }
    return this.constructBuffer(seriesOneSize);
  }

  private constructBuffer(length: Number){
    var bufferArray: String[] = [];
    for(var i = 0; i < length; i++){
      var num = this.randomInt(this.boardConstants.length)
      bufferArray.push(this.boardConstants[num]);
    }
    return bufferArray;
  }

  private randomInt(max: number){
      return Math.floor(Math.random() * Math.floor(max));
  }

}
