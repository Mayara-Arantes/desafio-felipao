let nome = "Mayara"
let nivelXp = 5001

if (nivelXp < 1000) {
  console.log("Ferro")
  
}else if (nivelXp === 1000 && 2000) {
  console.log("Bronze")
  
}else if (nivelXp === 2001 && 5000){
  console.log("Prata")
  
}else if (nivelXp === 5001 && 7000) {
  console.log("Ouro")
  
}else if (nivelXp === 7001 && 8000) {
  console.log("Platina")
 
}else if (nivelXp === 8001 && 9000) {
  console.log("Ascendente")
  
}else if (nivelXp === 9001 && 10000) {
  console.log("Imortal")
  
}else if (nivelXp >= 10001) {
  console.log("Radiante")
  
}else 
    console.log("Nivel não encontrado")
 
console.log("O Heroi de nome " + nome + " está no nivel de " + nivelXp)