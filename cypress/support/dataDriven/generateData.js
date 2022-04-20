function randomNumber(limitNumber) {
    return Math.floor(Math.random() * limitNumber);
}

function randomTelephoneNumber() {
    var number = Math.floor(Math.random() * 3);
    var number2 = Math.floor(Math.random() * 3);
    var number3 = Math.floor(Math.random() * 4);   
    return '+052'+ number + number2+ number3
    
}

export {randomNumber,randomTelephoneNumber};