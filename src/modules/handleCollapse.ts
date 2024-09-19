import collapseObjects from "./collapseObjects.js";

const frameRate: number = 120;
const interval: number = 1000 / frameRate;

export let movementParameters: [number, number] = [1, 0]; // currentTime, previousDeltaY

const handleCollapse = (intervalId: number): number => {
	if (!intervalId) {
		intervalId = setInterval(collapseObjects, interval);
	}

	const collapseButton: HTMLDivElement = document.querySelectorAll(
		".collapse-button"
	)[0] as HTMLDivElement;

	collapseButton.className = "stop-collapse-button";
	collapseButton.textContent = "Un-Collapse";

	return intervalId;
};

export default handleCollapse;
