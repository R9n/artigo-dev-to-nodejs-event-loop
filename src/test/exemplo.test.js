// Referência  para o jest:  https://jestjs.io/pt-BR/

// função de exemplo, pode (e deve) ser importado aqui as funções do seu projeto
//para as quais você pretende escrever os seus testes de unidade
function sum(a, b) {
  return a + b;
}

// Teste a ser executado, o primeiro parâmetro é a descrição do teste
//Muito útil para os casos em que o teste falhar
test('1 + 2 tem que ser igual a 3', () => {
  // expect diz que espera-se que algo ocorra (expect ())
  // neste caso diz-se que a chamada da função sum para  1 e 2 (sum(1,2))
  // precisa ser 3 ( .toBe(3))
  expect(sum(1, 2)).toBe(3);
});
