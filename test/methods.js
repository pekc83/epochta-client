/* eslint-env node, mocha */
const nock = require('nock');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();

let epochtaAPI;
let client;
const keys = {
  publicKey: 'publicKey',
  privateKey: 'privateKey',
};

const methods = {
  addAddressBook: {name: 'name'},
  delAddressBook: {idAddressBook: 1},
  getAddressBook: {idAddressBook: 1},
  searchAddressBook: {searchFields: {}},
  cloneAddressBook: {idAddressBook: 1},
  addPhoneToAddressBook:
    {idAddressBook: 1, data: [[101, 'test'], [102, 'test3']]},
  getPhoneFromAddressBook: {},
  delPhoneFromAddressBook: {idPhone: 1},
  delPhoneFromAddressBookGroup: {idPhones: '1,2,3'},
  editPhone: {idPhone: 1, phone: 102, variables: 'test1;test2'},
  searchPhones: {searchFields: {}},
  addPhoneToExceptions: {phone: 102},
  delPhoneFromExceptions: {idException: 1},
  editExceptions: {idException: 1, reason: 'some reason'},
  getException: {},
  searchPhonesInExceptions: {searchFields: {}},
  getUserBalance: {},
  registerSenderName: {name: 'some name', country: 'UA'},
  getSenderStatus: {from: 1},
  createCampaign: {sender: 1, text: 'message', list_id: 1},
  sendSMS: {sender: 1, text: 'message', phone: 102},
  sendSMSGroup: {sender: 1, text: 'message', phones: [[102], [101]]},
  getCampaignInfo: {id: 1},
  getCampaignDeliveryStats: {id: 1},
  cancelCampaign: {id: 1},
  deleteCampaign: {id: 1},
  checkCampaignPrice: {sender: 1, text: 'message', list_id: 1},
  checkCampaignPriceGroup: {sender: 1, text: 'message', phones: [[102], [101]]},
  getCampaignList: {},
  getCampaignDeliveryStatsGroup: {id: '1,3,6'},
  getTaskInfo: {taskIds: '1,3,6'},
};

const server = nock('http://api.myatompark.com/sms/3.0/');

describe('client methods', function() {
  before(function loadLib() {
    epochtaAPI = require('../lib');
    client = epochtaAPI(keys);
    nock.cleanAll();
    server.persist().post(/.*/).reply(200, {result: {done: true}});
  });

  for (let i in methods) {
    if (methods.hasOwnProperty(i)) {
      it(`should make #${i} API request`, function() {
        return client[i](methods[i]).should.become(true);
      });
    }
  }
});
