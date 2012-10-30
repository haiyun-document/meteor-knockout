Package.describe({
  summary: "Data bindings and form validation for Meteor."
});

Package.on_use(function (api, where) {
  api.use('underscore', ['client', 'server']);

  api.add_files('lib/knockout/knockout.js', 'client');
  api.add_files('lib/knockout/knockout.mapping.js', 'client');
  api.add_files('lib/knockout.validation/knockout.validation.js', 'client');
  api.add_files('lib/knockout.validation/en-US.js', 'client');
  api.add_files('lib/knockout.meteor/build/knockout.meteor.js', 'client');
});