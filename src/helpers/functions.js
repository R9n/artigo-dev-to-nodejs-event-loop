const crypto = require('crypto');

function generateRandomString() {
  return crypto.randomBytes(200).toString('hex');
}

function setImmediatePromise() {
  return new Promise((resolve) => {
    setImmediate(() => resolve());
  });
}

function operacaoRapida() {
  return {
    nome: 'Ronaldo',
    idade: 25,
    gênero: 'masculino',
    profissao: 'Analista de Sistemas',
    jogos: ['Battlefield 5', 'Anthen', 'Forza Horizon 4'],
    linguagens: ['Javascript', 'Typescript', 'Python', 'c#'],
  };
}

async function operacaoLentaComSetImediate() {
  const stringHash = crypto.createHash('sha512');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10e6; i++) {
    stringHash.update(generateRandomString()); // operação extremamente custosa
    // eslint-disable-next-line no-await-in-loop
    await setImmediatePromise();
  }
  return `${stringHash.digest('hex')}\n`;
}

function operacaoLenta() {
  const stringHash = crypto.createHash('sha512');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10e6; i++) {
    stringHash.update(generateRandomString()); // operação extremamente custosa
  }
  return `${stringHash.digest('hex')}\n`;
}

module.exports = { operacaoLentaComSetImediate, operacaoLenta, operacaoRapida };
