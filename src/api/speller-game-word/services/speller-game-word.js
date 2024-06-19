'use strict';

/**
 * speller-game-word service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::speller-game-word.speller-game-word');
