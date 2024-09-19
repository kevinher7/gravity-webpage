import accelerateObject from "./accelerateObject.js";

const collapseObjects = () => {
	const objectList: NodeListOf<HTMLDivElement> = document.querySelectorAll(
		".added-button"
	) as NodeListOf<HTMLDivElement>;

	const windowHeight: number = window.innerHeight;

	objectList.forEach((object: HTMLDivElement) => {
		let yPosition: number = Number(object.style.top.slice(0, -2));

		accelerateObject(object);

		if (yPosition > windowHeight) {
			object.remove();
		}
	});

	return 0;
};

export default collapseObjects;
