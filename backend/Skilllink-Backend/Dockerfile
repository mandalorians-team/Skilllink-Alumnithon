# First stage: Build
FROM eclipse-temurin:21-jdk-jammy as builder

WORKDIR /app

# Copy Maven files first to cache dependencies
COPY .mvn/ .mvn/
COPY mvnw pom.xml ./
RUN chmod +x ./mvnw
RUN ./mvnw dependency:go-offline

# Copy source code and build
COPY src ./src
RUN ./mvnw package -DskipTests

# Second stage: Runtime
FROM eclipse-temurin:21-jre-jammy

WORKDIR /app

# Copy only the built jar from builder stage
COPY --from=builder /app/target/Skilllink-Backend-0.0.1-SNAPSHOT.jar app.jar

# Environment variables (optional, can be overridden at runtime)
ENV SERVER_PORT=8080
ENV SPRING_PROFILES_ACTIVE=dev

EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:8080/actuator/health || exit 1

ENTRYPOINT ["java", "-jar", "app.jar"]