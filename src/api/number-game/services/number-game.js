'use strict';

/**
 * number-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::number-game.number-game');
