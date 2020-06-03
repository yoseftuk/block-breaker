import {CANVAS_HEIGHT, CANVAS_WIDTH} from "../consts";
import Rect from "./rect";

class Plank {
    rect: Rect;
    readonly COLOR: string = '#83f0eb';
    readonly SPEED = 16;
    speed: number = 0;

    constructor() {
        this.rect = new Rect(CANVAS_WIDTH / 2 - 95, CANVAS_HEIGHT - 90, 190, 18);

    }
    move() {
        this.rect.setLeft(Math.min(Math.max(0, this.rect.left() + this.speed), CANVAS_WIDTH - this.rect.width()));
    }

}

export default new Plank();
