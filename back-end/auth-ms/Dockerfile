FROM openjdk:21
WORKDIR /app
COPY target/auth-ms-0.0.1-SNAPSHOT.jar /app/auth-ms.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","auth-ms.jar"]