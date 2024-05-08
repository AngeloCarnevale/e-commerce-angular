FROM maven:3.8.4 AS builder

# Copiar o código-fonte da sua aplicação para dentro do contêiner
COPY ./auth-ms /app

# Definir o diretório de trabalho como o diretório da sua aplicação
WORKDIR /app

# Executar o comando Maven para construir o JAR
RUN mvn clean package

# Segunda etapa: Executar a aplicação
FROM openjdk:17-jdk-alpine

# Copiar o JAR construído na etapa anterior para dentro do contêiner
COPY --from=builder /app/target/auth-ms-0.0.1-SNAPSHOT.jar /app/auth-ms-0.0.1-SNAPSHOT.jar

# Comando para iniciar a aplicação Spring Boot quando o contêiner for iniciado
CMD ["java", "-jar", "/app/auth-ms-0.0.1-SNAPSHOT.jar"]