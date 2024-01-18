const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Configuração da conexão com o MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu-usuario',
  password: 'sua-senha',
  database: 'seu-banco-de-dados'
});

// Conectar ao MySQL
connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conexão ao MySQL bem-sucedida');
  }
});

// Middleware para processar dados JSON
app.use(bodyParser.json());

// Rota para registrar um novo usuário (método POST)
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Criar um novo usuário
    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    connection.query(query, [username, email, password], (error, results) => {
      if (error) {
        console.error('Erro ao inserir usuário no MySQL:', error);
        res.status(500).json({ message: 'Erro ao registrar usuário' });
      } else {
        res.status(201).json({ message: 'Usuário registrado com sucesso' });
      }
    });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ message: 'Erro ao registrar usuário' });
  }
});

// Rota para método GET (para servir o HTML)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'registeruser.html'));
});

// Configurar a pasta para servir arquivos estáticos (como CSS, JavaScript, imagens, etc.)
app.use(express.static('public'));

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
