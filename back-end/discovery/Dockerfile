# Use a imagem base do Maven para compilar o código
FROM maven:3.8.3-openjdk-17 AS builder

# Copie o código fonte para o contêiner
COPY . /app

# Defina o diretório de trabalho como /app
WORKDIR /app

# Compile e empacote a aplicação
RUN mvn clean package

# Use a imagem base do OpenJDK 11 para executar a aplicação
FROM openjdk:17-jre-slim

# Copie o arquivo JAR gerado na etapa anterior para o contêiner
COPY --from=builder /app/target/discovery-0.0.1-SNAPSHOT.jar /app/

# Defina o diretório de trabalho como /app
WORKDIR /app

# Comando a ser executado quando o contêiner for iniciado
CMD ["java", "-jar", "discovery-0.0.1-SNAPSHOT.jar"]