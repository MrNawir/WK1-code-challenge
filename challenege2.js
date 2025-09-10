let speed= 80 ;
const speedLimit =70 ;
const maxPoints = 12 ;
const pointsPerExcess = 5 ;
if (speed<speedLimit){
    console.log("Ok");
}else {
    const excessSpeed = speed -speedLimit ;
    const demeritPoints = Math.floor(excessSpeed/pointsPerExcess);
    if (demeritPoints>maxPoints){
        console.log("License suspended");
    } else{
        console.log(`Points: ${demeritPoints}`);
    } 
}