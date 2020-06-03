import Renderer from './managers/renderer';
import {initKeyboard} from "./managers/keyboard";
import {canvas} from "./managers/dom";
const renderer: Renderer = new Renderer(canvas);
initKeyboard();
renderer.start();
