'use strict';

/**
 * noticias-bef controller
 */

const moment = require('moment');
const { createCoreController } = require('@strapi/strapi').factories;
console.log('Noticias Controller Loaded');
module.exports = createCoreController('api::noticias-bef.noticias-bef', ({ strapi }) => ({
  async update(ctx) {
    const { id } = ctx.params;
    const data = ctx.request.body;

    // Formatear fechas antes de guardar
    if (data.created) {
      data.created = moment(data.created).format('yyyy-MM-dd');
    }
    if (data.modified) {
      data.modified = moment(data.modified).format('yyyy-MM-dd');
    }
    if (data.publish_up) {
      data.publish_up = moment(data.publish_up).format('yyyy-MM-dd');
    }
    if (data.publish_down) {
      data.publish_down = moment(data.publish_down).format('yyyy-MM-dd');
    }

    try {
      const updatedNoticia = await strapi.service('api::noticias-bef.noticias-bef').update(id, { data });
      ctx.send(updatedNoticia);
    } catch (error) {
      console.error('Error al actualizar la noticia:', error);
      ctx.throw(500, 'Error al actualizar la noticia');
    }
  },
}));
