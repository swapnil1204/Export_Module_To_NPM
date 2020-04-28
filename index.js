class MathematicalOperation{
    
    constructor(paramOne,paramTwo) {
        this.paramOne = paramOne;
        this.paramTwo = paramTwo;
    }

    sum() {
    return this.paramOne + this.paramTwo;
    }

    substract() {
    return this.paramOne - this.paramTwo;
    }

    multiply() {
    return this.paramOne * this.paramTwo;
    }

    division() {
    return this.paramOne / this.paramTwo;
    }

    square() {
        return this.paramOne * this.paramOne;
    }

    squareRoot() {
        return Math.sqrt(this.paramOne);
    }
}

 module.exports = MathematicalOperation;
 