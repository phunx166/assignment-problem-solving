import assert from 'node:assert';
import { ContactManager } from '../src/part2/contactManager.js';
import { GameLeaderboard } from '../src/part2/gameLeaderboard.js';
import { LRUCache } from '../src/part2/lruCache.js';

console.log("--> Đang chạy Test Phần 2...");

// 1. Test ContactManager
const cm = new ContactManager();
cm.addContact({ id: '1', name: 'Nguyen Van A', phone: '0901234567' });
cm.addContact({ id: '2', name: 'Nguyen Van B', phone: '0907654321' });
assert.strictEqual(cm.searchByNamePrefix('Nguyen').length, 2);
assert.strictEqual(cm.searchByNamePrefix('Nguyen Van A').length, 1);
assert.strictEqual(cm.searchByNamePrefix('Tran').length, 0);

// 2. Test GameLeaderboard
const lb = new GameLeaderboard();
lb.addOrUpdateScore('p1', 100);
lb.addOrUpdateScore('p2', 500);
lb.addOrUpdateScore('p3', 300);
const top = lb.getTop10();
assert.strictEqual(top[0].playerId, 'p2');
assert.strictEqual(top[0].score, 500);
assert.strictEqual(lb.getPlayerScore('p1'), 100);

// 3. Test LRU Cache
const lru = new LRUCache(2);
lru.put('a', 1);
lru.put('b', 2);
assert.strictEqual(lru.get('a'), 1);
lru.put('c', 3);
assert.strictEqual(lru.get('b'), null);
assert.strictEqual(lru.get('c'), 3);
assert.strictEqual(lru.size(), 2);

console.log("✔ Toàn bộ Test Phần 2 PASS!\n");