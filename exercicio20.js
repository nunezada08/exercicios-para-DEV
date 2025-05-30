let precos = [
  129.9,
  399.5,
  259.0,
  89.9,
  599.99,
  39.5,
  999.0
]

// adicionando "R$" antes dos numeros
let reais = precos.map(item => "R$" + item)

console.log(reais)