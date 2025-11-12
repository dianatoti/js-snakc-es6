// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo oppure in console la bici con peso minore.

const biciDaCorsa = [
  { nome: "Specialized Tarmac SL8", peso: 7 },
  { nome: "Canyon Ultimate CFR", peso: 6 },
  { nome: "Trek Émonda SLR 9", peso: 7 },
  { nome: "Pinarello Dogma F", peso: 8 },
  { nome: "BMC Teammachine SLR01", peso: 6 },
  { nome: "Giant TCR Advanced SL 0", peso: 5 },
  { nome: "Scott Addict RC Ultimate", peso: 8 },
  { nome: "Colnago V4Rs", peso: 7 },
  { nome: "Wilier Filante SLR", peso: 6 },
  { nome: "Cannondale SuperSix EVO LAB71", peso: 7 }
];

let biciPesoMin = biciDaCorsa[0];

for (let i = 0; i < biciDaCorsa.length; i++) {
    let curBici = biciDaCorsa[i];
    if (curBici.peso < biciPesoMin.peso) {
        // console.log(curBici)
        biciPesoMin = curBici;
    }
};

console.log(biciPesoMin)