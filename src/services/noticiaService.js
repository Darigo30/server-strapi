const moment = require('moment');
const axios = require('axios');
const { env } = require('@strapi/utils');

const environment = {
  apiNoticias: 'http://localhost:8000/api/noticias-befs',
  apiToken: 'f8713e39ef8d6bf6edc3ccd5c14e1db9a0fecd4ef0caa30de661aaf677179ec4bbbc1421df6215bc92f63f7bea5835f01fd0c76ba9aadd2d8eb1db31654d6b7c4cf5458101e51bf3798ff561765819eb264cf631a42c41905c5eca11f3a0bc9899452e13ba4a6096a64080593865e470c0170174276c0c8b78376dfd0eb66806'
};

async function updateNoticia(id, data) {
  const formattedData = {
    ...data,
    created: moment(data.created).format('YYYY-MM-DD'),
    modified: moment(data.modified).format('YYYY-MM-DD'),
    publish_up: moment(data.publish_up).format('YYYY-MM-DD'),
    publish_down: moment(data.publish_down).format('YYYY-MM-DD'),
  };

  try {
    const response = await axios.put(`${environment.apiNoticias}/${id}`, formattedData, {
      headers: {
        Authorization: 'Bearer ' + environment.apiToken,
      }
    });
    console.log('Noticia actualizada:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar la noticia:', error);
    throw error;
  }
}

module.exports = { updateNoticia };
