## Sample Apps
- Java Spring Boot (vuln/secure): `examples/sqli/java/*`
- ASP.NET Core (vuln/secure): `examples/sqli/dotnet/*`
Run and test via Playwright API tests in `tests/dast/tests/sqli-api.spec.ts`.


## SCA & SBOM Policy
- Dependabot (`.github/dependabot.yml`)
- Dependency Review Action (`.github/workflows/dependency-review.yml`)
- Trivy FS scan (`.github/workflows/trivy.yml`)
- SBOM gate (`.github/workflows/sbom-policy.yml`)
