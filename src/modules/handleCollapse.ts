import collapseObjects from "./collapseObjects.js";

const frameRate: number = 120;
const interval: number = 1000 / frameRate;

const handleCollapse = (intervalId: number): number => {
	if (!intervalId) {
		intervalId = setInterval(collapseObjects, interval, intervalId);
	}

	const collapseButton: HTMLDivElement = document.querySelectorAll(
		".collapse-button"
	)[0] as HTMLDivElement;

	collapseButton.className = "stop-collapse-button";
	collapseButton.textContent = "Un-Collapse";

	return intervalId;
};

export default handleCollapse;
