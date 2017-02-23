function myuniq(array) {
  let new_arr = [];
  array.forEach(num => {
    if (!new_arr.includes(num)){
      new_arr.push(num);
    }

  });
  return new_arr
}


console.log(myuniq([1, 2, 1, 3, 3]));

function two_sum(array) {
  let new_arr = []
  for(let i = 0; i < array.length; i++){
    for(let j = i+1; j < array.length; j++){
      if(array[i] + array[j] === 0){
        new_arr.push([i,j])
      }
    }
  }
  return new_arr
}

console.log(two_sum([-1, 0, 2, -2, 1]))

function my_transpose(array){
  let new_arr = []
  for(let i = 0; i < array.length; i++){
    let col = []
    array.forEach(sub_arr =>{
      col.push(sub_arr[i])
    })
    new_arr.push(col)
  }
  return new_arr

}

console.log(my_transpose([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]))


function myEach(array, callback){
  for(let i = 0; i < array.length; i++){
    callback(array[i])
  }
}

Array.prototype.myEach = function (func) {
  for(let i = 0; i < this.length; i++){
    func(this[i]);
  }
  return this;
}


const NUMS = [1, 2, 3, 4, 5];
NUMS.myEach((num) => {
  console.log(`square of ${num} is ${num * num}`);
});

Array.prototype.myMap = function(func) {
  let new_array = []
  this.myEach(el => {
    new_array.push(func(el))
  })
  return new_array;
}

console.log(NUMS.myMap(num => num + 1))

Array.prototype.myInject = function(func) {
  let acc = this[0]
  this.slice(1,this.length).myEach(el => {
    acc = func(acc, el)
  })
  return acc
}

console.log(NUMS.myInject((acc, el) => acc*el ))

function bubbleSort(array){
  let sorted = false
  while (!sorted) {
    for(let i = 0; i<array.length;i++){
      if (i + 1 === array.length){
        sorted = true
      }
      if (array[i] > array [i+1]) {
        let temp = array[i]
          array[i] = array[i+1]
          array[i+1] = temp
          break
      }
    }
  }
  return array
}

console.log(bubbleSort([3,2,1]))

function substrings(string) {
  let new_arr = []
  for(let i = 0; i<string.length; i++) {
    for(let j = i+1; j<string.length+1; j++) {
      new_arr.push(string.slice(i,j))
    }
  }
  return new_arr
}

console.log(substrings("cat"))

function range(start, end){
  if (end < start) {
    return []
  }
  if (range(start+1, end) === []){
      return [start]
    }
  else {
    return [start].concat(range(start+1, end))
  }
}

console.log(range(1,7))


function exp(num, power){
  if (power === 0) {
    return 1
  }
  return num * exp(num, power-1)
}

console.log(exp(2,5))

function fib(n){
  if (n <= 2) {
    let arr = [0,1]
    return arr.slice(0,n)
  }
  return fib(n-1).concat([fib(n-1)[fib(n-1).length-1] + fib(n-2)[fib(n-2).length-1]])
}

console.log(fib(7))

function bsearch(array, target){
  let midpoint = Math.floor(array.length/2)
  if (array.length === 1 && target!== array[midpoint]){
    return null
  }
  if (target > array[midpoint]){
    if (bsearch(array.slice(midpoint, array.length), target)){
      return midpoint + bsearch(array.slice(midpoint, array.length), target)
    }
    return null
  }
  else if (target < array[midpoint]){
    return bsearch(array.slice(0, midpoint), target)
  }
  else {
    if (target === array[midpoint]) {
      return midpoint
    }
    else {
      return null
    }
  }
}

console.log(bsearch([1, 2, 3], 1))
console.log(bsearch([2, 3, 4, 5], 3))
console.log(bsearch([2, 4, 6, 8, 10], 6))
console.log(bsearch([1, 3, 4, 5, 9], 5))
console.log(bsearch([1, 2, 3, 4, 5, 6], 6))
console.log(bsearch([1, 2, 3, 4, 5, 6], 0))
console.log(bsearch([1, 2, 3, 4, 5, 7], 6))

function merge(left, right){
  const new_arr = []
  while (left.length > 0 && right.length > 0){
    if(left[0] < right[0]){
      new_arr.push(left.shift())
    }
    else {
      new_arr.push(right.shift())
    }
  }
  return new_arr.concat(left, right)
}

function merge_sort(array){
  if (array.length < 2){
    return array
  }
  else{
    const midpoint = Math.floor(array.length/2)
    const left = array.slice(0, midpoint)
    const right = array.slice(midpoint, array.length)
    const sorted_left = merge_sort(left)
    const sorted_right = merge_sort(right)
    return merge(sorted_left, sorted_right)
  }
}


console.log(merge_sort([3,2,4,23,5,1]))

function subsets(array) {
  if (array.length < 1) {
    return [[]]
  }
  const old_subsets = subsets(array.slice(0,array.length-1))
  const a_arr = old_subsets.map(el => el.concat([array[array.length-1]]))
  const new_subsets = old_subsets.concat(a_arr)
  return new_subsets

}


console.log(subsets([1,2,3]))
