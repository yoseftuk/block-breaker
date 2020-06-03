import {BlockTypes} from "../consts";
import Rect from "./rect";

export default class Block {
    static readonly WIDTH = 30;
    rect: Rect;
    type: BlockTypes;
    progress: number = 0;
    name: string;
    constructor(x: number, y: number, type: BlockTypes) {
        this.rect = new Rect(x * Block.WIDTH, y * Block.WIDTH, Block.WIDTH, Block.WIDTH);
        this.type = type;
        this.name = ['green', 'yellow', 'red'][type];
    }
    hit() {
        this.progress++;
    }
    src() {
        return `./media/block.${this.name}.${this.progress+1}.png`;
    }
}
