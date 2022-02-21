
var str = process.argv[2]; 
let isPalindrom = true;

for(i=0; i< str.length/2; i++){
	 
	if (str[i] != str[str.length -i -1]) {
		 isPalindrom = false 
	}
 }
console.log(isPalindrom)

