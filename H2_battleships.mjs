import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

const speelveld = Array.from({ length: 10 }, () => Array(10).fill(' '));

function schiet(x, y) {
  if (x >= 0 && x < 10 && y >= 0 && y < 10) {
    speelveld[y][x] = '*';
    console.log(`Schot geland op (${x}, ${y})`);
  } else {
    console.log('Coordinaten buiten het speelveld, probeer opnieuw.');
  }
}

schiet(3, 5);

console.log(speelveld.map(rij => rij.join(' ')).join('\n'));

process.exit()