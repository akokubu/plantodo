'use strict';

module.exports = {
  env: 'test',
  mongo: {
    uri: 'mongodb://' + process.env.WERCKER_MONGODB_HOST + '/plantodo-test'    
  }
};