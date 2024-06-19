'use strict';

/**
 * matching-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::matching-game.matching-game');
