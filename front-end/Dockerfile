# Use a imagem oficial do Node.js como base
FROM node:latest

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package.json ./

# Instale as dependências do projeto
RUN npm i -g @angular/cli

RUN npm install

# Copie todos os arquivos do diretório atual para o diretório de trabalho no contêiner
COPY . .

# Expõe a porta 4200 para acessar a aplicação Angular
EXPOSE 4200

# Comando padrão para executar o servidor de desenvolvimento do Angular
CMD ["npm", "start"]