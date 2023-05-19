---
## Project setup
---

### Start Up

- Clone the repository
- Install packages by running `npm install`

### Dotenv setup

- Create `.env` in project root directory
- Take a look at the `.env.example` file which is in the project root directory to have a clue on environment variables that are being used in this project
- Copy all keys from the `.env.example` file to `.env` file and add values to corresponding keys. These can be obtained from the project administrator

### Sequelize ORM Setup

1. **Configuring** `.env`

   - Create two databases, one for testing and another for development.
   - Copy `DATABASE_DEV_URL=postgres://your_db_user:your_password@127.0.0.1:5432/your_dev_db_name` and `DATABASE_TEST_URL=postgres://your_db_user:your_password@127.0.0.1:5432/your_test_db_name` URLs from `.env.example` to `.env`
   - Edit them with your real database user, password and database name.

2. **Running Migrations**

   - Run `npm run migrate` in terminal to fire up migration

3. **Running Seeds**
   - Run `npm run seeding` to seed all

### Running server

- Run `npm run dev` to run server local

### Running server localyy

- [swagger](http://localhost:4500/api-docs/)
- [server](http://localhost:4500/)

### Running tests

- Run `npm test` to run tests

### Api Production Link

[Production Link](https://chat-gpt-plugins.onrender.com)

### ADD plugin
- open [chatGPT4](https://chat.openai.com/?model=gpt-4-plugins)
- naviagate to plugin store and add the ling [link](https://chat-gpt-plugins.onrender.com)) on develop own plugin
- search use keywords `job` to get all opened job or products to get all `products` from company
![Screenshot from 2023-05-19 16-08-18](https://github.com/TuyizeeAnastase/quiz-app-backend/assets/42033331/9fa88bcf-b380-42a9-a9c8-9c9d6d7536a5)
