var seeder = require('mongoose-seed');
var serverConfig = require('../src/backend/config');

var users = require('./data/users');
var categories = require('./data/categories');
var tags = require('./data/tags');
var resources = require('./data/resources');

var data = [
  { model: 'User', documents: users },
  { model: 'Category', documents: categories },
  { model: 'Tag', documents: tags },
  { model: 'Resources', documents: resources },
];

seeder.connect(serverConfig.mongoURL, () => {
  seeder.loadModels([
    '../dist/category.js',
    '../dist/resource.js',
    '../dist/tag.js',
    '../dist/user.js'
  ]);

  seeder.clearModels(['Category', 'Resource', 'Tag', 'User'], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});

