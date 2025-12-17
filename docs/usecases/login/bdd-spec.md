# Feature: login
> As a new **USER**
> I want to login
> So I can access the system features

### 1. Scenario: Valid data provided
- Given all data provided is valid
- When a login is successfully requested
- Then the system shall store the data returned
- And present authenticated routes

### 2. Scenario: Field not provided
- Given some required data isn't provided
- When a login is requested
- Then the system shall highlight the field error

### 3. Scenario: Invalid field provided
- Given some provided field is invalid
- When a login is requested
- Then the system shall highlight the field error

### 4. Scenario: API returns "InvalidCredentials" error
- Given a login is successfully requested
- When the api returns "InvalidCredentials" error
- Then the system shall present an error message

### 5. Scenario: API returns "Server" error
- Given a login is successfully requested
- When the api returns "Server" error
- Then the system shall present an error message
