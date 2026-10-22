//import dotenv from 'dotenv';
//dotenv.config();

console.log(process.env.MY_ENV)
console.log(process.env.DB_CONNECT)
console.log(process.env.PORT)

const { MY_ENV, DB_CONNECT, PORT } = process.env;

console.log({MY_ENV, DB_CONNECT, PORT})
