'use strict'

const User = use('App/Models/User')

class UserController {

  async index({request,response}) {
    const user = await User.all({inclde: [{ all: true}]});
    return user;
  }

}

module.exports = UserController
