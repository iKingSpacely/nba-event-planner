const User = require('./User');
const Project = require('./Project');
const Results = require('./Results');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Results, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Results.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project, Results };