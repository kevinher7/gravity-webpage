const stopCollapse = (intervalId: number) => {
	clearInterval(intervalId);

	const stopCollapseButton: HTMLDivElement = document.querySelectorAll(
		".stop-collapse-button"
	)[0] as HTMLDivElement;

	stopCollapseButton.className = "collapse-button";
	stopCollapseButton.textContent = "Collapse";
};

export default stopCollapse;
