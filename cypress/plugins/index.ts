import dotenv from 'dotenv';

dotenv.config();

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  config.env.READING_LIST_EXTENSION_SECRET = process.env.READING_LIST_EXTENSION_SECRET

  return config
}
