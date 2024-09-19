import addObject from "./modules/addObject.js";
import handleCollapse from "./modules/handleCollapse.js";
import stopCollapse from "./modules/stopCollapse.js";

let intervalId: number = 0;

const addButton: HTMLElement = document.querySelectorAll(
	".add-button"
)[0] as HTMLElement;

const collapseButton: HTMLElement = document.querySelectorAll(
	".collapse-button"
)[0] as HTMLElement;

addButton.addEventListener("click", addObject);
collapseButton.addEventListener("click", () => {
	if (!intervalId) {
		// Start Collapse
		intervalId = handleCollapse(intervalId);
	} else {
		// Stop Collapse
		stopCollapse(intervalId);
		intervalId = 0;
	}
});
