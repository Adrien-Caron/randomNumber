console.log('je suis trop fort');

const config = {
    mysteryNumber : [1, 20] ,
    maxAttempts : 10,
    attempt:[] 
}

//Generer le numero mystere grace au mysyteryNumber qui se trouve dans config 
const mysteryNumber = randomNumber()
console.log('le nombre mystere est : ' ,mysteryNumber)

// selon le nombre d'essais maxAttemps, on va incrementer dans attempt
for (let i = 0; i < config.maxAttempts; i++) {
    const numberRandom = randomNumber()
    config.attempt.push(numberRandom)
}
console.log( config.attempt);

// on vas comparer pour chaque attempt avec le numero mystere (si c'est gagnant) et indiquer lorsqu'il n'est pas gagnant 
config.attempt.forEach((number, i)=>{
    if (number < mysteryNumber){
        console.log('et nan cest plus')
    }
    if (number > mysteryNumber){
        console.log('et nan cest moin')
    }
    if (number === mysteryNumber){
        console.log(`bravo, le numero mystere etait ${mysteryNumber},vous avez réussi en ${i+1} coups`)
    }
})

// si on gagne on affiche le numero mystere, avec le nombre d'essais



function randomNumber(){
    const mysteryNumber = Math.floor(Math.random() * (config.mysteryNumber[1] - config.mysteryNumber[0] + 1)) + config.mysteryNumber[0];
    return mysteryNumber
}