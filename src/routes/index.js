const { Router } = require('express');
const { fork } = require('child_process');
const { Worker } = require('worker_threads');

const {
  operacaoLentaComSetImediate,
  operacaoLenta,
  operacaoRapida,
} = require('../helpers/functions');

const router = Router();

router.get('/rota-bloqueante', async (request, response) => {
  const generatedString = operacaoLenta();
  response.status(200).send(generatedString);
});

router.get('/rota-bloqueante-com-chield-process', async (request, response) => {
  const worker = fork('./src/heavy-load/compute-hash.js');
  worker.send('message');
  worker.on('message', (generatedString) => {
    response.status(200).send(generatedString);
    worker.kill();
  });
});

router.get('/rota-bloqueante-com-setImediate', async (request, response) => {
  const generatedString = await operacaoLentaComSetImediate();
  response.status(200).send(generatedString);
});

router.get('/rota-bloqueante-com-worker-thread', async (request, response) => {
  const worker = new Worker('./src/heavy-load/worker.js');

  // Listen for a message from worker
  worker.on('message', (generatedString) => {
    response.status(200).send(generatedString.hashedSring);
  });
  worker.postMessage('message');
});

router.get('/rota-nao-bloqueante', async (request, response) => {
  const user = operacaoRapida();
  response.status(200).send(user);
});

module.exports = router;
