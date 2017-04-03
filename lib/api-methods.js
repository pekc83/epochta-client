/**
 * @classdesc {@link https://www.epochta.ru/products/sms/v3.php Original API methods specification}
 * - All methods returns {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise Promise}</li>
 * - All Promises could be rejected with {@link module:epochta-client.APIClient.APIError APIError} or {@link module:epochta-client.APIClient.ResponseCodeError ResponseCodeError} or any
 * error returned by {@link external:request}.
 * @interface
 * @inner
 * @memberOf module:epochta-client
 * @description Default methods performs validation of required arguments
 */
const APIMethodsInterface = {
  /**
   * Creates new address book with provided name and description.
   * @param {Object} apiRequestArguments
   * @param {string} apiRequestArguments.name - Name of the address book
   * @param {string} [apiRequestArguments.description] - Description of the address book
   * @return {Promise<number>} - Unique identifier of the created address book
   */
  addAddressBook(apiRequestArguments) {
    return apiRequestArguments.name;
  },

  /**
   * Deletes an address book by id.
   * @param {Object} apiRequestArguments
   * @param {number} apiRequestArguments.idAddressBook - id of the address book to delete
   * @return {Promise<boolean>} - In case of success returns true, otherwise throws Error
   */
  delAddressBook(apiRequestArguments) {
    return apiRequestArguments.idAddressBook;
  },

  /**
   * Returns address book data. If no arguments provided - returns all address books data.
   * @param {Object} apiRequestArguments
   * @param {number} [apiRequestArguments.idAddressBook] - id of the address book to get data. If not provided, returns all address books data
   * @param {number} [apiRequestArguments.from] - return address books starting at 'from' (API inner index number NOT AN idAddressBook !!!)
   * @param {number} [apiRequestArguments.offset] - number of address books to return
   * @return {Promise<module:epochta-client.AddressBook|Array<module:epochta-client.AddressBook>>}
   */
  getAddressBook(apiRequestArguments) {
    return apiRequestArguments;
  },

  /**
   * Performs search of address book
   * @param {Object} apiRequestArguments
   * @param {module:epochta-client.AddressBookSearchFields} apiRequestArguments.searchFields - Search params object
   * @param {number} [apiRequestArguments.from] - return address books starting at 'from' (search result array index number NOT AN idAddressBook !!!)
   * @param {number} [apiRequestArguments.offset] - number of address books to return
   * @return {Promise<module:epochta-client.AddressBook|Array<module:epochta-client.AddressBook>>}
   */
  searchAddressBook(apiRequestArguments) {
    return apiRequestArguments.searchFields;
  },

  /**
   * Creates a copy of address book with new id
   * @param {Object} apiRequestArguments
   * @param {number} apiRequestArguments.idAddressBook - id of the address book to clone
   * @return {Promise<module:epochta-client.AddressBookClonedResponse>}
   */
  cloneAddressBook(apiRequestArguments) {
    return apiRequestArguments.idAddressBook;
  },

  /**
   * Adds phone number to address book
   * @param {Object} apiRequestArguments
   * @param {number} apiRequestArguments.idAddressBook - id of the address book
   * @param {number} [apiRequestArguments.phone] - phone number
   * @param {Array<number, string>} [apiRequestArguments.data] - array of phone numbers and variables
   * @param {number} [apiRequestArguments.variables] - personalization variables
   * @return {Promise<number>} Phone number id
   */
  addPhoneToAddressBook(apiRequestArguments) {
    return apiRequestArguments.idAddressBook &&
      (apiRequestArguments.phone || apiRequestArguments.data);
  },

  /**
   * Retrieves phone numbers data
   * @param {Object} apiRequestArguments
   * @param {number} [apiRequestArguments.idAddressBook] - id of the address book
   * @param {number} [apiRequestArguments.idPhone] - phone number id
   * @param {number} [apiRequestArguments.phone] - phone number
   * @param {number} [apiRequestArguments.from] - return phone numbers starting at 'from'
   * @param {number} [apiRequestArguments.offset] - number of phone numbers to return
   * @return {Promise<module:epochta-client.PhoneNumber|Array<module:epochta-client.PhoneNumber>>}
   */
  getPhoneFromAddressBook(apiRequestArguments) {
    return apiRequestArguments;
  },

  /**
   * Deletes phone number from address book
   * @param {Object} apiRequestArguments
   * @param {number} [apiRequestArguments.idAddressBook] - id of the address book
   * @param {number} [apiRequestArguments.idPhone] - id of the phone number to delete
   * @return {Promise<boolean>} - In case of success returns true, otherwise throws Error
   */
  delPhoneFromAddressBook(apiRequestArguments) {
    return apiRequestArguments.idAddressBook || apiRequestArguments.idPhone;
  },

  /**
   * Deletes group of phone numbers from address book
   * @param {Object} apiRequestArguments
   * @param {string} apiRequestArguments.idPhones - phone number ids to delete, separated with comma
   * @return {Promise<boolean>} - In case of success returns true, otherwise throws Error
   */
  delPhoneFromAddressBookGroup(apiRequestArguments) {
    return apiRequestArguments.idPhones;
  },

  /**
   * Edits phone number
   * @param {Object} apiRequestArguments
   * @param {number} apiRequestArguments.idPhone - phone number id
   * @param {number} apiRequestArguments.phone - new phone number
   * @param {number} apiRequestArguments.variables - new personalization variables
   * @return {Promise<boolean>} - In case of success returns true, otherwise throws Error
   */
  editPhone(apiRequestArguments) {
    return apiRequestArguments.idPhone &&
           apiRequestArguments.phone &&
           apiRequestArguments.variables;
  },

  /**
   * Search for phone number
   * @param {Object} apiRequestArguments
   * @param {module:epochta-client.PhoneNumberSearchFields} apiRequestArguments.searchFields - Search params object
   * @param {number} [apiRequestArguments.from] - return phone numbers starting at 'from'
   * @param {number} [apiRequestArguments.offset] - number of phone numbers to return
   * @return {Promise<module:epochta-client.PhoneNumber|Array<module:epochta-client.PhoneNumber>>}
   */
  searchPhones(apiRequestArguments) {
    return apiRequestArguments.searchFields;
  },

  /**
   * Add phone number to exceptions
   * @param {Object} apiRequestArguments
   * @param {number} [apiRequestArguments.idPhone] - phone number record id
   * @param {number} [apiRequestArguments.phone] - phone number
   * @param {string} [apiRequestArguments.reason] - reason for adding phone to exception
   * @return {Promise<number>} unique exception id
   */
  addPhoneToExceptions(apiRequestArguments) {
    return apiRequestArguments.idPhone || apiRequestArguments.phone;
  },

  /**
   * Delete phone number from exceptions
   * @param {Object} apiRequestArguments
   * @param {number} [apiRequestArguments.idPhone] - phone number record id
   * @param {number} [apiRequestArguments.phone] - phone number
   * @param {number} [apiRequestArguments.idException] - exception id
   * @return {Promise<boolean>}
   */
  delPhoneFromExceptions(apiRequestArguments) {
    return apiRequestArguments.idPhone ||
           apiRequestArguments.phone ||
           apiRequestArguments.idException;
  },

  /**
   * Edit phone number in exceptions
   * @param {Object} apiRequestArguments
   * @param {number} [apiRequestArguments.idException] - exception id
   * @param {string} [apiRequestArguments.reason] - reason for adding phone to exception
   * @return {Promise<boolean>}
   */
  editExceptions(apiRequestArguments) {
    return apiRequestArguments.idException && apiRequestArguments.reason;
  },

  /**
   * Get an exception / exceptions
   * @param {Object} apiRequestArguments
   * @param {number} [apiRequestArguments.idException] - exception id
   * @param {number} [apiRequestArguments.phone] - phone number
   * @param {number} [apiRequestArguments.idAddressBook] - id of the address book to delete
   * @param {number} [apiRequestArguments.from] - return exceptions starting at 'from'
   * @param {number} [apiRequestArguments.offset] - number of exceptions to return
   * @return {Promise<module:epochta-client.PhoneException|Array<module:epochta-client.PhoneException>>}
   */
  getException(apiRequestArguments) {
    return apiRequestArguments;
  },

  /**
   * Search for exceptions
   * @param {Object} apiRequestArguments
   * @param {module:epochta-client.AddressBookSearchFields} apiRequestArguments.searchFields - Search params object
   * @param {number} [apiRequestArguments.from] - return exceptions starting at 'from'
   * @param {number} [apiRequestArguments.offset] - number of exceptions to return
   * @return {Promise<module:epochta-client.PhoneException|Array<module:epochta-client.PhoneException>>}
   */
  searchPhonesInExceptions(apiRequestArguments) {
    return apiRequestArguments.searchFields;
  },

  /**
   * Balance check
   * @param {Object} apiRequestArguments
   * @param {module:epochta-client.Currency} [apiRequestArguments.currency] - currency
   * @return {Promise<module:epochta-client.Balance>}
   */
  getUserBalance(apiRequestArguments) {
    return apiRequestArguments;
  },

  /**
   * Sender name registration
   * @param {Object} apiRequestArguments
   * @param {string} apiRequestArguments.name - sender name (11 letters or 14 digits max!)
   * @param {string} [apiRequestArguments.description] - base64 encrypted description of provided services (required for UA)
   * @param {string} [apiRequestArguments.siteUrl] - contact site url (required for UA)
   * @param {string} [apiRequestArguments.smsSubject] - base64 encrypted sms subject (required for UA)
   * @param {string} [apiRequestArguments.taxId] - TIN
   * @param {string} [apiRequestArguments.taxName] - base64 encrypted name of your legal entity
   * @param {number} [apiRequestArguments.operatorId] - operator 1-Megafon, 2-MTS (required for RU)
   * @param {'RU'|'UA'|'SA'|'EG'} apiRequestArguments.country - registration country
   * @return {Promise<module:epochta-client.SenderShortName>}
   */
  registerSenderName(apiRequestArguments) {
    return apiRequestArguments.name && apiRequestArguments.country;
  },

  /**
   * Get sender data
   * @param {Object} apiRequestArguments
   * @param {number} [apiRequestArguments.idName] - sender id
   * @param {string} [apiRequestArguments.name] - sender name
   * @param {string} [apiRequestArguments.country] - registration country
   * @param {number} [apiRequestArguments.from] - return sender names starting at 'from'
   * @param {number} [apiRequestArguments.offset] - number of sender names to return
   * @return {Promise<module:epochta-client.SenderName|Array<module:epochta-client.SenderName>>}
   */
  getSenderStatus(apiRequestArguments) {
    return apiRequestArguments.idName ||
           apiRequestArguments.name ||
           apiRequestArguments.from;
  },

  /**
   * Create campaign by address book
   * @param {Object} apiRequestArguments
   * @param {number} apiRequestArguments.sender - sender id
   * @param {string} apiRequestArguments.text - message text
   * @param {number} apiRequestArguments.list_id - address book id
   * @param {Date} [apiRequestArguments.datetime] - to schedule mailing for a given date-time
   * @param {number} [apiRequestArguments.batch=0] - For partial mailing - the number of sms in the 1st part
   * @param {number} [apiRequestArguments.batchinterval=0] - For partial mailing - interval between parts
   * @param {number} [apiRequestArguments.sms_lifetime=0] - Lifetime of SMS (hours) 0 == maximum
   * @param {number} [apiRequestArguments.control_phone] - phone number for mailing quality control
   * @param {2|3|4} [apiRequestArguments.type] - Russian Federation only, see {@link https://www.epochta.ru/products/sms/v3.php}
   * @param {number} [apiRequestArguments.asender] - alternative sender
   * @return {Promise<{id: number, price: number}>} - id and price(in user currency) for created campaign
   */
  createCampaign(apiRequestArguments) {
    apiRequestArguments.datetime = apiRequestArguments.datetime || '';
    apiRequestArguments.datetime = apiRequestArguments.batch || 0;
    apiRequestArguments.datetime = apiRequestArguments.batchinterval || 0;
    apiRequestArguments.sms_lifetime = apiRequestArguments.sms_lifetime || 0;
    return apiRequestArguments.sender &&
           apiRequestArguments.text &&
           apiRequestArguments.list_id;
  },

  /**
   * Send SMS to any phone
   * @param {Object} apiRequestArguments
   * @param {number} apiRequestArguments.sender - sender id
   * @param {string} apiRequestArguments.text - message text
   * @param {number} apiRequestArguments.phone - recipient phone number
   * @param {Date} [apiRequestArguments.datetime] - to schedule mailing for a given date-time
   * @param {number} [apiRequestArguments.sms_lifetime=0] - Lifetime of SMS (hours) 0 == maximum
   * @param {2|3|4} [apiRequestArguments.type] - Russian Federation only, see {@link https://www.epochta.ru/products/sms/v3.php}
   * @param {number} [apiRequestArguments.asender] - alternative sender
   * @return {Promise<{id: number, price: number}>} - id and price(in user currency) for created campaign
   */
  sendSMS(apiRequestArguments) {
    apiRequestArguments.datetime = apiRequestArguments.datetime || '';
    apiRequestArguments.sms_lifetime = apiRequestArguments.sms_lifetime || 0;
    return apiRequestArguments.sender &&
           apiRequestArguments.text &&
           apiRequestArguments.phone;
  },

  /**
   * Send SMS to custom group of recipients
   * @param {Object} apiRequestArguments
   * @param {number} apiRequestArguments.sender - sender id
   * @param {string} apiRequestArguments.text - message text
   * @param {string} apiRequestArguments.phones - JSON string, array of arrays ["phone number"[, "variables"]]
   * @param {Date} [apiRequestArguments.datetime] - to schedule mailing for a given date-time
   * @param {number} [apiRequestArguments.sms_lifetime=0] - Lifetime of SMS (hours) 0 == maximum
   * @param {2|3|4} [apiRequestArguments.type] - Russian Federation only, see {@link https://www.epochta.ru/products/sms/v3.php}
   * @param {number} [apiRequestArguments.asender] - alternative sender
   * @return {Promise<{id: number, price: number}>} - id and price(in user currency) for created campaign
   */
  sendSMSGroup(apiRequestArguments) {
    apiRequestArguments.datetime = apiRequestArguments.datetime || '';
    apiRequestArguments.sms_lifetime = apiRequestArguments.sms_lifetime || 0;
    return apiRequestArguments.sender &&
           apiRequestArguments.text &&
           apiRequestArguments.phones;
  },

  /**
   * Get campaign information
   * @param {Object} apiRequestArguments
   * @param {number} apiRequestArguments.id - campaign id
   * @return {Promise<module:epochta-client.CampaignInfo>}
   */
  getCampaignInfo(apiRequestArguments) {
    return apiRequestArguments.id;
  },

  /**
   * Get campaign delivery statuses information
   * @param {Object} apiRequestArguments
   * @param {number} apiRequestArguments.id - campaign id
   * @param {Date} [apiRequestArguments.datefrom] - return only statuses updated after datefrom
   * @return {Promise<module:epochta-client.CampaignDeliveryStats>}
   */
  getCampaignDeliveryStats(apiRequestArguments) {
    return apiRequestArguments.id;
  },

  /**
   * Cancel campaign until it started
   * @param {Object} apiRequestArguments
   * @param {number} apiRequestArguments.id - campaign id
   * @return {Promise<number>}
   */
  cancelCampaign(apiRequestArguments) {
    return apiRequestArguments.id;
  },

  /**
   * Delete campaign
   * @param {Object} apiRequestArguments
   * @param {number} apiRequestArguments.id - campaign id
   * @return {Promise<number>}
   */
  deleteCampaign(apiRequestArguments) {
    return apiRequestArguments.id;
  },

  /**
   * Check campaign price by address book
   * @param {Object} apiRequestArguments
   * @param {number} apiRequestArguments.sender - sender id
   * @param {string} apiRequestArguments.text - message text
   * @param {number} apiRequestArguments.list_id - address book id
   * @param {2|3|4} [apiRequestArguments.type] - Russian Federation only, see {@link https://www.epochta.ru/products/sms/v3.php}
   * @param {number} [apiRequestArguments.asender] - alternative sender
   * @return {Promise<number>} campaign price in current currency
   */
  checkCampaignPrice(apiRequestArguments) {
    return apiRequestArguments.sender &&
      apiRequestArguments.text &&
      apiRequestArguments.list_id;
  },

  /**
   * Check campaign price for a custom group of recipients
   * @param {Object} apiRequestArguments
   * @param {number} apiRequestArguments.sender - sender id
   * @param {string} apiRequestArguments.text - message text
   * @param {string} apiRequestArguments.phones - JSON string, array of arrays ["phone number"[, "variables"]]
   * @param {2|3|4} [apiRequestArguments.type] - Russian Federation only, see {@link https://www.epochta.ru/products/sms/v3.php}
   * @param {number} [apiRequestArguments.asender] - alternative sender
   * @return {Promise<{price: number, currency: string}>}
   */
  checkCampaignPriceGroup(apiRequestArguments) {
    return apiRequestArguments.sender &&
      apiRequestArguments.text &&
      apiRequestArguments.phones;
  },

  /**
   * Get a list of campaigns
   * @param {Object} apiRequestArguments
   * @return {Promise<module:epochta-client.CampaignList>}
   */
  getCampaignList(apiRequestArguments) {
    return apiRequestArguments;
  },

  /**
   * Get campaign delivery statuses information for a group of campaigns
   * @param {Object} apiRequestArguments
   * @param {string} apiRequestArguments.id - campaign ids separated with comma
   * @return {Promise<module:epochta-client.CampaignDeliveryStats>}
   */
  getCampaignDeliveryStatsGroup(apiRequestArguments) {
    return apiRequestArguments.id;
  },

  /**
   * Get full status for campaigns
   * @param {Object} apiRequestArguments
   * @param {string} apiRequestArguments.taskIds - campaign ids separated with comma
   * @return {Promise<Array<module:epochta-client.TaskInfo>>}
   */
  getTaskInfo(apiRequestArguments) {
    return apiRequestArguments.taskIds;
  },

};

module.exports = APIMethodsInterface;
