const { Sequelize } = require('sequelize')

/* user: b2168d5717ddfa
password: d2049979 */
const sequelize = new Sequelize('tougths', 'b2168d5717ddfa', 'd2049979', {
  host: 'us-cdbr-east-05.cleardb.net' /* 'localhost' */,
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Connected to database successfully!')
} catch(err) {
  console.log(`Could not connect to database!: ${err}`)
}

module.exports = sequelize