export default class Rect {
    private x: number;
    private y: number;
    private w: number;
    private h: number;
    constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    top(): number {
        return this.y;
    }
    left(): number {
        return this.x;
    }
    right(): number {
        return this.x + this.w;
    }
    bottom(): number {
        return this.y + this.h;
    }
    width(): number {
        return this.w;
    }
    height(): number {
        return this.h;
    }
    setTop(top: number) {
        this.y = top;
    }
    setLeft(left: number) {
        this.x = left;
    }
    setBottom(bottom: number) {
        this.y = bottom - this.h;
    }
    setRight(right: number) {
        this.x = right - this.w;
    }
    setWidth(width: number) {
        this.w = width;
    }
    setHeight(height: number){
        this.h = height;
    }
}
