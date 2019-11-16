'use strict'

class TaskController {

    async showTaskListForm({view}){
        return view.render('/dashboard');
    }


}

module.exports = TaskController
