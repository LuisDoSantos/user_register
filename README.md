<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
</head>

<body>

  <h2>Projeto de Registro de Usuários</h2>

  <p>O código permite o registro de usuários através de uma interface web básica.</p>

  <h2>Recursos e Tecnologias Utilizadas</h2>

  <ul>
    <li><strong>Node.js e Express:</strong> Utilizados para criar o servidor web e definir rotas para a aplicação.</li>
    <li><strong>MySQL e MySQL2:</strong> O MySQL é utilizado como banco de dados relacional para armazenar os dados dos usuários. O pacote MySQL2 é empregado para interagir com o banco de dados.</li>
    <li><strong>Body-parser:</strong> Middleware usado para processar dados JSON enviados pelo cliente.</li>
    <li><strong>HTML e JavaScript:</strong> A interface do usuário é composta por um arquivo HTML (`registeruser.html`) e JavaScript para estilização e interatividade.</li>
  </ul>

  <h2>Funcionalidades Principais</h2>

  <ol>
    <li>
      <strong>Registro de Usuário:</strong>
      <ul>
        <li>Uma rota (`/api/register`) aceita solicitações POST contendo dados do usuário, como username, email e password.</li>
        <li>Os dados do usuário são validados e inseridos no banco de dados MySQL.</li>
      </ul>
    </li>
    <li>
      <strong>Serviço Web Simples:</strong>
      <ul>
        <li>Uma rota (`/`) serve um arquivo HTML simples (`registeruser.html`) e outros arquivos estáticos (CSS, JavaScript) da pasta 'public'.</li>
      </ul>
    </li>
  </ol>

  <h2>Instruções para Execução</h2>

  <ol>
    <li>Certifique-se de ter o Node.js instalado em seu sistema.</li>
    <li>Instale as dependências do projeto usando <code>npm install</code>.</li>
    <li>Configure um banco de dados MySQL e ajuste as configurações de conexão no código.</li>
    <li>Execute o script de criação de tabela (pode ser necessário ajustar para suas necessidades específicas).</li>
    <li>Inicie o servidor com <code>node app.js</code>.</li>
    <li>Acesse o aplicativo pelo navegador em <a href="http://localhost:3000">http://localhost:3000</a>.</li>
  </ol>

</body>

</html>
