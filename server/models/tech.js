'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tech extends Model {
    static associate(models) {
      Tech.belongsToMany(models.Project, { through: 'project_tech', foreignKey: 'tech_id'});
    }
  }
  Tech.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tech',
  });
  return Tech;
};