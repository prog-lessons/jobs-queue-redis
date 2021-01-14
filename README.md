[Node.js: Utilizando filas de tarefas assíncronas com Bull+Redis](https://dev.to/cadutech/node-js-utilizando-filas-de-tarefas-assincronas-com-bull-redis-2kg0)

Esse exemplo simula um cenário onde um funcionário é contratado e o sistema envia e-mail para ele e para o gerente de TI, formalizando a contratação.
É aplicado processamento assíncrono de tarefas utilizando filas com [Bull](https://optimalbits.github.io/bull/) e [Redis](https://redis.io) pra monitorar o processamento das tarefas. Uma fila para jobs de envio de e-mails e outra fila para persistencia em arquivos. Também utiliza Web API com [Express](http://expressjs.com).

### Dependencias (pacotes)

[bull](https://www.npmjs.com/package/bull)<br>
[dotenv](https://www.npmjs.com/package/dotenv)<br>
[express](https://www.npmjs.com/package/express)<br>
[nodemailer](https://www.npmjs.com/package/nodemailer)<br>
[nodemon](https://www.npmjs.com/package/nodemon)<br>
[password-generator](https://www.npmjs.com/package/password-generator)<br>
[redis](https://www.npmjs.com/package/redis)<br>
[sucrase](https://www.npmjs.com/package/sucrase)
