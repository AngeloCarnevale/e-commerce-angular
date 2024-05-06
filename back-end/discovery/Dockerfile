FROM maven:latest AS build

COPY ./discovery /usr/src/app

ENV HTTP_PROXY=http://proxy.br.bosch.com:8080
ENV HTTPS_PROXY=http://proxy.br.bosch.com:8080

WORKDIR /usr/src/app

RUN mvn clean package

FROM openjdk:21

COPY --from=build /usr/src/app/target/delivery-0.0.1-SNAPSHOT.jar /app/delivery-0.0.1-SNAPSHOT.jar

WORKDIR /app

CMD ["java", "-jar", "delivery.jar"]