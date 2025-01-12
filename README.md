# Zero Sum SubArray

This repository contains a JavaScript implementation of a function that checks if a given array of integers contains a **zero-sum subarray**. A zero-sum subarray is a contiguous subarray whose elements add up to zero.

---

## **Description**

The `zeroSumSubarray` function takes an array of integers as input and returns a boolean value:
- **`true`** if the array contains at least one subarray with a sum of zero.
- **`false`** otherwise.

The function uses a hash map to efficiently track cumulative sums as it iterates through the array. If a cumulative sum is seen more than once, it means a subarray with a sum of zero exists between those occurrences.

---

## **Function Signature**

```javascript
function zeroSumSubarray(nums) -> boolean
```

### **Parameters**
| Name    | Type     | Description                          |
|---------|----------|--------------------------------------|
| `nums`  | `Array`  | An array of integers (positive, negative, or zero). |

### **Returns**
| Type     | Description                                      |
|----------|--------------------------------------------------|
| `boolean` | Returns `true` if a zero-sum subarray is found, otherwise `false`. |

---

## **Time and Space Complexity**
| Complexity     | Description               |
|----------------|---------------------------|
| Time           | **O(n)**                  |
| Space          | **O(n)**                  |

- **Time Complexity**: The function traverses the array once, making it linear in time complexity.
- **Space Complexity**: The function uses a hash map to store cumulative sums, which can take up to `O(n)` space in the worst case.

---

## **Algorithm Explanation**

1. Initialize an object `sumObj` to keep track of cumulative sums, starting with `{0: true}`. The initial `0` represents an empty subarray with a sum of zero.
2. Iterate through the array while maintaining a `currentSum` variable that keeps track of the running sum of elements.
3. For each element:
   - Add it to `currentSum`.
   - Check if `currentSum` already exists in `sumObj`. If it does, return `true` because a zero-sum subarray has been found.
   - Otherwise, store the `currentSum` in `sumObj`.
4. If no zero-sum subarray is found after iterating through the array, return `false`.

---

## **Examples**

### **Example 1**
```javascript
zeroSumSubarray([1, 2, 3, -3, 4, 5]); 
// Output: true
// Explanation: The subarray [3, -3] has a sum of 0.
```

### **Example 2**
```javascript
zeroSumSubarray([1, 2, 3, 4, 5]); 
// Output: false
// Explanation: No subarray has a sum of 0.
```

---

## **Edge Cases**
- **Empty array**: Returns `false`.
- **Single-element array**: If the element is `0`, the function returns `true`. Otherwise, it returns `false`.
- **Array with all positive numbers**: Returns `false` as there cannot be a zero-sum subarray.
- **Array with negative numbers**: Correctly handles subarrays that sum to zero using cumulative sums.

---

## **Usage**

To use the `zeroSumSubarray` function, import it from the module:

```javascript
const { zeroSumSubarray } = require('./path-to-file');

const nums = [1, 2, 3, -3, 4, 5];
console.log(zeroSumSubarray(nums)); // Output: true
```

---

## **How It Works**

The function leverages the concept of **cumulative sums** and **hash maps**:
- A cumulative sum represents the sum of elements from the beginning of the array up to a certain index.
- If a cumulative sum repeats at two different indices, the elements between these indices form a zero-sum subarray.

---

## **Edge Case Handling**
| Edge Case               | Result   | Explanation                              |
|-------------------------|----------|------------------------------------------|
| Empty array             | `false`  | No subarrays exist.                      |
| Single-element array: 0 | `true`   | The subarray `[0]` sums to zero.         |
| Single-element array: N | `false`  | Non-zero numbers cannot form a zero sum. |

---

## **Tests**
You can add more tests to check different scenarios:

```javascript
const nums1 = [3, 4, -7, 1, 2, -1, 6];
console.log(zeroSumSubarray(nums1)); // true

const nums2 = [1, 2, 3, 4, 5];
console.log(zeroSumSubarray(nums2)); // false

const nums3 = [];
console.log(zeroSumSubarray(nums3)); // false
```

---

## **License**
This project is open-source and available under the **MIT License**. Feel free to use, modify, and distribute the code.
