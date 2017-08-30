function isPrime(num){
  for(var i=2;i<=num;i++){
    if(num%i===0 && i !==num){
    return false;
    }
  }
  return true;
}

//Finds the largest prime factor of a number

function largestPrimeFactor(){
  var x;
  var text;
  x = parseInt(document.getElementById("numb").value);
  var factors = [];
  var primeFactors = [];
  var squareRoot = Math.floor(Math.sqrt(x));

  //Collects all factors of number that have the potential to be prime

  for(var i=2; i<squareRoot; i++){
    if(x%i === 0){
      factors.push(i);
    }
  }

  //Collects all prime numbers from the collection of factors and then returns the largest Prime Factor

  for(var j=0; j<factors.length; j++){
    if(isPrime(factors[j])){
      primeFactors.push(factors[j]);
    }
  }
  text = "Largest Prime Factor = " + primeFactors.pop();
  document.getElementById("results").innerHTML = text;
  return;

}
