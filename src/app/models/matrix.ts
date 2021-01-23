export class Matrix {
    value: String;
    active: boolean;
    colIndex: Number;
    rowIndex: Number;
    constructor(value: String, colIndex: Number, rowIndex: Number, active: boolean){
        this.value = value;
        this.colIndex = colIndex;
        this.rowIndex = rowIndex;
        this.active = active;
    }
}
