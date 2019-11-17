'use strict'

class Authenticated {
  async handle({
    request,
    auth,
    response
  }, next) {
    try {
      await auth.check();
    } catch (error) {
      await next();
      return response.route('home');
    }
  }
}

module.exports = Authenticated
