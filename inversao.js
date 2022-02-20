//loop ? 
//preciso comparar a forma invertida com o input inicial

function isPalindrom(input){

	return input.split('').reverse().join('') == input;
}

var x = isPalindrom(process.argv[2]);

	console.log(x)

