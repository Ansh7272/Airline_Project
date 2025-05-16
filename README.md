#Welcome to flights service

# project setup
-clone the project on your local
-Execute `npm install` on the same path as of your root directory of downloaded project
-create a `.env` file in the root directory and add the following enviroment variable
        -PORT=3000
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <"YOUR_DB_LOGIN_NAME">,
    "password": <"YOUR-DB_PASSWORD">,
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
-Once you've added your db config as listed above, go to the src folder from your terminal and execute `npm sequelize db:create`