# Estágio Target Sistemas

As respostas estão no arquivo index.js

Criei um CLI básico para verificar as respostas utilizando o readline e prompt-sync

**Obs:** *É necessário ter o ambiente configurado com Nodejs e NPM*

### Usando Docker

```shell
git clone https://github.com/wevertoncamposdev/targetsistemas.git

cd targetsistemas

docker build -t testetargetsistemas .

docker run -it --rm -p 3000:3000 testetargetsistemas

```

### Configurando manualmente
Depois de configurar o ambiente siga os passo, clone o repositório, entre na pasta do projeto, instale as dependencias e inicie o script: 

```shell
git clone https://github.com/wevertoncamposdev/targetsistemas.git
cd targetsistemas
npm install
npm run start
```

### CLI

Logo aparecerá a pergunta no terminal

```shell
digite o número da questão e eu responderei?
```

Escolha as questões de **1 à 5**, ou **exit** para sair e fechar o container