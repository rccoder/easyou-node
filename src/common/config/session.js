'use strict';

/**
 * session configs
 */
export default {
  name: 'easyou',
  type: 'file',
  secret: 'MTE`KJV%',
  timeout: 24 * 3600,
  cookie: { // cookie options
    length: 32,
    httponly: true
  },
  adapter: {
    file: {
      path: think.getPath('common', 'runtime') + '/session',
    }
  }
};