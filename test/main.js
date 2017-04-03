/* eslint-env node, mocha */
const querystring = require('querystring');
const errors = require('../lib/errors');
const nock = require('nock');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
chai.should();

let epochtaAPI;
let client;
const keys = {
  publicKey: 'publicKey',
  privateKey: 'privateKey',
};

describe('general behavior', function() {
  before(function() {
    const server = nock('http://api.myatompark.com/sms/3.0/');

    server.post('/customMethod').reply(200, {result: {done: true}});
    server.post('/customError404Method').reply(404, {});
    server.post('/customBodyErrorMethod')
      .reply(200, {error: 'some error', code: -1});
    server.post('/customNetworkErrorMethod').replyWithError('network error');
    server.post('/customEcho')
      .reply(200, (uri, reqBody) => ({result: querystring.parse(reqBody)}));
  });

  beforeEach(function loadLib() {
    epochtaAPI = require('../lib');
  });

  afterEach(function unloadLib() {
    delete require.cache[require.resolve('../lib')];
  });

  describe('provide keys', function() {
    it('should throw error if no keys provided', function() {
      expect(epochtaAPI)
        .to.throw('provide publicKey and privateKey');
      expect(epochtaAPI.bind({}, {publicKey: 'publicKey'}))
        .to.throw('provide publicKey and privateKey');
      expect(epochtaAPI.bind({}, {privateKey: 'privateKey'}))
        .to.throw('provide publicKey and privateKey');
    });
  });

  describe('singleton', function() {
    it('should be singleton', function() {
      expect(epochtaAPI(keys)).to.be.equal(epochtaAPI(keys));
    });
  });


  describe('normal mode', function() {
    beforeEach(function reloadLib() {
      client = epochtaAPI(keys);
    });

    describe('custom methods', function() {
      it('should deny custom methods in normal mode', function() {
        expect(function() {
          client.customMethod();
        }).to.throw(/.+method doesn't exist in API/);
      });
    });

    describe('required arguments', function() {
      it('required arguments should present', function() {
        expect(client.addAddressBook.bind({}, {}))
          .to.throw('Some required arguments are missing');
      });
    });
  });

  describe('test mode', function() {
    beforeEach(function reloadLib() {
      client = epochtaAPI(keys, true);
    });

    describe('custom methods', function() {
      it('should allow custom methods in test mode', function() {
        expect(function() {
          client.customMethod();
        }).to.not.throw(/.+method doesn't exist in API/);
      });
    });

    describe('request arguments', function() {
      it('should present', function() {
        expect(function() {
          client.customMethod();
        }).to.throw('No arguments provided');
      });

      it('should be an object', function() {
        expect(function() {
          client.customMethod('some arg');
        }).to.throw('No arguments provided');
      });
    });

    describe('request', function() {
      it('should perform request', function() {
        return client.customMethod({}).should.become(true);
      });

      it('should be rejected on 404', function() {
        return client.customError404Method({})
          .should.be.rejectedWith(errors.ResponseCodeError);
      });

      it('should be rejected on body error', function() {
        return client.customBodyErrorMethod({})
          .should.be.rejectedWith(errors.APIError);
      });

      it('should be rejected on network error', function() {
        return client.customNetworkErrorMethod({})
          .should.be.rejectedWith('network error');
      });
    });

    describe('request arguments', function() {
      it('should provide arguments', function() {
        return client.customEcho({})
          .should.eventually.have.all.keys('test', 'sum', 'key');
      });
    });
  });
});
