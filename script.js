function makeid(l) {
  // write your code here
	var res="";
	var characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(){}[]|<>?/.,=-";

	for(let i=0;i<l;i++){
		res+=characters.charAt(
			Math.floor(
				Math.random()*characters.length;
			)
		)
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

