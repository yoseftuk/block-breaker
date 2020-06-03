import plank from "../models/plank";
import ball from "../models/ball";
import {SpeedModes} from "../consts";
import {isGameOver, newGame} from "./dom";

export const initKeyboard = () => {
    document.addEventListener('keydown', e => {
        switch (e.code) {
            case 'ArrowRight':
                plank.speed = plank.SPEED;
                break;
            case 'ArrowLeft':
                plank.speed = -plank.SPEED;
                break;
            case 'ArrowUp':
                ball.speedMode = SpeedModes.HIGH_SPEED;
                break;
            case 'Space':
                if(isGameOver()) newGame();
        }
    });
    document.addEventListener('keyup', e => {
        switch (e.code) {
            case 'ArrowRight':
                if (plank.speed === plank.SPEED) {
                    plank.speed = 0;
                }
                break;
            case 'ArrowLeft':
                if (plank.speed === -plank.SPEED) {
                    plank.speed = 0;
                }
                break;
            case 'ArrowUp':
                ball.speedMode = SpeedModes.REGULAR;
        }
    })
};
