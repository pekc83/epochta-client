/* eslint-env node, mocha */
const helpers = require('../lib/helpers');
const expect = require('chai').expect;

const apiPrimitiveResult = {successful: true};
const apiPrimitiveParsedResult = true;

const apiObjectResult = {
  id: 2161,
  name: 'super book',
};

const apiArrayResult = {
  count: 2,
  fields: ['id', 'name'],
  data: [
    [
      '21597',
      'new book',
    ],
    [
      '18684',
      'testNAME',
    ],
  ],
};
const apiArrayParsedResult = [
  {
    id: '21597',
    name: 'new book',
  },
  {
    id: '18684',
    name: 'testNAME',
  },
];

const apiRequestKeys = {
  offset: 2,
  test: 1,
  key: 'publicKey',
  version: '3.0',
  action: 'getAddressbook',
};
const privateKey = 'privateKey';
const checksum = 'a1b6f5a0faff9f304ec37a8299fa430b';

describe('helpers', function() {
  describe('#parseResult', function() {
    it('should parse primitive result', function() {
      expect(helpers.parseResult(apiPrimitiveResult))
        .to.be.equal(apiPrimitiveParsedResult);
    });

    it('should return single object result as is', function() {
      expect(helpers.parseResult(apiObjectResult))
        .to.be.equal(apiObjectResult);
    });

    it('should parse array result', function() {
      expect(helpers.parseResult(apiArrayResult))
        .to.be.deep.equal(apiArrayParsedResult);
    });
  });

  describe('#checksum', function() {
    it('should calculate checksum', function() {
      expect(helpers.checksum(apiRequestKeys, privateKey))
        .to.be.equal(checksum);
    });
  });
});

