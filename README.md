# Simple Converter

Trata-se de um aplicativo que apresenta uma lista de carros, com seus respectivos comentários.

![Screecast](https://github.com/pauloafpjunior/myCars/blob/master/Peek%2001-11-2018%2016-12.gif?raw=true)

## Instalando

Baixe ou clone o repositório em seu PC.

Abra o terminal e entre na pasta correspondente ao aplicativo.

Instale os *scripts Ionic*, utilizando o comando.

`npm install @ionic/app-scripts@latest --save-dev`

Instale a ferramenta JSON Serve, com o comando.

`npm install -g json-server`

Entre no diretório do app e inicialize o servidor JSON Server, com o comando.

`json-server --watch db.json`

Execute o app, utilizando o comando:

`ionic serve`

## Executando no dispositivo móvel

A forma mais simples de se testar o aplicativo em seu dispositivo móvel é por meio do aplicativo *Ionic DevApp*, oferecido pela equipe *Ionic*.

Baixe o *Ionic DevApp* na loja de aplicativos de seu dispositivo móvel.

Conecte seu dispositivo na mesma rede do seu PC.

Execute o comando abaixo, abra o aplicativo *Ionic DevApp* e divirta-se.

`ionic serve -c`
