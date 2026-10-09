import assert from 'node:assert';
import { findNthPrime } from '../src/part1/prime.js';
import { reverseString } from '../src/part1/reverseString.js';
import { isPalindrome } from '../src/part1/palindrome.js';
import { findKthLargest } from '../src/part1/kthLargest.js';
import { countCharFrequency } from '../src/part1/charFrequency.js';

console.log("--> Đang chạy Test Phần 1...");

// 1. Test Prime
assert.strictEqual(findNthPrime(1), 2);
assert.strictEqual(findNthPrime(5), 11);
assert.strictEqual(findNthPrime(10), 29);

// 2. Test Reverse String
assert.strictEqual(reverseString("hello"), "olleh");
assert.strictEqual(reverseString(""), "");

// 3. Test Palindrome
assert.strictEqual(isPalindrome("A man, a plan, a canal: Panama"), true);
assert.strictEqual(isPalindrome("race a car"), false);

// 4. Test Kth Largest
assert.strictEqual(findKthLargest([3, 2, 1, 5, 6, 4], 2), 5);
assert.strictEqual(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4), 4);

// 5. Test Char Frequency
const freq = countCharFrequency("aabcc");
assert.strictEqual(freq.get('a'), 2);
assert.strictEqual(freq.get('b'), 1);
assert.strictEqual(freq.get('c'), 2);

console.log("✔ Toàn bộ Test Phần 1 PASS!\n");
