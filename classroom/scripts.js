// Escopo global.
let email = 'joao@email.com'

{
  // Escopo de bloco
  console.log(email)
}

{
  let age = 18
}

console.log(age) // gera erro pois age está em outro escopo
