const censor = (sentence, BANNED, CHAR = "#") =>
  sentence.split(' ').reduce((acc, word) =>
    acc + ' ' + (BANNED.includes(word) ? CHAR.repeat(word.length) : word), '').trim()

module.exports = censor


