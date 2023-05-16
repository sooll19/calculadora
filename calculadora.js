const sumar = function(a,b) {
return a + b 
}

const restar = function(a,b){
    return a - b
}

const multiplicar = function (a,b){
    return a * b
}

const dividir = function (a,b){
 if (b > 0){
return a / b;
}
return "No se puede dividir por 0"
}

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir  
}
