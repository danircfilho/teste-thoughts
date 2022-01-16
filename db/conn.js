const { Sequelize } = require('sequelize')

/* user: b2168d5717ddfa
password: d2049979 
db: heroku_65908da8a2ffd8f
mysql://b2168d5717ddfa:d2049979@us-cdbr-east-05.cleardb.net/heroku_65908da8a2ffd8f?reconnect=true*/
const sequelize = new Sequelize(/* 'tougths' */'heroku_65908da8a2ffd8f', 'b2168d5717ddfa', 'd2049979', {
  host: 'us-cdbr-east-05.cleardb.net' /* 'localhost' */,
  /* port: 3306, */
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Connected to database successfully!')
} catch(err) {
  console.log(`Could not connect to database!: ${err}`)
}

module.exports = sequelize