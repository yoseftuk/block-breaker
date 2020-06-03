import {CANVAS_WIDTH, GRAVITY, SpeedModes} from "../consts";
import Rect from "./rect";

class Ball {
    readonly RADIUS: number = 15;
    readonly COLOR: string = '#ffffff';
    x: number;
    y: number;
    speedX: number = 0;
    speedY: number = 0;
    speedMode: SpeedModes = SpeedModes.REGULAR;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.speedY = this.speedYAt(y);
    }
    move() {
        this.speedY += GRAVITY;
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.x+this.RADIUS >= CANVAS_WIDTH) {
            this.x = CANVAS_WIDTH-this.RADIUS;
            this.speedX *= -1;
        }else if(this.x-this.RADIUS <= 0) {
            this.x = this.RADIUS;
            this.speedX *= -1;
        }
    }
    checkHit(rect: Rect) {
        rect = new Rect(rect.left() - this.RADIUS, rect.top() - this.RADIUS, rect.width() + 2 * this.RADIUS, rect.height() + 2 * this.RADIUS);
        return this.x > rect.left() && this.x < rect.right() && this.y > rect.top() && this.y < rect.bottom();
    }
    speedYAt(y: number) {
        // f''(t) = g; f'(t) = tg; f(t) = .5g(t^2) = y
        // y/(.5g) = t^2 => sqrt(y/(0.5g)) = t
        // v = f'(t) = f'(sqrt(y/(0.5g))) = sqrt(y/(0.5g))g
        return Math.sqrt(2*(y - this.RADIUS)/GRAVITY) * GRAVITY;
    }
}

export default new Ball(500, 500);
