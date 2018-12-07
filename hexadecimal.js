hexadecimal = (hexadecimal) => {
	checkInput(hexadecimal);
	
	const firstHex = hexadecimal.slice(1, 3);
	
	const secHex = hexadecimal.slice(3, 5);
	
	const thirdHex = hexadecimal.slice(5, 7);
	
	console.log(parseInt(firstHex, 16) + " " + parseInt(secHex, 16) + " " + parseInt(thirdHex, 16));
}

try {
	hexadecimal("#7A7ba6");
} catch(e) {
	console.log(e)
}

checkInput = (input) => {
	if (typeof(input) != "string" || input.length != 7) {
		throw "input must be a string in the format of #777777";
	};
	
	input.split("").forEach((char, index) => {
		if (index != 0) {
		  if (char.search(/[0-9]|[a-f]|[A-F]/) != 0) {
		   	throw "input must be a string in the format of #777777";
		  };
		} else {
			if (char.search(/#/) != 0) {
		   	throw "input must be a string in the format of #777777";
		  };
		}
	});
	
	return true;
}
