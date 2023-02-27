// Entendo sobre o módulo FS

const path = require('path');

// Buscar o nome do arquivo atual
console.log(path.basename(__filename))

// Busca o nome do diretório atual
console.log(path.dirname(__filename));

// Extensão do arquivo (formato)
console.log(path.extname(__filename));

// Criar objeto Path
console.log(path.parse(__filename));

// Exibe o caminho do arquivo
console.log(path.dirname(__dirname))

// Juntar caminhos de arquivos
console.log(path.join(__dirname, 'test', 'test.html'));