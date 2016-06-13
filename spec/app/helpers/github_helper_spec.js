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
});

