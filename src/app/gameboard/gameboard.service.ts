import { Injectable, Input } from '@angular/core';
import { Matrix } from '../models/matrix';
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

  initializeGame(protocol: Protocol){
    protocol.score = 0;

    // Starting sequence size is 2

    protocol.difficulty = 0;
    protocol.firstSequence = this.produceSeriesOne(protocol);
    protocol.matrix = this.produceMatrix(1, this.randomizeSequnces(protocol))
    return protocol;
  }

  produceBuffer(){

  }

  produceMatrix(size: number, sequence:String[]){
    //Sequence as a maze through the matrix
    //how to make it recursive?
    var matrixSize = size + 1;
    var matrix: Matrix[][] = [];
    //combine the sequences together so its one seq unce, not array of sequences,
    //random configs based off difficulty
    for(let i = 0; i < matrixSize; i++){
      var rowArray :Matrix[] = [];
      for(let j = 0; j < matrixSize; j++){
        rowArray.push(new Matrix((this.boardConstants[this.randomInt(this.boardConstants.length)]), j, i, true)) ;
      }
      matrix.push(rowArray);
    }
    return this.loadSequenceOnMatrix(matrixSize, matrix, sequence);
  }

  private loadSequenceOnMatrix(size: number, matrix: Matrix[][], sequence:String[]){
    var row = 0;
    var column = this.randomInt(size);
    var columnActive = true;
    var rowActive = false;
    if(size > sequence.length){
      sequence.unshift(this.boardConstants[this.randomInt(this.boardConstants.length)]);
    } 
    for(let i = 0; i < sequence.length; i++){
      if(matrix[row][column].value != sequence[i] && columnActive){
        matrix[row][column].value = sequence[i];
        row = this.randomInt(size);
        rowActive = true;
        columnActive = false;
      }
      if(matrix[row][column].value != sequence[i] && rowActive){
        matrix[row][column].value = sequence[i];
        column = this.randomInt(size);
        rowActive = false;
        columnActive = true;
      }
    }
    // if solution is different than sequence, add to database as it has more than
    // correct answer
    return matrix;
  }

  private randomizeSequnces(protocol:Protocol){
      var finalSequence: String[] = [];
      var choices: Number[] = [];
      var notRandom: boolean = true;
      var numOfSequences = 0;
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
        console.log("Choices length = " + choices.length);
        console.log("Number length = " + numOfSequences);
        console.log("==============");
        var input = this.randomInt(numOfSequences + 1);
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
      console.log(finalSequence);
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
