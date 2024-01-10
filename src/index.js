let nome = "Mayara";
let nivelXp = 10002;

console.log("O Herói de nome " + nome + " está no nível de ");

if (nivelXp < 1000) {
    console.log("Ferro");

} else if (nivelXp >= 1001 && nivelXp <= 2000) {
    console.log("Bronze");
    
} else if (nivelXp > 2001 && nivelXp <= 5000) {
    console.log("Prata");
    
} else if (nivelXp > 5001 && nivelXp <= 7000) {
    console.log("Ouro");
    
} else if (nivelXp > 7001 && nivelXp <= 8000) {
    console.log("Platina");
    
} else if (nivelXp > 8001 && nivelXp <= 9000) {
    console.log("Ascendente");
    
} else if (nivelXp > 9001 && nivelXp <= 10000) {
    console.log("Imortal");
    
} else if (nivelXp > 10001) {
    console.log("Radiante");
    
} else {
    console.log("Nível não encontrado");
}
