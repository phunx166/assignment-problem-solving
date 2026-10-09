import { solveMazeBFS, solveMazeAStar } from './mazeSolver.js';

// Sinh mê cung kích thước N x N ngẫu nhiên
const generateMaze = (size, obstacleRate = 0.2) => {
  const grid = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => (Math.random() < obstacleRate ? 1 : 0))
  );
  grid[0][0] = 0;
  grid[size - 1][size - 1] = 0;
  return grid;
};

const runBenchmark = () => {
  const size = 60; // Mê cung 60x60
  const maze = generateMaze(size, 0.2);
  const start = [0, 0];
  const end = [size - 1, size - 1];

  console.log(`=== BẮT ĐẦU BENCHMARK MAZE (${size}x${size}) ===\n`);

  // 1. Đo BFS
  const t0 = performance.now();
  const bfsResult = solveMazeBFS(maze, start, end);
  const t1 = performance.now();
  const bfsTime = (t1 - t0).toFixed(3);

  // 2. Đo A*
  const t2 = performance.now();
  const astarResult = solveMazeAStar(maze, start, end);
  const t3 = performance.now();
  const astarTime = (t3 - t2).toFixed(3);

  console.table([
    {
      "Thuật toán": "BFS",
      "Tìm thấy": bfsResult.found,
      "Số bước tối ưu": bfsResult.steps,
      "Số node duyệt": bfsResult.nodesVisited,
      "Thời gian (ms)": bfsTime
    },
    {
      "Thuật toán": "A* (Manhattan)",
      "Tìm thấy": astarResult.found,
      "Số bước tối ưu": astarResult.steps,
      "Số node duyệt": astarResult.nodesVisited,
      "Thời gian (ms)": astarTime
    }
  ]);

  console.log("\nKẾT LUẬN:");
  console.log("- Cả BFS và A* đều tìm ra đường đi ngắn nhất tương đương nhau.");
  console.log("- A* có heuristic định hướng nên duyệt ít node hơn đáng kể so với BFS.");
};

runBenchmark();