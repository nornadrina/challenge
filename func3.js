function inversao(input){
	
   return input.split('').reverse().join('');
}

function isPalidrom(input){

   return inversao(input) == input; 
}

var x = isPalidrom(process.argv[2]);

console.log(x)


