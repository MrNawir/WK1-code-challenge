// Challenge 2: Speed Detector
// Prompts for car speed and prints either "Ok", "Points: X", or "License suspended".
const speed = Number(65);

const speedLimit = 70;         // km/h
const maxPoints = 12;          // license suspension threshold
const pointsPerExcess = 5;     // 1 point for every 5 km/h above the limit

if (Number.isNaN(speed) || speed < 0) {
  console.log('Invalid speed');
} else if (speed <= speedLimit) {
  console.log('Ok');
} else {
  const excessSpeed = speed - speedLimit;
  const demeritPoints = Math.floor(excessSpeed / pointsPerExcess);
  if (demeritPoints > maxPoints) {
    console.log('License suspended');
  } else {
    console.log(`Points: ${demeritPoints}`);
  }
}