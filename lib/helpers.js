/**
 * The crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions.
 * @external
 * @see {@link https://nodejs.org/api/crypto.html Node.js Crypto module}
 */
const crypto = require('crypto');

/**
 * Calculates request checksum according to ePochta API v3.0 algorithm
 * @see {@link http://www.epochta.ru/products/sms/v3.php}
 * @param {Object} args - API request arguments
 * @param {string} privateKey - API private key
 * @return {string} Checksum
 * @private
 */
function checksum(args, privateKey) {
  const argsValues = Object.keys(args).sort().reduce(function(sum, key) {
    return sum + (Array.isArray(args[key]) ? 'Array' : args[key]);
  }, '');
  return crypto.createHash('md5').update(argsValues + privateKey).digest('hex');
}

/**
 * Parsing API response result
 * @param {Object} result
 * @return {*}
 * @private
 */
function parseResult(result) {
  const resultKeys = Object.keys(result);
  if (resultKeys.length === 1) {
    return result[resultKeys[0]];
  }
  if (result.fields && Array.isArray(result.data)) {
    const resultArray = [];
    for (let i = 0; i < result.data.length; i++) {
      const resultNode = {};
      for (let j = 0; j < result.fields.length; j++) {
        resultNode[result.fields[j]] = result.data[i][j];
      }
      resultArray.push(resultNode);
    }
    return resultArray;
  }
  return result;
}

module.exports = {checksum, parseResult};
