'use strict';

const User = use('App/Models/User');

class AuthController {

  //Para registrar um novo usuario
  async register({request}){

    //Dados que eu quero buscar da requisicao
    const data = request.only(['username', 'email', 'password']);

    const user = await User.create(data);

    return user;

  }

  //Para autenticar o usuario
  async authenticate({request, auth}){
      const {email, password } = request.all();

      const token = await auth.attempt(email, password);

      return token;

  }
}

module.exports = AuthController;
