function solve(s) {
  var alph = ' abcdefghijklmnopqrstuvwxyz';
        var x = s.split(/[aeiou]/g);
        let res = x.map(el => el.split('').reduce((a,b)=>a+alph.indexOf(b),0))
        return Math.max(...res);
  }