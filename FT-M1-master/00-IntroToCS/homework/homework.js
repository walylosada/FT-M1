'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  var acum = 0;
  for (var i = 0; i < num.length; i++) {
    acum+= num[i] * 2 ** (num.length - 1 - i);
    }
    return acum;
  }
  
  function DecimalABinario(num) {
    // tu codigo aca
  
  var array =[];  
  while(num > 0){
    array.unshift(num%2);
    num = Math.floor(num/2);
      }
return array.join('')
    }


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}