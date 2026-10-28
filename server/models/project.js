'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Project.belongsTo(models.User, { foreignKey: 'user_id', onDelete: 'CASCADE'});
    Project.belongsToMany(models.Tech, { through: 'project_tech', foreignKey: 'project_id'});
    }
  }
  Project.init({
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    github_url: DataTypes.STRING,
    demo_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};