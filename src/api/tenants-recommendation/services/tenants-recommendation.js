'use strict';

/**
 * tenants-recommendation service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tenants-recommendation.tenants-recommendation');
