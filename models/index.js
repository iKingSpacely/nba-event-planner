const User = require('./User');
const Project = require('./Project');
const Results = require('./Results');
const Comments = require('./Comments');

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

User.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comments.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project, Results, Comments };