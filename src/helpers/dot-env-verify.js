const constants = require('../config/constants');
const ErroHandler = require('../handlers/custom-error');

function checkEnvVariables() {
  const invalidVariables = [];
  const variables = Object.keys(constants);
  variables.forEach((variable) => {
    if (constants[variable] == null || constants[variable] === undefined) {
      invalidVariables.push(variable);
    }
  });
  if (invalidVariables.length > 0) {
    throw new ErroHandler(
      500,
      `As seguintes variáveis de ambiente não estão presentes ou não foram carregadas\n
         ${invalidVariables.toString().replace(new RegExp(',', 'g'), ' - ')}\n
        Verifique o seu arquivo .env e o arquivo de constantes localizado em src/config/constants.js`
    );
  }
}

module.exports = { checkEnvVariables };
