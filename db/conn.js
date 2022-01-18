const { Sequelize } = require('sequelize')
require('dotenv').config()

/* 
database: heroku_4bc76cb70dc86b9
user: b53bbe6209fe6e
password: e7335e84
hostname: us-cdbr-east-05.cleardb.net
mysql://b53bbe6209fe6e:e7335e84@us-cdbr-east-05.cleardb.net/heroku_4bc76cb70dc86b9?reconnect=true
*/
/* const dbName = process.env.DB_NAME
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD
const dbHost = process.env.DB_HOST
const dbPort = process.env.DB_PORT */


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD,{
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
})

try {
  sequelize.authenticate()
  console.log('Connected to database successfully!')
} catch(err) {
  console.log(`Could not connect to database!: ${err}`)
}

module.exports = sequelize