import { movementParameters } from "./handleCollapse.js";

const gravityAcceleration = 0.001;

const accelerateObject = (object: HTMLDivElement): number => {
	const currentYPosition: number = Number(object.style.top.slice(0, -2));

	let [currentTime, previousDeltaY] = movementParameters;

	const currentDeltaY: number =
		(gravityAcceleration * currentTime ** 2) / 2 - previousDeltaY;

	object.style.top = `${currentYPosition + currentDeltaY}px`;
	// object.style.top = `${currentYPosition + 1}px`;

	currentTime += 1;
	movementParameters[0] = currentTime;
	movementParameters[1] = currentDeltaY;

	return 0;
};

export default accelerateObject;
