require('babel-core/register');
require('babel-polyfill');
require('jasmine-ajax');

beforeEach(function() {
  jasmine.Ajax.install();
  jasmine.clock().install();
});

afterEach(function() {
  jasmine.Ajax.uninstall();
  jasmine.clock().uninstall();
});
