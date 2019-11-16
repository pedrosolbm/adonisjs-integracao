'use strict'

const {
  validateAll
} = use('Validator');
const User = use('App/Models/User');
const randomString = require('random-string');
const Mail = use('Mail');

class RegisterController {
  showRegisterForm({
    view
  }) {
    return view.render('auth.register');
  }

  async register({
    request,
    session,
    response
  }) {
    //valida os dados do formulario
    const validation = await validateAll(request.all(), {
      username: 'required|unique:users,username',
      email: 'required|unique:users,email',
      nome: 'required',
      password: 'required'
    })
    if (validation.fails()) {
      session.withErrors(validation.messages()).flashExcept(['password']);
      return response.redirect('back');
    }

    //cria o usuario
    const user = await User.create({
      username: request.input('username'),
      nome: request.input('nome'),
      email: request.input('email'),
      password: request.input('password'),
      confirmation_token: randomString({
        lenght: 40
      })
    });
    //manda o email de confirmacao
    await Mail.send('auth.emails.confirm_email', user.toJSON(), message => {
      message.to(user.email)
        .from('daily@tasks.com')
        .subject('D. Tasks Cadastro');
    })

    //mensagem de sucesso no cadastro
    session.flash({
      notification: {
        type: 'success',
        message: 'Cadastro efetuado com sucesso, um email de confirmacao foi enviado, por favor confirme seu email'
      }
    });
    return response.redirect('back');
  }

  async confirmEmail({
    params,
    session,
    response
  }) {
    // pega os usuários com token de confirmação
    const user = await User.findBy('confirmation_token', params.token)

    // define o token pra nulo e a o campo is_active pra true
    user.confirmation_token = null;
    user.is_active = true;

    // salva os dados do usuario no banco de dados
    await user.save();

    // manda uma mensagem de sucesso
    session.flash({
      notification: {
        type: 'success',
        message: 'Seu email foi confirmado com sucesso!'
      }
    });

    return response.redirect('/login');

  }

}

module.exports = RegisterController
