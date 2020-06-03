import ball from '../models/ball';
import plank from '../models/plank';
import {CANVAS_HEIGHT, CANVAS_WIDTH, GRAVITY, SpeedModes} from "../consts";
import LEVELS from "../levels/levels";
import Block from "../models/block";
import {gameOver} from "./dom";

export default class Renderer {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    run: boolean = false;
    imgMemo: { [src: string]: HTMLImageElement } = {};
    static activeLevel: Block[];
    static levelIdx: number = 0;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.canvas.width = CANVAS_WIDTH;
        this.canvas.height = CANVAS_HEIGHT;
        this.ctx = <CanvasRenderingContext2D>this.canvas.getContext('2d');
        Renderer.activeLevel = LEVELS[Renderer.levelIdx]();
    }

    start() {
        this.run = true;
        this.renderLoop();
    }

    pause() {
        this.run = false;
    }

    private renderLoop() {
        if (!this.run) return;
        this.drawBall();
        this.drawPlank();
        this.drawBlocks();
        requestAnimationFrame(this.renderLoop.bind(this));
    }

    drawBall() {
        ball.move();
        if(ball.speedMode == SpeedModes.HIGH_SPEED) {
            ball.move();
        }
        if(ball.y > CANVAS_HEIGHT) {
            gameOver();
        }
        this.ctx.beginPath();
        this.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        this.ctx.fillStyle = ball.COLOR;
        this.ctx.arc(ball.x, ball.y, ball.RADIUS, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.closePath();
    }
    drawPlank() {
        plank.move();
        this.ctx.beginPath();
        this.ctx.fillStyle = plank.COLOR;
        this.ctx.fillRect(plank.rect.left(), plank.rect.top(), plank.rect.width(), plank.rect.height());
        this.ctx.closePath();
        if (ball.checkHit(plank.rect)) {
            ball.y = plank.rect.top() - ball.RADIUS;
            ball.speedY = -ball.speedYAt(ball.y) - GRAVITY;
            ball.speedX += Math.sign(plank.speed);
        }
    }
    drawBlocks() {
        let levelUp: boolean = true;
        for (const block of Renderer.activeLevel) {
            if (block.progress > block.type) continue;
            levelUp = false;
            this.loadImage(block.src()).then(img => {
                const {rect} = block;
                this.ctx.drawImage(img, rect.left(), rect.top(), rect.width(), rect.height());
                if (ball.checkHit(rect)) {
                    block.progress++;
                    if (ball.y - rect.top() < ball.x - rect.left() &&
                        ball.y - rect.top() < rect.right() - ball.x ||
                        rect.bottom() - ball.y < ball.x - rect.left() &&
                        rect.bottom() - ball.y < rect.right() - ball.x) {
                        ball.speedY = ball.speedY * -1 - GRAVITY;
                    } else {
                        ball.speedX *= -1;
                    }
                }
            });
        }
        if (levelUp) {
            Renderer.levelIdx = (Renderer.levelIdx+1) % LEVELS.length;
            Renderer.activeLevel = LEVELS[Renderer.levelIdx]();
        }
    }

    loadImage(url: string): Promise<HTMLImageElement> {
        return new Promise<HTMLImageElement>((resolve, reject) => {
            if (this.imgMemo[url]) {
                resolve(this.imgMemo[url]);
            } else {
                const img = new Image();
                img.onload = () => {
                    this.imgMemo[url] = img;
                    resolve(img);
                };
                img.onerror = () => reject('image not loaded');
                img.src = url;
            }
        });
    }

}
