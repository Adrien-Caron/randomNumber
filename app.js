const config = {
    mysteryNumber: [1,100],
    maxAttempts: 10,
    attempt: []
}

// Générer un nombre mystère grace au mystereNumber
const mysteryNumber = randomNumber()
console.log("Random number : ", mysteryNumber)

let found = false; // Variable pour indiquer si le nombre mystère a été trouvé

// Selon le nombre d'essais maxAttempts, on va incrémenter dans attempt
for (let i = 0; i < config.maxAttempts && !found; i++) { // Ajout de !found pour arrêter si le nombre mystère est trouvé
    const numberRandom = randomNumber();
    config.attempt.push(numberRandom);
    if (numberRandom === mysteryNumber) {
        found = true; // Mettre found à true si le nombre mystère est trouvé
    }
}
console.log(config.attempt);


// Comparer pour chaque attemp avec le numéro mystère si égalité = gagnant sinon perdu et indiquer si le numéro mystère est plus grand ou plus petit

config.attempt.forEach((number, i)=> {
    if(number < mysteryNumber){
        console.log("Number +")
    }
    if(number > mysteryNumber){
        console.log("Number -")
    }
    if(number === mysteryNumber){
        console.log(`Nice, the mystery number is ${mysteryNumber}, you have win in ${i + 1} attempts`);
        // Si le nombre mystère est trouvé, sortir de la boucle forEach
        return;
    }
});

function randomNumber() {
    const mysteryNumber = Math.floor(Math.random() * (config.mysteryNumber[1] - config.mysteryNumber[0] + 1)) + config.mysteryNumber[0];
    //console.log("Random number : ", mysteryNumber)
    return mysteryNumber;
}