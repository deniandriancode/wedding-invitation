function getPRNG(seed) {
    let seedValue = []
    for (let i in seed) {
        seedValue.push(seed.charCodeAt(i));
    }
    seedValue = seedValue.reduce((acc, x) => acc + x, 0);
    let randomValue = ((seedValue * 13) + 65) % 46 % 97;
    return parseInt(randomValue);
}

function encrypt(salt, message) {
    let index = parseInt(message.length / 2);
    let msg = message.slice(0, index) + salt + message.slice(index);
    let shift = getPRNG(salt);
    let numMessage = [];

    for (let i in msg) {
        numMessage.push(msg.charCodeAt(i) + shift);
    }

    let encryptedMessage = numMessage.map(c => String.fromCharCode(c)).join("");
    return encryptedMessage;
}

function decrypt(salt, message) {
    let encSalt = []
    let shift = getPRNG(salt);

    for (let i in salt) {
        encSalt.push(salt.charCodeAt(i) + shift);
    }

    encSalt = encSalt.map(c => String.fromCharCode(c)).join("");
    let encMessage = message.replace(encSalt, "");
    let numMessage = [];

    for (let i in encMessage) {
        numMessage.push(encMessage.charCodeAt(i) - shift);
    }

    let decryptedMessage = numMessage.map(c => String.fromCharCode(c)).join("");
    return decryptedMessage;
}

export { encrypt, decrypt };
