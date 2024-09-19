import { movementParameters } from "./handleCollapse.js";

const stopCollapse = (intervalId: number) => {
	clearInterval(intervalId);

	movementParameters[0] = 1;
	movementParameters[1] = 0;

	const stopCollapseButton: HTMLDivElement = document.querySelectorAll(
		".stop-collapse-button"
	)[0] as HTMLDivElement;

	stopCollapseButton.className = "collapse-button";
	stopCollapseButton.textContent = "Collapse";
};

export default stopCollapse;
