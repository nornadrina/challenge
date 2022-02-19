var year = process.argv[2];

console.log(parseInt(process.argv[2]));

if (year % 100 > 0) {

	console.log(Math.trunc(year/100)+1);

} else {  

	console.log(year/100);
};
