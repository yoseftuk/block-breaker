import ball from "../models/ball";
import plank from "../models/plank";
import Rect from "../models/rect";
import {CANVAS_HEIGHT, CANVAS_WIDTH} from "../consts";
import Renderer from "./renderer";
import LEVELS from "../levels/levels";

export const canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector('canvas');
const gameOverEl: HTMLParagraphElement = <HTMLParagraphElement>document.querySelector('#game-over');
let _isGameOver: boolean = false;
export const isGameOver: ()=>boolean = ()=>_isGameOver;
export const gameOver = () => {
    gameOverEl.style.display = '';
    _isGameOver = true;
};
export const newGame = () => {
    _isGameOver = false;
    gameOverEl.style.display = 'none';
    // init ball
    ball.x = 500;
    ball.y = 500;
    ball.speedY = ball.speedYAt(ball.y);
    ball.speedX = 0;
    // init plank
    plank.rect = new Rect(CANVAS_WIDTH / 2 - 95, CANVAS_HEIGHT - 90, 190, 18);
    // init level
    Renderer.activeLevel = LEVELS[Renderer.levelIdx]();
};
