import { Injectable, Input } from '@angular/core';
import { Buffer } from '../models/buffer';

@Injectable({
  providedIn: 'root'
})
export class GameboardService {
  public buffer = Buffer;
  public boardConstants: String[] = ["BD","55","E9","FF","7A","1C","D5"];

  constructor() { }

  initializeBoard(){

  }

  initializeBuffer(buffer: Buffer){
    buffer.score = 0;
    // Starting buffer size is 2
    //Change buffer object name to protocol? something else?
    buffer.difficulty = 0;
    buffer.series = 1;
    buffer.firstSequence = this.produceSeriesOne(buffer);
    return buffer;
  }

  produceBuffer(){

  }

  produceMatrix(size: Number, sequences:String[]){
    //Sequence as a maze through the matrix
    //how to make it recursive?
    var matrixSize = size + 1;
    var row = 0;
    var column = 0;
    String[][] matrix = String[matrixSize][matrixSize]
    //combine the sequences together so its one sequnce, not array of sequences,
    //random configs based off difficulty
    for(String[] sequence : sequences){
      var firstPlacement = randomInt(matrixSize);
      for(var i = 0; i < sequence.length; i++){
        if(matrix[firstPlacement][column] == null){
          matrix[firstPlacement][column] = sequence[i];
          row = firstPlacement;
        }
      }
    }
    return matrix;
  }

  private produceSeriesOne(buffer: Buffer){
    var seriesOneSize = 0;
    if(buffer.difficulty == 0){
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
