// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadre = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Lazio", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Atalanta", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Fiorentina", puntiFatti: 0, falliSubiti: 0 }
];


//   const randomNumberPuntiFatti = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
// console.log(randomNumberPuntiFatti);

// const randomNuberFalliSubiti = Math.floor(Math.random() * (50 - 0 + 1)) + 0;
// console.log(randomNuberFalliSubiti);

// creato un array e generato numeri random per le due proprietà specificate 'puntifatti' e 'fallisubiti'

for (let i = 0; i < squadre.length; i++) {
    curSquadra = squadre[i];
    const randomNumberPuntiFatti = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
    curSquadra.puntiFatti = randomNumberPuntiFatti
    console.log(curSquadra);
    
    const randomNuberFalliSubiti = Math.floor(Math.random() * (50 - 0 + 1)) + 0;
    curSquadra.falliSubiti = randomNuberFalliSubiti
    console.log(curSquadra);
    
}
// ciclato, inserendo all'interno del ciclo, per ogni proprietà, un numero random

const nuovoArray = [];
for (let i = 0; i < squadre.length; i++) {
    const nome = squadre[i].nome;
    const falliSubiti = squadre[i].falliSubiti;

    nuovoArray.push(nome);
    nuovoArray.push(falliSubiti);
};
// utilizzato un altro ciclo per creare un nuovo array pushando solo due proprietà specitifiche 
// console.log(nuovoArray);

