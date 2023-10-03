// Your code here
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((acc, side) => acc + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    get isValid() {
      if (this.countSides === 3) {
        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a;
      }
      return false;
    }
  }
  
  class Square extends Polygon {
    get isValid() {
      if (this.countSides === 4) {
        const [a, b, c, d] = this.sides;
        return a === b && b === c && c === d;
      }
      return false;
    }
  
    get area() {
      if (this.isValid) {
        const side = this.sides[0];
        return side * side;
      }
      return undefined; 
    }
  }
  
 
  const triangle = new Triangle([3, 4, 5]);
  console.log(triangle.countSides); 
  console.log(triangle.perimeter); 
  console.log(triangle.isValid); 
  
  const square = new Square([5, 5, 5, 5]);
  console.log(square.countSides); 
  console.log(square.perimeter);
  console.log(square.isValid); 
  console.log(square.area); 
  