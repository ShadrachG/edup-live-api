'use strict';

/**
 * number-game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::number-game.number-game');
