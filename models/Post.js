const db = require('./db')

const Post = db.sequelize.define('usuario',{
    cliente: {
        type: db.Sequelize.STRING
    },
    duracao: {
        type: db.Sequelize.TEXT
    }
})

//Post.sync({force: true})

module.exports = Post