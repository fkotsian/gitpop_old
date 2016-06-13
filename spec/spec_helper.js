require('babel-core/register');
require('babel-polyfill');
require('jasmine-ajax');
require('pivotal-js-jasmine-matchers');

const MockPromises = require('mock-promises');
const ES6Promise = require('es6-promise');
const Deferred = require('./app/support/deferred');

let globals;

beforeAll(function() {
  ES6Promise.polyfill();

  globals = {
    Deferred,
    MockPromises
  };
  Object.assign(global, globals);
});

beforeEach(function() {
  jasmine.Ajax.install();
  jasmine.clock().install();
  MockPromises.install(Promise);
});

afterEach(function() {
  jasmine.Ajax.uninstall();
  jasmine.clock().uninstall();
  MockPromises.reset();
});

afterAll(function() {
  Object.keys(globals).forEach(key => delete global[key]);
});
