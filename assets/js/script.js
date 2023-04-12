
// snack1
const utenti = [
  {
    firstname: "Paolo",
    lastname: "Franco",
    age: 20
  },
  {
    firstname: "Frank",
    lastname: "Pallino",
    age: 17
  },
  {
    firstname: "Francesco",
    lastname: "Bolle",
    age: 65
  },
  {
    firstname: "Marta",
    lastname: "Sole",
    age: 70
  }
]

const minorenni = utenti.filter( utente => utente.age < 18)

console.log(minorenni)

const over65 = utenti.filter( utente => utente.age >= 65)

console.log(over65)