import addObject from "./modules/addObject.js";
import handleCollapse from "./modules/handleCollapse.js";
import stopCollapse from "./modules/stopCollapse.js";
import { intervalId } from "./modules/handleCollapse.js";

// let intervalId: [number] = [0];

const addButton: HTMLElement = document.querySelectorAll(
	".add-button"
)[0] as HTMLElement;

const collapseButton: HTMLElement = document.querySelectorAll(
	".collapse-button"
)[0] as HTMLElement;

addButton.addEventListener("click", addObject);

collapseButton.addEventListener("click", () => {
	if (intervalId[0] === 0) {
		// Start Collapse
		intervalId[0] = handleCollapse();
	} else {
		// Stop Collapse
		stopCollapse();
	}
});
