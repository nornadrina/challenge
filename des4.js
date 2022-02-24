var input = process.argv[2]; // aqui esta estavelecido de onde vem o imput (ok)
let numMaior = 0;

	for(i=0; i<input.length; i++){
		
		produto = input[i] * input[i + 1]; 
		
		if (numMaior < produto){
			
			numMaior = produto;

		} 	
}

console.log(numMaior)


