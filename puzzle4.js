const fs = require('fs');
const path = require('path');

function readInput() {
  const filePath = path.join(__dirname, 'puzzle4Input.text');
  const data = fs.readFileSync(filePath, 'utf8');
  return data.trim().split('\n').map(row => row.split(''));
}

// Convert the input into a 2D array
const grid = readInput();

const rows = grid.length;
const columns = grid[0].length;

console.log(`Grid has ${rows} rows and ${columns} columns`);


function compass() {
  console.log(`Starting compass function`);
  let count = 0;
  let foundSequences = [];
  
  //horizontal checking
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= columns - 4; j++) { // Ensure there is space for 4 characters
      const sequence = grid[i][j] + grid[i][j + 1] + grid[i][j + 2] + grid[i][j + 3];
      if (sequence === "XMAS" || sequence === "SAMX") {
        foundSequences.push(`${sequence} on row ${i + 1}`);
        count++;
      }
    }
  }
  //vertical checking
  for (let j = 0; j < columns; j++) {
    for (let i = 0; i <= rows - 4; i++) { // Ensure there is space for 4 characters
      const sequence = grid[i][j] + grid[i + 1][j] + grid[i + 2][j] + grid[i + 3][j];
      if (sequence === "XMAS" || sequence === "SAMX") {
        foundSequences.push(`${sequence} on column ${j + 1}`);
        count++;
      }
    }
  }
  //diagonal checking - down right
  for (let i = 0; i <= rows - 4; i++) {
    for (let j = 0; j <= columns - 4; j++) {
      const sequence = grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2] + grid[i + 3][j + 3];
      if (sequence === "XMAS" || sequence === "SAMX") {
        foundSequences.push(`${sequence} starting at ${i + 1}, ${j + 1} diagonal down right`);
        count++;
      }
    }
  }
  //diagonal checking - down left
//diagonal checking - down left
for (let i = 0; i <= rows - 4; i++) {
  for (let j = columns - 1; j >= 3; j--) {
    const sequence = grid[i][j] + grid[i + 1][j - 1] + grid[i + 2][j - 2] + grid[i + 3][j - 3];
    if (sequence === "XMAS" || sequence === "SAMX") {
      foundSequences.push(`${sequence} starting at ${i + 1}, ${j + 1} diagonal down left`);
      count++;
    }
  }
}
//console.log(foundSequences);
console.log(`Compass Function found ${count} sequences`);
return count;  
}

compass();
function masX() {
console.log(`Starting masX Function`);
  let count = 0;
  let foundSequences2 = [];
  for (let i = 0; i <= rows - 3; i++) { // Ensure i+2 fits within the grid
    for (let j = 0; j <= columns - 3; j++) { // Ensure j+2 fits within the grid
      
      const downRightSequence = (grid[i][j] + grid[i + 1][j + 1]+  grid[i + 2][j + 2]);
      const downLeftSequence =(grid[i][j + 2] + grid[i + 1][j + 1]+ grid[i + 2][j]);        
    
      if ((downRightSequence === "MAS" || downRightSequence === "SAM") && (downLeftSequence === "MAS" || downLeftSequence === "SAM")) {
        
        count++;   
      }     
      }
      }
      console.log(`masX Function found ${count} sequences`);
      return count;
    }

masX();