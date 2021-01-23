import { Matrix } from "./matrix";

export class Protocol {
    size: Number
    buffer: String[] = [];
    bufferLength: number;
    difficulty: Number
    score: Number
    firstSequence: String[];
    secondSequence: String[];
    thirdSequence: String[];
    matrix: Matrix[][];
    constructor(score: Number){
        this.score = score;
    }
}
