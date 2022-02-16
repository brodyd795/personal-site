import dotenv from 'dotenv';

dotenv.config();

type Config = { 
  env: {
    READING_LIST_EXTENSION_SECRET: string | undefined; 
  };
};

module.exports = (on, config: Config) => {
  // eslint-disable-next-line no-param-reassign
  config.env.READING_LIST_EXTENSION_SECRET = process.env.READING_LIST_EXTENSION_SECRET

  return config
}
