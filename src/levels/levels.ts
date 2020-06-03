import Block from "../models/block";
import Level1 from "./level1";
import Level2 from "./level2";
import Level3 from "./level3";

const LEVELS: Array<() => Block[]> = [Level3, Level2, Level3];

export default LEVELS;
