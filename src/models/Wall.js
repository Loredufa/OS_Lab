const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = function(sequelize) {
  // defino el modelo
  return sequelize.define('wall', {
    id:  {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    texto: {
      type:DataTypes.STRING,
      allowNull:true,
    },   
    emogi: {
      type:DataTypes.STRING,
      allowNull:true,
    }
  })

  };