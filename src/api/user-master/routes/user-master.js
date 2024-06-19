'use strict';

/**
 * user-master router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-master.user-master');
