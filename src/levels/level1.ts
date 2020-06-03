import Block from "../models/block";
import {BlockTypes} from "../consts";

const Level1: ()=>Block[] = () => [
    ...Array.from(Array(15), (v, i: number) => new Block(2 + i * 2, 5, BlockTypes.GREEN)),
    ...Array.from(Array(14), (v, i: number) => new Block(3 + i * 2, 6, BlockTypes.YELLOW)),
    ...Array.from(Array(15), (v, i: number) => new Block(2 + i * 2, 7, BlockTypes.GREEN)),
    ...Array.from(Array(14), (v, i: number) => new Block(3 + i * 2, 8, BlockTypes.YELLOW)),
    ...Array.from(Array(15), (v, i: number) => new Block(2 + i * 2, 9, BlockTypes.GREEN)),
    ...Array.from(Array(14), (v, i: number) => new Block(3 + i * 2, 10, BlockTypes.YELLOW)),
    ...Array.from(Array(15), (v, i: number) => new Block(2 + i * 2, 11, BlockTypes.GREEN)),
    ...Array.from(Array(14), (v, i: number) => new Block(3 + i * 2, 12, BlockTypes.YELLOW)),
];

export default Level1;
