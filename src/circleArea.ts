import { roundTo } from "round-to";
function circleArea(radius:number): number {
	return roundTo(Math.PI * radius ** 2, 3);
}

export default circleArea;