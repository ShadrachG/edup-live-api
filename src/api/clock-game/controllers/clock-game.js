'use strict';

/**
 * clock-game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::clock-game.clock-game');
