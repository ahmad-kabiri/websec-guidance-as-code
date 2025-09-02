# Sample Apps (PoC)

## Java Spring Boot (H2, JdbcTemplate)
- Vulnerable: `examples/sqli/java/spring-vuln` → `/search?q=` (port 8085)
- Secure: `examples/sqli/java/spring-secure` → `/search?q=` (port 8086)

## ASP.NET Core (EF Core Sqlite)
- Vulnerable: `examples/sqli/dotnet/aspnet-vuln` → `/search?name=`
- Secure: `examples/sqli/dotnet/aspnet-secure` → `/search?name=`

### Run (Java)
```bash
cd examples/sqli/java/spring-vuln && ./mvnw spring-boot:run
cd examples/sqli/java/spring-secure && ./mvnw spring-boot:run
```

### Run (.NET)
```bash
cd examples/sqli/dotnet/aspnet-vuln && dotnet run --urls http://localhost:5055
cd examples/sqli/dotnet/aspnet-secure && dotnet run --urls http://localhost:5056
```

### DAST (Playwright API tests)
```bash
JAVA_SPRING_VULN=http://localhost:8085/search?q= \
JAVA_SPRING_SECURE=http://localhost:8086/search?q= \
DOTNET_VULN=http://localhost:5055/search?name= \
DOTNET_SECURE=http://localhost:5056/search?name= \
npx playwright test tests/dast/tests/sqli-api.spec.ts
```
