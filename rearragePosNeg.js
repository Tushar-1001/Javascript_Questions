let arr = [-1, 2, -3, 4, -5, 6, 8, -7, 11, -12 ];
function rearrange(arr) {
  let p = [];
  let n = [];
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      p.push(arr[i]);
    } else {
      n.push(arr[i]);
    }
  }
  console.log(p);
  console.log(n);

  for (let i = 0 , j = 0; i < p.length , j < n.length ; i++ , j++) {
    res.push(p[i]);
    res.push(n[j]);
  
  }
  return res;
}
console.log(rearrange(arr));