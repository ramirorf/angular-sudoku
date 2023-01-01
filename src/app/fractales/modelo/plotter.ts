
export class Plotter {

    context2D: CanvasRenderingContext2D;
    x: number;
    y: number;
    angle : number;

    public constructor(context2D: CanvasRenderingContext2D) {
        this.context2D = context2D;
        this.x = 0;
        this.y = 0;
        this.angle = 0;
    }

    public setPosition(x: number, y: number) {
        this.x=x;
        this.y=y;
        this.context2D.moveTo(x, y);
        console.log(" position x = "+this.x+" y = "+this.y);
    }

    public draw( module: number, angleDegrees: number) {
        this.angle+=angleDegrees;
        this.x+=Math.cos(this.angle*Math.PI/180)*module;
        this.y-=Math.sin(this.angle*Math.PI/180)*module;
        this.context2D.lineTo(this.x, this.y);
        console.log("line to x = "+this.x+" y = "+this.y + " angle = " + this.angle);
    }
    
    public increaseAngle(angleDegrees: number) {
        this.angle+=angleDegrees;
    }
  
 }