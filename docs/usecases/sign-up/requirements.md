# Sign up Usecase

> ## Case of success
1. Validate provided **User** data
2. Send a sign up request to api
3. Store the data returned by the api
4. Present authenticated routes

> ## Exception - Missing data
1. Return missing data error

> ## Exception - Invalid data
1. Return invalid data error

> ## Exception - API returns EmailAlreadyExists
3. Presents error message

> ## Exception - API returns ServerError
3. Presents error message
