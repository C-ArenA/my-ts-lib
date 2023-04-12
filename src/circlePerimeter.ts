import { roundTo } from "round-to";
function circlePerimeter(radius:number) : number {
	return roundTo(2 * Math.PI * radius, 3);
}

export default circlePerimeter;