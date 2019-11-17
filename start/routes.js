'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('home').as('home').middleware(['auth']);

Route.get('dashboard', 'TaskController.showTaskListForm').middleware(['visitor']); //requere as tarefas do usuários
Route.post('dashboard','TaskController.createTask');

Route.get('register', 'Auth/RegisterController.showRegisterForm').middleware(['authenticated']);
Route.post('register','Auth/RegisterController.register').as('register');

Route.get('register/confirm/:token','Auth/RegisterController.confirmEmail');

Route.get('login', 'Auth/LoginController.showLoginForm').middleware(['authenticated']);
Route.post('login', 'Auth/LoginController.login').as('login');

Route.get('logout', 'Auth/AuthenticatedController.logout');

Route.get('password/reset', 'Auth/PasswordResetController.showLinkRequestForm'); //formularo para solicitar nova senha
Route.post('password/email', 'Auth/PasswordResetController.sendResetLinkEmail');
Route.get('password/reset/:token','Auth/PasswordResetController.showResetForm'); //formulario para alterar a senha
Route.post('password/reset','Auth/PasswordResetController.reset');

//Rotas de teste
Route.get('user/index', 'UserController.index');
Route.get('list/index', 'TaskController.index');

Route.post('list/register','TaskController.createTask');