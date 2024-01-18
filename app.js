const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');  // Adicionado para lidar com caminhos de arquivos

const app = express();
const PORT = 3000;

// Conectar ao MongoDB (certifique-se de ter o MongoDB em execução)
mongoose.connect('mongodb://localhost:27017/seu-banco-de-dados', { useNewUrlParser: true });

// Definir um modelo de usuário
const User = mongoose.model('User', {
  username: String,
  email: String,
  password: String
});

// Middleware para processar dados JSON
app.use(bodyParser.json());

// Rota para registrar um novo usuário (método POST)
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Criar um novo usuário
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar usuário' });
  }
});

// Rota para método GET (para servir o HTML)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'registeruser.html')); // Caminho para o arquivo HTML
});

// Configurar a pasta para servir arquivos estáticos (como CSS, JavaScript, imagens, etc.)
app.use(express.static('public'));

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
