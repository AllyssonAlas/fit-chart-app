# Login Usecase

> ## Case of success
1. Validate provided **email** and **password**
2. Send a login request to api
3. Store the data returned by the api
4. Present authenticated routes

> ## Exception - Missing data
1. Return missing data error

> ## Exception - Invalid data
1. Return invalid data error

> ## Exception - API returns InvalidCredentialsError
3. Presents error message

> ## Exception - API returns ServerError
3. Presents error message
