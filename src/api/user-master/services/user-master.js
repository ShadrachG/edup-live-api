'use strict';

/**
 * user-master service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-master.user-master');
