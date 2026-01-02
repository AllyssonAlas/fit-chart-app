# Feature: load exercises charts
> As an **USER**
> I want to load exercises charts
> So I can access my charts

### 1. Scenario: Success
- Given an user
- When exercises charts are requested
- Then the system present requested data

### 2. Scenario: Success with empty list
- Given an user
- When home data is requested
- Then the system present a screen without any list

### 3. Scenario: API returns "Server" error
- Given home data is successfully requested
- When the api returns "Server" error
- Then the system shall present an error prompt
- And ask user for try again
