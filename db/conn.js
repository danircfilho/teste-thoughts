const { Sequelize } = require('sequelize')

/* user name: b53bbe6209fe6e
password: e7335e84 
db: heroku_4bc76cb70dc86b9
hostname: us-cdbr-east-05.cleardb.net
mysql://b53bbe6209fe6e:e7335e84@us-cdbr-east-05.cleardb.net/heroku_4bc76cb70dc86b9?reconnect=true*/

/* 'heroku_65908da8a2ffd8f', 'b2168d5717ddfa', 'd2049979' */

const sequelize = new Sequelize('mysql://b53bbe6209fe6e:e7335e84@us-cdbr-east-05.cleardb.net/heroku_4bc76cb70dc86b9?reconnect=true' , {
  host: 'us-cdbr-east-05.cleardb.net',
  port: 3000,
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Connected to database successfully!')
} catch(err) {
  console.log(`Could not connect to database!: ${err}`)
}

module.exports = sequelize