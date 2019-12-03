function isArray(inputArray) {
  //Check if a variable is an Array:
  if (typeof inputArray == 'object'
      && Array.isArray(inputArray)
  )
    return true;
  return false;
}

function isNotEmptyArray(inputArray) {
  // Check if a variable is not an empty Array:
  if (typeof inputArray == 'object' 
      && Array.isArray(inputArray) 
      && inputArray.length 
      && inputArray.filter(x => Boolean(x)).length
  )
    return true;
  return false;
}

function getCleanArray(arrA) {
  // Remove Falsy values from an Array:
  let truthyArray = arrA.filter(x => Boolean(x));
  return truthyArray;
}

function unionArrays(arrA, arrB) {
  // Merge 2 Arrays without duplicates (Union):
  let union = [...new Set([...arrA, ...arrB)];  
  return union;
}

function uniqueValuesOfArrays(arrA, arrB) {
  // Get the distinct values from 2 Arrays (Symmetrical Difference):
  let differenceA = arrA.filter(x => !arrB.includes(x));
  let differenceB = arrB.filter(x => !arrA.includes(x));
  let symDifference = [...differenceA, ...differenceB];
  return symDifference;
}

function removeDupsIn2ndArray(arrA, arrB) {
  // Get all values in Array A that are not in Array B (difference): 
  let difference = arrA.filter(x => !arrB.incudes(x));
  return difference;
}

function getCommonArrayValues(arrA, arrB) {
  // Get all common values in 2 Arrays (intersection): 
  let intersection = arrA.filter(x => arrB.includes(x));
  return intersection;
}

function findAllValueIndexes(inputArray, val) {
  // Find the indexes of every occurrence of a value in an Array: 
  let findAllIndexes = inputArray.map((x, i) => {
    if (x == val) 
      return i;
  }).filter(x => Boolean(x));
  return findAllIndexes
}

function getValFrequencyCount(inputArray, val) {
  // Get count of the number of times a specific value occurs in an Array:
  let valCount = inputArray.reduce((acc, elm) => {
    if (val == elm) 
      acc++; 
    return acc;
  }, 0);
  return valCount;
}

function getUniqueValCount(inputArray) {
  // Get count of unique Array values: 
  let uniqueCount = inputArray.reduce((acc, elm, key) => 
    {
      if (elm in acc) { 
        acc[elm] = false;
      } else {
        acc[elm] = true;
      } 
      if (key == inputArray.length - 1) {
        acc = acc.filter(val => Boolean(val));
      } 
      return acc;
    }, []).length;
  return uniqueCount;
}

function getDuplicateValCount(inputArray) {
  // Get count of duplicate Array values:
  let dupCount = inputArray.reduce((acc, elm, key) => {
    if (elm in acc) { 
      acc[elm] = true;
    } else {
      acc[elm] = false;
    } 
    if (key == inputArray.length - 1) {
      acc = acc.filter(val => Boolean(val));
    } return acc;
  }, []).length;
  return dupCount;
}

function getUniqueValuesViaReduce(inputArray) {
  // Get unique Array values using the reduce() method: 
  let uniqueValues = inputArray.reduce((acc, elm, key) => {
    if (elm in acc) {
      acc[elm] = false;
    } else {
      acc[elm] = true;
    } 
    if (key == inputArray.length - 1) {
      acc = acc.reduce((acc2, val, key) => {
        if (Boolean(val)) {
          acc2.push(key);
        } 
        return acc2;
      }, []);
    } return acc;
  }, []);
  return uniqueValues;
}

function getUniqueValuesViaFilter(inputArray) {
  // Get unique Array values using the filter() method:
  let uniqueValues = inputArray.filter((elm, index, array) => array.indexOf(elm) == index);
  return uniqueValues;
}

function getUniqueValuesViaSet(inputArray) {
  // Get unique Array values using a Set:
  let uniqueValues = Array.from(new Set(inputArray));
  return uniqueValues;
}

function getUniqueValues(inputArray) {
  // Get unique values using the best method
  return  getUniqueValuesViaSet(inputArray);
}

function getDupValuesCounts(inputArray) {
  // Get duplicate Array values:
  let countObj = inputArray.reduce((acc, elm) => {
    acc[elm] = (acc[elm] || 0) + 1; 
    return acc;
  }, {});
  return Object.entries(countObj).reduce((acc, [val, cnt]) => {
    if (cnt > 1) 
      acc.push(val); 
    return acc;
  }, []);
}

function getValueFrequency(inputArray) {
  // Get count of number of times each element occurs in an Array: 
  let countObj = inputArray.reduce((acc, elm) => { 
    acc[elm] = (acc[elm] || 0) + 1; 
    return acc;
  }, {});
  return countObj
}

function arr2DtoKVObjectViaReduce(inputArray) {
  // Convert an Array into a key-value Object:
  // Input: array should contain elements formatted like [key, value]
  // !Elements with duplicate keys will use the last value in the array for the output object
  // Output: object with a key:value pair for each unique key in the array
  let arrObj = inputArray.reduce((obj, elmArr) => {
    let [key, value] = elmArr;
    obj[key] = value;
    return obj;
    //return void(obj[key] = value) || obj;
  }, {});
  return arrObj;
}

function arr2DtoKVObjectViaEntries(inputArray) {
  // Convert an Array into a key-value Object:
  let arrObj = {};
  for (const [index, element] of inputArray.entries()) {
    let [key, value] = element;
    arrObj[key] = value;
  }
  return arrObj;
}

function transpose2DArray(input2DArray) {
  // Given an array containing row elements that are arrays of col values, swap the cols and rows
  // Input: [[row1col1, row1col2, row1col3], [row2col1, row2col2, row2col3]]
  // !The length of each subarray should be the same,
  // ! Otherwise the Output subarrays will be the length of the shortest row in the original array, extra cols in other rows will be discarded
  // Output: [[row1col1, row2col2], [row1col2, row2col2], [row1col3, row2col3]]
  return input2DArray[0].map((col, i) => input2DArray.map(row => row[i]));
}
  
