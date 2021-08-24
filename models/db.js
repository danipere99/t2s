const Sequelize = require('sequelize')
const sequelize = new Sequelize ('test', 'root', 'root3306', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports={
    Sequelize: Sequelize,
    sequelize: sequelize
}