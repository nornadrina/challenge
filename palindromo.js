//loop ? 
//preciso comparar a primeira letra da string com a ultima

function palindrom (input){

      return  input.split('').reverse().join('')

//return "true" if (input === reverse('')){

//return "false"
}

var x = palindrom(process.argv[2]);


	console.log(x) 
