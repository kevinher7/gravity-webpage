import myObject from "../models/myObject.js";

const styleObjectDiv = (
	object: myObject,
	div: HTMLDivElement
): HTMLDivElement => {
	div.style.position = "absolute";
	div.className = "added-button";

	div.style.top = `${object.yPosition.toString()}px`;
	div.style.left = `${object.xPosition.toString()}px`;
	div.style.width = `${object.width.toString()}px`;
	div.style.height = `${object.height.toString()}px`;

	const blue = Math.random() * 255;
	div.style.backgroundColor = `rgb(3, 24, ${blue.toString()})`;

	return div;
};

export default styleObjectDiv;
