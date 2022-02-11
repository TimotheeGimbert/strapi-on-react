# Create an app strapi
npx create-strapi-app myAppName --quickstart

# Param api
http://localhost:1337/admin

# Install slugify to use slugs
Dans l'api, passer le slug a non-editable field
npm i slugify
Puis dans api/client/models/Client.js :

'use strict';
const slugify = require('slugify');

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
};


>> On peut alors accéder avec le slug : /clients?slug=myexample