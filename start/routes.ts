/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async ({ view }) => {
  return view.render("welcome");
});

Route.get("/login", async ({ view }) => {
  return view.render("login");
});

Route.post("/login", "UsersController.login").as("login");

Route.get("/register", async ({ view }) => {
  return view.render("register");
});

Route.post("/register", "UsersController.register").as("register");

Route.get("/kelas", "KelasController.index");
Route.get("/kelas/:id", "KelasController.show").as("kelas.detail");

Route.post("/kelas/create", "KelasController.store").as("kelas.store");
Route.post("/kelas/update/:id", "KelasController.update").as("kelas.update");
Route.get("/kelas/delete/:id", "KelasController.delete").as("kelas.delete");

Route.post("/siswa/create", "KelasController.store").as("siswa.store");
Route.post("/siswa/update/:id", "KelasController.update").as("siswa.update");
Route.get("/siswa/delete/:id", "KelasController.delete").as("siswa.delete");

Route.get("/Blog", "BlogsController.index");
Route.get("/Blog/:id", "BlogsController.show").as("Blogs.detail");

Route.post("/Blog/create", "BlogsController.store").as("Blogs.store");
Route.post("/Blog/update/:id", "BlogsController.update").as("Blogs.update");
Route.get("/Blog/delete/:id", "BlogsController.delete").as("Blogs.delete");

Route.get("/User", "UsersController.index");
Route.get("/User/:id", "UsersController.show").as("Users.detail");

Route.post("/User/create", "UsersController.store").as("Users.store");
Route.post("/User/update/:id", "UsersController.update").as("Users.update");
Route.get("/User/delete/:id", "UsersController.delete").as("Users.delete");

Route.get("/Siswabaru", "SiswabarusController.index");
Route.get("/Siswabaru/:id", "SiswabarusController.show").as("Siswabarus.detail");

Route.post("/Siswabaru/create", "SiswabarusController.store").as("Siswabarus.store");
Route.post("/Siswabaru/update/:id", "SiswabarusController.update").as("Siswabarus.update");
Route.get("/Siswabaru/delete/:id", "SiswabarusController.delete").as("Siswabarus.delete");
