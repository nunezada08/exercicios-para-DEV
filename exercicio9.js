let presenca = [
  "João Lima",
  "Carla Nunes",
  "Amanda Souza",
  "Bruno Ribeiro",
  "Fernanda Sales"
]
let pessoa = "Amanda Souza"

// verificando se a pessoa esta na array
if (presenca.includes(pessoa)) {
    console.log(`${pessoa} estava presente`)
}else{
    console.log(`${pessoa} não estava presente`)
}
