'use strict';

/**
 * speller-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::speller-game.speller-game');
