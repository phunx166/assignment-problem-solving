import assert from 'node:assert';
import { solveMazeBFS, solveMazeAStar } from '../src/part3/mazeSolver.js';

console.log("--> Đang chạy Test Phần 3...");

const simpleMaze = [
  [0, 0, 0],
  [1, 1, 0],
  [0, 0, 0]
];

const bfs = solveMazeBFS(simpleMaze, [0, 0], [2, 0]);
const astar = solveMazeAStar(simpleMaze, [0, 0], [2, 0]);

assert.strictEqual(bfs.found, true);
assert.strictEqual(astar.found, true);
assert.strictEqual(bfs.steps, astar.steps);

console.log("✔ Toàn bộ Test Phần 3 PASS!\n");
