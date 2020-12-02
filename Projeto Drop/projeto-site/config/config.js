module.exports = {
  production: {
    username: 'Luis',
    password: '#Gf123456789',
    database: 'BD_Usuarios',
    host: 'bd-site.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
