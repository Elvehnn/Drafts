var Calculator = function() {
    result = 0;
  
    this.getResult = function () {
      return this.result;
    };
  
    this.reset = function () {
      this.result = 0;
      return this.result;
    };
      
    this.add = function(a) {
      var acc;
      if (a === undefined) {
        acc = 0;
      } else {
        acc = this.result + a;
        this.result = acc;
      }
      let n = (b) => {
        if (b !== undefined) {
          acc += b;
          this.result = acc;
        } else {
          acc = 0;
        }
      return n;
      }
      return n;
    };
    
    this.subtract = function(a) {
      var acc;
      if (a === undefined) {
        acc = 0;
      } else {
        acc = this.result - a;
        this.result = acc;
      }
      let n = (b) => {
        if (b !== undefined) {
          acc -= b;
          this.result = acc;
        } else {
          acc = 0;
        }
      return n;
      }
      return n;
    };
    
    this.divide = function(a) {
      var acc;
      if (a === undefined) {
        acc = 0;
      } else {
        acc = this.result / a;
        this.result = acc;
      }
      let n = (b) => {
        if (b !== undefined) {
          acc = acc / b;
          this.result = acc;
        } else {
          acc = 0;
        }
      return n;
      }
      return n;
    };
  
    this.multiply = function(a) {
      var acc;
      if (a === undefined) {
        acc = 0;
      } else {
        acc = this.result * a;
        this.result = acc;
      }
      let n = (b) => {
        if (b !== undefined) {
          acc = acc * b;
          this.result = acc;
        } else {
          acc = 0;
        }
      return n;
      }
      return n;
    };
  }
  
  module.exports = Calculator;