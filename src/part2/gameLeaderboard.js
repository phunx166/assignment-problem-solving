export class GameLeaderboard {
  constructor() {
    this.playerScores = new Map();
    this.top10 = [];
  }

  addOrUpdateScore(playerId, score) {
    this.playerScores.set(playerId, score);
    this._rebuildTop10();
  }

  _rebuildTop10() {
    const all = Array.from(this.playerScores.entries()).map(([playerId, score]) => ({
      playerId,
      score
    }));
    all.sort((a, b) => b.score - a.score);
    this.top10 = all.slice(0, 10);
  }

  getTop10() {
    return [...this.top10];
  }

  getPlayerScore(playerId) {
    return this.playerScores.get(playerId) ?? null;
  }
}