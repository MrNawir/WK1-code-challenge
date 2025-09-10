const marks= 2 ;
if (marks < 0 || marks > 100) {
	console.log('Invalid marks');
} else if (marks >= 80 ) {
	console.log('A');
} else if (marks >= 60 && marks<=79) {
	console.log('B');
} else if (marks >= 49 && marks <=59) {
	console.log('C');
} else if (marks >=40 && marks <= 40){
	console.log('D');
} else if (marks<40) {
    console.log (`E`);
}