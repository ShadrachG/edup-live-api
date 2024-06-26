'use strict';

/**
 * testing-file router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::testing-file.testing-file');
