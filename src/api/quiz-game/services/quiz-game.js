'use strict';

/**
 * quiz-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quiz-game.quiz-game');
