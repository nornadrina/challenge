function calcSecByYear(year){

	if (year % 100 > 0) {

    		return Math.trunc(year/100)+1;

	} else {  

        	return year/100;
	};

}


var sec = calcSecByYear(process.argv[2]);

console.log(sec);

