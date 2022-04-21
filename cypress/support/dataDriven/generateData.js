function randomNumber(limitNumber) {
    return Math.floor(Math.random() * limitNumber);
}

function randomTelephoneNumber() {
    var number = Math.floor(Math.random() * 300);
    var number2 = Math.floor(Math.random() * 300);
    var number3 = Math.floor(Math.random() * 400);
    var format = "052" + number + number2 + number3
    return format

}

export { randomNumber, randomTelephoneNumber };