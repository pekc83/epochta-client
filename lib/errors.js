/**
 * @class
 * @static
 * @memberOf module:epochta-client.APIClient
 * @extends Error
 * @property {APIErrorCode} errCode - API Error code {@link module:epochta-client.APIClient.APIError.APIErrorCode List of Error codes}
 * @property {string} errDescription - Error description
 */
class APIError extends Error {

  /**
   * Constructor
   * @param {APIErrorCode} errCode - API Error code {@link module:epochta-client.APIClient.APIError.APIErrorCode List of Error codes}
   * @param {string} errDescription - Error description
   */
  constructor(errCode, errDescription) {
    super(`API Error code ${errCode} - ${errDescription}`);
    this.errCode = errCode;
    this.errDescription = errDescription;
  }
}

/**
 * @class
 * @static
 * @memberOf module:epochta-client.APIClient
 * @extends Error
 * @property {number} responseCode
 */
class ResponseCodeError extends Error {

  /**
   * Constructor
   * @param {number} responseCode
   */
  constructor(responseCode) {
    super(`Wrong response code ${responseCode}`);
    this.responseCode = responseCode;
  }
}

module.exports = {APIError, ResponseCodeError};

/**
 * @memberOf module:epochta-client.APIClient.APIError
 * @typedef {number} APIErrorCode
 * @description
 * |   Code  | Method                              | Description                                    |
 * |:--------|:------------------------------------|:-----------------------------------------------|
 * |   201   | addAddressBook                      | default error                                  |
 * |   202   | delAddressBook                      | wrong address book id                          |
 * |   203   | delAddressBook                      | default error                                  |
 * |   204   | editAddressBook                     | wrong address book id                          |
 * |   205   | editAddressBook                     | default error                                  |
 * |   206   | getAddressBook                      | wrong address book id                          |
 * |   207   | getAllAddressbook                   | default error                                  |
 * |   208   | getAllAddressbook                   | no address books                               |
 * |   209   | searchAddressbook                   | default error                                  |
 * |   210   | searchAddressbook                   | no address books                               |
 * |   211   | addPhoneToAddressBook               | phone number already exist                     |
 * |   212   | addPhoneToAddressBook               | wrong phone number                             |
 * |   213   | addPhoneToAddressBook               | invalid address book                           |
 * |   214   | getPhoneById                        | default error                                  |
 * |   215   | getPhoneById                        | phone number not found                         |
 * |   216   | getPhoneFromAddressBookByIdPhone    | default error                                  |
 * |   217   | getPhoneFromAddressBookByIdPhone    | phone number not found                         |
 * |   218   | addPhoneToAddressBook               | default error                                  |
 * |   219   | getPhoneByPhone                     | phone number not found                         |
 * |   220   | getPhoneByPhone                     | default error                                  |
 * |   221   | getPhoneFromAddressBook             | default error                                  |
 * |   222   | getPhoneFromAddressBook             | phone number not found                         |
 * |   223   | getPhonesByAddressBook              | default error                                  |
 * |   224   | getPhonesByAddressBook              | phone number not found                         |
 * |   225   | delPhoneById                        | default error                                  |
 * |   226   | delPhoneById                        | phone number not found                         |
 * |   227   | delPhonesByAddressBook              | default error                                  |
 * |   228   | delPhonesByAddressBook              | phone number not found                         |
 * |   229   | editPhone                           | phone number not found                         |
 * |   230   | editPhone                           | default error                                  |
 * |   231   | searchPhones                        | default error                                  |
 * |   232   | searchPhones                        | phone numbers not found                        |
 * |   233   | addPhoneToExceptionsByPhone         | phone number already in exceptions             |
 * |   234   | addPhoneToExceptionsByPhone         | default error                                  |
 * |   235   | AddPhoneToExceptionsByIdPhone       | phone number already in exceptions             |
 * |   236   | AddPhoneToExceptionsByIdPhone       | default error                                  |
 * |   237   | AddPhoneToExceptionsByIdPhone       | wrong phone number id                          |
 * |   238   | delPhoneFromExceptionsByPhone       | exceptions not found                           |
 * |   239   | delPhoneFromExceptionsByPhone       | default error                                  |
 * |   240   | delPhoneFromExceptionsByIdPhone     | wrong phone number for exception               |
 * |   241   | delPhoneFromExceptionsByIdPhone     | default error                                  |
 * |   242   | delPhoneFromExceptionsByIdPhone     | exceptions not found                           |
 * |   243   | delPhoneFromExceptionsByIdException | wrong exception id                             |
 * |   244   | delPhoneFromExceptionsByIdException | default error                                  |
 * |   245   | editException                       | default error                                  |
 * |   246   | getException                        | default error                                  |
 * |   247   | getException                        | exceptions not found                           |
 * |   248   | getExceptionByIdPhone               | default error                                  |
 * |   249   | getExceptionByIdPhone               | exceptions not found                           |
 * |   250   | getExceptionByIdPhone               | wrong phone number id                          |
 * |   251   | getExceptionByPhone                 | default error                                  |
 * |   252   | getExceptionByPhone                 | exceptions not found                           |
 * |   253   | getExceptionByIdAddresbook          | default error                                  |
 * |   254   | getExceptionByIdAddresbook          | exceptions not found                           |
 * |   255   | getAllExceptions                    | default error                                  |
 * |   256   | getAllExceptions                    | exceptions not found                           |
 * |   257   | searchPhonesInExceptions            | default error                                  |
 * |   258   | searchPhonesInExceptions            | exceptions not found                           |
 * |   259   | registerSender                      | name already exist                             |
 * |   260   | registerSender                      | wrong name                                     |
 * |   261   | registerSender                      | wrong country name                             |
 * |   262   | registerSender                      | default error                                  |
 * |   263   | registerSender                      | wrong status                                   |
 * |   264   | getSenderStatusById                 | sender name missing                            |
 * |   265   | getSenderStatusByNameCountry        | sender name missing                            |
 * |   266   | getSenderStatusAll                  | names not found                                |
 * |   267   | getSenderStatusAll                  | default error                                  |
 * |   300   | createCampaign or sendSMS           | sender id missing                              |
 * |   301   | createCampaign or sendSMS           | text missing                                   |
 * |   302   | createCampaign                      | wrong address book                             |
 * |   303   | createCampaign or sendSMS           | no valid recipients                            |
 * |   304   | createCampaign or sendSMS           | not enough credits on trial account            |
 * |   305   | createCampaign or sendSMS           | not enough money on account                    |
 * |   306   | createCampaign or sendSMS           | default error                                  |
 * |   310   | getCampaignInfo                     | wrong campaign id                              |
 * |   311   | getCampaignInfo                     | campaign has been deleted                      |
 * |   320   | getCampaignDeliveryStats            | wrong campaign id                              |
 * |   321   | getCampaignDeliveryStats            | campaign has been deleted                      |
 * |   322   | getCampaignDeliveryStats            | phone numbers not found                        |
 * |   330   | cancelCampaign                      | wrong campaign id                              |
 * |   331   | cancelCampaign                      | campaign has been deleted                      |
 * |   332   | cancelCampaign                      | campaign has been sent                         |
 * |   340   | deleteCampaign                      | wrong campaign id                              |
 * |   341   | deleteCampaign                      | campaign has been deleted                      |
 * |   350   | getCampaignList                     | no campaigns                                   |
 * |   360   | getCampaignList                     | no campaigns                                   |
 * |   370   | checkCampaignPrice                  | sender id missing                              |
 * |   371   | checkCampaignPrice                  | text missing                                   |
 * |   372   | checkCampaignPrice                  | wrong address book                             |
 * |   373   | checkCampaignPrice                  | no valid recipients                            |
 */
