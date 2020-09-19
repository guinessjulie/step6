import { getCanvasCoords } from "./utils.js";

export default class Paint{
    constructor(canvasId){
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
    }
    init(){
        this.canvas.onmousedown = e => this.onMouseDown(e);
    }
    onMouseDown(e){
        this.screenSaved = this.ctx.getImageData(0,0,this.canvas.clientWidth, this.canvas.clientHeight);
        this.startPos = getCanvasCoords(e, this.canvas);
        this.canvas.onmousemove = e => this.onMouseMove(e);
        document.onmouseup = e => this.onMouseUp(e);
    }
    onMouseMove(e){
        this.ctx.put
        this.currentPos = getCanvasCoords(e, this.canvas);
        this.drawLine();
    }
    onMouseUp(e){
        this.canvas.onmousemove = null;
    }
    drawLine(){
        this.ctx.putImageData(this.screenSaved, 0, 0)
        this.ctx.beginPath();
        this.ctx.moveTo(this.startPos.x, this.startPos.y);
        this.ctx.lineTo(this.currentPos.x, this.currentPos.y);
        this.ctx.stroke();
    }
}