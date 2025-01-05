function makeid(l) {
  // write your code here
	var res="";
	var charList="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

	for(var i=0;i<l;i++){
		res+=charList.charAt(
			Math.floor(
				Math.random()*charList.length
			)
		)
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));



