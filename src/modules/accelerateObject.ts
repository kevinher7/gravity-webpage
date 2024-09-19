const gravityAcceleration = 5;

const accelerateObject = (
	object: HTMLDivElement,
	currentTime: number
): number => {
	const currentYPosition: number = Number(object.style.top.slice(0, -2));
	const deltaY: number = (gravityAcceleration * currentTime ** 2) / 2;

	object.style.top = `${currentYPosition + deltaY}px`;

	return currentTime++;
};

export default accelerateObject;
