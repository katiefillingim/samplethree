FROM openjdk:8-alpine

COPY target/uberjar/samplethree.jar /samplethree/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/samplethree/app.jar"]
