// package metadata file for Meteor.js
'use strict';

Package.describe({
  summary: "A momentjs plugin for matching and generating recurring dates.",
  version: "1.0.0",
  name: "momentjs:moment-recur",
  git: "https://github.com/adelq/meteor-moment-recur.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use('momentjs:moment@2.11.1');
  api.addFiles([
      'meteor/export.js',
      'lib/moment-recur/moment-recur.js',
      'meteor/clear.js'
  ]);
});
