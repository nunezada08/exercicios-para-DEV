let gradeCurricular = [
  "Matemática",
  "Português",
  "Biologia",
  "Física",
  "História",
  "Educação Física",
  "Inglês"
]

//removendo o item "biologia" e "fisica"
gradeCurricular.splice(2,1)
gradeCurricular.splice(3,1)

//adicionando "programação" e "robotica" no lugar.
gradeCurricular.splice(2,0,"Programação")
gradeCurricular.splice(3,0,"Robótica")

console.log(gradeCurricular)