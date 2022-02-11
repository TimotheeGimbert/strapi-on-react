'use strict';

/**
 *  client controller
 */

/* This below does not work, thanks THP */
/*  const slugify = require('slugify');
 module.exports = {
   lifecycles: {
     async beforeCreate(data) {
       if (data.name) {
         data.slug = slugify(data.name, {lower: true});
       }
     },
     async beforeUpdate(params, data) {
       if (data.name) {
         data.slug = slugify(data.name, {lower: true});
       }
     },
   },
 }; */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::client.client');
