'use strict';

/**
 * user-master controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-master.user-master');
