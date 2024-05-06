FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
# RUN npm config set registry 
RUN npm install -g @angular/cli
EXPOSE 4200
CMD ["ng", "serve", "--host", "0.0.0.0"]