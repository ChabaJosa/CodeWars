// https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/javascript
const remainders = [1, 10, 9, 12, 3, 4];

function thirt(n) {
    const r = n
      .toString()
      .split('')
      .reverse()
      .reduce( (a,b, index) => parseInt(a) + b*remainders[index%remainders.length] );

      return n === r ? parseInt(n) : thirt(r);
      
}