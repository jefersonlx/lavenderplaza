import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND_TOP}`;

function getAll() {
  // console.log(config.URL_BACKEND_TOP);
  return fetch(`${URL_CATEGORIAS}/categorias`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados');
    });
  // return config.URL_BACKEND_TOP;
}
function getAllWithVideos() {
  // console.log(config.URL_BACKEND_TOP);
  return fetch(`${URL_CATEGORIAS}/categorias?_embed=videos`)
    .then(async (respostaDoServer) => {
      if (respostaDoServer.ok) {
        const resposta = await respostaDoServer.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados');
    });
  // return config.URL_BACKEND_TOP;
}

export default {
  getAllWithVideos,
  getAll,
};
