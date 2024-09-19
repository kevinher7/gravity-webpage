import collapseObjects from "./collapseObjects.js";

const frameRate: number = 120;
const interval: number = 1000 / frameRate;

export let intervalId: number[] = [0];
export let movementParameters: number[] = [1, 0]; // currentTime, previousDeltaY

const handleCollapse = (): number => {
	if (intervalId[0] === 0) {
		intervalId[0] = setInterval(collapseObjects, interval);
	}

	const collapseButton: HTMLDivElement = document.querySelectorAll(
		".collapse-button"
	)[0] as HTMLDivElement;

	collapseButton.className = "stop-collapse-button";
	collapseButton.textContent = "Un-Collapse";

	return intervalId[0];
};

export default handleCollapse;
