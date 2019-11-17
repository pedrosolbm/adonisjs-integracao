'use strict'

const Task = use('App/Models/Task')

class TaskController {
  async index(request, response) {
    const task = await Task.all({
      inclde: [{
        all: true
      }]
    });
    return task;
  }

  async showTaskListForm({
    view
  }) {
    return view.render('/dashboard');
  }

  async createTask({
    request,
    session,
    response
  }) {

    //Valida os dados do formulario
    

    //criar a tarefa


    //mensagem de sucesso


    //mensagem de erro

  }

}

module.exports = TaskController
