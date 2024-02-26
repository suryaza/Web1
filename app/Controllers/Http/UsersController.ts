import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async index({ view, auth, session, response }: HttpContextContract) {
    const users = await User.query().where({ dihapus: 0 });
    const user = auth?.user?.toJSON();

    if (user?.role == !"siswa") {
      session.flash("notification_login", "Tidak Memiliki Akses");
      return response.redirect("/login");
    }
    const listUser = users.map((d, idx) => {
      return { ...d.toJSON(), idx: idx + 1 };
    });

    return view.render("user.index", {
      user: listUser,
      nama_admin: "Surya",
    });
  }
  public async store({ request, response }: HttpContextContract) {
    const { email, password, nama, umur, role } = request.all();

    await User.create({
      email,
      password,
      nama,
      umur,
      role,
      dihapus: 0,
    });

    return response.redirect("/User");
  }
  public async show({ view, params }: HttpContextContract) {
    const id = params.id;
    const user = await User.query()
      .where({ dihapus: 0 })
      .andWhere({ id })
      .firstOrFail();

    return view.render("user.show", { user });
  }
  public async update({
    request,
    response,
    params,
    session,
  }: HttpContextContract) {
    const { email, password, nama, umur, role } = request.all();
    const id = params.id;

    await User.query().where({ id }).update({
      email,
      password,
      nama,
      umur,
      role,
      dihapus: 0,
    });
    session.flash({ notifivation: "Data Berhasil Diupdate!" });

    return response.redirect(`/User`);
  }

  public async delete({ response, params, session }: HttpContextContract) {
    const id = params.id;

    await User.query().where({ id }).update({
      dihapus: 1,
    });
    session.flash({ notifivation: "Data Berhasil Diupdate!" });

    return response.redirect(`/User`);
  }
}
