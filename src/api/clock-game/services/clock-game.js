'use strict';

/**
 * clock-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::clock-game.clock-game');
