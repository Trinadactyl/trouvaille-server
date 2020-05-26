/* eslint-disable strict */

module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DB_URL,
  TEST_DB_URL: process.env.TEST_DB_URL,
  JWT_SECRET: process.env.JWT_SECRET || '68$IJy2&dafUHh8!*lcn^hJlo+.JH',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '3h',
};
