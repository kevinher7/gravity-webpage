import myObject from "../models/myObject.js";

const createObject = (): myObject => {
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;
	const maxSize = 80;

	const newObject: myObject = {
		xPosition: windowWidth * Math.random(),
		yPosition: windowHeight * Math.random(),
		width: maxSize * Math.random(),
		height: maxSize * Math.random(),
	};

	return newObject;
};

export default createObject;
