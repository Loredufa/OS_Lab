require('dotenv').config();

module.exports = {
    dbUser : process.env.DB_USER,
    dbName : process.env.DB_NAME,
    dbPort : process.env.DB_PORT,
    dbPassword : process.env.DB_PASSWORD,
    dbHost : process.env.DB_HOST,
    host : process.env.HOST,
    PORT : process.env.PORT,
    secretKey : process.env.KEY_NAME,
    urlReset : process.env.URL_RESET,
    mailPass : process.env.MAIL_PASSWORD
}