import stopCollapse from "./stopCollapse.js";

const collapseObjects = (intervalId: number) => {
	const objectList: NodeListOf<HTMLElement> = document.querySelectorAll(
		".added-button"
	) as NodeListOf<HTMLElement>;

	const windowHeight: number = window.innerHeight;
	let currentTime: number = 0;

	objectList.forEach((object: HTMLElement) => {
		let yPosition: number = Number(object.style.top.slice(0, -2));

		// add gravity acceleration
		object.style.top = `${yPosition + 1}px`;

		if (yPosition > windowHeight) {
			object.remove();
		}
	});

	return 0;
};

export default collapseObjects;
