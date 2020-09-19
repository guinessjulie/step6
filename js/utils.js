import Point from './Point.js'
export function getCanvasCoords(e, canvas){
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    return new Point(x, y);
}