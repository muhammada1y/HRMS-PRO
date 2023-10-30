const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  username: 'postgres', // Change 'user' to 'username'
  host: '127.0.0.1',
  database: 'loginuserdb',
  password: 'new_password',
  port: 5432, // Default PostgreSQL port
});

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Synchronize the model with the database (create the "users" table)
sequelize.sync();

module.exports = User;

