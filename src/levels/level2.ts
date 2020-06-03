import Block from "../models/block";
import {BlockTypes} from "../consts";

const Level2: ()=>Block[] = () => [
    ...Array.from(Array(15), (v, i:number) => new Block(2 + i, i, BlockTypes.RED)),
    ...Array.from(Array(15), (v, i:number) => new Block(17 + i, 14-i, BlockTypes.RED)),
    ...Array.from(Array(14), (v, i:number) => new Block(3 + i, i, BlockTypes.YELLOW)),
    ...Array.from(Array(14), (v, i:number) => new Block(17 + i, 13-i, BlockTypes.YELLOW)),
    ...Array.from(Array(15), (v, i:number) => new Block(2 + i*2, 15, BlockTypes.GREEN))
];
export default Level2;
