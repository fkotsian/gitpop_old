require('../spec_helper');

describe('GithubClient', function() {
  let GithubClient = require('../../src/lib/github_client');

  describe('configuration', function() {
    it('sets the Github API base URL', function() {
      expect(GithubClient.BASE_URL).toEqual('https://api.github.com');
    });
  });

  describe('fetching data from the API', function() {
    describe('when the response is unauthorized', function() {
      it('displays an error to the user', function() {
      });
    });

    describe('when the response is authorized', function() {
      let path = '/some_path';

      it('makes a request to the specified path on GitHub', function() {
        GithubClient.fetch(path);
        
        jasmine.clock().tick(40);
        const lastReq = jasmine.Ajax.requests.mostRecent();
        expect(lastReq.url).toEqual(GithubClient.BASE_URL + path);
      });

      it('sets the auth headers', function() {
        GithubClient.fetch(path);
        
        jasmine.clock().tick(40);
        const lastReq = jasmine.Ajax.requests.mostRecent();
        expect(lastReq.requestHeaders.authorization).toEqual('auth token');
      });

      it('sets the accept JSON header', function() {
        GithubClient.fetch(path);
        
        jasmine.clock().tick(40);
        const lastReq = jasmine.Ajax.requests.mostRecent();
        expect(lastReq.requestHeaders.accept).toEqualual('application/json');
      });
    });
  });
});

