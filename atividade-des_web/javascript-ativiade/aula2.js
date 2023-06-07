//tabuada de qualquer numero 
var x = Number( window.prompt('Digite um numero'))
for (let i = 1; i <= 10; i++) { 
    let resultado = x * i
    console.log(`${x} x ${i} = ${resultado}`);
}

//numero FIBONACCI
console.log('Numeros Fibonacci:')
var x = 0
var y = 1
console.log(x)
console.log(y)
for(var i = 3; i <=12; i++){
    var z = x + y
    console.log(z)
    x = y
    y = z
}

//Soma dos números pares entre 12 e 21
console.log("\nA soma dos números pares entre 12 e 21:");
let somaPares = 0;
for (let i = 12; i <= 21; i++) {
  if (i % 2 === 0) {
    somaPares += i;
  }
}
console.log(`A soma é: ${somaPares}`);

// Números primos entre 37 e 73
console.log("\nOs números primos entre 37 e 73:");
for (let i = 37; i <= 73; i++) {
  let isPrimo = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrimo = false;
      break;
    }
  }
  if (isPrimo) {
    console.log(i);
  }
}
