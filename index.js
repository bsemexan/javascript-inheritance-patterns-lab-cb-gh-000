function Point(x,y){this.x = x; this.y = y}

Point.prototype.toString = function(){
  return `(${this.x}, ${this.y})`
}

function Side(side){this.length = side}

function Shape(){}

Shape.prototype.addToPlane = function(x, y){
  this.position = new Point(x,y)
}

Shape.prototype.move = function(x,y){
  this.position = new Point(x,y)
}

function Circle(side){
  Shape.call(this)
  this.radius = side
}

Circle.prototype = Object.create(Shape.prototype)

Circle.prototype.diameter = function(){
  return this.radius ** 2
}

Circle.prototype.area = function(){
  return Math.PI * this.radius ** 2
}

Circle.prototype.circumference = function(){
  return 2 * Math.PI * this.radius
}

function Polygon(sides){
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype)

Polygon.prototype.perimeter = function(){
  var p = 0;
  for(var i=0;i< this.sides.length; i++) {
    p += this.sides[i].length;
  }
  return(p);
}

Polygon.prototype.numberOfSides = function(){
  return this.sides.length;
}

function Quadrilateral(sideOneLength, sideTwoLength, sideThreeLength, sideFourLength){
  Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength), new Side(sideFourLength)]);
}

Quadrilateral.prototype = Object.create(Polygon.prototype)

function Rectangle(w, h){
  Quadrilateral.call(this,w,h,w,h)
  this.width = w
  this.height = h
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.area = function(){
  return this.width * this.height
}
function Square(side){
  Rectangle.call(this, side, side)
  this.length = side
}

Square.prototype = Object.create(Rectangle.prototype)

Square.prototype.listProperties = function() {
  var props = "";
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      props += "this." + prop + " = " + this[prop] + "\n";
    }
  }
  return(props);
}

function Triangle(sideOne, sideTwo, sideThree){
  Polygon.call(this, [new Side(sideOne), new Side(sideTwo), new Side(sideThree)])
}

Triangle.prototype = Object.create(Polygon.prototype)
