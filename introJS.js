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
