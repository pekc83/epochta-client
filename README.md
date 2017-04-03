# ePochta SMS API (v. 3.0) Client

## Installation
    npm install epochta-client

## Usage

```javascript
const epocthaAPI = require('epochta-client');

const keys = {
  publicKey: 'your public API key',
  privateKey: 'your private API key',
};

const client = epocthaAPI(keys);

client.sendSMS({
  sender: 'senderName',
  text: 'Some text',
  phone: 'some phone number'
})
  .then(function(result) {
    // process result
  })
  .catch(function(error) {
    // process error
  });

```

## Docs

For full module documentation see: https://pekc83.github.io/epochta-client/

API specification could be found here: https://www.epochta.ru/products/sms/v3.php

## Tests

    npm test
