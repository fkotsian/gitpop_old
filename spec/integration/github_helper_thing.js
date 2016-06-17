require('../../spec_helper');

describe('GithubHelper', function() {
  let fetchHelper = require('../../../app/helpers/fetch_helper');
  let GithubHelper = require('../../../app/helpers/github_helper');

  describe('#fetch', function() {
    let path = '/some_path';
    it('makes a request to the specified path at the Github API', function() {
      spyOn(fetchHelper, 'fetchJson');
      GithubHelper.fetch(path);
      expect(fetchHelper.fetchJson).toHaveBeenCalledWith('https://api.github.com/some_path', {});
    });
  });

  describe('fetching data from the API', function() {
    let path = '/some_path';
    let responseData = [
      {
        id: 1,
        data: 'some'
      },
      {
        id: 2,
        data: 'more'
      }
    ];

    it('makes a request to the specified path on GitHub', function() {
      let promiseOfData = new Deferred();
      let completed = jasmine.createSpy('completed');
      let failed = jasmine.createSpy('failed');

      spyOn(fetchHelper, 'fetchJson').and.callFake(function() { promiseOfData });
      let respPromise = GithubHelper.fetch(path);
      console.log(respPromise);
      let morePromise = respPromise.then(completed).catch(failed);
      //console.log(respPromise);

      let req = jasmine.Ajax.requests.mostRecent();
      req.succeed(morePromise);
      //expect(completed).toHaveBeenCalledWith(respPromise);

      expect('https://api.github.com/some_path').toHaveBeenRequested();
    });

    describe('when the request fails', function() {
      it('displays an informative error to the user', function() {
        return false;
      });
    });

    describe('when the request succeeds', function() {
    });
  });
});

