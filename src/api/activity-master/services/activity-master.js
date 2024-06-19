'use strict';

/**
 * activity-master service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::activity-master.activity-master');
