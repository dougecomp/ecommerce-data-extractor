# O que aprendi a mais neste projeto?
Usar o Jest para implementar testes automatizados básicos

# Como fazer o Jest funcionar?
`yarn add jest -D`

`yarn jest --init`

`yarn test` para executar os testes.

# Configurando alguns outros parâmetros no jest.config.js (Opcional)
1. Colocar o bail como true para teste parar na primeira falha;
2. Se quiser code coverage, colocar collectCoverage true. Colocar o collectCoverageFrom para apontar para o diretório da aplicação. Colocar o coverageDirectory para dentro da pasta de testes;
3. Configurar o testMatch baseado na forma que estiver nomeando seus arquivos de teste.