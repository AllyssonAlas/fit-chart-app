# Feature: sign up
> As a new **USER**
> I want to sign up
> So I can access the system features

### 1. Scenario: Valid data provided
- Given all data provided is valid
- When a sign up is successfully requested
- Then the system shall store the data returned
- And present authenticated routes

### 2. Scenario: Field not provided
- Given some required data isn't provided
- When a sign up is requested
- Then the system shall highlight the field error

### 3. Scenario: Invalid field provided
- Given some provided field is invalid
- When a sign up is requested
- Then the system shall highlight the field error

### 4. Scenario: API returns "EmailAlreadyExists" error
- Given a sign up is successfully requested
- When the api returns "EmailAlreadyExists" error
- Then the system shall present an error message

### 5. Scenario: API returns "Server" error
- Given a sign up is successfully requested
- When the api returns "Server" error
- Then the system shall present an error message
