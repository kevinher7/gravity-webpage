import { movementParameters } from "./handleCollapse.js";
import { intervalId } from "./handleCollapse.js";

const stopCollapse = () => {
	clearInterval(intervalId[0]);
	intervalId[0] = 0;

	movementParameters[0] = 1;
	movementParameters[1] = 0;

	const stopCollapseButton: HTMLDivElement = document.querySelectorAll(
		".stop-collapse-button"
	)[0] as HTMLDivElement;

	stopCollapseButton.className = "collapse-button";
	stopCollapseButton.textContent = "Collapse";

	return 0;
};

export default stopCollapse;
