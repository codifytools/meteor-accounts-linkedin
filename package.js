Package.describe({
  name: 'codifytools:accounts-linkedin',
  version: '1.0.3',
  summary: 'Login service for Linkedin accounts',
  git: 'https://github.com/codifytools/meteor-accounts-linkedin',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('2.3');
  api.use('ecmascript');
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('codifytools:linkedin-oauth@1.0.3');
  api.imply('codifytools:linkedin-oauth');

  api.addFiles("linkedin.js");
});