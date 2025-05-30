let estoque = [
  "mesa para PC",
  "cadeira gamer",
  "monitor 27 polegadas",
  "hub USB",
  "mouse sem fio"
]
let produto = "cadeira gamer"

if (estoque.includes(produto)) {
    console.log(`O produto "${produto}" está em estoque`)
}else{
    console.log(`O produto "${produto}" não está em estoque`)
}