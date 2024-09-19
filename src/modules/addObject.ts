import myObject from "../models/myObject.js";
import createObject from "./createObject.js";
import styleObjectDiv from "./styleObjectDiv.js";

const addObject = async () => {
	const newObject: myObject = await createObject();

	let objectDiv: HTMLDivElement = document.createElement("div");

	objectDiv = styleObjectDiv(newObject, objectDiv);

	document.body.appendChild(objectDiv);
	return 0;
};

export default addObject;
