import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

describe('Test on /mangas path', () => {
  let server = null;
  let api = null;
  let authToken = null; // Variable para almacenar el token de autenticación

  before(async () => {
    server = await app.listen(8000);
    api = request(app);

    // Iniciar sesión para obtener el token
    const loginResponse = await api.post('/auth/signin')
      .send({ email: 'lucas@mh.com.ar', password: 'hola1234' });

    authToken = loginResponse.body.token; // Extraer el token de la respuesta
    console.log(authToken)
  });

  describe('POST /mangas', () => {
    it('Should create a new manga', async () => {
      const manga = {
        title: 'manga22222test',
        cover_photo: 'C:\\Users\\Nicolas\\Desktop\\emojis\\dona2.png',
        category_id: '646a87c6932b9486ab93868e',
        author_id: '646a87c8932b9486ab938695',
        description: 'asdasdasdaaaaaaaaa'
      };

      const response = await api.post('/mangas')
        .set('Authorization', `Bearer ${authToken}`)
        .send(manga);

      expect(response.statusCode).to.equal(201);
    });
  });

  after(async () => {
    server.close();
  });
});
