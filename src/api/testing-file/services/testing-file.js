'use strict';

/**
 * testing-file service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testing-file.testing-file');
