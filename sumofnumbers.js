function sumFor(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(`For Loop Method ${sumFor([1, 2, 3, 4, 5])}`);

function sumWhile(numbers) {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}
console.log(`While Loop Method ${sumWhile([1, 2, 3, 4, 5])}`);

function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}
console.log(`Recursion Method ${sumRecursion([1, 2, 3, 4, 5])}`);

function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, (memo, num) => memo + num, 0);
}
console.log(`Simple Way Method ${sumTheSimpleWay([1, 2, 3, 4, 5])}`);
