const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos da pasta site-sql-x-nosql
app.use(express.static(path.join(__dirname, 'site-sql-x-nosql')));

// Rota principal - servir o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'site-sql-x-nosql', 'index.html'));
});

// Rota para qualquer caminho não encontrado - redirecionar para o index
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'site-sql-x-nosql', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📱 Acesse: http://localhost:${PORT}`);
});
