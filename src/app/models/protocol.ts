export class Protocol {
    size: Number
    buffer: Number
    difficulty: Number
    score: Number
    firstSequence: String[];
    secondSequence: String[];
    thirdSequence: String[];
    constructor(score: Number){
        this.score = score;
    }
}
