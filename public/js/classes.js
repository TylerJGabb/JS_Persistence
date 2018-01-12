class MyPoint {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }

  moveTo(x,y){
    this.x = x;
    this.y = y;
  }

  toString(){
    return "{ x : " + this.x + ", y: " + this.y + " }";
  }

}
