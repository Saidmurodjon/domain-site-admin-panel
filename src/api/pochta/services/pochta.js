'use strict';

/**
 * pochta service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pochta.pochta');
