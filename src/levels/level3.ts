import Block from "../models/block";
import {BlockTypes} from "../consts";

const Level3: ()=>Block[] = () => [
    ...Array.from(Array(15), (v, i:number) => new Block(2 + i, 17-i, BlockTypes.RED)),
    ...Array.from(Array(15), (v, i:number) => new Block(17 + i, 2+i, BlockTypes.RED)),
    ...Array.from(Array(13), (v, i:number) => new Block(4 + i, 17-i, BlockTypes.YELLOW)),
    ...Array.from(Array(13), (v, i:number) => new Block(17 + i, 4+i, BlockTypes.YELLOW)),

    ...Array.from(Array(9), (v, i:number) => new Block(8 + i, 17-i, BlockTypes.RED)),
    ...Array.from(Array(9), (v, i:number) => new Block(17 + i, 8+i, BlockTypes.RED)),
    ...Array.from(Array(7), (v, i:number) => new Block(10 + i, 17-i, BlockTypes.YELLOW)),
    ...Array.from(Array(7), (v, i:number) => new Block(17 + i, 10+i, BlockTypes.YELLOW)),

    ...Array.from(Array(4), (v,i: number) => new Block(3+i%2, 3+(+(i<2)), BlockTypes.GREEN)),
    ...Array.from(Array(4), (v,i: number) => new Block(29+i%2, 3+(+(i<2)), BlockTypes.GREEN)),
];
export default Level3;
