import { Matrix } from "./matrix";

export class Protocol {
    size: Number
    buffer: Number
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
