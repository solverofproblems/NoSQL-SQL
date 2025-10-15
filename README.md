# SQL vs NoSQL - Guia Completo

Um site interativo e responsivo que compara bancos de dados SQL e NoSQL, desenvolvido com HTML, CSS e JavaScript.

## 🚀 Deploy no Render

### Pré-requisitos
- Conta no [Render](https://render.com)
- Repositório no GitHub com este projeto

### Passos para Deploy

1. **Faça upload do projeto para o GitHub**
   ```bash
   git init
   git add .
   git commit -m "Primeiro commit - Site SQL vs NoSQL"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
   git push -u origin main
   ```

2. **Configure o Deploy no Render**
   - Acesse [render.com](https://render.com) e faça login
   - Clique em "New +" e selecione "Web Service"
   - Conecte seu repositório GitHub
   - Configure as seguintes opções:
     - **Name**: `sql-vs-nosql-site` (ou o nome que preferir)
     - **Environment**: `Node`
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free (ou pago, se preferir)

3. **Deploy Automático**
   - O Render irá automaticamente:
     - Instalar as dependências (`npm install`)
     - Iniciar o servidor (`npm start`)
     - Disponibilizar seu site em uma URL pública

## 🛠️ Desenvolvimento Local

### Instalação
```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd SEU_REPOSITORIO

# Instale as dependências
npm install

# Inicie o servidor local
npm start
```

### Acesse o site
- Local: `http://localhost:3000`
- Render: `https://SEU_SITE.onrender.com`

## 📁 Estrutura do Projeto

```
├── site-sql-x-nosql/          # Pasta com os arquivos do site
│   ├── index.html             # Página principal
│   ├── styles.css             # Estilos CSS
│   └── script.js              # JavaScript
├── server.js                  # Servidor Express
├── package.json               # Configurações do Node.js
├── .gitignore                 # Arquivos ignorados pelo Git
└── README.md                  # Este arquivo
```

## 🎨 Características do Site

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Animações Suaves**: Efeitos visuais e transições elegantes
- **Navegação Intuitiva**: Menu responsivo com scroll suave
- **Conteúdo Educativo**: Comparação detalhada entre SQL e NoSQL
- **Performance Otimizada**: Carregamento rápido e eficiente

## 🔧 Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js, Express.js
- **Deploy**: Render.com
- **Ícones**: Font Awesome
- **Fontes**: Segoe UI (sistema)

## 📱 Recursos

- ✅ Design totalmente responsivo
- ✅ Navegação suave entre seções
- ✅ Animações e efeitos visuais
- ✅ Menu hambúrguer para mobile
- ✅ Barra de progresso de scroll
- ✅ Efeitos de hover interativos
- ✅ Otimizado para SEO

## 🚀 Comandos Disponíveis

```bash
npm start          # Inicia o servidor de produção
npm run dev        # Inicia o servidor de desenvolvimento
```

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique se todas as dependências estão instaladas
2. Confirme se a porta 3000 está disponível
3. Verifique os logs do console para erros

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

**Desenvolvido com ❤️ para educar sobre bancos de dados SQL e NoSQL**
