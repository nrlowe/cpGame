export class MaxtrixActivity {
    activeRowNumber: Number;
    rowActive: boolean;
    activeColNumber: Number;
    colActive: boolean;

    constructor(rowNum: Number, rowActive: boolean, colNum: Number, colActive: boolean){
        this.activeRowNumber = rowNum;
        this.rowActive = rowActive;
        this.activeColNumber = colNum;
        this.colActive = colActive;
    }
}