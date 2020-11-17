const Sequelize = require('sequelize')
const sequelize = new Sequelize ('Db_usuario','Luis','aluno',{
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function () {
    console.log ("Conectado com sucesso")
    
}).catch(function(erro) {
    console.log ("Falha ao se conectar: "+erro)
})

const Usuario = sequelize.define('Usuarios',{
    nome: {
        type: Sequelize.TEXT
    },
    apelido: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    senha: {
        type: Sequelize.STRING
    }
})

// Usuario.sync({force:true})

Usuario.create ({
    nome: "Luis",
    apelido: "lois",
    email:"lois@luis.com",
    senha: "123"
})