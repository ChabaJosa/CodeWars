const highAndLow = (numbers) => {
 let arr = numbers.split(' ').map(Number);  
  return Math.max(...arr) + ' ' + Math.min(...arr)
}