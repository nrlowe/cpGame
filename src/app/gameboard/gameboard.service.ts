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

  @Input()
  initializeBuffer(buffer: Buffer){
    buffer.score = 0;
    return buffer;
  }

  produceBuffer(){

  }

  produceMatrix(){

  }

}
