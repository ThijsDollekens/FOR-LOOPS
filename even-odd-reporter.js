/*// while
let w = 0;
while (w <= 50) {
  console.log(`${w}`);
  w++;
}

// for
for (let i = 49; i > 0; i--) {
  console.log(`${i}`);
}

// Bovenstaande code telt naar 50 en dan weer terug*/

for (let i = 1; i <= 20; i+=2) {
  console.log(`${i} is oneven`);
  console.log(`${i+1} is even`);
  // TODO: determine if i is odd or even
  // TODO: use console.log
}

// Expected output:
// 1 is oneven 
// 2 is even 
// 3 is oneven 
// 4 is even 
// ...