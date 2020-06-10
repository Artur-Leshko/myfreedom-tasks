function findUniq(arr) {
  let uniq;
  let arr1 = [];
  let arr2 = [];
  let digit1, digit2;
  
  digit1 = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (digit1 != arr[i]) {
      digit2 = arr[i];
      break;
    }
  }
  
  arr1 = arr.filter(element => element == digit1);
  arr2 = arr.filter(element => element == digit2);
  
  if (arr1.length == 1) {
    uniq = arr1[0];
  } else {
    uniq = arr2[0];
  }
  
  return uniq;
}

