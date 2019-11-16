'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TasksSchema extends Schema {
  up() {
    this.create('tasks', (table) => {
      table.increments();
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users').onUpdate('cascade').onDelete('cascade');
      table.string('tarefa', 80).notNullable();
      table.date('data');
      table.time('hora', {
        precision: 4
      })
      table.timestamps()
    })
  }

  down() {
    this.drop('tasks')
  }
}

module.exports = TasksSchema
