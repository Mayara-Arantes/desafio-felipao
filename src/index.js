let nome = "Mayara";
let nivel = "platina"

switch (nivel) {
  case "< 1.000": 
  console.log("Ferro")
  break;
  case "1.001 && 2.000": 
  console.log("Bronze")
  break;
  case "2.001 && 5.000": 
  console.log("Prata")
  break;
  case "5.001 && 7.000": 
  console.log("Ouro")
  break;
  case "7.001 && 8.000": 
  console.log("Platina")
  break;
  case "8.001 && 9.000": 
  console.log("Ascendente")
  break;
  case "9.001 && 10.000": 
  console.log("Imortal")
  break;
  case "> 10.000 || 10.001": 
  console.log("Radiante")
  break;
  Default:
    console.log("Nivel não encontrado")

console.log("O heroi de nome " + nome, "está no nivel: " + nivel);

}