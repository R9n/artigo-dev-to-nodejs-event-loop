const crypto = require('crypto');
const { operacaoLenta } = require('../helpers/functions');

process.on('message', () => {
  const hashedSring = operacaoLenta();
  process.send(hashedSring);
});
