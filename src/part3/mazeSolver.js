/**
 * Biểu diễn mê cung: 0 = đường đi, 1 = tường
 */

// Hàm Heuristic khoảng cách Manhattan cho thuật toán A*
const manhattanDistance = (x1, y1, x2, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

const DIRECTIONS = [
  [-1, 0], [1, 0], [0, -1], [0, 1] // Lên, Xuống, Trái, Phải
];

/**
 * 1. Thuật toán BFS (Breadth-First Search)
 */
export const solveMazeBFS = (grid, start, end) => {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [[...start, 0]]; // [row, col, steps]
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  visited[start[0]][start[1]] = true;

  let nodesVisited = 0;

  while (queue.length > 0) {
    const [r, c, steps] = queue.shift();
    nodesVisited++;

    if (r === end[0] && c === end[1]) {
      return { found: true, steps, nodesVisited };
    }

    for (const [dr, dc] of DIRECTIONS) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 && nr < rows &&
        nc >= 0 && nc < cols &&
        grid[nr][nc] === 0 &&
        !visited[nr][nc]
      ) {
        visited[nr][nc] = true;
        queue.push([nr, nc, steps + 1]);
      }
    }
  }

  return { found: false, steps: -1, nodesVisited };
};

/**
 * 2. Thuật toán A* (A-Star Search)
 */
export const solveMazeAStar = (grid, start, end) => {
  const rows = grid.length;
  const cols = grid[0].length;

  // Open set lưu: { r, c, g, f }
  const openSet = [{
    r: start[0],
    c: start[1],
    g: 0,
    f: manhattanDistance(start[0], start[1], end[0], end[1])
  }];

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  let nodesVisited = 0;

  while (openSet.length > 0) {
    // Sắp xếp để lấy node có f(n) nhỏ nhất
    openSet.sort((a, b) => a.f - b.f);
    const current = openSet.shift();
    const { r, c, g } = current;

    if (visited[r][c]) continue;
    visited[r][c] = true;
    nodesVisited++;

    if (r === end[0] && c === end[1]) {
      return { found: true, steps: g, nodesVisited };
    }

    for (const [dr, dc] of DIRECTIONS) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 && nr < rows &&
        nc >= 0 && nc < cols &&
        grid[nr][nc] === 0 &&
        !visited[nr][nc]
      ) {
        const nextG = g + 1;
        const h = manhattanDistance(nr, nc, end[0], end[1]);
        openSet.push({ r: nr, c: nc, g: nextG, f: nextG + h });
      }
    }
  }

  return { found: false, steps: -1, nodesVisited };
};