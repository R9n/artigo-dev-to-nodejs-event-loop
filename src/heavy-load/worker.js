// worker.js
const { parentPort } = require('worker_threads');
const { operacaoLenta } = require('../helpers/functions');

parentPort.on('message', () => {
  const hashedSring = operacaoLenta();
  parentPort.postMessage({
    hashedSring,
  });
});
